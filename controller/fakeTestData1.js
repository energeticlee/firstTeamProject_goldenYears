const express = require("express");
const router = express.Router();
const test1 = require("../models/test_1");
const { fakeDataTest1 } = require("../models/fakeDataTest1");

//* When create route for actual data. Retreive uniqueId from params

router.get("/", (req, res) => {
  test1.deleteMany({}, (err, data) => {
    if (err) res.status(400).json({ err: "Delete Fail" });
    else {
      test1.create(fakeDataTest1, (error, dataList) => {
        if (error) res.status(400).json({ error: "Create Fail" });
        else {
          res.redirect("/home");
        }
      });
    }
  });
});

module.exports = router;
