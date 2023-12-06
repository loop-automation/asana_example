import { expect, Locator, Page, } from '@playwright/test';

export class Login {

    readonly page: Page
    readonly emailField: Locator
    readonly passwordField: Locator
    readonly continueButton: Locator
    readonly loginButton: Locator
    
    constructor(page: Page) {
        this.page = page
        this.emailField = page.getByLabel('Email address');
        this.passwordField = page.getByLabel('Password', { exact: true })
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true })
        this.loginButton = page.getByRole('button', { name: 'Log in' })
        ;
    }

async login(url: string, email: string, password: string) {  
  await this.page.goto(url);
  await this.emailField.fill(email);
  await this.continueButton.click();
  await this.passwordField.fill(password);
  await this.loginButton.click();
  await this.page.waitForResponse(response => 
    response.url().includes('https://app.asana.com/app/asana/-/report_execution_context_activity'));
}

}

//readonly menu: (text: string) => Locator;
    
// this.menu = (text: string) => page.locator(`text=${text}`);
