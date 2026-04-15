// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("http://127.0.0.1:8080/index.html");
});
