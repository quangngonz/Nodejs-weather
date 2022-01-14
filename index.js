const express = require("express");
const path = require("path");
const { getWeather } = require("./controllers/getWeather");

require("dotenv").config();

const app = express();

app.get("/", function (_req, res) {
  res.sendFile(path.join(__dirname, "./pages/index.html"));
});

app.get("/weather", getWeather);

app.post("/", function (_req, res) {
  res.send("POST request to the homepage");
});

console.log("Hosting on port " + process.env.PORT || 3000);

app.listen(process.env.PORT || 3000);
console.log(
  "Server started at http://localhost:".concat(process.env.PORT || 3000)
);
