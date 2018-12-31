import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { PusherService } from './pusher.service';
import { ServiceComponent } from './service/service.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatNativeDateModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
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
import { EditDialogComponent } from './stylist/dialogs/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './stylist/dialogs/delete-dialog/delete-dialog.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { DeleteServiceItemComponent } from './service-item/delete-service-item/delete-service-item.component';
import { EditServiceItemComponent } from './service-item/edit-service-item/edit-service-item.component';
import { AddServiceItemComponent } from './service-item/add-service-item/add-service-item.component';
import { AddGalleryComponent } from './gallery/add-gallery/add-gallery.component';
import { EditGalleryComponent } from './gallery/edit-gallery/edit-gallery.component';
import { DeleteGalleryComponent } from './gallery/delete-gallery/delete-gallery.component';
import { AddGalleryImageComponent } from './gallery-image/add-gallery-image/add-gallery-image.component';
import { EditGalleryImageComponent } from './gallery-image/edit-gallery-image/edit-gallery-image.component';
import { DeleteGalleryImageComponent } from './gallery-image/delete-gallery-image/delete-gallery-image.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { GalleryService } from './gallery/gallery.service';
import { ServicesService } from './service/services.service';
// import { AddShiftComponent } from './shift/add-shift/add-shift.component';
// import { EditShiftComponent } from './shift/edit-shift/edit-shift.component';
import { DeleteShiftComponent } from './shift/delete-shift/delete-shift.component';
import { ShiftService } from './shift/shift.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

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
    MatTableModule, MatToolbarModule, MatDatepickerModule, MatListModule, MatNativeDateModule,
    MatSelectModule
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
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    DeleteCustomerComponent,
    DeleteServiceItemComponent,
    EditServiceItemComponent,
    AddServiceItemComponent,
    AddGalleryComponent,
    EditGalleryComponent,
    DeleteGalleryComponent,
    AddGalleryImageComponent,
    EditGalleryImageComponent,
    DeleteGalleryImageComponent,
    EditServiceComponent,
    // AddShiftComponent,
    // EditShiftComponent,
    DeleteShiftComponent
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    DeleteCustomerComponent,
    DeleteServiceItemComponent,
    EditServiceItemComponent,
    AddServiceItemComponent,
    AddGalleryComponent,
    EditGalleryComponent,
    DeleteGalleryComponent,
    AddGalleryImageComponent,
    EditGalleryImageComponent,
    DeleteGalleryImageComponent,
    EditServiceComponent,
    // AddShiftComponent,
    // EditShiftComponent,
    DeleteShiftComponent
  ],
  providers: [
    PusherService,
    AuthenticationService,
    AuthGuard,
    BookingService,
    StylistService,
    GalleryService,
    ServicesService,
    ShiftService
  ]
})
export class AdminModule { }
