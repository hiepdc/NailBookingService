import { Injectable } from '@angular/core';
import { ServiceApi } from '../models/serviceApi';
import { Service} from '../models/service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class ServicesService {
  private serviceURL = `${environment.api_url}/services`;
  
  //get Service
  getServices(): Observable<ServiceApi> {
    return this.http.get<ServiceApi>(this.serviceURL).pipe(
      tap(receivedServices => console.log(receivedServices)),
      catchError(error => of(new ServiceApi()))
    );
  }
 //delete Service
  deleteServices(id: number): Observable<ServiceApi>{
    return this.http.delete<ServiceApi>(`${this.serviceURL}/${id}`, httpOptions).pipe(
      tap(serviceApi => console.log(ServiceApi)),
      catchError(error => of(new ServiceApi()))
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
      time_service:time_service,
      coin_service:coin_service
    };
    return this.http.post<ServiceApi>(url, body, httpOptions).pipe(
      tap((serviceApi: ServiceApi) => console.log(serviceApi)),
      catchError(error => of(new ServiceApi()))
    );
  }

  constructor(private http: HttpClient) { }
}
