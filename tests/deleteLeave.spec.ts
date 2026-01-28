import { expect } from "@playwright/test";
import { test } from "../src/fixture/sessionLogin";
import { MyLeavePage } from "../src/pages/leave/myLeave.page";
import {
  clickOnCancelButton,
  clickOnSaveButton,
} from "../src/utilities/actions/baseActions";

import { createLeave } from "../src/pages/setupFunctions/createLeaveFunc";
import {
  clickOnMyLeaveLink,
  clickOnNewlyCreatedLeave,
  addCommentToLeave,
} from "../src/utilities/utils/leave/editLeave";

let myLeavePage: MyLeavePage;
test.describe("Delete Leave Tests", () => {
  test("Delete Leave", async ({ loggedInPage }) => {
    await createLeave(loggedInPage);
    myLeavePage = new MyLeavePage(loggedInPage);
    await clickOnMyLeaveLink(loggedInPage, myLeavePage);
    await clickOnCancelButton(loggedInPage, myLeavePage);

    await expect(myLeavePage.cancelText).toBeVisible();
  });
});
