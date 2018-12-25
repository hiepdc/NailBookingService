import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedBookingComponent } from './confirmed-booking.component';
import { AppModule } from '../../app.module';
import { CoreModule } from '../core.module';
import { APP_BASE_HREF } from '@angular/common';

describe('ConfirmedBookingComponent', () => {
  let component: ConfirmedBookingComponent;
  let fixture: ComponentFixture<ConfirmedBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, CoreModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
