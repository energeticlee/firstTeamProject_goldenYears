const express = require("express");
const chairStandSchema = require("../models/test_1");
const armCurlSchema = require("../models/test_2");
const twoMinStepSchema = require("../models/test_3");
const router = express.Router();

//* Justin: I'll be sending post request for each test. {date, result, userId}
// Example, redirect to testLibrary page
router.put("/:testname", (req, res) => {
  let testName = req.params.testname;

  //* Validate incoming test route
  if (testName === "chairStandSchema") testName = chairStandSchema;
  if (testName === "armCurlSchema") testName = armCurlSchema;
  if (testName === "twoMinStepSchema") testName = twoMinStepSchema;

  testName.create({ date, result, user: id }, (err, createdResult) => {
    if (err) res.status(400).json({ err: "create result error" });
    else {
      console.log(createdResult);
      res.redirect("/testLibrary");
    }
  });
});

module.exports = router;
