const express = require("express");
const app = express();
const doctorsJSON = require("./patient-json/doctors.json");
const patientsJSON = require("./patient-json/patients.json");
const dbJSON = require("./patient-json/db.json");

console.log(doctorsJSON);

app.get("/", (req, res) => {
  res.send("Hello World!, this is the patients API");
});

app.get("/patients", (req, res) => {
  res.send(patientsJSON);
});

app.get("/doctors", (req, res) => {
  res.send(doctorsJSON);
});

app.get("/db", (req, res) => {
  res.send(dbJSON);
});

app.listen(4000, () => {
  console.log("Listening on port: 4000");
});
