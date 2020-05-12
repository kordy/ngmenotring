import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase'
})

export class ToUpperCasePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return value.toUpperCase()
  }
}
