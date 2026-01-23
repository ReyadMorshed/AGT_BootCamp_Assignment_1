import { expect } from "@playwright/test";
import { test } from "../src/fixture/sessionLogin";
import { createLeave } from "../src/utilities/setupFunctions/createLeaveFunc";
import {
  addCommentToLeave,
  clickOnMyLeaveLink,
  clickOnNewlyCreatedLeave,
} from "../src/utilities/utils/leave/editLeave";
import { MyLeavePage } from "../src/pages/leave/myLeave.page";
import { clickOnSaveButton } from "../src/utilities/actions/baseActions";

// test("Edit Leave", async ({ page }) => {
//   await createLeave(loggedInPage);
//   await page.getByRole("link", { name: "My Leave" }).click();
//   await page.getByRole("button", { name: "" }).first().click();
//   await page.getByText("Add Comment").click();
//   await page.getByRole("textbox", { name: "Comment here" }).click();
//   await page
//     .getByRole("textbox", { name: "Comment here" })
//     .fill("Editing Leave");
//   await page.getByRole("button", { name: "Save" }).click();
//   await expect(page.getByText("Editing Leave")).toBeVisible();
// });

let myLeavePage: MyLeavePage;
test.describe("Edit Leave Tests", () => {
  test("Create Leave", async ({ loggedInPage }) => {
    await createLeave(loggedInPage);
    myLeavePage = new MyLeavePage(loggedInPage);
    await clickOnMyLeaveLink(loggedInPage, myLeavePage);
    await clickOnNewlyCreatedLeave(loggedInPage, myLeavePage);
    await addCommentToLeave(loggedInPage, myLeavePage);
    await clickOnSaveButton(loggedInPage, myLeavePage);
    await expect(loggedInPage.getByText("Editing Leave")).toBeVisible();
  });
});
