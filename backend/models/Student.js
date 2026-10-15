const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    branch: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true,
        min: 1,
        max: 4
    },

    skills: {
        type: [String],
        default: []
    },

    interests: {
        type: [String],
        default: []
    },

    careerGoal: {
        type: String,
        default: ""
    },

    targetRole: {
        type: String,
        default: ""
    },

    experienceLevel: {
        type: String,
        default: ""
    },

    projects: {
        type: [String],
        default: []
    },

    internshipStatus: {
        type: String,
        default: ""
    },

    weakAreas: {
        type: [String],
        default: []
    }

});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;