import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { HomePage } from '../pages/home.page.js';
import { validUser } from '../test-data/loginpage.data.js';
import { PIMPage } from '../pages/pim.page.js';

type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  pimPage: PIMPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await page.waitForLoadState('networkidle');
    await use(loginPage);
  },
  homePage: async ({ loginPage, page }, use) => {
    await loginPage.login(validUser.username, validUser.password);
    const homePage = new HomePage(page);    
    await use(homePage);
  },
  pimPage: async ({ homePage, page }, use) => {
    const pimPage = new PIMPage(page);
    await use(pimPage);
  }

});

export const expect = test.expect;