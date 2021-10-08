import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path:'cart', component: CartComponent},
  {path: 'home', component: HomePageComponent,
  children: [
    {path: 'electronic', component: ElectronicComponent}
   

  ],}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
