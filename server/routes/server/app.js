// server/app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable CORS for frontend requests

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/feedback', feedbackRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
