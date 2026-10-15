const mongoose = require("mongoose");

const learningProgressSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    completedTopics: {
        type: [String],
        default: []
    }

});

const LearningProgress = mongoose.model(
    "LearningProgress",
    learningProgressSchema
);

module.exports = LearningProgress;