import { Component, OnInit } from '@angular/core';

const regions = [
  "All",
  "Asia",
  "Africa"
]

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.scss']
})
export class HomeFilterComponent implements OnInit {
  isOpen: Boolean = false;
  selectedText: string = "Filter by Region";
  
  regions: string[] = regions;

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility() {
    this.isOpen = !this.isOpen;
  }

  setSelected(region: string){
    this.isOpen = false;
    this.selectedText = region;
  }

}
