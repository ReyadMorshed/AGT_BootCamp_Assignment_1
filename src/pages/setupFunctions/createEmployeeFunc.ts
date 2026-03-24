import { Page, expect } from "@playwright/test";
import { DashboardPage } from "../../pages/Dashboard/dashboard.page";
import { BasePage } from "../Base/base.page";
import { navigateToEmployee } from "../../utilities/utils/dashboard/dashboardUtils";
import { waitForVisible } from "../../utilities/actions/elementActions";
import { EmployeeTopbarPage } from "../employee/employeeTopbarPage";
import { createNewEmployee } from "../../utilities/utils/employee/employeeUtils";
import { AddEmployeePage } from "../employee/addEmployeePage";

export async function createEmployee(loggedInPage: Page) {
  const basePage = new BasePage(loggedInPage);
  const dashboardPage = new DashboardPage(loggedInPage);
  const employeeTopbarPage = new EmployeeTopbarPage(loggedInPage);
  const addEmployeePage = new AddEmployeePage(loggedInPage);
  await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
  await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });
  await navigateToEmployee(loggedInPage, dashboardPage);
  await waitForVisible(
    employeeTopbarPage.employeeListLink,
    "Employee List Link",
    5000,
  );
  await createNewEmployee(loggedInPage, employeeTopbarPage, addEmployeePage);
}
