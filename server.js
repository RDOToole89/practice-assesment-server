const express = require("express");
const app = express();
const doctorsJSON = require("./patient-json/doctors.json");
const patientsJSON = require("./patient-json/patients.json");
const dbJSON = require("./patient-json/db.json");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
// MIDDLEWARE FOR PARSING JSON
app.use(express.json());
// FIGURE OUT DIFFERENCE BETWEEN BODYPARSER AND STANDARD EXPRESS MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// MIDDLEWARE FOR PARSING POST / PUT REQUESTS BODY
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello! This is the patients API</h1>");
});

app.get("/patients", (req, res) => {
  res.send(patientsJSON);
});

app.post("/patients", (req, res) => {
  const patient = { ...req.body };

  const newPatient = {
    id: patientsJSON[patientsJSON.length - 1].id + 1,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    gender: req.body.gender,
    dateOfBirth: req.body.birthday,
    email: req.body.email,
    phoneNumber: req.body.phone,
    prescriptions: ["Jack Daniels", "Ibuprofen", "Paracetamol"],
    doctorId: Math.floor(Math.random() * 3) + 1,
  };

  console.log("NEW PATIENT", newPatient);

  patientsJSON.push(newPatient);

  console.log("You reached the PATIENTS post route!");
  res.send(`POST /Patients repsonse,

          // PATIENT DETAILS // 
          name: ${patient.firstname}
          name: ${patient.lastname}
          name: ${patient.email}
          name: ${patient.phone}
          name: ${patient.gender}
          name: ${patient.birthday}
        }`);
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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
