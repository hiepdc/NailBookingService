import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StylistApi } from './models/stylistApi';
import { ShiftApi} from './models/shiftApi';
import { PinApi } from './models/pinApi';
import { Customer } from './models/customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class StylistService {
  private stylistURL = "http://localhost:8000/api/stylists";
  private shiftURL = "http://localhost:8000/api/shifts";
  private bookingURL = "http://localhost:8000/api/bookings";

  //get all stylist from db
  getStylists(): Observable<StylistApi> {
    return this.http.get<StylistApi>(this.stylistURL).pipe(
      tap(receivedStylists => console.log(receivedStylists)),
      catchError(error => of(new StylistApi()))
      //thêm property vào new StylistApi để biết lỗi
    );
  }

  //get shift which combine all stylist
  getShiftByDefault(serviceId:number, date:string):Observable<ShiftApi>{
    const url = `${this.shiftURL}/default/${serviceId}/${date}`;
    return this.http.get<ShiftApi>(url).pipe(
      tap(receivedShifts => console.log(receivedShifts)),
      catchError(error => of(new ShiftApi()))
    );
  }

  //get shift of one stylist
  getShiftByStylist(serviceId:number, stylistId: number, date:string):Observable<ShiftApi>{
    const url = `${this.shiftURL}/stylist/${serviceId}/${stylistId}/${date}`;
    return this.http.get<ShiftApi>(url).pipe(
      tap(receivedShifts => console.log(receivedShifts)),
      catchError(error => of(new ShiftApi()))
    );
  }

  //check phone number of customer
  checkPhoneOfCustomer(phoneNumber:number):Observable<PinApi>{
    const url = `${this.bookingURL}/create-pin`;
    var body = {
      phone_number: phoneNumber,
    };
    return this.http.post<PinApi>(url, body, httpOptions).pipe(
      tap((pinApi:PinApi) => console.log(pinApi)),
      catchError(error => of(new PinApi("False","Lỗi","",new Customer(0,"","",0))))
    );
  }

  constructor( private http: HttpClient) { }

}
