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
export class StylistService {
  private stylistURL = `${environment.api_url}/stylists`;
  private customerURL = `${environment.api_url}/customers`;
  constructor(private http: HttpClient) { }

  getStylists(): Observable<Api> {
    return this.http.get<Api>(this.stylistURL).pipe(
      tap(receivedStylists => {
        console.log(receivedStylists);
      }),
      catchError(error => of(new Api()))
      );
  }

  getCustomers(): Observable<Api> {
    return this.http.get<Api>(this.customerURL).pipe(
      tap(receivedCustomers => {
        console.log(receivedCustomers);
      }),
      catchError(error => of(new Api()))
      );
  }

  addStylist(stylist_name: string, phone_number: string, information: string, image_link: File): Observable<Api>  {
    // const body = {
    //   stylist_name: stylist_name,
    //   phone_number: phone_number,
    //   information: information,
    //   image_link: image_link
    // };

    // use form data for upload image
    const fd = new FormData();
    fd.append('stylist_name', stylist_name);
    fd.append('phone_number', phone_number);
    fd.append('information', information);
    fd.append('image_link', image_link, image_link.name);
    return this.http.post<Api>(this.stylistURL, fd).pipe(
      tap(api => {
        console.log(api);
      }),
      catchError(error => of(new Api()))
    );
  }

  editStylist(id: number, stylist_name: string, phone_number: string, information: string, image_link: File): Observable<Api>  {
    // const body = {
    //   stylist_name: stylist_name,
    //   phone_number: phone_number,
    //   information: information,
    //   image_link: image_link
    // };
    const fd = new FormData();
    fd.append('stylist_name', stylist_name);
    fd.append('phone_number', phone_number);
    fd.append('information', information);
    fd.append('image_link', image_link, image_link.name);
    return this.http.post<Api>(`${this.stylistURL}/${id}`, fd).pipe(
      tap(api => {
        console.log(api);
      }),
      catchError(error => of(new Api()))
    );
  }

  delelteStylist(id: number): Observable<Api> {
    return this.http.delete<Api>(`${this.stylistURL}/${id}`, httpOptions).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }

  delelteCustomer(id: number): Observable<Api> {
    return this.http.delete<Api>(`${this.customerURL}/${id}`, httpOptions).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }
}
