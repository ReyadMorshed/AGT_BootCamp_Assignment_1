import { Page, Locator } from "@playwright/test";
import { performClick } from "../../actions/elementActions";
import { Topbar } from "../../../pages/leave/topbar.page";

export async function navigateToApplyLeave(page: Page, topbar: Topbar): Promise<void> {
  topbar = new Topbar(page);
  await performClick(topbar.applyLeaveLink, "Apply Leave Link", page);
}