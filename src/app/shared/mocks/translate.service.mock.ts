import { Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';

export class TranslateMockService {

  public onLangChange: EventEmitter<any> = new EventEmitter();
  public onTranslationChange: EventEmitter<any> = new EventEmitter();
  public onDefaultLangChange: EventEmitter<any> = new EventEmitter();

  public get(key: any): Observable<any> {
    return of(key);
  }

  public instant(key: string | Array<string>, interpolateParams?: object): string | any {
    return key;
  }

  public setDefaultLang(lang) {}

  public use(lang) {}
}
