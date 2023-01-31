import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { MaterialstoreService } from 'src/app/services/materialstore.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy{

  @Output() showCategory = new EventEmitter<string>();
  @Output() sortPizzas = new EventEmitter<string>();
  @Output() sortBurgers = new EventEmitter<string>();
  @Output() sortDrinks = new EventEmitter<string>();
  @Output() sortSnacks = new EventEmitter<string>();
  @Output() naytaKaikkiTuotteet = new EventEmitter<string>();
  @Output() sortMaterial = new EventEmitter<string>();



  categoriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined;

 
  showKaikki = 'Kaikki tuotteet';
  showPizza = 'Pizzas';
  showBurger = 'Burgers';
  showDrink = 'Drinks';
  showSnack = 'Snacks';
  kaikkimateriaalit = 'Materiaalit'

  constructor(private storeService: StoreService){}
  ngOnInit(): void {
  }


  onShowGategory(category: string):void {
    this.showCategory.emit(category);
  }
// materiaalien haku
onShowMaterials(kaikkimateriaalit: string): void{
  this.sortMaterial.emit(kaikkimateriaalit);
}



// kaikki tuotteet
onShowKaikkiTuotteet(kaikkituotteet: string): void{
  this.naytaKaikkiTuotteet.emit(kaikkituotteet);
}

// kaikki pizzat
  onShowPizzas(pizzacategory: string): void{
    this.sortPizzas.emit(pizzacategory);
  }

  // kaikki burgerit
  onShowBurgers(burgercategory: string): void{
    this.sortBurgers.emit(burgercategory);
  }

  // kaikki juomat
  onShowDrinks(drinkcategory: string): void{
    this.sortDrinks.emit(drinkcategory);
  }

    // kaikki snacks
    onShowSnacks(snackcategory: string): void{
      this.sortSnacks.emit(snackcategory);
    }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }

  }



}
