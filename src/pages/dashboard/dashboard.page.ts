import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class DashboardPage extends BasePage {
  protected page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  get dashboardText(): Locator {
    return this.page.getByRole("heading", { name: "Dashboard" });
  }
  get timeAtWorkText(): Locator {
    return this.page.getByText("Time at Work");
  }
}
