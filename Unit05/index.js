/**
 * index.js
 * This program is a server-side JavaScript program that
 * simulates a Hello web site which runs on port 3333
 * The web site displays the current time of the server.
 */
var http = require('http');
var cool = require('cool-ascii-faces');
var encode = require('./encode');
var random = require('./random');

var server = http.createServer(function (request, response) {
  if (request.url == '/') {
    var now = new Date();
    response.write("<!DOCTYPE html><html><head><title>Node.js Greetings</title></head>");
    response.write("<p>Current time is " + now + "</p>");
    response.write("<a href=\"/smiley\">Click here for a smiley face</a>");
    response.end();
  } else if (request.url == '/smiley') {
    var smileyArray = cool.faces;
    var firstSmiley = smileyArray[random(smileyArray.length)];
    response.write("<!DOCTYPE html><html><head><title>Cool Smiley Faces</title></head>");
    response.write(encode(firstSmiley));
    response.write("<p><a href=\"/\">Back</a></p>");
    response.end();
  } else {
    response.write("<!DOCTYPE html><html><head><title>404 ERROR</title></head>");
    response.write("<p> 404 ERROR: Page doesn't exist.</p>");
    response.end();
  }

});
server.listen(3333);
console.log("Server is running at port: 3333");
