import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCart, removeProductall } from '../cart-state-store/cart.actions';
import { addProduct, removeProduct } from './../cart-state-store/cart.actions';
import { ProductGroup, selectGroupedCartEntries,selectCountProducts, selectTotalPrice } from './../cart-state-store/cart.selectors';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;
  count: Observable<number>;
  cartEntries$: Observable<ProductGroup[]>
  

  constructor(private store: Store, ) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
    this.countProducts$ = store.select(selectCountProducts);
    this.totalPrice$ = store.select(selectTotalPrice)
    this.count = store.select(selectCountProducts)
  }
 

  ngOnInit(): void {

 
  
  }

  clearEntries () {
    this.store.dispatch(clearCart());
  }

  more(entry: ProductGroup) {
    this.store.dispatch(addProduct(entry.product));
  }

  less (entry: ProductGroup) {
    this.store.dispatch(removeProduct(entry.product));
  }

  revp (entry: ProductGroup) {
    this.store.dispatch(removeProductall(entry.product));
  }


}