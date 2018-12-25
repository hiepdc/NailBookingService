import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesComponent } from './prices.component';
import { Component } from '@angular/core';
import { AppModule } from '../../app.module';
import { CoreModule } from '../core.module';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-pre-loader',
  template: ''
})
class MockPreLoaderComponent {
}

describe('PricesComponent', () => {
  let component: PricesComponent;
  let fixture: ComponentFixture<PricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     // declarations: [ PricesComponent ]
      imports: [AppModule, CoreModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
