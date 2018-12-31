import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImageComponent } from './gallery-image.component';
import { AdminModule } from '../admin.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../../app.module';

describe('GalleryImageComponent', () => {
  let component: GalleryImageComponent;
  let fixture: ComponentFixture<GalleryImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, AdminModule ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
