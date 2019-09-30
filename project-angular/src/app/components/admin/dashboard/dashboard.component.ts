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

  allOrders: any
  allOrders$: Observable<any> = this.orders.getAll() // Ez ide nem kell
  ordersNumber: number = 0

  allProduct: any
  allProducts$: Observable<any> = this.product.getAll() // Ez ide nem kell
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
      bogyo => this.allOrders = bogyo
    )

    this.product.getAll().subscribe(
      bubi => this.allProduct = bubi
    )

   

    //Count orders
    for (let i = 0; i < this.allOrders.length; i++) {
      this.ordersNumber++
    }

    //Count product
    for (let i = 0; i < this.allProduct.length; i++) {
      this.productNumber++
    }

  }

}
