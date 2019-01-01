<?php

namespace App\Http\Controllers;

use App\Booking;
use App\Customer;
use App\Feedback;
use App\Notification;
use App\Service;
use App\Shift;
use App\Stylist;
use App\SpeedSMSAPI;
use App\TwoFactorAPI;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Pusher\Pusher;

class BookingController extends Controller
{
    function getAvailableBookingTimeWithStylist($serviceID, $stylistID, $date)
    {
        try {
            $service = new Service();
            //sizeoftime bội số của 15'
            $sizeOfTime = $service->getTimeService($serviceID) * 4;
            $shift = new Shift();
            $status = $shift->getStatusByStylistID($stylistID, $date);
            $sts = $status->status;
            $shiftDefaultByStylistID = $this->getAvailableBookingTime($sts, $sizeOfTime);
            return $shiftDefaultByStylistID;
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    function getAvailableBookingTime($status, $sizeOfTime)
    {
        $arr = explode(',', $status);
        sort($arr);
        $arr2chieu = array();

        for ($i = 0; $i <= sizeof($arr) - 1; $i++) {
            $arr1chieu = array();
            array_push($arr1chieu, $arr[$i]);
            //@long trường hợp ko có giá trị nào
            //@long xóa dấu ","
            while ($i < sizeof($arr) - 1 && $arr[$i + 1] == $arr[$i] + 1) {
                array_push($arr1chieu, $arr[$i + 1]);
                $i++;
            }
            array_push($arr2chieu, $arr1chieu);
            unset($arr1chieu);
        }


        $statusArr = array();
        foreach ($arr2chieu as $key => $value) {
            if (sizeof($value) >= $sizeOfTime) {
                for ($i = 0; $i <= sizeof($value) - $sizeOfTime; $i++) {
                    array_push($statusArr, $value[$i]);
                }
            }
        }
        return $statusArr;
    }


    public function addNewBooking(Request $request)
    {
        try {
            //1.1 check booking is exist
            $booking = new Booking();
            if ($booking->getStatusBookedByPhonenumber($request->phone_number) > 0) {
                return response()->success(null, 'Bạn có chắc chắn muốn đổi lịch');
            }
            //1.2 check available shift
            if($request->stylist_id != -1){
                $availableShift = $this->getAvailableBookingTimeWithStylist($request->service_id, $request->stylist_id, $request->date);
                $stylistBooked = 1;
                for($i =0 ; $i< count($availableShift); $i++){
                    if($availableShift[$i] == $request->start_time){
                        $stylistBooked = 0;
                    }
                }
                if($stylistBooked == 1){
                    return response()->success(1, 'Thời gian làm việc của stylist này đã được đặt, bạn vui lòng chọn thời gian hoặc stylist khác.');
                }
            }
            //add customer
            $customer = new Customer();
            //2.kiểm tra khách hàng đã có trong hệ thống chưa
            if ($customer->getCustomerByPhonenumber($request->phone_number) == 0) {
                $customer->addNewCustomer($request->customer_name, $request->phone_number);
            }
            $shift = new Shift();
            $service_id = $request->service_id;
            $customer_id = $customer->getIDByPhonenumber($request->phone_number);
            $start_time = $request->start_time;
            //3.check có chọn stylist hay không
            if ($request->stylist_id == -1) {
                //nếu ko chọn thì random
                $shift = $this->randomShift($start_time, $service_id, $request->date);
                $shift_id = $shift->id;
                $stylist_id = $shift->stylist_id;
            } else {
                $shift_id_arr = $shift->getShiftIDByStylistID($request->stylist_id, $request->date);
                $shift_id = $shift_id_arr->id;
                $stylist_id = $request->stylist_id;
            }
            //4.mesage to customer
            $service_name_arr = Service::find($request->service_id)
                                       ->select('service_name')
                                       ->first();
            $service_name = $service_name_arr->service_name;
            $stylist_name_arr = Stylist::find($stylist_id);
            $stylist_name = $stylist_name_arr->stylist_name;
            $message = 'Cảm ơn anh/chị ' . $request->customer_name .
                       ' đã đặt lịch vào lúc ' . $this->convertTime($request->start_time) .
                       ' ngày ' . $request->date .
                       ' cho gói dịch vụ ' . $service_name .
                       ' được phục vụ bởi ' . $stylist_name .
                       '. Mọi thắc mắc vui lòng liên hệ với chị chủ shop (0976420019).';
            // gửi tin nhắn to customer
            $sentMessage = $this->sendMessageToCustomer($message, $request->phone_number);
            //5.add new booking
            $newBooking = $booking->addNewBooking($shift_id, $service_id, $customer_id, $start_time);
            //6.update status of shift
            $oldStatus = $shift->getStatusByStylistID($stylist_id, $request->date);
            $sts = $oldStatus->status;
            $service = new Service();
            $sizeOfTime = $service->getTimeService($request->service_id) * 4;
            $status = $this->updateShiftStatusAfterBooking($sts, $request->start_time, $sizeOfTime);
            $shift->updateStatusByStylistID($stylist_id, $request->date, $status);
            //7.add notification
            $notification = new Notification();
            $notification->addNotificaion($newBooking->id, 'new');
            $data = $this->sendMessageToAdmin();
            return response()->success($newBooking, 'Bạn đã đặt lịch thành công');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }
    public function editBooking(Request $request)
    {
        try {
            $booking = new Booking();
            if ($booking->getStatusBookedByPhonenumber($request->phone_number) == 0) {
                return response()->success(null, 'Bạn chưa đặt lịch, tạo một lịch mới');
            }
            $customer = new Customer();
            $shift = new Shift();
            //3.check có chọn stylist hay không
            if ($request->stylist_id == -1) {
                //nếu ko chọn thì random
                $shift = $this->randomShift($request->start_time, $request->service_id, $request->date);
//                $shift_id = $shift->id;
                $stylist_id = $shift->stylist_id;
            } else {
                $shift_id_arr = $shift->getShiftIDByStylistID($request->stylist_id, $request->date);
//                $shift_id = $shift_id_arr->id;
                $stylist_id = $request->stylist_id;
            }
            $shift_id_arr = $shift->getShiftIDByStylistID($stylist_id, $request->date);
            $updateShift_id = $shift_id_arr->id;
            $updateService_id = $request->service_id;
            $updateCustomer_id = $customer->getIDByPhonenumber($request->phone_number);
            $updateStart_time = $request->start_time;
            //update status
            $detailBooking = $booking->getDetailBookingByPhonenumber($request->phone_number);
            $oldStatus = $detailBooking->status;
            $oldStartTime = $detailBooking->start_time;
            $service = new Service();
            $oldService_id = $detailBooking->service_id;
            $sizeOfTime = $service->getTimeService($oldService_id) * 4;
            $newStatus = $this->updateShiftStatusAfterDeleteBooking($oldStatus, $oldStartTime, $sizeOfTime);
            $updateSizeOfTime = $service->getTimeService($updateService_id) * 4;
            $updateStatus = $this->updateShiftStatusAfterBooking($newStatus, $updateStart_time, $updateSizeOfTime);
            $shift->updateStatusByShiftID($updateShift_id, $updateStatus);
            // update booking  note:cập nhật lịch cũ và mới
            $newBooking = $booking->updateBooking($updateShift_id, $updateService_id, $updateCustomer_id, $updateStart_time);
            $service_name_arr = Service::find($updateService_id)
                                       ->select('service_name')
                                       ->first();
            $service_name = $service_name_arr->service_name;
            $stylist_name_arr = Stylist::find($stylist_id);
            $stylist_name = $stylist_name_arr->stylist_name;
            $message = 'Cảm ơn anh/chị ' . $request->customer_name .
                       ' đã đổi lại lịch đặt vào lúc ' . $this->convertTime($request->start_time) .
                       ' ngày ' . $request->date .
                       ' cho gói dịch vụ ' . $service_name .
                       ' được phục vụ bởi ' . $stylist_name .
                       '. Mọi thắc mắc vui lòng liên hệ với chị chủ shop (0976420019).';

            $sentMessage = $this->sendMessageToCustomer($message, $request->phone_number);

            //add notification
            $notification = new Notification();
            $notification->addNotificaion($newBooking->id, 'edit');
            $this->sendMessageToAdmin();
            return response()->success($newBooking, 'Bạn đã đặt lại lịch thành công');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function deleteBooking($phonenumber)
    {
        try {
            $booking = new Booking();
            $shift = new Shift();
            $detailBooking = $booking->getDetailBookingByPhonenumber($phonenumber);
            if (!$detailBooking) {
                return response()->success(null, 'Bạn chưa có lịch đặt nào.');
            }
            $oldStatus = $detailBooking->status;
            $startTime = $detailBooking->start_time;
            $service = new Service();
            $sizeOfTime = $service->getTimeService($detailBooking->service_id) * 4;
            $shiftID = $detailBooking->shift_id;
            $success = $booking->deleteBookingByPhonenumber($phonenumber);
            $newstatus = $this->updateShiftStatusAfterDeleteBooking($oldStatus, $startTime, $sizeOfTime);
            $shift->updateStatusByShiftID($shiftID, $newstatus);

            //add notification
            $notificaiton = new Notification();
            $notificaiton->addNotificaion($detailBooking->id, 'delete');
            $this->sendMessageToAdmin();
            return response()->success($detailBooking, 'Bạn vừa xóa thành công lịch đặt');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function updateShiftStatusAfterBooking($status, $startTime, $sizeOfTime)
    {
        $bookedTime = $this->getBookingTime($startTime, $sizeOfTime);
        $status = trim($status, ",");
        $bookedTime = trim($bookedTime, ",");
        $status = str_replace($bookedTime, "", $status);
        $status = str_replace(",,", ",", $status);
        $status = trim($status, ",");
        return $status;
    }

    public function updateShiftStatusAfterDeleteBooking($status, $startTime, $sizeOfTime)
    {
        $bookedTime = $this->getBookingTime($startTime, $sizeOfTime);
        $status = trim($status, ",");
        $bookedTime = trim($bookedTime, ",");
        $status = $status . "," . $bookedTime;
        $arr = explode(',', $status);
        sort($arr);
        return implode(",", $arr);
    }

    public function getBookingTime($startTime, $sizeOfTime)
    {
        $bookedTime = $startTime;
        for ($i = 1; $i <= $sizeOfTime - 1; $i++) {
            $bookedTime = $bookedTime . "," . ($startTime + $i);
        }
        return $bookedTime;
    }

    function sendMessageToCustomer($mes, $phone_number)
    {
        try {
            $smsAPI = new SpeedSMSAPI("ELbKeZ2tcowwByKJDv0Tm0ZBBw51-cSh");
            $phones = array();
            $phones[] = $phone_number;
            // $phones = ["8491xxxxx", "8498xxxxxx"];
            /* tối đa 100 số cho 1 lần gọi API */
            $content = $mes;
            $type = 2;
            $sender = "nailbookingservice";
            $response = $smsAPI->sendSMS($phones, $content, $type, $sender);
            return $response;
        } catch (Exception $e) {
            return response()->error('Chị vui lòng kiểm tra lại số điện thoại');
        }
    }

    function createPIN(Request $request)
    {
        try {
            $phone = $request->phone_number;
            $content = 'Mã xác nhận của bạn là: {pin_code}';
            $appId = 'RopBbVFdrExlpDOhli_JPkEyE58fJkAT';
            $twoFA = new TwoFactorAPI("ELbKeZ2tcowwByKJDv0Tm0ZBBw51-cSh");
            $customer = new Customer();
            //khách hàng đã có trong hệ thống
            if ($customer->getCustomerByPhonenumber($phone) != 0) {
                $availableCustomer = $customer->getCustomer($phone);
                $result = [
                    'check' => false,
                    'customer' => $availableCustomer
                ];
                return response()->success($result, 'Khách hàng đã có trong hệ thống');
            }
            $twoFA->pinCreate($phone, $content, $appId);
            $result = [
                'check' => true,
            ];
           // return response()->success($result,'Đã gửi mã pin đến cho khách hàng');
            return response()->success($result, 'Đã gửi mã pin đến cho khách hàng');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }

    }

    public function verifyPIN(Request $request)
    {
        try {
            $phone = $request->phone_number;
            $pinCode = $request->pin_code;
            $appId = "RopBbVFdrExlpDOhli_JPkEyE58fJkAT";
            $twoFA = new TwoFactorAPI("ELbKeZ2tcowwByKJDv0Tm0ZBBw51-cSh");
            $result = $twoFA->pinVerify($phone, $pinCode, $appId);
            $status = $result['status'];
            if ($status == 'error') {
                return response()->success(null, 'Mã xác nhận đã hết hạn');
            }
            $verified = $result['data'];
            return response()->success($verified, 'Bạn vừa nhập mã pin thành công');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }
    public function show($id)
    {
        try {
            $booking = Booking::find($id);
            if (!$booking) {
                return response()->notFound("booking does not exist");
            }
            return response()->success($booking);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function index()
    {
        try {
            $bookings = Booking::paginate(10);
            return response()->success($bookings);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }

    }

    //Tra ve array cac shift ma shift do co the duoc book vao khoang thoi gian bookingTime
    public function getShiftContainBookingTime($startTime, $sizeOfTime, $date)
    {
        $bookedTime = $this->getBookingTime($startTime, $sizeOfTime);
        $shiftList = array();
        $shiftList = Shift::where("date", $date)->get();
//        $shiftList = DB::table('shifts')
//            ->join('stylists', 'stylists.id', '=', 'shifts.stylist_id')
//            ->whereNull('stylists.deleted_at')
//            ->where('shifts.date', '=', $date)
//            ->get();
        $availableShiftList = array();
        foreach ($shiftList as $key => $value) {
            # code...
            if (strpos($value->status, $bookedTime) !== false) {
                //$availableShiftList += array($value->shift_id=>strlen($value->status));
                array_push($availableShiftList, $value);
            }
        }
        return $availableShiftList;

    }

    //Tra ve Shift ma random theo tieu chi con nhieu thoi gian ranh
    public function randomShift($startTime, $serviceID, $date)
    {
        $service = new Service();
        $sizeOfTime = $service->getTimeService($serviceID) * 4;
        $availableShiftList = $this->getShiftContainBookingTime($startTime,
            $sizeOfTime, $date);
        $myArray = array();

        $statusLengthArray = array();
        foreach ($availableShiftList as $key => $value) {
            array_push($statusLengthArray,
                strlen($value->status) - strlen(str_replace(",", "", $value->status)));
        }
        $maxLength = max($statusLengthArray);

        foreach ($availableShiftList as $key => $value) {
            if ($maxLength === strlen($value->status) -
                strlen(str_replace(",", "", $value->status))) {
                return $value;
            }
        }
    }

    public function checkIn($id)
    {
        try {
            //update coin
//            $id = $request->id;
            $booking = Booking::find($id);
            if(!$booking){
                return response()->notFound("booking does not exist");
            }
            $status = $booking->status;
            if($status != 'booked'){
                return response()->success(null, 'Booking đã được check-in');
            }
            $customerId = $booking->customer_id;
            $service_id = $booking->service_id;
            $service = Service::find($service_id);
            $coinService = $service->coin_service;
            $customer = new Customer();
            $customer->updateCoinCustomer($customerId, $coinService);

           // update status
            $checkInBooking = $booking->checkIn($id);
            return response()->success($checkInBooking, 'Bạn đã check in thành công');
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function checkOut($id)
    {
        try {
//            $id = $request->id;
            $booking = Booking::find($id);
            if(!$booking){
                return response()->notFound("booking does not exist");
            }
            $status = $booking->status;
            if($status == 'booked' || $status == 'finished'){
                return response()->success(null, 'Lịch đặt đã được check-out hoặc chưa được check-in');
            }
            $booking = new Booking();
            $checkOutBooking = $booking->checkOut($id);
            return response()->success($checkOutBooking, 'Bạn đã check-out thành công');
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function useCoin(Request $request)
    {
        try {
            $id = $request->id;
            $booking = Booking::find($id);
            $customerId = $booking['customer_id'];
            $customerFinded = Customer::find($customerId);
            if(!$customerFinded){
                return response()->notFound("booking does not exist");
            }
            $minCoin = 100;
            $coin = $customerFinded->coin;
            if($coin<$minCoin){
                return response()->success(null, "Bạn không có đủ coin để sử dụng, hẹn lần sau.");
            }
            $customer = new Customer();
            $exitCoin = $customer->useCoinCustomer($customerId, $minCoin);
            return response()->success($exitCoin, 'Bạn vừa sử dụng 100 coin.');
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function searchBooking(Request $request)
    {
        try {
            $booking = new Booking();
            $date = $request->date;
            $stylistName = $request->stylist_name;
            $status = $request->status;
            $result = $booking->searchBooking($date, $stylistName, $status);
            return response()->success($result);
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * @return mixed
     */
    public function listBooking()
    {
        try {
            $booking = new Booking();
            $listBooking = $booking->listBooking();
            return response()->success($listBooking);
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function getBookingToday(){
        try {
//            date_default_timezone_set("Asia/Ho_Chi_Minh");
            $carbon = Carbon::now();
            $date = $carbon->format('Y-m-d');
            $booking = new Booking();
            $listBooking = $booking->getBookingToday($date);
            return response()->success($listBooking);
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }
    }

    function convertTime($index){
        $carbon = new Carbon('8:45:00');
        $allTime = array();
        foreach(range(0, 47) as $value){
            $eachTime = $carbon->addMinutes(15)->format('H:i:s');
            $allTime[] =$eachTime;
        }
        $realTime = $allTime[$index];
        return $realTime;
    }

    function sendMessageToAdmin(){
        $options = array(
            'cluster' => 'ap1',
            'useTLS' => true
        );
        $pusher = new Pusher(
            'b3a0673fc31ffb66e50a',
            '81df77c6c01ad381c45c',
            '657001',
            $options
        );
        $notification = new Notification();
        //number unread
        $count = $notification->countUnread();
        $data['countUnread'] = $count;
        //list notification
        $listLastNotitification = $notification->getAllNotification();
        $data['notifications'] = $listLastNotitification;
        $pusher->trigger('Notify', 'send-message', $data);
        return $data;
    }

    public function checkExistBooking(Request $request){
        try {
            $booking = new Booking();
            $result = $booking->getExistBooking($request->phone_number);
            return response()->success($result);
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }

    }

    public function destroy($id)
    {
        try {
            $deletebyBooking = Booking::find($id);
            if (!$deletebyBooking) {
                return response()->notFound("booking does not exist");
            }
            if($deletebyBooking->status != 'booked') {
                $deletebyBooking->delete();
            }else{
                $customer = Customer::find($deletebyBooking->customer_id);
                $this->deleteBooking($customer->phone_number);
            }
            return response()->success($deletebyBooking);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function bookingOnMonthStatistic(Request $request)
    {
        try {
            $time = $request->time;

            for($i=1; $i<=12; $i++) {
                if($i<10) $month = '-0'.$i;
                else $month = '-'.$i;
                $shiftOnMonth[$i] = DB::table('shifts')->select('id')
                                      ->where('date','like', $time.$month.'%')
                                      ->get();
                $shiftOnMonthArr[$i] = $shiftOnMonth[$i]->map(function ($item, $key) {
                    return $item->id;
                });

                $morningMonth[$i] = DB::table('bookings')->select('id')
                                      ->whereIn('shift_id', $shiftOnMonthArr[$i])
                                      ->whereBetween('start_time', [0,23])
                                        ->whereNull('deleted_at')
                                      ->count();

                $eveningMonth[$i] = DB::table('bookings')->select('id')
                                      ->whereIn('shift_id', $shiftOnMonthArr[$i])
                                      ->whereBetween('start_time', [24,47])
                    ->whereNull('deleted_at')
                                      ->count();

                $wholeMonth[$i] = $morningMonth[$i] + $eveningMonth[$i];

                $result[$i] = array($wholeMonth[$i], $morningMonth[$i], $eveningMonth[$i]);
            }
            $results = [
                'morning' => $morningMonth,
                'evening' => $eveningMonth,
                'date' => $wholeMonth
            ];
            return response()->success((array)$results);
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }
    }

//    public function bookingOnMonthStatistic(Request $request)
//    {
//        try {
//            $time = $request->time;
//            $result = array();
//            for($i=1; $i<=12; $i++) {
//                if($i<10) $month = '-0'.$i;
//                else $month = '-'.$i;
//                $shiftOnMonth[$i] = DB::table('shifts')->select('id')
//                                      ->where('date','like', $time.$month.'%')
//                                      ->get();
//                $shiftOnMonthArr[$i] = $shiftOnMonth[$i]->map(function ($item, $key) {
//                    return $item->id;
//                });
//
//                $morningMonth[$i] = DB::table('bookings')->select('id')
//                                      ->whereIn('shift_id', $shiftOnMonthArr[$i])
//                                      ->whereBetween('start_time', [0,23])
//                                      ->count();
//
//                $eveningMonth[$i] = DB::table('bookings')->select('id')
//                                      ->whereIn('shift_id', $shiftOnMonthArr[$i])
//                                      ->whereBetween('start_time', [24,47])
//                                      ->count();
//
//                $wholeMonth[$i] = $morningMonth[$i] + $eveningMonth[$i];
//
//                $result[$i] = array($wholeMonth[$i], $morningMonth[$i], $eveningMonth[$i]);
//            }
//            return response()->success($result);
//        } catch (Exception $e) {
//            response()->exception($e->getMessage(), $e->getCode());
//        }
//    }
    //== Tham so 'time' co dang 'year-month'
    public function bookingOnWeekStatistic(Request $request)
    {
        try {
            $time = $request->time;

            $shiftOnWeek[1] = DB::table('shifts')->select('id')
                                ->where('date','like', $time.'%')
                                ->where('date' ,'>=', $time.'-01')
                                ->where('date' ,'<=', $time.'-07')
                                ->get();
            $shiftOnWeek[2] = DB::table('shifts')->select('id')
                                ->where('date','like', $time.'%')
                                ->where('date' ,'>=', $time.'-08')
                                ->where('date' ,'<=', $time.'-014')
                                ->get();
            $shiftOnWeek[3] = DB::table('shifts')->select('id')
                                ->where('date','like', $time.'%')
                                ->where('date' ,'>=', $time.'-15')
                                ->where('date' ,'<=', $time.'-21')
                                ->get();
            $shiftOnWeek[4] = DB::table('shifts')->select('id')
                                ->where('date','like', $time.'%')
                                ->where('date' ,'>=', $time.'-22')
                                ->where('date' ,'<=', $time.'-31')
                                ->get();

            for($i=1; $i<=4; $i++) {

                $shiftOnWeekArr[$i] = $shiftOnWeek[$i]->map(function ($item, $key) {
                    return $item->id;
                });

                $morningWeek[$i] = DB::table('bookings')->select('id')
                                     ->whereIn('shift_id', $shiftOnWeekArr[$i])
                                     ->whereBetween('start_time', [0,23])
                    ->whereNull('deleted_at')
                                     ->count();

                $eveningWeek[$i] = DB::table('bookings')->select('id')
                                     ->whereIn('shift_id', $shiftOnWeekArr[$i])
                                     ->whereBetween('start_time', [24,47])
                    ->whereNull('deleted_at')
                                     ->count();

                $wholeWeek[$i] = $morningWeek[$i] + $eveningWeek[$i];
                $result[$i] = array($wholeWeek[$i], $morningWeek[$i], $eveningWeek[$i]);
            }
            $results = [
                'morning' => $morningWeek,
                'evening' => $eveningWeek,
                'date' => $wholeWeek
            ];
            return response()->success((array)$results);
//            return response()->success($result);
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function getCountTotal(){
        $countBookings = Booking::count();
        $countCustomers = Customer::count();
        $countStylists = Stylist::count();
        $result = [];
        $result['bookings'] = $countBookings;
        $result['customers'] = $countCustomers;
        $result['stylists'] = $countStylists;
        return response()->success($result);
    }

}