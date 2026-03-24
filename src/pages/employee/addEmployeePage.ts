import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class AddEmployeePage extends BasePage {
  protected page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  get emplyeeFirstNameInput(): Locator {
    return this.page.getByRole("textbox", { name: "First Name" });
  }
  get employeeLastNameInput(): Locator {
    return this.page.getByRole("textbox", { name: "Last Name" });
  }

  get employeeIdInput(): Locator {
    return this.page.locator(
      "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']",
    );
  }
}
