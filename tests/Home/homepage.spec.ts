import { test, expect } from '../../fixtures/base.fixture.js';

test.describe('Logout Test', () => {
  test('Should Logout Successfully @Smoke', async ({ homePage, page }) => {
    // User already logged in via homePage fixture dependency
    await homePage.logout();
    await expect(page).toHaveURL(/auth\/login/, { timeout: 10000 });
  });
});