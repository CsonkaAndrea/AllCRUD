import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private customers: CustomersService, private orders: OrdersService, private product: ProductService) { }

  customersNumber: number = 0
  ordersNumber: number = 0
  productNumber: number = 0


  ngOnInit() {
    this.customers.getAll().subscribe(
      customersArray => {
        for (let i = 0; i < customersArray.length; i++) {
          this.customersNumber++
        };
      }
    );

    this.orders.getAll().subscribe(
      ordersArray => {
        for (let i = 0; i < ordersArray.length; i++) {
          this.ordersNumber++
        }
      }
    )

    this.product.getAll().subscribe(
      productsArray => {
        for (let i = 0; i < productsArray.length; i++) {
          this.productNumber++
        }
      }
    )

  }

}
