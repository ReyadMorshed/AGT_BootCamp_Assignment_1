import { Page, Locator } from "@playwright/test";
import { performClick, performFill } from "../../actions/elementActions";
import { ApplyLeavePage } from "../../../pages/leave/applyLeave.page";

import {
  getEndDateFromStart,
  getTomorrowStartDate,
} from "../../../pages/setupFunctions/dateGenerator";

export async function clickOnSelectDropdown(
  page: Page,
  applyLeavePage: ApplyLeavePage,
): Promise<void> {
  await performClick(applyLeavePage.selectDropdown, "Select Dropdown", page);
}
export async function clickOnLeaveType(
  page: Page,
  applyLeavePage: ApplyLeavePage,
): Promise<void> {
  await performClick(applyLeavePage.leaveType, "Leave Type", page);
}

export async function insertDates(
  page: Page,
  applyLeavePage: ApplyLeavePage,
): Promise<void> {
  // Implementation goes here
  await performClick(
    applyLeavePage.calenderStartDate,
    "Calendar Start Date",
    page,
  );
  await performFill(
    applyLeavePage.calenderStartDate,
    "",
    "Calendar Start Date",
    page,
  );
  const startDate = getTomorrowStartDate();
  await performFill(
    applyLeavePage.calenderStartDate,
    await startDate,
    "Calendar Start Date",
    page,
  );
  await performClick(applyLeavePage.calenderEndDate, "Calendar End Date", page);
  await performFill(
    applyLeavePage.calenderEndDate,
    "",
    "Calendar End Date",
    page,
  );
  const endDate = await getEndDateFromStart(await startDate);
  await performFill(
    applyLeavePage.calenderEndDate,
    await endDate,
    "Calendar End Date",
    page,
  );
}
