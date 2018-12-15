import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from '../models/api';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

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
}
