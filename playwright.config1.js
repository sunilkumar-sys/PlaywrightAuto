// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  reporter: 'html',
  timeout: 60 * 1000,

 /* use: {
    browserName: 'chromium',
    headless: false,
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },*/
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
        


      },


    },
    {
      name:'firefox',
      use: {
        browserName: 'webkit',
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
        //...devices['Galaxy S24 landscape']


      }

    }

  ]




});

