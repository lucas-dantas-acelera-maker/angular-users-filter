import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyValue',
})
export class EmptyValuePipe implements PipeTransform {
  transform(value: any): string | any {
    const IS_EMPTY = value === undefined || value === null || value === '';
    return IS_EMPTY ? '-' : value;
  }
}
