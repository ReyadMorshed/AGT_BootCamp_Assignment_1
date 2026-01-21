import { test, expect } from "@playwright/test";
import { DashboardPage } from "../pages/Dashboard/dashboard.page";
import { LoginPage } from "../pages/Login/login.page";
import * as data from "../test-data/login-data.json";
import { Topbar } from "../pages/Leave/topbar";

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
test.describe("Create,Edit and Delete Leave Tests", () => {
  test.describe.configure({ mode: "serial" });

  test("create leave", async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    topbar = new Topbar(page);
    await loginPage.login(data.Username, data.Password);
    await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
    await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });
    await dashboardPage.navigateToLeave();
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

  test("Edit Leave", async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    await page.getByRole("textbox", { name: "Username" }).click();
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByRole("link", { name: "Leave" }).click();
    await page.getByRole("link", { name: "My Leave" }).click();
    await page.getByRole("button", { name: "" }).first().click();
    await page.getByText("Add Comment").click();
    await page.getByRole("textbox", { name: "Comment here" }).click();
    await page
      .getByRole("textbox", { name: "Comment here" })
      .fill("Editing Leave");
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.getByText("Editing Leave")).toBeVisible();
  });

  test("Delete Leave", async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    await page.getByRole("textbox", { name: "Username" }).click();
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByRole("link", { name: "Leave" }).click();
    await page.getByRole("link", { name: "My Leave" }).click();
    await page.getByRole("button", { name: "Cancel" }).first().click();
    await expect(page.getByText(/Cancelled/).first()).toBeVisible();
  });
});
