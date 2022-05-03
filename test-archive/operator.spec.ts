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

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Create').hover(),
    await page.waitForTimeout(500),
    page.locator('text=Create').click()
  ]);

  await page.locator('text=Amazon EKS').hover();
  await page.waitForTimeout(1000);
  await page.locator('text=Amazon EKS').click();

  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('[placeholder="e\\.g\\. sandbox"]').click();

  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('[placeholder="e\\.g\\. sandbox"]').fill('example-operator-cluster');

  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('text=Region af-south-1 ap-northeast-1 ap-northeast-2 ap-southeast-1 ap-southeast-2 ap >> select').selectOption('us-east-1');

  await page.frameLocator('#ember-iframe').locator('text=Next: Configure Cluster').hover();
  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('text=Next: Configure Cluster').click();

  await page.frameLocator('#ember-iframe').locator('text=Next: Configure Network').hover();
  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('text=Next: Configure Network').click();

  await page.frameLocator('#ember-iframe').locator('text=Next: Select Security Group').hover();
  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('text=Next: Select Security Group').click();

  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('text=SSH Key GPU Enabled Instance Request Spot Instances >> input[type="text"]').click();

  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('text=none selected').click();

  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('#ember126').click();

  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('#ember126').fill('node-group-example');

  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('#ember128').click();

  await page.waitForTimeout(1000);
  await page.frameLocator('#ember-iframe').locator('#ember128').fill('5');

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.frameLocator('#ember-iframe').locator('button:has-text("Create")').hover(),
    await page.waitForTimeout(500),
    page.frameLocator('#ember-iframe').locator('button:has-text("Create")').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('span:has-text("Clusters")').click();

});
