import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistComponent } from './stylist.component';
import { AdminModule } from '../admin.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../../app.module';

describe('StylistComponent', () => {
  let component: StylistComponent;
  let fixture: ComponentFixture<StylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, AdminModule ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
