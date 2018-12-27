import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GalleryApi } from './models/galleryApi';
import { CollectionApi } from './models/collectionApi';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class GalleryService {
  private galleryUrl = `${environment.api_url}/galleries`;

  //get all stylist from db
  getAllGalleries(){
    return this.http.get<GalleryApi>(this.galleryUrl).pipe(
      tap(receivedGalleries => console.log(receivedGalleries)),
      catchError(error => of(new GalleryApi()))
      //thêm property vào new StylistApi để biết lỗi
    );
  }

  getGalleryById(galleryId: number): Observable<CollectionApi> {
    const url = `${this.galleryUrl}/${galleryId}`;
    return this.http.get<CollectionApi>(url).pipe(
      tap(receivedCollection => {
        console.log("receivedCollection: "+receivedCollection);
      }),
      catchError(error => of(new CollectionApi()))
    );
  }

  constructor(private http: HttpClient) { }

}
