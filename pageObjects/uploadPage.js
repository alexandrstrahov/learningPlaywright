const { expect, request } = require('@playwright/test');
const {  MainClass } = require('./mainPage.js');

exports.UploadingPage = class UploadingPage extends MainClass {

    constructor(page) {
      super(page); 
      this.page = page;
      this.selectImages = page.locator('#upload')
      this.uploadButton = page.locator('[type="submit"]')
      this.checkUploadedImage = page.locator('#ImageList > img')
    }

   async uploadImage() {
      await this.upload(this.selectImages);
      await this.click(this.uploadButton);
   }

   async checksUploadedImage() {
      await this.page.waitForLoadState();
      await expect (this.checkUploadedImage).toBeVisible();
   }

}