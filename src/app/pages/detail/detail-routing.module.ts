import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';
import { GetDataResolver } from './get-data.resolver';


const routes: Routes = [
  {
    path: '', 
    component: DetailComponent,
    // resolve: {
    //   detail: GetDataResolver
    // }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
