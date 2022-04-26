import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('delete-workload', async ({ page }) => {
  const cursor = await createCursor(page);

  await page.waitForTimeout(500);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await page.waitForTimeout(500);
  await page.locator('path').nth(1).click();

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('header >> text=node-driver-example').click()
  ]);

  await page.waitForTimeout(500);
  await page.locator('h6:has-text("Workload")').click();
  await expect(page).toHaveURL('https://rec.skrzypek.dev/dashboard/c/c-m-v7xs5g5x/explorer/workload');

  await page.waitForTimeout(500);
  await page.locator('[placeholder="Filter"]').click();

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('[placeholder="Filter"]').fill('yourworkload')
  ]);

  await page.waitForTimeout(500);
  await page.locator('td:nth-child(9)').click();

  await page.waitForTimeout(500);
  await page.locator('li:has-text("Delete")').click();

  await page.waitForTimeout(500);
  await page.locator('div[role="dialog"] button:has-text("Delete")').click();

  await page.waitForTimeout(500);
});
