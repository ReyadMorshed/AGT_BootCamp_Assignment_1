import { test } from "../../src/fixture/sessionLogin"; // Use custom test with sessionLogin
import { LeaveTypePage } from "../../src/pages/leave/leaveType.page";
import { Topbar } from "../../src/pages/leave/topbar.page";

import { createLeaveType } from "../../src/pages/setupFunctions/createLeaveTypeFunc";
import { deleteLeaveType } from "../../src/utilities/utils/leaveType/leaveTypeUtil";
test.describe("Leave Type Tests", () => {
  test("Delete Leave Type", async ({ loggedInPage }) => {
    await createLeaveType(loggedInPage);
    const leaveTypePage = new LeaveTypePage(loggedInPage);
    await deleteLeaveType(loggedInPage, leaveTypePage);
  });
});
