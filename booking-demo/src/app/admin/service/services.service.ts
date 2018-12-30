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

  editService(id: number, service_name: string, description: string, time_service: string, coin_service: string): Observable<Api>  {
    const fd = new FormData();
    fd.append('service_name', service_name);
    fd.append('description', description);
    fd.append('time_service', time_service);
    fd.append('coin_service', coin_service);
    return this.http.post<Api>(`${this.serviceURL}/${id}`, fd).pipe(
      tap(api => {
        console.log(api);
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

  addServiceItem(name: string, service_id: string, price: string): Observable<Api>  {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('service_id', service_id);
    fd.append('price', price);
    return this.http.post<Api>(`${this.serviceItemURL}`, fd).pipe(
      tap(api => {
        console.log(api);
      }),
      catchError(error => of(new Api()))
    );
  }

  editServiceItem(id: number, name: string, service_id: string, price: string): Observable<Api>  {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('service_id', service_id);
    fd.append('price', price);
    return this.http.post<Api>(`${this.serviceItemURL}/${id}`, fd).pipe(
      tap(api => {
        console.log(api);
      }),
      catchError(error => of(new Api()))
    );
  }

  delelteServiceItem(id: number): Observable<Api> {
    return this.http.delete<Api>(`${this.serviceItemURL}/${id}`, httpOptions).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }

}
