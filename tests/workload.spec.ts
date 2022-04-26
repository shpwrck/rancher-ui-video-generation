import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('create-workload', async ({ page }) => {
  const cursor = await createCursor(page);

  await page.waitForTimeout(1000);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await page.waitForTimeout(1000);
  await page.locator('path').nth(1).click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('header >> text=node-driver-example').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('h6:has-text("Workload")').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Create').click();

  await page.waitForTimeout(5000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Deployment').nth(2).click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('text=Namespace default Loading... Name * >> input[type="text"]').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Namespace default Loading... Name * >> input[type="text"]').fill('yourworkload');

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. nginx\\:latest"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. nginx\\:latest"]').fill('nginx');

  await page.waitForTimeout(1000);
  await page.locator('text=Add Port').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Do not create a service').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Cluster IP').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Service Type Cluster IP Loading... Name Private Container Port Protocol TCP Load >> input[type="text"]').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Service Type Cluster IP Loading... Name Private Container Port Protocol TCP Load >> input[type="text"]').fill('http');

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. 8080"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. 8080"]').fill('80');

  await page.waitForTimeout(1000);
  await page.locator('li[role="presentation"]:has-text("Health Check")').click();

  await page.waitForTimeout(1000);
  await page.locator('li[role="presentation"]:has-text("Labels & Annotations")').click();

  await page.waitForTimeout(1000);
  await page.locator('li[role="presentation"]:has-text("Networking")').click();

  await page.waitForTimeout(1000);
  await page.locator('li[role="presentation"]:has-text("Node Scheduling")').click();

  await page.waitForTimeout(1000);
  await page.locator('li[role="presentation"]:has-text("Pod Scheduling")').click();

  await page.waitForTimeout(1000);
  await page.locator('li[role="presentation"]:has-text("Resources")').click();

  await page.waitForTimeout(1000);
  await page.locator('li[role="presentation"]:has-text("Scaling and Upgrade Policy")').click();

  await page.waitForTimeout(1000);
  await page.locator('li[role="presentation"]:has-text("Security Context")').click();

  await page.waitForTimeout(1000);
  await page.locator('li[role="presentation"]:has-text("Storage")').click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Create")').click()
  ]);

  await page.waitForTimeout(1000);
});

test('edit-workload', async ({ page }) => {
  const cursor = await createCursor(page);

  await page.waitForTimeout(1000);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await page.waitForTimeout(1000);
  await page.locator('path').nth(1).click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('header >> text=node-driver-example').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('h6:has-text("Workload")').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="Filter"]').click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('[placeholder="Filter"]').fill('yourworkload')
  ]);

  await page.locator('td:nth-child(9)').click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Edit Config').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. 8080"]').click();

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="e\\.g\\. 8080"]').fill('8080');

  await page.waitForTimeout(1000);
  await page.locator('span:has-text("Node Scheduling")').click();

  await page.waitForTimeout(1000);
  await page.locator('span:has-text("Storage")').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Add Volume Loading...').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Bind-Mount').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Path on Node * The Path on the Node must be Anything: do not check the target pa >> input[type="text"]').click();

  await page.waitForTimeout(1000);
  await page.locator('text=Path on Node * The Path on the Node must be Anything: do not check the target pa >> input[type="text"]').fill('/var/lib/rancher');

  await page.waitForTimeout(1000);
  await page.locator('text=Mount Point* Sub Path in Volume Read Only Remove Add Mount >> input[type="text"]').first().click();

  await page.waitForTimeout(1000);
  await page.locator('text=Mount Point* Sub Path in Volume Read Only Remove Add Mount >> input[type="text"]').first().fill('/var/lib/rancher');

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Save")').click()
  ]);

  await page.waitForTimeout(1000);
});

test('delete-workload', async ({ page }) => {
  const cursor = await createCursor(page);

  await page.waitForTimeout(1000);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await page.waitForTimeout(1000);
  await page.locator('path').nth(1).click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('header >> text=node-driver-example').click()
  ]);

  await page.waitForTimeout(1000);
  await page.locator('h6:has-text("Workload")').click();
  await expect(page).toHaveURL('https://rec.skrzypek.dev/dashboard/c/c-m-v7xs5g5x/explorer/workload');

  await page.waitForTimeout(1000);
  await page.locator('[placeholder="Filter"]').click();

  await page.waitForTimeout(1000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('[placeholder="Filter"]').fill('yourworkload')
  ]);

  await page.waitForTimeout(1000);
  await page.locator('td:nth-child(9)').click();

  await page.waitForTimeout(1000);
  await page.locator('li:has-text("Delete")').click();

  await page.waitForTimeout(1000);
  await page.locator('div[role="dialog"] button:has-text("Delete")').click();

  await page.waitForTimeout(1000);
});
