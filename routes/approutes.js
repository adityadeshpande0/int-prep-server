const express = require("express");
const router = express.Router();
const { register } = require("../controllers/userRegisterController");
const { login } = require("../controllers/loginController");
const {
  scheduleInterviewController,
} = require("../controllers/scheduleInterviewController");
const authenticateToken = require("../middlewares/authenticateToken");
const { getInterviewListController } = require("../controllers/getInterviewListController");
const { withdrawRequestController } = require("../controllers/withdrawRequestController");

router.post("/registerUser", register);

router.post("/loginuser", login);

router.post("/scheduleInterview",authenticateToken, scheduleInterviewController);

router.get('/interview-requests', authenticateToken, getInterviewListController);

router.delete('/interview-requests/:requestId/withdraw', authenticateToken, withdrawRequestController);

module.exports = router;
