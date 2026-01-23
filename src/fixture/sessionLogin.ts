import { test as base, Page } from "@playwright/test";
import { loginToOrangeHRM } from "../utilities/utils/login/loginUtils";
import { environments, EnvKey } from "../../config/env.config";
import { LoginPage } from "../pages/login/login.page";

type SessionFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<SessionFixtures>({
  loggedInPage: async ({ page }, use) => {
    // Get environment from process.env.ENV, default to 'production'
    const env: EnvKey = (process.env.ENV as EnvKey) || "production";
    const config = environments[env];

    await loginToOrangeHRM(
      page,
      config.baseURL,
      new LoginPage(page),
      config.credentials.admin.username,
      config.credentials.admin.password,
    );
    await use(page);
    await page.close();
  },
});
