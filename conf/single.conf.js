const env = require('dotenv').config();

nightwatch_config = {
    src_folders: ["tests/single"],

    selenium: {
        "start_process": false,
        "host": "hub-cloud.browserstack.com",
        "port": 80
    },

    test_settings: {
        default: {
            launch_url: 'http://envidia.co.uk/mimetic/examples/style-on-zoom',
            desiredCapabilities: {
                'build': 'nightwatch-browserstack',
                'browserstack.user': process.env.BROWSERSTACK_USERNAME || env.parsed.BROWSERSTACK_USERNAME,
                'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || env.parsed.BROWSERSTACK_ACCESS_KEY,
                'browserstack.debug': true,
                'browser': 'chrome'
            }
        }
    }
};

// Code to copy seleniumhost/port into test settings
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;
