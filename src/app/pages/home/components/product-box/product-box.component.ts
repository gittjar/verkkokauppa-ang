import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from 'src/app/models/product.models'

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
 
})
export class ProductBoxComponent {
@Input () fullWidthMode = false;
@Input () product: Product | undefined;
/* = {
  id: 1,
  title: 'Margarita',
  price: 12,
  category: 'pizzas',
  description: 'tuotekuvaus',
  image: 'https://via.placeholder.com/150'
};*/

@Output() addToCart = new EventEmitter();

constructor(){}

onAddToCart(): void{
  this.addToCart.emit(this.product);
}
}