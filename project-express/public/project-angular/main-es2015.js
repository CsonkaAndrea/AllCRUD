(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <!-- Ez a navbar és itt található components/layout/header -->\r\n  <app-header></app-header>\r\n  <!-- Ez meg a navbar-ban kattintott elemekre visz -->\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admins/admins.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admins/admins.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">Admin details</h1>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <table class=\"table table-striped table-secondary\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n            <th>Edit/Delete</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let admin of admins\">\r\n            <td>{{ admin.id }}</td>\r\n            <td>{{ admin.firstName }}</td>\r\n            <td>{{ admin.lastName }}</td>\r\n            <td>{{ admin.username }}</td>\r\n            <td>\r\n              <div class=\"btn-group\">\r\n                <button class=\"btn btn-warning\"\r\n                        routerLink=\"/admins/{{admin.id}}\">Edit</button>\r\n                <button class=\"btn btn-danger\"\r\n                        (click)=\"onDeleteAdmin(admin)\">Delete</button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"3\">&nbsp;</td>\r\n            <td>Add new admin here:</td>\r\n            <td>\r\n              <button class=\"btn btn-dark\"\r\n                      routerLink=\"/new-admin\">Add New</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admins/create-admin/create-admin.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admins/create-admin/create-admin.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h2>Add New Admin</h2>\r\n  <form action=\"\"\r\n        method=\"post\"\r\n        (submit)=\"onCreate($event)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <input [(ngModel)]=\"admin.firstName\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"firstName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lastName\">Last Name</label>\r\n      <input [(ngModel)]=\"admin.lastName\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"lastName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input [(ngModel)]=\"admin.username\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input [(ngModel)]=\"admin.password\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"password\">\r\n    </div>\r\n    <input type=\"submit\"\r\n           value=\"Add\">\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admins/update-admin/update-admin.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admins/update-admin/update-admin.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h2>Edit Admin</h2>\r\n  <form action=\"\"\r\n        method=\"post\"\r\n        (submit)=\"onEdit($event)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <input [(ngModel)]=\"admin.firstName\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"firstName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lastName\">Last Name</label>\r\n      <input [(ngModel)]=\"admin.lastName\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"lastName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input [(ngModel)]=\"admin.password\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"password\">\r\n    </div>\r\n    <input type=\"submit\"\r\n           value=\"Edit\"\r\n           class=\"btn btn-warning\">\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/customers/customers.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/customers/customers.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">Customer details</h1>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <table class=\"table table-striped table-secondary\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n            <th>Edit/Delete</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let customer of customers\">\r\n            <td>{{ customer.id }}</td>\r\n            <td>{{ customer.firstName }}</td>\r\n            <td>{{ customer.lastName }}</td>\r\n            <td>{{ customer.username }}</td>\r\n            <td>\r\n              <div class=\"btn-group\">\r\n                <button class=\"btn btn-warning\"\r\n                        routerLink=\"/users/{{customer.id}}\">Edit</button>\r\n                <button class=\"btn btn-danger\"\r\n                        (click)=\"onDeleteCustomer(customer)\">Delete</button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/customers/update-customer/update-customer.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/customers/update-customer/update-customer.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h2>Edit Customer</h2>\r\n  <form action=\"\" method=\"post\"  (submit)=\"onEdit($event)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <input [(ngModel)]=\"customer.firstName\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"firstName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lastName\">Last Name</label>\r\n      <input [(ngModel)]=\"customer.lastName\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"lastName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input [(ngModel)]=\"customer.password\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"password\">\r\n    </div>\r\n    <input type=\"submit\"\r\n           value=\"Edit\"\r\n           class=\"btn btn-warning\">\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/dashboard/dashboard.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/dashboard/dashboard.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">Dashboard</h1>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3 mx-auto\">\r\n      <div class=\"card\"\r\n           style=\"width: 100%;\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-8\">\r\n              <h5 class=\"card-title\">Products</h5>\r\n            </div>\r\n            <div class=\"col-4 title-icon\">\r\n              <span>&#x2630;</span>\r\n            </div>\r\n          </div>\r\n          <p class=\"card-text\">Total: {{allProducts}}</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-10\">\r\n              <a routerLink=\"/products\">View products</a>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <a routerLink=\"/products\"\r\n                 class=\"arrowIcon\">&#x203A;</a></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3 mx-auto\">\r\n      <div class=\"card\"\r\n           style=\"width: 100%;\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-8\">\r\n              <h5 class=\"card-title\">Orders</h5>\r\n            </div>\r\n            <div class=\"col-4 title-icon\">\r\n              <span>&#x2611;</span>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"card-text\">Total: {{allOrders}}</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-10\">\r\n              <a routerLink=\"/orders\">View orders</a>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <a routerLink=\"/orders\"\r\n                 class=\"arrowIcon\">&#x203A;</a></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3 mx-auto\">\r\n      <div class=\"card\"\r\n           style=\"width: 100%;\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-8\">\r\n              <h5 class=\"card-title\">Users</h5>\r\n            </div>\r\n            <div class=\"col-4 title-icon\">\r\n              <span>&#x40;</span>\r\n            </div>\r\n          </div>\r\n          <p class=\"card-text\">Admins: {{allAdmins}} </p>\r\n          <p class=\"card-text\">Customers: {{allCustomer}}</p>\r\n          <p class=\"card-text\">Total amount of users: {{allUsers}}</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-10\">\r\n              <a routerLink=\"/admins\">View admins</a>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <a routerLink=\"/admins\"\r\n                 class=\"arrowIcon\">&#x203A;</a></div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-10\">\r\n              <a routerLink=\"/users\">View customers</a>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <a routerLink=\"/users\"\r\n                 class=\"arrowIcon\">&#x203A;</a></div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <h1>Customers</h1>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">First Name</th>\r\n            <th scope=\"col\">Last Name</th>\r\n            <th scope=\"col\">Password</th>\r\n            <th scope=\"col\">Username</th>\r\n            <th scope=\"col\">Token</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let customer of allCustomer$ | async'>\r\n            <th>{{customer.id}}</th>\r\n            <td>{{customer.firstName}}</td>\r\n            <td>{{customer.lastName}}</td>\r\n            <td>{{customer.password}}</td>\r\n            <td>{{customer.username}}</td>\r\n            <td>{{customer.token}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/index/index.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/index/index.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>index works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/orders/orders.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/orders/orders.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">Orders</h1>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <table class=\"table table-striped table-secondary\">\r\n        <thead>\r\n          <tr>\r\n            <th>Customer ID</th>\r\n            <th>Customer Name(másik táblából)</th>\r\n            <th>Order Date</th>\r\n            <th>Hány tétel?(másik táblából)</th>\r\n            <th>Value</th>\r\n            <th>Order Status</th>\r\n            <th>Edit</th>\r\n          </tr>\r\n        </thead>\r\n        <!-- <tbody>\r\n          <tr *ngFor=\"let order of orders | orderByDate:orderKey\">\r\n            <td>{{ order.customerId}}</td>\r\n            <td>Folyamatban... Customer neve is kell</td>\r\n            <td>{{ order.orderDate }}</td>\r\n            <td>Folyamatban... (másik táblából)</td>\r\n            <td>{{ order.value }}</td>\r\n            <td>{{ order.orderStatus }}</td>\r\n            <td>\r\n              <div class=\"btn-group\">\r\n                <button routerLink=\"/admin/orders/{{order.id}}\">Edit</button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody> -->\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/orders/update-orders/update-orders.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/orders/update-orders/update-orders.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<div class=\"container-fluid\">\r\n<div>\r\n  <div class=\"card border-primary col-6\">\r\n      <form (submit)=\"onUpdate($event)\">\r\n        <h4 class=\"card-header\">Order details</h4>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"orderId\" class=\"col-form-label col-sm-4\">Order ID</label>\r\n            <input type=\"text\" disabled class=\"form-control-plaintext col-sm-6\" name=\"orderId\" [(ngModel)]=\"oneOrder.id\">\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"orderDate\" class=\"col-form-label col-sm-4\">Order date</label>\r\n            <input type=\"text\" disabled class=\"form-control-plaintext col-sm-6\" name=\"orderDate\" [(ngModel)]=\"oneOrder.orderDate\">\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"customerId\" class=\"col-form-label col-sm-4\">Customer ID</label>\r\n            <input type=\"text\" disabled class=\"form-control-plaintext col-sm-6\" name=\"customerId\" [(ngModel)]=\"oneOrder.customerId\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"orderStatus\">Order status</label>\r\n            <select class=\"form-control\" id=\"orderStatus\" name=\"orderStatus\" [(ngModel)]=\"oneOrder.orderStatus\">\r\n              <option [value]=\"1\">received</option>\r\n              <option [value]=\"2\">processed</option>\r\n              <option [value]=\"3\">shipped</option>\r\n              <option [value]=\"4\">delivered</option>\r\n              <option [value]=\"5\">deleted</option>\r\n            </select>\r\n        </div>\r\n        </div>\r\n        <div class=\"card-footer d-flex justify-content-around\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"onCancel()\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n \r\n  <!-- <div class=\"card border-primary col-6\">\r\n      <form (submit)=\"onModify($event)\">\r\n        <h4 class=\"card-header\">Order details</h4>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"productId\" class=\"col-form-label col-sm-4\">Product ID</label>\r\n            <input type=\"text\" disabled class=\"form-control-plaintext col-sm-6\" name=\"productId\" [(ngModel)]=\"oneOrderDetail.productId\">\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"netPrice\" class=\"col-form-label col-sm-4\">Net price</label>\r\n            <input type=\"text\" disabled class=\"form-control-plaintext col-sm-6\" name=\"netPrice\" [(ngModel)]=\"oneOrderDetail.netPrice\">\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"orderQuantity\" class=\"col-form-label col-sm-4\">Order quantity</label>\r\n            <input type=\"text\" disabled class=\"form-control-plaintext col-sm-6\" name=\"orderQuantity\" [(ngModel)]=\"oneOrderDetail.orderQuantity\">\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"orderDetailId\" class=\"col-form-label col-sm-4\">Order line nr</label>\r\n            <input type=\"text\" disabled class=\"form-control-plaintext col-sm-6\" name=\"orderDetailId\" [(ngModel)]=\"oneOrderDetail.orderDetailId\">\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer d-flex justify-content-around\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Modify</button>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"onCancel()\">Cancel</button>\r\n        </div>\r\n      </form>\r\n  </div> -->\r\n  \r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/new-product/new-product.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/new-product/new-product.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <h1 class=\"text-center\">Add new product</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <form (submit)=\"onSubmit($event)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Product name</label>\r\n          <input type=\"text\" required minlength=\"3\" id=\"name\" name=\"name\" [(ngModel)]=\"newProduct.productName\" class=\"form-control\" #name=\"ngModel\">\r\n          <label for=\"seo\">SEO friendly product name</label>\r\n          <input type=\"text\" required minlength=\"3\" id=\"seo\" name=\"seo\" [(ngModel)]=\"newProduct.seoFriendlyProductName\" class=\"form-control\" #seo=\"ngModel\">\r\n          <label for=\"category\">Product category</label>\r\n          <input type=\"text\" required minlength=\"3\" id=\"category\" name=\"category\" [(ngModel)]=\"newProduct.productCategory\" class=\"form-control\" #category=\"ngModel\">\r\n          <label for=\"url\">Picture Url</label>\r\n          <input type=\"text\" required minlength=\"3\" id=\"url\" name=\"url\" [(ngModel)]=\"newProduct.pictureURL\" class=\"form-control\" #url=\"ngModel\">\r\n          <label for=\"publisher\">Publisher</label>\r\n          <input type=\"text\" required minlength=\"3\" id=\"publisher\" name=\"publisher\" [(ngModel)]=\"newProduct.publisher\" class=\"form-control\" #publisher=\"ngModel\">\r\n          <label for=\"price\">Price</label>\r\n          <input type=\"number\" required id=\"price\" name=\"price\" [(ngModel)]=\"newProduct.price\" class=\"form-control\" #price=\"ngModel\">\r\n          <label for=\"stock\">Stock</label>\r\n          <input type=\"number\" required id=\"stock\" name=\"stock\" [(ngModel)]=\"newProduct.stock\" class=\"form-control\" #stock=\"ngModel\">\r\n          <div class=\"col-12 d-flex justify-content-around mt-4\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"submitted=true\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"onCancel()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"name.errors.required\">\r\n            Product name is required!\r\n          </div>\r\n          <div *ngIf=\"name.errors.minlength\">\r\n            Product name must be at least 3 characters!\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"seo.invalid && (seo.dirty || seo.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"seo.errors.required\">\r\n              SEO friendly product name is required!\r\n            </div>\r\n            <div *ngIf=\"seo.errors.minlength\">\r\n              SEO friendly product name must be at least 3 characters!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"category.invalid && (category.dirty || category.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"category.errors.required\">\r\n              Product category is required!\r\n            </div>\r\n            <div *ngIf=\"category.errors.minlength\">\r\n              Product category must be at least 3 characters!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"url.invalid && (url.dirty || url.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"url.errors.required\">\r\n              Picture Url is required!\r\n            </div>\r\n            <div *ngIf=\"url.errors.minlength\">\r\n              Picture Url must be at least 3 characters!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"publisher.invalid && (publisher.dirty || publisher.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"publisher.errors.required\">\r\n              Publisher is required!\r\n            </div>\r\n            <div *ngIf=\"publisher.errors.minlength\">\r\n              Publisher must be at least 3 characters!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"price.invalid && (price.dirty || price.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"price.errors.required\">\r\n              Price is required!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"stock.invalid && (stock.dirty || stock.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"stock.errors.required\">\r\n              Stock is required!\r\n            </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/product-detail/product-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/product-detail/product-detail.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <h1 class=\"text-center\">Product details</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <form (submit)=\"onUpdate($event)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Product name</label>\r\n          <input type=\"text\" disabled id=\"name\" name=\"name\" [(ngModel)]=\"oneProduct.productName\" class=\"form-control\" #name=\"ngModel\">\r\n          <label for=\"seo\">SEO friendly product name</label>\r\n          <input type=\"text\" required minlength=\"3\" id=\"seo\" name=\"seo\" [(ngModel)]=\"oneProduct.seoFriendlyProductName\" class=\"form-control\" #seo=\"ngModel\">\r\n          <label for=\"category\">Product category</label>\r\n          <input type=\"text\" required minlength=\"3\" id=\"category\" name=\"category\" [(ngModel)]=\"oneProduct.productCategory\" class=\"form-control\" #category=\"ngModel\">\r\n          <label for=\"url\">Picture Url</label>\r\n          <input type=\"text\" required minlength=\"3\" id=\"url\" name=\"url\" [(ngModel)]=\"oneProduct.pictureURL\" class=\"form-control\" #url=\"ngModel\">\r\n          <label for=\"publisher\">Publisher</label>\r\n          <input type=\"text\" required minlength=\"3\" id=\"publisher\" name=\"publisher\" [(ngModel)]=\"oneProduct.publisher\" class=\"form-control\" #publisher=\"ngModel\">\r\n          <label for=\"price\">Price</label>\r\n          <input type=\"text\" required id=\"price\" name=\"price\" [(ngModel)]=\"oneProduct.price\" class=\"form-control\" #price=\"ngModel\">\r\n          <label for=\"stock\">Stock</label>\r\n          <input type=\"text\" required id=\"stock\" name=\"stock\" [(ngModel)]=\"oneProduct.stock\" class=\"form-control\" #stock=\"ngModel\">\r\n          <div class=\"col-12 d-flex justify-content-around mt-4\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"onCancel()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"name.errors.required\">\r\n            Product name is required!\r\n          </div>\r\n          <div *ngIf=\"name.errors.minlength\">\r\n            Product name must be at least 3 characters!\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"seo.invalid && (seo.dirty || seo.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"seo.errors.required\">\r\n              SEO friendly product name is required!\r\n            </div>\r\n            <div *ngIf=\"seo.errors.minlength\">\r\n              SEO friendly product name must be at least 3 characters!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"category.invalid && (category.dirty || category.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"category.errors.required\">\r\n              Product category is required!\r\n            </div>\r\n            <div *ngIf=\"category.errors.minlength\">\r\n              Product category must be at least 3 characters!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"url.invalid && (url.dirty || url.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"url.errors.required\">\r\n              Picture Url is required!\r\n            </div>\r\n            <div *ngIf=\"url.errors.minlength\">\r\n              Picture Url must be at least 3 characters!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"publisher.invalid && (publisher.dirty || publisher.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"publisher.errors.required\">\r\n              Publisher is required!\r\n            </div>\r\n            <div *ngIf=\"publisher.errors.minlength\">\r\n              Publisher must be at least 3 characters!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"price.invalid && (price.dirty || price.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"price.errors.required\">\r\n              Price is required!\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"stock.invalid && (stock.dirty || stock.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"stock.errors.required\">\r\n              Stock is required!\r\n            </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/products.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/products.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">Available Products</h1>\r\n<br>\r\n<div class=\"container\">\r\n  <div id=\"searchActive\">\r\n    <div class=\"row\">\r\n      <div class=\"col-4\">\r\n        <input class=\"form-control\"\r\n               type=\"text\"\r\n               placeholder=\"Search..\"\r\n               [(ngModel)]=\"filterPhrase\">\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <button class=\"btn btn-primary\"\r\n                routerLink=\"/new-product\">New product</button>\r\n      </div>\r\n      <div class=\"col-6 text-white\"\r\n           id=\"checkBox\">\r\n        <input type=\"checkbox\"\r\n               name=\"active\"\r\n               id=\"active\"\r\n               [(ngModel)]=\"isActiveOnly\">Active products only\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<table class=\"table table-striped table-secondary\">\r\n  <thead>\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Product name</th>\r\n      <th>SEO friendly</th>\r\n      <th>Category</th>\r\n      <th>Picture Url</th>\r\n      <th>Publisher</th>\r\n      <th>Price</th>\r\n      <th>Stock</th>\r\n      <th>Options</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let product of products|search:filterPhrase:isActiveOnly\">\r\n      <td>{{ product.id }}</td>\r\n      <td>{{ product.productName }}</td>\r\n      <td>{{ product.seoFriendlyProductName }}</td>\r\n      <td>{{ product.productCategory }}</td>\r\n      <td>{{ product.pictureURL }}</td>\r\n      <td>{{ product.publisher }}</td>\r\n      <td>{{ product.price }}</td>\r\n      <td>{{ product.stock }}</td>\r\n      <td>\r\n        <div class=\"btn-group\"\r\n             role=\"group\">\r\n          <button class=\"btn btn-primary\"\r\n                  routerLink=\"/products/{{ product.id }}\">Details</button>\r\n          <button class=\"btn btn-danger\"\r\n                  (click)=\"onDelete(product)\">Delete</button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <!-- Sidebar  -->\r\n  <nav id=\"sidebar\">\r\n    <div id=\"dismiss\">\r\n      <i class=\"fas fa-arrow-left\"></i>\r\n    </div>\r\n\r\n    <div class=\"sidebar-header\">\r\n      <h3>MoV Admin</h3>\r\n    </div>\r\n\r\n    <ul class=\"list-unstyled components\">\r\n      <p>Welcome to the admin site!</p>\r\n      <li>\r\n        <a href=\"http://localhost:3000/admin\">Dashboard</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"http://localhost:3000/admin/products\">Products</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"http://localhost:3000/admin/orders\">Orders</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"http://localhost:3000/admin/users\">Customers</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"http://localhost:3000/admin/admins\">Admins</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <!-- Page Content  -->\r\n  <div id=\"content\">\r\n\r\n\r\n    <div class=\"container-fluid\">\r\n      <button type=\"button\"\r\n              id=\"sidebarCollapse\"\r\n              class=\"btn btn-secondary mt-3\">\r\n        <i class=\"fas fa-align-left\"></i>\r\n        <span>&nbsp;Admin menu</span>\r\n      </button>\r\n      <button class=\"btn btn-dark d-inline-block d-lg-none ml-auto\"\r\n              type=\"button\"\r\n              data-toggle=\"collapse\"\r\n              data-target=\"#navbarSupportedContent\"\r\n              aria-controls=\"navbarSupportedContent\"\r\n              aria-expanded=\"false\"\r\n              aria-label=\"Toggle navigation\">\r\n        <i class=\"fas fa-align-justify\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"overlay\"></div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/orders/orders.component */ "./src/app/components/admin/orders/orders.component.ts");
/* harmony import */ var _components_admin_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/products/products.component */ "./src/app/components/admin/products/products.component.ts");
/* harmony import */ var _components_admin_products_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/products/new-product/new-product.component */ "./src/app/components/admin/products/new-product/new-product.component.ts");
/* harmony import */ var _components_admin_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/products/product-detail/product-detail.component */ "./src/app/components/admin/products/product-detail/product-detail.component.ts");
/* harmony import */ var _components_admin_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/index/index.component */ "./src/app/components/admin/index/index.component.ts");
/* harmony import */ var _components_admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/customers/customers.component */ "./src/app/components/admin/customers/customers.component.ts");
/* harmony import */ var _components_admin_customers_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/customers/update-customer/update-customer.component */ "./src/app/components/admin/customers/update-customer/update-customer.component.ts");
/* harmony import */ var _components_admin_orders_update_orders_update_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/orders/update-orders/update-orders.component */ "./src/app/components/admin/orders/update-orders/update-orders.component.ts");
/* harmony import */ var _components_admin_admins_admins_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/admins/admins.component */ "./src/app/components/admin/admins/admins.component.ts");
/* harmony import */ var _components_admin_admins_update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admins/update-admin/update-admin.component */ "./src/app/components/admin/admins/update-admin/update-admin.component.ts");
/* harmony import */ var _components_admin_admins_create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admins/create-admin/create-admin.component */ "./src/app/components/admin/admins/create-admin/create-admin.component.ts");
/* harmony import */ var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard.component */ "./src/app/components/admin/dashboard/dashboard.component.ts");















const routes = [
    { path: '', component: _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"] },
    { path: 'products', component: _components_admin_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] },
    { path: 'products/:id', component: _components_admin_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"] },
    { path: 'new-product', component: _components_admin_products_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_5__["NewProductComponent"] },
    { path: 'orders', component: _components_admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"] },
    { path: 'orders/:id', component: _components_admin_orders_update_orders_update_orders_component__WEBPACK_IMPORTED_MODULE_10__["UpdateOrdersComponent"] },
    { path: 'users', component: _components_admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"] },
    { path: 'users/:id', component: _components_admin_customers_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_9__["UpdateCustomerComponent"] },
    { path: 'admins', component: _components_admin_admins_admins_component__WEBPACK_IMPORTED_MODULE_11__["AdminsComponent"] },
    { path: 'admins/:id', component: _components_admin_admins_update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_12__["UpdateAdminComponent"] },
    { path: 'new-admin', component: _components_admin_admins_create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_13__["CreateAdminComponent"] },
    { path: '**', component: _components_admin_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFOztBQUU3RTtFQUNFLGtDQUFrQztFQUNsQyx5RUFBeUU7RUFDekUsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTs7dURBRXVEOztBQUV2RDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFHZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7Ozs7Ozs7O0dBUUc7O0FBR0g7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'project-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_admin_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/products/products.component */ "./src/app/components/admin/products/products.component.ts");
/* harmony import */ var _components_admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/orders/orders.component */ "./src/app/components/admin/orders/orders.component.ts");
/* harmony import */ var _components_admin_index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/index/index.component */ "./src/app/components/admin/index/index.component.ts");
/* harmony import */ var _components_admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/customers/customers.component */ "./src/app/components/admin/customers/customers.component.ts");
/* harmony import */ var _components_admin_customers_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/customers/update-customer/update-customer.component */ "./src/app/components/admin/customers/update-customer/update-customer.component.ts");
/* harmony import */ var _components_admin_products_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/products/new-product/new-product.component */ "./src/app/components/admin/products/new-product/new-product.component.ts");
/* harmony import */ var _components_admin_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/products/product-detail/product-detail.component */ "./src/app/components/admin/products/product-detail/product-detail.component.ts");
/* harmony import */ var _components_admin_orders_update_orders_update_orders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin/orders/update-orders/update-orders.component */ "./src/app/components/admin/orders/update-orders/update-orders.component.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard.component */ "./src/app/components/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _components_admin_admins_admins_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/admins/admins.component */ "./src/app/components/admin/admins/admins.component.ts");
/* harmony import */ var _components_admin_admins_update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/admins/update-admin/update-admin.component */ "./src/app/components/admin/admins/update-admin/update-admin.component.ts");
/* harmony import */ var _components_admin_admins_create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/admins/create-admin/create-admin.component */ "./src/app/components/admin/admins/create-admin/create-admin.component.ts");
/* harmony import */ var _pipes_order_by_date_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/order-by-date.pipe */ "./src/app/pipes/order-by-date.pipe.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _components_admin_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
            _components_admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"],
            _components_admin_index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
            _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
            _components_admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_11__["CustomersComponent"],
            _components_admin_customers_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_12__["UpdateCustomerComponent"],
            _components_admin_products_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_13__["NewProductComponent"],
            _components_admin_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailComponent"],
            _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchPipe"],
            _components_admin_orders_update_orders_update_orders_component__WEBPACK_IMPORTED_MODULE_15__["UpdateOrdersComponent"],
            _components_admin_admins_admins_component__WEBPACK_IMPORTED_MODULE_18__["AdminsComponent"],
            _components_admin_admins_update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_19__["UpdateAdminComponent"],
            _components_admin_admins_create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_20__["CreateAdminComponent"],
            _pipes_order_by_date_pipe__WEBPACK_IMPORTED_MODULE_21__["OrderByDatePipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin/admins/admins.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/admin/admins/admins.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbnMvYWRtaW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFOztBQUU3RTtFQUNFLGtDQUFrQztFQUNsQyx5RUFBeUU7RUFDekUsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTs7dURBRXVEOztBQUV2RDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFHZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7Ozs7Ozs7O0dBUUc7O0FBR0g7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWlucy9hZG1pbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/admins/admins.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/admins/admins.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsComponent", function() { return AdminsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admins.service */ "./src/app/services/admins.service.ts");
/* harmony import */ var src_app_models_admin_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/admin/admin */ "./src/app/models/admin/admin.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AdminsComponent = class AdminsComponent {
    constructor(adminsService, router) {
        this.adminsService = adminsService;
        this.router = router;
        this.updateAdmin = new src_app_models_admin_admin__WEBPACK_IMPORTED_MODULE_3__["Admin"]();
    }
    ;
    // Read all admins onInit
    ngOnInit() {
        this.adminsService.getAll().subscribe(admins => {
            this.admins = admins;
        });
    }
    ;
    // Delete admin
    onDeleteAdmin(admin) {
        // Remove from UI
        this.admins = this.admins.filter(a => a.id !== admin.id);
        // Remove from SERVER
        this.adminsService.remove(admin).subscribe();
    }
    ;
};
AdminsComponent.ctorParameters = () => [
    { type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AdminsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admins',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admins/admins.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admins.component.css */ "./src/app/components/admin/admins/admins.component.css")).default]
    })
], AdminsComponent);



