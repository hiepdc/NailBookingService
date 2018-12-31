import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftComponent } from './shift.component';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { AdminModule } from '../admin.module';

describe('ShiftComponent', () => {
  let component: ShiftComponent;
  let fixture: ComponentFixture<ShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, AdminModule ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
