import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";
import { employeeName } from "../../utilities/utils/employee/employeeUtils";

export class EmployeeListPage extends BasePage {
  protected page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  get employeeNameText(): Locator {
    return this.page.getByText(employeeName, { exact: false });
  }
}
