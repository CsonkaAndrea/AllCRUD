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
  // customers$: Observable<any> = this.customers.getAll();
  // orders$: Observable<any> = this.orders.getAll();
  // products$: Observable<any> = this.product.getAll();
  // admins$: Observable<any> = this.admin.getAll();

  adminsArray: any;
  customersArray: any;
  ordersArray: any;
  productsArray: any;

  countAdmins: number = 0;
  countCustomers: number = 0;
  allAdmins: number = 0;
  allCustomer: number = 0;
  allOrders: number = 0;
  allProducts: number = 0;

  constructor(private customers: CustomersService, private orders: OrdersService, private product: ProductService, private admin: AdminsService) {
    // this.countUsers();

    // this.countProducts();
    // console.log('Products: ', this.products$);
  }

  ngOnInit() {
    // this.countUsers()
    // this.countOrders()
    this.product.getAll().subscribe(data => {
      this.productsArray = data;
      console.log('43 ', this.productsArray);
      for (let i = 0; i < this.productsArray.length; i++) {
        this.allProducts++
      }
      console.log('47', this.allProducts);
    });

    this.orders.getAll().subscribe(data => {
      this.ordersArray = data;
      console.log('52', this.ordersArray);
      for (let i = 0; i < this.ordersArray.length; i++) {
        this.allOrders++
      };
      console.log('56', this.allOrders);
      // this.countOrders(this.allOrders);
    });

    this.admin.getAll().subscribe(data => {
      this.adminsArray = data;
      console.log('62', this.adminsArray);
      for (let i = 0; i < this.adminsArray.length; i++) {
        this.allAdmins++
      };
      console.log('66', this.allAdmins);
      // this.countOrders(this.allOrders);
    });

    this.orders.getAll().subscribe(data => {
      this.ordersArray = data;
      console.log('52', this.ordersArray);
      for (let i = 0; i < this.ordersArray.length; i++) {
        this.allOrders++
      };
      console.log('59', this.allOrders);
      // this.countOrders(this.allOrders);
    });
  }

  // countProducts() {
  //   for (let i = 0; i < this.productsArray.length; i++) {
  //     this.allProducts++
  //   }
  //   console.log('73', this.allProducts);
  // }

  // countUsers() {
  //   for (let custNumber in this.customers$) {
  //     this.countCustomers++
  //   }

  //   for (let adminNumber in this.admins$) {
  //     this.countAdmins++
  //   }

  //   this.allCustomer = this.countCustomers + this.countAdmins
  //   return this.allCustomer
  // }

  // countOrders(numberVariable) {
  //   for (let orderNumber in this.orders$) {
  //     this.allOrders++
  //   }
  //   console.log('All Orders: ', numberVariable);
  // }

}
