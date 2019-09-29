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

  allCustomer: any
  allCustomer$: Observable<any> = this.customers.getAll()
  customersNumber: number = 0


  ngOnInit() {
    this.customers.getAll().subscribe(
      sajt => this.allCustomer = sajt
    )
    console.log('All Customer', this.allCustomer)

    //Count customers
    for (let i = 0; i < this.allCustomer.length; i++) {
      this.customersNumber++
    }
  }

}
