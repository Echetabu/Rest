import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { DetailPipe } from './detail.pipe';



@NgModule({
  declarations: [
    DetailComponent,
    BackBtnComponent,
    DetailPipe
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
