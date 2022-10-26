const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.static("static"));

const oldHeaders = [
  { name: 'Cache-Control', value: 'no-cache, no-store, must-revalidate', },
  { name: 'Pragma', value: 'public', },
  { name: 'Expires', value: '-1', },
  { name: 'Date', value: 'Tue, 25 Oct 2022 18:47:38 GMT', },
  { name: 'ETag', value: '635218a6-2c2', },
  { name: 'Last-Modified', value: 'Fri, 21 Oct 2022 03:57:26 GMT', },
  // { name: 'Last-Modified', value: 'Tue, 18 Oct 2022 01:00:31 GMT', },
  // { name: 'Content-Length', value: '367', },
];

const newHaders = [
  { name: 'Cache-Control', value: 'no-store', },
  { name: 'Date', value: 'Tue, 25 Oct 2022 19:00:28 GMT', },
  { name: 'ETag', value: '634dfaaf-2f5', },
  { name: 'Last-Modified', value: 'Tue, 18 Oct 2022 01:00:31 GMT', },
];

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));

  oldHeaders.forEach((header) => {
    res.setHeader(header.name, header.value);
  });

  // newHaders.forEach((header) => {
  //   res.setHeader(header.name, header.value);
  // });
});

// app.get('/index.js', (req, res) => {
//   res.sendFile(path.resolve('index.js'));
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
