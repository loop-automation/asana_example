import { expect, Locator, Page } from "@playwright/test";

export class Tasks {
	readonly page: Page;
	readonly addTask: Locator;
	readonly completeTask: (text: string) => Locator;

	readonly card: (text: string) => Locator;
	readonly addDueDate: (text: string) => Locator;

	readonly chooseDate: (text: string) => Locator;

	constructor(page: Page) {
		this.page = page;

		// Add Task
		this.addTask = page.getByRole("button", { name: "Add task", exact: true });

		// Task Actions
		this.completeTask = (task: string) => this.page.getByLabel(task, { exact: true }).getByLabel("Completed");

		// Board View
		this.card = (task: string) => page.locator(".BoardCardLayout").filter({ hasText: task });
		this.addDueDate = (task: string) => this.card(task).getByRole("button", { name: "Due date" });

		this.chooseDate = (date: string) => this.page.locator(".DatePicker-container").getByText(date, { exact: true });
	}
}
