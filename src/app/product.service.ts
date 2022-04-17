import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
  loadAllProductDetails():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9090/api/product/retrieveProduct")
  }

  storeProductDetails(productList:Product):Observable<any>{
    return this.http.post("http://localhost:9090/api/product/storeProduct",productList) 
  }

}
