const express = require("express");
const router = express.Router();
const seedSchema = require("../models/user");

const names = [
  { name: "Kevin" },
  { name: "bob" },
  { name: "farhan" },
  { name: "ashley" },
  { name: "justin" },
];

router.get("/", (req, res) => {
  seedSchema.create(names, (err, nameList) => {
    if (err) {
      console.log(err);
    } else {
      console.log(nameList);
      res.redirect("/api/user");
    }
  });
});

module.exports = router;
