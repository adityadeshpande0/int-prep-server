const InterviewRequest = require('../models/bookings');

exports.scheduleInterviewController = async (req, res) => {
    try {
        const { date, timeslot } = req.body; // Ensure the naming matches the schema
        const userId = req.user ? req.user.id : null; // Adjust to req.user.id

        // Debugging output
        console.log('Request body:', req.body);
        console.log('Decoded user:', req.user);
        console.log('User ID:', userId);

        if (!userId) {
            return res.status(400).json({ error: 'User ID is missing' });
        }

        const newInterviewRequest = new InterviewRequest({
            userId,
            date,
            timeslot // Ensure the naming matches the schema
        });

        await newInterviewRequest.save();
        res.status(201).json(newInterviewRequest);
    } catch (error) {
        console.error('Error scheduling interview:', error);
        res.status(400).json({ error: 'Something went wrong!' });
    }
};
