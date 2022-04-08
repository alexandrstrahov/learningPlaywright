const { test, expect } = require('@playwright/test');
const { UploadingPage } = require('../pageObjects/uploadPage.js');
const { click } = require('../support/helpers.js');
// const { image } = require('../dataForTests/testData.js');

test.beforeAll(async () => {
    console.log('Here we go' );
});
test.beforeEach(async ({ page }) => {
    await page.goto('https://west-wind.com/wconnect/wcscripts/FileUpload.wwd');
});
test.afterEach(async () => {
    console.log('Test ended');
});

test.afterAll(async () => {
  console.log('Finished');
});


test('Test Upload for an Image', async ({page}) => {
    const checkImage = new UploadingPage(page);
    // await page.pause();
    await checkImage.uploadImage();
});
