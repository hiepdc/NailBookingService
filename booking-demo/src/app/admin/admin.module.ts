import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule} from 'ngx-pagination';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component'
import { PusherService } from './pusher.service';
import { ServiceComponent } from './service/service.component';
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
import { StylistComponent } from './stylist/stylist.component';
import { ShiftComponent } from './shift/shift.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule
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
    StylistComponent,
    ShiftComponent,
    ServiceItemComponent,
    GalleryImageComponent
    ],
  providers: [
    PusherService,
    AuthenticationService,
    AuthGuard,
    BookingService,
    ServicesService
  ]
})
export class AdminModule { }
