import { test, expect } from '@playwright/test';
import {testData} from '../dataForTests/testData';
import { SignInPage } from '../pageObjects/signInPage';
import { SearchNike } from '../pageObjects/searchResultPage';

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
    const fillSearch = new SearchNike(page);
    // await page.pause();
    await fillSearch.searching(testData.searchData);
    await fillSearch.checkResult();
});

test('Check hints on Sign In page', async ({page}) => {
    const visitSignIn = new  SignInPage(page);
    // await page.pause();
    await visitSignIn.visitSignInPage();
    await visitSignIn.clickSubmit();
    await visitSignIn.checkHints();
});

// test('Check Sign In', async ({page}) => {
//     const visitSignIn = new  SignInPage(page);
//     await page.pause();
//     await visitSignIn.visitSignInPage();
//     await visitSignIn.fillCredentials(testData.email, testData.password);
//     await visitSignIn.clickSubmit();
//     await visitSignIn.checkLogin();
// });