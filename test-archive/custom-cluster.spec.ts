import { test, expect } from '@playwright/test';
import { createCursor } from 'ghost-cursor-playwright';

test.use({
  viewport: {
    width: 2560,
    height: 1440
  },
  storageState: './storageState.json'
});

test('custom', async ({ page }) => {
  const cursor = await createCursor(page);
  await page.waitForTimeout(500);
  await page.goto("https://" + process.env["RANCHER_URL"]);

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Create').hover(),
    await page.waitForTimeout(500),
    page.locator('text=Create').click()
  ]);

  await page.waitForTimeout(500);
  await page.locator('text=RKE1 RKE2/K3s >> label span').click();

  await page.waitForTimeout(500);
  await page.locator('label span').click();

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=Custom').hover(),
    await page.waitForTimeout(500),
    page.locator('text=Custom').click()
  ]);

  await page.waitForTimeout(500);
  await page.locator('[placeholder="A unique name for the cluster"]').click();

  await page.waitForTimeout(500);
  await page.locator('[placeholder="A unique name for the cluster"]').fill('clusteronexistingnodes');

  await page.waitForTimeout(500);
  await page.locator('[placeholder="Any text you want that better describes this cluster"]').click();

  await page.waitForTimeout(500);
  await page.locator('[placeholder="Any text you want that better describes this cluster"]').fill('you can leverage terraform or ansible or other automation');

  await page.waitForTimeout(500);
  await page.locator('text=Kubernetes Version v1.22.9+rke2r1 Loading...').click();

  await page.waitForTimeout(500);
  await page.locator('text=v1.21.12+rke2r1').click();

  await page.waitForTimeout(500);
  await page.locator('text=Container Network calico Loading...').click();

  await page.waitForTimeout(500);
  await page.locator('#vs3__option-2 >> text=calico').click();

  await page.waitForTimeout(500);
  await page.locator('a[role="tab"]:has-text("Member Roles")').click();

  await page.waitForTimeout(500);
  await page.locator('a[role="tab"]:has-text("Add-On Config")').click();

  await page.waitForTimeout(500);
  await page.locator('a[role="tab"]:has-text("Agent Environment Vars")').click();

  await page.waitForTimeout(500);
  await page.locator('a[role="tab"]:has-text("etcd")').click();

  await page.waitForTimeout(500);
  await page.locator('a[role="tab"]:has-text("Labels & Annotations")').click();

  await page.waitForTimeout(500);
  await page.locator('a[role="tab"]:has-text("Networking")').click();

  await page.waitForTimeout(500);
  await page.locator('a[role="tab"]:has-text("Registries")').click();

  await page.waitForTimeout(500);
  await page.locator('a[role="tab"]:has-text("Upgrade Strategy")').click();

  await page.waitForTimeout(500);
  await page.locator('a[role="tab"]:has-text("Advanced")').click();

  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button:has-text("Create")').hover(),
    page.locator('button:has-text("Create")').click()
  ]);

  await page.waitForTimeout(500);
  await page.locator('code >> text=/curl -fL https/g').click();

  await page.waitForTimeout(500);
  await page.locator('text=Clusters').click();

});
