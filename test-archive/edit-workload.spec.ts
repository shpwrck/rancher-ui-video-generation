import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('edit-workload', async ({ page }) => {
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

  await page.waitForTimeout(500);
  await page.locator('[placeholder="Filter"]').click();

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('[placeholder="Filter"]').fill('yourworkload')
  ]);

  await page.locator('td:nth-child(9)').click();

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Edit Config').click()
  ]);

  await page.waitForTimeout(500);
  await page.locator('[placeholder="e\\.g\\. 8080"]').click();

  await page.waitForTimeout(500);
  await page.locator('[placeholder="e\\.g\\. 8080"]').fill('8080');

  await page.waitForTimeout(500);
  await page.locator('span:has-text("Node Scheduling")').click();

  await page.waitForTimeout(500);
  await page.locator('span:has-text("Storage")').click();

  await page.waitForTimeout(500);
  await page.locator('text=Add Volume Loading...').click();

  await page.waitForTimeout(500);
  await page.locator('text=Bind-Mount').click();

  await page.waitForTimeout(500);
  await page.locator('text=Path on Node * The Path on the Node must be Anything: do not check the target pa >> input[type="text"]').click();

  await page.waitForTimeout(500);
  await page.locator('text=Path on Node * The Path on the Node must be Anything: do not check the target pa >> input[type="text"]').fill('/var/lib/rancher');

  await page.waitForTimeout(500);
  await page.locator('text=Mount Point* Sub Path in Volume Read Only Remove Add Mount >> input[type="text"]').first().click();

  await page.waitForTimeout(500);
  await page.locator('text=Mount Point* Sub Path in Volume Read Only Remove Add Mount >> input[type="text"]').first().fill('/var/lib/rancher');

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Save")').click()
  ]);

  await page.waitForTimeout(500);
});
