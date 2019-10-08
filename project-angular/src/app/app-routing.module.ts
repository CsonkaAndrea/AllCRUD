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
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: UpdateOrdersComponent },
  { path: 'users', component: CustomersComponent },
  { path: 'users/:id', component: UpdateCustomerComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'admins/:id', component: UpdateAdminComponent },
  { path: 'new-admin', component: CreateAdminComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
