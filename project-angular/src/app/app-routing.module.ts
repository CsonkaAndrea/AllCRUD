import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { IndexComponent } from './components/admin/index/index.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { UpdateCustomerComponent } from './components/admin/customers/update-customer/update-customer.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/orders', component: OrdersComponent },
  { path: 'admin/users', component: CustomersComponent },
  { path: 'admin/users/:id', component: UpdateCustomerComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