/***/ }),

/***/ "./src/app/components/admin/admins/create-admin/create-admin.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/admins/create-admin/create-admin.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n  padding-top: 20px;\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  padding-top: 20px;\r\n}\r\n\r\nlabel {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbnMvY3JlYXRlLWFkbWluL2NyZWF0ZS1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxrQ0FBa0M7RUFDbEMseUVBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBR2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEOzs7Ozs7OztHQVFHOztBQUdIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW5zL2NyZWF0ZS1hZG1pbi9jcmVhdGUtYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/admins/create-admin/create-admin.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin/admins/create-admin/create-admin.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdminComponent", function() { return CreateAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admins.service */ "./src/app/services/admins.service.ts");
/* harmony import */ var src_app_models_admin_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/admin/admin */ "./src/app/models/admin/admin.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreateAdminComponent = class CreateAdminComponent {
    constructor(adminsService, router) {
        this.adminsService = adminsService;
        this.router = router;
        this.admin = new src_app_models_admin_admin__WEBPACK_IMPORTED_MODULE_3__["Admin"]();
    }
    ;
    ngOnInit() {
    }
    ;
    onCreate($event) {
        $event.preventDefault();
        console.log(this.admin);
        this.adminsService.create(this.admin).forEach(() => this.router.navigateByUrl('/admin/admins'));
    }
    ;
};
CreateAdminComponent.ctorParameters = () => [
    { type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CreateAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admins/create-admin/create-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-admin.component.css */ "./src/app/components/admin/admins/create-admin/create-admin.component.css")).default]
    })
], CreateAdminComponent);



