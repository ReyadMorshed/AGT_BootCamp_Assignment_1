import { Page, expect } from "@playwright/test";
import { DashboardPage } from "../../pages/Dashboard/dashboard.page";
import { ApplyLeavePage } from "../../pages/leave/applyLeave.page";
import { Topbar } from "../../pages/leave/topbar.page";
import {
  validateToastMessage,
  waitForVisible,
} from "../../utilities/actions/elementActions";
import { navigateToLeave } from "../../utilities/utils/dashboard/dashboardUtils";
import {
  clickOnSelectDropdown,
  clickOnLeaveType,
  insertDates,
} from "../../utilities/utils/leave/applyLeave";
import { navigateToApplyLeave } from "../../utilities/utils/leave/topBar";
import { test } from "../../fixture/sessionLogin";

import { BasePage } from "../../pages/Base/base.page";
import { clickOnApplyBtn } from "../../utilities/actions/baseActions";

export async function createLeave(loggedInPage: Page) {
  const basePage = new BasePage(loggedInPage);
  const dashboardPage = new DashboardPage(loggedInPage);
  const topbar = new Topbar(loggedInPage);
  const applyLeavePage = new ApplyLeavePage(loggedInPage);

  await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
  await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });

  await navigateToLeave(loggedInPage, dashboardPage);
  await navigateToApplyLeave(loggedInPage, topbar);
  await clickOnSelectDropdown(loggedInPage, applyLeavePage);
  await clickOnLeaveType(loggedInPage, applyLeavePage);
  await waitForVisible(
    applyLeavePage.calenderStartDate,
    "Calendar Start Date",
    5000,
  );
  await insertDates(loggedInPage, applyLeavePage);
  await clickOnApplyBtn(loggedInPage, basePage);

  await validateToastMessage(loggedInPage, "Successfully Saved", 5000);
}
