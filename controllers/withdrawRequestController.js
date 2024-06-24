const InterviewRequest = require("../models/bookings");

exports.withdrawRequestController = async (req, res) => {
  try {
    const requestId = req.params.requestId;
    const userId = req.user ? req.user.id : null;
    const isAdmin = req.user ? req.user.role === 'admin' : false; // Assuming role is part of user object

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    let interviewRequest;

    if (isAdmin) {
      // Admin can withdraw any request
      interviewRequest = await InterviewRequest.findOne({ _id: requestId });
    } else {
      // Regular user can only withdraw their own request
      interviewRequest = await InterviewRequest.findOne({ _id: requestId, userId });
    }

    if (!interviewRequest) {
      return res.status(404).json({ error: "Interview request not found" });
    }

    // Delete the interview request
    await InterviewRequest.deleteOne({ _id: requestId });

    res
      .status(200)
      .json({ message: "Interview request withdrawn successfully" });
  } catch (error) {
    console.error("Error withdrawing interview request:", error);
    res.status(400).json({ error: "Something went wrong!" });
  }
};
