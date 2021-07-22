const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/seed", (req, res) => {
  User.remove({}, (error, fruits) => {
    User.create(
      [
        {
          name: "Justin",
          email: "justin@123.com",
          password: "123456",
          age: 28,
          gender: "M",
          height: 171,
          weight: 68,
          doctor: false,
        },
        {
          name: "Farhan",
          email: "farhan@123.com",
          password: "123456",
          age: 28,
          gender: "M",
          height: 178,
          weight: 72,
          doctor: true,
        },
        {
          name: "Kevin",
          email: "kevin@123.com",
          password: "123456",
          age: 24,
          gender: "M",
          height: 175,
          weight: 70,
          doctor: false,
        },
        {
          name: "Ashley",
          email: "ashley@123.com",
          password: "123456",
          age: 24,
          gender: "F",
          height: 168,
          weight: 55,
          doctor: false,
        },
      ],
      (err, data) => {
        res.redirect("/home");
      }
    );
  });
});

//* index => shows all the users
router.get("/", (req, res) => {
  User.find({}, (err, usersList) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(usersList);
  });
});

//* Find 1 User by Id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id, (err, user) => {
    if (err) res.status(400).json({ err: err.message });
    else res.status(200).json(user);
  });
});

//* Create new user
router.post("/", (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) res.status(400).json({ err: err.message });
    else res.status(200).send(createdUser);
    //* send? or json?
  });
});

//* Delete user
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id, (err, removedUser) => {
    if (err) res.status(400).json({ err: err.message });
    else res.status(200).json(removedUser);
  });
});

//* Update user
router.put("/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    if (err) res.status(400).json({ err: err.message });
    else res.status(200).json(updatedUser);
  });
});

module.exports = router;
