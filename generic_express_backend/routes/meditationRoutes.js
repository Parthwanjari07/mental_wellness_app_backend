const express = require('express');
const router = express.Router();
const geminiService = require('../services/geminiService');

// Get daily meditation quotes
router.get('/daily-quotes', async (req, res) => {
    try {
        const quotes = await geminiService.getDailyQuotes();
        res.json({ quotes });
    } catch (error) {
        console.error('Error getting daily quotes:', error);
        res.status(500).json({ error: 'Failed to get daily quotes' });
    }
});

// Get advice based on mood
router.get('/advice/:mood', async (req, res) => {
    try {
        const { mood } = req.params;
        const advice = await geminiService.getAdviceByMood(mood);
        res.json({ advice });
    } catch (error) {
        console.error('Error getting mood advice:', error);
        res.status(500).json({ error: 'Failed to get mood advice' });
    }
});

module.exports = router;