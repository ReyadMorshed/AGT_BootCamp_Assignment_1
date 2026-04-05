import { expect } from "@playwright/test";
import { test } from "../../src/fixture/sessionLogin";
import { createEvent } from "../../src/pages/setupFunctions/createEventFunc";
import { EventListPage } from "../../src/pages/claimEvent/eventList.page";
import {
  validateExactPresenceOfText,
  validatePartialPresenceOfText,
} from "../../src/utilities/actions/elementActions";
import {
  deleteEvent,
  editEvent,
  eventName,
} from "../../src/utilities/utils/claimEvents/eventUtils";
import { SaveEventsPage } from "../../src/pages/claimEvent/saveEvents.page";

test.describe.configure({ mode: "serial" });

test.describe.serial("Claim Event Tests", () => {
  test("Edit  Event", async ({ loggedInPage }) => {
    // Test implementation goes here
    const eventListPage = new EventListPage(loggedInPage);
    const saveEventPage = new SaveEventsPage(loggedInPage);
    await createEvent(loggedInPage);
    // await validatePartialPresenceOfText(
    //   eventListPage.eventNameText,
    //   eventName,
    //   "Event Name",
    //   5000,
    // );

    await editEvent(loggedInPage, eventListPage, saveEventPage);
    await validateExactPresenceOfText(
      eventListPage.eventNameText,
      `${eventName}_Updated`,
      "Updated Event Name",
      5000,
    );
    await deleteEvent(loggedInPage, eventListPage);
  });
});
