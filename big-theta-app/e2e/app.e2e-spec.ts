import { BigThetaAppPage } from './app.po';

describe('big-theta-app App', () => {
  let page: BigThetaAppPage;

  beforeEach(() => {
    page = new BigThetaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
