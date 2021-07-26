const express = require("express");
const router = express.Router();
const { TestOneChairStand } = require("../models/tests");

router.get("/", (req, res) => {
  TestOneChairStand.find({}, (err, foundTest) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundTest);
    }
  });
});

module.exports = router;
