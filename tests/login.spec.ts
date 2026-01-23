import { expect } from "@playwright/test";
import { test } from "../src/fixture/sessionLogin"; // <-- Use the custom test
import { DashboardPage } from "../src/pages/Dashboard/dashboard.page";

test.describe("OrangeHRM Login Tests", () => {
  test("login using sessionLogin fixture", async ({ loggedInPage }) => {
    const dashboardPage = new DashboardPage(loggedInPage);

    await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
    await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });
  });
});
