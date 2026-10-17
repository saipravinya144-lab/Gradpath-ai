import { useEffect, useState } from "react";

import "./App.css";

// ================= LOGIN =================

import Login from "./Login.jsx";

// ================= SUBJECT COMPONENTS =================

import DSA from "./subjects/DSA.jsx";
import JavaScript from "./subjects/JavaScript.jsx";
import Java from "./subjects/Java.jsx";
import DBMS from "./subjects/DBMS.jsx";

// ================= FULL STACK COMPONENT =================

import FullStack from "./roles/FullStack/FullStack.jsx";

// ================= ROLE COMPONENTS =================

import RoleSelection from "./components/RoleSelection.jsx";
import RoleRoadmap from "./components/RoleRoadmap.jsx";
import StudentProfile from "./components/StudentProfile.jsx";
import CareerMentor from "./components/CareerMentor.jsx";
import PlacementPreparation from "./components/PlacementPreparation.jsx";

function App() {

    // ================= LOGIN TOKEN =================

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    // ================= PAGE =================

    const [page, setPage] = useState("dashboard");

    // ================= SELECTED ROLE =================

    const [selectedRole, setSelectedRole] = useState("");

    // ================= SELECTED SUBJECT =================

    const [selectedSubject, setSelectedSubject] = useState("");

    // ================= STUDENT =================

    const [student, setStudent] = useState(null);

    const [studentLoading, setStudentLoading] = useState(true);

    // ================= EDIT PROFILE =================

    const [editingProfile, setEditingProfile] = useState(false);

    // =====================================================
    // B4 - LEARNING PROGRESS
    // =====================================================

    const [completedTopics, setCompletedTopics] = useState([]);

    const [progressLoading, setProgressLoading] = useState(true);

    // =====================================================
    // B5 - QUIZ RESULTS
    // =====================================================

    const [quizResults, setQuizResults] = useState([]);

    const [quizResultsLoading, setQuizResultsLoading] = useState(true);


    // =====================================================
    // B9 - CAREER PREPARATION TOOLS (saved locally per browser)
    // =====================================================

    const [resumeData, setResumeData] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("gradpathResumeDraft")) || {};
        } catch {
            return {};
        }
    });

    const [interviewResponses, setInterviewResponses] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("gradpathInterviewResponses")) || {};
        } catch {
            return {};
        }
    });

    const [interviewQuestionIndex, setInterviewQuestionIndex] = useState(0);

    const [internshipApplications, setInternshipApplications] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("gradpathInternshipApplications")) || [];
        } catch {
            return [];
        }
    });

    const [internshipChecklist, setInternshipChecklist] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("gradpathInternshipChecklist")) || {};
        } catch {
            return {};
        }
    });

    const [internshipForm, setInternshipForm] = useState({
        company: "",
        role: "",
        platform: "",
        deadline: "",
        status: "Interested",
    });

    useEffect(() => {
        try {
            localStorage.setItem("gradpathResumeDraft", JSON.stringify(resumeData));
        } catch (error) {
            console.error("Could not save resume draft:", error);
        }
    }, [resumeData]);

    useEffect(() => {
        try {
            localStorage.setItem("gradpathInterviewResponses", JSON.stringify(interviewResponses));
        } catch (error) {
            console.error("Could not save interview practice:", error);
        }
    }, [interviewResponses]);

    useEffect(() => {
        try {
            localStorage.setItem("gradpathInternshipApplications", JSON.stringify(internshipApplications));
        } catch (error) {
            console.error("Could not save internship applications:", error);
        }
    }, [internshipApplications]);

    useEffect(() => {
        try {
            localStorage.setItem("gradpathInternshipChecklist", JSON.stringify(internshipChecklist));
        } catch (error) {
            console.error("Could not save internship checklist:", error);
        }
    }, [internshipChecklist]);

    const updateResumeField = (event) => {
        const { name, value } = event.target;
        setResumeData((previous) => ({ ...previous, [name]: value }));
    };

    const interviewQuestions = [
        {
            id: "dsa-binary-search",
            category: "DSA",
            level: "Beginner",
            question: "Binary search works correctly when the input array is…",
            options: ["Sorted", "Always stored in a linked list", "Made only of positive numbers", "Reversed"],
            correct: 0,
            explanation: "Binary search repeatedly halves the search range. It relies on sorted order to decide which half can contain the target.",
            tip: "Before using binary search, check whether the data is sorted and whether the problem allows you to sort it."
        },
        {
            id: "dsa-stack",
            category: "DSA",
            level: "Beginner",
            question: "Which principle does a stack follow?",
            options: ["FIFO", "LIFO", "Random access only", "First smallest, first out"],
            correct: 1,
            explanation: "A stack follows Last In, First Out (LIFO). The most recently pushed item is the first one popped.",
            tip: "Think of a stack of plates: you usually remove the plate placed on top most recently."
        },
        {
            id: "python-dictionary",
            category: "Python",
            level: "Beginner",
            question: "What is the average time complexity of looking up a key in a Python dictionary?",
            options: ["O(n²)", "O(log n) in every case", "O(1)", "O(n log n)"],
            correct: 2,
            explanation: "Dictionary lookup is average O(1) because dictionaries use hashing. Worst-case behavior can be slower.",
            tip: "Remember that average-case complexity and worst-case complexity are not always the same."
        },
        {
            id: "sql-where-having",
            category: "SQL / DBMS",
            level: "Intermediate",
            question: "Which SQL clause filters groups after GROUP BY has formed them?",
            options: ["WHERE", "ORDER BY", "HAVING", "FROM"],
            correct: 2,
            explanation: "HAVING filters grouped results, often using aggregate functions. WHERE filters individual rows before grouping.",
            tip: "A useful distinction: WHERE filters rows; HAVING filters groups."
        },
        {
            id: "sql-join",
            category: "SQL / DBMS",
            level: "Beginner",
            question: "Which join returns only rows that match in both tables?",
            options: ["INNER JOIN", "CROSS JOIN", "FULL OUTER JOIN", "LEFT JOIN always"],
            correct: 0,
            explanation: "INNER JOIN returns rows where the join condition matches in both tables.",
            tip: "Practise joins using two small tables and predict the output before running the query."
        },
        {
            id: "javascript-const",
            category: "JavaScript",
            level: "Beginner",
            question: "What happens if you try to reassign a variable declared with const?",
            options: ["It always succeeds", "The browser silently converts it to let", "JavaScript throws an error", "The value becomes null"],
            correct: 2,
            explanation: "A const binding cannot be reassigned. Objects and arrays declared with const can still have their contents mutated.",
            tip: "Distinguish reassignment of a binding from changing a property inside an object."
        },
        {
            id: "html-semantic",
            category: "Web Development",
            level: "Beginner",
            question: "Why use semantic HTML elements such as main, nav and article?",
            options: ["Only to make text colorful", "To communicate meaning and improve structure/accessibility", "To replace CSS entirely", "To make every page load offline"],
            correct: 1,
            explanation: "Semantic elements describe the purpose of content and help browsers, assistive technologies and developers understand page structure.",
            tip: "Choose an element based on the meaning of its content, not just its default appearance."
        },
        {
            id: "ml-overfitting",
            category: "AI / ML",
            level: "Intermediate",
            question: "A model performs very well on training data but poorly on unseen data. This is most likely…",
            options: ["Overfitting", "Perfect generalization", "Normalization", "Underflow"],
            correct: 0,
            explanation: "Overfitting occurs when a model learns training-specific patterns or noise and does not generalize well.",
            tip: "Consider validation data, simpler models, regularization and more representative training examples."
        },
        {
            id: "git-commit",
            category: "Tools",
            level: "Beginner",
            question: "What does a Git commit represent?",
            options: ["A saved snapshot of staged changes", "A guaranteed deployment to production", "A new GitHub account", "Deleting the repository history"],
            correct: 0,
            explanation: "A commit records staged changes in the repository history with a message and metadata. It does not automatically deploy the application.",
            tip: "A clear commit message should briefly describe the change being recorded."
        },
        {
            id: "hr-star",
            category: "HR / Behavioral",
            level: "Beginner",
            question: "What does the STAR method help you structure?",
            options: ["A database schema", "A behavioral interview example", "A sorting algorithm", "A resume font"],
            correct: 1,
            explanation: "STAR stands for Situation, Task, Action and Result. It helps you explain a real experience clearly and in order.",
            tip: "Use a real example and spend most of your answer explaining your own actions and the result."
        },
        {
            id: "hr-weakness",
            category: "HR / Behavioral",
            level: "Intermediate",
            question: "What is a strong way to answer ‘What is one area you are improving?’",
            options: ["Claim you have no weaknesses", "Blame another person", "Name a genuine, manageable area and explain your improvement plan", "Give an unrelated answer"],
            correct: 2,
            explanation: "A thoughtful answer shows self-awareness and action. Avoid pretending to be perfect or sharing an irrelevant answer.",
            tip: "Prepare a concise example of what you noticed, what you are doing about it and how you measure progress."
        },
        {
            id: "project-explanation",
            category: "Project Interview",
            level: "Beginner",
            question: "When explaining a project, which approach is most useful?",
            options: ["List tools without explaining anything", "Explain the problem, your contribution, design choices and results", "Claim you built every part even if you did not", "Avoid discussing challenges"],
            correct: 1,
            explanation: "Interviewers want to understand the problem, your specific contribution, your reasoning, what you learned and what you would improve.",
            tip: "Be honest about team contributions and be ready to explain any technology you list."
        }
    ];

    const activeInterviewQuestion = interviewQuestions[interviewQuestionIndex];
    const interviewAnsweredCount = Object.keys(interviewResponses).filter((id) =>
        interviewQuestions.some((question) => question.id === id)
    ).length;

    const addInternshipApplication = (event) => {
        event.preventDefault();
        if (!internshipForm.company.trim() || !internshipForm.role.trim()) return;

        setInternshipApplications((previous) => [
            {
                id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                ...internshipForm,
                company: internshipForm.company.trim(),
                role: internshipForm.role.trim(),
            },
            ...previous,
        ]);
        setInternshipForm({ company: "", role: "", platform: "", deadline: "", status: "Interested" });
    };

    // =====================================================
    // B4 - ROLE PROGRESS CONFIGURATION
    // =====================================================

    const roleProgress = {

        "Full Stack Developer": {
            namespace: "fullstack",
            totalLessons: 117,
        },

        "AI / ML Engineer": {
            namespace: "aiml",
            totalLessons: 111,
        },

        "Data Analyst": {
            namespace: "dataanalyst",
            totalLessons: 41,
        },

        "Android Developer": {
            namespace: "android",
            totalLessons: 95,
        },

        "Cybersecurity": {
            namespace: "cybersecurity",
            totalLessons: 106,
        },

        "Cloud / DevOps Engineer": {
            namespace: "clouddevops",
            totalLessons: 105,
        },

    };

    // =====================================================
    // LOGIN
    // =====================================================

    const handleLogin = () => {

        const savedToken = localStorage.getItem("token");

        setToken(savedToken);

        setStudentLoading(true);

        setStudent(null);

        setEditingProfile(false);

    };

    // =====================================================
    // FETCH STUDENT PROFILE
    // =====================================================

    useEffect(() => {

        if (!token) {

            setStudentLoading(false);

            return;

        }

        const fetchStudentProfile = async () => {

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/student-profile`,
                    {
                        method: "GET",

                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (response.ok) {
    setStudent(data);

    if (data.targetRole) {
        setSelectedRole(data.targetRole);
    }
} else {

                    console.log(
                        "Student profile not found:",
                        data.message
                    );

                    // If token is invalid or expired

                    if (response.status === 401) {

                        localStorage.removeItem("token");

                        setToken(null);

                    }

                }

            } catch (error) {

                console.error(
                    "Error fetching student profile:",
                    error
                );

            } finally {

                setStudentLoading(false);

            }

        };

        fetchStudentProfile();

    }, [token]);

    // =====================================================
    // B4 - FETCH LEARNING PROGRESS
    // =====================================================

    useEffect(() => {

        if (!token) {

            setCompletedTopics([]);

            setProgressLoading(false);

            return;

        }

        const fetchLearningProgress = async () => {

            setProgressLoading(true);

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/learning-progress`,
                    {
                        method: "GET",

                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (response.ok) {

                    setCompletedTopics(
                        data.completedTopics || []
                    );

                } else {

                    console.error(
                        "Failed to load learning progress:",
                        data.message
                    );

                }

            } catch (error) {

                console.error(
                    "Error fetching learning progress:",
                    error
                );

            } finally {

                setProgressLoading(false);

            }

        };

        fetchLearningProgress();

    }, [token, page]);

    // =====================================================
    // B5 - FETCH QUIZ RESULTS
    // =====================================================

    useEffect(() => {

        if (!token) {

            setQuizResults([]);

            setQuizResultsLoading(false);

            return;

        }

        const fetchQuizResults = async () => {

            setQuizResultsLoading(true);

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/quiz-results`,
                    {
                        method: "GET",

                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (response.ok) {

                    setQuizResults(
                        Array.isArray(data) ? data : []
                    );

                } else {

                    console.error(
                        "Failed to load quiz results:",
                        data.message
                    );

                    setQuizResults([]);

                }

            } catch (error) {

                console.error(
                    "Error fetching quiz results:",
                    error
                );

                setQuizResults([]);

            } finally {

                setQuizResultsLoading(false);

            }

        };

        fetchQuizResults();

    }, [token, page]);

    // =====================================================
    // B4 - CALCULATE SELECTED ROLE PROGRESS
    // =====================================================

    const getSelectedRoleProgress = () => {

        if (!selectedRole) {

            return {
                completed: 0,
                total: 0,
                percentage: 0,
            };

        }

        const role = roleProgress[selectedRole];

        if (!role) {

            return {
                completed: 0,
                total: 0,
                percentage: 0,
            };

        }

        const completed = completedTopics.filter(
            (topicId) =>
                topicId.startsWith(`${role.namespace}-`)
        ).length;

        const safeCompleted = Math.min(
            completed,
            role.totalLessons
        );

        const percentage =
            role.totalLessons === 0
                ? 0
                : Math.round(
                    (safeCompleted / role.totalLessons) * 100
                );

        return {
            completed: safeCompleted,
            total: role.totalLessons,
            percentage,
        };

    };

    const selectedRoleProgressData =
        getSelectedRoleProgress();

    // =====================================================
    // LOGOUT
    // =====================================================

    const logout = () => {

        localStorage.removeItem("token");

        setToken(null);

        setStudent(null);

        setStudentLoading(false);

        setEditingProfile(false);

        setCompletedTopics([]);

        setQuizResults([]);

        setSelectedRole("");

        setSelectedSubject("");

        setPage("dashboard");

    };

    // =====================================================
    // LOGIN CHECK
    // =====================================================

    if (!token) {

        return <Login onLogin={handleLogin} />;

    }

    // =====================================================
    // STUDENT LOADING
    // =====================================================

    if (studentLoading) {

        return <h1>Loading your profile...</h1>;

    }

    // =====================================================
    // STUDENT PROFILE NOT FOUND
    // =====================================================

    if (!student) {

        return (
            <StudentProfile
                token={token}

                onProfileCreated={(createdProfile) => {
                    setStudent(createdProfile);
                }}
            />
        );

    }

    // =====================================================
    // EDIT PROFILE
    // =====================================================

    if (editingProfile) {

        return (
            <StudentProfile
                token={token}

                student={student}

                onProfileUpdated={(updatedProfile) => {

                    setStudent(updatedProfile);

                    setEditingProfile(false);

                    setPage("dashboard");

                }}

                onCancel={() => {

                    setEditingProfile(false);

                }}

            />
        );

    }

    return (

        <div className="app-container">

            {/* ================= HEADER ================= */}

            <div className="app-header">

                <h1>
                    GradPath AI 🚀
                </h1>

            </div>

            <div className="content">

                <style>{`
                    .gp-career { max-width: 1100px; margin: 0 auto; padding: 8px 0 28px; color: inherit; }
                    .gp-career * { box-sizing: border-box; }
                    .gp-career .gp-intro { max-width: 850px; line-height: 1.65; }
                    .gp-career .gp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 16px; margin: 22px 0; }
                    .gp-career .gp-card { border: 1px solid #d7dce2; border-radius: 14px; padding: 18px; background: var(--card-bg, rgba(127,127,127,0.045)); }
                    .gp-career .gp-card h3 { margin-top: 0; }
                    .gp-career .gp-muted { opacity: 0.82; line-height: 1.6; }
                    .gp-career .gp-actions { display: flex; flex-wrap: wrap; gap: 10px; margin: 18px 0; }
                    .gp-career .gp-actions button, .gp-career button.gp-button { padding: 10px 15px; border-radius: 8px; cursor: pointer; }
                    .gp-career .gp-primary { font-weight: 600; }
                    .gp-career .gp-form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 16px; }
                    .gp-career .gp-field { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
                    .gp-career .gp-field.gp-full { grid-column: 1 / -1; }
                    .gp-career .gp-field label { font-weight: 600; }
                    .gp-career input, .gp-career textarea, .gp-career select { width: 100%; min-width: 0; padding: 10px 11px; border: 1px solid #bfc7d1; border-radius: 7px; font: inherit; background: var(--input-bg, white); color: var(--input-color, #20252b); }
                    .gp-career textarea { resize: vertical; }
                    .gp-career .gp-resume-preview { background: #fff; color: #222; border: 1px solid #d6d6d6; padding: 30px; max-width: 850px; margin: 22px auto; overflow-wrap: anywhere; }
                    .gp-career .gp-resume-preview h2 { text-align: center; margin: 0 0 8px; }
                    .gp-career .gp-resume-contact { text-align: center; font-size: 0.92rem; }
                    .gp-career .gp-resume-preview h3 { border-bottom: 1px solid #bbb; padding-bottom: 5px; margin: 20px 0 8px; color: #20252b; }
                    .gp-career .gp-resume-lines { white-space: pre-line; }
                    .gp-career .gp-question-options { display: grid; gap: 10px; margin: 18px 0; }
                    .gp-career .gp-option { text-align: left; padding: 12px 14px; border: 1px solid #cbd2db; border-radius: 9px; background: transparent; color: inherit; cursor: pointer; }
                    .gp-career .gp-option.gp-selected { border: 2px solid #5478bd; }
                    .gp-career .gp-feedback { border-left: 4px solid #5478bd; padding: 12px 14px; margin: 16px 0; background: rgba(84,120,189,0.09); border-radius: 4px; }
                    .gp-career .gp-checklist { display: grid; gap: 12px; }
                    .gp-career .gp-checkline { display: flex; align-items: flex-start; gap: 10px; line-height: 1.5; }
                    .gp-career .gp-checkline input { width: auto; margin-top: 5px; }
                    .gp-career .gp-table-wrap { overflow-x: auto; }
                    .gp-career .gp-table { width: 100%; border-collapse: collapse; min-width: 650px; }
                    .gp-career .gp-table th, .gp-career .gp-table td { border-bottom: 1px solid #d7dce2; padding: 10px; text-align: left; vertical-align: top; }
                    .gp-career .gp-link-list { display: grid; gap: 10px; }
                    .gp-career .gp-resource { display: flex; justify-content: space-between; align-items: center; gap: 12px; border: 1px solid #d7dce2; border-radius: 10px; padding: 12px 14px; }
                    .gp-career a { overflow-wrap: anywhere; }
                    @media (max-width: 650px) { .gp-career .gp-form { grid-template-columns: 1fr; } .gp-career .gp-field.gp-full { grid-column: auto; } .gp-career .gp-resume-preview { padding: 18px; } .gp-career .gp-resource { align-items: flex-start; flex-direction: column; } }
                    @media print {
                        body * { visibility: hidden !important; }
                        .gp-career .gp-resume-preview, .gp-career .gp-resume-preview * { visibility: visible !important; }
                        .gp-career .gp-resume-preview { position: absolute !important; left: 0 !important; top: 0 !important; width: 100% !important; max-width: none !important; margin: 0 !important; border: none !important; padding: 16mm !important; box-shadow: none !important; }
                        .gp-career .gp-no-print { display: none !important; }
                    }
                `}</style>

                {/* ================================================= */}
                {/* ================= DASHBOARD ===================== */}
                {/* ================================================= */}

                {page === "dashboard" && (

                    <>

                        <h2>
                            Welcome, {student.name}! 🎉
                        </h2>

                        <hr />

                        {/* ================= STUDENT PROFILE ================= */}

                        <h3>
                            🎓 Student Profile
                        </h3>

                        <p>
                            <strong>Name:</strong>{" "}
                            {student.name}
                        </p>

                        <p>
                            <strong>Email:</strong>{" "}
                            {student.email}
                        </p>

                        <p>
                            <strong>Branch:</strong>{" "}
                            {student.branch}
                        </p>

                        <p>
                            <strong>Year:</strong>{" "}
                            {student.year}
                        </p>

                        {/* ================= EDIT PROFILE ================= */}

                        <button
                            onClick={() => {
                                setEditingProfile(true);
                            }}
                        >
                            ✏️ Edit Profile
                        </button>

                        <hr />

                        {/* ================================================= */}
                        {/* ================= B4 LEARNING PROGRESS ========== */}
                        {/* ================================================= */}

                        <h3>
                            📊 Learning Progress
                        </h3>

                        {progressLoading ? (

                            <p>
                                Loading your learning progress...
                            </p>

                        ) : selectedRole ? (

                            <>

                                <p>
                                    <strong>
                                        Career Role:
                                    </strong>{" "}
                                    {selectedRole}
                                </p>

                                <p>
                                    <strong>
                                        Lessons Completed:
                                    </strong>{" "}
                                    {selectedRoleProgressData.completed}
                                    {" / "}
                                    {selectedRoleProgressData.total}
                                </p>

                                <p>
                                    <strong>
                                        Progress:
                                    </strong>{" "}
                                    {selectedRoleProgressData.percentage}%
                                </p>

                                {/* ================= PROGRESS BAR ================= */}

                                <div
                                    style={{
                                        width: "100%",
                                        maxWidth: "600px",
                                        height: "16px",
                                        backgroundColor: "#e5e7eb",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginTop: "10px",
                                        marginBottom: "15px",
                                    }}
                                >

                                    <div
                                        style={{
                                            width: `${selectedRoleProgressData.percentage}%`,
                                            height: "100%",
                                            backgroundColor: "#2563eb",
                                            borderRadius: "10px",
                                            transition:
                                                "width 0.3s ease",
                                        }}
                                    />

                                </div>

                                <button
                                    onClick={() => {

                                        setSelectedSubject("");

                                        setPage("roleRoadmap");

                                    }}
                                >
                                    🗺️ Continue My Roadmap
                                </button>

                            </>

                        ) : (

                            <>

                                <p>
                                    You haven't selected a career role yet.
                                </p>

                                <button
                                    onClick={() => {

                                        setSelectedSubject("");

                                        setPage("roleSelection");

                                    }}
                                >
                                    🎯 Choose Career Role
                                </button>

                            </>

                        )}

                        <hr />
                        
{/* ================================================= */}
{/* B8 - PERSONALIZED NEXT ACTION */}
{/* ================================================= */}

<hr />

<h3>🎯 Your Next Step</h3>

{progressLoading ? (
    <p>Finding your next step...</p>
) : !selectedRole ? (
    <>
        <p>
            Start by choosing a career role to get your
            personalized learning roadmap.
        </p>

        <button
            onClick={() => {
                setSelectedSubject("");
                setPage("roleSelection");
            }}
        >
            🎯 Choose a Career Role
        </button>
    </>
) : selectedRoleProgressData.percentage >= 100 ? (
    <>
        <p>
            Congratulations! You have completed your
            {` ${selectedRole}`} roadmap. Explore the next
            steps to prepare for your career.
        </p>

        <button onClick={() => setPage("career")}>
            💼 Explore Career Preparation
        </button>
    </>
) : (
    <>
        <p>
            Continue learning to build your skills as a
            {` ${selectedRole}`}.
        </p>

        <p>
            <strong>Recommended next step:</strong>{" "}
            Continue your career roadmap.
        </p>

        <button
            onClick={() => {
                setSelectedSubject("");
                setPage("roleRoadmap");
            }}
        >
            🗺️ Continue My Roadmap
        </button>
    </>
)}


                        {/* ================================================= */}
                        {/* ================= B5 QUIZ PERFORMANCE ========== */}
                        {/* ================================================= */}

                        <h3>
                            📊 Quiz Performance
                        </h3>

                        {quizResultsLoading ? (

                            <p>
                                Loading quiz performance...
                            </p>

                        ) : quizResults.length === 0 ? (

                             <p>
                                No quiz performance available yet.
                            </p>

                        ) : (

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(auto-fit, minmax(180px, 1fr))",
                                    gap: "15px",
                                    maxWidth: "800px"
                                }}
                            >

                                <div>
                                    <strong>
                                        Total Quizzes
                                    </strong>

                                    <p>
                                        {quizResults.length}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Passed
                                    </strong>

                                    <p>
                                        {
                                            quizResults.filter(
                                                (result) =>
                                                    result.passed
                                            ).length
                                        }
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Not Passed
                                    </strong>

                                    <p>
                                        {
                                            quizResults.filter(
                                                (result) =>
                                                    !result.passed
                                            ).length
                                        }
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Average Score
                                    </strong>

                                    <p>
                                        {
                                            Math.round(
                                                quizResults.reduce(
                                                    (
                                                        sum,
                                                        result
                                                    ) =>
                                                        sum +
                                                        result.percentage,
                                                    0
                                                ) /
                                                quizResults.length
                                            )
                                        }
                                        %
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Best Score
                                    </strong>

                                    <p>
                                        {
                                            Math.max(
                                                ...quizResults.map(
                                                    (result) =>
                                                        result.percentage
                                                )
                                            )
                                        }
                                        %
                                    </p>
                                </div>

                            </div>

                        )}

                        <hr />

                        {/* ================================================= */}
                        {/* ================= B5 QUIZ HISTORY ============== */}
                        {/* ================================================= */}

                        <h3>
                            📝 Quiz History
                        </h3>

                        {quizResultsLoading ? (

                            <p>
                                Loading your quiz history...
                            </p>

                        ) : quizResults.length === 0 ? (

                            <p>
                                You haven't attempted any quizzes yet.
                            </p>

                        ) : (

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                    maxWidth: "800px"
                                }}
                            >

                                {quizResults.map((result) => (

                                    <div
                                        key={result._id}
                                        style={{
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "10px",
                                            padding: "18px",
                                            backgroundColor: "#ffffff"
                                        }}
                                    >

                                        <h4
                                            style={{
                                                margin: "0 0 8px"
                                            }}
                                        >
                                            {result.topic}
                                        </h4>

                                        <p>
                                            <strong>
                                                Subject:
                                            </strong>{" "}
                                            {result.subject}
                                        </p>

                                        {result.role && (

                                            <p>
                                                <strong>
                                                    Role:
                                                </strong>{" "}
                                                {result.role}
                                            </p>

                                        )}

                                        <p>
                                            <strong>
                                                Score:
                                            </strong>{" "}
                                            {result.score} /{" "}
                                            {result.totalQuestions}
                                        </p>

                                        <p>
                                            <strong>
                                                Percentage:
                                            </strong>{" "}
                                            {result.percentage}%
                                        </p>

                                        <p>
                                            <strong>
                                                Status:
                                            </strong>{" "}
                                            {result.passed
                                                ? "Passed ✅"
                                                : "Not Passed ❌"}
                                        </p>

                                        {result.attemptedAt && (

                                            <p>
                                                <strong>
                                                    Attempted:
                                                </strong>{" "}
                                                {new Date(
                                                    result.attemptedAt
                                                ).toLocaleString()}
                                            </p>

                                        )}

                                    </div>

                                ))}

                            </div>

                        )}

                        <hr />

                        {/* ================================================= */}
                        {/* ================= CORE LEARNING ================= */}
                        {/* ================================================= */}

                        <h3>
                            📚 Core Learning
                        </h3>

                        <p>
                            Every engineering student should first learn
                            these four core subjects.
                        </p>

                        <button
                            onClick={() => {

                                setSelectedSubject("");

                                setPage("learning");

                            }}
                        >
                            Start Core Learning
                        </button>

                        <hr />

                        {/* ================================================= */}
                        {/* ================= CAREER ROLE =================== */}
                        {/* ================================================= */}

                        <h3>
                            🎯 Career Role
                        </h3>

                        <p>
                            After learning the core subjects, choose a
                            career role and continue with specialized skills.
                        </p>

                        <button
                            onClick={() => {

                                setSelectedSubject("");

                                setPage("roleSelection");

                            }}
                        >
                            Choose Career Role
                        </button>

                        {/* ================= SELECTED ROLE ================= */}

                        {selectedRole && (

                            <>

                                <p>
                                    <strong>
                                        Selected Role:
                                    </strong>{" "}
                                    {selectedRole}
                                </p>

                                <button
                                    onClick={() => {

                                        setSelectedSubject("");

                                        setPage("roleRoadmap");

                                    }}
                                >
                                    🗺️ View My Roadmap
                                </button>

                            </>

                        )}

                        <hr />

                        {/* ================= CAREER ================= */}

                        <h3>
                            💼 Career Preparation
                        </h3>

                        <button
                            onClick={() => setPage("career")}
                        >
                            Career Preparation
                        </button>

                        <br />
                        <br />

                        <button onClick={() => setPage("careerMentor")}>
                            ✨ Ask AI Career Mentor
                        </button>

                        <br />
                        <br />

                        {/* ================= LOGOUT ================= */}

                        <button onClick={logout}>
                            Logout
                        </button>

                    </>

                )}

                {/* ================================================= */}
                {/* ================= CORE LEARNING ================= */}
                {/* ================================================= */}

                {page === "learning" && (

                    <>

                        <h2>
                            📚 Core Learning
                        </h2>

                        <p>
                            These four subjects form the foundation for every
                            engineering student.
                        </p>

                        <hr />

                        {/* ================= DSA ================= */}

                        <button
                            onClick={() => setPage("dsa")}
                        >
                            🧠 DSA
                        </button>

                        <br />
                        <br />

                        {/* ================= JAVASCRIPT ================= */}

                        <button
                            onClick={() => setPage("javascript")}
                        >
                            💛 JavaScript
                        </button>

                        <br />
                        <br />

                        {/* ================= JAVA ================= */}

                        <button
                            onClick={() => setPage("java")}
                        >
                            ☕ Java
                        </button>

                        <br />
                        <br />

                        {/* ================= DBMS ================= */}

                        <button
                            onClick={() => setPage("dbms")}
                        >
                            🗄️ DBMS
                        </button>

                        <br />
                        <br />

                        <hr />

                        {/* ================= FULL STACK ================= */}

                        <h3>
                            💻 Full Stack Development
                        </h3>

                        <p>
                            Learn the technologies required to become a
                            Full Stack Developer.
                        </p>

                        <button
                            onClick={() => setPage("fullstack")}
                        >
                            💻 Full Stack Development
                        </button>

                        <br />
                        <br />

                        <hr />

                        <p>
                            After completing your core learning, choose a
                            career role for specialized learning.
                        </p>

                        <button
                            onClick={() => {

                                setSelectedSubject("");

                                setPage("roleSelection");

                            }}
                        >
                            🎯 Choose Career Role
                        </button>

                        <br />
                        <br />

                        <button
                            onClick={() => setPage("dashboard")}
                        >
                            ← Back to Dashboard
                        </button>

                    </>

                )}

                {/* ================================================= */}
                {/* ================= ROLE SELECTION ================= */}
                {/* ================================================= */}

                {page === "roleSelection" && (
    <RoleSelection
        setPage={setPage}
        setSelectedRole={async (role) => {
            try {
                const response = await fetch(
                    "https://gradpath-ai-backend.onrender.com/student-profile",
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            name: student.name,
                            email: student.email,
                            branch: student.branch,
                            year: student.year,
                            skills: student.skills || [],
                            interests: student.interests || [],
                            careerGoal: student.careerGoal || "",
                            targetRole: role,
                            experienceLevel:
                                student.experienceLevel || "",
                            projects: student.projects || [],
                            internshipStatus:
                                student.internshipStatus || "",
                            weakAreas: student.weakAreas || [],
                        }),
                    }
                );

                const data = await response.json();

                if (response.ok) {
                    setStudent(data);
                    setSelectedRole(role);
                    setSelectedSubject("");
                    setPage("roleRoadmap");
                } else {
                    console.error(
                        "Failed to save career role:",
                        data.message
                    );
                }
            } catch (error) {
                console.error(
                    "Error saving career role:",
                    error
                );
            }
        }}
    />
)}

                {/* ================================================= */}
                {/* ================= ROLE ROADMAP ================== */}
                {/* ================================================= */}

                {page === "roleRoadmap" && (

                    <RoleRoadmap

                        selectedRole={selectedRole}

                        setPage={setPage}

                        selectedSubject={selectedSubject}

                        setSelectedSubject={setSelectedSubject}

                    />

                )}

                {/* ================================================= */}
                {/* ================= DSA ============================ */}
                {/* ================================================= */}

                {page === "dsa" && (

                    <DSA
                        goToLearning={() => setPage("learning")}
                    />

                )}

                {/* ================================================= */}
                {/* ================= JAVASCRIPT ==================== */}
                {/* ================================================= */}

                {page === "javascript" && (

                    <JavaScript
                        goToLearning={() => setPage("learning")}
                    />

                )}

                {/* ================================================= */}
                {/* ================= JAVA =========================== */}
                {/* ================================================= */}

                {page === "java" && (

                    <Java
                        goToLearning={() => setPage("learning")}
                    />

                )}

                {/* ================================================= */}
                {/* ================= DBMS =========================== */}
                {/* ================================================= */}

                {page === "dbms" && (

                    <DBMS
                        goToLearning={() => setPage("learning")}
                    />

                )}

                {/* ================================================= */}
                {/* ================= FULL STACK ===================== */}
                {/* ================================================= */}

                {page === "fullstack" && (

                    <FullStack
                        goBack={() => setPage("learning")}
                    />

                )}

                {/* ================================================= */}
                {/* ================= CAREER ========================= */}
                {/* ================================================= */}

                {/* ================================================= */}
                {/* ================= CAREER HUB ==================== */}
                {/* ================================================= */}

                {page === "career" && (
                    <div className="gp-career">
                        <h2>💼 Career Preparation</h2>
                        <p className="gp-intro">
                            Build the skills and confidence to move from campus to career. Learn how to present your work,
                            practise interviews, and find and apply for internships.
                        </p>

                        <div className="gp-grid">
                            <section className="gp-card">
                                <h3>🎯 Placement Preparation</h3>
                                <p className="gp-muted">Build a structured plan for aptitude, coding interviews, professional profiles and company-specific hiring preparation.</p>
                                <button className="gp-button gp-primary" onClick={() => setPage("placementPrep")}>Prepare for Placements →</button>
                            </section>
                            <section className="gp-card">
                                <h3>✨ AI Career Mentor</h3>
                                <p className="gp-muted">Get personalized guidance using your student profile, learning progress, and recent quiz results.</p>
                                <button className="gp-button gp-primary" onClick={() => setPage("careerMentor")}>Talk to Your Mentor →</button>
                            </section>
                            <section className="gp-card">
                                <h3>📄 Resume Building</h3>
                                <p className="gp-muted">Learn what recruiters expect, understand projects and hackathons, and build a resume with a live preview.</p>
                                <button className="gp-button gp-primary" onClick={() => setPage("resumeBuilder")}>Build My Resume →</button>
                            </section>
                            <section className="gp-card">
                                <h3>🎯 Interview Preparation</h3>
                                <p className="gp-muted">Follow a preparation roadmap, explore learning platforms, and practise technical and behavioral questions with feedback.</p>
                                <button className="gp-button gp-primary" onClick={() => setPage("interviewPrep")}>Start Practising →</button>
                            </section>
                            <section className="gp-card">
                                <h3>🚀 Internship Preparation</h3>
                                <p className="gp-muted">Understand year-wise opportunities, find application platforms, follow an application checklist, and track your applications.</p>
                                <button className="gp-button gp-primary" onClick={() => setPage("internshipPrep")}>Find Internships →</button>
                            </section>
                        </div>

                        <hr />
                        <button onClick={() => setPage("dashboard")}>← Back to Dashboard</button>
                    </div>
                )}

                {/* ================================================= */}
                {/* ================= PLACEMENT PREPARATION ========== */}
                {/* ================================================= */}

                {page === "placementPrep" && (
                    <PlacementPreparation
                        student={student}
                        selectedRole={selectedRole}
                        onBack={() => setPage("career")}
                    />
                )}

                {/* ================================================= */}
                {/* ================= AI CAREER MENTOR =============== */}
                {/* ================================================= */}

                {page === "careerMentor" && (
                    <CareerMentor
                        student={student}
                        selectedRole={selectedRole}
                        onBack={() => setPage("career")}
                    />
                )}

                {/* ================================================= */}
                {/* ================= RESUME BUILDER ================= */}
                {/* ================================================= */}

                {page === "resumeBuilder" && (
                    <div className="gp-career">
                        <div className="gp-no-print">
                            <h2>📄 Resume Building</h2>
                            <p className="gp-intro">A resume is a concise, truthful summary of your education, skills and relevant work. You do not need years of experience to start: strong academic projects, hackathons, volunteering and coursework can count when they demonstrate relevant skills.</p>

                            <div className="gp-grid">
                                <section className="gp-card">
                                    <h3>What to include</h3>
                                    <ul>
                                        <li><strong>Contact:</strong> professional email, phone, city and relevant profile links.</li>
                                        <li><strong>Education:</strong> degree, branch, college, expected graduation and CGPA if appropriate.</li>
                                        <li><strong>Skills:</strong> languages, tools and technologies you can discuss confidently.</li>
                                        <li><strong>Projects:</strong> problem, what you built, your contribution, technologies and results.</li>
                                        <li><strong>Hackathons:</strong> event, project, your role, achievement or what you learned.</li>
                                        <li><strong>Certifications:</strong> relevant course, issuing organization and completion date.</li>
                                        <li><strong>Experience:</strong> internships, volunteering, leadership, open-source work or other relevant responsibilities.</li>
                                    </ul>
                                </section>
                                <section className="gp-card">
                                    <h3>How to make it stronger</h3>
                                    <ul>
                                        <li>Tailor skills and project details to the role you are applying for.</li>
                                        <li>Use clear action verbs and specific, truthful outcomes where available.</li>
                                        <li>Keep formatting consistent, readable and ATS-friendly; avoid graphics that hide important text.</li>
                                        <li>Check spelling, dates, links and contact details before sending.</li>
                                        <li>Never invent skills, certificates, metrics or responsibilities.</li>
                                    </ul>
                                    <p className="gp-muted"><strong>Project example:</strong> “Built a recipe recommendation web app using Python and an LLM API; implemented ingredient input and saved recipe history.” Adapt the example to work you actually completed.</p>
                                </section>
                            </div>

                            <h3>Enter your details</h3>
                            <p className="gp-muted">Your draft is saved in this browser automatically. Use line breaks to separate projects, skills or achievements.</p>

                            <div className="gp-form">
                                <div className="gp-field"><label htmlFor="resume-fullName">Full name *</label><input id="resume-fullName" name="fullName" value={resumeData.fullName || ""} onChange={updateResumeField} placeholder="Your full name" /></div>
                                <div className="gp-field"><label htmlFor="resume-email">Professional email *</label><input id="resume-email" name="email" type="email" value={resumeData.email || ""} onChange={updateResumeField} placeholder="you@example.com" /></div>
                                <div className="gp-field"><label htmlFor="resume-phone">Phone</label><input id="resume-phone" name="phone" value={resumeData.phone || ""} onChange={updateResumeField} placeholder="Your contact number" /></div>
                                <div className="gp-field"><label htmlFor="resume-location">Location</label><input id="resume-location" name="location" value={resumeData.location || ""} onChange={updateResumeField} placeholder="City, State" /></div>
                                <div className="gp-field"><label htmlFor="resume-linkedin">LinkedIn URL</label><input id="resume-linkedin" name="linkedin" value={resumeData.linkedin || ""} onChange={updateResumeField} placeholder="https://linkedin.com/in/..." /></div>
                                <div className="gp-field"><label htmlFor="resume-github">GitHub / Portfolio URL</label><input id="resume-github" name="github" value={resumeData.github || ""} onChange={updateResumeField} placeholder="https://github.com/..." /></div>
                                <div className="gp-field gp-full"><label htmlFor="resume-summary">Professional summary</label><textarea id="resume-summary" name="summary" rows="3" value={resumeData.summary || ""} onChange={updateResumeField} placeholder="2–3 lines about your current studies, relevant strengths and target role." /></div>
                                <div className="gp-field gp-full"><label htmlFor="resume-education">Education</label><textarea id="resume-education" name="education" rows="3" value={resumeData.education || ""} onChange={updateResumeField} placeholder="Degree | College | Graduation year | CGPA (if you want to include it)" /></div>
                                <div className="gp-field gp-full"><label htmlFor="resume-skills">Technical skills</label><textarea id="resume-skills" name="skills" rows="3" value={resumeData.skills || ""} onChange={updateResumeField} placeholder="Programming languages, databases, tools and technologies you can explain." /></div>
                                <div className="gp-field gp-full"><label htmlFor="resume-projects">Projects</label><textarea id="resume-projects" name="projects" rows="5" value={resumeData.projects || ""} onChange={updateResumeField} placeholder="Project name — problem solved; your contribution; technologies; outcome or what you learned." /></div>
                                <div className="gp-field gp-full"><label htmlFor="resume-hackathons">Hackathons, competitions and achievements</label><textarea id="resume-hackathons" name="hackathons" rows="3" value={resumeData.hackathons || ""} onChange={updateResumeField} placeholder="Event, year, team role, award or contribution. Include coding competitions if relevant." /></div>
                                <div className="gp-field gp-full"><label htmlFor="resume-certifications">Certifications and courses</label><textarea id="resume-certifications" name="certifications" rows="3" value={resumeData.certifications || ""} onChange={updateResumeField} placeholder="Certification/course — issuing organization — year. Prioritize relevant, completed items." /></div>
                                <div className="gp-field gp-full"><label htmlFor="resume-experience">Internships, volunteering and leadership</label><textarea id="resume-experience" name="experience" rows="4" value={resumeData.experience || ""} onChange={updateResumeField} placeholder="Organization, role, dates, responsibilities and meaningful outcomes. Include only genuine experience." /></div>
                            </div>
                        </div>

                        <h3 className="gp-no-print">Live resume preview</h3>
                        <section className="gp-resume-preview">
                            <h2>{resumeData.fullName || "Your Name"}</h2>
                            <p className="gp-resume-contact">{[resumeData.email, resumeData.phone, resumeData.location].filter(Boolean).join(" | ") || "Email | Phone | Location"}</p>
                            {(resumeData.linkedin || resumeData.github) && <p className="gp-resume-contact">{[resumeData.linkedin, resumeData.github].filter(Boolean).join(" | ")}</p>}
                            <hr />
                            {resumeData.summary && <><h3>Professional Summary</h3><p className="gp-resume-lines">{resumeData.summary}</p></>}
                            {resumeData.education && <><h3>Education</h3><p className="gp-resume-lines">{resumeData.education}</p></>}
                            {resumeData.skills && <><h3>Technical Skills</h3><p className="gp-resume-lines">{resumeData.skills}</p></>}
                            {resumeData.projects && <><h3>Projects</h3><p className="gp-resume-lines">{resumeData.projects}</p></>}
                            {resumeData.hackathons && <><h3>Hackathons, Competitions and Achievements</h3><p className="gp-resume-lines">{resumeData.hackathons}</p></>}
                            {resumeData.certifications && <><h3>Certifications and Courses</h3><p className="gp-resume-lines">{resumeData.certifications}</p></>}
                            {resumeData.experience && <><h3>Experience, Volunteering and Leadership</h3><p className="gp-resume-lines">{resumeData.experience}</p></>}
                            {!resumeData.summary && !resumeData.education && !resumeData.skills && !resumeData.projects && !resumeData.hackathons && !resumeData.certifications && !resumeData.experience && <p>Fill in the form to see your resume content here.</p>}
                        </section>

                        <div className="gp-actions gp-no-print">
                            <button className="gp-button gp-primary" onClick={() => window.print()}>🖨️ Print / Save as PDF</button>
                            <button className="gp-button" onClick={() => setPage("career")}>← Career Preparation</button>
                            <button className="gp-button" onClick={() => setPage("dashboard")}>← Dashboard</button>
                        </div>
                    </div>
                )}

                {/* ================================================= */}
                {/* ================= INTERVIEW PREP ================= */}
                {/* ================================================= */}

                {page === "interviewPrep" && (
                    <div className="gp-career">
                        <h2>🎯 Interview Preparation</h2>
                        <p className="gp-intro">Confidence comes from repeated practice, understanding why an answer works, and learning from mistakes. Use this section as a starting point, then practise consistently on external platforms too.</p>

                        <section className="gp-card">
                            <h3>A practical preparation roadmap</h3>
                            <ol>
                                <li><strong>Build foundations:</strong> revise one programming language, OOP, DBMS, SQL, operating systems and computer networks according to your target role.</li>
                                <li><strong>Practise DSA:</strong> begin with arrays, strings, hash maps, searching, sorting, stacks, queues, linked lists, trees and graphs. Explain time and space complexity.</li>
                                <li><strong>Know your projects:</strong> explain the problem, architecture, your exact contribution, trade-offs, challenges, testing and future improvements.</li>
                                <li><strong>Practise aptitude:</strong> quantitative aptitude, logical reasoning and verbal ability when required by the employer.</li>
                                <li><strong>Prepare HR stories:</strong> teamwork, conflict, learning from failure, strengths, improvement areas and why you want the role.</li>
                                <li><strong>Simulate interviews:</strong> answer aloud, set a timer, review gaps and repeat the questions you found difficult.</li>
                            </ol>
                        </section>

                        <h3>Useful practice platforms</h3>
                        <div className="gp-link-list">
                            <div className="gp-resource"><div><strong>LeetCode</strong><div className="gp-muted">Coding problems and interview-style practice.</div></div><a href="https://leetcode.com/problemset/" target="_blank" rel="noreferrer">Open LeetCode ↗</a></div>
                            <div className="gp-resource"><div><strong>GeeksforGeeks</strong><div className="gp-muted">DSA explanations, computer science topics and interview questions.</div></div><a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer">Open GeeksforGeeks ↗</a></div>
                            <div className="gp-resource"><div><strong>HackerRank</strong><div className="gp-muted">Programming, SQL and skill practice challenges.</div></div><a href="https://www.hackerrank.com/" target="_blank" rel="noreferrer">Open HackerRank ↗</a></div>
                            <div className="gp-resource"><div><strong>InterviewBit</strong><div className="gp-muted">Interview preparation and coding practice resources.</div></div><a href="https://www.interviewbit.com/" target="_blank" rel="noreferrer">Open InterviewBit ↗</a></div>
                        </div>

                        <h3>Practice questions</h3>
                        <p className="gp-muted">Question {interviewQuestionIndex + 1} of {interviewQuestions.length} · {interviewAnsweredCount} answered · Category: {activeInterviewQuestion.category} · {activeInterviewQuestion.level}</p>
                        <div className="gp-card">
                            <h3>{activeInterviewQuestion.question}</h3>
                            <div className="gp-question-options">
                                {activeInterviewQuestion.options.map((option, index) => {
                                    const selected = interviewResponses[activeInterviewQuestion.id] === index;
                                    return (
                                        <button
                                            key={option}
                                            className={`gp-option ${selected ? "gp-selected" : ""}`}
                                            onClick={() => setInterviewResponses((previous) => ({ ...previous, [activeInterviewQuestion.id]: index }))}
                                            aria-pressed={selected}
                                        >
                                            {String.fromCharCode(65 + index)}. {option}
                                        </button>
                                    );
                                })}
                            </div>
                            {interviewResponses[activeInterviewQuestion.id] !== undefined && (
                                <div className="gp-feedback" role="status">
                                    <strong>{interviewResponses[activeInterviewQuestion.id] === activeInterviewQuestion.correct ? "Correct — well done!" : "Not quite. Use this as a learning opportunity."}</strong>
                                    <p>{activeInterviewQuestion.explanation}</p>
                                    <p><strong>Interview tip:</strong> {activeInterviewQuestion.tip}</p>
                                </div>
                            )}
                            <div className="gp-actions">
                                <button className="gp-button" disabled={interviewQuestionIndex === 0} onClick={() => setInterviewQuestionIndex((index) => Math.max(0, index - 1))}>← Previous</button>
                                <button className="gp-button gp-primary" disabled={interviewQuestionIndex === interviewQuestions.length - 1} onClick={() => setInterviewQuestionIndex((index) => Math.min(interviewQuestions.length - 1, index + 1))}>Next question →</button>
                            </div>
                        </div>

                        <h3>Open-ended practice: answer aloud before revealing the prompts</h3>
                        <div className="gp-grid">
                            <details className="gp-card"><summary><strong>Explain a project you built</strong></summary><p>Cover the problem, who it helps, your contribution, the technology choices, one challenge, how you tested it and what you would improve. Be ready to explain the code you wrote.</p></details>
                            <details className="gp-card"><summary><strong>Tell me about yourself</strong></summary><p>Use a concise structure: current studies and interests → relevant skills or projects → what role you are working toward. Avoid reciting your entire life story.</p></details>
                            <details className="gp-card"><summary><strong>Describe a challenge or mistake</strong></summary><p>Use STAR: Situation, Task, Action and Result. Be honest, explain what you personally did, and finish with what you learned.</p></details>
                            <details className="gp-card"><summary><strong>Practise a coding problem</strong></summary><p>Try “Two Sum”: given an array and a target, return indices of two values that add up to the target. First describe a brute-force approach, then consider a hash map, complexity, edge cases and tests.</p></details>
                        </div>

                        <div className="gp-actions">
                            <button onClick={() => setPage("career")}>← Career Preparation</button>
                            <button onClick={() => setPage("dashboard")}>← Dashboard</button>
                        </div>
                    </div>
                )}

                {/* ================================================= */}
                {/* ================= INTERNSHIP PREP ================ */}
                {/* ================================================= */}

                {page === "internshipPrep" && (
                    <div className="gp-career">
                        <h2>🚀 Internship Preparation</h2>
                        <p className="gp-intro">You can start exploring opportunities before your final year. Eligibility depends on each listing: check graduation dates, current year, required skills, duration, location and whether the internship is open to students.</p>

                        <h3>What can students do in each year?</h3>
                        <div className="gp-grid">
                            <section className="gp-card"><h3>Year 1</h3><p>Build programming and communication foundations. Look for beginner-friendly opportunities, campus projects, volunteering, open-source contributions, competitions and eligible short internships. Many technical roles may require skills you are still developing.</p></section>
                            <section className="gp-card"><h3>Year 2</h3><p>Build 2–3 explainable projects, strengthen DSA or role-specific skills, participate in hackathons and apply to internships whose prerequisites you meet. Check whether the employer accepts pre-final-year students.</p></section>
                            <section className="gp-card"><h3>Year 3</h3><p>Actively look for summer, winter, research and pre-placement internship opportunities. Prepare your resume, coding practice and project explanations. Many companies recruit pre-final-year students, but criteria vary.</p></section>
                            <section className="gp-card"><h3>Final Year</h3><p>Search for internships aligned with your graduation date and full-time goals. Check whether the position can convert to a full-time role and whether your college permits the internship during the semester.</p></section>
                        </div>

                        <h3>Where to find internships</h3>
                        <div className="gp-link-list">
                            <div className="gp-resource"><div><strong>Internshala</strong><div className="gp-muted">Student internship listings across roles and locations.</div></div><a href="https://internshala.com/internships/" target="_blank" rel="noreferrer">Search Internshala ↗</a></div>
                            <div className="gp-resource"><div><strong>LinkedIn Jobs</strong><div className="gp-muted">Search “intern”, filter by location and check company pages.</div></div><a href="https://www.linkedin.com/jobs/" target="_blank" rel="noreferrer">Search LinkedIn Jobs ↗</a></div>
                            <div className="gp-resource"><div><strong>Wellfound</strong><div className="gp-muted">Explore startup roles; check each listing for student eligibility.</div></div><a href="https://wellfound.com/jobs" target="_blank" rel="noreferrer">Explore Wellfound ↗</a></div>
                            <div className="gp-resource"><div><strong>Company career pages</strong><div className="gp-muted">Use official career sites for internships, student programs and research roles.</div></div><a href="https://www.google.com/search?q=official+company+careers+internships" target="_blank" rel="noreferrer">Find company career pages ↗</a></div>
                        </div>
                        <p className="gp-muted">Listings and eligibility change. Always confirm details on the employer’s official page before applying.</p>

                        <section className="gp-card">
                            <h3>Application checklist</h3>
                            <div className="gp-checklist">
                                {[
                                    ["resume", "Prepare a tailored, proofread resume and working portfolio links."],
                                    ["eligibility", "Check year, graduation date, skills, location, duration and deadlines."],
                                    ["company", "Research the company, product/team and role before applying."],
                                    ["application", "Submit the requested resume, cover letter, form or assessment."],
                                    ["tracking", "Record the application date and save the job description."],
                                    ["followup", "Follow up politely when appropriate and keep preparing for interviews."],
                                ].map(([id, label]) => (
                                    <label className="gp-checkline" key={id}>
                                        <input type="checkbox" checked={Boolean(internshipChecklist[id])} onChange={(event) => setInternshipChecklist((previous) => ({ ...previous, [id]: event.target.checked }))} />
                                        <span>{label}</span>
                                    </label>
                                ))}
                            </div>
                        </section>

                        <section className="gp-card" style={{ marginTop: 20 }}>
                            <h3>My internship application tracker</h3>
                            <p className="gp-muted">Add opportunities you want to pursue. Your tracker is saved in this browser; it is not shared with employers or synced to your account database.</p>
                            <form onSubmit={addInternshipApplication} className="gp-form">
                                <div className="gp-field"><label htmlFor="internship-company">Company *</label><input id="internship-company" required value={internshipForm.company} onChange={(event) => setInternshipForm((previous) => ({ ...previous, company: event.target.value }))} placeholder="Company name" /></div>
                                <div className="gp-field"><label htmlFor="internship-role">Role / internship title *</label><input id="internship-role" required value={internshipForm.role} onChange={(event) => setInternshipForm((previous) => ({ ...previous, role: event.target.value }))} placeholder="e.g. Web Development Intern" /></div>
                                <div className="gp-field"><label htmlFor="internship-platform">Found on</label><select id="internship-platform" value={internshipForm.platform} onChange={(event) => setInternshipForm((previous) => ({ ...previous, platform: event.target.value }))}><option value="">Choose platform</option><option>Internshala</option><option>LinkedIn</option><option>Wellfound</option><option>Company website</option><option>College / referral</option><option>Other</option></select></div>
                                <div className="gp-field"><label htmlFor="internship-deadline">Deadline (if known)</label><input id="internship-deadline" type="date" value={internshipForm.deadline} onChange={(event) => setInternshipForm((previous) => ({ ...previous, deadline: event.target.value }))} /></div>
                                <div className="gp-field"><label htmlFor="internship-status">Status</label><select id="internship-status" value={internshipForm.status} onChange={(event) => setInternshipForm((previous) => ({ ...previous, status: event.target.value }))}><option>Interested</option><option>Preparing application</option><option>Applied</option><option>Assessment / interview</option><option>Offer received</option><option>Rejected</option><option>Closed</option></select></div>
                                <div className="gp-field" style={{ justifyContent: "end" }}><button type="submit" className="gp-button gp-primary">＋ Add opportunity</button></div>
                            </form>

                            {internshipApplications.length === 0 ? (
                                <p className="gp-muted" style={{ marginTop: 16 }}>No opportunities tracked yet. Add an internship above to get started.</p>
                            ) : (
                                <div className="gp-table-wrap" style={{ marginTop: 18 }}>
                                    <table className="gp-table">
                                        <thead><tr><th>Company / role</th><th>Source / deadline</th><th>Status</th><th>Action</th></tr></thead>
                                        <tbody>
                                            {internshipApplications.map((application) => (
                                                <tr key={application.id}>
                                                    <td><strong>{application.company}</strong><br />{application.role}</td>
                                                    <td>{application.platform || "Not specified"}<br />{application.deadline || "No deadline entered"}</td>
                                                    <td><select aria-label={`Status for ${application.company}`} value={application.status} onChange={(event) => setInternshipApplications((previous) => previous.map((item) => item.id === application.id ? { ...item, status: event.target.value } : item))}><option>Interested</option><option>Preparing application</option><option>Applied</option><option>Assessment / interview</option><option>Offer received</option><option>Rejected</option><option>Closed</option></select></td>
                                                    <td><button type="button" onClick={() => setInternshipApplications((previous) => previous.filter((item) => item.id !== application.id))}>Remove</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>

                        <section className="gp-card" style={{ marginTop: 20 }}>
                            <h3>How to apply professionally</h3>
                            <ol>
                                <li>Read the full job description and confirm you meet the eligibility requirements.</li>
                                <li>Tailor your resume to the skills and projects relevant to that role.</li>
                                <li>Complete the application accurately and use a professional email address.</li>
                                <li>If emailing a recruiter, keep the subject clear, introduce yourself briefly, name the role, mention one relevant qualification and attach the requested documents.</li>
                                <li>Track the date and next step. Never pay a recruiter to secure an internship, and verify suspicious offers through official company channels.</li>
                            </ol>
                        </section>

                        <div className="gp-actions">
                            <button onClick={() => setPage("career")}>← Career Preparation</button>
                            <button onClick={() => setPage("dashboard")}>← Dashboard</button>
                        </div>
                    </div>
                )}

            </div>

        </div>

    );

}

export default App;
