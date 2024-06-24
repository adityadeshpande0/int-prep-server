const InterviewRequest = require("../models/bookings");

exports.approveRequestController = async (req, res) => {
  try {
    const requestId = req.params.requestId;
    const userId = req.user ? req.user.id : null;
    const isAdmin = req.user ? req.user.role === 'admin' : false; // Assuming role is part of user object

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    if (!isAdmin) {
      return res.status(403).json({ error: "User not authorized to approve requests" });
    }

    const interviewRequest = await InterviewRequest.findOne({ _id: requestId });

    if (!interviewRequest) {
      return res.status(404).json({ error: "Interview request not found" });
    }

    // Update the interview request to approved
    interviewRequest.status = true;
    await interviewRequest.save();

    res
      .status(200)
      .json({ message: "Interview request approved successfully" });
  } catch (error) {
    console.error("Error approving interview request:", error);
    res.status(400).json({ error: "Something went wrong!" });
  }
};
