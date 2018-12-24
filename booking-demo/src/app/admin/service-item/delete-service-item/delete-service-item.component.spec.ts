import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceItemComponent } from './delete-service-item.component';

describe('DeleteServiceItemComponent', () => {
  let component: DeleteServiceItemComponent;
  let fixture: ComponentFixture<DeleteServiceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServiceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
