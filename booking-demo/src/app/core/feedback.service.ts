import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { API } from './models/API';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FeedbackService {

  private feedbackUrl = `${environment.api_url}/feedbacks`;

  constructor(private http: HttpClient) { }

  addFeedback(title: string, contents: string): Observable<API> {
    const body = {
      title: title,
      contents: contents
    };
    return this.http.post<API>(this.feedbackUrl, body, httpOptions).pipe(
      tap((api: API) => console.log("feedbackApi: " + JSON.stringify(api))),
      catchError(error => of(new API()))
    );
  }

}
