import { GpsActivityMappingAppPage } from './app.po';

describe('gps-activity-mapping-app App', () => {
  let page: GpsActivityMappingAppPage;

  beforeEach(() => {
    page = new GpsActivityMappingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
