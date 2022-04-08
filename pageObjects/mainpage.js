const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

  constructor(page) {
    this.page = page;
    this.search = page.locator('xpath=//*[@id="chrome-search"]');
    this.searchResult = page.locator('xpath=//*[@class="vp-JnyG"]');
    this.result = page.locator('xpath=//*[@data-auto-id="productList"]');
    this.accountBtn = page.locator('xpath=//*[@type="accountUnfilled"]')
    this.signInBtn = page.locator('xpath=//*[@data-testid="signin-link"]');
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