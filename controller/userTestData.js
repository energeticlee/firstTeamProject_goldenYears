const express = require("express");
const router = express.Router();
const { TestOneChairStand, TestTwoArmCurl, TestThree2MinStep } = require("../models/tests");

router.get("/1", (req, res) => {
  TestOneChairStand.find({}, (err, foundTest) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundTest);
    }
  });
});

router.get("/2", (req, res) => {
  TestTwoArmCurl.find({}, (err, foundTest) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundTest);
    }
  });
});

router.get("/3", (req, res) => {
  TestThree2MinStep.find({}, (err, foundTest) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundTest);
    }
  });
});


module.exports = router;
