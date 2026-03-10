import { Locator, Page } from "@playwright/test";
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
}
