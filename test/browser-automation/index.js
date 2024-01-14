// import fs from 'fs'
// import http from 'http'
// import serve from 'serve'
// import killPort from 'kill-port'

const PORT = 1234
const resizeDelay = 400

describe('MIMETIC', () => {
    it('Title should be MIMETIC Browser Automation', () => {
        browser.url('/test/browser-automation/index.html')
        const title = browser.getTitle()
        expect(title).to.equal('MIMETIC Browser Automation')
    })

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
            .then((title) => {
                // killPort(PORT)
                // .then(() => {
                // expect(true).to.equal(true);
                browser.end()
                // })
            })
    })
})
