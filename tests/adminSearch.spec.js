const { test, expect } = require('@playwright/test');

const AdminPage = require('../pages/AdminPage');

const Helper = require('../utils/helper');

test('Admin Search And Table Validation', async ({ page }) => {

    // Open OrangeHRM application
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login
    await page.fill('input[name="username"]', 'Admin');

    await page.fill('input[name="password"]', 'admin123');

    await page.click('button[type="submit"]');

    // Validate dashboard page
    await expect(page).toHaveURL(/dashboard/);

    // Create AdminPage object
    const adminPage = new AdminPage(page);

    // Navigate to Admin module
    await adminPage.navigateToAdminPage();

    // Search username
    await adminPage.searchUsername('Admin');

    // Wait for table data
    await page.waitForSelector('.oxd-table-card');

    // Validate table visible
    await expect(adminPage.tableRows.first()).toBeVisible();

    // Validate at least one row exists
    const rowCount = await adminPage.tableRows.count();

    expect(rowCount).toBeGreaterThan(0);

    // Validate searched username
    await expect(adminPage.usernameColumn.first()).toContainText('Admin');

    // Capture screenshot
    await Helper.takeScreenshot(page, 'admin-search');
});