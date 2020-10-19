const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!, this is the patients API");
});

app.get("/patients", (req, res) => {
  res.send("patients");
});

app.get("/doctors", (req, res) => {
  res.send("doctors");
});

app.listen(3000, () => {
  console.log("Listening on port: 3000");
});
