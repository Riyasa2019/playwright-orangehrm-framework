const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure'
  }
});
