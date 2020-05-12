import { Pipe, PipeTransform } from '@angular/core';
import get from 'lodash/get';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(value: any, order: 'asc' | 'desc' = "asc", field?: string): any {
    return value.sort((a, b) => {
      const sortFieldA = field ? get(a ,field) : a;
      const sortFieldB = field ? get(b ,field) : b;

      if (sortFieldA === sortFieldB) return 0;
      return (order === 'asc' && sortFieldA < sortFieldB) || (order === 'desc' && sortFieldA > sortFieldB) ? -1 : 1
    })
  }
}
