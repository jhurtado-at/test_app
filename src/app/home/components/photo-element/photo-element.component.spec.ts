import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoElementComponent } from './photo-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PhotoElementComponent', () => {
  let component: PhotoElementComponent;
  let fixture: ComponentFixture<PhotoElementComponent>;
  const IMAGE_ERROR = './assets/img/no-image.png';
  const VISIBLE_IMAGE = 1;
  const NO_VISIBLE_IMAGE = 0;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoElementComponent ],
      imports: [
        IonicModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    component.photoElement = {
      id: 1,
      photo: 'URL',
      text: 'Lorem Ipsum'
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the value of the image to the error image', () => {
    component.errorLoadingImage();
    expect(component.photoElement.photo).toBe(IMAGE_ERROR);
  });

  it('should set loading to false when image is loaded', () => {
    component.imageLoaded();
    expect(component.loading).toBeFalsy();
  });

  it('should set loading to true when image will load', () => {
    component.imageWillLoad();
    expect(component.loading).toBeTruthy();
  });

  it('should get the visibility of the image', () => {
    const expectedResult = { opacity: NO_VISIBLE_IMAGE };
    component.loading = true;
    expect(component.visibility).toEqual(expectedResult);
  });
});
