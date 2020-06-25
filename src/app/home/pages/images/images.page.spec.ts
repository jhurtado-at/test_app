import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';

import { ImagesPage } from './images.page';
import { PhotoElementComponentModule } from '../../components/photo-element/photo-element.module';
import { HeaderComponentModule } from '../../components/header/header.module';
import { TranslateMockService } from '../../../shared/mocks/translate.service.mock';

describe('ImagesPage', () => {
  let component: ImagesPage;
  let fixture: ComponentFixture<ImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesPage ],
      imports: [
        IonicModule,
        PhotoElementComponentModule,
        HeaderComponentModule
      ],
      providers: [
        {
          provide: TranslateService,
          useClass: TranslateMockService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate 4000 elements', () => {
    component.elements = [];
    component.ngOnInit();
    expect(component.elements.length).toBe(4000);
  });

  it('should filter elements and the total number of them to be less than 4000', () => {
    component.elements = [];
    component.ngOnInit();
    component.filterElements('10');
    expect(component.elements.length).toBeLessThan(4000);
  });
});
