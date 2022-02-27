import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../models/general/apiResult';
import { environment } from 'src/environments/environment';
import { HttpOptions } from '../constants/httpOptions';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private httpOptions: Object;

  constructor(){
    //private http: HttpClient) {
      //his.httpOptions = HttpOptions
     }

  // public getAllProducts() {
  //   return this.http.post<APIResult<any>>(`${environment.apiUrl}/api/product/get-products`, this.httpOptions);
  // }

}
