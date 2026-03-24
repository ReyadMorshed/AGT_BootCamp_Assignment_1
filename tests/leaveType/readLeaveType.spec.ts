import { test } from "../../src/fixture/sessionLogin"; // Use custom test with sessionLogin
import { LeaveTypePage } from "../../src/pages/leave/leaveType.page";
import { Topbar } from "../../src/pages/leave/topbar.page";
import {
  leaveTypeText,
} from "../../src/utilities/utils/leaveType/leaveTypeUtil";

import { createLeaveType } from "../../src/pages/setupFunctions/createLeaveTypeFunc";
import { validatePartialPresenceOfText } from "../../src/utilities/actions/elementActions";
import { deleteLeaveType } from "../../src/utilities/utils/leaveType/leaveTypeUtil";
test.describe("Leave Type Tests", () => {
  test("Read Leave Type", async ({ loggedInPage }) => {
    await createLeaveType(loggedInPage);
    const leaveTypePage = new LeaveTypePage(loggedInPage);
    await validatePartialPresenceOfText(
      leaveTypePage.leaveTypeText,
      leaveTypeText,
      "Leave Type Text",
      5000,
    );

    await deleteLeaveType(loggedInPage, leaveTypePage);
  });
});
