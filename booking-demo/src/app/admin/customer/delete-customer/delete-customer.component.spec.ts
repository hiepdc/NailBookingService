import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerComponent } from './delete-customer.component';
import { AppModule } from '../../../app.module';
import { AdminModule } from '../../admin.module';
import { APP_BASE_HREF } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// describe('DeleteCustomerComponent', () => {
//   let component: DeleteCustomerComponent;
//   let fixture: ComponentFixture<DeleteCustomerComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [ AppModule, AdminModule ],
//       providers: [ {provide: APP_BASE_HREF, useValue: '/'}, MatDialogRef, MAT_DIALOG_DATA ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DeleteCustomerComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
