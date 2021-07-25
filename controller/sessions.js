const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

Router.get("/", (req, res) => {
  // Render login page
});

// Login page logic
// Router.post("/", (req, res) => {
//   User.findOne({ name: req.body.name }, (err, foundUser) => {
//     if (err) {
//       console.log(err);
//       res.send("oops the db had a problem");
//     } else if (!foundUser) {
//       // if found user is undefined/null not found etc
//       res.send('<a  href="/">Sorry, no user found </a>');
//     } else {
//       // user is found yay!
//       // now let's check if passwords match
//       if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//         // add the user to our session
//         req.session.currentUser = foundUser;
//         // redirect back to our home page
//         res.redirect("/fruits");
//       } else {
//         // passwords do not match
//         console.log(req.body.password);
//         console.log(foundUser.password);
//         res.send('<a href="/"> password does not match </a>');
//       }
//     }
//   });
// });
