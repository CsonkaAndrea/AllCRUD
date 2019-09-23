import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { NewProductComponent} from './components/admin/products/new-product/new-product.component';
import { IndexComponent } from './components/admin/index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/new-products', component: NewProductComponent},
  { path: 'admin/orders', component: OrdersComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
