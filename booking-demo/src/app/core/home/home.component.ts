import { Component, OnInit } from '@angular/core';
import { ConfirmBookingService } from '../confirm-booking.service';
import { NgForm } from '@angular/forms';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private confirmBookingService: ConfirmBookingService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  phoneNumber: string = "";

  navigateToBooking() {
    this.confirmBookingService.changePhoneNumber(this.phoneNumber);
    this.router.navigate(['booking']);
  }

}
