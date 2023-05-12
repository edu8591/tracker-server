require("dotenv").config();
require("./models");
const express = require("express");
const authRoutes = require("./routes/authRoutes");
require("./config/database").connect();

const app = express();

app.use(express.json());
app.use(authRoutes);

app.get("/", (req, res) => {
  res.send("conectado");
});

app.listen(3000, () => {
  console.log("corriendo en puerto 3000");
});
