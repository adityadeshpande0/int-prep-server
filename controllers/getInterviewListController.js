const InterviewRequest = require('../models/bookings');

exports.getInterviewListController = async (req, res) => {
    try {
        const userId = req.user ? req.user.id : null;

        if (!userId) {
            return res.status(401).json({ error: 'User not authenticated' });
        }

        const interviewRequests = await InterviewRequest.find({ userId });

        res.status(200).json(interviewRequests);
    } catch (error) {
        console.error('Error fetching interview requests:', error);
        res.status(400).json({ error: 'Something went wrong!' });
    }
};
