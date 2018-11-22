import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';
  import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { PageContentComponent } from './page-content/page-content.component';
import { StylistService } from './stylist.service';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricesComponent } from './prices/prices.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ConfirmedBookingComponent } from './confirmed-booking/confirmed-booking.component';
import { VerifyPinNumberComponent } from './verify-pin-number/verify-pin-number.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PreLoaderComponent,
    PageContentComponent,
    HomeComponent,
    ServicesComponent,
    GalleryComponent,
    PricesComponent,
    AboutusComponent,
    ConfirmedBookingComponent,
    VerifyPinNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    SwiperModule,
  ],
  providers: [
    StylistService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
