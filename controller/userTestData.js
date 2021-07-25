const express = require("express");
const router = express.Router();
const testSchema = require("../models/test_1");

router.get("/", (req, res) => {
    testSchema.find({}, (err, foundTest) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundTest);
    }
  });
});

module.exports = router;
