const express = require('express')
const index = express()
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('My name is dog');
});

index.listen(port,() => console.info(`Listening on port ${port}` ))

index.use(express.static('public'))
index.use('/css', express.static(__dirname+ 'public/css'))
index.use('/js', express.static(__dirname+ 'public/js'))
index.use('/img', express.static(__dirname+ 'public/img'))

index.get('', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});