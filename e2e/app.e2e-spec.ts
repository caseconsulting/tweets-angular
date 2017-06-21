import { TweetsAngularPage } from './app.po';

describe('tweets-angular App', () => {
  let page: TweetsAngularPage;

  beforeEach(() => {
    page = new TweetsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
