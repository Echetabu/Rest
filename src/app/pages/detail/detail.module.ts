import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { BackBtnComponent } from './back-btn/back-btn.component';



@NgModule({
  declarations: [
    DetailComponent,
    BackBtnComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
