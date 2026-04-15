import { test, expect } from '../../fixtures/base.fixture.js';
import { employeeDetails, employeeWithCredentialsDetails } from '../../test-data/addemployeepage.data.js';


test.describe('PIM Page Tests', () => {
  test('Add Employee without Login Details', async ({ pimPage, page }) => {
    await expect(page).toHaveURL(/pim/, { timeout: 10000 });
    
    await pimPage.saveEmployeeDetails(employeeDetails.firstName, employeeDetails.middleName, employeeDetails.lastName);
    await pimPage.saveBtn.click();
  });

    test('Add Employee with Login Details', async ({ homePage, pimPage, page }) => { 
      await homePage.navigateToPIM();
      await pimPage.addEmployee.click();
      await pimPage.saveEmployeeDetails(employeeDetails.firstName, employeeDetails.middleName, employeeDetails.lastName);
      await pimPage.saveEmployeeDetailsWithCredentials(employeeWithCredentialsDetails.username, employeeWithCredentialsDetails.password, 
        employeeWithCredentialsDetails.confirmpassword);
      await pimPage.saveBtn.click();
      //await pimPage.verifyStatusSelected(employeeWithCredentialsDetails.status as 'Enabled' | 'Disabled');
  });

});