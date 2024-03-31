const express = require("express");
const flights = require("../../Flight");

const router = express.Router();

router.get("/", (req, res) => {
  const { departureAirport, destinationAirport, travelDuration } = req.query;

  //console.log(flights.at(0)["Destination Airport"].replace(/\s+/g, ''))

  if (departureAirport && destinationAirport) {
    const filteredFlights = flights.filter(
      (flight) =>
        flight["Departure Airport"] === departureAirport &&
        flight["Destination Airport"].replace(/\s+/g, '') === destinationAirport
    );

    res.json(filteredFlights.length > 0 ? filteredFlights[0] : []);
  } else if (travelDuration) {
    const filteredFlights = flights.filter(
      (flight) => flight["Travel Duration (Hour)"] === parseInt(travelDuration)
    );
    res.json(filteredFlights);
  } else {
    res.json(flights);
  }
});

module.exports = router;
