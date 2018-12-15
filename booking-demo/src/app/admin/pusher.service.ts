import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { NotificationApi } from './models/notificationApi';
declare const Pusher: any;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PusherService {

  private notificationURL = `${environment.api_url}/notifications`;
  pusher: any;
  chanel: any;
  constructor(private http: HttpClient) {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: 'ap1',
      forceTLS: true
    });
    this.chanel = this.pusher.subscribe('Notify');
  }

  markAllRead() {
    const url = `${this.notificationURL}/mark-all-read`;
    return this.http.get<boolean>(url).pipe(
      tap(_ => console.log('mark all read successfully')),
      catchError(error => of([Boolean]))
    );
  }


  getListNotifications(): Observable<NotificationApi> {
    return this.http.get<NotificationApi>(this.notificationURL).pipe(
      tap(receivedNotificastions => console.log(receivedNotificastions)),
      catchError(error => of(new NotificationApi()))
    );
  }

}