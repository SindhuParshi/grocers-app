import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public totalItem : number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=> {
      this.totalItem = res.length;
    })

  }

}
