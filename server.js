const express = require('express');
const server = express();
const opn = require('opn');
const port = 1024;


// Open port.
opn(`http://localhost:${port}`, { wait: false }).then(() => {
    // Server root.
    server.use('/', express.static(__dirname));

    // Serve test index.html.
    server.get('/', (request, response) => {
        response.sendFile(__dirname + '/test/index.html');
        console.info(`Serving Test index.html on port ${port}`);
    }).listen(port);
});