import { Page, Locator } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class SubmitClaimPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get eventMenu(): Locator {
        return this.page
            .locator(".oxd-input-group")
            .filter({
                has: this.page.locator(".oxd-label", { hasText: "Event" }),
            })
            .locator(".oxd-select-text");
    }
    get eventOption(): Locator {
        return this.page.locator("//div[@role='listbox']//div[2]");
    }

    get currencyMenu(): Locator {
        return this.page
            .locator(".oxd-input-group")
            .filter({
                has: this.page.locator(".oxd-label", { hasText: "Currency" }),
            })
            .locator(".oxd-select-text");
    }
    get currencyOption(): Locator {
        return this.page.locator("//div[@role='listbox']//div[2]");
    }

    get referenceIdTitle(): Locator {
        return this.page.getByText("Reference Id", { exact: true });
    }
}
//page.getByText('Event_1775157687720', { exact: true })
