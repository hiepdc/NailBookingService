import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { PageContentComponent } from './page-content/page-content.component';
import { StylistService } from './stylist.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PreLoaderComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
