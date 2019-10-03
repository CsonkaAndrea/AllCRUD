import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductService } from 'src/app/services/product.service';
import { zip } from 'rxjs';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countAdmins: number = 0;
  countCustomers: number = 0;
  allAdmins: number = 0;
  allCustomer: number = 0;
  allOrders: number = 0;
  allProducts: number = 0;
  allUsers: number = 0;

  constructor(private customers: CustomersService, private orders: OrdersService, private product: ProductService, private admin: AdminsService) {
  }

  ngOnInit() {

    zip(
      this.admin.getAll(),
      this.customers.getAll(),
      this.orders.getAll(),
      this.product.getAll()
    ).forEach(data => {
      this.allAdmins = data[0].length;
      this.allCustomer = data[1].length;
      this.allOrders = data[2].length;
      this.allProducts = data[3].length;
      this.allUsers = this.allAdmins + this.allCustomer;
    });

  }
}
