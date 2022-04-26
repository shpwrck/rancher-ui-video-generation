import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('dashboard', async ({ page }) => {
  const cursor = await createCursor(page);

  await page.waitForTimeout(500);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=node-driver-example').click()
  ]);

  await page.locator('text=Pods').click();
  await page.waitForTimeout(500);

  await page.locator('text=Cores').click();
  await page.waitForTimeout(500);

  await page.locator('text=Memory').click();
  await page.waitForTimeout(500);

  await page.locator('text=Events').click();
  await page.waitForTimeout(500);

});
