import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusComponent } from './aboutus.component';
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
describe('AboutusComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    //  declarations: [ AboutusComponent ]
      imports: [AppModule, CoreModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header', () => {
    expect(component).toBeTruthy();
  });

  it('should create About Us header', () => {
    const aboutElement: HTMLElement = fixture.nativeElement;
    expect(aboutElement.querySelector('div.section-heading')).toBeTruthy();
    expect(aboutElement.querySelector('div.section-heading').textContent.trim()).toEqual('About Us');
  });
  it('should create header h2', () => {
    expect(component).toBeTruthy();
  });
  it('should create Picture and Text', () => {
    const aboutElement: HTMLElement = fixture.nativeElement;
    expect(aboutElement.querySelector('div.row')).toBeTruthy();
    expect(aboutElement.querySelector('div.row').childElementCount).toEqual(2);
    expect(aboutElement.querySelector('div.row div img')).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create 3 additional information in div with class service-content', () => {
    const aboutElement: HTMLElement = fixture.nativeElement;
    expect(aboutElement.querySelectorAll('div.service-content').length).toEqual(3);
  });

  it('should create Professional Staff in div with class service-content', () => {
    const aboutElement: HTMLElement = fixture.nativeElement;
    expect(aboutElement.querySelectorAll('div.service-content')[0]).toBeTruthy();
    expect(aboutElement.querySelectorAll('div.service-content')[0].childElementCount).toEqual(2);
    expect(aboutElement.querySelectorAll('div.service-content h5')[0].textContent).toEqual('Professional Staff');
    expect(aboutElement.querySelectorAll('div.service-content p')[0].textContent).toBeTruthy();
    expect(aboutElement.querySelectorAll('div.service-content p')[0].textContent.trim()).
    toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.');
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create Quality Products in div with class service-content', () => {
    const aboutElement: HTMLElement = fixture.nativeElement;
    expect(aboutElement.querySelectorAll('div.service-content')[1]).toBeTruthy();
    expect(aboutElement.querySelectorAll('div.service-content')[1].childElementCount).toEqual(2);
    expect(aboutElement.querySelectorAll('div.service-content h5')[1].textContent).toEqual('Quality Products');
    expect(aboutElement.querySelectorAll('div.service-content p')[1].textContent).toBeTruthy();
  });

  it('should create Quality Products in div with class service-content', () => {
    const aboutElement: HTMLElement = fixture.nativeElement;
    expect(aboutElement.querySelectorAll('div.service-content')[1]).toBeTruthy();
    expect(aboutElement.querySelectorAll('div.service-content')[1].childElementCount).toEqual(2);
    expect(aboutElement.querySelectorAll('div.service-content h5')[1].textContent).toEqual('Quality Products');
    expect(aboutElement.querySelectorAll('div.service-content p')[1].textContent.trim()).
    toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.');
  });

  it('should create Relaxing Enviroment in div with class service-content', () => {
    const aboutElement: HTMLElement = fixture.nativeElement;
    expect(aboutElement.querySelectorAll('div.service-content')[2]).toBeTruthy();
    expect(aboutElement.querySelectorAll('div.service-content')[2].childElementCount).toEqual(2);
    expect(aboutElement.querySelectorAll('div.service-content h5')[2].textContent).toEqual('Relaxing Enviroment');
    expect(aboutElement.querySelectorAll('div.service-content p')[2].textContent).toBeTruthy();
  });
  it('should  create relaxing enviroment in div with class', () => {
    expect(component).toBeTruthy();
  });
  it('should  create relaxing enviroment in div with class service-content', () => {
    expect(component).toBeTruthy();
  });
  it('should create Relaxing Enviroment in div with class service-content', () => {
    const aboutElement: HTMLElement = fixture.nativeElement;
    expect(aboutElement.querySelectorAll('div.service-content')[2]).toBeTruthy();
    expect(aboutElement.querySelectorAll('div.service-content')[2].childElementCount).toEqual(2);
    expect(aboutElement.querySelectorAll('div.service-content h5')[2].textContent).toEqual('Relaxing Enviroment');
    expect(aboutElement.querySelectorAll('div.service-content p')[2].textContent.trim()).
    toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.');
  });
});
