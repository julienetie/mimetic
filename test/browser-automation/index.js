const fs = require('fs');
const http = require('http');
const PORT = 1234
const resizeDelay = 400;
const serve = require('serve');
const killPort = require('kill-port');
// fs.readFile('./test/browser-automation/index.html', function(err, html) {
//     if (err) {
//         console.log(err);
//     }
//     http.createServer((req, res) => {
//         res.writeHeader(200, { "Content-Type": "text/html" });
//         res.write(html);
//         res.end();
//     }).listen(PORT);
// });


// const server = serve(__dirname, {
//     port: PORT,
//     ignore: ['node_modules']
// })



describe('MIMETIC', () => {
    it('Title should be MIMETIC Browser Automation', () => {
        browser.url('/test/browser-automation/index.html')
        const title = browser.getTitle();
        expect(title).to.equal('MIMETIC Browser Automation');
    });

    it('Window should be greater than 1024 * 768', () => {
        browser
            .windowHandleSize({ width: 400, height: 400 })
            .pause(resizeDelay)

        browser
            .windowHandleSize({ width: 700, height: 500 })
            .pause(resizeDelay)


        browser
            .windowHandleSize({ width: 800, height: 600 })
            .pause(resizeDelay)

        browser
            .windowHandleSize({ width: 1300, height: 800 })
            .pause(resizeDelay)

        browser
            .windowHandleSize({ width: 1400, height: 900 })
            .pause(resizeDelay)

        browser
            .then(function(title) {
                killPort(PORT)
                    // .then(() => {
                        // expect(true).to.equal(true);
                        browser.end();
                    // })
            });


    });
});



// client
//     .init()
//     .url(`http://localhost:${PORT}`)
//     .windowHandleSize({ width: 400, height: 400 })
//     .pause(1000)
//     .windowHandleSize({ width: 700, height: 500 })
//     .pause(1000)
//     .windowHandleSize({ width: 800, height: 600 })
//     .pause(1000)
//     .windowHandleSize({ width: 1300, height: 800 })
//     .pause(1000)
//     .windowHandleSize({ width: 1400, height: 900 })
//     .pause(1000)
//     .then(function(title) {
//         client.end();
//     })
//