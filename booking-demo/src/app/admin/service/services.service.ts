import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ServicesApi } from '../models/servicesApi';
import { Service} from '../models/service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class ServicesService {
  private serviceURL = "http://localhost:8000/api/services";
  

  getServices(): Observable<ServicesApi> {
    return this.http.get<ServicesApi>(this.serviceURL).pipe(
      tap(receivedServices => console.log(receivedServices)),
      catchError(error => of(new ServicesApi()))
    );
  }
  constructor(private http: HttpClient) { }

}
