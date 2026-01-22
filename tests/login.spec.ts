import { expect } from "@playwright/test";
import { test } from "../src/fixture/fixtures";
import { LoginPage } from "../src/pages/login/login.page";
import * as data from "../test-data/login-data.json";
import { DashboardPage } from "../src/pages/dashboard/dashboard.page";
import { environments, EnvKey } from "../config/env.config";
import { loginToOrangeHRM } from "../src/utilities/utils/login/loginUtils";
import { waitForVisible } from "../src/utilities/actions/elementActions";

let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let env: EnvKey = "production";
const { baseURL, credentials } = environments[env];
test.describe("OrangeHRM Login Tests", () => {
  test("login using POM", async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginToOrangeHRM(
      page,
      baseURL,
      loginPage,
      credentials.admin.username,
      credentials.admin.password,
    );
    await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
    await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });
  });
});
