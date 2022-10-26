# caching-tests

Testing how HTTP cache works and to invalidate it.

## Old headers

index.html
Cache-Control: public, must-revalidate, no-cache, private
ETag: 63521ad0-2c2

*.js
Pragma: public
Expires: -1
Cache-Control: public, must-revalidate, no-cache
Date: Tue, 25 Oct 2022 18:47:38 GMT
ETag: "635218a6-2c2"
Last-Modified: Fri, 21 Oct 2022 03:57:26 GMT

## New headers

*.{html|js}
cache-control: no-store
date: Tue, 25 Oct 2022 19:00:28 GMT
etag: "634dfaaf-2f5"
last-modified: Tue, 18 Oct 2022 01:00:31 GMT
