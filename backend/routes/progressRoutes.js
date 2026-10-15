const express = require("express");
const LearningProgress = require("../models/LearningProgress");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// GET LEARNING PROGRESS
router.get("/learning-progress", authMiddleware, async (req, res) => {

    try {

        let progress = await LearningProgress.findOne({
            userId: req.user.userId
        });

        // If progress does not exist yet, return empty progress
        if (!progress) {
            return res.json({
                completedTopics: []
            });
        }

        res.json({
            completedTopics: progress.completedTopics
        });

    } catch (error) {

        console.error("Error fetching learning progress:", error);

        res.status(500).json({
            message: "Failed to fetch learning progress"
        });
    }
});


// SAVE COMPLETED TOPIC
router.post("/learning-progress/complete", authMiddleware, async (req, res) => {

    try {

        const { topicId } = req.body;

        if (!topicId) {
            return res.status(400).json({
                message: "Topic ID is required"
            });
        }

        let progress = await LearningProgress.findOne({
            userId: req.user.userId
        });

        // Create progress document if it doesn't exist
        if (!progress) {

            progress = new LearningProgress({
                userId: req.user.userId,
                completedTopics: [topicId]
            });

        } else {

            // Prevent duplicate completed topics
            if (!progress.completedTopics.includes(topicId)) {
                progress.completedTopics.push(topicId);
            }
        }

        await progress.save();

        res.json({
            message: "Progress saved successfully",
            completedTopics: progress.completedTopics
        });

    } catch (error) {

        console.error("Error saving learning progress:", error);

        res.status(500).json({
            message: "Failed to save learning progress"
        });
    }
});


module.exports = router;