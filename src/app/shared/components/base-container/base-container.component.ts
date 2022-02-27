import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from 'src/app/features/cart/cart.component';

@Component({
  selector: 'app-base-container',
  templateUrl: './base-container.component.html',
  styleUrls: ['./base-container.component.sass']
})
export class BaseContainerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  handleAction(event: any){
    if(event=="open-shoping-cart"){
      this.dialog.open(CartComponent, {
        width: '550px',
        autoFocus: false
      });
    }
  }

}
