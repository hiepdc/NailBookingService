import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ConfirmBookingService {

  // private messageSource = new BehaviorSubject('default message');
  private selectedHour = new BehaviorSubject('');
  private selectedDate = new BehaviorSubject('');
  private stylistName = new BehaviorSubject('');
  private phoneNumber = new BehaviorSubject('');
  private customerName = new BehaviorSubject('');
  private notifiDeleteBooking = new BehaviorSubject('');
  //currentMessage = this.messageSource.asObservable();
  currentHour = this.selectedHour.asObservable();
  currentDate = this.selectedDate.asObservable();
  currentStylistName = this.stylistName.asObservable();
  currentPhoneNumber = this.phoneNumber.asObservable();
  currentCustomerName = this.customerName.asObservable();
  currentNotifiDeleteBooking = this.notifiDeleteBooking.asObservable();

  constructor() { }

  changeHour(hour: string) {
    this.selectedHour.next(hour)
  }
  changeDate(date: string) {
    this.selectedDate.next(date)
  }
  changeStylistName(stylistName: string) {
    this.stylistName.next(stylistName)
  }
  changePhoneNumber(phoneNumber: string) {
    this.phoneNumber.next(phoneNumber)
  }
  changeCustomerName(customerName: string) {
    this.customerName.next(customerName)
  }

  changeNotifiDeleteBooking(notifiDeleteBooking: string){
    this.notifiDeleteBooking.next(notifiDeleteBooking);
  }

}