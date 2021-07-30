const { Router } = require("express");
const {
  TestOneChairStand,
  TestTwoArmCurl,
  TestThree2MinStep,
} = require("../models/tests");
const router = Router();

router.get("/", (req, res) => {
  res.send("HELLO WORLD!!!!");
});
//* Justin: I'll be sending post request for each test. {date, result, userId}
// Example, redirect to testLibrary page

router.post("/:testname", (req, res) => {
  let testName = req.params.testname;

  //* Validate incoming test route
  if (testName === "chairstand") testName = TestOneChairStand;
  if (testName === "armcurl") testName = TestTwoArmCurl;
  if (testName === "twominstep") testName = TestThree2MinStep;

  testName.create(req.body, (err, createdResult) => {
    if (err) res.status(400).json({ err: "create result error" });
    else {
      //* createdResult successful => Route to test library (react useHistory hook)
      res.status(200).json(createdResult);
    }
  });
});

module.exports = router;
