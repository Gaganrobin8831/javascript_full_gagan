import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World', 'utf8');
});

let PORT = 8000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});