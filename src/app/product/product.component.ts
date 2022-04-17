import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Array<Product>=[];

  public productList : any;
  constructor(public api : ApiService, private cartService : CartService,
    public prodSer:ProductService) { }

  ngOnInit(): void {
    this.retrieveAllProduct();

    this.api.getProduct()
    .subscribe(res=> {
      this.productList = res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.itemprice});
      });
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  retrieveAllProduct() {
    this.prodSer.loadAllProductDetails().subscribe(result=>this.product=result,
      error=>console.log(error));
  }

}

