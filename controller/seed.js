const express = require("express");
const router = express.Router();
const seedSchema = require("../models/user");

const names = [
  { name: "Kevin", email: "helloKevin@123.com", password: "123" },
  { name: "bob", email: "helloBob@123.com", password: "1234" },
  { name: "farhan", email: "helloFarhan@123.com", password: "12356" },
  { name: "ashley", email: "helloAshley@123.com", password: "123455" },
  { name: "justin", email: "helloJustin@123.com", password: "124443" },
];

router.get("/", (req, res) => {
  seedSchema.deleteMany({}, (error, data) => {
    if (error) res.status(400).json({ error: "deleteError" });
  });
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
