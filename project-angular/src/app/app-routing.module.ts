import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { ProductsComponent } from './components/admin/products/products.component';
<<<<<<< HEAD
import { NewProductComponent } from './components/admin/products/new-product/new-product.component';
=======
import { NewProductComponent} from './components/admin/products/new-product/new-product.component';
import { ProductDetailComponent } from './components/admin/products/product-detail/product-detail.component';
>>>>>>> fd7caa8f9194abe404b9a3fd4e1a6c2ee5707f53
import { IndexComponent } from './components/admin/index/index.component';
<<<<<<< HEAD
import { CustomersComponent } from './components/admin/customers/customers.component';
import { UpdateCustomerComponent } from './components/admin/customers/update-customer/update-customer.component';
=======
import { ProductDetailComponent } from './components/admin/products/product-detail/product-detail.component';
>>>>>>> card03


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin/products', component: ProductsComponent },
<<<<<<< HEAD
  { path: 'admin/new-products', component: NewProductComponent },
=======
  { path: 'admin/new-product', component: NewProductComponent},
  { path: 'admin/products/:id', component: ProductDetailComponent },
>>>>>>> fd7caa8f9194abe404b9a3fd4e1a6c2ee5707f53
  { path: 'admin/orders', component: OrdersComponent },
<<<<<<< HEAD
  { path: 'admin/users', component: CustomersComponent },
  { path: 'admin/users/:id', component: UpdateCustomerComponent },
=======
  { path: 'admin/products/:id', component: ProductDetailComponent },
>>>>>>> card03
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
