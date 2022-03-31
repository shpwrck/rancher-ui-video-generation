import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560, 
    height: 1440
  },
  storageState: './storageState.json'
});

test('test-iam', async ({ page }) => {
  const cursor = await createCursor(page);

await page.waitForTimeout(1000);
  await page.goto('https://rancher.skrzypek.dev/dashboard/home');

await page.waitForTimeout(1000);
  await page.locator('svg').hover();
  await page.locator('svg').click();

await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/management.cattle.io.user' }*/),
    page.locator('text=Users & Authentication').hover(),
    page.locator('text=Users & Authentication').click()
  ]);

await page.waitForTimeout(1000);
  await page.locator('text=Create').hover();
  await page.locator('text=Create').click();
  await expect(page).toHaveURL('https://rancher.skrzypek.dev/dashboard/c/local/auth/management.cattle.io.user/create');

await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. jsmith"]').hover();
  await page.locator('[placeholder="e\\.g\\. jsmith"]').click();

await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. jsmith"]').fill('example');

await page.waitForTimeout(1000);
  await page.locator('text=Ask user to change their password on next login Generate a random password New P >> span[role="checkbox"]').nth(1).hover();
  await page.locator('text=Ask user to change their password on next login Generate a random password New P >> span[role="checkbox"]').nth(1).click();

await page.waitForTimeout(1000);
  await page.locator('text=Ask user to change their password on next login Generate a random password Gener >> span[role="checkbox"]').first().hover();
  await page.locator('text=Ask user to change their password on next login Generate a random password Gener >> span[role="checkbox"]').first().click();

await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/management.cattle.io.user' }*/),
    page.locator('button:has-text("Create")').hover(),
    page.locator('button:has-text("Create")').click()
  ]);

await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/roles#GLOBAL' }*/),
    page.locator('a:has-text("Roles")').hover(),
    page.locator('a:has-text("Roles")').click()
  ]);
  
await page.waitForTimeout(1000);
  await page.locator('a[role="tab"]:has-text("Cluster")').click();
  
await page.waitForTimeout(1000);
  await page.locator('a[role="tab"]:has-text("Project/Namespaces")').click();
  
await page.waitForTimeout(1000);
  await page.locator('a[role="tab"]:has-text("Global")').click();

await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/_/auth/roles/management.cattle.io.globalrole/create?roleContext=GLOBAL#grant-resources' }*/),
    page.locator('text=Create Global Role').hover(),
    page.locator('text=Create Global Role').click()
  ]);

await page.waitForTimeout(1000);
  await page.locator('text=GlobalRole: Create Name * Description New User Default Yes: Default role for new').hover();
  await page.locator('text=GlobalRole: Create Name * Description New User Default Yes: Default role for new').click();

await page.waitForTimeout(1000);
  await page.locator('[placeholder="A unique name"]').hover();
  await page.locator('[placeholder="A unique name"]').click();

await page.waitForTimeout(1000);
  await page.locator('[placeholder="A unique name"]').fill('global-role-example');

await page.waitForTimeout(1000);
  await page.locator('#vs1__combobox').hover();
  await page.locator('#vs1__combobox').click();
  
await page.waitForTimeout(1000);
  await page.locator('#vs1__option-0 >> text=create').hover();
  await page.locator('#vs1__option-0 >> text=create').click();
  
await page.waitForTimeout(1000);
  await page.locator('#vs2__combobox').hover();
  await page.locator('#vs2__combobox').click();
  
await page.waitForTimeout(1000);
  await page.locator('#vs2__option-0 >> text=Addons').hover();
  await page.locator('#vs2__option-0 >> text=Addons').click();
  
await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/_/auth/roles#GLOBAL' }*/),
    page.locator('button:has-text("Create")').hover(),
    page.locator('button:has-text("Create")').click()
  ]);

await page.waitForTimeout(1000);
  await page.locator('text=Groups').hover();
  await page.locator('text=Groups').click();

await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/config' }*/),
    page.locator('nav >> text=Auth Provider').hover(),
    page.locator('nav >> text=Auth Provider').click()
  ]);

await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://rancher.skrzypek.dev/dashboard/c/local/auth/config/azuread?mode=edit' }*/),
    page.locator('text=AzureAD').hover(),
    page.locator('text=AzureAD').click()
  ]);

await page.waitForTimeout(1000);
  await page.locator('#tenant-id').hover();
  await page.locator('#tenant-id').click();

await page.waitForTimeout(1000);
  await page.locator('#tenant-id').fill('example tenant id');

await page.waitForTimeout(1000);
  await page.locator('text=Application ID * Application Secret * >> [placeholder="A long UUID string"]').hover();
  await page.locator('text=Application ID * Application Secret * >> [placeholder="A long UUID string"]').click();

await page.waitForTimeout(1000);
  await page.locator('text=Application ID * Application Secret * >> [placeholder="A long UUID string"]').fill('example application id');

await page.waitForTimeout(1000);
  await page.locator('input[type="password"]').hover();
  await page.locator('input[type="password"]').click();

await page.waitForTimeout(1000);
  await page.locator('input[type="password"]').fill('example application serect');

await page.waitForTimeout(1000);
  await page.locator('button:has-text("Cancel")').hover();
  await page.locator('button:has-text("Cancel")').click();

await page.waitForTimeout(1000);
  await page.locator('.menu').hover();
  await page.locator('.menu').click();

await page.waitForTimeout(1000);
  await page.locator('text=Home').hover();
  await page.locator('text=Home').click();

});
