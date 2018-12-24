import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGalleryImageComponent } from './add-gallery-image.component';

describe('AddGalleryImageComponent', () => {
  let component: AddGalleryImageComponent;
  let fixture: ComponentFixture<AddGalleryImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGalleryImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
