import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionComponent } from './collection.component';
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
describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     // declarations: [ CollectionComponent ]
     imports: [AppModule, CoreModule],
     providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
