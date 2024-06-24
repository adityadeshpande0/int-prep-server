const InterviewRequest = require("../models/bookings");

exports.getInterviewListController = async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const isAdmin = req.user.role;
    let interviewRequests;
    if (isAdmin === "user") {
      interviewRequests = await InterviewRequest.find({ userId });
    } else {
      interviewRequests = await InterviewRequest.find();
    }
    res.status(200).json({ interviewRequests, isAdmin });
  } catch (error) {
    console.error("Error fetching interview requests:", error);
    res.status(400).json({ error: "Something went wrong!" });
  }
};
