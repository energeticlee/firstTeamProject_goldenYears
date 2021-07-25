const express = require("express");
const chairStandSchema = require("../models/test_1");
const armCurlSchema = require("../models/test_2");
const twoMinStepSchema = require("../models/test_3");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("HELLO WORLD!!!!");
});
//* Justin: I'll be sending post request for each test. {date, result, userId}
// Example, redirect to testLibrary page
router.post("/", (req, res) => {
  // let testName = req.params.testname;

  //* Validate incoming test route
  // if (testName === "chairstand") testName = chairStandSchema;
  // if (testName === "armcurl") testName = armCurlSchema;
  // if (testName === "twominstep") testName = twoMinStepSchema;

  // console.log("Hello world");
  console.log(req.body);
  armCurlSchema.create(req.body, (err, createdResult) => {
    if (err) res.status(400).json({ err: "create result error" });
    else {
      res.send(createdResult);
    }
  });
});

module.exports = router;
