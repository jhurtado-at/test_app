import { Component, OnInit } from '@angular/core';
import { IPhotoElement } from '../../models/photo-element.interface';
import { ElementsInitializerService } from '../../services/elements-initializer.service';
import { CONSTANTS } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-images',
  templateUrl: 'images.page.html',
  styleUrls: ['images.page.scss'],
})
export class ImagesPage implements OnInit {

  public elements: IPhotoElement[] = [];
  private auxElements: IPhotoElement[];
  public readonly approximateHeight = CONSTANTS.APPROXIMATE_SCROLL_ELEMENT_HEIGHT;

  constructor(
    private readonly elementsInitializerService: ElementsInitializerService
  ) {}

  ngOnInit() {
    this.generateElements();
  }

  private generateElements(): void {
    this.elements = this.elementsInitializerService.initializeElements();
    this.auxElements = [...this.elements];
  }

  public filterElements(value: string): void {
    this.elements = this.auxElements.filter((element: IPhotoElement) => this.filterElement(element, value));
  }

  private filterElement(element: IPhotoElement, value: string): boolean {
    return element.id.toString() === value || element.text.includes(value);
  }

}
