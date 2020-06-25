import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { TranslateMockPipe } from '../../../shared/mocks/translate.pipe.mock';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, TranslateMockPipe ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form', () => {
    component.ngOnInit();
    expect(component.searchForm).toBeDefined();
  });

  it('should change the showSearchInput value', fakeAsync(() => {
    const spy = spyOn(component, 'toggleSearchInput').and.callThrough();
    const searchButton = fixture.debugElement.nativeElement.querySelector('.search-wrapper');
    searchButton.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
});
