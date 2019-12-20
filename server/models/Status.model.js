const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("../models/User.model")
const Product = require("../models/Product.model")

const statusShema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    buyer: {type: Schema.Types.ObjectId, ref: "User"},
    status: {type: String, enum: ["pending", "sold"]}
  },
  {
    timestamps: true
  }
)

const StatusModel = mongoose.model("Status", statusShema);
module.exports = StatusModel;
