import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  }
});

test('iam', async ({ page }) => {
  // Create Cursor
  const cursor = await createCursor(page);

  // Go to https://rancher.skrzypek.dev/dashboard
  await page.goto('https://rancher.skrzypek.dev/dashboard/home');

  // Click path >> nth=1
  await page.locator('path').nth(1).click();

  // Click text=Users & Authentication
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/management.cattle.io.user' }*/),
    page.locator('text=Users & Authentication').click()
  ]);

  // Click text=Auth Provider
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/config' }*/),
    page.locator('text=Auth Provider').click()
  ]);

  // Click a:has-text("Groups")
  await page.locator('a:has-text("Groups")').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/group.principal');

  // Click a:has-text("Roles")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/roles#GLOBAL' }*/),
    page.locator('a:has-text("Roles")').click()
  ]);

  // Click nav a:has-text("Users")
  await page.locator('nav a:has-text("Users")').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/management.cattle.io.user');

  // Click text=Groups
  await page.locator('text=Groups').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/group.principal');

});
