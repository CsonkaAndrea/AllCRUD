import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { IndexComponent } from './components/admin/index/index.component';
import { UpdateOrdersComponent } from './components/admin/orders/update-orders/update-orders.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/orders', component: OrdersComponent },
  { path: 'admin/orders/:id', component: UpdateOrdersComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
