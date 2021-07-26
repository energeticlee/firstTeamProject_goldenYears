const express = require("express");
const router = express.Router();
const {
  TestOneChairStand,
  TestTwoArmCurl,
  TestThree2MinStep,
} = require("../models/tests");
const { fakeDataTest1 } = require("../models/fakeDataTest1");

//* When create route for actual data. Retreive uniqueId from params

router.get("/test1", (req, res) => {
  TestOneChairStand.deleteMany({}, (err, data) => {
    if (err) res.status(400).json({ err: "Delete Fail" });
    else {
      TestOneChairStand.create(fakeDataTest1, (error, dataList) => {
        if (error) res.status(400).json({ error: "create fail" });
        else {
          //*
          res.redirect("/home");
        }
      });
    }
  });
});

router.get("/test2", (req, res) => {
  TestTwoArmCurl.deleteMany({}, (err, data) => {
    if (err) res.status(400).json({ err: "Delete Fail" });
    else {
      TestTwoArmCurl.create(fakeDataTest1, (error, dataList) => {
        if (error) res.status(400).json({ error: "create fail" });
        else {
          res.redirect("/home");
        }
      });
    }
  });
});

router.get("/test3", (req, res) => {
  TestThree2MinStep.deleteMany({}, (err, data) => {
    if (err) res.status(400).json({ err: "Delete Fail" });
    else {
      TestThree2MinStep.create(fakeDataTest1, (error, dataList) => {
        if (error) res.status(400).json({ error: "create fail" });
        else {
          res.redirect("/home");
        }
      });
    }
  });
});

module.exports = router;
