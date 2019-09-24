import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], phrase: string = ''): any {
    return products.filter(item => {
      const jsonString = JSON.stringify(item)
        .replace(/"[^"]*"\:/g, '')
        .replace(/[",\{\}]/g, '');
      return jsonString.toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    });
  }


}
