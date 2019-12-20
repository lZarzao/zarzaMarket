const express = require("express")
const authRoutes = express.Router()
const passport = require("passport")
const bcrypt = require("bcryptjs")

const User = require("../models/User.model.js")

authRoutes.post("/signup", (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" })
    return
  }
  if (password.length < 2) {
    res
      .status(400)
      .json({
        message:
          "Please make your password at least 8 characters long for security purposes."
      });
    return;
  }
  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." })
      return
    }
    if (foundUser) {
      res.status(400).json({ message: "Username taken. Choose another one." })
      return
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass
    });
    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." })
        return;
      }
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." })
          return
        }
        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post("/edit", (req, res) => {
  const {username, userlastname, email, telefono, location, imageUrl} = req.body
  
  // const salt = bcrypt.genSaltSync(10);
  // const hashPass = bcrypt.hashSync(password, salt);

  User.findByIdAndUpdate(req.user.id, {
    username,
    userlastname,
    email,
    telefono,
    location,
    imageUrl
  })
    .then(x => res.status(200).json(x))
    .catch(err => {
      res.status(500).json({ message: "Updating went bad." });
    });
})

authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" })
      return
    }
    if (!theUser) {
      res.status(401).json(failureDetails)
      return
    }
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." })
        return
      }
      res.status(200).json(theUser)
    })
  })(req, res, next)
})

authRoutes.post("/logout", (req, res, next) => {
  req.logout()
  res.status(200).json({ message: "Log out success!" })
})

authRoutes.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user)
    return;
  }
  res.status(403).json({ message: "Unauthorized" })
})

authRoutes.get("/:id", (req, res) => {
  User.findById(req.params.id)
  .then(theUser => res.status(200).json({theUser}))
  .catch(err => res.status(500).json({err}))
})

module.exports = authRoutes;