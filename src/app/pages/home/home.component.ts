import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.models';
import { Material } from 'src/app/models/material.models';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { MaterialstoreService } from 'src/app/services/materialstore.service';

const ROWS_HEIGHT: { [id:number]: number } = { 1: 400, 3: 355, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  pizzacategory : string | undefined;
  burgercategory : string | undefined;
  snackcategory : string | undefined;
  drinkcategory : string | undefined;
  kaikkituotteet : string | undefined;

  kaikkimateriaalit: string | undefined;

  materials: Array<Material> | undefined;
  products: Array<Product> | undefined;

  sort = 'desc';
  count = '12';

  // materiaalien hakua varten
  Msort = 'desc';
  Mcount = '6';
  Mcategory: string | undefined;

  productSubcription: Subscription | undefined;
  materialSubcription : Subscription | undefined;

  constructor(private cartService: CartService, 
    private storeService : StoreService, private materialstoreService : MaterialstoreService){}

  ngOnInit(): void{
    this.getProducts();
  }

  getProducts(): void{
     this.productSubcription = this.storeService.getAllProducts(this.count, this.sort, this.category)
    .subscribe((_products) => {this.products = _products;});
  }



  // materiaalin haku
  getMaterials(): void{
    this.materialSubcription = this.materialstoreService.getAllMaterials(this.Mcount, this.Msort, this.Mcategory)
   .subscribe((_materials) => {this.materials = _materials;});
 }
 onShowAllMaterials(newAllMaterials: string): void{
  this.kaikkimateriaalit = newAllMaterials;
  this.getMaterials();

}

  // kaikki tuotteet
  getKaikkiTuotteet(): void{
    this.productSubcription = this.storeService.getKaikkiTuotteet(this.count, this.sort, this.category)
   .subscribe((_products) => {this.products = _products;});
 }

  onShowKaikkiTuotteet(newKaikkiTuotteet: string): void{
    this.kaikkituotteet = newKaikkiTuotteet;
    this.getProducts();
  }

  // Pizzan haku kts. metodit
  getProductsPizza(): void{
    this.productSubcription = this.storeService.getPizzaProducts(this.count, this.sort, this.category)
   .subscribe((_products) => {this.products = _products;});
 }

  onShowPizzaCategory(newPizzaCategory: string): void{
    this.pizzacategory = newPizzaCategory;
    this.getProductsPizza();
  }

  // Burgerien haku
  getProductsBurger(): void{
    this.productSubcription = this.storeService.getBurgerProducts(this.count, this.sort, this.category)
   .subscribe((_products) => {this.products = _products;});
 }

  onShowBurgerCategory(newBurgerCategory: string): void{
    this.burgercategory = newBurgerCategory;
    this.getProductsBurger();
  }

  // Juomien haku
  getProductsDrink(): void{
    this.productSubcription = this.storeService.getDrinkProducts(this.count, this.sort, this.category)
   .subscribe((_products) => {this.products = _products;});
 }

  onShowDrinkCategory(newDrinkCategory: string): void{
    this.drinkcategory = newDrinkCategory;
    this.getProductsDrink();
  }

    // Snackien haku
    getProductsSnack(): void{
      this.productSubcription = this.storeService.getSnackProducts(this.count, this.sort, this.category)
     .subscribe((_products) => {this.products = _products;});
   }
  
    onShowSnackCategory(newSnackCategory: string): void{
      this.snackcategory = newSnackCategory;
      this.getProductsSnack();
    }



onColumnsCountChange(colsNum: number): void{
this.cols = colsNum;
this.rowHeight = ROWS_HEIGHT[this.cols];
}

onShowCategory(newCategory: string): void{
  this.category = newCategory;
  this.getProducts();
}

// tuotteen ominaisuudet huom! product on kuva
onAddToCart(product: Product): void {
  this.cartService.addToCart({
    product: product.image,
    name: product.title,
    price: product.price,
    quantity: 1,
    id: product.id
  });
}

onItemsCountChange(newCount: number):void{
  this.count = newCount.toString();
  this.getProducts();
}

onSortChange(newSort: string):void {
  this.sort = newSort;
  this.getProducts();
}

ngOnDestroy(): void {
  if (this.productSubcription){
    this.productSubcription.unsubscribe();
  }    
  if (this.materialSubcription){
    this.materialSubcription.unsubscribe();
  }
}  



}


