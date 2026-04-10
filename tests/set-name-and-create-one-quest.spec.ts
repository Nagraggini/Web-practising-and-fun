import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/index.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Questlog' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('textbox', { name: 'Your name:' }).click();
  await page1.getByRole('textbox', { name: 'Your name:' }).fill('Andi');
  await page1.getByText('Your name: Submit').click();
  await page1.getByRole('textbox', { name: 'Quest name:' }).click();
  await page1.getByRole('textbox', { name: 'Quest name:' }).fill('Test');
  await page1.getByRole('textbox', { name: 'Quest name:' }).press('Tab');
  await page1.locator('#quest-date').fill('2026-04-18');
  await page1.locator('#priority').selectOption('High');
  await page1.getByRole('button', { name: 'Accept' }).click();
});