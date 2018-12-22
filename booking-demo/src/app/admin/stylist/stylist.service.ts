import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Api } from '../models/api';
import { tap, catchError } from 'rxjs/operators';
import { Stylist } from '../models/stylist';
import { environment } from '../../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StylistService {
  private stylistURL = `${environment.api_url}/stylists`;

  constructor(private http: HttpClient) { }

  getStylists(): Observable<Api> {
    return this.http.get<Api>(this.stylistURL).pipe(
      tap(receivedStylists => {
        console.log(receivedStylists);
      }),
      catchError(error => of(new Api()))
      );
  }
  addStylist(stylist_name: string, phone_number: string, information: string, image_link: string) {
    let body = {
      stylist_name: stylist_name,
      phone_number: phone_number,
      information: information,
      image_link: image_link
    };
    console.log(body);
    return this.http.post<Api>(this.stylistURL, {
      stylist_name: stylist_name,
      phone_number: phone_number,
      information: information,
      image_link: image_link
    }, httpOptions).pipe(
      tap((api) => console.log(api)),
      catchError(error => of(new Api()))
    );
  }
}
