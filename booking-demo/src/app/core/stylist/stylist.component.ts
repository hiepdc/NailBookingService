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
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: true
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
  index = 0;
  indexstr:string="";
  //stylist
  stylist: Stylist;
  stylists: Stylist[];
  stylistId:number=1;
  displayStylist:boolean=true;
  information:string="Nhanh nhẹn, xinh xắn, khóe léo";

  phoneNumber:string="";
  bookingApi: BookingApi;

  displayChangeBooking: string = 'none';
  displayNotifiDeleteBooking: string = 'none';

  ngOnInit() {
    this.getStylistFromService();
    this.confirmBookingService.currentPhoneNumber.subscribe(phoneNumber => this.phoneNumber = phoneNumber);
    this.confirmBookingService.currentStylistId.subscribe(stylistId => this.indexstr = stylistId);
    if(this.indexstr.length > 0){
      this.stylistId = +this.indexstr;
      this.index = +this.indexstr-1
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
    //check exist booking, check customer
    this.checkExistCustomer();
    this.checkExistBooking();
    //gưi stylist id và sdt sang booking

  }

  checkExistBooking() {
    this.bookingService.checkExistBooking(this.phoneNumber).subscribe(
      (bookingApi: BookingApi) => {
        this.bookingApi = bookingApi;
        if (this.bookingApi.data === null) {
          //chua co booking chuyen den trang booking
          this.confirmBookingService.changePhoneNumber(this.phoneNumber);
          this.confirmBookingService.changeStylistId(this.stylistId+"");
          this.router.navigate(['booking']);
        } else {
          //hiển thị dialog thông báo Anh/chị doi lich hay huy lich
          this.openChangeBooking();
        }
      },
      error => { console.log(error); return }
    );
  }

  checkExistCustomer(){
    this.bookingService.checkExistCustomer(this.phoneNumber).subscribe(
      (API: API) => {
        // this.bookingApi = bookingApi;
        if (API.data === null) {
          //chua co customer
          this.confirmBookingService.changeCustomerName("");
        } else {
          //có customer
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
    this.confirmBookingService.changePhoneNumber("");
    this.confirmBookingService.changeDate("");
    this.confirmBookingService.changeHour("");
    this.confirmBookingService.changeStylistName("");
    this.confirmBookingService.changeCustomerName("");
    //3.display modal notifi
    // this.toastr.success('Hủy Lịch thành công');
    this.closeChangeBooking();
    this.displayNotifiDeleteBooking = 'none';
  }

  changeBooking() {
    //1. delete booking 
    this.bookingService.deleteBooking(+this.phoneNumber).subscribe(
      (bookingApi: BookingApi) => {
      },
      error => { console.log(error); return }
    )
    this.confirmBookingService.changePhoneNumber(this.phoneNumber);
    this.closeChangeBooking();
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
}
