const { expect } = require('@playwright/test');

exports.SignIn = class SignIn {

  constructor(page) {
    this.page = page;
    this.submitBtn = page.locator('xpath=//*[@type="submit"]')
    this.emailHint = page.locator('xpath=//*[@class="qa-email-validation field-validation-error"]');
    this.passwordHint = page.locator('xpath=//*[@class="qa-password-validation field-validation-error"]');
    this.email = page.locator('xpath=//*[@name="Username"]');
    this.password = page.locator('xpath=//*[@id="Password"]')
    this.loggedin = page.locator('xpath=//*[@id="LoggedIn"]')
  }

  async clickSubmit() {
    await expect (this.submitBtn).toBeVisible();
    await expect (this.submitBtn).toBeEnabled();
    await this.submitBtn.click();
  }

  async checkHints() {
    await expect (this.emailHint).toBeVisible();
    await expect (this.passwordHint).toBeVisible();
  }

  async fillCredentials() {
    await this.email.fill('leedoe@gmail.com');
    await this.password.fill('Password');
  }

  async checkLogin() {
    await expect (this.loggedin).toBeVisible();
  }

}