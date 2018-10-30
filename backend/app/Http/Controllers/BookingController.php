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
            //$value = session('phone_number', $phonenumber);
            session(['phone_number' => $phonenumber]);
            return response()->success(session('phone_number'), 'Chào mừng đến với nailbookingservice');
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

    public function updateShiftStatusAfterBooking($status, $startTime, $sizeOfTime)
    {
        $bookedTime = $this->getBookingTime($startTime, $sizeOfTime);
        $status = trim($status, ",");
        $bookedTime = trim($bookedTime, ",");
        $status = str_replace($bookedTime, "", $status);
        $status = str_replace(",,", ",", $status);
        return $status;
    }

//Status của Shift trong db có dạng string,
//bookedTime sẽ được xây dựng (dựa vào thời gian bắt đầu và khoảng thời gian) theo dạng string "n,n+1,n+2,..." Cái này bạn hoàn toàn xây dựng được. Dùng dấu "." để nối string trong php
//Ben tren minh da xay dung ham tinh bookedTime roi
//Từ string status của 1 shift và string bookedTime, trả về string cần được update thành nếu hủy thành công
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

    //###return list of stylist

    //return array các thời gian rảnh khi mà customer chọn dịch vụ và stylist theo ngày
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
        return response()->success($shiftDefaultByStylistID);
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

            $shift = new Shift();
            $shift_id_arr = $shift->getShiftIDByStylistID($request->stylist_id, $request->date);
            $shift_id = $shift_id_arr->id;
            $service_id = $request->service_id;
            $customer_id_arr = $customer->getIDByPhonenumber($request->phone_number);
            $customer_id = $customer_id_arr->id;
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

            //send message
            // nếu gửi tin nhắn thành công
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

//    //return array các thời gian rảnh khi mà customer chỉ chọn dịch vụ và mặc định default stylist theo ngày
//    public function getShiftDefault($serviceID, $date)
//    {
//
//    }
//
//    //cập nhật status của Shift trong hệ thống
//    public function updateStatusOfShift($bookingID)
//    {
//
//    }

    //kiểm tra sdt đúng chưa + gửi tin nhắn đến sdt customer

    //###fucntion random stylist###
//    public function randomeStylist($date)
//    {
//
//
//    }
//
//    public function checkPhonenumber($phonenumber)
//    {
//
//    }

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
            if (!$shift_id_arr) {
                return response()->error('chưa có lịch');
            }
            $shift_id = $shift_id_arr->id;
            $service_id = $request->service_id;
            $customer_id_arr = $customer->getIDByPhonenumber($request->phone_number);
            $customer_id = $customer_id_arr->id;
            $start_time = $request->start_time;
            // update booking  note:cập nhật lịch cũ và mới
            $newBooking = $booking->updateBooking($shift_id, $service_id, $customer_id, $start_time);

            //update status
            return response()->success($newBooking, 'Bạn đã dặt lại lịch thành công');
        } catch (Exception $e) {
            return response()->exception($e->getMessage(), $e->getCode());
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

}