/***/ }),

/***/ "./src/app/components/admin/admins/update-admin/update-admin.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/admins/update-admin/update-admin.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n  padding-top: 20px;\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  padding-top: 20px;\r\n}\r\n\r\nlabel {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbnMvdXBkYXRlLWFkbWluL3VwZGF0ZS1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxrQ0FBa0M7RUFDbEMseUVBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBR2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEOzs7Ozs7OztHQVFHOztBQUdIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUdBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW5zL3VwZGF0ZS1hZG1pbi91cGRhdGUtYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/admin/admins/update-admin/update-admin.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin/admins/update-admin/update-admin.component.ts ***!
  \********************************************************************************/
/*! exports provided: UpdateAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAdminComponent", function() { return UpdateAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admins.service */ "./src/app/services/admins.service.ts");
/* harmony import */ var src_app_models_admin_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/admin/admin */ "./src/app/models/admin/admin.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UpdateAdminComponent = class UpdateAdminComponent {
    constructor(adminsService, router) {
        this.adminsService = adminsService;
        this.router = router;
        this.admin = new src_app_models_admin_admin__WEBPACK_IMPORTED_MODULE_3__["Admin"]();
        // User ID from URL
        this.updateAdminId = parseInt(this.router.url.split('/')[3]);
        // Filter admin from all admins 
        this.adminsService.getAll().subscribe(admins => {
            this.admin = admins.filter(c => c.id === this.updateAdminId)[0],
                console.log(this.admin);
        });
    }
    ;
    ngOnInit() {
    }
    ;
    onEdit($event) {
        $event.preventDefault();
        this.adminsService.update(this.admin).forEach(() => this.router.navigateByUrl('/admin/admins'));
    }
    ;
};
UpdateAdminComponent.ctorParameters = () => [
    { type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UpdateAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admins/update-admin/update-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-admin.component.css */ "./src/app/components/admin/admins/update-admin/update-admin.component.css")).default]
    })
], UpdateAdminComponent);



