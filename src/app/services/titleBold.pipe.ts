import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tBold'
})
export class TittleBoldPipe implements PipeTransform {
  transform(value: string): any {
      const title = value.split(' ');
      if (title.length === 1) {
        return '<strong>' + value + '</strong>';
      } else if (title.length > 1) {
        return title[0] + '<strong>' + title[1] + '</strong>';
      }
  }
}
