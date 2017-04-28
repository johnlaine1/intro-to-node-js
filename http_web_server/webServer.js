const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
    response.end('Now serving...');
});
server.listen(3000);