/***/ }),

/***/ "./src/app/components/admin/customers/customers.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/admin/customers/customers.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFOztBQUU3RTtFQUNFLGtDQUFrQztFQUNsQyx5RUFBeUU7RUFDekUsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTs7dURBRXVEOztBQUV2RDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFHZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7Ozs7Ozs7O0dBUUc7O0FBR0g7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/customers/customers.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/customers/customers.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_models_customer_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customer/customer */ "./src/app/models/customer/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CustomersComponent = class CustomersComponent {
    constructor(customersService, router) {
        this.customersService = customersService;
        this.router = router;
        this.updateCustomer = new src_app_models_customer_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
    }
    ;
    // Read all customers onInit
    ngOnInit() {
        this.customersService.getAll().subscribe(customers => {
            this.customers = customers;
        });
    }
    ;
    // Delete customer
    onDeleteCustomer(customer) {
        // Remove from UI
        this.customers = this.customers.filter(c => c.id !== customer.id);
        // Remove from SERVER
        this.customersService.remove(customer).subscribe();
    }
    ;
};
CustomersComponent.ctorParameters = () => [
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/customers/customers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers.component.css */ "./src/app/components/admin/customers/customers.component.css")).default]
    })
], CustomersComponent);



/***/ }),

/***/ "./src/app/components/admin/customers/update-customer/update-customer.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin/customers/update-customer/update-customer.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n  padding-top: 20px;\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  padding-top: 20px;\r\n}\r\n\r\nlabel {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9jdXN0b21lcnMvdXBkYXRlLWN1c3RvbWVyL3VwZGF0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxrQ0FBa0M7RUFDbEMseUVBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBR2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEOzs7Ozs7OztHQVFHOztBQUdIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUdBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vY3VzdG9tZXJzL3VwZGF0ZS1jdXN0b21lci91cGRhdGUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/admin/customers/update-customer/update-customer.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin/customers/update-customer/update-customer.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_models_customer_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customer/customer */ "./src/app/models/customer/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UpdateCustomerComponent = class UpdateCustomerComponent {
    constructor(customersService, router) {
        this.customersService = customersService;
        this.router = router;
        this.customer = new src_app_models_customer_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
        // User ID from URL
        this.updateUserId = parseInt(this.router.url.split('/')[3]);
        // Filter user from all users 
        this.customersService.getAll().subscribe(customers => {
            this.customer = customers.filter(c => c.id === this.updateUserId)[0],
                console.log(this.customer);
        });
    }
    ;
    ngOnInit() {
    }
    ;
    onEdit($event) {
        $event.preventDefault();
        this.customersService.update(this.customer).forEach(() => this.router.navigateByUrl('/admin/users'));
    }
    ;
};
UpdateCustomerComponent.ctorParameters = () => [
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/customers/update-customer/update-customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-customer.component.css */ "./src/app/components/admin/customers/update-customer/update-customer.component.css")).default]
    })
], UpdateCustomerComponent);

