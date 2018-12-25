import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiTest } from './apitest';

let service: ApiTest;

describe('Api Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ ApiTest ]
    });
    service = TestBed.get(ApiTest);
  });
  
  it('#Đăng nhập should return success status and error reason if login failed',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/auth/login';

    const requestParam = {
      name: 'abc@gmail.com',
      password: '123456'
    };
    service.testApi(requestParam, url).subscribe(value => {
      expect(value['success']).toBe(false);
      expect(value['error']).toBe('Invalid Name or Password');
    done();
    }); 
  });

  it('#Đăng nhập should return token if login success',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/auth/login';

    const requestParam = {
      name: 'admin',
      password: '123456'
    };
    service.testApi(requestParam, url).subscribe(value => {
    expect(value['token']).toBeTruthy();
    done();
    }); 
  });
});
