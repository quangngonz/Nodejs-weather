const axios = require("axios");

const KtoC = (K) => {
  return Math.floor(K - 273.15);
};

const getWeather = (req, res) => {
  const city = req.query.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      res.send(
        "The weather temperature in " +
          response.data.name +
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
};

module.exports = { getWeather };
