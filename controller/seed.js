const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

const names = [
  { name: "Kevin" },
  { name: "bob" },
  { name: "farhan" },
  { name: "ashley" },
  { name: "justin" },
];

const test_1 = [
  { name: "Kevin" },
  { name: "bob" },
  { name: "farhan" },
  { name: "ashley" },
  { name: "justin" },
];

router.get("/newusers", (req, res) => {
  userSchema.create(names, (err, nameList) => {
    if (err) {
      console.log(err);
    } else {
      console.log(nameList);
      res.redirect("/api/user");
    }
  });
});
router.get("/deleteusers", (req, res) => {
  userSchema.deleteMany(() => {
    res.redirect("/api/user");
  });
});

module.exports = router;
