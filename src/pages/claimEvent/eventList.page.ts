import { Page, Locator } from "@playwright/test";
import { BasePage } from "../Base/base.page";
import { eventName } from "../../utilities/utils/claimEvents/eventUtils";

export class EventListPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get eventNameText(): Locator {
    return this.page.getByText(eventName, { exact: false });
  }

  get eventEditButton(): Locator {
    return this.page.locator("i.oxd-icon.bi-pencil-fill").nth(0);
  }
}
