# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\adminSearch.spec.js >> Admin Search And Table Validation
- Location: tests\adminSearch.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e53]:
    - img "orangehrm-logo"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Admin Search And Table Validation', async ({ page }) => {
  4  | 
  5  |     await page.goto(
  6  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  7  |         {
  8  |             waitUntil: 'domcontentloaded',
  9  |             timeout: 60000
  10 |         }
  11 |     );
  12 | 
  13 |     // Login
> 14 |     await page.fill('input[name="username"]', 'Admin');
     |                ^ Error: page.fill: Test timeout of 30000ms exceeded.
  15 | 
  16 |     await page.fill('input[name="password"]', 'admin123');
  17 | 
  18 |     await page.click('button[type="submit"]');
  19 | 
  20 |     await expect(page).toHaveURL(/dashboard/);
  21 | 
  22 |     // Click Admin Menu
  23 |     await page.locator('//span[text()="Admin"]').click();
  24 | 
  25 |     // Search Username
  26 |     await page.locator(
  27 |         '(//input[contains(@class,"oxd-input")])[2]'
  28 |     ).fill('Admin');
  29 | 
  30 |     await page.locator('//button[@type="submit"]').click();
  31 | 
  32 |     // Validate Table
  33 |     const tableBody = page.locator('.oxd-table-body');
  34 | 
  35 |     await expect(tableBody).toBeVisible();
  36 | 
  37 |     const tableText = await tableBody.textContent();
  38 | 
  39 |     expect(tableText).toContain('Admin');
  40 | 
  41 |     await page.screenshot({
  42 |         path: 'screenshots/admin-search-success.png'
  43 |     });
  44 | });
```