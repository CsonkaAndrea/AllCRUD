import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:3005/api/admins';

  getAll(): Observable<any> {
    return this.httpClient.get(this.url)
  };

  getOne(id: Number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`)
  };

  remove(admin: Admin): Observable<any> {
    return this.httpClient.delete(`${this.url}/${admin.id}`);
  };

  update(admin: Admin): Observable<any> {
    return this.httpClient.post(`${this.url}/${admin.id}`, admin);
  };

  create(admin: Admin): Observable<any> {
    return this.httpClient.post(`${this.url}`, admin);
  };
}
