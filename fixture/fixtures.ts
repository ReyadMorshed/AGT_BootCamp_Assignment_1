import { test as base, chromium } from "@playwright/test";

export const test = base.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ page }, use) => {
      // This code runs before every test.
      await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      );
      await use();
      // This code runs after every test.
      await page.close();
      console.log("Last URL:", page.url());
    },
    { auto: true },
  ], // automatically starts for every test.
});
