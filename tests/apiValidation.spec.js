const { test, expect } = require('@playwright/test');

const Helper = require('../utils/helper');

test('Login API Validation', async ({ page }) => {

    // Open OrangeHRM application
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Wait for API/network response
    const responsePromise = page.waitForResponse(
        response =>
            response.url().includes('/dashboard/index') &&
            response.status() === 200
    );

    // Enter username
    await page.fill('input[name="username"]', 'Admin');

    // Enter password
    await page.fill('input[name="password"]', 'admin123');

    // Click login button
    await page.click('button[type="submit"]');

    // Capture API response
    const response = await responsePromise;

    // Validate status code
    expect(response.status()).toBe(200);

    // Validate response successful
    expect(response.ok()).toBeTruthy();

    // Validate dashboard loaded
    await expect(page).toHaveURL(/dashboard/);

    // Print API details in terminal
    console.log('Response URL:', response.url());

    console.log('Status Code:', response.status());

    // Capture screenshot
    await Helper.takeScreenshot(page, 'api-validation');
});