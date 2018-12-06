import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component'
import { PusherService } from './pusher.service';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    NotificationComponent,
    ServiceComponent,
    LoginComponent,
    LogoutComponent
    ],
  providers: [
    PusherService
  ]
})
export class AdminModule { }
