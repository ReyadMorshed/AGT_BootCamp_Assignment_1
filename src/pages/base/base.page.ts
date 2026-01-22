import { Locator, Page } from "@playwright/test";

export class BasePage {
  constructor(protected readonly page: Page) {
    this.page = page;
  }

  get LeaveLink(): Locator {
    return this.page.getByRole("link", { name: "Leave" });
  }
  get applyButton(): Locator {
    return this.page.getByRole("button", { name: "Apply" });
  }
}
