import { Page, Locator } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class ClaimListPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get submitClaimButton(): Locator {
        return this.page.getByRole("button", { name: "Submit Claim" });
    }
}
