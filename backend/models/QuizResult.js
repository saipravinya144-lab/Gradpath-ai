const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: null
    },
    topic: {
        type: String,
        required: true
    },
    topicId: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 0
    },
    totalQuestions: {
        type: Number,
        required: true,
        min: 1
    },
    percentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    passed: {
        type: Boolean,
        required: true
    },
    attemptedAt: {
        type: Date,
        default: Date.now
    }
});

const QuizResult = mongoose.model("QuizResult", quizResultSchema);

module.exports = QuizResult;
