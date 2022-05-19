import { test } from '@playwright/test';
import { UploadingPage } from '../pageObjects/uploadPage';


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
    const uploadFile = new UploadingPage(page);
    // await page.pause();
    await uploadFile.uploadImage();
    await uploadFile.checksUploadedImage();
    // const apiRequest = await request.get('https://reqres.in/api/users/2');
    // console.log(await apiRequest.json());

});
