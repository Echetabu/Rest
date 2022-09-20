import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeFilterComponent } from './home-filter/home-filter.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent,
    HomeFilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
