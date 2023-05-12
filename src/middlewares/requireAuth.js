const jwt = require("jsonwebtoken");
const { model } = require("mongoose");

const User = model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "you must be signed in." });
  }

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }
    const { userId } = payload;

    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
