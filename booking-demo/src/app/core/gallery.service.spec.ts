import { TestBed, inject } from '@angular/core/testing';

import { GalleryService } from './gallery.service';
import { AppModule } from '../app.module';
import { CoreModule } from './core.module';
import { APP_BASE_HREF } from '@angular/common';

describe('GalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, CoreModule],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    });
  });

  it('should be created', inject([GalleryService], (service: GalleryService) => {
    expect(service).toBeTruthy();
  }));
});
