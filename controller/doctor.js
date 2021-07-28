const express = require("express");
const router = express.Router();
const doctorSchema = require("../models/doctor");
const bcrypt = require("bcrypt");

// Get One user by Id
router.get("/pending/:id", (req, res) => {
  const id = req.params.id;
  doctorSchema
    .findById(id)
    .populate("myPendingPatients")
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

router.get("/accepted/:id", (req, res) => {
  const id = req.params.id;
  doctorSchema
    .findById(id)
    .populate("myPatients")
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

router.get("/:id", (req, res) => {
  const id = req.params.id;
  doctorSchema.findById(id).then((foundUser) => {
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
  doctorSchema.find({}, (err, foundUsers) => {
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
  doctorSchema.create(req.body, (error, createdUser) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(200).json(createdUser);
    }
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = {
    name: req.body.name === undefined ? undefined : req.body.name,
    email: req.body.email === undefined ? undefined : req.body.email,
    password: req.body.password === undefined ? undefined : req.body.password,
    photo: req.body.photo === undefined ? undefined : req.body.photo,
    age: req.body.age === undefined ? 0 : req.body.age,
  };
  doctorSchema.findByIdAndUpdate(id, updatedUser, (err, updatedDoctor) => {
    if (err) {
      res.status(400).json({ error: "error in updating doctor schema" });
    } else {
      res.status(200).json(updatedDoctor);
    }
  });
});

router.put("/acceptPatient/:userid", (req, res) => {
  const userid = req.body.userId;
  const doctorid = req.body.doctorId;
  const updatedPatientArray = {
    myPatients: [],
    myPendingPatients: [],
  };
  doctorSchema.findById(doctorid, (err, foundDoctor) => {
    if (err) {
      res
        .status(400)
        .json({ error: "error in finding doctor in doctor schema" });
    } else {
      updatedPatientArray.myPatients.push(userid);
      console.log(foundDoctor);
      for (let k = 0; k < foundDoctor.myPatients.length; k++) {
        updatedPatientArray.myPatients.push(foundDoctor.myPatients[k]);
      }

      console.log(updatedPatientArray);
      console.log(updatedPatientArray);
      for (let i = 0; i < foundDoctor.myPendingPatients.length; i++) {
        if (foundDoctor.myPendingPatients[i].toString() !== userid) {
          updatedPatientArray.myPendingPatients.push(
            foundDoctor.myPendingPatients[i]
          );
        }
      }

      doctorSchema.findByIdAndUpdate(
        doctorid,
        updatedPatientArray,
        (err, updatedDoctor) => {
          if (err) {
            res.status(400).json({ error: "error in updating doctor schema" });
          } else {
            res.status(200).json(updatedDoctor);
          }
        }
      );
    }
  });
});

module.exports = router;
