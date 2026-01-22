import { test as base, Page } from "@playwright/test";
import { loginToOrangeHRM } from "../utilities/utils/login/loginUtils";
import { environments, EnvKey } from "../../config/env.config";
import { LoginPage } from "../pages/login/login.page";

type SessionFixtures = {
  loggedInPage: Page;
};

/**
 * Custom test fixture that provides a logged-in Playwright Page.
 */
export const test = base.extend<SessionFixtures>({
  loggedInPage: async ({ page }, use) => {
    await loginToOrangeHRM(
      page,
      environments["production"].baseURL,
      new LoginPage(page),
      environments["production"].credentials.admin.username,
      environments["production"].credentials.admin.password,
    );
    await use(page);
    await page.close();
  },
});
