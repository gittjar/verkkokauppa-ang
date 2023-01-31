import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from 'src/app/models/product.models'

import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
 
})


export class ProductBoxComponent {
@Input () fullWidthMode = false;
@Input () product: Product | undefined;

// alasvetovalikko
panelOpenState = false;


/* = {
  id: 1,
  title: 'Margarita',
  price: 12,
  category: 'pizzas',
  description: 'tuotekuvaus',
  image: 'https://via.placeholder.com/150'
};*/

@Output() addToCart = new EventEmitter();
availableColors: any;

constructor(){}

onAddToCart(): void{
  this.addToCart.emit(this.product);
}



}


/*
export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export class ChipsStackedExample {
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ];
}
*/