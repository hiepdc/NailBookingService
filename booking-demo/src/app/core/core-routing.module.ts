import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricesComponent } from './prices/prices.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ConfirmedBookingComponent } from './confirmed-booking/confirmed-booking.component';
import { CollectionComponent } from './collection/collection.component';
import { CoreComponent } from './core.component'

const routes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'booking', component: BookingComponent },
            { path: 'gallery', component: GalleryComponent },
            { path: 'prices', component: PricesComponent },
            { path: 'aboutus', component: AboutusComponent },
            { path: 'booking/:phone/:customerName/:hour/:date/:stylistName', component: ConfirmedBookingComponent },
            { path: 'gallery/:collectionId/:collectionName', component: CollectionComponent }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],

    exports: [RouterModule]
})
export class CoreRoutingModule { }
