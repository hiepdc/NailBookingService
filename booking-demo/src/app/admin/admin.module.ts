import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule} from 'ngx-pagination';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { PusherService } from './pusher.service';
import { ServiceComponent } from './service/service.component';
import { AgGridModule} from 'ag-grid-angular';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
// import { ToastModule } from 'ng2-toastr/ng2-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './_services/authentication.service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './_guards';
import { BookingComponent } from './booking/booking.component';
import { BookingService } from './booking/booking.service';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ServicesService} from '../admin/service/services.service';
import { CustomerComponent } from './customer/customer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShiftComponent } from './shift/shift.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';
import { StylistComponent } from './stylist/stylist.component';
import { StylistService } from './stylist/stylist.service';
import {
  MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule,
} from '@angular/material';
import { AddDialogComponent } from './stylist/dialogs/add-dialog/add-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
    MatTableModule, MatToolbarModule
    // ToastModule.forRoot(),
    // BrowserAnimationsModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    NotificationComponent,
    ServiceComponent,
    LoginComponent,
    BookingComponent,
    FooterComponent,
    SidebarComponent,
    CustomerComponent,
    FeedbackComponent,
    GalleryComponent,
    ShiftComponent,
    ServiceItemComponent,
    GalleryImageComponent,
    StylistComponent,
    AddDialogComponent
    ],
    entryComponents: [
      AddDialogComponent
    ],
  providers: [
    PusherService,
    AuthenticationService,
    AuthGuard,
    BookingService,
    ServicesService,
    StylistService
  ]
})
export class AdminModule { }
