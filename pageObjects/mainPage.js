const { expect } = require('@playwright/test');

exports.MainClass = class MainClass {
  constructor(page) {
    this.page = page;
    this.search = page.locator('[id="chrome-search"]');
    this.accountBtn = page.locator('[data-testid="myAccountIcon"]')
    this.signInBtn = page.locator('[data-testid="signin-link"]');
  } 
  async searching(searchResultData) {
    await this.search.fill(searchResultData);
    await this.page.keyboard.press('Enter');
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
    await fileChooser.setFiles(file);
  }
  
 }
 
