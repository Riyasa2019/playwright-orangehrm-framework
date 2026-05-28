const { test, expect } = require('@playwright/test');

test('Invalid Login Validation', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill('input[name="username"]', 'wrongUser');

    await page.fill('input[name="password"]', 'wrongPassword');

    await page.click('button[type="submit"]');

    const errorMessage = page.locator('.oxd-alert-content-text');

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText('Invalid credentials');

    await expect(page).toHaveURL(/login/);
});