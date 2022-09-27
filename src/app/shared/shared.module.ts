import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component'

@NgModule({
  declarations: [
    NavComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [NavComponent, LoadingComponent, HttpClientModule]
})
export class SharedModule { }
