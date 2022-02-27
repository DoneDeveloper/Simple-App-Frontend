import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardType } from '../../enums/cardType';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.sass']
})
export class MatCardComponent implements OnInit {
  
  @Input() title!: string;
  @Input() titleDescription!: string;
  @Input() cardType!: CardType;
  @Output() action = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
