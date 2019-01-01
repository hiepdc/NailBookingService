import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Api } from '../models/api';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AddShift } from '../models/addShift';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ShiftService {

  private shiftURL = `${environment.api_url}/shifts`;
  private shiftWeekURL = `${environment.api_url}/shifts-this-week`;
  constructor(private http: HttpClient) { }
  getShifts(): Observable<Api> {
    return this.http.get<Api>(this.shiftWeekURL).pipe(
      tap(receivedStylists => {
        console.log(receivedStylists);
      }),
      catchError(error => of(new Api()))
      );
  }

  editShift(id: number, startTime: number, endTime: number): Observable<Api>  {
      const body = {
        start_time: startTime,
        end_time: endTime
      };
      return this.http.post<Api>(`${this.shiftURL}/${id}`, body, httpOptions).pipe(
        tap(api => console.log(api)),
        catchError(error => of(new Api()))
      );
  }
  addShift(array: Array<AddShift>): Observable<Api>  {
    const body = {
      array: array,
    };
    return this.http.post<Api>(this.shiftURL, body, httpOptions).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
}
  delelteShift(id: number): Observable<Api> {
    return this.http.delete<Api>(`${this.shiftURL}/${id}`, httpOptions).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }

}
