import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss']
})
export class BackBtnComponent implements OnInit {

  @Input() text: string = '';

  @Output() click = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.click.emit();
  }

}
