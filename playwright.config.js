// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

 // reporter: 'html',
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  timeout: 60 * 1000,

 use: {
    browserName: 'chromium',
    headless: false,
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on',
  },
  




});

