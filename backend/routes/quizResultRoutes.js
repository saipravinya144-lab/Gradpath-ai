const express = require("express");
const QuizResult = require("../models/QuizResult");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/quiz-results", authMiddleware, async (req, res) => {
    try {
        const {
            subject,
            role,
            topic,
            topicId,
            score,
            totalQuestions
        } = req.body;

        if (
            !subject || !topic || !topicId ||
            !Number.isInteger(score) || !Number.isInteger(totalQuestions) ||
            totalQuestions < 1 || score < 0 || score > totalQuestions
        ) {
            return res.status(400).json({
                message: "Provide a subject, topic, topic ID, and a valid score between zero and total questions"
            });
        }

        const percentage = Math.round((score / totalQuestions) * 100);

        const result = await QuizResult.create({
            userId: req.user.userId,
            subject,
            role: role || null,
            topic,
            topicId,
            score,
            totalQuestions,
            percentage,
            passed: score >= Math.ceil(totalQuestions * 0.6)
        });

        res.status(201).json({
            message: "Quiz result saved successfully",
            result
        });
    } catch (error) {
        console.error("Error saving quiz result:", error);
        res.status(500).json({ message: "Failed to save quiz result" });
    }
});

router.get("/quiz-results", authMiddleware, async (req, res) => {
    try {
        const results = await QuizResult.find({
            userId: req.user.userId
        }).sort({ attemptedAt: -1 });

        res.json(results);
    } catch (error) {
        console.error("Error fetching quiz results:", error);
        res.status(500).json({ message: "Failed to fetch quiz results" });
    }
});

module.exports = router;
