import { expect, Page } from "@playwright/test";
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

export async function createClaim(
    loggedInPage: Page,
    dashboardPage: DashboardPage,
    claimEventTopbarPage: ClaimEventTopbarPage,
    saveEventPage: SaveEventsPage,
    claimListPage: ClaimListPage,
    submitClaimPage: SubmitClaimPage,
) {
    // Implement the logic to create an event using the loggedInPage

    // await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
    // await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });
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
}
