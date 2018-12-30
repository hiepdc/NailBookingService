import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ConfirmBookingService } from '../confirm-booking.service';
import { NgForm } from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { LoaderService } from '../http-handle';
import { ToastsManager } from 'ng2-toastr';

import { BookingApi } from '../models/bookingApi';
import { API } from '../models/API';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private confirmBookingService: ConfirmBookingService,
    private router: Router,
    private bookingService: BookingService,
    public loaderService: LoaderService,
    public toastr: ToastsManager,
    public _vcr: ViewContainerRef) { this.toastr.setRootViewContainerRef(_vcr) }

  ngOnInit() {
    this.confirmBookingService.currentNotifiDeleteBooking.subscribe(
      data => {
        if (data === "block") {
          //this.toastr.success('Hủy Lịch thành công');
          //this.displayNotifiDeleteBooking = "block";
          this.checkDeleteBooking = true;
        } else {
          this.displayNotifiDeleteBooking = "none";
          this.checkDeleteBooking = false;
        }
      }
    );
    console.log(this.checkDeleteBooking)
    if (this.checkDeleteBooking) {
      this.toastr.success('Hủy Lịch thành công');
    }
    this.confirmBookingService.changeNotifiDeleteBooking("none");
  }

  phoneNumber: string = "";
  displayChangeBooking: string = 'none';
  displayNotifiDeleteBooking: string = 'none';
  checkDeleteBooking: boolean = false;
  bookingApi: BookingApi;

  submitFormBooking() {
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

}