;


/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding-top: 10%;\r\n}\r\n\r\n.card {\r\n  margin: 20px;\r\n  padding: 1px;\r\n}\r\n\r\n.arrowIcon {\r\n  font-size: 110%;\r\n}\r\n\r\n.title-icon {\r\n  font-size: 150%;\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFOztBQUU3RTtFQUNFLGtDQUFrQztFQUNsQyx5RUFBeUU7RUFDekUsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTs7dURBRXVEOztBQUV2RDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFHZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7Ozs7Ozs7O0dBUUc7O0FBR0g7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5hcnJvd0ljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxufVxyXG5cclxuLnRpdGxlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/admins.service */ "./src/app/services/admins.service.ts");







let DashboardComponent = class DashboardComponent {
    constructor(customers, orders, product, admin) {
        this.customers = customers;
        this.orders = orders;
        this.product = product;
        this.admin = admin;
        this.countAdmins = 0;
        this.countCustomers = 0;
        this.allAdmins = 0;
        this.allCustomer = 0;
        this.allOrders = 0;
        this.allProducts = 0;
        this.allUsers = 0;
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(this.admin.getAll(), this.customers.getAll(), this.orders.getAll(), this.product.getAll()).forEach(data => {
            console.log(data);
            this.allAdmins = data[0].length;
            this.allCustomer = data[1].length;
            this.allOrders = data[2].length;
            this.allProducts = data[3].length;
            this.allUsers = this.allAdmins + this.allCustomer;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_6__["AdminsService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/admin/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/admin/index/index.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/admin/index/index.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxrQ0FBa0M7RUFDbEMseUVBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBR2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEOzs7Ozs7OztHQVFHOztBQUdIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9wcm9qZWN0LWFuZ3VsYXIvYXNzZXRzL2ltZy9yZWNvcmRwbGF5ZXItbmVvbjEuanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdmJhci1idG4ge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBTSURFQkFSIFNUWUxFXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4jc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTI1MHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jZGlzbWlzcyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbiNkaXNtaXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIHotaW5kZXg6IDk5ODtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIHAge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxudWwgdWwgYSB7XHJcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbnVsLkNUQXMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5hLmRvd25sb2FkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5hLmFydGljbGUsXHJcbmEuYXJ0aWNsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzZkN2ZjYyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQ09OVEVOVCBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogI2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufSAqL1xyXG5cclxuXHJcbiNzZWFyY2hBY3RpdmUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XHJcbn1cclxuXHJcbiNjaGVja0JveCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/admin/index/index.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/index/index.component.ts ***!
  \***********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/app/components/admin/index/index.component.css")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/components/admin/orders/orders.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/admin/orders/orders.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFOztBQUU3RTtFQUNFLGtDQUFrQztFQUNsQyx5RUFBeUU7RUFDekUsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTs7dURBRXVEOztBQUV2RDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFHZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7Ozs7Ozs7O0dBUUc7O0FBR0g7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/orders/orders.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/orders/orders.component.ts ***!
  \*************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var src_app_models_order_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/order/order */ "./src/app/models/order/order.ts");




let OrdersComponent = class OrdersComponent {
    constructor(ordersService) {
        this.ordersService = ordersService;
        this.orderKey = 'orderDate';
        this.updateCustomer = new src_app_models_order_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
    }
    ;
    // Read all orders onInit
    ngOnInit() {
        this.ordersService.getAll().subscribe(orders => {
            this.orders = orders;
        });
    }
    ;
};
OrdersComponent.ctorParameters = () => [
    { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] }
];
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/orders/orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.css */ "./src/app/components/admin/orders/orders.component.css")).default]
    })
], OrdersComponent);



