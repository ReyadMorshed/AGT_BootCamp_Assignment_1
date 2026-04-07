import { expect, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";
import { DashboardPage } from "../Dashboard/dashboard.page";
import { navigateToClaim } from "../../utilities/utils/dashboard/dashboardUtils";
import { create } from "node:domain";
import {
    createNewEvent,
    eventName,
} from "../../utilities/utils/claimEvents/eventUtils";
import { ClaimEventTopbarPage } from "../claimEvent/claimEventTopbar.page";
import { SaveEventsPage } from "../claimEvent/saveEvents.page";
import { validatePartialPresenceOfText } from "../../utilities/actions/elementActions";
import { EventListPage } from "../claimEvent/eventList.page";

export async function createEvent(loggedInPage: Page) {
    // Implement the logic to create an event using the loggedInPage
    const basePage = new BasePage(loggedInPage);
    const dashboardPage = new DashboardPage(loggedInPage);
    const claimEventTopbarPage = new ClaimEventTopbarPage(loggedInPage);
    const saveEventPage = new SaveEventsPage(loggedInPage);

    await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
    await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });
    await navigateToClaim(loggedInPage, dashboardPage);
    // This may involve navigating to the event creation page, filling out forms, and submitting them
    await createNewEvent(loggedInPage, claimEventTopbarPage, saveEventPage);
}
