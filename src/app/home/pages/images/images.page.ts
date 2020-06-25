import { Component, OnInit } from '@angular/core';
import { IPhotoElement } from '../../models/photo-element.interface';
import { CONSTANTS } from 'src/app/shared/utils/constants';

const TOTAL_ELEMENTS = 4000;
const INITIAL_TEXT_POSITION = 2;
const TEXT_LENGTH = 10;
const URL = 'https://picsum.photos/id/{ID_FOTO_INCREMENTAL}/500/500.jpg';
const REPLACED_STRING = '{ID_FOTO_INCREMENTAL}';
const RADIX = 36;

@Component({
  selector: 'app-images',
  templateUrl: 'images.page.html',
  styleUrls: ['images.page.scss'],
})
export class ImagesPage implements OnInit {

  public elements: IPhotoElement[] = [];
  private auxElements: IPhotoElement[];
  public readonly approximateHeight = CONSTANTS.APPROXIMATE_SCROLL_ELEMENT_HEIGHT;

  constructor() {}

  ngOnInit() {
    this.generateElements();
  }

  private generateElements(): void {
    for (let i = 0; i < TOTAL_ELEMENTS; i++) {
      this.elements.push({
        id: i,
        photo: URL.replace(REPLACED_STRING, `${i}`),
        text: Math.random().toString(RADIX).substring(INITIAL_TEXT_POSITION, TEXT_LENGTH)
      });
    }

    this.auxElements = [...this.elements];
  }

  public filterElements(value: string): void {
    this.elements = this.auxElements.filter((element: IPhotoElement) => this.filterElement(element, value));
  }

  private filterElement(element: IPhotoElement, value: string): boolean {
    return element.id.toString() === value || element.text.includes(value);
  }

}
