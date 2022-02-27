import { Component, Input, OnInit } from '@angular/core';
import { first, sequenceEqual } from 'rxjs';
import { ProductsService } from './services/products.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  
  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    //Get all products request
    // this.productsService.getAllProducts()
    // .pipe(first())
    // .subscribe();
    
  }
  
  handleAction(event: any){
    switch(event){
      case('add-cart'):{
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
      break;
    }
  }
}
