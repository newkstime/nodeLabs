// hello.js
// This is a client-side JavaScript program that tells the time.
// It is meant to be embeded in a web page named "hello.html".
var today = new Date()
var current_hour = today.getHours()
var greeting = ""
if (current_hour < 12) {
    greeting = "Good Morning!"
} else if (current_hour < 17) {
    greeting = "Good Afternoon!"
} else {
    greeting = "Good Evening!"
}

function displayHello() {
    document.getElementById("displayArea").innerHTML= greeting + " Current time is: " + today;
}
