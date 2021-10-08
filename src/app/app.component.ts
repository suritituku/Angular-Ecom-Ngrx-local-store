import { flatten } from '@angular/compiler';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectCountProducts } from './cart-state-store/cart.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EcomApp';
  hidden = false;

  countProducts$!: number;


  constructor(private store: Store, ) {
  
    store.select(selectCountProducts).subscribe((res: number) => {
      this.countProducts$ = res;
    })
    
  }


 
  

}
