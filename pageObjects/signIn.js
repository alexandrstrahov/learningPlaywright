const { expect } = require('@playwright/test');

exports.SignIn = class SignIn {

  constructor(page) {
    this.page = page;
    this.submitBtn = page.locator('[id="signin"]')
    this.emailHint = page.locator('xpath=//*[@class="qa-email-validation field-validation-error"]');
    this.passwordHint = page.locator('xpath=//*[@class="qa-password-validation field-validation-error"]');
    this.email = page.locator('[name="Username"]');
    this.password = page.locator('[id="Password"]')
    this.loggedin = page.locator('[id="LoggedIn"]')
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
    await this.password.fill('Password1!');
  }

  async checkLogin() {
    await expect (this.loggedin).toBeVisible();
  }

}