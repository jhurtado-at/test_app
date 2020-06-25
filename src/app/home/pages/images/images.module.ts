import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { ImagesPageRoutingModule } from './images-routing.module';
import { ImagesPage } from './images.page';
import { HeaderComponentModule } from '../../components/header/header.module';
import { PhotoElementComponentModule } from '../../components/photo-element/photo-element.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    HeaderComponentModule,
    ImagesPageRoutingModule,
    PhotoElementComponentModule,
    SharedModule
  ],
  declarations: [ImagesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImagesPageModule {}
