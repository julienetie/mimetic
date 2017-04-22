module.exports = {
  'BrowserStack Local Testing' : function (browser) {
    browser
      .url('http://bs-local.com:45691/check')
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Up and running')
      .end();
  }
};
