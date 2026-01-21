import { expect } from "@playwright/test";
import { test } from "../fixture/fixtures";
import { LoginPage } from "../pages/Login/login.page";
import * as data from "../test-data/login-data.json";
import { DashboardPage } from "../pages/Dashboard/dashboard.page";

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

test.describe("OrangeHRM Login Tests", () => {
  test("login using POM", async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.login(data.Username, data.Password);
    await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
    await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });
  });
});
