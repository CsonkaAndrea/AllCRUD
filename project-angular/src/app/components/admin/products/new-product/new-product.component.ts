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

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

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

  onSubmit(ev: Event): void {
    ev.preventDefault();
    delete this.newProduct.id;
    this.productService.createNew(this.newProduct).subscribe(
      response => {
        console.log('sikeres');
        this.router.navigateByUrl('/products');
      },
      err => {
        console.error(err);
      }
    );
  }

  onCancel() {
    this.router.navigateByUrl('/products');
  }

}
