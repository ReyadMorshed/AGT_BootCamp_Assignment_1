import { expect } from "@playwright/test";
import { test } from "../../src/fixture/pomFixture";
import { createEvent } from "../../src/pages/setupFunctions/createEventFunc";
import { EventListPage } from "../../src/pages/claimEvent/eventList.page";
import { validatePartialPresenceOfText } from "../../src/utilities/actions/elementActions";
import {
    deleteEvent,
    eventName,
} from "../../src/utilities/utils/claimEvents/eventUtils";
import { createClaim } from "../../src/pages/setupFunctions/createClaimFunc";

//test.describe.configure({ mode: "serial" });
test.beforeEach(async ({ loggedInPage, dashboardPage }) => {
    await expect(dashboardPage.dashboardText).toBeVisible({ timeout: 5000 });
    await expect(dashboardPage.timeAtWorkText).toBeVisible({ timeout: 5000 });
});

test.afterEach(async ({ loggedInPage }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
});
test("Create  Claim", async ({
    loggedInPage,
    claimEventTopbarPage,
    dashboardPage,
    saveEventPage,
    claimListPage,
    submitClaimPage,
}) => {
    // Test implementation goes here

    await createClaim(
        loggedInPage,
        dashboardPage,
        claimEventTopbarPage,
        saveEventPage,
        claimListPage,
        submitClaimPage,
    );
});
