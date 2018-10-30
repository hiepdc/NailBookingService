<?php

namespace App\Http\Controllers;

use App\Booking;
use App\Customer;
use App\Service;
use App\Shift;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    //##3return true: kiểm tra nếu điên thoại đã có status booking là booked
    // if return false tạo session lưu số điện thoại

//    public function checkStatusBookedByPhonenumber($phonenumber)
//    {
//        $status = 'false';
//        $booking = new Booking();
//        $countStatusBooking = $booking->getStatusBookingByPhonenumber($phonenumber);
//        if (count($countStatusBooking) > 0)
//            $status = 'true';
//        return $status;
//    }
    public function showBookingForm($phonenumber){
        try{
            //$value = session('phone_number', $phonenumber);
            session(['phone_number' => $phonenumber]);
            return response()->success(session('phone_number'),'Chào mừng đến với nailbookingservice');
        }catch (Exception $e){
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }



    //###return list of stylist

    //return array các thời gian rảnh khi mà customer chỉ chọn dịch vụ và mặc định default stylist theo ngày
    public function getShiftDefault($serviceID, $date)
    {

    }

    //return array các thời gian rảnh khi mà customer chọn dịch vụ và stylist theo ngày
    public function getShiftDefaultByStylistID(Request $request)
    {

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
        return $shiftDefaultByStylistID;
    }

    //###fucntion đặt chỗ
    //@@@@@@@@@@@func1 kiểm tra sdt đúng chưa + gửi tin nhắn đến sdt customer
    //nếu sai trả về form thông tin đăng nhập nhập lại sdt
    // nếu đúng thì
    //func2:add data vào bảng booking
    //@@@@@@@@@@@@@@nếu mặc định stylist defaul
    //func3 : random stylist(tiêu chí còn nhiều giờ rảnh)
//func3: cập nhật status của shift of stylist trong hệ thống
    public function addNewBooking(Request $request)
    {
        //check booking is exist
        try {
            $booking = new Booking();
            if ($booking->getStatusBookedByPhonenumber($request->phone_number) > 0) {
                return response()->error('Bạn có chắc chắn muốn đổi lịch');
            }
            $coinUpdate = 10;
            //add customer
            $customer = new Customer();
            if ($customer->getCustomerByPhonenumber($request->phone_number) == 0) {
                $customer->addNewCustomer($request->customer_name, $request->phone_number);
            }
            // else {
            //                $customer->updateCoinCustomer($request->phone_number, $coinUpdate);
            //            }
            //add booking
            $shift = new Shift();
            $shift_id_arr = $shift->getShiftIDByStylistID($request->stylist_id, $request->date);
            $shift_id = $shift_id_arr->id;
            $service_id = $request->service_id;
            $customer_id_arr = $customer->getIDByPhonenumber($request->phone_number);
            $customer_id = $customer_id_arr->id;
            $start_time = $request->start_time;

            $newBooking = $booking->addNewBooking($shift_id, $service_id, $customer_id, $start_time);
            return response()->success($newBooking, 'Bạn đã đặt lịch thành công');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }

    }

    //trả về array dựa vào dịch vụ mà customer book
    function showStatus($status, $sizeOfTime)
    {
        $arr = explode(',', $status);
        sort($arr);
        $arr2chieu = array();

        for ($i = 0; $i <= sizeof($arr) - 1; $i++) {
            $arr1chieu = array();
            array_push($arr1chieu, $arr[$i]);

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

    function showDefaultStatus(Request $request) {
        try{
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
            return array_unique($defaultStatus);
        }catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    function getBookingTime($startTime, $sizeOfTime) {
        $bookedTime = $startTime;
        for ($i=1; $i<=$sizeOfTime-1; $i++) {
            $bookedTime = $bookedTime.",".($startTime+$i);
        }
        echo "bookedTime:".$bookedTime;
        return $bookedTime;
    }

    //cập nhật status của Shift trong hệ thống sau khi book lịch thành công
    public function updateStatusOfShiftAfterBooking($bookingID)
    {
        $booking = new Booking();
        $shiftID = $booking->shift_id;

    }

    //cập nhật status của Shift trong hệ thống sau khi book lịch thành công
    public function updateStatusOfShiftAfterDeleteBooking($bookingID)
    {

    }

    //kiểm tra sdt đúng chưa + gửi tin nhắn đến sdt customer

    //###fucntion random stylist###
    public function randomStylist($date)
    {


    }

    public function checkPhonenumber($phonenumber)
    {

    }

    public function sendMessageToCustomer($phonenumber)
    {

    }

    //###xóa booking điều hướng về trang chủ###
    public function deleteBooking($phonenumber)
    {
        try {
            $booking = new Booking();
            $success = $booking->deleteBookingByPhonenumber($phonenumber);
            if(!$success){
                return response()->error('bạn chưa có lịch đặt nào');
            }
            return response()->success($success, 'Bạn vừa xóa thành công lịch');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }

        //note updateStatusOfShift
    }

    //edit booking điều hướng về trang form chọn service

    public function editBooking(Request $request)
    {
        //update status khi xóa
        // update lịch
        // update status khi update
        try {
            $booking = new Booking();
            if ($booking->getStatusBookedByPhonenumber($request->phone_number) < 1) {
               // $dm = $request->phone_number;
                return response()->error('Bạn chưa đặt lịch, tạo một lịch mới');
            }

//            $booking = new Booking();
//            if ($booking->getStatusBookedByPhonenumber($request->phone_number) > 0) {
//                return response()->error('Bạn có chắc chắn muốn đổi lịch');
//            }
            $coinUpdate = 10;
            $customer = new Customer();
            //add booking
            $shift = new Shift();
            $shift_id_arr = $shift->getShiftIDByStylistID($request->stylist_id, $request->date);
            if(!$shift_id_arr){
             return response()->error('chưa có lịch');
         }
         $shift_id = $shift_id_arr->id;
         $service_id = $request->service_id;
         $customer_id_arr = $customer->getIDByPhonenumber($request->phone_number);
         $customer_id = $customer_id_arr->id;
         $start_time = $request->start_time;
           // update booking  note:cập nhật lịch cũ và mới
         $newBooking = $booking->updateBooking($shift_id, $service_id, $customer_id, $start_time);
         return response()->success($newBooking, 'Bạn đã dặt lại lịch thành công');
     } catch (Exception $e) {
        return response()->exception($e->getMessage(), $e->getCode());
    }
}

}