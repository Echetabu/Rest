import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isDark: Boolean = false;
  constructor(@Inject(DOCUMENT) private document: any, private readonly renderer : Renderer2) { }

  ngOnInit(): void {

  }

  toggleTheme() {
    if(!this.isDark){
      this.renderer.addClass(this.document.body, 'dark-mode')
    }
    
  }

}
