/**
 * app.js
 * This program is a server-side JavaScript program that
 * simulates a Hello web site which runs on port 3333
 * The web site displays the current time of the server.
 */

var http = require('http');
var server = http.createServer(function (request, response) {
    var now = new Date();
    var current_hour = now.getHours()
    var greeting = ""
    if (current_hour < 12) {
        greeting = "Good Morning!"
    } else if (current_hour < 17) {
        greeting = "Good Afternoon!"
    } else {
        greeting = "Good Evening!"
    }
    response.write(greeting + " Current time is " + now);
    response.end();
});
server.listen(3333);
console.log("Server is running at http://localhost:3333");