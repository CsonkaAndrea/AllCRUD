import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:3005/api/users';

  getAll(): Observable<any> {
    return this.httpClient.get(this.url)
  };

  getOne(id: Number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`)
  };

  remove(customer: Customer): Observable<any> {
    return this.httpClient.delete(`${this.url}/${customer.id}`);
  };

  update(customer: Customer): Observable<any> {
    return this.httpClient.post(`${this.url}/${customer.id}`, customer);
  };
}
