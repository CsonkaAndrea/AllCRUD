import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:3000/api/users';

  getAllCustomers(): Observable<any> {
    return this.httpClient.get(this.url)
  };

}
