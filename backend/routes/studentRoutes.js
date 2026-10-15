const express = require("express");
const Student = require("../models/Student");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// ==================== STUDENT PROFILE ROUTES ====================

// GET STUDENT PROFILE
// Protected route
router.get("/student-profile", authMiddleware, async (req, res) => {
    try {

        const student = await Student.findOne({
            userId: req.user.userId
        });

        if (!student) {
            return res.status(404).json({
                message: "Student profile not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
});


// CREATE STUDENT PROFILE
// Protected route
router.post("/student-profile", authMiddleware, async (req, res) => {
    try {

        const existingStudent = await Student.findOne({
            userId: req.user.userId
        });

        if (existingStudent) {
            return res.status(400).json({
                message: "Student profile already exists"
            });
        }

        const student = await Student.create({

            userId: req.user.userId,

            name: req.body.name,
            email: req.body.email,
            branch: req.body.branch,
            year: req.body.year,

            skills: req.body.skills || [],
            interests: req.body.interests || [],
            careerGoal: req.body.careerGoal || "",
            targetRole: req.body.targetRole || "",
            experienceLevel: req.body.experienceLevel || "",
            projects: req.body.projects || [],
            internshipStatus: req.body.internshipStatus || "",
            weakAreas: req.body.weakAreas || []

        });

        res.status(201).json(student);

    } catch (error) {

        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });

    }
});


// UPDATE STUDENT PROFILE
// Protected route
router.put("/student-profile", authMiddleware, async (req, res) => {
    try {

        const student = await Student.findOneAndUpdate(

            {
                userId: req.user.userId
            },

            {
                name: req.body.name,
                email: req.body.email,
                branch: req.body.branch,
                year: req.body.year,

                skills: req.body.skills || [],
                interests: req.body.interests || [],
                careerGoal: req.body.careerGoal || "",
                targetRole: req.body.targetRole || "",
                experienceLevel: req.body.experienceLevel || "",
                projects: req.body.projects || [],
                internshipStatus: req.body.internshipStatus || "",
                weakAreas: req.body.weakAreas || []
            },

            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student profile not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {

        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });

    }
});


// ==================== OLD STUDENT ROUTES ====================

// CREATE - Add a student
router.post("/students", authMiddleware, async (req, res) => {
    try {

        const student = await Student.create({
            ...req.body,
            userId: req.user.userId
        });

        res.status(201).json(student);

    } catch (error) {

        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });

    }
});


// GET ALL - Get all students
router.get("/students", authMiddleware, async (req, res) => {
    try {

        const students = await Student.find({
            userId: req.user.userId
        });

        res.status(200).json(students);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
});


// GET ONE - Get student by ID
router.get("/students/:id", authMiddleware, async (req, res) => {
    try {

        const student = await Student.findOne({
            _id: req.params.id,
            userId: req.user.userId
        });

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {

        if (error.name === "CastError") {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });

    }
});


// UPDATE - Update student
router.put("/students/:id", authMiddleware, async (req, res) => {
    try {

        const student = await Student.findOneAndUpdate(

            {
                _id: req.params.id,
                userId: req.user.userId
            },

            req.body,

            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {

        if (error.name === "CastError" || error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });

    }
});


// DELETE - Delete student
router.delete("/students/:id", authMiddleware, async (req, res) => {
    try {

        const student = await Student.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.userId
        });

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {

        if (error.name === "CastError") {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });

    }
});


// ==================== USER ROUTES ====================

// REGISTER
router.post("/register", async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });

    }
});


// LOGIN
router.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                userId: user._id
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({

            message: "Login successful",

            token: token,

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }

        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
});


// ==================== PROTECTED USER PROFILE ====================

router.get("/profile", authMiddleware, async (req, res) => {
    try {

        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({

            message: "Profile accessed successfully",

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }

        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
});


module.exports = router;