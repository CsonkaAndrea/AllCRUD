## Generate - átláthatóság miatt almappákat is használtam
* ng g componenet components/<komponens-almappa-neve>/<komponens-neve>
* ng g service services/<szervíz-almappa-neve>/<service-neve>
* ng g class models/<class-almappa-neve>/<class-neve>
* ng g pipe pipes/<pipe-almappa-neve>/<pipe-neve>

### Classes
* models/admin
* models/basket
* models/basketDetail
* models/customer
* models/order
* models/orderDetail
* models/product

### Componenets
* components/layout/header
* components/admin/index
* components/admin/products
* components/admin/orders

## Bootstrap
* angular.json
* "styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css",],

## Router-outlet --> ide még kell egy értelmes nav-bar, de már navigálható a cucc
*   const routes: Routes = [
*     { path: '', component: IndexComponent },
*     { path: 'admin/products', component: ProductsComponent },
*     { path: 'admin/orders', component: OrdersComponent },
*     { path: '**', component: IndexComponent }
*   ];