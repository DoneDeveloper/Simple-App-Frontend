import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { car } from 'src/app/shared/models/requests/warehouseResponse';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  cartList: car[]= [];
  totalPrice: number = 0;

  constructor(
    private productsService: ProductsService,) { }

  ngOnInit(): void {
    this.cartList = this.productsService.getCartList();
    this.cartList.forEach(element => {
      this.totalPrice += element.price;
    });

  }
  
  removeItem(item: any){
    this.productsService.removeItem(item);
    if(this.cartList.length>0){
      this.totalPrice=0;
      this.cartList.forEach(element => {
        this.totalPrice += element.price;
        
      });
    }else{
      this.totalPrice=0;
    }
    
  }

}
