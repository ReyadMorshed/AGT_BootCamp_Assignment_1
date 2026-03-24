import { expect } from "@playwright/test";
import { test } from "../../src/fixture/sessionLogin";
import { DashboardPage } from "../../src/pages/Dashboard/dashboard.page";
import { createEmployee } from "../../src/pages/setupFunctions/createEmployeeFunc";
import { validatePartialPresenceOfText } from "../../src/utilities/actions/elementActions";
import { EmployeeListPage } from "../../src/pages/employee/employeeListPage";
import {
  deleteEmployee,
  employeeName,
} from "../../src/utilities/utils/employee/employeeUtils";
import { EmployeeTopbarPage } from "../../src/pages/employee/employeeTopbarPage";

test.describe("Create Employee Tests", () => {
  test("Create Employee", async ({ loggedInPage }) => {
    const employeeListPage = new EmployeeListPage(loggedInPage);
    const employeeTopbarPage = new EmployeeTopbarPage(loggedInPage);
    await createEmployee(loggedInPage);
    await validatePartialPresenceOfText(
      employeeListPage.employeeNameText,
      employeeName,
      "Employee Name",
      5000,
    );
    await deleteEmployee(loggedInPage, employeeListPage, employeeTopbarPage);
  });
});
