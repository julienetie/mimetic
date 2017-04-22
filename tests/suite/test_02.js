module.exports = {
  'Google\'s Search Functionality' : function (browser) {
    browser
      .url('https://www.google.com/ncr')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'BrowserStack 02\n')
      .pause(1000)
      .assert.title('BrowserStack 02 - Google Search')
      .end();
  }
};
