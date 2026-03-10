import { Page, Locator } from "@playwright/test";
import { Topbar } from "../../../pages/leave/topbar.page";
import { performClick, performFill } from "../../actions/elementActions";
import { ConfigureLeaveTypePage } from "../../../pages/leave/configureLeaveType.page";
import { clickOnSaveButton } from "../../actions/baseActions";
import { LeaveTypePage } from "../../../pages/leave/leaveType.page";

export const leaveTypeText = `Test Leave Type_${Date.now()}`;

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
    leaveTypeText,
    "Leave Type Name Input",
    page,
  );
  await clickOnSaveButton(page, configureLeaveType);
  // Wait for 5 seconds (5000 milliseconds)
  await page.waitForTimeout(5000);
}

export async function deleteLeaveType(
  page: Page,
  leaveTypePage: LeaveTypePage,
) {
  leaveTypePage = new LeaveTypePage(page);
  await performClick(
    leaveTypePage.secondDeleteButton,
    "Second Delete Button",
    page,
  );
  await performClick(leaveTypePage.confirmDeleteButton, "Confirm Delete Button", page);

  // Wait for 5 seconds (5000 milliseconds)
  await page.waitForTimeout(5000);
}
