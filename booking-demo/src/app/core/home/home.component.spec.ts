import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Component, DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { CoreModule } from '../core.module';
import { AppModule } from '../../app.module';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-pre-loader',
  template: ''
})
class MockPreLoaderComponent {
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, CoreModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have welcome header',()=>{
    const homeElement: HTMLElement = fixture.nativeElement;
    expect(homeElement.querySelector('div.inside-wrapper h3').textContent).toEqual('Welcome to Châm Trâm');
  })

  it('should blank input',()=>{
    const homeElement: HTMLElement = fixture.nativeElement;
    const input: HTMLInputElement = homeElement.querySelector('input');
    expect(input.value).toEqual('');
  })

  it('should have input telephone number',()=>{
    const homeElement: HTMLElement = fixture.nativeElement; 
    expect(homeElement.querySelector('div.input_sdt form').textContent.trim()).toEqual('Đặt Lịch Giữ Chỗ');
  })
  
  
  it('check button booking disabled',()=>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let input: HTMLInputElement = fixture.debugElement.query(By.css('input[type=tel]')).nativeElement as HTMLInputElement;
      let buttonSubmit: HTMLButtonElement = fixture.debugElement.query(By.css('button.btn-booking')).nativeElement  as HTMLButtonElement;

      input.focus();
      input.value = '0654651066';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(buttonSubmit.disabled).toBe(true);

      input.focus();
      input.value = '012345678';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(buttonSubmit.disabled).toBe(true);

      input.focus();
      input.value = 'abc1234';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(buttonSubmit.disabled).toBe(true);
    });
  });

  it('check button booking enable',()=>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let input: HTMLInputElement = fixture.debugElement.query(By.css('input[type=tel]')).nativeElement as HTMLInputElement;
      let buttonSubmit: HTMLButtonElement = fixture.debugElement.query(By.css('button.btn-booking')).nativeElement  as HTMLButtonElement;
      input.focus();
      input.value = '0369546356';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(buttonSubmit.disabled).toBe(false);
    });
  });
 });
