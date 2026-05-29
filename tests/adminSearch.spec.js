const { test, expect } = require('@playwright/test');

test('Admin Search And Table Validation', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    // Login
    await page.fill('input[name="username"]', 'Admin');

    await page.fill('input[name="password"]', 'admin123');

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/dashboard/);

    // Click Admin Menu
    await page.locator('//span[text()="Admin"]').click();

    // Search Username
    await page.locator(
        '(//input[contains(@class,"oxd-input")])[2]'
    ).fill('Admin');

    await page.locator('//button[@type="submit"]').click();

    // Validate Table
    const tableBody = page.locator('.oxd-table-body');

    await expect(tableBody).toBeVisible();

    const tableText = await tableBody.textContent();

    expect(tableText).toContain('Admin');

    await page.screenshot({
        path: 'screenshots/admin-search-success.png'
    });
});