const { expect } = require('@playwright/test');
const { image } = require('../dataForTests/testData.js');

module.exports = {
    click: async function (locator) {
      await locator.waitFor();
      await locator.click();
    },
    upload: async function (page, locator) {
      const [fileChooser] = await Promise.all([
        // It is important to call waitForEvent before click to set up waiting.
        page.waitForEvent('filechooser'),
        // Opens the file chooser.
        await locator.click()
      ]);
      // await fileChooser.setFiles('/Users/alnksandrstrahov/Documents/autotests_lesson/dataForTests/19.png');
      await fileChooser.setFiles(image);
    }
    
  };