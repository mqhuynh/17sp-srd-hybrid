import { Pipe, PipeTransform } from '@angular/core';

/**
 * Takes any input and returns a url with http:// in front of it
 *
 * Use it like this: {{ value | formatHttpLink }}
 */
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
