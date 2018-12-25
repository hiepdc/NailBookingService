import { TestBed, inject } from '@angular/core/testing';

import { ConfirmBookingService } from './confirm-booking.service';
import { CoreModule } from './core.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('ConfirmBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, CoreModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    });
  });

  it('should be created', inject([ConfirmBookingService], (service: ConfirmBookingService) => {
    expect(service).toBeTruthy();
  }));
});
