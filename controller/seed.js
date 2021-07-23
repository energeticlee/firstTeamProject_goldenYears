const express = require("express");
const User = require("../models/user");
const router = express.Router();

const users = [
  {
    name: "Justin",
  },
  {
    name: "Farhan",
  },
  {
    name: "Kevin",
  },
  {
    name: "Ashley",
  },
];

router.get("/", (req, res) =>
  User.create(users, (err, data) => {
    console.log(data);
    res.redirect("/api/user/all");
  })
);

//* index => shows all the users
// router.get("/", (req, res) => {
//   User.find({}, (err, usersList) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     }
//     res.status(200).json(usersList);
//   });
// });

// //* Find 1 User by Id
// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   Users.findById(id, (err, user) => {
//     if (err) res.status(400).json({ err: err.message });
//     else res.status(200).json(user);
//   });
// });

// //* Create new user
// router.post("/", (req, res) => {
//   User.create(req.body, (err, createdUser) => {
//     if (err) res.status(400).json({ err: err.message });
//     else res.status(200).send(createdUser);
//     //* send? or json?
//   });
// });

// //* Delete user
// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   User.findByIdAndRemove(id, (err, removedUser) => {
//     if (err) res.status(400).json({ err: err.message });
//     else res.status(200).json(removedUser);
//   });
// });

// //* Update user
// router.put("/:id", (req, res) => {
//   const id = req.params.id;
//   User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
//     if (err) res.status(400).json({ err: err.message });
//     else res.status(200).json(updatedUser);
//   });
// });

module.exports = router;
