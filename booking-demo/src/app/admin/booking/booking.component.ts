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
  // button disable
  checkInDisable: boolean = true;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.getBookingsFromService();
  }

  getBookingsFromService() : void{
    this.bookingService.getBookings().subscribe(
      api => {
        this.bookings = api.data;
        for(let booking of this.bookings){
          if(booking.status == 'booked'){
            booking.checkInDisable = false;
            booking.checkOutDisbale = true;
            booking.deleteDisable = false;
          }else if(booking.status == 'pending'){
            booking.checkInDisable = true;
            booking.checkOutDisbale = false;
            booking.deleteDisable = true;
          }else{
            booking.checkInDisable = true;
            booking.checkOutDisbale = true;
            booking.deleteDisable = false;
          }
        }
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

  checkIn(id: number): void {
    this.bookingService.checkIn(id).subscribe(
      api => {
        this.getBookingsFromService();
      },
      error => {
        console.log(error);
        return;
      }
    )
  }

  checkOut(id: number): void {
    this.bookingService.checkOut(id).subscribe(
      api => {
        this.getBookingsFromService();
      },
      error => {
        console.log(error);
        return;
      }
    )
  }
}
