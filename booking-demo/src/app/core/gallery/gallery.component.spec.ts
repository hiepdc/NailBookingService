import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { Component } from '@angular/core';
import { AppModule } from '../../app.module';
import { CoreModule } from '../core.module';
import { APP_BASE_HREF } from '@angular/common';
import { LoaderService } from '../http-handle';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pre-loader',
  template: ''
})

class MockPreLoaderComponent {
}
describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let loaderService: LoaderService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //declarations: [ GalleryComponent ]
      imports: [AppModule, CoreModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
    loaderService = TestBed.get(LoaderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Album ảnh header', () => {
    const galleryElement: HTMLElement = fixture.nativeElement;
    loaderService.isLoading = new BehaviorSubject(true);
    expect(galleryElement.querySelector('h2').textContent).toEqual("Album Ảnh");
  });

  // it('should create Album ảnh header', () => {
  //   const galleryElement: HTMLElement = fixture.nativeElement;
  //   expect(galleryElement.querySelector('div.section-heading')).toBeTruthy();
  //   expect(galleryElement.querySelector('div.section-heading').textContent.trim()).toEqual('ALBUM ẢNH');
  // });
  // it('Check head is null',()=>{
  //   const galleryElement : HTMLElement = fixture.nativeElement; 
  //   expect(galleryElement.querySelector('div.section-heading')).toBeTruthy();
  //   expect(galleryElement.querySelector('div.section-heading').textContent).toEqual('');

//  })
});
