const InterviewRequest = require("../models/bookings");

exports.getInterviewListController = async (req, res) => {
  try {
    const userData = req.user;
    const userId = userData.id ? userData.id : null;
    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const isAdmin = userData.role;
    let interviewRequests;

    if (isAdmin === "user") {
      interviewRequests = await InterviewRequest.find({ userId })
    } else {
      // For admin, fetch all interview requests and populate user details
      interviewRequests = await InterviewRequest.find()
        .populate("userId", "name email"); 
    }

    res.status(200).json({ interviewRequests, isAdmin });
  } catch (error) {
    console.error("Error fetching interview requests:", error);
    res.status(400).json({ error: "Something went wrong!" });
  }
};
