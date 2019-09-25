import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { IndexComponent } from './components/admin/index/index.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { UpdateCustomerComponent } from './components/admin/customers/update-customer/update-customer.component';
import { NewProductComponent } from './components/admin/products/new-product/new-product.component';
import { ProductDetailComponent } from './components/admin/products/product-detail/product-detail.component';
import { UpdateOrdersComponent } from './components/admin/orders/update-orders/update-orders.component';
import { SearchPipe } from './pipes/search.pipe';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    OrdersComponent,
    IndexComponent,
    DashboardComponent,
    CustomersComponent,
    UpdateCustomerComponent,
    NewProductComponent,
    ProductDetailComponent,
    SearchPipe,
    UpdateOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
