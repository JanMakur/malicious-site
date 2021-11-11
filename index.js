const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.end(fs.readFileSync('./static/index.html'));
});

server.listen(1337);
