require("dotenv").config();
require("./models");
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
require("./config/database").connect();
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);

app.get("/", requireAuth, (req, res) => {
  res.send(`your email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("corriendo en puerto 3000");
});
