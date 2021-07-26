const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");
const bcrypt = require("bcrypt");

// Get One user by Id
router.get("/:id", (req, res) => {
	const id = req.params.id;
	userSchema.find({}, (err, foundUser) => {
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
	req.body.password = bcrypt.hashSync(
		req.body.password,
		bcrypt.genSaltSync(10)
	);
	userSchema.create(req.body, (error, createdUser) => {
		if (error) {
			res.status(400).json({ error: error.message });
		}
		res.status(200).json(createdUser);
	});
});

module.exports = router;
