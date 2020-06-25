import { Component, Input } from '@angular/core';
import { IPhotoElement } from '../../models/photo-element.interface';
import { CONSTANTS } from 'src/app/shared/utils/constants';

const IMAGE_ERROR = './assets/img/no-image.png';
const VISIBLE = 1;
const HIDDEN = 0;

@Component({
  selector: 'app-photo-element',
  templateUrl: 'photo-element.component.html',
  styleUrls: ['./photo-element.component.scss']
})

export class PhotoElementComponent {

  @Input()
  public photoElement: IPhotoElement;

  public loading = false;
  public elementHeight = CONSTANTS.PHOTO_ELEMENT_HEIGHT;

  public errorLoadingImage(): void {
    this.photoElement.photo = IMAGE_ERROR;
  }

  public imageLoaded(): void {
    this.loading = false;
  }

  public imageWillLoad(): void {
    this.loading = true;
  }

  public get visibility() {
    return {opacity: this.loading ? HIDDEN : VISIBLE};
  }
}
