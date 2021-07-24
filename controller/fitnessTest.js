const express = require("express");
const armCurlSchema = require("../models/test_2");
const router = express.Router();

//* Justin: I'll be sending post request for each test. {date, result, userId}
// Example, redirect to testLibrary page
router.get("/", (req, res) => {
  armCurlSchema.create({ date, result, user: id }, (err, createdResult) => {
    if (err) res.status(400).json({ err: "create result error" });
    else {
      console.log(createdResult);
      res.redirect("/testLibrary");
    }
  });
});

module.exports = Router;
