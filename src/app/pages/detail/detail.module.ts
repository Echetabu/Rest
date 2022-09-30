import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { DetailPipe } from './detail.pipe';
import { LangPipe } from './lang.pipe';
import { NativeNamePipe } from './native-name.pipe';
import { FormatNumberPipe } from './format-number.pipe';



@NgModule({
  declarations: [
    DetailComponent,
    BackBtnComponent,
    DetailPipe,
    LangPipe,
    NativeNamePipe,
    FormatNumberPipe
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
