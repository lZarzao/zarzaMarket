const express = require("express");
const statusRoutes = express.Router();

const Status = require("../models/Status.model.js");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

statusRoutes.post("/buy", (req, res) => {
  console.log(req.body)
  const { product, status, creator } = req.body;
  Status.create({
    product,
    status,
    creator,
    buyer: req.user._id
  })
    .then(newStatus => res.status(200).json(newStatus))
    .catch(err => {
      res
        .status(500)
        .json({ message: "Saving user to database went wrong.", err });
    })
})

statusRoutes.get("/getStatus", (req, res) => {
  Status.find({buyer : req.user._id})
    .populate("product")
    .populate({ path: "product", populate: { path: "creator", model: "User" } })
    .populate("buyer")
    .then(allProducts => res.status(200).json(allProducts))
    .catch(err => {
      res.status(500).json({
        message: "Saving user to database went wrong."
      })
    })
})

statusRoutes.get("/getSold", (req, res) => {
  Status.find({ creator: req.user._id })
    .populate("product")
    .populate("buyer")
    .then(allProducts => res.status(200).json(allProducts))
    .catch(err => {
      res.status(500).json({
        message: "Saving user to database went wrong."
      })
    })
})

module.exports = statusRoutes;
