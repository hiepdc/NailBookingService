import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpHandleModule } from './http-handle';
import {
  SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';
import { MaterialModule } from './material.module';
import { LightboxModule } from 'ngx-lightbox';
import { Routes, RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { CoreComponent } from './core.component';
import { BookingComponent } from './booking/booking.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricesComponent } from './prices/prices.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ConfirmedBookingComponent } from './confirmed-booking/confirmed-booking.component';
import { CollectionComponent } from './collection/collection.component';
import { BlogComponent } from './blog/blog.component';

import { StylistService } from './stylist.service';
import { ConfirmBookingService } from './confirm-booking.service';
import { GalleryService } from './gallery.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // BrowserModule,
    HttpClientModule,
    CoreRoutingModule,
    SwiperModule,
    // BrowserAnimationsModule,
    MaterialModule,
    LightboxModule,
    HttpHandleModule
  ],
  declarations: [
    HomeComponent,
    ServicesComponent,
    BookingComponent, 
    GalleryComponent,
    PricesComponent,
    AboutusComponent,
    CoreComponent,
    ConfirmedBookingComponent,
    CollectionComponent,
    SideNavComponent,
    PreLoaderComponent
  ],
  providers: [
    StylistService,
    ConfirmBookingService,
    GalleryService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
  ],
})
export class CoreModule { }
