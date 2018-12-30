import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedBookingComponent } from './confirmed-booking.component';

describe('ConfirmedBookingComponent', () => {
  let component: ConfirmedBookingComponent;
  let fixture: ComponentFixture<ConfirmedBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedBookingComponent ]
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
