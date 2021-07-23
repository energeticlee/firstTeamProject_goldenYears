// const mongoose = require("mongoose");
const User = require("../models/user");
const express = require("express");
const router = express.Router();

// * index => shows all the users
router.get("/all", (req, res) => {
  User.find((err, usersList) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(usersList);
  });
});

module.exports = router;
