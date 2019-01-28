import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display brand message', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toEqual('Rafael Pimentel\'s Resume');
  });
});
