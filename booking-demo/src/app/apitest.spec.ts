import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiTest } from './apitest';

let service: ApiTest;
let auth: string = '';

describe('LoginApi', () => {
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
    service.testApiPost(requestParam, url).subscribe(value => {
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
    service.testApiPost(requestParam, url).subscribe(value => {
    expect(value['token']).toBeTruthy();
    auth = value['token'];
    done();
    }); 
  });
});

describe('Services', () => {
  let idTestService: number;
  let idTestServiceTotal: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ ApiTest ]
    });
    service = TestBed.get(ApiTest);
    service.setAuth(auth);
  });

  it('#list all should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/services';
    service.testApiGet(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
      idTestServiceTotal = value['data'];
      idTestService = value['data'][0]['id'];
    done();
    });
  });

  it('#added test service should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/services/' + idTestService;
    service.testApiGet(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
      expect(value['data']['id']).toBe(idTestService);
      expect(value['data']['service_name']).toBe('Nhóm dịch vụ cơ bản');
      expect(value['data']['description']).toBe('Tận hưởng combo 7 bước tỏa sáng thư giản. Trọn gói chỉ 100K, hoàn toàn thư giãn và sau đó bạn sẽ đẹp hoàn hảo!');
      expect(value['data']['time_service']).toBe(1);
      expect(value['data']['coin_service']).toBe(10);
    done();
    });
  });

  it('#Sửa should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/services/' + idTestService;

    let requestParam = new FormData();
    requestParam.append('service_name', 'Nhóm dịch vụ test sửa');
    requestParam.append('description', 'Test');
    requestParam.append('time_service', '2');
    requestParam.append('coin_service', '200');
    
    service.testApiPostFormData(requestParam, url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
    done();
    });
  });

  it('#edited test service should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/services/' + idTestService;
    service.testApiGet(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
      expect(value['data']['id']).toBe(idTestService);
      expect(value['data']['service_name']).toBe('Nhóm dịch vụ test sửa');
      expect(value['data']['description']).toBe('Test');
      expect(value['data']['time_service']).toBe(2);
      expect(value['data']['coin_service']).toBe(200);
    done();
    });
  });


  it('#Sửa should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/services/' + idTestService;

    let requestParam = new FormData();
    requestParam.append('service_name', 'Nhóm dịch vụ cơ bản');
    requestParam.append('description', 'Tận hưởng combo 7 bước tỏa sáng thư giản. Trọn gói chỉ 100K, hoàn toàn thư giãn và sau đó bạn sẽ đẹp hoàn hảo!');
    requestParam.append('time_service', '1');
    requestParam.append('coin_service', '10');
    
    service.testApiPostFormData(requestParam, url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
    done();
    });
  });
});

describe('stylists', () => {
  let idTestStylist: number;
  let idTestStylistTotal: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ ApiTest ]
    });
    service = TestBed.get(ApiTest);
    service.setAuth(auth);
  });
  
  it('#get all stylist should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/stylists';
    
    service.testApiGet(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
    done();
    });
  });

  it('#create should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/stylists';
    let modifiedDate = new Date();
    let test =  new File(<BlobPart><unknown>[3555], 'test-file.jpg', {lastModified : modifiedDate.getMilliseconds(), type: 'image/jpeg'});
    let requestParam = new FormData();
    requestParam.append('stylist_name', 'Stylist test');
    requestParam.append('phone_number', '0976420098');
    requestParam.append('information', 'wellcomebaby');
    requestParam.append('image_link', test, 'hoho');
    
    service.testApiPostFormData(requestParam, url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
      idTestStylistTotal = value['data']['id'];
    done();
    });
  });

  // addStylist(stylist_name: string, phone_number: string, information: string, image_link: File): Observable<Api>  {
  //   // const body = {
  //   //   stylist_name: stylist_name,
  //   //   phone_number: phone_number,
  //   //   information: information,
  //   //   image_link: image_link
  //   // };

  //   // use form data for upload image
  //   const fd = new FormData();
  //   fd.append('stylist_name', stylist_name);
  //   fd.append('phone_number', phone_number);
  //   fd.append('information', information);
  //   fd.append('image_link', image_link, image_link.name);
  //   return this.http.post<Api>(this.stylistURL, fd).pipe(
  //     tap(api => {
  //       console.log(api);
  //     }),
  //     catchError(error => of(new Api()))
  //   );
  // }

  it('#get stylists c should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/stylists/' + idTestStylistTotal;
    
    service.testApiGet(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
    done();
    });
  });

  it('#Sửa should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/stylists/' + idTestStylistTotal;

    let requestParam = new FormData();
    requestParam.append('stylist_name', 'Stylist test 123');
    requestParam.append('phone_number', '0976420099');
    requestParam.append('information', 'wellcomebaby');
    requestParam.append('image_link', '20');
    
    service.testApiPostFormData(requestParam, url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
    done();
    });
  });

  it('#Delete should return data',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/stylists/' + idTestStylistTotal;
    
    service.testApiDelete(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
    done();
    });
  });
});

