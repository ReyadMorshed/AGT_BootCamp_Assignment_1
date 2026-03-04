import { Page, Locator } from "@playwright/test";
import { Topbar } from "../../../pages/leave/topbar.page";
import { performClick, performFill } from "../../actions/elementActions";
import { ConfigureLeaveTypePage } from "../../../pages/leave/configureLeaveType.page";
import { clickOnSaveButton } from "../../actions/baseActions";

export async function createNewLeaveType(
  page: Page,
  configureLeaveType: ConfigureLeaveTypePage,
): Promise<void> {
  // Implementation goes here
  configureLeaveType = new ConfigureLeaveTypePage(page);
  await performClick(configureLeaveType.addButton, "Add Button", page);
  await performClick(
    configureLeaveType.leaveTypeNameInput,
    "Leave Type Name Input",
    page,
  );
  await performFill(
    configureLeaveType.leaveTypeNameInput,
    "Test Leave Type",
    "Leave Type Name Input",
    page,
  );
  await clickOnSaveButton(page, configureLeaveType);
  // Wait for 5 seconds (5000 milliseconds)
  await page.waitForTimeout(5000);
}
