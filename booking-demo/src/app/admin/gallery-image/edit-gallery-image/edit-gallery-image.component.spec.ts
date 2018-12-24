import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGalleryImageComponent } from './edit-gallery-image.component';

describe('EditGalleryImageComponent', () => {
  let component: EditGalleryImageComponent;
  let fixture: ComponentFixture<EditGalleryImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGalleryImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGalleryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
