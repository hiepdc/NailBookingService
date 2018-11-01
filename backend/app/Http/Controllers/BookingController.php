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

    public function showBookingForm($phonenumber){
        try{
            //$value = session('phone_number', $phonenumber);
            session(['phone_number' => $phonenumber]);
            return response()->success(session('phone_number'),'Chào mừng đến với nailbookingservice');
        }catch (Exception $e){
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    //trả về string các khung thời gian đã booked dựa vào thời gian bắt đầu và khung thời gian của dịch vụ
    function getBookingTime($startTime, $sizeOfTime) {
        $bookedTime = $startTime;
        for ($i=1; $i<=$sizeOfTime-1; $i++) {
            $bookedTime = $bookedTime.",".($startTime+$i);
        }
        return $bookedTime;
    }

    //Long01
    //trả về array các shift mà shift đó có thể được book vào khoảng thời gian bookingTime
    function getShiftContainBookingTime($startTime, $sizeOfTime, $date) {
        $bookedTime = $this->getBookingTime($startTime, $sizeOfTime);
        $shiftList = App\Shift::all();
        $myShiftList = array();
        foreach ($shiftList as $key => $value) {
            # code...
            if(!strpos($value->status,$bookedTime)) {
                //$myShiftList += array($value->shift_id=>strlen($value->status));
                array_push($myShiftList, $value);
            }
        }
        return $myShiftList;

    }

    //
    public function randomShift($startTime, $sizeOfTime, $date){
        $shiftList = $this->getShiftContainBookingTime($startTime, $sizeOfTime, $date);
        $myShiftList = array();
        $myArray = array();
        foreach ($shiftList as $key => $value) {
            # code...
            $myArray += array($value=>strlen($value->status));
        }
        sort($myArray);
        return array_key_first($myArray);
    }



    //trả về array các khung thời gian mà có thể chọn làm thời gian bắt đầu để book dựa vào trạng thái thời gian hiện tại và khung thời gian của dịch vụ
    //Đổi tên thành getAvailableBookingTime
    function getAvailableBookingTime($status, $sizeOfTime){
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

    //return array các thời gian rảnh khi mà customer chọn dịch vụ và stylist theo ngày
    //Đổi tên thành getAvailableBookingTimeWithStylist
    public function getAvailableBookingTimeWithStylist(Request $request){

        $serviceID = $request->service_id;
        $stylistID = $request->stylist_id;
        $date = $request->date;
        $service = new Service();
        //sizeoftime bội số của 15'
        $sizeOfTime = $service->getTimeService($serviceID) * 4;
        $shift = new Shift();
        $status = $shift->getStatusByStylistID($stylistID, $date);
        $sts = $status->status;
        $shiftDefaultByStylistID = $this->getAvailableBookingTime($sts, $sizeOfTime);
        return $shiftDefaultByStylistID;
    }

    //return array các thời gian rảnh khi mà customer chỉ chọn dịch vụ và nhưng ko chọn stylist theo ngày
    //Đổi tên thành getAvailableBookingTimeWithoutStylist
    function getAvailableBookingTimeWithoutStylist(Request $request) {
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
                //$arr01 = $this->getAvailableBookingTime((string)$value, $sizeOfTime);
                $myObject = get_object_vars($value);
                $arr01 = $this->getAvailableBookingTime(implode(",", $myObject), $sizeOfTime * 4);
                foreach ($arr01 as $key2 => $value2) {
                    array_push($defaultStatus, $value2);
                }
            }
            return array_unique($defaultStatus);
        }catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function addNewBooking(Request $request){
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







    //cập nhật status của Shift trong hệ thống sau khi book lịch thành công
    public function updateStatusOfShiftAfterBooking($bookingID){


    }

    //cập nhật status của Shift trong hệ thống sau khi book lịch thành công
    public function updateStatusOfShiftAfterDeleteBooking($bookingID){

    }

    public function checkPhonenumber($phonenumber){

    }

    public function sendMessageToCustomer($phonenumber){

    }

    //###xóa booking điều hướng về trang chủ###
    public function deleteBooking($phonenumber){
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

    public function editBooking(Request $request){
        //update status khi xóa
        // update lịch
        // update status khi update
        try {
            $booking = new Booking();
            if ($booking->getStatusBookedByPhonenumber($request->phone_number) < 1) {
               // $dm = $request->phone_number;
                return response()->error('Bạn chưa đặt lịch, tạo một lịch mới');
            }

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
            $newBooking = $booking->updateBooking($shift_id, $service_id, 
            $customer_id, $start_time);
            return response()->success($newBooking, 'Bạn đã dặt lại lịch thành công');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

}