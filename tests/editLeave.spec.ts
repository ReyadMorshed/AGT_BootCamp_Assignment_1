import { expect } from "@playwright/test";
import { test } from "../src/fixture/sessionLogin";
import { createLeave } from "../src/pages/setupFunctions/createLeaveFunc";
import {
  addCommentToLeave,
  clickOnMyLeaveLink,
  clickOnNewlyCreatedLeave,
} from "../src/utilities/utils/leave/editLeave";
import { MyLeavePage } from "../src/pages/leave/myLeave.page";
import { clickOnSaveButton } from "../src/utilities/actions/baseActions";

let myLeavePage: MyLeavePage;
test.describe("Edit Leave Tests", () => {
  test("Edit Leave", async ({ loggedInPage }) => {
    await createLeave(loggedInPage);
    const basePage = new MyLeavePage(loggedInPage);
    const myLeavePage = new MyLeavePage(loggedInPage);
    await clickOnMyLeaveLink(loggedInPage, myLeavePage);
    await clickOnNewlyCreatedLeave(loggedInPage, myLeavePage);
    await addCommentToLeave(loggedInPage, myLeavePage);
    await clickOnSaveButton(loggedInPage, basePage);

    await expect(loggedInPage.getByText("Editing Leave")).toBeVisible();
  });
});
