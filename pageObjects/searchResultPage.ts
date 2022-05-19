import { expect, Locator, Page } from '@playwright/test';
import { testData } from '../dataForTests/testData';
import {  MainClass } from './mainPage';

export class SearchNike extends MainClass {
  readonly page: Page;
  readonly searchResult: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    super(page);
    this.searchResult = page.locator('[class="vp-JnyG"]');
    this.result = page.locator('[data-auto-id="productList"]');
    }

   async checkResult() {
        await expect (this.searchResult).toContainText(testData.searchData);
        await expect (this.result).toContainText(testData.searchResultData);
      }
    
}
