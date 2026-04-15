import { test, expect } from '../../fixtures/base.fixture.js';

test.describe('Home Page Tests', () => {
  test('Should Logout Successfully @Smoke', async ({ homePage, page }) => {
    // User already logged in via homePage fixture dependency
    await homePage.logout();
    await expect(page).toHaveURL(/auth\/login/, { timeout: 10000 });
  });

  test('Should Navigate to PIM Page Successfully @Regression', async ({ homePage, page }) => {
    // User already logged in via homePage fixture dependency
    await homePage.navigateToPIM();
    await expect(page).toHaveURL(/pim/, { timeout: 10000 });
  });
});