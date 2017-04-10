const express = require('express');
const server = express();
const port = 1024;

// Serve root.
server.use('/', express.static(__dirname));

// Serve test index.html.
server.get('/', (request, response) => {
    response.sendFile(__dirname + '/test/index.html');
    console.info(`Serving Test index.html on port ${port}`);
}).listen(port);