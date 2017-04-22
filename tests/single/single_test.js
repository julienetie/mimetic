// module.exports = {
//   'Google\'s Search Functionality' : function (browser) {
//     browser
//       .url('https://www.google.com/ncr')
//       .waitForElementVisible('body', 1000)
//       .setValue('input[type=text]', 'BrowserStack\n')
//       .pause(1000)
//       .assert.title('BrowserStack - Google Search')
//       .end();
//   }
// };
// 	

module.exports = {
    'Google\'s Search Functionality': (client) => {
        console.log('SINGLE')
        client
            .url(client.launch_url, (result) => {
                console.log(result);
            })
            .waitForElementVisible('body', 5000)
            .assert.title('MIMETIC Example - Style On Zoom')
            .end();
    }
};
