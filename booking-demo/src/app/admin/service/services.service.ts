import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Api } from '../models/api';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ServicesService {

  private serviceURL = `${environment.api_url}/services`;
  private serviceItemURL = `${environment.api_url}/service-items`;
  constructor(private http: HttpClient) { }

  getServices(): Observable<Api> {
    return this.http.get<Api>(this.serviceURL).pipe(
      tap(receivedStylists => {
        console.log(receivedStylists);
      }),
      catchError(error => of(new Api()))
      );
  }

  getServiceItems(): Observable<Api> {
    return this.http.get<Api>(`${this.serviceItemURL}-all`).pipe(
      tap(receivedStylists => {
        console.log(receivedStylists);
      }),
      catchError(error => of(new Api()))
      );
  }

}
