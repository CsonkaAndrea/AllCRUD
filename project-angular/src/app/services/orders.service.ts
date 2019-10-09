import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:3005/api/orders';

  getAll(): Observable<any> {
    return this.httpClient.get(this.url)
  };

  getOne(id: Number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`)
  };

  remove(order: Order): Observable<any> {
    return this.httpClient.delete(`${this.url}/${order.id}`);
  };

  update(order: Order): Observable<any> {
    return this.httpClient.post(`${this.url}/${order.id}`, order);
  };
}
