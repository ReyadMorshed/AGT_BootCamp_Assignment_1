import { test } from "../../src/fixture/sessionLogin"; // Use custom test with sessionLogin
import { Topbar } from "../../src/pages/leave/topbar.page";

import { createLeaveType } from "../../src/pages/setupFunctions/createLeaveTypeFunc";
test.describe("Create Leave Type Tests", () => {
  test("Create Leave Type", async ({ loggedInPage }) => {
    await createLeaveType(loggedInPage);
  });
});
