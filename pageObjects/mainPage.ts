import { expect, Locator, Page } from '@playwright/test';
import {testData} from '../dataForTests/testData';

export class MainClass {
  readonly page: Page;
  readonly search: Locator;
  readonly accountBtn: Locator;
  readonly signInBtn: Locator;
  readonly searchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.search = page.locator('[id="chrome-search"]');
    this.accountBtn = page.locator('[data-testid="myAccountIcon"]')
    this.signInBtn = page.locator('[data-testid="signin-link"]');
    this.searchBtn = page.locator('[data-testid="search-button-inline"]')
  } 
  
  async searching(searchResultData) {
    await this.search.fill(searchResultData);
    await this.click(this.searchBtn);
  }

  async gotoSignIn() {
    await this.click(this.accountBtn);
    await this.click(this.signInBtn);
    await this.page.waitForLoadState();
  }

  async click(locator) {
    await locator.waitFor();
    await locator.click();
  }
  
  async upload (locator) {
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      await locator.click()
    ]);
    // await fileChooser.setFiles('/Users/alnksandrstrahov/Documents/autotests_lesson/dataForTests/19.png');
    await fileChooser.setFiles(testData.file);
  }
  
 }
 
