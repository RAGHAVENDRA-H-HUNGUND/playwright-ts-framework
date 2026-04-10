import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { HomePage } from '../pages/home.page.js';
import { validUser } from '../test-data/loginpage.data.js';

type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
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
  }
});

export const expect = test.expect;