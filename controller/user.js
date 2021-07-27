const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");
const bcrypt = require("bcrypt");

// Get One user by Id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  userSchema.findById(id, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundUser);
    }
  });
});

// Get all users
router.get("/", (req, res) => {
  userSchema.find({}, (err, foundUsers) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(foundUsers);
    }
  });
});

// Create User
router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  userSchema.create(req.body, (error, createdUser) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdUser);
  });
});

// Update User

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = {
    name: req.body.name === undefined ? " " : req.body.name,
    email: req.body.email === undefined ? " " : req.body.email,
    password: req.body.password === undefined ? " " : req.body.password,
    photo: req.body.photo === undefined ? " " : req.body.photo,
    age: req.body.age === undefined ? 0 : req.body.age,
    gender: req.body.gender === undefined ? " " : req.body.gender,
    height: req.body.height === undefined ? 0 : req.body.height,
    weight: req.body.weight === undefined ? 0 : req.body.weight,
    healthCondition: [
      req.body.healthCondition === undefined ? " " : req.body.healthCondition,
    ],
    myDoctor: req.body.myDoctor === "" ? {} : req.body.myDoctor,
  };
  console.log(updatedUser);
  userSchema.findByIdAndUpdate(
    id,
    updatedUser,
    { new: true },
    (err, updatedHoliday) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedHoliday);
    }
  );
});

module.exports = router;
