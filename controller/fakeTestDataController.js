const express = require("express");
const router = express.Router();
const {
  TestOneChairStand,
  TestTwoArmCurl,
  TestThree2MinStep,
} = require("../models/tests");
const {faketestdata1} = require("../models/faketestdata1");
const {faketestdata2} = require("../models/faketestdata2");
const {faketestdata3} = require("../models/faketestdata3");

//* When create route for actual data. Retreive uniqueId from params
router.get("/test1", (req, res) => {
  TestOneChairStand.deleteMany({}, (err, data) => {
    if (err) res.status(400).json({ err: "Delete Fail" });
    else {
      TestOneChairStand.create(faketestdata1, (error, dataList) => {
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
      TestTwoArmCurl.create(faketestdata2, (error, dataList) => {
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
      TestThree2MinStep.create(faketestdata3, (error, dataList) => {
        if (error) res.status(400).json({ error: "create fail" });
        else {
          res.redirect("/home");
        }
      });
    }
  });
});
module.exports = router;