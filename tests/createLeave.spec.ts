import { test, expect, Page } from "@playwright/test";
import { DashboardPage } from "../src/pages/dashboard/dashboard.page";
import { LoginPage } from "../src/pages/login/login.page";
import * as data from "../test-data/login-data.json";
import { Topbar } from "../src/pages/leave/topbar";
import { loginToOrangeHRM } from "../src/utilities/utils/login/loginUtils";
import { EnvKey, environments } from "../config/env.config";
import { navigateToLeave } from "../src/utilities/utils/dashboard/dashboardUtils";

function getRandomFutureStartDate(maxDaysAhead: number = 30): string {
  const today = new Date();

  // Pick a random number between 1 and maxDaysAhead
  const randomOffset = Math.floor(Math.random() * maxDaysAhead) + 1;

  const start = new Date(today);
  start.setDate(today.getDate() + randomOffset);

  return start.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

function getEndDateFromStart(startDate: string): string {
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + 1);

  return end.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let topbar: Topbar;
let env: EnvKey = "production";
const { baseURL, credentials } = environments[env];
test.describe("Create,Edit and Delete Leave Tests", () => {
  test.describe.configure({ mode: "serial" });

  test("create leave", async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    topbar = new Topbar(page);
    await loginToOrangeHRM(
      page,
      baseURL,
      loginPage,
      credentials.admin.username,
      credentials.admin.password,
    );
    await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
    await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });
    await navigateToLeave(page, dashboardPage);
    await topbar.navigateToApplyLeave();
    //await page.getByRole("link", { name: "Leave" }).click();
    //await page.getByRole("link", { name: "Apply" }).click();
    //await page.getByText("-- Select --").first().click();
    await page.getByText("CAN - Personal").click();
    await page.getByRole("textbox", { name: "yyyy-dd-mm" }).first().click();
    await page.getByRole("textbox", { name: "yyyy-dd-mm" }).first().fill("");
    const nextDay: string = getRandomFutureStartDate(30);
    await page
      .getByRole("textbox", { name: "yyyy-dd-mm" })
      .first()
      .fill(nextDay);
    await page.getByRole("textbox", { name: "yyyy-dd-mm" }).nth(1).click();
    await page.getByRole("textbox", { name: "yyyy-dd-mm" }).nth(1).fill("");
    const nextDayPlusOne: string = getEndDateFromStart(nextDay);
    await page
      .getByRole("textbox", { name: "yyyy-dd-mm" })
      .nth(1)
      .fill(nextDayPlusOne);
    await page.getByRole("button", { name: "Apply" }).click();
    await expect(
      page.getByText("Successfully Saved", { exact: true }),
    ).toBeVisible({ timeout: 5000 });
  });

  

  
});



