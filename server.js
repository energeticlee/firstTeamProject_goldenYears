//Dependencies - Express
const express = require("express");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
const methodOverride = require("method-override");

//Import Models - Mongoose

//Dependencies - Mongoose
const mongoose = require("mongoose");

//Configurations - Express
const app = express();
const port = process.env.PORT;
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3003",
  "https://fathomless-sierra-68956.herokuapp.com",
];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors());

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Configurations = Mongoose
mongoose.connect("mongodb://localhost:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.once("open", () => {
  console.log("Connected to mongo");
});

//Import/Require Controllers for express routing

//Routes (app.use)
app.get("/", (req, res) => {
  res.send("You have reached express");
});

const seedController = require("./controller/seed");
app.use("/api/seed", seedController);

const userController = require("./controller/user");
app.use("/api/user", userController);

//Server Listening
app.listen(port, () => {
  console.log("Listening on PORT:", port);
});
