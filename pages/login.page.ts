import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly RequiredFieldMsg: Locator;
  readonly invaliCredMsg: Locator;
  readonly forgotPasswordLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.RequiredFieldMsg = page.locator('[role="alert"]').or(page.getByText('Required', { exact: true }));
    this.invaliCredMsg = page.getByText('Invalid credentials', { exact: true });
    this.forgotPasswordLink = page.getByText('Forgot your password?');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
    // Wait for navigation or any validation messages
    await this.page.waitForLoadState('networkidle');
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }
}