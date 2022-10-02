import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', loadChildren:() =>  import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'detail/:id', loadChildren: ()=> import('./pages/detail/detail.module').then(m => m.DetailModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