describe('booking', () => {
  let totalBooking: number;
  let totalBookingToday: number;
  let totalBookingTodayWeek: number;
  let totalBookingMonth: number;
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ ApiTest ]
    });
    service = TestBed.get(ApiTest);
    service.setAuth(auth);
  });
  
  it('#admin list bookings total, month, weeek và today should return data',
  (done: DoneFn) => {
    let url = 'http://api.chamtramnail.com/public/api/bookings';
    
    service.testApiGet(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
      totalBooking = value['data'].length;
      
      url = 'http://api.chamtramnail.com/public/api/bookings/today';
    
      service.testApiGet(url).subscribe(value => {
        expect(value['success']).toBe(true);
        expect(value['message']).toBe('successfully');
        totalBookingToday = value['data'].length;
        
        url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnWeekStatistic';
        
        let requestParam = new URLSearchParams();
        requestParam.append('time', '2018-12');

        service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
          expect(value['success']).toBe(true);
          expect(value['message']).toBe('successfully');
          totalBookingTodayWeek = value['data']['date']['4'];
        
          url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnMonthStatistic';
          let requestParam = new URLSearchParams();
          requestParam.append('time', '2018');

          service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
            expect(value['success']).toBe(true);
            expect(value['message']).toBe('successfully');
            totalBookingMonth = value['data']['date']['12'];
          done();
          });
        });
      });
    });
  });

  it('#kiểm tra lịch đã đặt should return data null khi chưa đặt lịch',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/bookings/check-exist-booking';
    let requestParam = new URLSearchParams();
    requestParam.append('phone_number', '0976494538');
    
    service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('successfully');
      expect(value['data']).toBeNull();
    done();
    });
  });

  it('#đặt lịch có chọn stylist should return data, kiểm tra lịch đã đặt phải giống với thông tin đã đặt, total booking phải tăng lên 1',
  (done: DoneFn) => {
    let url = 'http://api.chamtramnail.com/public/api/bookings/add-new-booking';
    let requestParam = new URLSearchParams();
    requestParam.append('phone_number', '0976494538');
    requestParam.append('stylist_id', '2');
    requestParam.append('date', '2018-12-31');
    requestParam.append('start_time', '1');
    requestParam.append('service_id', '1');
    requestParam.append('customer_name', 'mắm yêu');
    
    service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('Bạn đã đặt lịch thành công');

      url = 'http://api.chamtramnail.com/public/api/bookings/check-exist-booking';
      requestParam = new URLSearchParams();
      requestParam.append('phone_number', '0976494538');
      
      service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
        expect(value['success']).toBe(true);
        expect(value['message']).toBe('successfully');
        expect(value['data']['phone_number']).toBe('0976494538');
        expect(value['data']['date']).toBe('2018-12-31');
        expect(value['data']['start_time']).toBe(1);
        expect(value['data']['customer_name']).toBe('mắm yêu');
        expect(value['data']['status']).toBe('booked');
        
        url = 'http://api.chamtramnail.com/public/api/bookings';
    
        service.testApiGet(url).subscribe(value => {
          expect(value['success']).toBe(true);
          expect(value['message']).toBe('successfully');
          expect(value['data'].length).toEqual(totalBooking + 1);

          url = 'http://api.chamtramnail.com/public/api/bookings/today';
    
          service.testApiGet(url).subscribe(value => {
            expect(value['success']).toBe(true);
            expect(value['message']).toBe('successfully');
            expect(value['data'].length).toEqual(totalBookingToday + 1);
            
            url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnWeekStatistic';
            let requestParam = new URLSearchParams();
            requestParam.append('time', '2018-12');

            service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
              expect(value['success']).toBe(true);
              expect(value['message']).toBe('successfully');
              expect(value['data']['date']['4']).toBe(totalBookingTodayWeek + 1);
            
              url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnMonthStatistic';
        
              let requestParam = new URLSearchParams();
              requestParam.append('time', '2018');

              service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
                expect(value['success']).toBe(true);
                expect(value['message']).toBe('successfully');
                expect(value['data']['date']['12']).toBe(totalBookingMonth + 1);
              done();
              });
            });
          });
        });
      });
    });
  });

  it('#xóa lịch should return data success, kiểm tra lịch phải không tồn tại, totalbooking phải giảm đi 1',
  (done: DoneFn) => {
    let url = 'http://api.chamtramnail.com/public/api/bookings/delete-booking/0976494538';
    
    service.testApiDelete(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('Bạn vừa xóa thành công lịch đặt');
      
      url = 'http://api.chamtramnail.com/public/api/bookings/check-exist-booking';
      let requestParam = new URLSearchParams();
      requestParam.append('phone_number', '0976494538');
      
      service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
        expect(value['success']).toBe(true);
        expect(value['message']).toBe('successfully');
        expect(value['data']).toBeNull();
        
        url = 'http://api.chamtramnail.com/public/api/bookings';
    
        service.testApiGet(url).subscribe(value => {
          expect(value['success']).toBe(true);
          expect(value['message']).toBe('successfully');
          expect(value['data'].length).toEqual(totalBooking);
          
          url = 'http://api.chamtramnail.com/public/api/bookings/today';
    
          service.testApiGet(url).subscribe(value => {
            expect(value['success']).toBe(true);
            expect(value['message']).toBe('successfully');
            expect(value['data'].length).toEqual(totalBookingToday);
            
            url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnWeekStatistic';
            let requestParam = new URLSearchParams();
            requestParam.append('time', '2018-12');

            service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
              expect(value['success']).toBe(true);
              expect(value['message']).toBe('successfully');
              expect(value['data']['date']['4']).toEqual(totalBookingTodayWeek);
            
              url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnMonthStatistic';
        
              let requestParam = new URLSearchParams();
              requestParam.append('time', '2018');

              service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
                expect(value['success']).toBe(true);
                expect(value['message']).toBe('successfully');
                expect(value['data']['date']['12']).toEqual(totalBookingMonth);
              done();
              });
            });
          });
        });
      });
    });
  });

  it('#đặt lịch không chọn stylist should return data, kiểm tra lịch đã đặt phải giống với thông tin đã đặt, total booking phải tăng lên 1',
  (done: DoneFn) => {
    let url = 'http://api.chamtramnail.com/public/api/bookings/add-new-booking';
    let requestParam = new URLSearchParams();
    requestParam.append('phone_number', '0976494538');
    requestParam.append('stylist_id', '-1');
    requestParam.append('date', '2018-12-31');
    requestParam.append('start_time', '1');
    requestParam.append('service_id', '1');
    requestParam.append('customer_name', 'mắm yêu');
    
    service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('Bạn đã đặt lịch thành công');

      url = 'http://api.chamtramnail.com/public/api/bookings/check-exist-booking';
      requestParam = new URLSearchParams();
      requestParam.append('phone_number', '0976494538');
      
      service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
        expect(value['success']).toBe(true);
        expect(value['message']).toBe('successfully');
        expect(value['data']['phone_number']).toBe('0976494538');
        expect(value['data']['date']).toBe('2018-12-31');
        expect(value['data']['start_time']).toBe(1);
        expect(value['data']['customer_name']).toBe('mắm yêu');
        expect(value['data']['status']).toBe('booked');
        
        url = 'http://api.chamtramnail.com/public/api/bookings';
    
        service.testApiGet(url).subscribe(value => {
          expect(value['success']).toBe(true);
          expect(value['message']).toBe('successfully');
          expect(value['data'].length).toEqual(totalBooking + 1);

          url = 'http://api.chamtramnail.com/public/api/bookings/today';
    
          service.testApiGet(url).subscribe(value => {
            expect(value['success']).toBe(true);
            expect(value['message']).toBe('successfully');
            expect(value['data'].length).toEqual(totalBookingToday + 1);
            
            url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnWeekStatistic';
            let requestParam = new URLSearchParams();
            requestParam.append('time', '2018-12');

            service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
              expect(value['success']).toBe(true);
              expect(value['message']).toBe('successfully');
              expect(value['data']['date']['4']).toBe(totalBookingTodayWeek + 2);
            
              url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnMonthStatistic';
        
              let requestParam = new URLSearchParams();
              requestParam.append('time', '2018');

              service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
                expect(value['success']).toBe(true);
                expect(value['message']).toBe('successfully');
                expect(value['data']['date']['12']).toBe(totalBookingMonth + 2);
              done();
              });
            });
          });
        });
      });
    });
  });

  it('#xóa lịch should return data success, kiểm tra lịch phải không tồn tại, totalbooking phải giảm đi 1',
  (done: DoneFn) => {
    let url = 'http://api.chamtramnail.com/public/api/bookings/delete-booking/0976494538';
    
    service.testApiDelete(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('Bạn vừa xóa thành công lịch đặt');
      
      url = 'http://api.chamtramnail.com/public/api/bookings/check-exist-booking';
      let requestParam = new URLSearchParams();
      requestParam.append('phone_number', '0976494538');
      
      service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
        expect(value['success']).toBe(true);
        expect(value['message']).toBe('successfully');
        expect(value['data']).toBeNull();
        
        url = 'http://api.chamtramnail.com/public/api/bookings';
    
        service.testApiGet(url).subscribe(value => {
          expect(value['success']).toBe(true);
          expect(value['message']).toBe('successfully');
          expect(value['data'].length).toEqual(totalBooking);
          
          url = 'http://api.chamtramnail.com/public/api/bookings/today';
    
          service.testApiGet(url).subscribe(value => {
            expect(value['success']).toBe(true);
            expect(value['message']).toBe('successfully');
            expect(value['data'].length).toEqual(totalBookingToday);
            
            url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnWeekStatistic';
            let requestParam = new URLSearchParams();
            requestParam.append('time', '2018-12');

            service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
              expect(value['success']).toBe(true);
              expect(value['message']).toBe('successfully');
              expect(value['data']['date']['4']).toEqual(totalBookingTodayWeek);
            
              url = 'http://api.chamtramnail.com/public/api/bookings/bookingOnMonthStatistic';
        
              let requestParam = new URLSearchParams();
              requestParam.append('time', '2018');

              service.testApiPostUrlencoded(requestParam, url).subscribe(value => {
                expect(value['success']).toBe(true);
                expect(value['message']).toBe('successfully');
                expect(value['data']['date']['12']).toEqual(totalBookingMonth);
              done();
              });
            });
          });
        });
      });
    });
  });
});

describe('LogoutAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ ApiTest ]
    });
    service = TestBed.get(ApiTest);
  });
  
  it('#Dăng xuất return success status',
  (done: DoneFn) => {
    const url = 'http://api.chamtramnail.com/public/api/auth/logout?token=' + auth;
    service.testApiGet(url).subscribe(value => {
      expect(value['success']).toBe(true);
      expect(value['message']).toBe('You have successfully logged out.');
    done();
  });
 });
});