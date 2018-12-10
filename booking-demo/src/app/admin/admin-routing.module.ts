import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';
import { BookingComponent } from './booking/booking.component';

const aroutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'notification',
        component: NotificationComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'booking',
        component: BookingComponent,
      },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(aroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
