import { test } from "../../src/fixture/sessionLogin"; // Use custom test with sessionLogin
import { ConfigureLeaveTypePage } from "../../src/pages/leave/configureLeaveType.page";
import { LeaveTypePage } from "../../src/pages/leave/leaveType.page";
import { Topbar } from "../../src/pages/leave/topbar.page";

import { createLeaveType } from "../../src/pages/setupFunctions/createLeaveTypeFunc";
import {
  deleteLeaveType,
  editLeaveType,
} from "../../src/utilities/utils/leaveType/leaveTypeUtil";
test.describe("Leave Type Tests", () => {
  test("Edit Leave Type", async ({ loggedInPage }) => {
    await createLeaveType(loggedInPage);
    const leaveTypePage = new LeaveTypePage(loggedInPage);
    const configureLeaveTypePage = new ConfigureLeaveTypePage(loggedInPage);
    await editLeaveType(loggedInPage, leaveTypePage, configureLeaveTypePage);
    await deleteLeaveType(loggedInPage, leaveTypePage);
  });
});
