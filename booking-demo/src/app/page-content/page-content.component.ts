import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Routes, Router } from '@angular/router';

import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import { ConfirmBookingService } from '../confirm-booking.service'
import { StylistService } from '../stylist.service';
import { LoaderService } from '../core';

import { Stylist } from '../models/stylist';
import { ShiftApi } from '../models/shiftApi';
import { DateTime } from '../models/dateTime';
import { CheckPhoneApi } from '../models/checkPhoneApi';
import { Customer } from '../models/customer';
import { CustomerApi } from '../models/customerApi';
import { BookingApi } from '../models/bookingApi';
import { PinApi } from '../models/pinApi';


@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css'
  //, '../../assets/css/swiper.min.css'
  ]
})
export class PageContentComponent implements OnInit {

  constructor(
    private stylistService: StylistService,
    public loaderService: LoaderService,
    private router: Router,
    private confirmBookingService: ConfirmBookingService) {
  }

  //#region initialize global variable
  //swiper
  public config1: SwiperConfigInterface = {
    slidesPerView: 6,
    slidesPerColumn: 4,
    spaceBetween: -10,
    scrollbar: true,
    navigation: true,
  };
  public config2: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  //radio button
  selectedService: string = "1";
  service: string = "Cơ Bản";

  //stylist
  stylist: Stylist;
  stylists: Stylist[];
  stylistId: number = -1;
  stylistName: string = "Châm Trâm Nail đã xếp stylist tốt nhất cho anh/chị";

