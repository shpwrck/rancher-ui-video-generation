// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://" + process.env["RANCHER_URL"] + "/dashboard/auth/login");

  // Click input[type="text"]
  await page.locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill(process.env["RANCHER_USERNAME"]);

  // Press Tab
  await page.locator('input[type="text"]').press('Tab');

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill(process.env["RANCHER_PASSWORD"]);

  // Click button:has-text("Log in with Local User")
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Log in with Local User")').click()
  ]);

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
