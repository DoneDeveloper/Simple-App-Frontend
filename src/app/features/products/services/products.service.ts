import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { car } from 'src/app/shared/models/requests/warehouseResponse';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cart: car[] = [];
  constructor(private apiServise : ApiService) { }

    getAllProducts(){
      return this.apiServise.getAllProducts()
      .pipe(
        map(productsOverview => {
            return productsOverview;
        }),
        catchError((err) => {
            console.log('error caught in service');
            return throwError(err);    //Rethrow it back to component
        })
      )
    }

    getCar(carId: any){
      return this.apiServise.getCar(carId)
      .pipe(
        map(detailedCar => {
          return detailedCar;
      }),
      catchError((err) => {
        console.log('error caught in service');
        return throwError(err);    //Rethrow it back to component
    })
      );
    }

    addToCart(car: car){
      this.cart.push(car);
    }

    getCartList(): any{
      return this.cart;
    }

    removeItem(item: any){
      var index = this.cart.indexOf(item);
      this.cart.splice(index,1);
    }
}
