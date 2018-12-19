import { Component, OnInit } from '@angular/core';
import { ConfirmBookingService } from '../confirm-booking.service';
import { NgForm } from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { LoaderService } from '../http-handle';

import { BookingApi } from '../models/bookingApi';
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
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.confirmBookingService.currentNotifiDeleteBooking.subscribe(
      data => {
        if (data === "block") {
          this.displayNotifiDeleteBooking = "block";
        } else {
          this.displayNotifiDeleteBooking = "none";
        }
      }
    );
  }

  phoneNumber: string = "";
  displayChangeBooking: string = 'none';
  displayNotifiDeleteBooking: string = 'none';

  bookingApi: BookingApi;

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

  deleteBooking() {
    //1. delete booking 
    this.bookingService.deleteBooking(+this.phoneNumber).subscribe(
      (bookingApi: BookingApi) => {
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
    this.displayChangeBooking = 'none';
    this.displayNotifiDeleteBooking = 'block';
  }

  changeBooking() {
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
