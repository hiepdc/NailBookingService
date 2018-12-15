import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// import { AdminModule} from './admin/admin.module';
// import { CoreModule } from './core/core.module';

const routes:Routes = [
  // {
  //   path: '', loadChildren: ()=> CoreModule
  // },
  // {
  //   path: 'admin', loadChildren: ()=> AdminModule
  // }
  {
    path: '', loadChildren: 'app/core/core.module#CoreModule'
  },
  {
    path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'
  }
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
