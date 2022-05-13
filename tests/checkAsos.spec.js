// const { test, expect } = require('@playwright/test');
// const { email, password } = require('../dataForTests/testData.js');
// const { searchData, searchResultData } = require('../dataForTests/testData.js');
// const { SearchNike } = require('../pageObjects/searchResultPage.js');
// const { SignInPage } = require('../pageObjects/signInPage.js');


// test.beforeAll(async () => {
//     console.log('Here we go' );
// });
// test.beforeEach(async ({ page }) => {
//     await page.goto('https://www.asos.com/');
// });
// test.afterEach(async () => {
//     console.log('Test ended');
// });

// test.afterAll(async () => {
//   console.log('Finished');
// });

// test('Search Nike products', async ({page}) => {
//     const fillSearch = new SearchNike(page);
//     // await page.pause();
//     await fillSearch.searching(searchData);
//     await fillSearch.checkResult(searchData, searchResultData);
// });

// test('Check hints on Sign In page', async ({page}) => {
//     const visitSignIn = new  SignInPage(page);
//     // await page.pause();
//     await visitSignIn.visitSignInPage();
//     await visitSignIn.clickSubmit();
//     await visitSignIn.checkHints();
// });

// // test('Check Sign In', async ({page}) => {
// //     const visitSignIn = new  SignInPage(page);
// //     await page.pause();
// //     await visitSignIn.visitSignInPage();
// //     await visitSignIn.fillCredentials(email, password);
// //     await visitSignIn.clickSubmit();
// //     await visitSignIn.checkLogin();
// // });