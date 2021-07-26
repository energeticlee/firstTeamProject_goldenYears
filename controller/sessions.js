const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const userSchema = require("../models/user");

// on sessions form submit (log in)
router.post("/new", (req, res) => {
  userSchema.find({ email: req.body.email }, (err, foundUserList) => {
    // Database error
    if (err) {
      console.log(err);
      res.status(400).json({ error: "DataBase error" });
    } else if (foundUserList.length === 0) {
      // if found user is undefined/null not found etc
      console.log("No users found");
      res.status(400).json({ error: "No Users Found" });
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

module.exports = router;
