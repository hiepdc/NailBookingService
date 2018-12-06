import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { LogoutComponent } from './logout/logout.component';
import { ServiceComponent } from './service/service.component';

const aroutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'login',
        component: DashboardComponent,
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(aroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
