const { expect, request } = require('@playwright/test');
const { click } = require('../support/helpers.js');
const { upload } = require('../support/helpers.js');

exports.UploadingPage = class UploadingPage {

    constructor(page) {
      this.page = page;
      this.selectImages = page.locator('#upload')
      this.uploadButton = page.locator('[type="submit"]')
      this.checkUploadedImage = page.locator('#ImageList > img')
    }

   async uploadImage() {
      await upload(this.page, this.selectImages);
      await click(this.uploadButton);
      // await this.page.waitForLoadState();
      // await expect (this.checkUploadedImage).toBeVisible();
   }

   async checksUploadedImage() {
      await this.page.waitForLoadState();
      await expect (this.checkUploadedImage).toBeVisible();
   }

}