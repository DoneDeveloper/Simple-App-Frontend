import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { FullDescriptionCar } from 'src/app/shared/models/requests/fullDescriptionCar';
import { car } from 'src/app/shared/models/requests/warehouseResponse';
import { CartComponent } from '../cart/cart.component';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.sass']
})
export class DetailedCardComponent implements OnInit {

  selectedCar !: car;
  car !: FullDescriptionCar;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.selectedCar = history.state.car;
    this.productsService.getCar(this.selectedCar?._id)
    .pipe(first())
      .subscribe({
        next: doneStatus => {
          this.car = doneStatus.data
        }
      });
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
