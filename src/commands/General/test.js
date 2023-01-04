var zombie = require("zombie");
var assert = require("assert");

zombie.visit("http://www.orbitz.com/", function (err, browser, status) {
  console.log(browser.window.location.href);
  console.log(browser.html());
  browser.
    clickLink('#flightsTab', function(error, browser) {
      browser.
        fill("airOrigin", "DTW").
        fill("airDestination", "SFO").
        fill("airStartDate", "06/11/2011").
        fill("airEndDate", "06/17/2011").
        pressButton("Find Flights", function(error, browser) {
          assert.ok(
            browser.text().
            match(/Emission estimates powered by Brighter Planet/) > 0);
        });
    });
});
