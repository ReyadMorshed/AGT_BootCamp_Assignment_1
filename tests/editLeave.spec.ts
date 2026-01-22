import { expect } from "@playwright/test";
import { test } from "../src/fixture/fixtures";

test("Edit Leave", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Leave" }).click();
  await page.getByRole("link", { name: "My Leave" }).click();
  await page.getByRole("button", { name: "" }).first().click();
  await page.getByText("Add Comment").click();
  await page.getByRole("textbox", { name: "Comment here" }).click();
  await page
    .getByRole("textbox", { name: "Comment here" })
    .fill("Editing Leave");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Editing Leave")).toBeVisible();
});
