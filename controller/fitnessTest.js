const express = require("express");
<<<<<<< HEAD
const armCurlSchema = require("../models/test_2");
=======
const chairStandSchema = require("../models/test_1");
const armCurlSchema = require("../models/test_2");
const twoMinStepSchema = require("../models/test_3");
>>>>>>> 81fc90221559d34293f0b2de11187d0592cf33b1
const router = express.Router();

//* Justin: I'll be sending post request for each test. {date, result, userId}
// Example, redirect to testLibrary page
<<<<<<< HEAD
router.get("/", (req, res) => {
  armCurlSchema.create({ date, result, user: id }, (err, createdResult) => {
=======
router.put("/:testname", (req, res) => {
  let testName = req.params.testname;

  //* Validate incoming test route
  if (testName === "chairStandSchema") testName = chairStandSchema;
  if (testName === "armCurlSchema") testName = armCurlSchema;
  if (testName === "twoMinStepSchema") testName = twoMinStepSchema;

  testName.create({ date, result, user: id }, (err, createdResult) => {
>>>>>>> 81fc90221559d34293f0b2de11187d0592cf33b1
    if (err) res.status(400).json({ err: "create result error" });
    else {
      console.log(createdResult);
      res.redirect("/testLibrary");
    }
  });
});

<<<<<<< HEAD
module.exports = Router;
=======
module.exports = router;
>>>>>>> 81fc90221559d34293f0b2de11187d0592cf33b1
