import { Page, expect } from "@playwright/test";
import { DashboardPage } from "../../pages/Dashboard/dashboard.page";

import { Topbar } from "../../pages/leave/topbar.page";
import { BasePage } from "../../pages/Base/base.page";
import { ConfigureLeaveTypePage } from "../leave/configureLeaveType.page";
import { navigateToLeave } from "../../utilities/utils/dashboard/dashboardUtils";
//import { navigateToLeaveType } from "../../utilities/utils/leaveType/leaveTypeUtil";
import {
  navigateToConfigure,
  navigateToLeaveType,
} from "../../utilities/utils/leave/topBar";
import { createNewLeaveType } from "../../utilities/utils/leaveType/leaveTypeUtil";

export async function createLeaveType(loggedInPage: Page) {
  const basePage = new BasePage(loggedInPage);
  const dashboardPage = new DashboardPage(loggedInPage);
  const topbar = new Topbar(loggedInPage);
  const configureLeaveTypePage = new ConfigureLeaveTypePage(loggedInPage);

  await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
  await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });

  await navigateToLeave(loggedInPage, dashboardPage);
  await navigateToConfigure(loggedInPage, topbar);
  await navigateToLeaveType(loggedInPage, topbar);
  await expect(configureLeaveTypePage.leaveTypeText).toBeVisible({
    timeout: 5000,
  });

  await createNewLeaveType(loggedInPage, configureLeaveTypePage);
}
