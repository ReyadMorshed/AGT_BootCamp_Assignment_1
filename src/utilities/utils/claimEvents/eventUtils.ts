import { Page, Locator, expect } from "@playwright/test";
import { performClick, performFill } from "../../actions/elementActions";
import { ClaimEventTopbarPage } from "../../../pages/claimEvent/claimEventTopbar.page";
import { SaveEventsPage } from "../../../pages/claimEvent/saveEvents.page";
import { EventListPage } from "../../../pages/claimEvent/eventList.page";

export const eventName = `Event_${Date.now()}`;
export async function createNewEvent(
  page: Page,
  claimEventTopbarPage: ClaimEventTopbarPage,
  saveEventPage: SaveEventsPage,
): Promise<void> {
  // Implementation goes here

  const eventDescription = "This is a test event created by automation.";

  await performClick(
    claimEventTopbarPage.configurationMenu,
    "Configuration Menu",
    page,
  );
  await performClick(claimEventTopbarPage.eventsLink, "Events Link", page);
  await performClick(claimEventTopbarPage.addButton, "Add Event Button", page);
  await performFill(
    saveEventPage.eventNameInput,
    eventName,
    "Event Name Input",
    page,
  );
  await performFill(
    saveEventPage.eventDescription,
    eventDescription,
    "Event Description Input",
    page,
  );

  await performClick(saveEventPage.saveButton, "Save Button", page);
  await page.waitForTimeout(5000);
}
export async function deleteEvent(page: Page, eventListPage: EventListPage) {
  await performClick(eventListPage.deleteButton, "Delete Button", page);
  await performClick(
    eventListPage.confirmDeleteButton,
    "Confirm Delete Button",
    page,
  );
  //await page.waitForTimeout(5000);
}
export async function editEvent(
  page: Page,
  eventListPage: EventListPage,
  saveEventPage: SaveEventsPage,
) {
  await page.waitForTimeout(5000);
  await page.reload();
  await performClick(eventListPage.eventEditButton, "Event edit button", page);
  await page.waitForTimeout(2000);
  //await performClick(eventListPage.eventNameText, "Event Name Text", page);
  const updatedEventName = `${eventName}_Updated`;
  await performFill(
    saveEventPage.eventNameInput,
    updatedEventName,
    "Event Name Input",
    page,
  );
  await performClick(saveEventPage.saveButton, "Save Button", page);
  await page.waitForTimeout(5000);
}
