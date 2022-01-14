const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

console.log("Hosting on port " + process.env.PORT || 3000);
console.log("URL: http://localhost:".concat(process.env.PORT || 3000));

const KtoC = (K) => {
  return Math.floor(K - 273.15);
};

app.get("/", function (req, res) {
  res.send("Hello World!");
});

//get weather from api
app.get("/weather", function (req, res) {
  const city = req.query.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
  axios
    .get(url)
    .then(function (response) {
      res.send(
        "The weather temperature in " +
          city +
          " is " +
          KtoC(response.data.main.temp) +
          "ºC the weather description is " +
          response.data.weather[0].description
      );
    })
    .then(() => {
      console.log("Request completed");
    })
    .catch(function (error) {
      res.send("Error: " + error);
    });
});

app.listen(process.env.PORT || 3000);
