import { FoodsalesClientPage } from './app.po';

describe('foodsales-client App', () => {
  let page: FoodsalesClientPage;

  beforeEach(() => {
    page = new FoodsalesClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
