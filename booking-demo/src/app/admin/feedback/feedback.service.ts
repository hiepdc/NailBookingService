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
export class FeedbackService {
  private feedbackURL = `${environment.api_url}/feedbacks`;
  constructor(private http: HttpClient) { }

  getFeedbacks(): Observable<Api> {
    return this.http.get<Api>(this.feedbackURL).pipe(
      tap(receivedFeedbacks => {
        console.log(receivedFeedbacks);
      }),
      catchError(error => of(new Api()))
      );
  }

  delelteFeedback(id: number): Observable<Api> {
    return this.http.delete<Api>(`${this.feedbackURL}/${id}`, httpOptions).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }
}