/***/ }),

/***/ "./src/app/components/admin/orders/update-orders/update-orders.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin/orders/update-orders/update-orders.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9vcmRlcnMvdXBkYXRlLW9yZGVycy91cGRhdGUtb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFOztBQUU3RTtFQUNFLGtDQUFrQztFQUNsQyx5RUFBeUU7RUFDekUsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTs7dURBRXVEOztBQUV2RDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFHZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7Ozs7Ozs7O0dBUUc7O0FBR0g7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL29yZGVycy91cGRhdGUtb3JkZXJzL3VwZGF0ZS1vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/orders/update-orders/update-orders.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin/orders/update-orders/update-orders.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UpdateOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOrdersComponent", function() { return UpdateOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_order_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/order/order */ "./src/app/models/order/order.ts");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");





let UpdateOrdersComponent = class UpdateOrdersComponent {
    constructor(ordersService, router) {
        this.ordersService = ordersService;
        this.router = router;
        this.oneOrder = new src_app_models_order_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
        this.selectedOrderID = parseInt(this.router.url.split('/')[3]);
        this.ordersService.getAll().subscribe(orders => {
            this.oneOrder = orders.filter(c => c.id === this.selectedOrderID)[0];
        });
    }
    ngOnInit() { }
    onUpdate($event) {
        $event.preventDefault();
        // this.oneOrder.orderStatus = parseInt(this.oneOrder.orderStatus);
        delete this.oneOrder.orderDate;
        this.ordersService.update(this.oneOrder).forEach(() => this.router.navigateByUrl('/orders'));
    }
    onCancel() {
        this.router.navigateByUrl('/orders');
    }
};
UpdateOrdersComponent.ctorParameters = () => [
    { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UpdateOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/orders/update-orders/update-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-orders.component.css */ "./src/app/components/admin/orders/update-orders/update-orders.component.css")).default]
    })
], UpdateOrdersComponent);



