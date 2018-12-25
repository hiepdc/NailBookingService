import { TestBed, inject } from '@angular/core/testing';

import { BookingService } from './booking.service';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

let service: BookingService;

describe('BookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [BookingService]
    });
    service = TestBed.get(BookingService);
  });

  it('should be created', inject([BookingService], (service: BookingService) => {
    expect(service).toBeTruthy();
  }));

  it('#checkExistBooking should return value from observable',
    (done: DoneFn) => {
      const phoneNumber = 'abc';
      const messageSuccess = 'successfully';
      service.checkExistBooking(phoneNumber).subscribe(value => {
      expect(!!value.success).toBe(true);
      expect(!!value.message).toBe(true);
      done();
    });
  });

  it('#checkExistBooking should return successfully for phonenumber',
    (done: DoneFn) => {
      const phoneNumber = '0369546356';
      const messageSuccess = 'successfully';
      service.checkExistBooking(phoneNumber).subscribe(value => {
      expect(value.success).toBe(true);
      expect(value.message).toBe('successfully');
      done();
    });
  });

  it('#checkExistBooking should return failed for not phonenumber',
    (done: DoneFn) => {
      const phoneNumber = 'abc';
      const messageSuccess = 'failed';
      service.checkExistBooking(phoneNumber).subscribe(value => {
      expect(value.success).toBe(true);
      expect(value.message).toBe('successfully');
      done();
    });
  });
});
