import { expect, Locator, Page } from '@playwright/test';
import {testData} from '../dataForTests/testData';
import {  MainClass } from './mainPage';

export class SignInPage extends MainClass {
  readonly page: Page;
  readonly submitBtn: Locator;
  readonly emailHint: Locator;
  readonly passwordHint: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly loggedin: Locator;
  readonly signOutBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.submitBtn = page.locator('[id="signin"]')
    this.emailHint = page.locator('[id="EmailAddress-error"]');
    this.passwordHint = page.locator('[id="Password-error"]');
    this.email = page.locator('[name="Username"]');
    this.password = page.locator('[id="Password"]')
    this.loggedin = page.locator('[id="LoggedIn"]')
    this.signOutBtn = page.locator('[data-testid="signout-link"]')
  }

  async clickSubmit() {
    await expect (this.submitBtn).toBeVisible();
    await expect (this.submitBtn).toBeEnabled();
    await this.click(this.submitBtn)
  }
  async visitSignInPage() {
    await super.gotoSignIn();
  }

  async checkHints() {
    await expect (this.emailHint).toBeVisible();
    await expect (this.passwordHint).toBeVisible();
  }

  async fillCredentials(email, password) {
    await this.email.fill(testData.email);
    await this.password.fill(testData.password);
  }

  async checkLogin() {
    await super.click(this.accountBtn)
    await expect (this.signOutBtn).toBeVisible();
  }

}
