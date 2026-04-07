import { test as baseTest } from "./sessionLogin";
import { ClaimEventTopbarPage } from "../pages/claimEvent/claimEventTopbar.page";
import { ClaimListPage } from "../pages/claimEvent/claimList.page";
import { SubmitClaimPage } from "../pages/claimEvent/submitClaim.page";
import { SaveEventsPage } from "../pages/claimEvent/saveEvents.page";
import { DashboardPage } from "../pages/Dashboard/dashboard.page";

type pages = {
    // Define any page objects you want to use across tests here
    dashboardPage: DashboardPage;
    claimEventTopbarPage: ClaimEventTopbarPage;
    claimListPage: ClaimListPage;
    submitClaimPage: SubmitClaimPage;
    saveEventPage: SaveEventsPage;
};

const testPages = baseTest.extend<pages>({
    dashboardPage: async ({ loggedInPage }, use) => {
        const dashboardPage = new DashboardPage(loggedInPage);
        await use(dashboardPage);
    },
    claimEventTopbarPage: async ({ loggedInPage }, use) => {
        const claimEventTopbarPage = new ClaimEventTopbarPage(loggedInPage);
        await use(claimEventTopbarPage);
    },

    claimListPage: async ({ loggedInPage }, use) => {
        const claimListPage = new ClaimListPage(loggedInPage);
        await use(claimListPage);
    },

    submitClaimPage: async ({ loggedInPage }, use) => {
        const submitClaimPage = new SubmitClaimPage(loggedInPage);
        await use(submitClaimPage);
    },

    saveEventPage: async ({ loggedInPage }, use) => {
        const saveEventPage = new SaveEventsPage(loggedInPage);
        await use(saveEventPage);
    },
});

export const test = testPages;
export const expect = testPages.expect;
