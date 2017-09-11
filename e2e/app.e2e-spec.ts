import { AngularIoExamplePage } from './app.po';

describe('angular-io-example App', function() {
  let page: AngularIoExamplePage;

  beforeEach(() => {
    page = new AngularIoExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
