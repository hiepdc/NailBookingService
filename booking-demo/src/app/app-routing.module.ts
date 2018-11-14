import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PageContentComponent } from './page-content/page-content.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricesComponent } from './prices/prices.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'booking', component: PageContentComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'aboutus', component: AboutusComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }