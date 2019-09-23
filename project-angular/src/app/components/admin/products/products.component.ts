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
  updatedProduct: Product = new Product();
  title: 'Available Products';

  constructor(
    private productService: ProductService,
    private router: Router
  ) { };

  ngOnInit() {
    this.productService.getAll().subscribe(product => {
      this.products = product;
    });
  };

onDelete(product: Product){
  this.products  = this.products.filter(c => c.productId !== product.productId);
}

}
