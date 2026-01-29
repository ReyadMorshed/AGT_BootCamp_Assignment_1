import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class ApplyLeavePage extends BasePage {
  protected page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  get selectDropdown(): Locator {
    return this.page.getByText("-- Select --").first();
  }
  get leaveType(): Locator {
    return this.page.getByText("CAN - Personal");
  }
  get calenderStartDate(): Locator {
    return this.page.getByRole("textbox", { name: "yyyy-mm-dd" }).first();
  }
  get calenderEndDate(): Locator {
    return this.page.getByRole("textbox", { name: "yyyy-mm-dd" }).nth(1);
  }
}
