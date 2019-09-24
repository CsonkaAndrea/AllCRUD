import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { NewProductComponent} from './components/admin/products/new-product/new-product.component';
import { ProductDetailComponent } from './components/admin/products/product-detail/product-detail.component';
import { IndexComponent } from './components/admin/index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/new-product', component: NewProductComponent},
  { path: 'admin/products/:id', component: ProductDetailComponent },
  { path: 'admin/orders', component: OrdersComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
