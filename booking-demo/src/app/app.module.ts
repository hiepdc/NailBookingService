import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHandleModule } from '../app/core/http-handle';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';
  import { MaterialModule } from './core/material.module';
  import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
// import { SideNavComponent } from './side-nav/side-nav.component';
// import { PreLoaderComponent } from './pre-loader/pre-loader.component';
// import { PageContentComponent } from './page-content/page-content.component';
// import { HomeComponent } from './home/home.component';
// import { ServicesComponent } from './services/services.component';
// import { GalleryComponent } from './gallery/gallery.component';
// import { PricesComponent } from './prices/prices.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { ConfirmedBookingComponent } from './confirmed-booking/confirmed-booking.component';
// import { CollectionComponent } from './collection/collection.component';
// import { BlogComponent } from './blog/blog.component';

// import { StylistService } from './stylist.service';
// import { ConfirmBookingService } from './confirm-booking.service';
// import { GalleryService } from './gallery.service';

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: 'horizontal',
//   slidesPerView: 'auto'
// };

@NgModule({
  declarations: [
    AppComponent,
    // SideNavComponent,
    // PreLoaderComponent,
    // PageContentComponent,
    // HomeComponent,
    // ServicesComponent,
    // GalleryComponent,
    // PricesComponent,
    // AboutusComponent,
    // ConfirmedBookingComponent,
    // CollectionComponent,
    // BlogComponent
  ],
  imports: [
    AppRoutingModule,
    HttpHandleModule,
    AdminModule,
    FormsModule,
    CoreModule,
    SwiperModule,
    BrowserAnimationsModule,
    MaterialModule,
    LightboxModule,
    BrowserModule
  ],
  providers: [
    // StylistService,
    // ConfirmBookingService,
    // GalleryService,
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
