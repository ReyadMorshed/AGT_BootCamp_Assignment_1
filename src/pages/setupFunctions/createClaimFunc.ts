import { expect, Page } from "@playwright/test";
import { test } from "../../fixture/pomFixture";
import { BasePage } from "../Base/base.page";
import { DashboardPage } from "../Dashboard/dashboard.page";
import { navigateToClaim } from "../../utilities/utils/dashboard/dashboardUtils";
// <-- Use the custom test
import {
    createNewEvent,
    eventName,
} from "../../utilities/utils/claimEvents/eventUtils";
import { ClaimEventTopbarPage } from "../claimEvent/claimEventTopbar.page";
import { SaveEventsPage } from "../claimEvent/saveEvents.page";
import {
    performClick,
    validatePartialPresenceOfText,
} from "../../utilities/actions/elementActions";
import { EventListPage } from "../claimEvent/eventList.page";
import { ClaimListPage } from "../claimEvent/claimList.page";
import { SubmitClaimPage } from "../claimEvent/submitClaim.page";
import { waitfortimeout } from "../../utilities/actions/baseActions";

export async function createClaim(
    loggedInPage: Page,
    dashboardPage: DashboardPage,
    claimEventTopbarPage: ClaimEventTopbarPage,
    saveEventPage: SaveEventsPage,
    claimListPage: ClaimListPage,
    submitClaimPage: SubmitClaimPage,
) {
    await navigateToClaim(loggedInPage, dashboardPage);
    // This may involve navigating to the event creation page, filling out forms, and submitting them
    await createNewEvent(loggedInPage, claimEventTopbarPage, saveEventPage);
    await performClick(
        claimEventTopbarPage.myClaimsLink,
        "Claims Tab",
        loggedInPage,
    );
    await claimListPage.submitClaimButton.waitFor({
        state: "visible",
        timeout: 5000,
    });
    await performClick(
        claimListPage.submitClaimButton,
        "Submit Claim Button",
        loggedInPage,
    );
    await submitClaimPage.eventMenu.waitFor({
        state: "visible",
        timeout: 5000,
    });
    await performClick(submitClaimPage.eventMenu, "Event Menu", loggedInPage);
    await performClick(
        submitClaimPage.eventOption,
        "Event Option",
        loggedInPage,
    );
    await performClick(
        submitClaimPage.currencyMenu,
        "Currency Menu",
        loggedInPage,
    );
    await performClick(
        submitClaimPage.currencyOption,
        "Currency Option",
        loggedInPage,
    );

    await performClick(
        submitClaimPage.createButton,
        "Create Button",
        loggedInPage,
    );
    await waitfortimeout(5000);
    await expect(submitClaimPage.referenceIdTitle).toBeVisible({
        timeout: 5000,
    });
}
