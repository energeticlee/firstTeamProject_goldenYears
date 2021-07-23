const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

router.get("/", (req, res) => {
  userSchema.find({}, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundUser);
    }
  });
});

module.exports = router;
