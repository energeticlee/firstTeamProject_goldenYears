const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");
const doctorSchema = require("../models/doctor");
const bcrypt = require("bcrypt");

// Get One user by Id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  userSchema
    .findById(id)
    .populate("myDoctor", "email")
    .exec()
    .then((foundUser) => {
      if (!foundUser) {
        res.status(404).json({ error: "not found" });
      } else {
        console.log(foundUser);
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
    } else {
      res.status(200).json(createdUser);
    }
  });
});

// Update User

router.put("/:id", (req, res) => {
  const id = req.params.id;
  // Set up a updted User Object
  console.log(req.body.myDoctor);
  console.log(req.body);
  const updatedUser = {
    name: req.body.name === undefined ? undefined : req.body.name,
    email: req.body.email === undefined ? undefined : req.body.email,
    password: req.body.password === undefined ? undefined : req.body.password,
    photo: req.body.photo === undefined ? undefined : req.body.photo,
    age: req.body.age === undefined ? 0 : req.body.age,
    gender: req.body.gender === undefined ? undefined : req.body.gender,
    height: req.body.height === undefined ? 0 : req.body.height,
    weight: req.body.weight === undefined ? 0 : req.body.weight,
    healthCondition:
      req.body.healthCondition === undefined
        ? undefined
        : req.body.healthCondition,
    myDoctor:
      req.body.myDoctor === null ? null : req.body.myDoctor.toLowerCase(),
  };

  // Because the client will send a doctor email instead of an Id, we need to check if the email exists as a valid doctor
  doctorSchema.find({ email: updatedUser.myDoctor }, (err, foundDoctor) => {
    // if no doctor is found, err thrown
    foundDoctor = foundDoctor[0];

    if (err) {
      res.status(400).json({ error: "No such doctor exists" });
    }
    // if doctor is found, email in updated User will be replaced by the id of the doctor
    updatedUser.myDoctor = foundDoctor.id;
    updatedUser.myDoctor = foundDoctor._id;

    // Update the doctor's patient array as the user's id
    foundDoctor.myPendingPatients =
      foundDoctor.myPendingPatients === undefined
        ? [id]
        : foundDoctor.myPendingPatients.concat([id]);

    // find and update with new doctor object
    doctorSchema.findByIdAndUpdate(
      foundDoctor._id,
      foundDoctor,
      (err, updatedDoctor) => {
        if (err) {
          res.status(400).json({ error: "error in updating doctor schema" });
        }
      }
    );

    // find and update the User's schema with new information using the updated user object
    userSchema.findByIdAndUpdate(
      id,
      updatedUser,
      { new: true },
      (err, updatedHoliday) => {
        if (err) {
          res.status(400).json({ error: "error in updating user's profile" });
        }
        res.status(200).json(updatedHoliday);
      }
    );
  });
});

module.exports = router;
