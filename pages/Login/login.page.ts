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
  async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
