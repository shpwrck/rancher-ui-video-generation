import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('interact', async ({ page }) => {
  const cursor = await createCursor(page);

  await page.waitForTimeout(500);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  // Click path >> nth=1
  await page.locator('path').nth(1).click();

  // Click header >> text=node-driver-example
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rec.skrzypek.dev/dashboard/c/c-m-v7xs5g5x/explorer#cluster-metrics' }*/),
    page.locator('header >> text=node-driver-example').click()
  ]);

  await page.locator('.header-buttons button:nth-child(1)').hover();
  await page.locator('.header-buttons button:nth-child(1)').click();
  await page.locator('.CodeMirror-scroll').click();
  await page.locator('textarea').nth(1).fill('resource yaml here...');
  await page.waitForTimeout(1000);
  await page.locator('text=Cancel').click();

  await page.locator('.header-buttons button:nth-child(2)').hover();
  await page.locator('.header-buttons button:nth-child(2)').click();
  await page.waitForTimeout(5000);
  await page.locator('text=Kubectl: node-driver-example Clear Connected W >> i').nth(1).click();

  // Something
  await page.locator('.header-buttons button:nth-child(3)').hover();
  await page.locator('.header-buttons button:nth-child(3)').click();

  await page.waitForTimeout(1000);
});
