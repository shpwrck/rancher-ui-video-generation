import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('node-driver', async ({ page }) => {
  const cursor = await createCursor(page);
  await page.waitForTimeout(500);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Create').click()
  ]);

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Amazon EC2').hover(),
    await page.waitForTimeout(500),
    page.locator('text=Tech Preview Azure').hover(),
    await page.waitForTimeout(500),
    page.locator('text=Harvester').hover(),
    await page.waitForTimeout(500),
    page.locator('text=VMware vSphere').hover(),
    await page.waitForTimeout(500),
    page.locator('text=DigitalOcean').hover(),
    await page.waitForTimeout(500),
    page.locator('text=DigitalOcean').click()
  ]);

  await page.waitForTimeout(500);
  await page.locator('[placeholder="A unique name for the cluster"]').click();

  await page.waitForTimeout(500);
  await page.locator('[placeholder="A unique name for the cluster"]').fill('example-cluster');

  await page.waitForTimeout(500);
  await page.locator('[placeholder="Any text you want that better describes this cluster"]').click();

  await page.waitForTimeout(500);
  await page.locator('[placeholder="Any text you want that better describes this cluster"]').fill('cloud or on premise...');

  await page.waitForTimeout(500);
  await page.locator('text=Pool Name * Machine Count * Roles etcd Control Plane Worker >> input[type="text"]').click();

  await page.waitForTimeout(500);
  await page.locator('text=Pool Name * Machine Count * Roles etcd Control Plane Worker >> input[type="text"]').fill('controlplane');

  await page.waitForTimeout(500);
  await page.locator('text=Pool Name * Machine Count * Roles etcd Control Plane Worker >> input[type="number"]').click();

  await page.waitForTimeout(500);
  await page.locator('text=Pool Name * Machine Count * Roles etcd Control Plane Worker >> input[type="number"]').fill('3');

  await page.waitForTimeout(500);
  await page.locator('.btn').first().click();
  await expect(page).toHaveURL('https://skrzypek.dev/dashboard/c/_/manager/provisioning.cattle.io.cluster/create?type=digitalocean#pool2');

  await page.waitForTimeout(500);
  await page.locator('text=controlplane pool2 Pool Name * Machine Count * Roles etcd Control Plane Worker R >> input[type="text"]').nth(1).click();

  await page.waitForTimeout(500);
  await page.locator('text=controlplane pool2 Pool Name * Machine Count * Roles etcd Control Plane Worker R >> input[type="text"]').nth(1).fill('worker');

  await page.waitForTimeout(500);
  await page.locator('button:has-text("Create")').hover();

  await page.waitForTimeout(500);
  await page.locator('button:has-text("Create")').click();

  await page.waitForTimeout(500);
  await page.locator('text=Clusters').click();

  await page.waitForTimeout(500);
});
