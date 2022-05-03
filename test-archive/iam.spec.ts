import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('iam-rbac', async ({ page }) => {
  const cursor = await createCursor(page);
  await page.waitForTimeout(500);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await page.waitForTimeout(1000);
  await page.locator('svg').click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Users & Authentication').hover(),
    await page.waitForTimeout(1000),
    page.locator('text=Users & Authentication').click()
  ]);

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Auth Provider').hover(),
    await page.waitForTimeout(1000),
    page.locator('text=Auth Provider').click()
  ]);

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=ActiveDirectory').hover(),
    await page.waitForTimeout(1000),
    page.locator('text=ActiveDirectory').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('text=Auth Provider').click();

  await page.locator('text=AzureAD').hover();
  await page.waitForTimeout(1000);
  await page.locator('text=AzureAD').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Auth Provider').click();

  await page.locator('text=Okta').hover();
  await page.waitForTimeout(1000);
  await page.locator('text=Okta').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Auth Provider').click();

  await page.waitForTimeout(1000);
  await page.locator('span:has-text("Users")').click();

  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(2) td:nth-child(8)').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Edit Config').click();

  await page.waitForTimeout(1000);
  await page.locator('[aria-label="Administrator"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[aria-label="Restricted Administrator"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[aria-label="Restricted Administrator"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[aria-label="User-Base"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[aria-label="Manage Users"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[aria-label="Manage Roles"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[aria-label="Manage Settings"]').click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Save")').hover(),
    await page.waitForTimeout(1000),
    page.locator('button:has-text("Save")').click()
  ]);

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Roles').hover(),
    await page.waitForTimeout(1000),
    page.locator('text=Roles').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('span:has-text("Global")').click();

  await page.waitForTimeout(1000);
  await page.locator('ul[role="tablist"] >> text=Cluster').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Project/Namespaces').click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Create Project/Namespaces Role').hover(),
    await page.waitForTimeout(1000),
    page.locator('text=Create Project/Namespaces Role').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="A unique name"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="A unique name"]').fill('examplerole');

  await page.waitForTimeout(1000);
  await page.locator('.unlabeled-select').first().click();

  await page.waitForTimeout(1000);
  await page.locator('text=delete').click();

  await page.waitForTimeout(1000);
  await page.locator('.columns div:nth-child(2) .unlabeled-select').click();

  await page.waitForTimeout(1000);
  await page.locator('text=ConfigMaps').click();

  await page.waitForTimeout(1000);
  await page.locator('input[type="text"]').nth(2).click();

  await page.waitForTimeout(1000);
  await page.locator('input[type="text"]').nth(2).fill('*');

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Create")').hover(),
    await page.waitForTimeout(1000),
    page.locator('button:has-text("Create")').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('text=Download YAML Delete Actions State Display Name Name Built-In Project Creator De >> [placeholder="Filter"]').click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Download YAML Delete Actions State Display Name Name Built-In Project Creator De >> [placeholder="Filter"]').fill('example')
  ]);

  await page.waitForTimeout(1000);
  await page.locator('#NAMESPACE div .sortable-table tbody .main-row .row-check').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Download YAML Delete Actions 1 selected >> #promptRemove').click();

});
