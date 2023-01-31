import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { MaterialBoxComponent } from './pages/home/components/material-box/material-box.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path: 'materials',
  component: MaterialBoxComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
