import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empsearch'
})
export class EmpsearchPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }

    const empArray = [];
    for (const product of value) {
      if (product['empName'].startsWith(filteredString)) {
        empArray.push(product);
      }
    }
    return empArray;
  }

}
