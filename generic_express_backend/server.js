require('dotenv').config();
const express = require('express');
const meditationRoutes = require('./routes/meditationRoutes');
const songRoutes = require('./routes/songRoutes');

const app = express();

// Middleware
app.use(express.json());

// CORS middleware (if needed)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Routes
app.use('/api/meditations', meditationRoutes);
app.use('/api/songs', songRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});