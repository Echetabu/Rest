import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [NavComponent, HttpClientModule]
})
export class SharedModule { }
