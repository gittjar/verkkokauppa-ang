import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../models/material.models';

const STORE_BASE_URL = 'https://raw.githubusercontent.com/gittjar';

@Injectable({
  providedIn: 'root'
})
export class MaterialstoreService {

  constructor(private httpClient: HttpClient) { }

// materiaalin haku
getAllMaterials (Mlimit = '6', Msort = 'desc', kaikkimateriaalit?: string): Observable<Array<Material>> {
  return this.httpClient.get<Array<Material>>
  (     // url tarkista että osuu databaseen samoin alla toinen /products/main/db.json
    `${STORE_BASE_URL}/products/main/db_materials.json`
  )
}




}
