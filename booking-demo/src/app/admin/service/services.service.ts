import { Injectable } from '@angular/core';
import { ServicesApi } from '../models/servicesApi';
import { Service } from '../models/service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { FormGroup } from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class ServicesService {
  private serviceURL = `${environment.api_url}/services`;
  private serviceForm: FormGroup;

  //get Service
  getServices(): Observable<ServicesApi> {
    return this.http.get<ServicesApi>(this.serviceURL).pipe(
      tap(receivedServices => console.log(receivedServices)),
      catchError(error => of(new ServicesApi()))
    );
  }
  //delete Service
  deleteServices(id: number): Observable<ServicesApi> {
    return this.http.delete<ServicesApi>(`${this.serviceURL}/${id}`, httpOptions).pipe(
      tap(serviceApi => console.log(ServicesApi)),
      catchError(error => of(new ServicesApi()))
    );
  }
  //add new Service
  addNewService(id: number,
    service_name: string, description: string,
    time_service: number, coin_service: number) {
    const url = `${this.serviceURL}`;
    var body = {
      id: id,
      service_name: service_name,
      description: description,
      time_service: time_service,
      coin_service: coin_service
    };
    return this.http.post<ServicesApi>(url, body, httpOptions).pipe(
      tap((serviceApi: ServicesApi) => console.log(serviceApi)),
      catchError(error => of(new ServicesApi()))
    );
  }

  //edit Service
  /** PUT: update the service on the server */
  updateMovie(service: Service): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(`${this.serviceURL}/${service.id}`, service, httpOptions).pipe(
      tap(updatedService => console.log(`updated movie = ${JSON.stringify(updatedService)}`)),
      catchError(error => of(new Service()))
    );
  }


  constructor(private http: HttpClient) { }
}