const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  const { name, email, phoneNumber, password, role } = req.body;

  try {
    let userEmail = await User.findOne({ email });
    let userPhoneNumber = await User.findOne({ phoneNumber });
    if (userEmail) {
      return res.status(400).json({ message: "Email already registered" });
    }
    if (userPhoneNumber) {
      return res
        .status(400)
        .json({ message: "Phone Number already registered" });
    }

    user = new User({
      name,
      email,
      phoneNumber,
      password,
      role
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({
          message: "User Registered Successfully !",
          authToken: token,
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
