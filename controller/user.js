const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

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
  userSchema.create(req.body, (error, createdUser) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdUser);
  });
});

module.exports = router;