  // shift
  shiftApi: ShiftApi;
  timeline: string[];
  status1: string[];
  statusSample1: string[] = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
    '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47',
    '48', '49', '50', '51'
  ];

  // date
  day_now = new Date();
  today = new Date();
  tomorrow = new Date(this.day_now.setDate(this.day_now.getDate() + 1));;
  afterTomorrow = new Date(this.day_now.setDate(this.day_now.getDate() + 1));
  weeksOfzhTW = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
  threeDay = ["Hôm nay", "Ngày mai", "Ngày kia"];
  selectedDate: string = this.formatDate(this.today);
  threeDate = [
    {
      "label": "Hôm nay",
      "day": this.weeksOfzhTW[this.today.getDay()],
      "date": this.today,
      "id": 0
    },
    {
      "label": "Ngày mai",
      "day": this.weeksOfzhTW[this.tomorrow.getDay()],
      "date": this.tomorrow,
      "id": 1
    },
    {
      "label": "Ngày kia",
      "day": this.weeksOfzhTW[this.afterTomorrow.getDay()],
      "date": this.afterTomorrow,
      "id": 2
    }
  ];

  //form
  //submitted = false;
  verifyPin: string;
  phoneNumber: string;
  checkPhoneApi: CheckPhoneApi = new CheckPhoneApi();

  //hour which choose "1","2","3"
  selectedHour: string = "";

  //modal
  displayVerifyPin: string = 'none';

  //customer
  customer: Customer = new Customer(0, "", "", 0);
  customerName: string;
  customerId: number;

  //pin
  inputPinNumber: string;
  checkPinApi: PinApi;
  verified: boolean = false;
  flagRemainingAttempts = false;
  remainingAttempts: number;
  //booking
  bookingApi: BookingApi;

  //change booking
  displayChangeBooking: string = 'none';

  //error message
  displayErrorMessage: string = 'none';

  //booking form 2
  displayBookingForm2: string = 'none';


  //#endregion


  ngOnInit() {
    this.confirmBookingService.currentPhoneNumber.subscribe(phoneNumber => this.phoneNumber = phoneNumber);
    this.getStylistFromService();
    this.getShiftByStylist(this.selectedService, this.stylistId, this.selectedDate, this.stylistName);
    
    //this.openBookingForm2();
    //this.openVerifyPin();
  }

  /*------  Put data to service ---------*/
  addDataToConfirmBookingService() {
    this.confirmBookingService.changeHour(this.selectedHour);
    this.confirmBookingService.changeDate(this.selectedDate);
    this.confirmBookingService.changeCustomerName(this.customerName);
    this.confirmBookingService.changeStylistName(this.stylistName);
  }

  /*------  Get data from db --------*/
  getStylistFromService(): void {
    this.stylistService.getStylists().subscribe(
      stylistsApi => this.stylists = stylistsApi.data
    );
  }

  getShiftByStylist(serviceId: string, stylistId: number, date: string, stylistName: string): void {
    this.stylistService.getShiftByStylist(serviceId, stylistId, date).subscribe(
      (shiftApi) => {
        this.timeline = shiftApi.data;
        this.stylistId = stylistId;
        this.stylistName = stylistName;
        console.log(`timeline default : ${this.timeline}`);
        console.log(`stylistId : ${this.stylistId}`);
        console.log(`stylistName : ${this.stylistName}`);
        if (Array.isArray(this.timeline) && this.timeline.length) {
          this.status1 = [];
          var j: number = 0;
          for (var i: number = 0; i < 52; i++) {
            var stringi = i.toString();
            if (stringi === this.timeline[j]) {
              this.status1[i] = stringi;
              j++;
            } else {
              this.status1[i] = "-1";
            }
          }
          console.log(`status1: ${this.status1}`);
        } else {
          for (var i: number = 0; i < 52; i++){
            this.status1[i] = "-1";
          }
          console.log(`status1: ${this.status1}`);
          console.log(`Lịch đã full`);
        }
      }
    );
  }

  getCustomerName(){

  }

  getPinCode() {
    var body = { phone_number: this.phoneNumber };
    this.stylistService.checkPhoneOfCustomer(body).subscribe(
      (checkPhoneApi: CheckPhoneApi) => {
        console.log("checkPhoneApi message: " + this.checkPhoneApi.message);
        this.verified = false;
        this.flagRemainingAttempts = false;
      }
    );

  }

  onSubmitBooking(form: NgForm): void {
    console.log(form.value);
    this.stylistService.checkPhoneOfCustomer(form.value).subscribe(
      (checkPhoneApi: CheckPhoneApi) => {
        this.checkPhoneApi = checkPhoneApi; console.log("checkPhoneApi message" + this.checkPhoneApi.message);
        if (this.checkPhoneApi.data.check == false) {
          //khách hàng đã có trong hệ thống
          this.customerName = this.checkPhoneApi.data.customer.customer_name;
          this.customerId = this.checkPhoneApi.data.customer.id;
          //1.thực hiện add booking với khách hàng đã có trong hệ thống
          this.stylistService.addNewBooking(this.phoneNumber,
            this.stylistId, this.selectedDate, +this.selectedHour,
            +this.selectedService, this.customerName).subscribe(
              (bookingApi: BookingApi) => {
                this.bookingApi = bookingApi;
                if (this.bookingApi.data === null) {
                  //hiển thị dialog thông báo Anh/chị có chắc chắn muốn đổi lịch không
                  this.openChangeBooking();
                } else {
                  //1.close modal change booking
                  this.closeChangeBooking();
                  //2.send data to service
                  this.addDataToConfirmBookingService();
                  this.router.navigate(['booking', this.phoneNumber]);
                }
              },
              error => { console.log(error); return }
            );
        } else {
          //khách hàng chưa có trong hệ thống
          //1.hiển thị modal verifyCode
          console.log(this.displayVerifyPin);
          this.openVerifyPin();
        }
      },
      error => { console.log(error); return }
    );
  }

  onSubmitCheckPin() {
    // console.log(form.value);
    this.stylistService.checkPinCode(this.phoneNumber, +this.inputPinNumber).subscribe(
      (pinApi: PinApi) => {
        this.checkPinApi = pinApi; console.log("check pin api: " + JSON.stringify(this.checkPinApi));
        if (this.checkPinApi.data.verified == true) {
          //1. thông báo check thành công
          //2. hiển thị form booking có thêm tên
          this.closeVerifyPin();
          this.openBookingForm2();
        } else {
          if (this.checkPinApi.data.remainingAttempts == 0) {
            //1. thông báo bạn đã điền sai pin code quá nhiều làn. vui lòng đợi sau 10phut
            this.flagRemainingAttempts = false;
            this.verified = true;
            console.log("current verified: " + this.verified);
            //thông báo thử bằng snackbar xem
          } else {
            //1. thông báo số lần có thể điền sai còn lại
            this.verified = false;
            this.flagRemainingAttempts = true;
            this.remainingAttempts = this.checkPinApi.data.remainingAttempts;
            console.log("current remainingAttempts: " + this.remainingAttempts);
          }
        }
      },
      error => { console.log(error); return }
    )
  }

  onSubmitChangeBooking() {
    //edit booking rồi chuyển sang confirm booking
    this.stylistService.editBooking(this.phoneNumber,
      this.stylistId, this.selectedDate, +this.selectedHour,
      +this.selectedService).subscribe(
        (bookingApi: BookingApi) => {
          this.bookingApi = bookingApi;
          if (this.bookingApi.success == true) {
            //2.send data to service
            this.addDataToConfirmBookingService();
            this.router.navigate(['booking', this.phoneNumber]);
          } else {
            this.openErrorMessage();
          }
        },
        error => { console.log(error); return }
      );
  }

  onSubmitBookingForm2() {
    //1. tạo customer mới
    // this.stylistService.addNewCustomer(this.customerName, this.phoneNumber).subscribe(
    //   (customerApi: CustomerApi) => {
    //     console.log(customerApi.data);
    //   },
    //   error => { console.log(error); return }
    // );

    this.stylistService.addNewBooking(this.phoneNumber,
      this.stylistId, this.selectedDate, +this.selectedHour,
      +this.selectedService, this.customerName).subscribe(
        (bookingApi: BookingApi) => {
          this.bookingApi = bookingApi;
          if (this.bookingApi.data === null) {
            //hiển thị dialog thông báo Anh/chị có chắc chắn muốn đổi lịch không
            this.openChangeBooking();
          } else {
            //1.close BookingForm2
            this.closeBookingForm2();
            //2.send data to service
            this.addDataToConfirmBookingService();
            this.router.navigate(['booking', this.phoneNumber]);
          }
        },
        error => { console.log(error); return }
      );

  }

  selectDate(dateTime: DateTime): void {
    //this.dateTime = dateTime;
    this.selectedDate = this.formatDate(dateTime.date);
    this.getShiftByStylist(this.selectedService, this.stylistId, this.selectedDate, this.stylistName);
    console.log("selectedDate" + this.selectedDate);
    this.selectedHour = "";
  }

  click_hour(hour: string): void {
    this.selectedHour = hour;
    console.log(`selected hour: ${this.selectedHour}`);
  }

  clickService(event: any) {
    this.selectedService = event.target.value;
    this.service = this.changeSelectedServiceToServiceName(this.selectedService);
    console.log("selectedService: " + this.selectedService);
    this.getShiftByStylist(this.selectedService, this.stylistId, this.selectedDate, this.stylistName);
  }
  
  openVerifyPin() {
    this.displayVerifyPin = 'block';
  }

  closeVerifyPin() {
    this.displayVerifyPin = 'none';
  }

  openChangeBooking() {
    this.displayChangeBooking = 'block';
  }

  closeChangeBooking() {
    this.displayChangeBooking = 'none';
  }

  openErrorMessage() {
    this.displayErrorMessage = 'block';
  }

  closeErrorMessage() {
    this.displayErrorMessage = 'none';
  }

  openBookingForm2() {
    this.displayBookingForm2 = 'block';
  }

  closeBookingForm2() {
    this.displayBookingForm2 = 'none';
  }

  // onSubmitBooking(form: NgForm): void {
  //   console.log(form.value);
  //   this.stylistService.checkPhoneOfCustomer(form.value).subscribe(
  //     pinApi => { this.pinApi = pinApi; console.log(this.pinApi.success); }
  //   );

  // if (this.pinApi.success === true) {
  //   if (this.stylistId === -1) {
  //     //addd default
  //     this.stylistService.addNewBookingDefault(
  //       this.pinApi.data.customer_name, +this.phoneNumber,
  //       this.selectedDate, +this.selectedHour, this.selectedService).subscribe(
  //         bookingApi => {
  //           this.bookingApi = bookingApi; console.log(`booking api: ${JSON.stringify(this.bookingApi)}`);
  //           if (this.bookingApi.success == "true") {
  //             this.submitted = true;
  //             this.verifyCode = true;
  //           } else {
  //             this.submitted = false;
  //           }
  //         });
  //   } else {
  //     //add 
  //     this.stylistService.addNewBooking(
  //       this.pinApi.data.customer_name, +this.phoneNumber,
  //       this.stylistId, this.selectedDate, +this.selectedHour, this.selectedService).subscribe(
  //         bookingApi => {
  //           this.bookingApi = bookingApi; console.log(`booking api: ${JSON.stringify(this.bookingApi)}`);
  //           if (this.bookingApi.success == "true") {
  //             this.submitted = true;
  //             this.verifyCode = true;
  //           } else {
  //             this.submitted = false;
  //           }
  //         });
  //   }
  // } else {
  //   //gửi verify code
  //   //bookings/verify-pin
  //   //verified, pin, phone, remaining
  //   //neu verified == true
  //   //thif chuyen qua for nhap ten
  //   this.verifyCode = false;
  // }
  // }

  //#region function support

  changeStatusToStartTime(status: string): string {
    //case bắt đâu từ 1 có thể thêm 1 ô trống nữa
    switch (status) {
      case '0': return "9:00"; case '1': return "9:15"; case '2': return "9:30"; case '3': return "9:45";
      case '4': return "10:00"; case '5': return "10:15"; case '6': return "10:30"; case '7': return "10:45";
      case '8': return "11:00"; case '9': return "11:15"; case '10': return "11:30"; case '11': return "11:45";
      case '12': return "12:00"; case '13': return "12:15"; case '14': return "12:30"; case '15': return "12:45";
      case '16': return "13:00"; case '17': return "13:15"; case '18': return "13:30"; case '19': return "13:45";
      case '20': return "14:00"; case '21': return "14:15"; case '22': return "14:30"; case '23': return "14:45";
      case '24': return "15:00"; case '25': return "15:15"; case '26': return "15:30"; case '27': return "15:45";
      case '28': return "16:00"; case '29': return "16:15"; case '30': return "16:30"; case '31': return "16:45";
      case '32': return "17:00"; case '33': return "17:15"; case '34': return "17:30"; case '35': return "17:45";
      case '36': return "18:00"; case '37': return "18:15"; case '38': return "18:30"; case '39': return "18:45";
      case '40': return "19:00"; case '41': return "19:15"; case '42': return "19:30"; case '43': return "19:45";
      case '44': return "20:00"; case '45': return "20:15"; case '46': return "20:30"; case '47': return "20:45";
      case '48': return "21:00"; case '49': return "21:15"; case '50': return "21:30"; case '51': return "21:45";
    }
  }

  //transform date by format yyyy-MM-dd
  formatDate(date: Date): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  changeSelectedServiceToServiceName(selectedService: string): string {
    switch (selectedService) {
      case "1": return "Cơ Bản";
      case "2": return "Nâng Cao";
    }
  }
  //#endregion

}
