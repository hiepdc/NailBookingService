import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StylistApi } from './models/stylistApi';
import { ShiftApi} from '../app/models/shiftApi';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class StylistService {
  private stylistURL = "http://localhost:8000/api/stylists";
  private shiftURL = "http://localhost:8000/api/shifts";
  private bookingURL = "http://localhost:8000/api/bookings";

  getStylists(): Observable<StylistApi> {
    return this.http.get<StylistApi>(this.stylistURL).pipe(
      tap(receivedStylists => console.log(receivedStylists)),
      catchError(error => of(new StylistApi()))
      //thêm property vào new StylistApi để biết lỗi
    );
  }

  getShiftByDefault(serviceId:number, date:string):Observable<ShiftApi>{
    const url = `${this.shiftURL}/default/${serviceId}/${date}`;
    return this.http.get<ShiftApi>(url).pipe(
      tap(receivedShifts => console.log(receivedShifts)),
      catchError(error => of(new ShiftApi()))
    );
  }

  getShiftByStylist(serviceId:number, stylistId: number, date:string):Observable<ShiftApi>{
    const url = `${this.shiftURL}/stylist/${serviceId}/${stylistId}/${date}`;
    return this.http.get<ShiftApi>(url).pipe(
      tap(receivedShifts => console.log(receivedShifts)),
      catchError(error => of(new ShiftApi()))
    );
  }

  constructor( private http: HttpClient) { }

}
