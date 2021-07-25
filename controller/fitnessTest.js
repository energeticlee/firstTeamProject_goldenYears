const express = require("express");
const chairStandSchema = require("../models/test_1");
const armCurlSchema = require("../models/test_2");
const twoMinStepSchema = require("../models/test_3");
const router = express.Router();

//* Justin: I'll be sending post request for each test. {date, result, userId}
// Example, redirect to testLibrary page
router.post("/:testname", (req, res) => {
  let testName = req.params.testname;
  const date = req.body.date;
  const result = req.body.result;
  const id = req.body.id;

  //* Validate incoming test route
  if (testName === "chairstand") testName = chairStandSchema;
  if (testName === "armcurl") testName = armCurlSchema;
  if (testName === "twominstep") testName = twoMinStepSchema;

  armCurlSchema.create({ date, result }, (err, createdResult) => {
    if (err) res.status(400).json({ err: "create result error" });
    else {
      console.log(createdResult);
      res.redirect("/testLibrary");
    }
  });
});

module.exports = router;
