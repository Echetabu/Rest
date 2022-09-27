import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isDark: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document, private readonly renderer : Renderer2) { }

  ngOnInit(): void {

  }

  toggleTheme() {
    this.isDark = this.document.body.classList.toggle('dark-mode')
    // if(this.document.body.classList.contains('dark-mode')){
    //   this.renderer.removeClass(this.document.body, 'dark-mode')
    // }else{
    //   this.renderer.addClass(this.document.body, 'dark-mode')
    // }
  }

}
