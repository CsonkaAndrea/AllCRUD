import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/models/order/order';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  orders: Order[];
  title: 'Order status';

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.getAll().subscribe(orders => {
      this.orders = orders;
    });
  }

}
