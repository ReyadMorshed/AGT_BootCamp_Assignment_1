import { Page, Locator } from "@playwright/test";
import { performClick } from "../../actions/elementActions";
import { DashboardPage } from "../../../pages/Dashboard/dashboard.page";

export async function navigateToLeave(
  page: Page,
  dashboard: DashboardPage,
): Promise<void> {
  dashboard = new DashboardPage(page);
  await performClick(dashboard.LeaveLink, "Leave Link", page);
}
