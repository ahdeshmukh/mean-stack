import { MeanStackPage } from './app.po';

describe('mean-stack App', () => {
  let page: MeanStackPage;

  beforeEach(() => {
    page = new MeanStackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
