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

  addGallery(name: string, image_link: File): Observable<Api>  {
    // use form data for upload image
    const fd = new FormData();
    fd.append('name', name);
    fd.append('image_link', image_link, image_link.name);
    return this.http.post<Api>(this.galleryURL, fd).pipe(
      tap(api => {
        console.log(api);
      }),
      catchError(error => of(new Api()))
    );
  }

  editGallery(id: number, name: string, image_link: File): Observable<Api>  {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('image_link', image_link, image_link.name);
    return this.http.post<Api>(`${this.galleryURL}/${id}`, fd).pipe(
      tap(api => {
        console.log(api);
      }),
      catchError(error => of(new Api()))
    );
  }

  delelteGallery(id: number): Observable<Api> {
    return this.http.delete<Api>(`${this.galleryURL}/${id}`, httpOptions).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }

  addImage(gallery_id: string, caption: string, thumb_link: File, image_link: File): Observable<Api>  {
    // use form data for upload image
    const fd = new FormData();
    fd.append('gallery_id', gallery_id);
    fd.append('caption', caption);
    fd.append('thumb_link', thumb_link, thumb_link.name);
    fd.append('image_link', image_link, image_link.name);
    return this.http.post<Api>(this.imageURL, fd).pipe(
      tap(api => {
        console.log(api);
      }),
      catchError(error => of(new Api()))
    );
  }

  editImage(id: number, gallery_id: string, caption: string, thumb_link: File, image_link: File): Observable<Api>  {
    // use form data for upload image
    const fd = new FormData();
    fd.append('gallery_id', gallery_id);
    fd.append('caption', caption);
    fd.append('thumb_link', thumb_link, thumb_link.name);
    fd.append('image_link', image_link, image_link.name);
    return this.http.post<Api>(`${this.imageURL}/${id}`, fd).pipe(
      tap(api => {
        console.log(api);
      }),
      catchError(error => of(new Api()))
    );
  }

  deleteImage(id: number): Observable<Api> {
    return this.http.delete<Api>(`${this.imageURL}/${id}`, httpOptions).pipe(
      tap(api => console.log(api)),
      catchError(error => of(new Api()))
    );
  }
}
