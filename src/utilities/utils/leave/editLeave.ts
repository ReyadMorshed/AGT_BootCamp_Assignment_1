import { Page, Locator } from "@playwright/test";
import { performClick, performFill } from "../../actions/elementActions";
import { MyLeavePage } from "../../../pages/leave/myLeave.page";

export async function clickOnMyLeaveLink(
  page: Page,
  myLeavePage: MyLeavePage,
): Promise<void> {
  // Implementation goes here
  await performClick(myLeavePage.myLeaveLink, "My Leave Link", page);
}

export async function clickOnNewlyCreatedLeave(
  page: Page,
  myLeavePage: MyLeavePage,
): Promise<void> {
  // Implementation goes here
  await performClick(
    myLeavePage.newlyCreatedLeave,
    "Newly Created Leave",
    page,
  );
}
export async function addCommentToLeave(
  page: Page,
  myLeavePage: MyLeavePage,
): Promise<void> {
  // Implementation goes here
  await performClick(myLeavePage.addCommentText, "Add Comment Text", page);
  await performFill(
    myLeavePage.commentBox,
    "Editing Leave",
    "Comment Box",
    page,
  );
}

