import { TestBed, inject } from '@angular/core/testing';

import { ConfirmBookingService } from './confirm-booking.service';

describe('ConfirmBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmBookingService]
    });
  });

  it('should be created', inject([ConfirmBookingService], (service: ConfirmBookingService) => {
    expect(service).toBeTruthy();
  }));
});