/***/ }),

/***/ "./src/app/components/admin/products/new-product/new-product.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/products/new-product/new-product.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n.form-group {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\ninput {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9wcm9kdWN0cy9uZXctcHJvZHVjdC9uZXctcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxrQ0FBa0M7RUFDbEMseUVBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBR2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEOzs7Ozs7OztHQVFHOztBQUdIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vcHJvZHVjdHMvbmV3LXByb2R1Y3QvbmV3LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/products/new-product/new-product.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin/products/new-product/new-product.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_product_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product/product */ "./src/app/models/product/product.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NewProductComponent = class NewProductComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.newProduct = new src_app_models_product_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
    }
    // form: boolean[] = [
    //   /\w{3,}/.test(this.newProduct.productName),
    //   /\w{3,}/.test(this.newProduct.seoFriendlyProductName),
    //   /\w{3,}/.test(this.newProduct.productCategory),
    //   /\w{3,}/.test(this.newProduct.pictureURL),
    //   /\w{3,}/.test(this.newProduct.publisher),
    //   this.newProduct.price < 2000000 && this.newProduct.price > 1,
    //   this.newProduct.stock < 2000 && this.newProduct.stock > 1,
    //   /\w{3,}@\w{3,}.\w{2,3}/.test(email),
    // ];
    ngOnInit() {
    }
    onSubmit(ev) {
        ev.preventDefault();
        delete this.newProduct.id;
        this.productService.createNew(this.newProduct).subscribe(response => {
            console.log('sikeres');
            this.router.navigateByUrl('/products');
        }, err => {
            console.error(err);
        });
    }
    onCancel() {
        this.router.navigateByUrl('/products');
    }
};
NewProductComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NewProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/new-product/new-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-product.component.css */ "./src/app/components/admin/products/new-product/new-product.component.css")).default]
    })
], NewProductComponent);



/***/ }),

/***/ "./src/app/components/admin/products/product-detail/product-detail.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin/products/product-detail/product-detail.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n.form-group {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\ninput {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxrQ0FBa0M7RUFDbEMseUVBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBR2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEOzs7Ozs7OztHQVFHOztBQUdIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHJvamVjdC1hbmd1bGFyL2Fzc2V0cy9pbWcvcmVjb3JkcGxheWVyLW5lb24xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0yNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2Rpc21pc3Mge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jZGlzbWlzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYS5hcnRpY2xlLFxyXG5hLmFydGljbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qICNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcblxyXG4jc2VhcmNoQWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4jY2hlY2tCb3gge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/products/product-detail/product-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin/products/product-detail/product-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_product_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/product/product */ "./src/app/models/product/product.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");





