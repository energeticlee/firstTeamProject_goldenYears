const express = require("express");
const router = express.Router();
const { TestOneChairStand, TestTwoArmCurl, TestThree2MinStep } = require("../models/tests");

router.get("/1/:id", (req, res) => {
  const id = req.params.id
  TestOneChairStand.findbyId(id, (err, foundTest) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundTest);
    }
  });
});

router.get("/2/:id", (req, res) => {
  const id = req.params.id
  TestTwoArmCurl.find(id, (err, foundTest) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundTest);
    }
  });
});

router.get("/3/:id", (req, res) => {
  const id = req.params.id
  TestThree2MinStep.find(id, (err, foundTest) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundTest);
    }
  });
});


module.exports = router;
