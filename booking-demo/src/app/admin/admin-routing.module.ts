import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';
import { BookingComponent } from './booking/booking.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { StylistComponent } from './stylist/stylist.component';
import { ShiftComponent } from './shift/shift.component';
import { CustomerComponent } from './customer/customer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';
import { GalleryComponent } from './gallery/gallery.component';

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
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'services',
        component: ServiceComponent,
      },
      {
        path: 'services-items',
        component: ServiceItemComponent,
      },
      {
        path: 'bookings',
        component: BookingComponent,
      },
      {
        path: 'stylists',
        component: StylistComponent,
      },
      {
        path: 'shifts',
        component: ShiftComponent,
      },
      {
        path: 'customers',
        component: CustomerComponent,
      },
      {
        path: 'feedbacks',
        component: FeedbackComponent,
      },
      {
        path: 'galleries',
        component: GalleryComponent,
      },
      {
        path: 'gallery-images',
        component: GalleryImageComponent,
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(aroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
