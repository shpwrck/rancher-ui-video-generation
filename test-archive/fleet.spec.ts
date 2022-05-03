import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('fleet', async ({ page }) => {
  const cursor = await createCursor(page);

  await page.waitForTimeout(500);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await page.waitForTimeout(1000);
  await page.locator('svg').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Continuous Delivery').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Clusters').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Cluster Groups').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Create').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="A unique name"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="A unique name"]').fill('cloud');

  await page.waitForTimeout(1000);
  await page.locator('button:has-text("Add Rule")').click();

  await page.waitForTimeout(1000);
  await page.locator('text=in list Loading... Remove >> input').first().click();

  await page.waitForTimeout(1000);
  await page.locator('text=in list Loading... Remove >> input').first().fill('premise');

  await page.waitForTimeout(1000);
  await page.locator('text=in list').click();

  await page.waitForTimeout(1000);
  await page.locator('#vs2__option-0 >> text=in list').click();

  await page.waitForTimeout(1000);
  await page.locator('text=in list Loading... Remove >> input').nth(2).click();

  await page.waitForTimeout(1000);
  await page.locator('text=in list Loading... Remove >> input').nth(2).fill('cloud');

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Create")').hover(),
    page.waitForTimeout(1000),
    page.locator('button:has-text("Create")').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('text=Git Repos').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Git Repos Add Repository >> a').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="A unique name"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="A unique name"]').fill('clouddeployment');

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. https\\:\\/\\/github\\.com\\/rancher\\/fleet-examples\\.git"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. https\\:\\/\\/github\\.com\\/rancher\\/fleet-examples\\.git"]').fill('https://github.com/rancher/fleet-examples');

  await page.waitForTimeout(1000);
  await page.locator('text=A Branch Loading...').click();

  await page.waitForTimeout(1000);
  await page.locator('text=A Branch Loading... >> input[type="search"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[data-testid="add-item"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. \\/directory\\/in\\/your\\/repo"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. \\/directory\\/in\\/your\\/repo"]').fill('/single-cluster/');

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. \\/directory\\/in\\/your\\/repo"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. \\/directory\\/in\\/your\\/repo"]').fill('/single-cluster/helm');

  await page.waitForTimeout(1000);
  await page.locator('text=Target All Clusters in the Workspace Loading...').click();

  await page.waitForTimeout(1000);
  await page.locator('text=cloud').click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Create")').hover(),
    page.waitForTimeout(1000),
    page.locator('button:has-text("Create")').click()
  ]);

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=clouddeployment').hover(),
    page.waitForTimeout(1000),
    page.locator('text=clouddeployment').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('span:has-text("Resources")').click();

  await page.waitForTimeout(1000);
  await page.locator('svg').first().click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('.cluster-name').first().hover(),
    page.waitForTimeout(1000),
    page.locator('.cluster-name').first().click()
  ]);

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('[id="__layout"] div:has-text("Apps & Marketplace")').nth(4).hover(),
    page.waitForTimeout(1000),
    page.locator('[id="__layout"] div:has-text("Apps & Marketplace")').nth(4).click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('text=Installed Apps 1').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Managed').click();

  await page.waitForTimeout(2000);
});
