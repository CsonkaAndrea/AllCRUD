import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  product: Product;
  updatedProduct: Product = new Product();
  filterPhrase = '';
  isActiveOnly: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

onDelete(product: Product) {
  if (confirm(`Are you sure you want to delete ${product.productName}?`)) {
  product.productStatus = 0;
  this.productService.update(product).subscribe(
    product => {
      console.log('sikeres');
   });
  }
  err => console.error(err);
 }

}
