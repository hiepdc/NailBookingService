import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';
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
describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //declarations: [ ServicesComponent ]
      imports: [AppModule, CoreModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create services header', () => {
    const serviceElement: HTMLElement = fixture.nativeElement;
    expect(serviceElement.querySelector('div.section-heading')).toBeTruthy();
    expect(serviceElement.querySelector('div.section-heading').textContent.trim()).toEqual('Dịch Vụ');
  });
  it('should create infomation service nâng cao', () => {
    expect(component).toBeTruthy();
  });
  it('should create header componet', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create infomation service cơ bản', () => {
    expect(component).toBeTruthy();
  });

  it('should create infomation service', () => {
    expect(component).toBeTruthy();
  });
});
