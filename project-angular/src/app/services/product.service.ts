import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:3000/api/products';

  getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getOne(id: Number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  createNew(product: Product): Observable<any> {
    return this.httpClient.post(`${this.url}`, product);
  }

  update(product: Product): Observable<any> {
    return this.httpClient.post(`${this.url}/${product.id}`, product);
  }

}
