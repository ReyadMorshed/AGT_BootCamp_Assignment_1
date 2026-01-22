import { expect } from "@playwright/test";
import { test } from "../src/fixture/sessionLogin";
import { createLeave } from "../src/utilities/setupFunctions/createLeaveFunc";

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
test.describe("Edit and Delete Leave Tests", () => {
  test("Create Leave", async ({ loggedInPage }) => {
    await createLeave(loggedInPage);
  });
});
