import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})

export class OrderByDatePipe implements PipeTransform {

  transform(value: [], key: string): any {
    if (value) {
      value.sort((a: any, b: any) => {
        let aDate = new Date(a[key]).getTime();
        let bDate = new Date(b[key]).getTime();
        return ((aDate - bDate) * (-1));
      });
    };
    return value;
  }
};
