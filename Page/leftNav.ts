import { expect, Locator, Page, } from '@playwright/test';

export class LeftNav {

    readonly page: Page
    readonly leftNavOption: (text: string) => Locator;

    
    constructor(page: Page) {
        this.page = page
        this.leftNavOption = (leftNav: string) => this.page.getByLabel(leftNav)
        ;

    }

}

//readonly menu: (text: string) => Locator;
    
// this.menu = (text: string) => page.locator(`text=${text}`);
