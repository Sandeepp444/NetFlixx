import { RoutingProjectPage } from './app.po';

describe('routing-project App', function() {
  let page: RoutingProjectPage;

  beforeEach(() => {
    page = new RoutingProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
