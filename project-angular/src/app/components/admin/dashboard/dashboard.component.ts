import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private customers: CustomersService, private orders: OrdersService, private product: ProductService, private admin: AdminsService) { }

  allCustomer: number = 0;
  customers$: Observable<any> = this.customers.getAll();
  orders$: Observable<any> = this.orders.getAll();
  products$: Observable<any> = this.product.getAll();
  admins$: Observable<any> = this.product.getAll();
  countCustomers: number = 0;
  countAdmins: number = 0;
  allOrders: number = 0;
  allProducts: number = 0;

  ngOnInit() {
    this.countUsers()
    this.countOrders()
  }
  countUsers() {
    for (let custNumber in this.customers$) {
      this.countCustomers++
    }

    for (let adminNumber in this.admins$) {
      this.countAdmins++
    }

    this.allCustomer = this.countCustomers + this.countAdmins
    return this.allCustomer
  }

  countOrders() {
    for (let orderNumber in this.orders$) {
      this.allOrders++
    }
  }

  countProducts() {
    for (let productNumber in this.products$) {
      this.allProducts++
    }
  }
}
