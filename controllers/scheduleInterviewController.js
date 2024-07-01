const InterviewRequest = require("../models/bookings");

exports.scheduleInterviewController = async (req, res) => {
  try {
    const { date, timeslot } = req.body;
    const userId = req.user ? req.user.id : null;

    // Debugging output
    console.log("Request body:", req.body);
    console.log("Decoded user:", req.user);
    console.log("User ID:", userId);

    // Check if the time slot on the specified date is already booked by any user
    const existingInterviewRequest = await InterviewRequest.findOne({
      date,
      timeslot,
    });

    if (existingInterviewRequest) {
      return res
        .status(400)
        .json({ error: "Slot is already booked" });
    }

    const newInterviewRequest = new InterviewRequest({
      userId,
      date,
      timeslot,
    });

    await newInterviewRequest.save();
    res.status(201).json({ message: "Request sent successfully !" });
  } catch (error) {
    console.error("Error scheduling interview:", error);
    res.status(400).json({ error: "Something went wrong!" });
  }
};
