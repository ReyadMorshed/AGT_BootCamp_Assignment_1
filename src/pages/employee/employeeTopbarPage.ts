import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class EmployeeTopbarPage extends BasePage {
    protected page: Page;
    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    get employeeListLink(): Locator {
        return this.page.getByRole("link", { name: "Employee List" });
    }
    get addEmployeeLink(): Locator {
        return this.page.getByRole("link", { name: "Add Employee" });
    }
}