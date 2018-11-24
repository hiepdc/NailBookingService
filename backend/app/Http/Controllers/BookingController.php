<?php

namespace App\Http\Controllers;

use App\Booking;
use App\Customer;
use App\Service;
use App\Shift;
use App\Stylist;
use App\SpeedSMSAPI;
use App\TwoFactorAPI;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function showBookingForm($phonenumber)
    {
        try {
            session(['phone_number' => $phonenumber]);
            return response()->success(session('phone_number'), 'Chào mừng đến với nailbookingservice');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function addNewBooking(Request $request)
    {
        try {
            //1.check booking is exist
            $booking = new Booking();
            if ($booking->getStatusBookedByPhonenumber($request->phone_number) > 0) {
                return response()->success(null, 'Bạn có chắc chắn muốn đổi lịch');
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
            // gửi tin nhắn
            $message = 'Cảm ơn anh/chị ' . $request->customer_name .
                ' đã đặt lịch vào lúc ' . $request->start_time .
                ' ngày ' . $request->date .
                ' cho gói dịch vụ ' . $service_name;
            ' được phục vụ bởi ' . $stylist_name .
            '. Mọi thắc mắc vui lòng liên hệ với chị chủ shop xinh đẹp : 0976420019.';
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
            $shift_id_arr = $shift->getShiftIDByStylistID($request->stylist_id, $request->date);
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
            if ($newBooking == 0) {
                return response()->success($newBooking, "không có sự thay dổi nào");
            }
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
            return response()->success($success, 'Bạn vừa xóa thành công lịch đặt');
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

    public function checkIn(Request $request)
    {
        try {
            //update coin
            $id = $request->id;
            $booking = Booking::find($id);
            if(!$booking){
                return response()->notFound("booking does not exist");
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

    public function checkOut(Request $request)
    {
        try {
            $id = $request->id;
            $booking = Booking::find($id);
            if(!$booking){
                return response()->notFound("booking does not exist");
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
                return response()->notFound("customer does not exist");
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

    public function cancelBooking()
    {
        //@@ AUTO chuy?n tr?ng thái t? booked sang cancel khi quá th?i di?m checking 5 phút
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
            $carbon = Carbon::now();
            $date = $carbon->format('Y-m-d');
            $booking = new Booking();
            $listBooking = $booking->listBooking($date);
            return response()->success($listBooking);
        } catch (Exception $e) {
            response()->exception($e->getMessage(), $e->getCode());
        }
    }

}