require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
require("./config/database").connect();

const app = express();

app.get("/", (req, res) => {
  res.send("conectado");
});

app.listen(3000, () => {
  console.log("corriendo en puerto 3000");
});
