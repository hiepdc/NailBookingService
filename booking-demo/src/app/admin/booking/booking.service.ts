import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Api } from '../models/api';
import { tap, catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class BookingService {

  private bookingURL = `${environment.api_url}/bookings`;

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Api>{
    return this.http.get<Api>(this.bookingURL).pipe(
      tap(receivedBookings => {
        console.log(receivedBookings)
      }),
      catchError(error => of(new Api())
      )
    );
  }

  delelteBooking(id: number): Observable<Api>{
    return this.http.delete<Api>(`${this.bookingURL}/${id}`, httpOptions).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }

  checkIn(id :number): Observable<Api>{
    return this.http.get<Api>(`${this.bookingURL}/checkin/${id}`).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }
  
  checkOut(id :number): Observable<Api>{
    return this.http.get<Api>(`${this.bookingURL}/checkout/${id}`).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }
}
