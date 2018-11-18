import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPinNumberComponent } from './verify-pin-number.component';

describe('VerifyPinNumberComponent', () => {
  let component: VerifyPinNumberComponent;
  let fixture: ComponentFixture<VerifyPinNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPinNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyPinNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
