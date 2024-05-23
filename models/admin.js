const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Defining Admin Schema
const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "admin" },
});

//Saving the password inf adminSchema if password is modified
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(20);
  this.password = await bcrypt.hash(this.password, salt);
});
module.exports = mongoose.model("Admin", adminSchema);
