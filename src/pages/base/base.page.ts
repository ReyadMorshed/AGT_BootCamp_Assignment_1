import { Locator, Page } from "@playwright/test";

export class BasePage {
    constructor(protected readonly page: Page) {
        this.page = page;
    }

    get LeaveLink(): Locator {
        return this.page.getByRole("link", { name: "Leave" });
    }
    get employeeLink(): Locator {
        return this.page.getByRole("link", { name: "PIM" });
    }
    get ClaimLink(): Locator {
        return this.page.getByRole("link", { name: "Claim" });
    }
    get applyButton(): Locator {
        return this.page.getByRole("button", { name: "Apply" });
    }
    get saveButton(): Locator {
        return this.page.getByRole("button", { name: "Save" });
    }
    get cancelButton(): Locator {
        return this.page.getByRole("button", { name: "Cancel" });
    }

    get addButton(): Locator {
        return this.page.getByRole("button", { name: "Add" });
    }
    get secondDeleteButton(): Locator {
        return this.page.locator("i.oxd-icon.bi-trash").nth(1);
    }
    get deleteButton(): Locator {
        return this.page.locator("i.oxd-icon.bi-trash").nth(0);
    }
    get confirmDeleteButton(): Locator {
        return this.page.getByRole("button", { name: "Yes, Delete" });
    }

    get createButton(): Locator {
        return this.page.getByRole("button", { name: "Create" });
    }

    get submitButton(): Locator {
        return this.page.getByRole("button", { name: "Submit" });
    }
}
