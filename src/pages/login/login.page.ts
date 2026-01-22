import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class LoginPage extends BasePage {
  protected page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  get usernameField(): Locator {
    return this.page.getByRole("textbox", { name: "Username" });
  }
  get passwordField(): Locator {
    return this.page.getByRole("textbox", { name: "Password" });
  }
  get loginButton(): Locator {
    return this.page.getByRole("button", { name: "Login" });
  }
}
