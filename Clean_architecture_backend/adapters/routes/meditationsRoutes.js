const express = require("express");
const MeditationController = require("../controllers/MeditationController");
const router = express.Router();

router.get("/myMood", MeditationController.myMood);
router.get("/dailyQuotes", MeditationController.dailyQuotes);
module.exports = router;