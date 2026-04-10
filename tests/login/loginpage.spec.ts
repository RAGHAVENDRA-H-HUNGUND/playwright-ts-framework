import { test, expect } from '../../fixtures/base.fixture.js';
import { validUser, invalidUser, emptyUser, emptyPassword, loginPageTitle } from '../../test-data/loginpage.data.js';

test.describe('Login Tests', () => {
  test('Should Login Successfully @Smoke', async ({ loginPage, page }) => {
    await loginPage.login(validUser.username, validUser.password);
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
  });

  test('Should Display Invalid Credentials Message @Regression', async ({ loginPage }) => {
    await loginPage.login(invalidUser.username, invalidUser.password);
    await expect(loginPage.invaliCredMsg).toBeVisible();
  });

  test('Should Display Required Field Message for Username Field @Regression', async ({ loginPage }) => {
    await loginPage.login(emptyUser.username, emptyUser.password);
    await expect(loginPage.RequiredFieldMsg).toBeVisible();
  });

  test('Should Display Required Field Message for Password Field @Sanity', async ({ loginPage }) => {
    await loginPage.login(emptyPassword.username, emptyPassword.password);
    await expect(loginPage.RequiredFieldMsg).toBeVisible();
  });

  test('Should Navigate to Password reset Page', async ({ loginPage, page }) => {
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL(/requestPasswordResetCode/, { timeout: 10000 });
  });

  test('Should have title as ' + loginPageTitle, async ({ loginPage, page }) => {
    await loginPage.goto();
    await expect(page).toHaveTitle(loginPageTitle);
  });

});
