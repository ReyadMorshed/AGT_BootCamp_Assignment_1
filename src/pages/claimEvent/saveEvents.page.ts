import { Page, Locator } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class SaveEventsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  get eventNameInput(): Locator {
    return this.page
      .locator("//input[@class='oxd-input oxd-input--active']")
      .nth(1);
  }

  get eventDescription(): Locator {
    return this.page.locator("textarea:visible");
  }
}
