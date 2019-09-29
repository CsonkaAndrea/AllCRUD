import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { NewProductComponent } from './components/admin/products/new-product/new-product.component';
import { ProductDetailComponent } from './components/admin/products/product-detail/product-detail.component';
import { IndexComponent } from './components/admin/index/index.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { UpdateCustomerComponent } from './components/admin/customers/update-customer/update-customer.component';
import { UpdateOrdersComponent } from './components/admin/orders/update-orders/update-orders.component';
import { AdminsComponent } from './components/admin/admins/admins.component';
import { UpdateAdminComponent } from './components/admin/admins/update-admin/update-admin.component';
import { CreateAdminComponent } from './components/admin/admins/create-admin/create-admin.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/products/:id', component: ProductDetailComponent },
  { path: 'admin/new-product', component: NewProductComponent },
  { path: 'admin/orders', component: OrdersComponent },
  { path: 'admin/orders/:id', component: UpdateOrdersComponent },
  { path: 'admin/users', component: CustomersComponent },
  { path: 'admin/users/:id', component: UpdateCustomerComponent },
  { path: 'admin/admins', component: AdminsComponent },
  { path: 'admin/admins/:id', component: UpdateAdminComponent },
  { path: 'admin/new-admin', component: CreateAdminComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
