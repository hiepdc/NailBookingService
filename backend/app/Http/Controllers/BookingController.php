<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookingController extends Controller
{
    //##3return true: kiểm tra nếu điên thoại đã có status booking là booked
    // if return false tạo session lưu số điện thoại
    public function checkStatusBookingByPhonenumber($phonenumber)
    {

    }

    //###return list of stylist
    public function getStylists()
    {

    }

    //return array các thời gian rảnh khi mà customer chỉ chọn dịch vụ và mặc định default stylist theo ngày
    public function getShiftDefault($serviceID, $stylistID, $date)
    {

    }

    //return array các thời gian rảnh khi mà customer chọn dịch vụ và stylist theo ngày
    public function getShiftDefaultByStylistID($serviceID, $stylistID, $date)
    {

    }

    //###fucntion đặt chỗ
    //@@@@@@@@@@@func1 kiểm tra sdt đúng chưa + gửi tin nhắn đến sdt customer
    //nếu sai trả về form thông tin đăng nhập nhập lại sdt
    // nếu đúng thì
    //func2:add data vào bảng booking
    //@@@@@@@@@@@@@@nếu mặc định stylist defaul
    //func3 : random stylist(tiêu chí còn nhiều giờ rảnh)
//func3: cập nhật status của shift of stylist trong hệ thống
    public function addNewBooking(Request $request){

    }
    //kiểm tra sdt đúng chưa + gửi tin nhắn đến sdt customer

    //###fucntion random stylist###
    public function randomeStylist($date){


    }
    public function checkPhonenumber($phonenumber){

    }

    public function sendMessageToCustomer($phonenumber){

    }

    //cập nhật status của Shift trong hệ thống
    public function updateStatusOfShift($bookingID){

    }
    //###xóa booking điều hướng về trang chủ###
    public function deleteBooking($customerID){

    }
    //edit booking điều hướng về trang form chọn service

    public function editBooking($cutsomerID){

    }
}