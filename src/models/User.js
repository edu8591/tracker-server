const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    password: true,
    required: true,
  },
});

model("User", userSchema);
