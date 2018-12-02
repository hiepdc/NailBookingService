import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { StylistsApi } from './models/stylistsApi';
import { ShiftApi } from './models/shiftApi';
import { CheckPhoneApi } from './models/checkPhoneApi';
import { CustomerApi } from './models/customerApi';
import { Customer } from './models/customer';
import { BookingApi } from './models/bookingApi';
import { StylistApi } from './models/stylistApi';
import { PinApi } from './models/pinApi';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class StylistService {
  private stylistURL = "http://localhost:8000/api/stylists";
  private shiftURL = "http://localhost:8000/api/shifts";
  private bookingURL = "http://localhost:8000/api/bookings";
  private customerURL = "http://localhost:8000/api/customers";

  //get all stylist from db
  getStylists(): Observable<StylistsApi> {
    return this.http.get<StylistsApi>(this.stylistURL).pipe(
      tap(receivedStylists => console.log(receivedStylists)),
      catchError(error => of(new StylistsApi()))
      //thêm property vào new StylistApi để biết lỗi
    );
  }

  getStylistById(stylistId: number): Observable<StylistApi> {
    const url = `${this.stylistURL}/${stylistId}`;
    return this.http.get<StylistApi>(url).pipe(
      tap(receivedStylist => {
        console.log(receivedStylist);
      }),
      catchError(error => of(new StylistApi()))
    );
  }

  //get shift which combine all stylist
  // getShiftByDefault(serviceId: string, date: string): Observable<ShiftApi> {
  //   const url = `${this.shiftURL}/default/${serviceId}/${date}`;
  //   return this.http.get<ShiftApi>(url).pipe(
  //     tap(receivedShifts => console.log(receivedShifts)),
  //     catchError(error => of(new ShiftApi()))
  //   );
  // }

  //get shift of one stylist
  // getShiftByStylist(serviceId: string, stylistId: number, date: string): Observable<ShiftApi> {
  //   const url = `${this.shiftURL}/stylist/${serviceId}/${stylistId}/${date}`;
  //   return this.http.get<ShiftApi>(url).pipe(
  //     tap(receivedShifts => console.log(receivedShifts)),
  //     catchError(error => of(new ShiftApi()))
  //   );
  // }

  //#region get shift by stylist
  getShiftByStylist(serviceId: string, stylistId: number, date: string): Observable<ShiftApi> {
    const url = `${this.shiftURL}/stylist/${serviceId}/${stylistId}/${date}`;
    return this.http.get<ShiftApi>(url).pipe(
      tap(receivedShifts => console.log(receivedShifts)),
      catchError(error => of(new ShiftApi()))
    );
  }
  //#endregion

  //check phone number of customer
  checkPhoneOfCustomer(body: any): Observable<any> {
    const url = `${this.bookingURL}/create-pin`;
    return this.http.post<CheckPhoneApi>(url, body, httpOptions).pipe(
      tap((checkPhoneApi) => console.log(checkPhoneApi)),
      catchError(error => of(new CheckPhoneApi()))
    );
  }

  checkPinCode(phoneNumber: string, pin_code: number): Observable<any> {
    const url = `${this.bookingURL}/verify-pin`;
    var body = {
      phone_number: phoneNumber,
      pin_code: pin_code
    };
    return this.http.post<PinApi>(url, body, httpOptions).pipe(
      tap((pinApi) => console.log(pinApi)),
      catchError(error => of(new PinApi()))
    );
  }

  //#region add new booking with stylist default
  // addNewBookingDefault(customerName: string, phoneNumber: number, date: string, start_time: number, service_id: number) {
  //   const url = `${this.bookingURL}/add-new-booking`;
  //   var body = {
  //     customer_name: customerName,
  //     phone_number: phoneNumber,
  //     date: date,
  //     start_time: start_time,
  //     service_id: service_id
  //   };
  //   return this.http.post<BookingApi>(url, body, httpOptions).pipe(
  //     tap((bookingApi: BookingApi) => console.log(bookingApi)),
  //     catchError(error => of(new BookingApi()))
  //   );
  // }
  //#endregion

  addNewBooking(phoneNumber: string,
    stylist_id: number, date: string,
    start_time: number, service_id: number, customerName: string) {
    const url = `${this.bookingURL}/add-new-booking`;
    var body = {
      phone_number: phoneNumber,
      stylist_id: stylist_id,
      date: date,
      start_time: start_time,
      service_id: service_id,
      customer_name: customerName,
    };
    return this.http.post<BookingApi>(url, body, httpOptions).pipe(
      tap((bookingApi: BookingApi) => console.log(bookingApi)),
      catchError(error => of(new BookingApi()))
    );
  }

  editBooking(phoneNumber: string,
    stylist_id: number, date: string,
    start_time: number, service_id: number) {
    const url = `${this.bookingURL}/edit-booking`;
    var body = {
      phone_number: phoneNumber,
      stylist_id: stylist_id,
      date: date,
      start_time: start_time,
      service_id: service_id
    };
    return this.http.post<BookingApi>(url, body, httpOptions).pipe(
      tap((bookingApi: BookingApi) => console.log(bookingApi)),
      catchError(error => of(new BookingApi()))
    );
  }

  deleteBooking(phoneNumber: number): Observable<BookingApi> {
    const url = `${this.bookingURL}/delete-booking/0${phoneNumber}`;
    return this.http.delete<BookingApi>(url, httpOptions).pipe(
      tap((bookingApi: BookingApi) => {
        console.log(`message = ${bookingApi.message}`);
        console.log(`Deleted movie with phone number = ${phoneNumber}`);
      }),
      catchError(error => of(new BookingApi()))
    )
  }

  addNewCustomer(customerName:string, phoneNumber:string): Observable<CustomerApi> {
    var body = {
      customer_name: customerName,
      phone_number: phoneNumber
    };
    return this.http.post<CustomerApi>(this.customerURL, body, httpOptions).pipe(
      tap((customerApi: CustomerApi) => console.log("customerApi: " + JSON.stringify(customerApi))),
      catchError(error => of(new CustomerApi()))
    );
  }

  getCustomerName(){
    
  }

  constructor(private http: HttpClient) { }

}
