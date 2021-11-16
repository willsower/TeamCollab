const User = require("../models/user");
// const Methods = require ("../middleware/registerAuth");

//Login
const userLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.redirect("/login");
  }

  User.findOne({ email: email }, (err, user) => {
    if (err) return next(err);

    if (user) {
      user.checkPassword(password, (err, result) => {
        if (err) return next(err);

        if (!result) {
          console.log("Wrong Password");
          res.send({ message: "wrong password" });
        } else {
          console.log("Login Success");
          // res.send({ message: "login sucess", user: user });
          res.redirect("https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications");
        }
      });
    } else {
      console.log("Not registered (no email)");
      res.send("not register");
    }
  });
};

// Sign Up
const userRegister = (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      console.log("USER EXISTS");
      res.send({ err: "User already exists" });
    } else {
      const user = new User({ email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          console.log("SUCCESS");
          res.send({ message: "sucessfull" });
          res.redirect("http://localhost:3001/home");
        }
      });
    }
  });
};

module.exports = {
  userLogin,
  userRegister,
};
