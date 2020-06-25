import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PhotoElementComponent } from './photo-element.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PhotoElementComponent],
  exports: [PhotoElementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotoElementComponentModule { }
