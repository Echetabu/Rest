import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/model/country.dao';
import { NetworkLibService } from 'src/app/shared/network-lib.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  @Input() country! : Country

  constructor() { }

  ngOnInit(): void {
  }

}
