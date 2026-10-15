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
                    "http://localhost:5000/student-profile",
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
                    "http://localhost:5000/learning-progress",
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
                    "http://localhost:5000/quiz-results",
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
                    "http://localhost:5000/student-profile",
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

                {page === "career" && (

                    <>

                        <h2>
                            💼 Career Preparation
                        </h2>

                        <p>
                            Prepare yourself for internships, placements and
                            interviews.
                        </p>

                        <hr />

                        <button>
                            Internship Preparation
                        </button>

                        <br />
                        <br />

                        <button>
                            Resume Building
                        </button>

                        <br />
                        <br />

                        <button>
                            Interview Preparation
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

            </div>

        </div>

    );

}

export default App;