const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");
const progressRoutes = require("./routes/progressRoutes");
const quizResultRoutes = require("./routes/quizResultRoutes");
const careerMentorRoutes = require("./routes/careerMentorRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", studentRoutes);
app.use("/", progressRoutes);
app.use("/", quizResultRoutes);
app.use("/", careerMentorRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to GradPath AI Backend 🚀");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("MongoDB connection failed:", error));

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});