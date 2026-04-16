import { Page, Locator } from "@playwright/test";
import { BasePage } from "../Base/base.page";
import { eventName } from "../../utilities/utils/claimEvents/eventUtils";

export class ClaimListPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get submitClaimButton(): Locator {
        return this.page.getByRole("button", { name: "Submit Claim" });
    }
    get eventNameText(): Locator {
        return this.page.getByText(eventName, { exact: false });
    }
}
