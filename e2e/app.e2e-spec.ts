import { Angular2FoundationsPage } from './app.po';

describe('angular2-foundations App', () => {
  let page: Angular2FoundationsPage;

  beforeEach(() => {
    page = new Angular2FoundationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
