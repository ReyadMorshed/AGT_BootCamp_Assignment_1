import { Page } from "@playwright/test";
import {
  performFill,
  performClick,
  performGoto,
} from "../../actions/elementActions";
import { LoginPage } from "../../../pages/login/login.page";

/**
 * Logs into the OrangeHRM application using provided credentials and URL.
 * @param page - The Playwright Page instance.
 * @param url - The login page URL.
 * @param username - The username to use for login.
 * @param password - The password to use for login.
 */
export async function loginToOrangeHRM(
  page: Page,
  url: string,
  loginPage: LoginPage,
  username: string,
  password: string,
): Promise<void> {
  loginPage = new LoginPage(page);
  await performGoto(page, url, "OrangeHRM Login Page");
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure page is fully loaded
  await performFill(loginPage.usernameField, username, "Username field", page);
  await performFill(loginPage.passwordField, password, "Password field", page);
  await performClick(loginPage.loginButton, "Login button", page);
}
