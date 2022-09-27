import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/model/country.dao';
import { NetworkLibService } from 'src/app/shared/network-lib.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries : Country[] = []

  constructor(private readonly networkLib: NetworkLibService) { }

  ngOnInit(): void {
    this.networkLib.get<Country[]>('all').subscribe({
      next: (data) => this.countries = data,
      error: (e) => console.log(e),
      complete: () => console.log('I don complete o!')
    })
  }

}
