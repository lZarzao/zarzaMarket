const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    userlastname: String,
    email: String,
    telefono: String,
    password: String,
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;