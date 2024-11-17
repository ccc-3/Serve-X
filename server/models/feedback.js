// server/models/feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    email: { type: String },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comments: { type: String, required: true },
    status: { type: String, default: 'pending' },  // status of feedback, can be 'approved' or 'pending'
});

module.exports = mongoose.model('Feedback', feedbackSchema);
