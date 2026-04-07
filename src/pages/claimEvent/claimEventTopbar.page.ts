import { Page, Locator } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class ClaimEventTopbarPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get configurationMenu(): Locator {
        return this.page.locator("span.oxd-topbar-body-nav-tab-item");
    }
    get eventsLink(): Locator {
        return this.page.getByRole("menuitem", { name: "Events" });
    }

    get myClaimsLink(): Locator {
        return this.page.getByRole("link", { name: "My Claims" });
    }
}
