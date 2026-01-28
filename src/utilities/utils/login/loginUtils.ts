import { Page } from "@playwright/test";
import {
  performFill,
  performClick,
  performGoto,
  waitForVisible,
} from "../../actions/elementActions";
import { LoginPage } from "../../../pages/login/login.page";
import { DashboardPage } from "../../../pages/Dashboard/dashboard.page";

/**
 * Logs into the OrangeHRM application using provided credentials and URL.
 * @param page - The Playwright Page instance.
 * @param url - The login page URL.
 * @param username - The username to use for login.
 * @param password - The password to use for login.
 */
let dashboardPage: DashboardPage;
export async function loginToOrangeHRM(
  page: Page,
  url: string,
  loginPage: LoginPage,
  username: string,
  password: string,
): Promise<void> {
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);
  await performGoto(page, url, "OrangeHRM Login Page");
  await page.waitForTimeout(2000); // Wait for 30 seconds to ensure page is fully loaded
  await performFill(loginPage.usernameField, username, "Username field", page);
  await performFill(loginPage.passwordField, password, "Password field", page);
  await performClick(loginPage.loginButton, "Login button", page);
  await waitForVisible(dashboardPage.dashboardText, "Dashboard Text", 20000);
  await waitForVisible(
    dashboardPage.timeAtWorkText,
    "Time at Work Text",
    20000,
  );
}
