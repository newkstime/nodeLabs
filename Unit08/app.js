/**
 app.js
 This is a simple web site that hosts
 a fake Wake Tech Credit Union web site.
 It uses the third-party module: connect version 3.4.1.
 and serve-static version 1.11.1
 For detailed information on connect module
 visit its official NPM web site at:
 https://www.npmjs.com/package/connect
 */

var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');
var util = require('util');
var fs = require('fs');

// Create an app
var app = connect();

// Create a middleware that serves static web pages using third-party module: static-serve
var staticMiddleware = serveStatic('public', {index:['index.html', 'index.htm']});

// Create a custom access log middleware to the console
function logit(req, res, next) {
    util.log(util.format('Request received: %s, %s', req.method, req.url));
    var currentTime = new Date()
    var accessLog = fs.createWriteStream('access.log', {'flags' : 'a'});
    var reqHeader = req.headers;
    var userAgent = reqHeader['user-agent'];
    var browserLanguage = reqHeader['accept-language'];
    var requestedUrl = req.originalUrl;
    accessLog.write(currentTime + ' ' + userAgent + ' ' + browserLanguage + ' ' + requestedUrl  + ' \n');
    next();
}

// Mount all the middlewares
app.use(logit).use(staticMiddleware).listen(3333);
console.log('static web server started on port 3333');