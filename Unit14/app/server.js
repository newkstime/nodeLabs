var express = require("express");
var app = express();
var converter = require("./converter");

app.get("/rgbToHex", function(req, res) {
  var red   = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);

  var hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));
});

app.get("/celsiusToFahrenheit", function(req, res) {
    var celsius = req.query.celsius;
    var fahrenheit = converter.celsiusToFahrenheit(celsius);
    res.send(JSON.stringify(fahrenheit));
});

app.get("/fahrenheitToCelsius", function(req, res) {
    var fahrenheit = req.query.fahrenheit;
    var celsius = converter.fahrenheitToCelsius(fahrenheit);
    res.send(JSON.stringify(celsius));
});


app.listen(3000);
console.log("server started at http://localhost:3000...");