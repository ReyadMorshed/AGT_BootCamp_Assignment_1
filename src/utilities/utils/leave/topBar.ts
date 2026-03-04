import { Page, Locator } from "@playwright/test";
import { performClick } from "../../actions/elementActions";
import { Topbar } from "../../../pages/leave/topbar.page";

export async function navigateToApplyLeave(
  page: Page,
  topbar: Topbar,
): Promise<void> {
  topbar = new Topbar(page);
  await performClick(topbar.applyLeaveLink, "Apply Leave Link", page);
}

export async function navigateToConfigure(
  page: Page,
  topbar: Topbar,
): Promise<void> {
  topbar = new Topbar(page);
  await performClick(topbar.configureLink, "Configure Link", page);
}

export async function navigateToLeaveType(
  page: Page,
  topbar: Topbar,
): Promise<void> {
  topbar = new Topbar(page);
  await performClick(topbar.LeaveTypeMenu, "Leave Type Menu", page);
}
