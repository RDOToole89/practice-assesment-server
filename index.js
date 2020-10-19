const express = require("express");
const app = express();
const doctorsJSON = require("./patient-json/doctors.json");
const patientsJSON = require("./patient-json/patients.json");
const dbJSON = require("./patient-json/db.json");

app.get("/", (req, res) => {
  res.send("<h1>Hello! This is the patients API</h1>");
});

app.get("/patients", (req, res) => {
  res.send(patientsJSON);
});

app.get("/patients/:id", (req, res) => {
  const paramId = req.params.id;

  const patient = patientsJSON.find((patient) => patient.id === paramId);
  res.send(patient);
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
