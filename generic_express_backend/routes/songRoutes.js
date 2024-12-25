const express = require('express');
const router = express.Router();
const dbService = require('../services/dbService');

// Get all songs
router.get('/', async (req, res) => {
    try {
        const songs = await dbService.getAllSongs();
        res.json({ songs });
    } catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).json({ error: 'Failed to fetch songs' });
    }
});

module.exports = router;