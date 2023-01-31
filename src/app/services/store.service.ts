import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.models';


// const STORE_BASE_URL = 'https://fakestoreapi.com';
//const STORE_BASE_URL = 'https://mocki.io/v1/079f77d5-0821-4562-8462-303ee4bf8214';
const STORE_BASE_URL = 'https://raw.githubusercontent.com/gittjar';
// https://retoolapi.dev/EQPule/product

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  // pizzatkategoria haetaan näkyviin, kts. databasen osoite!
getPizzaProducts(limit = '12', sort = 'desc', pizzacategory?: string): Observable<Array<Product>>{
  return this.httpClient.get<Array<Product>>
  (     // url tarkista että osuu databaseen samoin alla toinen /products/main/db.json
  `${STORE_BASE_URL}/products/main/db_pizza.json${
    pizzacategory ? '/category/' + pizzacategory : ''
  }?sort=${sort}&limit=${limit}`
)
}

  // burgerkategoria haetaan näkyviin, kts. databasen osoite!
  getBurgerProducts(limit = '12', sort = 'desc', burgercategory?: string): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>
    (   
    `${STORE_BASE_URL}/products/main/db_burger.json${
      burgercategory ? '/category/' + burgercategory : ''
    }?sort=${sort}&limit=${limit}`
  )
  }

  // drink kategoria haetaan näkyviin, kts. databasen osoite!
  getDrinkProducts(limit = '12', sort = 'desc', drinkcategory?: string): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>
    (   
    `${STORE_BASE_URL}/products/main/db_drinks.json${
      drinkcategory ? '/category/' + drinkcategory : ''
    }?sort=${sort}&limit=${limit}`
  )
  }

    // snack kategoria haetaan näkyviin, kts. databasen osoite!
    getSnackProducts(limit = '12', sort = 'desc', snackcategory?: string): Observable<Array<Product>>{
      return this.httpClient.get<Array<Product>>
      (   
      `${STORE_BASE_URL}/products/main/db_snacks.json${
        snackcategory ? '/category/' + snackcategory : ''
      }?sort=${sort}&limit=${limit}`
    )
    }



// haetaan kaikki tuotteet kun painetaan sivupaneelissa olevaa chippiä, kts. databasen osoite!
getKaikkiTuotteet(limit = '12', sort = 'desc', kaikkituotteet?: string): Observable<Array<Product>> {
  return this.httpClient.get<Array<Product>>
  (     // url tarkista että osuu databaseen samoin alla toinen /products/main/db.json
    `${STORE_BASE_URL}/products/main/db.json${
      kaikkituotteet ? '/category/' + kaikkituotteet : ''
    }?sort=${sort}&limit=${limit}`
  )
}





// haetaan kaikki sivun ladatessa defaulttina
  getAllProducts(limit = '12', sort = 'desc', category?: string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>
    (     // url tarkista että osuu databaseen samoin alla toinen /products/main/db.json
      `${STORE_BASE_URL}/products/main/db.json${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    )
  }



  // main/db.json/categories
  // getAllCategories(): Observable<Array<string>>{
  //  return this.httpClient.get<Array<string>>(
  //    `${STORE_BASE_URL}/products/main/db.json/categories`
  //  )
  // }


}
