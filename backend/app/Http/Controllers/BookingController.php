<?php

namespace App\Http\Controllers;

use App\Booking;
use App\Customer;
use App\Service;
use App\Shift;
use App\Stylist;
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

    function showStatus($status, $sizeOfTime)
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
        //check booking is exist
        try {
            $booking = new Booking();
            if ($booking->getStatusBookedByPhonenumber($request->phone_number) > 0) {
                return response()->error('Bạn có chắc chắn muốn đổi lịch');
            }
            //add customer
            $customer = new Customer();
            if ($customer->getCustomerByPhonenumber($request->phone_number) == 0) {
                $customer->addNewCustomer($request->customer_name, $request->phone_number);
            }

            $shift = new Shift();
            $shift_id_arr = $shift->getShiftIDByStylistID($request->stylist_id, $request->date);
            $shift_id = $shift_id_arr->id;
            $service_id = $request->service_id;
            $customer_id = $customer->getIDByPhonenumber($request->phone_number);
            $start_time = $request->start_time;
            //mesage to client
            $service_name_arr = Service::find($request->service_id)
                ->select('service_name')
                ->first();
            $service_name = $service_name_arr->service_name;
            $stylist_name_arr = Stylist::find($request->stylist_id)
                ->select('stylist_name')
                ->first();
            $stylist_name = $stylist_name_arr->stylist_name;

            // nếu gửi tin nhắn thành công
            $message = 'Cảm ơn chị ' . $request->customer_name .
                ' đã đặt lịch vào ' . $request->start_time .
                ' cho gói dịch vụ ' . $service_name .
                ' được phục vụ bởi ' . $stylist_name;
            // '. Mọi thắc mắc vui lòng liên hệ với chị chủ shop xinh đẹp : 0976420019.';
            // try{
            //  $sentMessage = $this->sendMessageToCustomer($message);
            // }catch(Exception $e){
            //  return response()->error('Chị vui lòng kiểm tra lại số điện thoại');
            // return response()->exception($e->getMessage(), $e->getCode());
            // }

            // $sentMessage = $this->sendMessageToCustomer($message);

            //add new booking
            $newBooking = $booking->addNewBooking($shift_id, $service_id, $customer_id, $start_time);

            //update status of shift
            $oldStatus = $shift->getStatusByStylistID($request->stylist_id, $request->date);
            $sts = $oldStatus->status;
            $service = new Service();
            $sizeOfTime = $service->getTimeService($request->service_id) * 4;
            $status = $this->updateShiftStatusAfterBooking($sts, $request->start_time, $sizeOfTime);
            $shift->updateStatusByStylistID($request->stylist_id, $request->date, $status);

            return response()->success($newBooking, 'Bạn đã đặt lịch thành công');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }

    }

    public function editBooking(Request $request)
    {
        try {
            $booking = new Booking();
            if ($booking->getStatusBookedByPhonenumber($request->phone_number) ==0) {
                return response()->error('Bạn chưa đặt lịch, tạo một lịch mới');
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
            $sizeOfTime = $service->getTimeService($oldService_id)*4;
           // $shiftID = $detailBooking->shift_id;
            $newStatus = $this->updateShiftStatusAfterDeleteBooking($oldStatus, $oldStartTime, $sizeOfTime);
            $updateSizeOfTime = $service->getTimeService($updateService_id)*4;
            $updateStatus = $this->updateShiftStatusAfterBooking($newStatus, $updateStart_time, $updateSizeOfTime);
            $shift->updateStatusByShiftID($updateShift_id, $updateStatus);
            // update booking  note:cập nhật lịch cũ và mới
            $newBooking = $booking->updateBooking($updateShift_id, $updateService_id, $updateCustomer_id, $updateStart_time);
            if ($newBooking ==0) {
                return response()->success($newBooking, "không có sự thay dổi nào");
            }
            return response()->success($newBooking,'Bạn đã đặt lại lịch thành công');
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
            $oldStatus = $detailBooking->status;
            $startTime = $detailBooking->start_time;
            $service = new Service();
            $sizeOfTime = $service->getTimeService($detailBooking->service_id)*4;
            $shiftID = $detailBooking->shift_id;
            $success = $booking->deleteBookingByPhonenumber($phonenumber);
            if (!$success) {
                return response()->error('Bạn chưa có lịch đặt nào');
            }
            $newstatus = $this->updateShiftStatusAfterDeleteBooking($oldStatus, $startTime, $sizeOfTime);
            $shift->updateStatusByShiftID($shiftID, $newstatus);
            return response()->success($detailBooking, 'Bạn vừa xóa thành công lịch đặt');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }

        //note updateStatusOfShift
    }

    public function getAvailableBookingTimeWithStylist(Request $request)
    {
        try {
            $serviceID = $request->service_id;
            $stylistID = $request->stylist_id;
            $date = $request->date;
            $service = new Service();
            //sizeoftime bội số của 15'
            $sizeOfTime = $service->getTimeService($serviceID) * 4;
            $shift = new Shift();
            $status = $shift->getStatusByStylistID($stylistID, $date);
            $sts = $status->status;
            $shiftDefaultByStylistID = $this->showStatus($sts, $sizeOfTime);
            return response()->success($shiftDefaultByStylistID);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function getAvailableBookingTimeWithoutStylist(Request $request)
    {
        try {
            $date = $request->date;
            $serviceID = $request->service_id;
            $service = new Service();
            $sizeOfTime = $service->getTimeService($serviceID);
            $shift = new Shift();
            $allStatus = $shift->getStatusByDate($date);
            $defaultStatus = array();
            $returnStatus = array();

            foreach ($allStatus as $key => $value) {
                $arr01 = array();
                //$arr01 = $this->showStatus((string)$value, $sizeOfTime);
                $myObject = get_object_vars($value);
                $arr01 = $this->showStatus(implode(",", $myObject), $sizeOfTime * 4);
                foreach ($arr01 as $key2 => $value2) {
                    array_push($defaultStatus, $value2);
                }
            }
            return response()->success(array_unique($defaultStatus));
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

    //tuần 8
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
        //echo "bookedTime:".$bookedTime;
        return $bookedTime;
    }

    public function sendMessageToCustomer($mes)
    {
        $basic = new \Nexmo\Client\Credentials\Basic('dcf3a319', '2Xp71hhgAblZWEvq');
        try {
            $client = new \Nexmo\Client($basic);
            $message = $client->message()->send([
                'to' => '84976420019',
                'from' => '84369546356',
                'text' => ' ' . $mes,
            ]);
            return response()->success($mes, 'Bạn đã đặt lịch thành công');
        } catch (Exception $e) {
            return response()->error('Chị vui lòng kiểm tra lại số điện thoại');
        }


    }

    public function show($id)
    {
        // $showStylistByID = Stylist::with(['shifts'])->find($id);
        try {
            $booking = Booking::find($id);
            if (!$booking) {
                return response()->error("booking does not exist");
            }
            return response()->success($booking);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
        //return  $showStylistByID;
//        return new StylistResource($showStylistByID);
    }

    public function index()
    {
        try {
            $bookings = Booking::all();
            return response()->success($bookings);
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }

    }

    //trả về array các shift mà shift đó có thể được book vào khoảng thời gian bookingTime
    public function getShiftContainBookingTime($startTime, $sizeOfTime, $date)
    {
        $bookedTime = $this->getBookingTime($startTime, $sizeOfTime);
        $shiftList = App\Shift::all();
        $myShiftList = array();
        foreach ($shiftList as $key => $value) {
            # code...
            if (!strpos($value->status, $bookedTime)) {
                //$myShiftList += array($value->shift_id=>strlen($value->status));
                array_push($myShiftList, $value);
            }
        }
        return $myShiftList;
        //###return list of stylist
    }

    public function randomShift($startTime, $sizeOfTime, $date)
    {
        $shiftList = $this->getShiftContainBookingTime($startTime, $sizeOfTime, $date);
        $myShiftList = array();
        $myArray = array();
        foreach ($shiftList as $key => $value) {
            # code...
            $myArray += array($value => strlen($value->status));
        }
        sort($myArray);
        return array_key_first($myArray);
    }
}