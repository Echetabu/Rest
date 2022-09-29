import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/shared/model/country.dao';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  country?: Country;

  constructor(private readonly activatedRouter: ActivatedRoute, private readonly location: Location) { }

  goBack(){
    this.location.back()
  }

  ngOnInit(): void {
    this.activatedRouter.data.subscribe({
      next : (data) =>{
        this.country = data['detail'][0]
        console.log('------------------')
        console.log(this.country)
        console.log('--------SSSSSSSSSSSS----------')
      }
    })
  }

}
