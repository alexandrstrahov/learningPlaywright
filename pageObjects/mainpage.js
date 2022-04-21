const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

  constructor(page) {
    this.page = page;
    this.search = page.locator('[id="chrome-search"]');
    this.searchResult = page.locator('[class="vp-JnyG"]');
    this.result = page.locator('[data-auto-id="productList"]');
    this.accountBtn = page.locator('[data-testid="myAccountIcon"]')
    this.signInBtn = page.locator('[data-testid="signin-link"]');
  }

  async searching() {
    await this.search.fill('Nike');
    await this.page.keyboard.press('Enter');
  }
  async checkResult() {
    await expect (this.searchResult).toContainText('nike');
    await expect (this.result).toContainText('Nike');
  }

  async gotoSignIn() {
    await this.accountBtn.click();
    await this.signInBtn.click();
    await this.page.waitForLoadState();
  }

}