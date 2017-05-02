const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
    response.end(process.argv[2]);
});
server.listen(3000);