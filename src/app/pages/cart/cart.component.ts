import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']


})
export class CartComponent {

  cart: Cart = {items:[
    {
      product: 'https://via.placeholder.com/150',
      name: 'Margarita',
      price: 12.40,
      quantity: 1,
      id: 1,
    }
  ]};

  
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private cartService: CartService){}

  ngOnInit (): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) =>{
      this.cart = _cart;
      this.dataSource = this.cart.items;

    }
    );
  }
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  onClearCart():void{
    this.cartService.clearCart();
  }
  onremoveFromCart(item: CartItem):void{
    this.cartService.removeFromCart(item);
  }
  onAddQuantity(item: CartItem):void{
    this.cartService.addToCart(item);
}
// remove ostoskorissa oleva miinuspainike
onRemoveQuantity(item: CartItem):void{
  this.cartService.removeQuantity(item);
}



}
