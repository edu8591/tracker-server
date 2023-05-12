const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

exports.connect = () => {
  mongoose.connect(MONGODB_URI);
  mongoose.connection.on("connected", () => {
    console.log("Connection to MongoDB successfull");
  });
  mongoose.connection.on("error", (err) => {
    console.error("Error conenction to MongoDB", err);
  });
};
