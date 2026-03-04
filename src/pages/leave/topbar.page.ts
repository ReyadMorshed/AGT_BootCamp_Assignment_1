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

  get configureLink(): Locator {
    return this.page.getByText("Configure", { exact: true });
  }
  get LeaveTypeMenu(): Locator {
    return this.page.getByRole("menuitem", { name: /Leave Types/i });
  }
}
