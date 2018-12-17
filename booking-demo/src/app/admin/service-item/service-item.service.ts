import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {ServiceItemApi} from '../models/serviceItemApi';
import {ServicesApi} from '../models/servicesApi';

@Injectable()
export class ServiceItemService {
  private serviceItemUrl = "http://localhost:8000/api/service-items"
  private serviceURL = "http://localhost:8000/api/services";



  constructor(private http: HttpClient) { }

  getServices(): Observable<ServicesApi> {
    return this.http.get<ServicesApi>(this.serviceURL).pipe(
      tap(receivedServices => console.log(receivedServices)),
      catchError(error => of(new ServicesApi()))
    );
  }
  
  getServiceItemsByServiceId(serviceId:number): Observable<ServiceItemApi> {
    return this.http.get<ServiceItemApi>(this.serviceItemUrl).pipe(
      tap(receivedServiceItemApi => console.log(receivedServiceItemApi)),
      catchError(error => of(new ServiceItemApi()))
    );
  }

   //delete Service Item
   deleteServiceItemsByServiceId(serviceId:number): Observable<ServiceItemApi> {
    return this.http.delete<ServiceItemApi>(this.serviceItemUrl).pipe(
      tap(receivedServiceItemApi => console.log(receivedServiceItemApi)),
      catchError(error => of(new ServiceItemApi()))
    );
  }

  //get all service item
  getAllServiceItems(): Observable<ServicesApi> {
    return this.http.get<ServicesApi>(this.serviceURL).pipe(
      tap(receivedServiceApi => console.log(receivedServiceApi)),
      catchError(error => of(new ServicesApi()))
    );
  }
}
