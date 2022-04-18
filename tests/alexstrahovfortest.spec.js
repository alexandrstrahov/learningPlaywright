const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pageObjects/mainpage.js');
const { SignIn } = require('../pageObjects/signIn.js');

test.beforeAll(async () => {
    console.log('Here we go' );
});
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.asos.com/');
});
test.afterEach(async () => {
    console.log('Test ended');
});

test.afterAll(async () => {
  console.log('Finished');
});

test('Search Nike products', async ({page}) => {
    const fillSearch = new MainPage(page);
    await fillSearch.searching();
    await fillSearch.checkResult();
});

test('Check hints on Sign In page', async ({page}) => {
    const visitSignIn = new MainPage(page);
    const checkSignIn = new SignIn(page);
    await visitSignIn.gotoSignIn();
    await checkSignIn.clickSubmit();
    await checkSignIn.checkHints();
});

// test('Check Sign In', async ({page}) => {
//     const visitSignIn = new MainPage(page);
//     const checkSignIn = new SignIn(page);
//     await visitSignIn.gotoSignIn();
//     await checkSignIn.fillCredentials();
//     await checkSignIn.clickSubmit();
//     await checkSignIn.checkLogin();
    // await page.context().storageState({ path: 'storageState.json' });
// });
