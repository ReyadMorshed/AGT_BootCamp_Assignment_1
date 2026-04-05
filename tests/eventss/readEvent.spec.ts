import { expect } from "@playwright/test";
import { test } from "../../src/fixture/sessionLogin";
import { createEvent } from "../../src/pages/setupFunctions/createEventFunc";
import { EventListPage } from "../../src/pages/claimEvent/eventList.page";
import { validatePartialPresenceOfText } from "../../src/utilities/actions/elementActions";
import {
  deleteEvent,
  eventName,
} from "../../src/utilities/utils/claimEvents/eventUtils";

test.describe.configure({ mode: "serial" });

test.describe.serial("Claim Event Tests", () => {
  test("Read  Event", async ({ loggedInPage }) => {
    // Test implementation goes here
    const eventListPage = new EventListPage(loggedInPage);
    await createEvent(loggedInPage);
    await validatePartialPresenceOfText(
      eventListPage.eventNameText,
      eventName,
      "Event Name",
      5000,
    );
    await deleteEvent(loggedInPage, eventListPage);
  });
});
