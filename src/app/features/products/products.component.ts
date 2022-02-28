import { Component, Input, OnInit } from '@angular/core';
import { first, sequenceEqual } from 'rxjs';
import { ProductsService } from './services/products.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { car, cars, warehouseResponse } from 'src/app/shared/models/requests/warehouseResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  
  warehouseList !: warehouseResponse[];
  carList : car[] = [];

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {

    //Get all warehouses by request request
      this.productsService.getAllProducts()
      .pipe(first())
      .subscribe((res)=>{
        this.warehouseList = res.data;
        
        //Create and order list of all cars
        this.warehouseList.forEach((warehouse) => {
          warehouse.cars.vehicles.forEach((car) => {
            this.carList.push(car);
          });
        });
        this.carList.sort((a , b) =>(new Date(a.date_added)<new Date(b.date_added))?1:-1
        );
        
      });
      
  }
  
  handleAction(event: any, selectedCar: car){
    console.log(event);
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
        break;
      }
      case('more-details'):{
        this.router.navigateByUrl('/detailed-card', { state: { car: selectedCar } });
        break;
      }
      
    }
  }
}
