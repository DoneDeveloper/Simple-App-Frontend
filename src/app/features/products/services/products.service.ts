import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiServise : ApiService) { }

  // getAllProducts(){
  //   return this.apiServise.getAllProducts()
  //   .pipe(
  //     map(productsOverview => {
  //       if(productsOverview.Status == true){
  //           return productsOverview;
  //       }
  //       return false;
  //     }),
  //     catchError((err) => {
  //         console.log('error caught in service');
  //         return throwError(err);    //Rethrow it back to component
  //     })
  //   )
  // }
}
