import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {

  @Output() action = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
