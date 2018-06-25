/**
 * app.js
 * This program is a server-side JavaScript program that
 * simulates a Hello web site which runs on port 3333
 * The web site displays the current time of the server.
 */
var http = require('http');
var server = http.createServer(function (request, response) {
    var now = new Date();
    response.write("Hello there! Current time is " + now);
    response.end();
});
server.listen(3333);
console.log("Server is running at http://localhost:3333");