import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order/order';
import { OrderDetail } from 'src/app/models/orderDetail/order-detail';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-update-orders',
  templateUrl: './update-orders.component.html',
  styleUrls: ['./update-orders.component.css']
})
export class UpdateOrdersComponent implements OnInit {

  oneOrder: Order = new Order();
  title: 'Order detail';
  selectedOrderID: number;

  constructor(
    private ordersService: OrdersService,
    private router: Router
    ) {

      this.selectedOrderID = parseInt(this.router.url.split('/')[3]);
      this.ordersService.getAll().subscribe(orders => {
        this.oneOrder = orders.filter(c => c.id === this.selectedOrderID)[0];
      });
  }

  ngOnInit() {  }

onUpdate($event: Event) {
  $event.preventDefault();
  // this.oneOrder.orderStatus = parseInt(this.oneOrder.orderStatus);
  delete this.oneOrder.orderDate;
  this.ordersService.update(this.oneOrder).forEach(() => this.router.navigateByUrl('/admin/orders'));
}

onCancel() {
  this.router.navigateByUrl('/admin/orders');
}

// még meg kell írni hozzá az onModify()-t!!!!!
// oneOrderDetail táblát létrehozni és bekötni!!!

}
