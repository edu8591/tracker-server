const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const path = require("path");
const { model } = require("mongoose");

const router = express.Router();
const Track = model("Track");

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const tracks = await Track.find({ userId });
    res.status(200).send(tracks);
  } catch (err) {}
});

router.post("/tracks", async (req, res) => {
  const { _id: userId } = req.user;
  const { name, locations } = req.body;

  if (!name || !locations) {
    res.status(422).send({ error: "You must provide a name and locations" });
  }
  try {
    const track = new Track({ name, locations, userId });
    await track.save();
    res.status(201).send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
