const { test, expect } = require('@playwright/test');

test('Valid Login Test with API Validation', async ({ page }) => {

    // Open application
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Wait for login page to load
    await page.waitForSelector('input[name="username"]');

    // Enter credentials
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');

    // Capture Authentication API Request
    const loginResponsePromise = page.waitForResponse(response =>
        response.url().includes('/auth/validate') &&
        response.request().method() === 'POST'
    );

    // Click Login
    await page.locator('button[type="submit"]').click();

    // Get API Response
    const loginResponse = await loginResponsePromise;

    console.log('API URL:', loginResponse.url());
    console.log('API Status:', loginResponse.status());

    // Validate Authentication API
    expect(loginResponse.url()).toContain('/auth/validate');
    expect(loginResponse.status()).toBe(302);

    // Validate successful login in UI
    await expect(page).toHaveURL(/dashboard/);

    // Validate Dashboard heading
    await expect(page.locator('h6')).toContainText('Dashboard');

    // Take Screenshot
    await page.screenshot({
        path: 'screenshots/login-success.png',
        fullPage: true
    });

    console.log('Login API Validation Successful');
    console.log('Dashboard Validation Successful');
});