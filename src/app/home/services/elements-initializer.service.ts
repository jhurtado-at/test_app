import { Injectable } from '@angular/core';
import { IPhotoElement } from '../models/photo-element.interface';

const TOTAL_ELEMENTS = 4000;
const INITIAL_TEXT_POSITION = 2;
const TEXT_LENGTH = 10;
const URL = 'https://picsum.photos/id/{ID_FOTO_INCREMENTAL}/500/500.jpg';
const REPLACED_STRING = '{ID_FOTO_INCREMENTAL}';
const RADIX = 36;

@Injectable(
  { providedIn: 'root' }
)
export class ElementsInitializerService {

  constructor() { }

  public initializeElements(): IPhotoElement[] {
    const elements = [];
    for (let i = 0; i < TOTAL_ELEMENTS; i++) {
      elements.push({
        id: i,
        photo: URL.replace(REPLACED_STRING, `${i}`),
        text: Math.random().toString(RADIX).substring(INITIAL_TEXT_POSITION, TEXT_LENGTH)
      });
    }

    return elements;
  }

}
