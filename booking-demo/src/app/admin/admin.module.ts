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
    BookingComponent
    ],
  providers: [
    PusherService,
    AuthenticationService,
    AuthGuard,
    BookingService
  ]
})
export class AdminModule { }
