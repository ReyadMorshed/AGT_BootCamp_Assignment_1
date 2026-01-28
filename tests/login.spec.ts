import { expect } from "@playwright/test";
import { test } from "../src/fixture/sessionLogin"; // <-- Use the custom test
import { DashboardPage } from "../src/pages/Dashboard/dashboard.page";
import { waitForVisible } from "../src/utilities/actions/elementActions";

test.describe("OrangeHRM Login Tests", () => {
  test("login using sessionLogin fixture", async ({ loggedInPage }) => {});
});
