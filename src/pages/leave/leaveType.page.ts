import { Locator, Page } from "@playwright/test";
//import { BasePage } from "../base/base.page";
import { BasePage } from "../Base/base.page";
import { leaveTypeText } from "../../utilities/utils/leaveType/leaveTypeUtil";

export class LeaveTypePage extends BasePage {
  protected page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  get leaveTypeText(): Locator {
    return this.page.getByText(leaveTypeText, { exact: true });
  }

  get secondLeaveEditButton(): Locator {
    return this.page.locator(
      "div[role='rowgroup'] div:nth-child(2) div:nth-child(1) div:nth-child(3) div:nth-child(1) button:nth-child(2) i:nth-child(1)",
    );
  }
}
