import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from './../cart-state-store/cart.actions';
import { Product } from './../entity/product';



export const PRODUCTS = [ {
  id: 1,
  name: "Apple Iphone 13 pro",
  description: "Price in india: Rs.1,15,000.60.  Rear camera: 12 MP + 12 MP + 12 MP",
  price: 115000.60,
  image: "assets/Iphone-13-pro.jpg",
}, {
  id: 2,
  name: "Oral B Toothbrush",
  description: "Frozen Characters Electric Automatic Toothbrush",
  price: 1800.25,
  image: "assets/kids-frozen-rechargeable.jpeg",
}, {
  id: 3,
  name: "APPLE Airpods Pro",
  description: "Price in india: ₹23,900. APPLE Airpods Pro With Active noise cancellation",
  price: 23900.15,
  image: "assets/airbass-xpods-boult.jpeg",
}]


@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public products(): Product[] {
    return PRODUCTS
  }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}
