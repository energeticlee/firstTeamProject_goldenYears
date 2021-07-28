// Express - Dependencies
const express = require("express");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

// Mongoose - Dependencies
const mongoose = require("mongoose");

// Express - Configurations
const app = express();
const port = process.env.PORT || 3333;

// Mongoose - Configurations
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Middleware configurations

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3003",
  "https://fathomless-sierra-68956.herokuapp.com",
];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

// Middlerware Linked => Express
app.use(
  session({
    secret: "golden-years", //some random string
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000,
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("./client/src"));

//Import/Require Controllers for express routing
const sessionController = require("./controller/sessions");
const doctorSessionController = require("./controller/doctorSession");
const seedController = require("./controller/seed");
const userController = require("./controller/user");
const fitnessTestController = require("./controller/fitnessTest");
const seedtestdata = require("./controller/fakeTestDataController");
const usertestdata = require("./controller/userTestData");
const doctorController = require("./controller/doctor");

//Routes
app.use("/api/session", sessionController);
app.use("/api/doctorSession", doctorSessionController);
app.use("/api/seed", seedController);
app.use("/api/user", userController);
app.use("/api/fitnesstest", fitnessTestController);
app.use("/api/seedtestdata", seedtestdata);
app.use("/api/usertestdata", usertestdata);
app.use("/api/doctor", doctorController);

// Server Linked => Database
mongoose.connection.once("open", () => {
  console.log("Connected to mongo");
});

//Server Listening
app.listen(port, () => {
  console.log("Listening on PORT:", port);
});
