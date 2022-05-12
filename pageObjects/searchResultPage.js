const { expect } = require('@playwright/test');
const {  MainClass } = require('./mainPage.js');
const { searchData, searchResultData } = require('../dataForTests/testData.js');

exports.SearchNike = class SearchNike extends MainClass {
  
  constructor(page) {
    super(page);
    this.searchResult = page.locator('[class="vp-JnyG"]');
    this.result = page.locator('[data-auto-id="productList"]');
    }

   async checkResult() {
        await expect (this.searchResult).toContainText(searchData);
        await expect (this.result).toContainText(searchResultData);
        // await super.searching();
      }
    
}
