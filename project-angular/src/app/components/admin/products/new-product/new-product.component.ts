import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct: Product = new Product();
  title: 'New Product';

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    delete this.newProduct.id;
    this.productService.createNew(this.newProduct).subscribe(
      response => {
        console.log('sikeres');
      },
      err => {
        console.error(err),
          this.router.navigateByUrl('/admin/products');
      }
    );
   
  }

  onCancel() {
    this.router.navigateByUrl('/admin/products');
  }

}
