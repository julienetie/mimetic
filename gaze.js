const gaze = require('gaze');
const exec = require('child_process').exec;
const express = require('express');
const server = express();
const port = 1024;


/**
 * Run command.
 * @param {string} cmd - Command. 
 */
const runCommand = (cmd) => exec(cmd, { maxBuffer: 1024 * 500 }, (err) => {
    if (err) {
        throw err;
    }
});


runCommand("yarn build-client-test");

// Serve root.
server.use('/', express.static(__dirname));


// Serve test index.html.
server.get('/', (request, response) => {
    response.sendFile(__dirname + '/test/index.html');
}).listen(port);


/**
 * Watch test files.
 */
console.info('** Watching Test Modules **');
gaze(['./test/**/*.js', '!./test/_client-test.js'], function(err, watcher) {
    this.on('changed', (filepath) => {
        runCommand("yarn build-client-test");
        console.log(filepath + ' updated');
    });
});
