const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Allows you to read env files
require("dotenv").config();

var usersRouter = require('./routes/users.routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
// app.use(expressValidator())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
() => {
  console.log("connected to DB");
};

mongoose.Promise = global.Promise;

// Routers
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(err.status || 404).json({
    message: "No such route exists",
  });
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message",
  });
});

app.listen(3001, () => console.log("Server is running"));
