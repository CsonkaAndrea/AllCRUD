import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], phrase: string = '', active: boolean = false): any {
    return products.filter(item => {
      console.log('hh', active, item.productStatus);
      return active ? item.productStatus : true;
      // const jsonString = JSON.stringify(item)
      //   .replace(/"[^"]*"\:/g, '')
      //   .replace(/[",\{\}]/g, '');
      // return jsonString.toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    });
  }


}
