const express = require("express");
const router = express.Router();
const { register } = require("../controllers/registerController");
const { login } = require("../controllers/loginController");

router.post("/registerUser", register);

router.post("/loginuser", login);

module.exports = router;