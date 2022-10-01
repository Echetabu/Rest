import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/model/country.dao';
import { NetworkLibService } from 'src/app/shared/network-lib.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  private countriesInfo : Country[] = [];
  countries : Country[] = [];

  constructor(private readonly networkLib: NetworkLibService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.networkLib.get<Country[]>('all').subscribe({
      next: (data) => {
        this.countriesInfo = data;
        this.countries = data
      },
      error: (e) => {
        console.log(e)
        this.isLoading = false;
      },
      complete: () => this.isLoading = false
    })
  }

  filterByRegion(region: string) {
    if(region === 'All'){
      this.countries = [ ...this.countriesInfo ];
    }else{
      const selectedRegion = this.countriesInfo.filter(country => country.region === region);
      this.countries = [...selectedRegion];
    }
  }

  filterBySearch(query: string) {
    const matches = this.countriesInfo.filter(country => country.name.common.indexOf(query) > -1);
    this.countries = [...matches];
  }

}
