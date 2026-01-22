import { Page, Locator } from "@playwright/test";
import { DashboardPage } from "../../../pages/dashboard/dashboard.page";
import { performClick } from "../../actions/elementActions";

export async function navigateToLeave(
  page: Page,
  dashboard: DashboardPage,
): Promise<void> {
  dashboard = new DashboardPage(page);
  await performClick(dashboard.LeaveLink, "Leave Link", page);
}
