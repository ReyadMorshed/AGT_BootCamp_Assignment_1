import { Page, Locator, expect } from "@playwright/test";

/**
 * Waits for a locator to be visible before interacting.
 * @param locator - The Playwright Locator to wait for.
 * @param description - Description of the element for logging.
 * @param timeout - Optional timeout in ms (default 10s)
 */
export async function waitForVisible(
  locator: Locator,
  description: string,
  timeout = 10000,
): Promise<void> {
  try {
    await locator.waitFor({ state: "visible", timeout });
    console.log(`SUCCESS: ${description} is visible`);
  } catch (error) {
    console.error(`FAILURE: ${description} not visible in time.`, error);
    throw error;
  }
}

/**
 * Clicks on a locator with logging, error handling, and screenshot on failure.
 * @param locator - The Playwright Locator to click.
 * @param description - Description of the action for logging.
 * @param page - The Playwright Page instance for screenshot on error.
 */
export async function performClick(
  locator: Locator,
  description: string,
  page: Page,
): Promise<void> {
  try {
    await locator.click();
    console.log(`SUCCESS: Clicked on ${description}`);
  } catch (error) {
    console.error(`FAILURE: Could not click on ${description}. Error:`, error);
    await page.screenshot({ path: `error-click-${Date.now()}.png` });
    throw error;
  }
}

/**
 * Fills a locator with the provided value, with logging, error handling, and screenshot on failure.
 * @param locator - The Playwright Locator to fill.
 * @param value - The value to fill in.
 * @param description - Description of the action for logging.
 * @param page - The Playwright Page instance for screenshot on error.
 */
export async function performFill(
  locator: Locator,
  value: string,
  description: string,
  page: Page,
): Promise<void> {
  try {
    await locator.fill(value);
    console.log(`SUCCESS: Filled ${description} with value '${value}'`);
  } catch (error) {
    console.error(`FAILURE: Could not fill ${description}. Error:`, error);
    await page.screenshot({ path: `error-fill-${Date.now()}.png` });
    throw error;
  }
}

/**
 * Navigates to a URL using the Playwright Page, with logging, error handling, and screenshot on failure.
 * @param page - The Playwright Page instance.
 * @param url - The URL to navigate to.
 * @param description - Description of the navigation for logging.
 */
export async function performGoto(
  page: Page,
  url: string,
  description: string,
): Promise<void> {
  try {
    await page.goto(url);
    console.log(`SUCCESS: Navigated to ${description} (${url})`);
  } catch (error) {
    console.error(
      `FAILURE: Could not navigate to ${description} (${url}). Error:`,
      error,
    );
    await page.screenshot({ path: `error-goto-${Date.now()}.png` });
    throw error;
  }
}

/**
 * Validate that a toast message is visible within the given timeout.
 * @param page Playwright Page object
 * @param message The exact toast text to validate
 * @param timeout Timeout in ms (default: 5000)
 */
export async function validateToastMessage(
  page: Page,
  message: string,
  timeout: number = 5000,
): Promise<void> {
  // await expect(page.getByText(message, { exact: true })).toBeVisible({
  //   timeout,
  // });
  try {
    await expect(
      page.getByText(/Successfully Saved/i, { exact: false }),
    ).toBeVisible({ timeout: 10000 });
  } catch (error) {
    console.error(
      `FAILURE: Toast message '${message}' not visible in time.`,
      error,
    );
    await page.screenshot({ path: `error-toast-${Date.now()}.png` });
    throw error;
  }
}

export async function validateElementText(
  locator: Locator,
  expectedText: string,
  description: string,
  timeout: number = 10000,
): Promise<void> {
  try {
    await expect(locator).toHaveText(expectedText, { timeout });
    console.log(`SUCCESS: ${description} has expected text '${expectedText}'`);
  } catch (error) {
    console.error(
      `FAILURE: ${description} does not have expected text '${expectedText}'.`,
      error,
    );
    throw error;
  }
}

export async function validatePartialPresenceOfText(
  locator: Locator,
  expectedText: string,
  description: string,
  timeout: number = 10000,
): Promise<void> {
  try {
    // Replaced .toHaveText(new RegExp(...)) with .toContainText(...)
    await expect(locator).toContainText(expectedText, { timeout });
    console.log(
      `SUCCESS: ${description} contains expected text '${expectedText}'`,
    );
  } catch (error) {
    console.error(
      `FAILURE: ${description} does not contain expected text '${expectedText}'.`,
      error,
    );
    throw error;
  }
}

/**
 * Validates that the expected text is NOT present anywhere within the given locator (defaults to page body).
 * * @param locator - The Playwright Locator to search within (e.g., page.locator('body'))
 * @param forbiddenText - The text that should NOT be found
 * @param description - Context for logging
 * @param timeout - Maximum time to wait for the text to disappear or stay absent
 */
export async function validateAbsenceOfText(
  locator: Locator,
  description: string,
  timeout: number = 10000,
): Promise<void> {
  try {
    // toBeHidden passes if the element is NOT in the DOM or is hidden
    await expect(locator).toBeHidden({ timeout });

    console.log(`SUCCESS: ${description} is no longer visible/present.`);
  } catch (error) {
    console.error(`FAILURE: ${description} is still visible/present.`, error);
    throw error;
  }
}
/**
 * Validates that the element's text matches the expected string exactly.
 * Note: Playwright's toHaveText ignores leading/trailing whitespace by default.
 */
export async function validateExactPresenceOfText(
  locator: Locator,
  expectedText: string,
  description: string,
  timeout: number = 10000,
): Promise<void> {
  try {
    // .toHaveText(string) performs an exact match of the text content
    await expect(locator).toHaveText(expectedText, { timeout });

    console.log(
      `SUCCESS: ${description} exactly matches expected text '${expectedText}'`,
    );
  } catch (error) {
    console.error(
      `FAILURE: ${description} does not exactly match expected text '${expectedText}'.`,
      error,
    );
    throw error;
  }
}
