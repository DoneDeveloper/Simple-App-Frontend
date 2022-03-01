import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/features/products/services/products.service';
import { CardType } from '../../enums/cardType';
import { car } from '../../models/requests/warehouseResponse';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.sass']
})
export class MatCardComponent implements OnInit {
  
  @Input() car!: car;
  @Input() cardType!: CardType;
  @Output() action = new EventEmitter<string>();
  clicked: boolean = false;
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.action.emit('add-cart');
  }

}
