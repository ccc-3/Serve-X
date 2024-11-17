 server/routes/feedbackRoutes.js
const express = require('express');
const Feedback = require('../models/feedback');
const router = express.Router();

// POST route to submit feedback
router.post('/', async (req, res) => {
    try {
        const { clientName, email, rating, comments } = req.body;
        const feedback = new Feedback({ clientName, email, rating, comments });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
});

// GET route to retrieve all feedback
router.get('/', async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error });
    }
});

module.exports = router;
