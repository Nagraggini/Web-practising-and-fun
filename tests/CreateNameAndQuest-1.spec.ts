import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/web-development/Practising/questlog/questlog.html');
  await page.getByRole('textbox', { name: 'Your name:' }).click();
  await page.getByRole('textbox', { name: 'Your name:' }).click();
  await page.getByRole('textbox', { name: 'Your name:' }).fill('Andi');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Quest name:' }).click();
  await page.getByRole('textbox', { name: 'Quest name:' }).click();
  await page.getByRole('textbox', { name: 'Quest name:' }).fill('Test1');
  await page.locator('#quest-date').fill('2026-04-18');
  await page.getByText('Quest name: Choose priority').click();
  await page.locator('#priority').selectOption('Low');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('textbox', { name: 'Quest name:' }).click();
  await page.getByRole('textbox', { name: 'Quest name:' }).fill('Test2');
  await page.locator('#quest-date').fill('2026-04-25');
  await page.locator('#priority').selectOption('Normal');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('textbox', { name: 'Quest name:' }).click();
  await page.getByRole('textbox', { name: 'Quest name:' }).fill('Test3');
  await page.locator('#quest-date').fill('2026-04-24');
  await page.locator('#priority').selectOption('High');
  await page.getByRole('button', { name: 'Accept' }).click();
});