const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 8080;
const baseDir = path.join(__dirname, './');
const statusCode = 200;
// const statusCode = 304;

const oldHeaders = [
  {
    name: 'Cache-Control',
    value: 'public, must-revalidate, no-cache, private',
  },
  { name: 'Pragma', value: 'public' },
  { name: 'Expires', value: '-1' },
  { name: 'Date', value: 'Tue, 25 Oct 2022 18:47:38 GMT' },
  { name: 'ETag', value: '635218a6-2c2' },
  { name: 'Last-Modified', value: 'Fri, 21 Oct 2022 03:57:26 GMT' },
  //   { name: 'Last-Modified', value: 'Tue, 18 Oct 2022 01:00:31 GMT' },
];

const newHaders = [
  { name: 'Cache-Control', value: 'private, no-store, max-age=0, no-cache, must-revalidate' },
  { name: 'Date', value: 'Tue, 25 Oct 2022 19:00:28 GMT' },
  { name: 'ETag', value: '634dfaaf-2f5' },
  { name: 'Last-Modified', value: 'Tue, 18 Oct 2022 01:00:31 GMT' },
];

const loadFile = (fileName, callback) => {
  fs.readFile(`${baseDir}${fileName}`, (error, data) => {
    callback(data);
  });
};

http
  .createServer((req, res) => {
    const { url } = req;

    newHaders.forEach((header) => {
      res.setHeader(header.name, header.value);
    });

    const serveFile = (fileName, type) => {
      res.writeHead(statusCode, { 'Content-Type': `text/${type}` });
      loadFile(fileName, (data) => res.end(data));
    };

    if (url === '/') {
      serveFile('index.html', 'html');
    } else if (url === '/index.js') {
      serveFile('index.js', 'javascript');
    }
  })
  .listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
