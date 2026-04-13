import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Questlog' }).click();
  const page1 = await page1Promise;
});