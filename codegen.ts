import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('test', async ({ page }) => {

  // Go to https://rancher.skrzypek.dev/dashboard/home
  await page.goto('https://rancher.skrzypek.dev/dashboard/home');

  // Click path >> nth=1
  await page.locator('path').nth(1).click();

  // Click text=Home
  await page.locator('text=Home').click();

  // Click path >> nth=1
  await page.locator('path').nth(1).click();

  // Click a:has-text("Users & Authentication")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/management.cattle.io.user' }*/),
    page.locator('a:has-text("Users & Authentication")').click()
  ]);

  // Click text=Active u-8w2r6 example Local example 3.3 mins >> span[role="checkbox"]
  await page.locator('text=Active u-8w2r6 example Local example 3.3 mins >> span[role="checkbox"]').click();

  // Click button:has-text("Delete")
  await page.locator('button:has-text("Delete")').click();

  // Click input[type="text"]
  await page.locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('example');

  // Click div[role="dialog"] button:has-text("Delete")
  await page.locator('div[role="dialog"] button:has-text("Delete")').click();

  // Click a:has-text("Roles")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/roles#GLOBAL' }*/),
    page.locator('a:has-text("Roles")').click()
  ]);

  // Click tr:nth-child(9) .row-check >> nth=0
  await page.locator('tr:nth-child(9) .row-check').first().click();

  // Click button:has-text("Delete") >> nth=0
  await page.locator('button:has-text("Delete")').first().click();

  // Click div[role="dialog"] button:has-text("Delete")
  await page.locator('div[role="dialog"] button:has-text("Delete")').click();

  // Click text=Auth Provider
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/config' }*/),
    page.locator('text=Auth Provider').click()
  ]);

  // Click text=AzureAD
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/config/azuread?mode=edit' }*/),
    page.locator('text=AzureAD').click()
  ]);

  // Click button:has-text("Cancel")
  await page.locator('button:has-text("Cancel")').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/config');

  // Click .menu
  await page.locator('.menu').click();

  // Click text=Home
  await page.locator('text=Home').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/home');

  // Click text=Welcome to Rancher Clusters 1 Import Existing Create State Name Provider Kuberne
  await page.locator('text=Welcome to Rancher Clusters 1 Import Existing Create State Name Provider Kuberne').click();

  // Click svg
  await page.locator('svg').click();

  // Click text=Cluster Management
  await page.locator('text=Cluster Management').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/manager/provisioning.cattle.io.cluster');

  // Click svg
  await page.locator('svg').click();

  // Click text=Users & Authentication
  await page.locator('text=Users & Authentication').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/management.cattle.io.user');

  // Click text=Active u-8z78v example Local example 2.4 mins >> span[role="checkbox"]
  await page.locator('text=Active u-8z78v example Local example 2.4 mins >> span[role="checkbox"]').click();

  // Click button:has-text("Delete")
  await page.locator('button:has-text("Delete")').click();

  // Click input[type="text"]
  await page.locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('example');

  // Click div[role="dialog"] button:has-text("Delete")
  await page.locator('div[role="dialog"] button:has-text("Delete")').click();

  // Click text=Auth Provider
  await page.locator('text=Auth Provider').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/config');

  // Click a:has-text("Roles")
  await page.locator('a:has-text("Roles")').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/roles#GLOBAL');

  // Click text=Groups
  await page.locator('text=Groups').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/group.principal');

  // Click ul >> text=Roles
  await page.locator('ul >> text=Roles').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/roles#GLOBAL');

  // Click tr:nth-child(9) .row-check >> nth=0
  await page.locator('tr:nth-child(9) .row-check').first().click();

  // Click text=Active global-role-example — — 2.1 mins >> span[role="checkbox"]
  await page.locator('text=Active global-role-example — — 2.1 mins >> span[role="checkbox"]').click();

  // Click text=Active global-role-example — — 2.1 mins >> span[role="checkbox"]
  await page.locator('text=Active global-role-example — — 2.1 mins >> span[role="checkbox"]').click();

  // Click button:has-text("Delete") >> nth=0
  await page.locator('button:has-text("Delete")').first().click();

  // Click div[role="dialog"] button:has-text("Delete")
  await page.locator('div[role="dialog"] button:has-text("Delete")').click();

  // Click text=Active global-role-example — — 53 secs >> div >> nth=0
  await page.locator('text=Active global-role-example — — 53 secs >> div').first().click();

  // Click button:has-text("Delete") >> nth=0
  await page.locator('button:has-text("Delete")').first().click();

  // Click div[role="dialog"] button:has-text("Delete")
  await page.locator('div[role="dialog"] button:has-text("Delete")').click();

  // Click nav a:has-text("Users")
  await page.locator('nav a:has-text("Users")').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/management.cattle.io.user');

  // Click text=Active u-s6gjw example Local example 1.5 mins >> div >> nth=0
  await page.locator('text=Active u-s6gjw example Local example 1.5 mins >> div').first().click();

  // Click button:has-text("Delete")
  await page.locator('button:has-text("Delete")').click();

  // Click input[type="text"]
  await page.locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('example');

  // Click div[role="dialog"] button:has-text("Delete")
  await page.locator('div[role="dialog"] button:has-text("Delete")').click();

});