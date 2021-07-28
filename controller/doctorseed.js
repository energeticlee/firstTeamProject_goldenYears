const express = require("express");
const router = express.Router();
const doctorSchema = require("../models/doctor");

const names = [
  {
    name: "Simon",
    email: "Simon@gmail.com",
    password: "Simon",
    age: 40,
    gender: "M",
  },
  {
    name: "Sam",
    email: "Sam@gmail.com",
    password: "Sam",
    age: 27,
    gender: "M",
  },
  {
    name: "Jun Siang",
    email: "JunSiang@gmail.com",
    password: "JunSiang",
    age: 26,
    gender: "M",
  },
];

router.get("/", (req, res) => {
  //   doctorSchema.deleteMany({}, (error, data) => {
  //     if (error) res.status(400).json({ error: "deleteError" });
  //   });
  doctorSchema.create(names, (err, nameList) => {
    if (err) {
      console.log(err);
    } else {
      console.log(nameList);
      res.redirect("/");
    }
  });
});

module.exports = router;
