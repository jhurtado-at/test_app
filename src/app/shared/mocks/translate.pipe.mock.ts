import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslateMockPipe implements PipeTransform {

  constructor() {}

  public transform(key: string, path: string, args?: any): string {
    if (!key) {
      return 'LOREM IPSUM';
    }
    return key;
  }
}
