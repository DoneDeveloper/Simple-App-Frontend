import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../models/general/apiResult';
import { environment } from 'src/environments/environment';
import { HttpOptions } from '../constants/httpOptions';
import { warehouseResponse } from '../models/requests/warehouseResponse';
import { FullDescriptionCar } from '../models/requests/fullDescriptionCar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   private httpOptions: Object;

   constructor(
     private http: HttpClient) {
       this.httpOptions = HttpOptions
      }

   public getAllProducts() {
      return this.http.get<APIResult<warehouseResponse[]>>(`${environment.apiUrl}/api/product/get-products`, this.httpOptions)
   }

   public getCar(carId: any){
      return this.http.get<APIResult<FullDescriptionCar>>(`${environment.apiUrl}/api/product/get-car/${carId}`, this.httpOptions)
   }

}
