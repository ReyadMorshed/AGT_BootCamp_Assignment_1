import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class ConfigureLeaveTypePage extends BasePage {
  protected page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  get leaveTypeText(): Locator {
    return this.page.getByRole("heading", { name: "Leave Types" });
  }
  get leaveTypeNameInput(): Locator {
    return this.page.locator("form").getByRole("textbox");
  }
}
