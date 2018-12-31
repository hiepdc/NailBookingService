import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiTest {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  httpOptions2 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  httpOptions3 = {
    headers: new HttpHeaders({})
  };

    constructor(private http: HttpClient) { }

    setAuth(auth: string) {
      this.httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth
      })
      this.httpOptions2.headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + auth
      })
      this.httpOptions3.headers = new HttpHeaders({
        'Authorization': 'Bearer ' + auth
      })
    }

    // mock function dung de test api
    testApiPost(input: any, url: string) {
      return this.http.post(url, input, this.httpOptions);
    }

    // mock function dung de test api
    testApiPostUrlencoded(input: any, url: string) {
      return this.http.post(url, input.toString(), this.httpOptions2);
    }

    // mock function dung de test api
    testApiPostFormData(input: any, url: string) {
      return this.http.post(url, input, this.httpOptions3);
    }

    // mock function dung de test api
    testApiPutUrlencoded(input: any, url: string) {
      return this.http.put(url, input.toString(), this.httpOptions2);
    }

    // mock function dung de test api
    testApiGet(url: string) {
      return this.http.get(url, this.httpOptions2);
    }

    // mock function dung de test api
    testApiDelete(url: string) {
      return this.http.delete(url, this.httpOptions2);
    }
}
