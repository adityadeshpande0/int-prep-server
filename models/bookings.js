const mongoose = require("mongoose");

//Define the schema

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  date: { type: Date, required: true },
  timeslot: { type: String, required: true },
  status: { type: String, default: "pending", required:true },
});

module.exports = mongoose.model("Bookings", bookingSchema);
