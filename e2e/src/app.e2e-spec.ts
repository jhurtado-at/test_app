import { AppPage } from './po/app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should get the text of the header and this should be "TEST APP"', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toContain('TEST APP');
  });

  it('should open searchbox and filter elements', async () => {
    page.navigateTo();
    const initialElementText = await page.getPhotoElements();
    await page.openSearchBox();
    await page.sleep(300);
    await page.writeInSearchBox();
    await page.sleep(1500);
    const filteredFirstElementText = await page.getPhotoElements();
    expect(initialElementText).not.toEqual(filteredFirstElementText);
  });
});
