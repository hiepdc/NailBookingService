import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings: Booking[];
  totalRec: number;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.getBookingsFromService();
  }

  getBookingsFromService() : void{
    this.bookingService.getBookings().subscribe(
      api => {
        this.bookings = api.data;
      }
    )
  }

  deleteBooking(id: number): void{
    this.bookingService.delelteBooking(id).subscribe(
      api => {this.getBookingsFromService();},
      error => {
        console.log(error);
        return;
      }
    )
  }
}
