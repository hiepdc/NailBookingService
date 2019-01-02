import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Routes, Router } from '@angular/router';

import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import { ConfirmBookingService } from '../confirm-booking.service'
import { BookingService } from '../booking.service';
import { LoaderService } from '../http-handle';
import { ToastsManager } from 'ng2-toastr';

import { Stylist } from '../models/stylist';
import { BookingApi } from '../models/bookingApi';
import { API } from '../models/API';

@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {

  index = 0;
  indexstr:string="";
  //stylist
  stylist: Stylist;
  stylists: Stylist[];
  stylistId:number=-1;
  displayStylist:boolean=true;
  information:string="Châm Trâm Nail sẽ lựa chọn stylist tốt nhất cho chị";

  phoneNumber:string="";
  bookingApi: BookingApi;

  displayChangeBooking: string = 'none';
  displayNotifiDeleteBooking: string = 'none';

  bookingServiceName: string;
  bookingStylistName: string;
  bookingDate: string;
  bookingTime: string;

  constructor(
    private bookingService: BookingService,
    public loaderService: LoaderService,
    private router: Router,
    private confirmBookingService: ConfirmBookingService,
    public toastr: ToastsManager,
    public _vcr: ViewContainerRef) {this.toastr.setRootViewContainerRef(_vcr) }

  //swiper
  public config1: SwiperConfigInterface = {
    slidesPerView: 5,
    spaceBetween: 0,
    navigation: true,
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // centeredSlides: true
  };
  // public config2: SwiperConfigInterface = {
  //   slidesPerView: 4,
  //   spaceBetween: 0,
  //   navigation: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  // };

  ngOnInit() {
    this.getStylistFromService();
    this.confirmBookingService.currentPhoneNumber.subscribe(phoneNumber => this.phoneNumber = phoneNumber);
    this.confirmBookingService.currentStylistId.subscribe(stylistId => this.indexstr = stylistId);
    if(this.indexstr.length > 0){
      this.stylistId = +this.indexstr;
      this.index = +this.indexstr
    }
  }
  getStylistFromService(): void {
    this.bookingService.getStylists().subscribe(
      stylistsApi => this.stylists = stylistsApi.data
    );
  }
  
  displayInformation(stylistId:number, information:string){
    this.stylistId = stylistId;
    this.displayStylist = true;
    this.information = information;
  }

  submitFormBooking(){
    this.checkExistCustomer();
    this.checkExistBooking();
  }

  checkExistBooking() {
    this.bookingService.checkExistBooking(this.phoneNumber).subscribe(
      (bookingApi: BookingApi) => {
        this.bookingApi = bookingApi;
        if (this.bookingApi.data === null) {
          //chua co booking chuyen den trang booking
          this.confirmBookingService.changePhoneNumber(this.phoneNumber);
          this.router.navigate(['booking']);
        } else {
          //hiển thị dialog thông báo Anh/chị doi lich hay huy lich
          this.bookingServiceName =  this.bookingApi.data.service_name;
          this.bookingDate = this.formatDateToDDMMYYYY(this.bookingApi.data.date) ;
          this.bookingStylistName = this.bookingApi.data.stylist_name;
          this.bookingTime = this.changeStatusToStartTime(this.bookingApi.data.start_time+"");
          this.openChangeBooking();
        }
      },
      error => { console.log(error); return }
    );
  }

  checkExistCustomer() {
    this.bookingService.checkExistCustomer(this.phoneNumber).subscribe(
      (API: API) => {
        // this.bookingApi = bookingApi;
        if (API.data === null) {
          //chua co customer
          this.confirmBookingService.changeExistCustomer(false);
          this.confirmBookingService.changeCustomerName("");
        } else {
          //có customer
          this.confirmBookingService.changeExistCustomer(true);
          this.confirmBookingService.changeCustomerName(API.data.customer_name);
        }
      },
      error => { console.log(error); return }
    );
  }

  deleteBooking() {
    //1. delete booking 
    this.bookingService.deleteBooking(+this.phoneNumber).subscribe(
      (bookingApi: BookingApi) => {
        this.toastr.success('Hủy Lịch thành công');
      },
      error => { console.log(error); return }
    )
    //2. set variable 
    this.setValueAfterDeleteBooking()

    //3.display modal notifi
    // this.toastr.success('Hủy Lịch thành công');
    this.displayChangeBooking = 'none';
    this.displayNotifiDeleteBooking = 'none';
  }

  setValueAfterDeleteBooking() {
    this.confirmBookingService.changePhoneNumber("");
    this.confirmBookingService.changeDate("");
    this.confirmBookingService.changeHour("");
    this.confirmBookingService.changeStylistName("");
    this.confirmBookingService.changeCustomerName("");
    this.confirmBookingService.changeStylistId("");
    this.confirmBookingService.changeNotifiDeleteBooking("none");
  }

  changeBooking() {
    //1. delete booking 
    this.bookingService.deleteBooking(+this.phoneNumber).subscribe(
      (bookingApi: BookingApi) => {
      },
      error => { console.log(error); return }
    )
    this.confirmBookingService.changePhoneNumber(this.phoneNumber);
    this.router.navigate(['booking']);
  }

  openChangeBooking() {
    this.displayChangeBooking = 'block';
  }

  closeChangeBooking() {
    this.displayChangeBooking = 'none';
  }

  openNotifiDeleteBooking() {
    this.displayNotifiDeleteBooking = 'block';
  }

  closeNotifiDeleteBooking() {
    this.displayNotifiDeleteBooking = 'none';
    this.confirmBookingService.changeNotifiDeleteBooking("none")
  }

  
  formatDateToDDMMYYYY(date: string) {
    var split = date.split('-');
    return [split[2], split[1], split[0]].join('-');
  }

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
}