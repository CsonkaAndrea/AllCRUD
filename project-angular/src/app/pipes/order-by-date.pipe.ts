import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(value: [], key: string): any {
    // if (value) {
    //   value.sort((a: any, b: any) => {
    //     return ((new Date(a[key]) - new Date(b[key])) * (-1));
    //   });
    // }
    // return value;
  }
}

// Ezzel át lehetne alakítani, hogy emberi dátum jelenjen meg...
/*   value.forEach(data => {
    console.log(new Date(data[key]).getFullYear());
  }
  ) */
