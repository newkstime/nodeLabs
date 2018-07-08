var expect  = require("chai").expect;
var request = require("request");

describe("Color Code Converter - web service version", function() {

  describe("RGB to Hex conversion - http://localhost:3000/rgbToHex?red=255&green=255&blue=255", function() {

    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in hex", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("ffffff");
        done();
      });
    });

  });

  describe("Hex to RGB conversion - http://localhost:3000/hexToRgb?hex=00ff00", function() {
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in RGB", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });

  describe("Celsius to Fahrenheit ", function () {
          var url = "http://localhost:3000/celsiusToFahrenheit?celsius=0";

          it("returns status 200", function (done) {
              request(url, function (error, response, body) {
                  expect(response.statusCode).to.equal(200);
                  done();
              });
          });

          it("returns the temperature in Fahrenheit", function (done) {
              request(url, function (error, respons, body) {
                  expect(body).to.equal("32");
                  done();
              });
          });
      });

    describe("Fahrenheit to Celsius ", function () {
        var url = "http://localhost:3000/fahrenheitToCelsius?fahrenheit=32";

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the temperature in Celsius", function (done) {
            request(url, function (error, respons, body) {
                expect(body).to.equal("0");
                done();
            });
        });
    });
});