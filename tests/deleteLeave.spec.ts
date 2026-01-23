import { expect } from "@playwright/test";
import { test } from "../src/fixture/sessionLogin";
import { MyLeavePage } from "../src/pages/leave/myLeave.page";
import {
  clickOnCancelButton,
  clickOnSaveButton,
} from "../src/utilities/actions/baseActions";
import { createLeave } from "../src/utilities/setupFunctions/createLeaveFunc";
import {
  clickOnMyLeaveLink,
  clickOnNewlyCreatedLeave,
  addCommentToLeave,
} from "../src/utilities/utils/leave/editLeave";

// test("Delete Leave", async ({ page }) => {
//   await page.goto(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
//   );
//   await page.getByRole("textbox", { name: "Username" }).click();
//   await page.getByRole("textbox", { name: "Username" }).fill("Admin");
//   await page.getByRole("textbox", { name: "Password" }).click();
//   await page.getByRole("textbox", { name: "Password" }).fill("admin123");
//   await page.getByRole("button", { name: "Login" }).click();
//   await page.getByRole("link", { name: "Leave" }).click();
//   await page.getByRole("link", { name: "My Leave" }).click();
//   await page.getByRole("button", { name: "Cancel" }).first().click();
//   await expect(page.getByText(/Cancelled/).first()).toBeVisible();
// });

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
