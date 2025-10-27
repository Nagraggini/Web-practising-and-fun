import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://nagraggini.github.io/Web-practising-and-fun/Main.html"
  );
  await page.getByRole("button", { name: "Webfejlesztés Áttekintő" }).click();
  await page.getByRole("button", { name: "Vissza" }).click();
  await page
    .getByRole("button", { name: "VS Code kiegészítők listája" })
    .click();
  await page.getByRole("button", { name: "Vissza" }).click();
  await page.getByRole("button", { name: "Hasznos linkek" }).click();
  await page.getByRole("button", { name: "Vissza" }).click();
  await page.getByRole("button", { name: "Webfejlesztő tanfolyam ré" }).click();
  await page.getByRole("button", { name: "Vissza" }).click();
  await page.getByRole("button", { name: "Reszponzív dizájn" }).click();
  await page.getByRole("button", { name: "Vissza" }).click();
  await page.getByRole("button", { name: "Első weboldalam" }).click();
  await page.locator("html").click();
  await page.locator("html").click();
  await page.getByRole("button", { name: "Vissza" }).click();
  await page
    .getByRole("button", { name: "Webfejlesztési portfólió-ö" })
    .click();
  await page
    .getByRole("link", { name: "Go to Calculator (Built with" })
    .click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "9" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await page.getByRole("button", { name: "Back" }).click();
});
