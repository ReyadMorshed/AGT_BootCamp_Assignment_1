import { Locator, Page } from "@playwright/test";
import { MyLeavePage } from "../../pages/leave/myLeave.page";
import { performClick } from "./elementActions";
import { ApplyLeavePage } from "../../pages/leave/applyLeave.page";
//import { BasePage } from "../../pages/base/base.page";
import { BasePage } from "../../pages/Base/base.page";

export async function clickOnSaveButton(
  page: Page,
  basePage: BasePage,
): Promise<void> {
  // Implementation goes here
  await performClick(basePage.saveButton, "Save Button", page);
}

export async function clickOnApplyBtn(
  page: Page,
  basePage: BasePage,
): Promise<void> {
  await performClick(basePage.applyButton, "Apply Button", page);
}
export async function clickOnCancelButton(
  page: Page,
  basePage: BasePage,
): Promise<void> {
  // Implementation goes here
  await performClick(basePage.cancelButton.first(), "Cancel Button", page);
}

export async function clickOnAddButton(
  page: Page,
  basePage: BasePage,
): Promise<void> {
  // Implementation goes here
  await performClick(basePage.addButton, "Add Button", page);
}

export async function scrollToElement(page: Page, element: Locator): Promise<void> {
  await element.scrollIntoViewIfNeeded();
}