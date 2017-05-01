import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatHttpLink'})
export class FormatHttpLinkPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    if (!/^https?:\/\//i.test(value)) {
      value = 'http://' + value;
    }

    return value;

  }
}
