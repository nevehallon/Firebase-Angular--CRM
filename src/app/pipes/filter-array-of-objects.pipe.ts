import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArrayOfObjects',
})
export class FilterArrayOfObjectsPipe implements PipeTransform {
  transform(value: Array<any>, property: string, term: string): Array<any> {
    if (!value) return value;
    return value.filter((item) => item[property].toLowerCase().includes(term));
  }
}
