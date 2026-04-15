import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly userDropdown: Locator;
  readonly logoutOption: Locator;
  readonly pim: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userDropdown = page.locator('.oxd-userdropdown');
    this.logoutOption = page.getByRole('menuitem', { name: 'Logout' });
    this.pim = page.getByRole('link', { name: 'PIM' });
  }

  async logout() {
    await this.userDropdown.waitFor({ state: 'visible', timeout: 5000 });
    await this.userDropdown.click();
    await this.logoutOption.waitFor({ state: 'visible', timeout: 5000 });
    await this.logoutOption.click();
    await this.page.waitForLoadState('networkidle');

  }
  
  async navigateToPIM() {
    await this.pim.waitFor({ state: 'visible', timeout: 5000 });
    await this.pim.click();
    await this.page.waitForLoadState('networkidle');
  }

}