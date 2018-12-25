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
export class GalleryService {

  private galleryURL = `${environment.api_url}/galleries`;
  private imageURL = `${environment.api_url}/images`;
  constructor(private http: HttpClient) { }

  getGalleries(): Observable<Api> {
    return this.http.get<Api>(this.galleryURL).pipe(
      tap(receivedGalleries => {
        console.log(receivedGalleries);
      }),
      catchError(error => of(new Api()))
      );
  }

  getImages(): Observable<Api> {
    return this.http.get<Api>(this.imageURL).pipe(
      tap(receivedImages => {
        console.log(receivedImages);
      }),
      catchError(error => of(new Api()))
      );
  }


}
