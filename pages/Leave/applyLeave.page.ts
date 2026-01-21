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
    return this.page.getByRole("textbox", { name: "yyyy-dd-mm" }).first();
  }
  get calenderEndDate(): Locator {
    return this.page.getByRole("textbox", { name: "yyyy-dd-mm" }).nth(1);
  }
  async clickOnSelectDropdown(): Promise<void> {
    await this.selectDropdown.click();
  }
  async clickOnLeaveType(): Promise<void> {
    await this.leaveType.click();
  }
  async insertStartDate(): Promise<void> {
    await this.calenderStartDate.click();
    await this.calenderStartDate.fill("");
    //logic is not completed here
  }
  async insertEndDate(): Promise<void> {
    await this.calenderEndDate.click();
    await this.calenderEndDate.fill("");
    //logic is not completed here
  }
}
