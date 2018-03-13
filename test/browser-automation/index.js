const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

// Basic automation without tests setup.
client
    .init()
    .url('https://duckduckgo.com')
    .windowHandleSize({ width: 400, height: 400 })
    .pause(1000)
    .windowHandleSize({ width: 700, height: 500 })
    .pause(1000)
    .windowHandleSize({ width: 800, height: 600 })
    .pause(1000)
    .windowHandleSize({ width: 1300, height: 800 })
    .pause(1000)
    .windowHandleSize({ width: 1400, height: 900 })
    .pause(1000)

    .setValue('#search_form_input_homepage', 'github MIMETIC')
    .click('#search_button_homepage')
    .getTitle()
    .then(function(title) {
        console.log('Title is: ' + title);
    })
    .end();