const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");
const doctorSchema = require("../models/doctor");
const matchSchema = require("../models/invites");

router.get("/checkPendingMatches/:doctorId", (req, res) => {
  //find all pending invities sent by users to display in notification page using doctor id
  const doctorId = req.params.doctorId;
  matchSchema.find(
    { doctor: doctorId, status: "Pending" },
    (err, foundmatch) => {
      if (err) {
        res
          .status(400)
          .json({ error: "Database error when finding user invites" });
      } else {
        res.status(200).json(foundmatch);
      }
    }
  );
});
router.get("/checkMatches/:userId", (req, res) => {
  //check the status of the invite the user sent
  //Only one invite per user
  const patientId = req.params.userId;
  matchSchema.find({ patient: patientId }, (err, foundmatch) => {
    if (err) {
      res
        .status(400)
        .json({ error: "Database error when finding user invites" });
    } else {
      res.status(200).json(foundmatch);
    }
  });
});
router.post("/sendInvite", (req, res) => {
  //patient sends their id, doctor's email in the req.body
  const patientId = req.body.patientId;
  const doctorEmail = req.body.doctorEmail;
  doctorSchema.find({ email: doctorEmail }, (err, foundDoctor) => {
    const doctorId = foundDoctor._id;
    const newEntry = {
      status: "Pending",
      patient: patientId,
      doctor: doctorId,
    };
    matchSchema.create(newEntry, (err, newInvite) => {
      if (err) {
        res.status(400).json({ error: "Could not create an invite" });
      } else {
        res.status(200).json(newInvite);
      }
    });
  });
});
router.put("/declineInvite", (req, res) => {
  //find pending invites based on id sent in req.body
  //change status in invite to Declined
  res.status(200);
});
router.put("/acceptInvite", (req, res) => {
  //find pending invites based on id sent in req.body
  //change status in invite to Accepted
  //add patient id to doctor's my patients
  res.status(200);
});

module.exports = router;
