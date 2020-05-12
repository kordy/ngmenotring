import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {
  transform(value: number): any {
    const hours = Math.floor(value / 60);
    const minutes = value - (hours * 60);
    return `${hours ? `${hours}h ` : ''} ${minutes < 10 ? '0': ''}${minutes}m`
  }
}
