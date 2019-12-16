const express = require("express");
const productRoutes = express.Router();

const Product = require("../models/Product.model.js");

productRoutes.post("/new", (req, res) => {
  const {
    name, category, subcategory, subsubcategory, price,
    negotiable, description, delivery, brand, modelCode} = req.body;
  Product.create({
    name, category, subcategory, subsubcategory, price,
    negotiable, description, delivery, brand, modelCode, creator: req.user._id
  })
    .then(newProduct => res.status(200).json(newProduct))
    .catch(err => {
      console.log("Error consultando la BBDD ", err);
      json({ message: "Saving user to database went wrong." });
    });
})

productRoutes.get("/all", (req, res) => {
  Product.find()
    .then(allProducts => res.status(200).json(allProducts))
    .catch(err => {
      console.log("Error consultando la BBDD ", err);
      json({ message: "Saving user to database went wrong." })
    })
})

productRoutes.get("/category/:id", (req, res) => {
  Product.find({ category: req.params.id })
    .then(allProducts => res.status(200).json(allProducts))
    .catch(err => {
      console.log("Error consultando la BBDD ", err);
      json({ message: "Saving user to database went wrong." });
    });
});

productRoutes.get("/", (req, res) => {
  Product.find({"creator": req.user._id})
    .then(allProducts => res.status(200).json(allProducts))
    .catch(err => {
      console.log("Error consultando la BBDD ", err);
      json({ message: "Saving user to database went wrong." })
    })
})

productRoutes.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .populate("creator")
    .then(newProduct => res.status(200).json(newProduct))
    .catch(err => {
      console.log("Error consultando la BBDD ", err)
      json({ message: "Saving user to database went wrong." })})
})

productRoutes.get("/:id/delete", (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then(deleteOne => res.status(200).json(deleteOne))
    .catch(err => {
      console.log("Error consultando la BBDD ", err)
      json({ message: "Saving user to database went wrong." })
    })
})

productRoutes.post("/:id/edit", (req, res) => {
  const { name, category, subcategory, subsubcategory, price,
    negotiable, description, delivery, brand, modelCode } = req.body
  Product.findByIdAndUpdate(req.params.id, {
    name, category, subcategory, subsubcategory, price,
    negotiable, description, delivery, brand, modelCode
  })
    .then(editOne => res.status(200).json(editOne))
    .catch(err => {
      console.log("Error consultando la BBDD ", err)
      json({ message: "Saving user to database went wrong." })
    })
})

module.exports = productRoutes