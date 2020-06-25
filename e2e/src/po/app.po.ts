import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.deepCss('app-root .header .title')).getText();
  }

  openSearchBox() {
    return element(by.deepCss('app-root .header .search-wrapper')).click();
  }

  writeInSearchBox() {
    return element(by.deepCss('app-root .header .text-input-wrapper ion-input .native-input')).sendKeys(1000);
  }

  sleep(time: number) {
    return browser.sleep(time);
  }

  getPhotoElements() {
    return element(by.css('app-root app-photo-element:first-child ion-card-title')).getText();
  }
}
