import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { LogoutComponent } from './logout/logout.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
const aroutes: Routes = [

  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'notification', pathMatch: 'full' },
      // { path: '', component: AdminComponent },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'notification',
        component: NotificationComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(aroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
