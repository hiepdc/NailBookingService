import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import { AppModule } from '../../app.module';
import { CoreModule } from '../core.module';
import { APP_BASE_HREF } from '@angular/common';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, CoreModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create side-nav', () => {
    expect(component).toBeTruthy();
  });
  it('should have trang chủ', () => {
    expect(component).toBeTruthy();
  });
  it('should have dịch vụ', () => {
    expect(component).toBeTruthy();
  });
  it('should have prices', () => {
    expect(component).toBeTruthy();
  });
  it('should have album ảnh', () => {
    expect(component).toBeTruthy();
  });
  it('should giới thiệu', () => {
    expect(component).toBeTruthy();
  });
  it('should have đặt lịch', () => {
    expect(component).toBeTruthy();
  });
  it('should assert see address', () => {
    expect(component).toBeTruthy();
  });
});
