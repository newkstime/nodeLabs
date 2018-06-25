// hello.js
// This is a client-side JavaScript program that tells the time.
// It is meant to be embeded in a web page named "hello.html".
function displayHello() {
  document.getElementById("displayArea").innerHTML="Hello, there! Current time is: " + new Date();
}
