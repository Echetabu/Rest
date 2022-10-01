import { Component, EventEmitter, OnInit, Output } from '@angular/core';

const regions = [
  "All", "Africa", "Americas", "Asia", "Europe", "Oceania"
]

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.scss']
})
export class HomeFilterComponent implements OnInit {
  isOpen: Boolean = false;
  searchQuery: String = "";
  selectedText: string = "Filter by Region";
  @Output() filterByRegion : EventEmitter<string> = new EventEmitter();
  @Output() filterByUserSearch : EventEmitter<string> = new EventEmitter();
  
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
    this.filterByRegion.emit(region);
  }

  filterBySearch(data: string){
    this.filterByUserSearch.emit(data)
  }

}
