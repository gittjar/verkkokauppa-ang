import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.models';

const STORE_BASE_URL = 'https://fakestoreapi.com';
//const STORE_BASE_URL = 'https://mocki.io/v1/079f77d5-0821-4562-8462-303ee4bf8214';
// const STORE_BASE_URL = 'https://mocki.io/v1/079f77d5-0821-4562-8462-303ee4bf8214';
// https://retoolapi.dev/EQPule/product

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }


  getAllProducts(limit = '12', sort = 'desc', category?: string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>
    (
      `${STORE_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    )
  }

  getAllCategories(): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`

    )
  }

}
