const { test, expect } = require('@playwright/test');

test('Valid Login Test', async ({ page }) => {

    // Open application
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Enter username
    await page.fill('input[name="username"]', 'Admin');

    // Enter password
    await page.fill('input[name="password"]', 'admin123');

    // Click login
    await page.click('button[type="submit"]');

    // Validate dashboard URL
    await expect(page).toHaveURL(/dashboard/);

    // Validate dashboard heading
    await expect(page.locator('h6')).toContainText('Dashboard');

    // Capture screenshot
    await page.screenshot({
        path: 'screenshots/login-success.png',
        fullPage: true
    });
});