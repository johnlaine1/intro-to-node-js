const http = require('http');

http.createServer((req, res) => {
    res.end(`Serving...`);
}).listen(3000);