import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class Topbar extends BasePage {
  protected page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  get applyLeaveLink(): Locator {
    return this.page.getByRole("link", { name: "Apply" });
  }
  async navigateToApplyLeave(): Promise<void> {
    await this.applyLeaveLink.click();
  }
}
