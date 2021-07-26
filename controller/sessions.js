const express = require("express");
const bcrypt = require("bcrypt");
const sessions = express.Router();
const User = require("../models/users.js");

// on sessions form submit (log in)
sessions.post("/new", (req, res) => {
  User.findOne({ email: req.body.email }, (err, foundUser) => {
    // Database error
    if (err) {
      console.log(err);
      res.send("oops the db had a problem");
    } else if (!foundUser) {
      // if found user is undefined/null not found etc
      res.send('<a  href="/">Sorry, no user found </a>');
    } else {
      // user is found yay!
      // now let's check if passwords match
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // add the user to our session
        req.session.currentUser = foundUser;
        // redirect back to our home page
        res.redirect("/home");
      } else {
        // passwords do not match
        res.send('<a href="/"> password does not match </a>');
      }
    }
  });
});

module.exports = sessions;
