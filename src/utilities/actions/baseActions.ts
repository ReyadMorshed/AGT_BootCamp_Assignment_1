import { Page } from "@playwright/test";
import { MyLeavePage } from "../../pages/leave/myLeave.page";
import { performClick } from "./elementActions";
import { ApplyLeavePage } from "../../pages/leave/applyLeave.page";

export async function clickOnSaveButton(
  page: Page,
  myLeavePage: MyLeavePage,
): Promise<void> {
  // Implementation goes here
  await performClick(myLeavePage.saveButton, "Save Button", page);
}

export async function clickOnApplyBtn(
  page: Page,
  applyLeavePage: ApplyLeavePage,
): Promise<void> {
  await performClick(applyLeavePage.applyButton, "Apply Button", page);
}
