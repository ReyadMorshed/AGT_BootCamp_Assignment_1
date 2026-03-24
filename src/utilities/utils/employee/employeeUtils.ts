import { Page, Locator, expect } from "@playwright/test";
import { performClick, performFill } from "../../actions/elementActions";
import { EmployeeTopbarPage } from "../../../pages/employee/employeeTopbarPage";
import { AddEmployeePage } from "../../../pages/employee/addEmployeePage";
import { clickOnSaveButton, scrollToElement } from "../../actions/baseActions";
import { EmployeeListPage } from "../../../pages/employee/employeeListPage";

export const employeeName = `Employee_${Date.now()}`;
export async function createNewEmployee(
  page: Page,
  employeeTopbarPage: EmployeeTopbarPage,
  addEmployeePage: AddEmployeePage,
): Promise<void> {
  // Implementation goes here
  await performClick(
    employeeTopbarPage.addEmployeeLink,
    "Add Employee Link",
    page,
  );
  // Fill in employee details and save
  await performClick(
    addEmployeePage.emplyeeFirstNameInput,
    "First Name Input",
    page,
  );
  await performFill(
    addEmployeePage.emplyeeFirstNameInput,
    employeeName,
    "First Name Input",
    page,
  );
  await performClick(
    addEmployeePage.employeeLastNameInput,
    "Last Name Input",
    page,
  );
  await performFill(
    addEmployeePage.employeeLastNameInput,
    "Test",
    "Last Name Input",
    page,
  );
  const employeeId = Math.floor(Math.random() * 9) + 1; // 1..9
  await performFill(
    addEmployeePage.employeeIdInput,
    employeeId.toString(),
    "Employee ID Input",
    page,
  );

  await clickOnSaveButton(page, addEmployeePage);
  // Wait for 5 seconds (5000 milliseconds)
  await page.waitForTimeout(5000);
}

export async function deleteEmployee(
  page: Page,
  employeeListPage: EmployeeListPage,
  employeeTopbarPage: EmployeeTopbarPage,
) {
  await performClick(
    employeeTopbarPage.employeeListLink,
    "Go to Employee List Link",
    page,
  );
  await scrollToElement(page, employeeListPage.deleteButton);
  await performClick(
    employeeListPage.deleteButton,
    "Second Delete Button",
    page,
  );
  await performClick(
    employeeListPage.confirmDeleteButton,
    "Confirm Delete Button",
    page,
  );
  // Wait for 5 seconds (5000 milliseconds)
  await page.waitForTimeout(5000);
}
