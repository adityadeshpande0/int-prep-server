const express = require("express");
const router = express.Router();
const { register } = require("../controllers/userRegisterController");
const { login } = require("../controllers/loginController");
const {
  scheduleInterviewController,
} = require("../controllers/scheduleInterviewController");
const authenticateToken = require("../middlewares/authenticateToken");

router.post("/registerUser", register);

router.post("/loginuser", login);

router.post("/scheduleInterview",authenticateToken, scheduleInterviewController);

module.exports = router;
