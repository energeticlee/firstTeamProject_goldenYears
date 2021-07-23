const express = require("express");
const router = express.Router();
const seedSchema = require("../models/user");

router.get("/", (req, res) => {
  seedSchema.find({}, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundUser);
    }
  });
});

module.exports = router;
