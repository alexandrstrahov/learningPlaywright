import { expect, Locator, Page } from '@playwright/test';
import {  MainClass } from './mainPage';

export class UploadingPage extends MainClass {
   readonly page: Page;
   readonly selectImages: Locator;
   readonly uploadButton: Locator;
   readonly checkUploadedImage: Locator;
   
    constructor(page: Page) {
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