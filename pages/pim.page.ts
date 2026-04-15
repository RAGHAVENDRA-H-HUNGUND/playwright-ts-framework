import { type Page, type Locator } from '@playwright/test';
import { expect } from '../fixtures/base.fixture.js';

export class PIMPage {
  readonly page: Page;
  readonly addEmployee: Locator;
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly saveBtn: Locator;
  readonly createLoginDetailsToggle: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly statusEnabled: Locator;
  readonly statusDisabled: Locator;
  readonly confirmPassword: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployee = page.getByRole('link',{name:'Add Employee'});
    this.firstName = page.getByPlaceholder('First name');
    this.middleName = page.getByPlaceholder('Middle name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.saveBtn = page.getByRole('button', { name: 'Save' });
    this.username = page.getByRole('textbox').nth(5);
    this.password = page.locator('input[type="password"]').first();
    this.confirmPassword = page.locator('input[type="password"]').nth(1);
    this.statusEnabled = page.getByText('Enabled');
    this.statusDisabled = page.getByText('Disabled');
    this.createLoginDetailsToggle = page.locator('.oxd-switch-input');
    
  }

  async saveEmployeeDetails(firstName: string, middleName: string, lastName: string){ 
    await this.firstName.waitFor({ state: 'visible', timeout: 5000 });
    await this.firstName.fill(firstName);
    await this.middleName.waitFor({ state: 'visible', timeout: 5000 });
    await this.middleName.fill(middleName);
    await this.lastName.waitFor({ state: 'visible', timeout: 5000 });
    await this.lastName.fill(lastName);
    //await this.saveBtn.click();
    await this.page.waitForLoadState('networkidle');

  }
  
  async saveEmployeeDetailsWithCredentials( username: string, password: string, 
    confirmpassword: string) {
    await this.createLoginDetailsToggle.waitFor({ state: 'visible', timeout: 5000 });
    await this.createLoginDetailsToggle.click();
    await this.username.waitFor({ state: 'visible', timeout: 5000 });
    await this.username.fill(username);
    await this.password.waitFor({ state: 'visible', timeout: 5000 });
    await this.password.fill(password);
    await this.confirmPassword.waitFor({ state: 'visible', timeout: 5000 });
    await this.confirmPassword.fill(confirmpassword);
    await this.statusDisabled.click();
    //await this.saveBtn.click();
    await this.page.waitForLoadState('networkidle');
  }

  /*async selectStatus(status: 'Enabled' | 'Disabled') {
    await this.statusRadio(status).check();
  }

  async verifyStatusSelected(status: 'Enabled' | 'Disabled') {
    await expect(this.statusRadio(status)).toBeChecked();
  }*/

}
