import { expect } from "@playwright/test";
import { test } from "../src/fixture/sessionLogin"; // Use custom test with sessionLogin
import { Topbar } from "../src/pages/leave/topbar.page";
import { navigateToLeave } from "../src/utilities/utils/dashboard/dashboardUtils";
import { DashboardPage } from "../src/pages/Dashboard/dashboard.page";
import { navigateToApplyLeave } from "../src/utilities/utils/leave/topBar";
import { ApplyLeavePage } from "../src/pages/leave/applyLeave.page";
import {
  clickOnSelectDropdown,
  clickOnLeaveType,
  insertDates,
  clickOnApplyBtn,
} from "../src/utilities/utils/leave/applyLeave";
import { validateToastMessage } from "../src/utilities/actions/elementActions";
import { createLeave } from "../src/utilities/setupFunctions/createLeaveFunc";

test.describe("Create,Edit and Delete Leave Tests", () => {
  test.describe.configure({ mode: "serial" });

  // 
  test("Create Leave", async ({ loggedInPage }) => {
    await createLeave(loggedInPage);
  })
});
