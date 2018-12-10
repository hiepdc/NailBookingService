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
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ServicesService} from '../admin/service/services.service';
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
    LogoutComponent,
    FooterComponent,
    SidebarComponent
    ],
  providers: [
    ServicesService,
    PusherService
  ]
})
export class AdminModule { }
