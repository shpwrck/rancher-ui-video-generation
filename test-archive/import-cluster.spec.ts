import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('imported', async ({ page }) => {
  const cursor = await createCursor(page);
  await page.waitForTimeout(500);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Import Existing').hover(),
    await page.waitForTimeout(500),
    page.locator('text=Import Existing').click()
  ]);

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Generic').hover(),
    await page.waitForTimeout(500),
    page.locator('text=Generic').click()
  ]);

  await page.waitForTimeout(500);
  await page.locator('[placeholder="A unique name for the cluster"]').click();

  await page.waitForTimeout(500);
  await page.locator('[placeholder="A unique name for the cluster"]').fill('new-imported-cluster');

  await page.waitForTimeout(500);
  await page.locator('[placeholder="Any text you want that better describes this cluster"]').click();

  await page.waitForTimeout(500);
  await page.locator('[placeholder="Any text you want that better describes this cluster"]').fill('import any cncf certified distro here...');

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Create")').click()
  ]);

  await page.waitForTimeout(500);
  await page.locator("code >> text=/kubectl apply -f https/g").click();

  await page.waitForTimeout(500);
  await page.locator("code >> text=/curl --insecure -sfL https/g").click();

  await page.waitForTimeout(500);
  await page.locator('text=Clusters').click();

  await page.waitForTimeout(500);
  await page.locator('td:has-text("imported-cluster")').first().click();

});
