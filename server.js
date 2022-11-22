const http = require('http');
const { parse } = require('url');
const next = require('next');
const https = require('https');
const fs = require('fs');

const app = next({ dev: true });
const handle = app.getRequestHandler();

const PORT = 3000;
const SSL_PORT = 3001;
const SSL_KEY = 'localhost+1-key.pem';
const SSL_CERT = 'localhost+1.pem';

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });

  const options = {
    key: fs.readFileSync(SSL_KEY),
    cert: fs.readFileSync(SSL_CERT)
  };
  https
    .createServer(options, function (req, res) {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(SSL_PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${SSL_PORT}`);
    });
});
