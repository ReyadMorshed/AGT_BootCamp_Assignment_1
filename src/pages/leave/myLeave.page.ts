import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Base/base.page";

export class MyLeavePage extends BasePage {
  protected page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  get myLeaveLink(): Locator {
    return this.page.getByRole("link", { name: "My Leave" });
  }
  get newlyCreatedLeave(): Locator {
    return this.page.getByRole("button", { name: "" }).first();
  }
  get addCommentText(): Locator {
    return this.page.getByText("Add Comment");
  }
  get commentBox(): Locator {
    return this.page.getByRole("textbox", { name: "Comment here" });
  }
}