let ProductDetailComponent = class ProductDetailComponent {
    constructor(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.oneProduct = new src_app_models_product_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
        this.selectedProductId = parseInt(this.router.url.split('/')[3]);
        this.productsService.getAll().subscribe(products => {
            this.oneProduct = products.filter(c => c.id === this.selectedProductId)[0];
        });
    }
    ngOnInit() {
    }
    onUpdate($event) {
        $event.preventDefault();
        this.productsService.update(this.oneProduct).forEach(() => this.router.navigateByUrl('/products'));
    }
    onCancel() {
        this.router.navigateByUrl('/products');
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/product-detail/product-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.component.css */ "./src/app/components/admin/products/product-detail/product-detail.component.css")).default]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/components/admin/products/products.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin/products/products.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxrQ0FBa0M7RUFDbEMseUVBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBR2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEOzs7Ozs7OztHQVFHOztBQUdIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9wcm9qZWN0LWFuZ3VsYXIvYXNzZXRzL2ltZy9yZWNvcmRwbGF5ZXItbmVvbjEuanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdmJhci1idG4ge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBTSURFQkFSIFNUWUxFXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4jc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTI1MHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jZGlzbWlzcyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbiNkaXNtaXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIHotaW5kZXg6IDk5ODtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIHAge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxudWwgdWwgYSB7XHJcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbnVsLkNUQXMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5hLmRvd25sb2FkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5hLmFydGljbGUsXHJcbmEuYXJ0aWNsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzZkN2ZjYyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQ09OVEVOVCBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogI2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufSAqL1xyXG5cclxuXHJcbiNzZWFyY2hBY3RpdmUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XHJcbn1cclxuXHJcbiNjaGVja0JveCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/admin/products/products.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/products/products.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_product_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product/product */ "./src/app/models/product/product.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProductsComponent = class ProductsComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.updatedProduct = new src_app_models_product_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.filterPhrase = '';
        this.isActiveOnly = false;
    }
    ngOnInit() {
        this.productService.getAll().subscribe(products => {
            this.products = products;
        });
    }
    onDelete(product) {
        if (confirm(`Are you sure you want to delete ${product.productName}?`)) {
            product.productStatus = 0;
            this.productService.update(product).subscribe(product => {
                console.log('sikeres');
            });
        }
        err => console.error(err);
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/components/admin/products/products.component.css")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxrQ0FBa0M7RUFDbEMseUVBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBR2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEOzs7Ozs7OztHQVFHOztBQUdIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9wcm9qZWN0LWFuZ3VsYXIvYXNzZXRzL2ltZy9yZWNvcmRwbGF5ZXItbmVvbjEuanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdmJhci1idG4ge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBTSURFQkFSIFNUWUxFXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4jc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTI1MHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jZGlzbWlzcyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbiNkaXNtaXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIHotaW5kZXg6IDk5ODtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIHAge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxudWwgdWwgYSB7XHJcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbnVsLkNUQXMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5hLmRvd25sb2FkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5hLmFydGljbGUsXHJcbmEuYXJ0aWNsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzZkN2ZjYyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQ09OVEVOVCBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogI2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufSAqL1xyXG5cclxuXHJcbiNzZWFyY2hBY3RpdmUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XHJcbn1cclxuXHJcbiNjaGVja0JveCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/models/admin/admin.ts":
/*!***************************************!*\
  !*** ./src/app/models/admin/admin.ts ***!
  \***************************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Admin {
    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.username = '';
        this.token = '';
    }
}


/***/ }),

/***/ "./src/app/models/customer/customer.ts":
/*!*********************************************!*\
  !*** ./src/app/models/customer/customer.ts ***!
  \*********************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Customer {
    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.username = '';
        this.token = '';
    }
}


/***/ }),

/***/ "./src/app/models/order/order.ts":
/*!***************************************!*\
  !*** ./src/app/models/order/order.ts ***!
  \***************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Order {
    constructor() {
        this.id = 0;
        this.orderDate = '';
        this.customerId = 0;
        this.orderStatus = 1;
        this.value = 0;
    }
}


/***/ }),

/***/ "./src/app/models/product/product.ts":
/*!*******************************************!*\
  !*** ./src/app/models/product/product.ts ***!
  \*******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Product {
    constructor() {
        this.id = 0;
        this.productName = 'proba';
        this.seoFriendlyProductName = 'proba';
        this.productCategory = 'proba';
        this.productStatus = 1;
        this.pictureURL = 'proba';
        this.publisher = 'proba';
        this.price = 0;
        this.stock = 0;
    }
}


/***/ }),

/***/ "./src/app/pipes/order-by-date.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/order-by-date.pipe.ts ***!
  \*********************************************/
/*! exports provided: OrderByDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByDatePipe", function() { return OrderByDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderByDatePipe = class OrderByDatePipe {
    transform(value, key) {
        if (value) {
            value.sort((a, b) => {
                let aDate = new Date(a[key]).getTime();
                let bDate = new Date(b[key]).getTime();
                return ((aDate - bDate) * (-1));
            });
        }
        ;
        return value;
    }
};
OrderByDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'orderByDate'
    })
], OrderByDatePipe);

;


/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(products, phrase = '', activeOnly = false) {
        let result = products.filter(item => {
            const jsonString = JSON.stringify(item)
                .replace(/"[^"]*"\:/g, '')
                .replace(/[",\{\}]/g, '');
            return jsonString.toLowerCase().indexOf(phrase.toLowerCase()) > -1;
        });
        if (activeOnly) {
            result = result.filter(el => el.productStatus === 1);
        }
        return result;
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/services/admins.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/admins.service.ts ***!
  \********************************************/
/*! exports provided: AdminsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsService", function() { return AdminsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AdminsService = class AdminsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:3000/api/admins';
    }
    getAll() {
        return this.httpClient.get(this.url);
    }
    ;
    getOne(id) {
        return this.httpClient.get(`${this.url}/${id}`);
    }
    ;
    remove(admin) {
        return this.httpClient.delete(`${this.url}/${admin.id}`);
    }
    ;
    update(admin) {
        return this.httpClient.post(`${this.url}/${admin.id}`, admin);
    }
    ;
    create(admin) {
        return this.httpClient.post(`${this.url}`, admin);
    }
    ;
};
AdminsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminsService);



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CustomersService = class CustomersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:3000/api/users';
    }
    getAll() {
        return this.httpClient.get(this.url);
    }
    ;
    getOne(id) {
        return this.httpClient.get(`${this.url}/${id}`);
    }
    ;
    remove(customer) {
        return this.httpClient.delete(`${this.url}/${customer.id}`);
    }
    ;
    update(customer) {
        return this.httpClient.post(`${this.url}/${customer.id}`, customer);
    }
    ;
};
CustomersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomersService);



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let OrdersService = class OrdersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:3000/api/orders';
    }
    getAll() {
        return this.httpClient.get(this.url);
    }
    ;
    getOne(id) {
        return this.httpClient.get(`${this.url}/${id}`);
    }
    ;
    remove(order) {
        return this.httpClient.delete(`${this.url}/${order.id}`);
    }
    ;
    update(order) {
        return this.httpClient.post(`${this.url}/${order.id}`, order);
    }
    ;
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductService = class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // list: BehaviorSubject<any> = new BehaviorSubject([]);
        this.url = 'http://localhost:3000/api/products';
    }
    getAll() {
        return this.httpClient.get(this.url);
    }
    getOne(id) {
        return this.httpClient.get(`${this.url}/${id}`);
    }
    createNew(product) {
        return this.httpClient.put(`${this.url}`, product);
    }
    update(product) {
        return this.httpClient.post(`${this.url}/${product.id}`, product);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\zaro-projekt\AllCRUD\project-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map