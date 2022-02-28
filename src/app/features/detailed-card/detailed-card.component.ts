import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { car } from 'src/app/shared/models/requests/warehouseResponse';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.sass']
})
export class DetailedCardComponent implements OnInit {

  selectedCar !: car;

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    this.selectedCar = history.state.car;
  }

  handleAction(event: any){
    if(event=="open-shoping-cart"){
      this.dialog.open(CartComponent, {
        width: '550px',
        autoFocus: false
      });
    }
  }

  addToCart(){
    this.dialog.open(ModalComponent, {
      panelClass: 'custom-dialog-container',
      hasBackdrop: false,
      width: '350px',
      autoFocus: false,
      position: {
        top: '5rem',
        right: '2rem'
      }
    });
  }

  
}
