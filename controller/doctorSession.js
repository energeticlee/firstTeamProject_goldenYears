const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const doctorSchema = require("../models/doctor");

// Check Session
router.get("/", (req, res) => {
  const isAuthenticated = req.session.currentUser;
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    res.status(400).json({ error: "Not Authenticated" });
  } else {
    res.status(200).json(req.session.currentUser);
  }
});

// on sessions form submit (log in)
router.post("/new", (req, res) => {
  doctorSchema.find({ email: req.body.email }, (err, foundUserList) => {
    // Database error
    if (err) {
      console.log(err);
      res.status(400).json({ error: "DataBase error" });
    } else if (foundUserList.length === 0) {
      // if found user is undefined/null not found etc
      console.log("No user found.");
      res.status(400).json({
        error:
          "No user found, please register or enter your login details again.",
      });
    } else if (foundUserList.length !== 0) {
      // user is found yay!
      for (let i = 0; i < foundUserList.length; i++) {
        if (bcrypt.compareSync(req.body.password, foundUserList[i].password)) {
          // add the user to our session
          req.session.currentUser = foundUserList[i];
          // redirect back to our home page
          res.status(200).json(foundUserList[i]);
          break;
        }
      }
      // now let's check if passwords match
    }
  });
});

router.get("/hello", (req, res) => {
  console.log("in server");
  res.status(200).clearCookie("connect.sid", {
    path: "/",
  });
  req.session.destroy();
});

module.exports = router;
