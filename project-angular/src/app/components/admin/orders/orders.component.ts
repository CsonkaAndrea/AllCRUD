import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/models/order/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private ordersService: OrdersService) {
  };

  orders: Order[];
  updateCustomer: Order = new Order();

  // Read all orders onInit
  ngOnInit() {
    this.ordersService.getAll().subscribe(orders => {
      this.orders = orders
    });
  };

}