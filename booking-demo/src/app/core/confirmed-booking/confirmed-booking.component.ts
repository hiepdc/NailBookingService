import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookingService } from '../booking.service';
import { ConfirmBookingService } from '../confirm-booking.service'

import { Stylist } from '../models/stylist';
import { BookingApi } from '../models/bookingApi';

@Component({
  selector: 'app-confirmed-booking',
  templateUrl: './confirmed-booking.component.html',
  styleUrls: ['./confirmed-booking.component.css']
})
export class ConfirmedBookingComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookingService: BookingService,
    //private loaderService:LoaderService,
    private confirmBookingService: ConfirmBookingService
  ) { }

  customerId: number;
  customerName: string;
  phoneNumber: string;
  selectedHour: string;
  selectedDate: string;
  stylistName: string;
  stylist: Stylist;

  ngOnInit() {
    // this.confirmBookingService.currentDate.subscribe(date => this.selectedDate = date);
    // this.confirmBookingService.currentHour.subscribe(hour => this.selectedHour = hour);
    // this.confirmBookingService.currentCustomerName.subscribe(customerName => this.customerName = customerName);
    // this.confirmBookingService.currentStylistName.subscribe(stylistName => this.stylistName = stylistName);
    this.getDataFromRoute();

  }

  getDataFromRoute(): void {
    this.phoneNumber = this.route.snapshot.paramMap.get('phone');
    this.customerName = this.route.snapshot.paramMap.get('customerName');
    this.selectedHour = this.route.snapshot.paramMap.get('hour');
    this.stylistName = this.route.snapshot.paramMap.get('stylistName');
    this.selectedDate = this.route.snapshot.paramMap.get('date');
    console.log("this.route.snapshot.paramMap: "+JSON.stringify(this.route.snapshot.paramMap));
    console.log("this.route.snapshot.paramMap:phone "+this.phoneNumber);

    // this.route.queryParams.subscribe(params => {
    //   this.phoneNumber = params['startdate'];
    //   console.log(this.phoneNumber); // Print the parameter to the console. 
    // });
  }

  backToHome() {
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
  }

  goBack(): void {
    this.addPhoneNumberToConfirmBookingService();
    this.location.back();
  }

  addPhoneNumberToConfirmBookingService() {
    this.confirmBookingService.changePhoneNumber(this.phoneNumber);
  }

  //#region function support
  changeStatusToString(status: string): string {
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

  formatDate(date: Date): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('-');
  }
  //#endregion
}
