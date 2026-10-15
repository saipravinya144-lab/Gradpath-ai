import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const CybersecurityProjects = ({ goBack }) => {
  const subtopics = [
    {
      id: 1,
      title: "Network Security Monitoring Project",
      lesson: {
        explanation: `
In this project, you build a small defensive network security monitoring system.

The objective is to understand how network activity can be collected, observed, and analyzed for suspicious patterns.

The project can use sample or authorized network data rather than monitoring systems without permission.

Important components include network event collection, traffic or connection analysis, filtering, alert generation, and a simple monitoring dashboard.

The system can display information such as source and destination information, protocols, timestamps, event counts, and detected anomalies.

You can create rules for identifying unusual activity, such as an unexpected number of connection attempts.

The project should clearly distinguish between normal activity and events that require further investigation.

A good implementation should include documentation explaining the data source, detection logic, limitations, and responsible-use considerations.
        `,
        mistakes: [
          "Monitoring networks without authorization.",
          "Treating every unusual connection as a confirmed attack.",
          "Collecting sensitive information unnecessarily.",
          "Building detection rules without testing them against normal traffic.",
        ],
        quiz: [
          {
            question: "What is the main goal of a network security monitoring project?",
            options: [
              "Observe and analyze network activity for security events",
              "Increase internet speed",
              "Design a social media application",
              "Replace the operating system",
            ],
            answer: "Observe and analyze network activity for security events",
          },
          {
            question: "What should be used when developing a student monitoring project?",
            options: [
              "Authorized or sample network data",
              "Private networks without permission",
              "Random public credentials",
              "Confidential organizational traffic",
            ],
            answer: "Authorized or sample network data",
          },
          {
            question: "What can a monitoring dashboard display?",
            options: [
              "Network events and detected anomalies",
              "Only computer wallpaper",
              "Only keyboard settings",
              "Only application icons",
            ],
            answer: "Network events and detected anomalies",
          },
        ],
      },
    },

    {
      id: 2,
      title: "Vulnerability Assessment Project",
      lesson: {
        explanation: `
A vulnerability assessment project identifies security weaknesses in systems that are authorized for testing.

The project can begin with asset identification and an inventory of systems, applications, and services included in the assessment.

Vulnerability scanning tools can then be used in an authorized test environment to identify known weaknesses and configuration problems.

The results should be reviewed carefully because automated scanners can produce false positives or incomplete findings.

Each finding can be classified according to factors such as severity, affected asset, potential impact, and remediation difficulty.

A useful project should generate a vulnerability report containing findings, evidence, risk information, and recommended remediation.

The goal is not simply to find vulnerabilities but to help prioritize and address them responsibly.
        `,
        mistakes: [
          "Scanning systems without permission.",
          "Treating scanner results as automatically accurate.",
          "Ignoring false positives.",
          "Reporting vulnerabilities without remediation recommendations.",
        ],
        quiz: [
          {
            question: "What is the purpose of a vulnerability assessment?",
            options: [
              "Identify and prioritize security weaknesses",
              "Delete all system files",
              "Increase network bandwidth",
              "Create computer games",
            ],
            answer: "Identify and prioritize security weaknesses",
          },
          {
            question: "Why should automated scanner results be reviewed?",
            options: [
              "Scanners can produce false positives",
              "Scanners never find useful information",
              "Scanning automatically fixes every issue",
              "Reports do not require verification",
            ],
            answer: "Scanners can produce false positives",
          },
          {
            question: "What should a vulnerability report include?",
            options: [
              "Findings and recommended remediation",
              "Only random screenshots",
              "User passwords",
              "Unrelated application code",
            ],
            answer: "Findings and recommended remediation",
          },
        ],
      },
    },

    {
      id: 3,
      title: "Secure Web Application Project",
      lesson: {
        explanation: `
A secure web application project demonstrates how security can be integrated into application development.

The project can include user registration, authentication, authorization, input validation, session management, secure password storage, and appropriate security headers.

Input validation helps ensure that application data follows expected formats and constraints.

Authentication verifies the identity of a user, while authorization determines what that user is allowed to access.

Passwords should never be stored as plain text. Applications should use appropriate password hashing mechanisms.

Session and access controls should be designed carefully so that users cannot access resources belonging to other users.

Security testing can be performed against a controlled development environment to identify weaknesses before deployment.

The project should document the security controls implemented and explain how they reduce common web application risks.
        `,
        mistakes: [
          "Storing passwords in plain text.",
          "Trusting user input without validation.",
          "Using authentication without proper authorization checks.",
          "Testing security controls only after deployment.",
        ],
        quiz: [
          {
            question: "What does authentication verify?",
            options: [
              "The identity of a user",
              "The color of a webpage",
              "The speed of a processor",
              "The size of a database",
            ],
            answer: "The identity of a user",
          },
          {
            question: "How should application passwords be stored?",
            options: [
              "Using secure password hashing",
              "As plain text",
              "Inside public source code",
              "In browser history",
            ],
            answer: "Using secure password hashing",
          },
          {
            question: "What is authorization responsible for?",
            options: [
              "Determining what an authenticated user can access",
              "Checking monitor brightness",
              "Creating network cables",
              "Compressing images",
            ],
            answer: "Determining what an authenticated user can access",
          },
        ],
      },
    },

    {
      id: 4,
      title: "Digital Forensics Investigation",
      lesson: {
        explanation: `
A digital forensics project demonstrates how digital evidence can be collected, preserved, analyzed, and documented.

A student project should use sample evidence or devices for which the investigator has explicit authorization.

The investigation can examine artifacts such as files, metadata, system logs, browser information, and other relevant records.

Evidence should be preserved carefully and examined using appropriate forensic procedures.

Timeline analysis can help organize events chronologically and identify relationships between different artifacts.

Investigators should document the evidence source, methods used, observations, and findings.

A final forensic report should clearly separate observed evidence from interpretation.

The project should also document limitations, assumptions, and the scope of the investigation.
        `,
        mistakes: [
          "Investigating devices without authorization.",
          "Modifying original evidence unnecessarily.",
          "Failing to document evidence handling.",
          "Presenting assumptions as confirmed facts.",
        ],
        quiz: [
          {
            question: "What should a student forensic project use?",
            options: [
              "Authorized or sample evidence",
              "Someone else's private device",
              "Stolen data",
              "Random confidential records",
            ],
            answer: "Authorized or sample evidence",
          },
          {
            question: "What can timeline analysis help with?",
            options: [
              "Understanding the chronological sequence of events",
              "Increasing storage capacity",
              "Changing evidence timestamps",
              "Deleting forensic artifacts",
            ],
            answer: "Understanding the chronological sequence of events",
          },
          {
            question: "What should a forensic report distinguish?",
            options: [
              "Observed evidence and interpretation",
              "Passwords and usernames",
              "Hardware and furniture",
              "Public and private websites",
            ],
            answer: "Observed evidence and interpretation",
          },
        ],
      },
    },

    {
      id: 5,
      title: "Security Operations / SIEM Project",
      lesson: {
        explanation: `
A Security Operations or SIEM project demonstrates how security logs can be collected, correlated, and analyzed.

The project can use simulated logs or logs from an authorized lab environment.

Different sources can generate events such as authentication attempts, application activity, network events, and system changes.

A centralized system can normalize these events and make them easier to search and correlate.

Detection rules can identify patterns that deserve investigation, such as repeated authentication failures followed by unusual account activity.

A dashboard can display alert severity, timestamps, affected systems, event categories, and investigation status.

The project can also demonstrate an incident workflow from alert generation through investigation and documentation.

The objective is to show how security teams transform large amounts of event data into useful security information.
        `,
        mistakes: [
          "Using private organizational logs without permission.",
          "Generating too many low-value alerts.",
          "Assuming every alert represents a confirmed incident.",
          "Failing to document detection logic.",
        ],
        quiz: [
          {
            question: "What is a SIEM project designed to demonstrate?",
            options: [
              "Collection and analysis of security events",
              "Computer hardware manufacturing",
              "Website graphic design",
              "Mobile phone repair",
            ],
            answer: "Collection and analysis of security events",
          },
          {
            question: "What can detection rules identify?",
            options: [
              "Suspicious patterns in events",
              "Monitor resolution",
              "Keyboard size",
              "Office furniture",
            ],
            answer: "Suspicious patterns in events",
          },
          {
            question: "What can a SIEM dashboard display?",
            options: [
              "Security alerts and event information",
              "Only music files",
              "Only photographs",
              "Only browser themes",
            ],
            answer: "Security alerts and event information",
          },
        ],
      },
    },

    {
      id: 6,
      title: "Cybersecurity Capstone Project",
      lesson: {
        explanation: `
The cybersecurity capstone project combines concepts learned throughout the roadmap into one larger defensive security solution.

A capstone can combine areas such as security monitoring, vulnerability assessment, authentication, web security, digital forensics, incident response, and cloud security.

The project should begin with a clearly defined problem statement, objectives, scope, and requirements.

A complete implementation should include a suitable architecture, security controls, testing, documentation, and an explanation of limitations.

Testing should be performed only in an authorized environment.

The project should demonstrate how security concepts work together rather than simply presenting separate features.

A strong final presentation can include the problem, proposed solution, architecture, implementation, test results, screenshots or demonstrations, and future improvements.

The final project should emphasize responsible and defensive cybersecurity practices.
        `,
        mistakes: [
          "Trying to include too many unrelated features.",
          "Building without defining project scope.",
          "Testing against systems without authorization.",
          "Skipping documentation and security testing.",
        ],
        quiz: [
          {
            question: "What is the purpose of a cybersecurity capstone?",
            options: [
              "Combine multiple cybersecurity concepts into a complete solution",
              "Replace all security professionals",
              "Create unrelated applications",
              "Disable security controls",
            ],
            answer:
              "Combine multiple cybersecurity concepts into a complete solution",
          },
          {
            question: "What should be defined before implementation?",
            options: [
              "Problem, objectives, scope, and requirements",
              "Only the project logo",
              "Only the application color",
              "Only the presentation font",
            ],
            answer:
              "Problem, objectives, scope, and requirements",
          },
          {
            question: "Where should cybersecurity project testing be performed?",
            options: [
              "In an authorized environment",
              "Against random public systems",
              "Against private accounts",
              "Against unrelated organizations",
            ],
            answer: "In an authorized environment",
          },
        ],
      },
    },
  ];

  const totalLessons = subtopics.length;

  const shuffleArray = (array) => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }

    return shuffled;
  };

  const [currentLesson, setCurrentLesson] = useState(0);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-cybersecurity-projects", subtopics);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const lesson = subtopics[currentLesson];
  const isLastLesson = currentLesson === subtopics.length - 1;
  const quizQuestion = lesson.lesson.quiz[questionIndex];
  const options = shuffledQuizOptions[lesson.id][questionIndex];

  const progress =
    (completedLessons.length / totalLessons) * 100;

  const lessonProgress =
    ((questionIndex + (submitted ? 1 : 0)) /
      lesson.lesson.quiz.length) *
    100;

  const submitAnswer = () => {
    if (!selectedAnswer || submitted) return;

    setQuizAnswers((previous) => ({
      ...previous,
      [questionIndex]: selectedAnswer,
    }));

    setSubmitted(true);
  };

  const nextQuestion = async () => {
    if (!submitted) return;

    if (questionIndex === lesson.lesson.quiz.length - 1) {
      if (!completedLessons.includes(lesson.id)) {
        saveProgress(lesson.id);
      }

      const finalAnswers = {
        ...quizAnswers,
        [questionIndex]: selectedAnswer,
      };

      const finalScore = lesson.lesson.quiz.reduce((score, item, index) => score + (finalAnswers[index] === item.answer ? 1 : 0), 0);

      await saveQuizResult({
        subject: "Cybersecurity",
        role: "Cybersecurity",
        topic: lesson.title,
        topicId: lesson.id,
        score: finalScore,
        totalQuestions: lesson.lesson.quiz.length
      });

      setQuizAnswers(finalAnswers);
      setQuizFinished(true);
      return;
    }

    setQuestionIndex((prev) => prev + 1);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  const previousLesson = () => {
    setQuizFinished(false);
    setQuizAnswers({});
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  };

  const nextLesson = () => {
    setQuizFinished(false);
    setQuizAnswers({});
    if (!completedLessons.includes(lesson.id)) {
      saveProgress(lesson.id);
    }

    if (currentLesson < totalLessons - 1) {
      setCurrentLesson(currentLesson + 1);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  };

  const isCorrect = selectedAnswer === quizQuestion.answer;

  if (quizFinished) {
    const finalScore = lesson.lesson.quiz.reduce((score, item, index) => score + (quizAnswers[index] === item.answer ? 1 : 0), 0);
    const percentage = Math.round((finalScore / lesson.lesson.quiz.length) * 100);
    const passed = finalScore >= Math.ceil(lesson.lesson.quiz.length * 0.6);

    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ maxWidth: "700px", margin: "80px auto", background: "white", borderRadius: "16px", padding: "40px", textAlign: "center", border: "1px solid #bfdbfe", boxShadow: "0 8px 24px rgba(37, 99, 235, 0.08)" }}>
          <h1 style={{ color: "#1e3a8a" }}>🎉 Quiz Completed!</h1>
          <h2>{finalScore} / {lesson.lesson.quiz.length}</h2>
          <p style={{ fontSize: "22px", fontWeight: "700" }}>{percentage}%</p>
          <p style={{ color: passed ? "#15803d" : "#dc2626", fontWeight: "700" }}>{passed ? "Passed" : "Not Passed"}</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "25px" }}>
            <button onClick={() => { setQuestionIndex(0); setSelectedAnswer(""); setSubmitted(false); setQuizAnswers({}); setQuizFinished(false); }} style={{ border: "none", background: "#2563eb", color: "white", padding: "12px 20px", borderRadius: "8px", cursor: "pointer" }}>Retry Quiz</button>
            <button onClick={nextLesson} style={{ border: "1px solid #2563eb", background: "white", color: "#2563eb", padding: "12px 20px", borderRadius: "8px", cursor: "pointer" }}>{isLastLesson ? "Back to Topics" : "Next Lesson"}</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={goBack}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "1px solid #bfdbfe",
            background: "#ffffff",
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "600",
            marginBottom: "25px",
          }}
        >
          ← Back to Cybersecurity Roadmap
        </button>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <h1
            style={{
              color: "#1d4ed8",
              marginBottom: "8px",
            }}
          >
            💻 Cybersecurity Projects
          </h1>

          <p
            style={{
              color: "#64748b",
              marginBottom: "25px",
            }}
          >
            Apply cybersecurity concepts through practical,
            defensive, and authorized projects.
          </p>

          <div style={{ marginBottom: "30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              <span>Overall Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div
              style={{
                height: "10px",
                background: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: "#2563eb",
                  transition: "width 0.3s",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            {subtopics.map((topic, index) => {
              const completed = completedLessons.includes(topic.id);

              return (
                <div
                  key={topic.id}
                  style={{
                    border: "1px solid #dbeafe",
                    borderRadius: "12px",
                    padding: "16px",
                    background:
                      index === currentLesson
                        ? "#eff6ff"
                        : "#ffffff",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#64748b",
                      marginBottom: "5px",
                    }}
                  >
                    Project {index + 1}
                  </div>

                  <h3
                    style={{
                      margin: "5px 0 12px",
                      color: "#1e3a8a",
                      fontSize: "17px",
                    }}
                  >
                    {completed ? "✅ " : ""}
                    {topic.title}
                  </h3>

                  <button
                    onClick={() => {
                      setCurrentLesson(index);
                      setQuestionIndex(0);
                      setSelectedAnswer(null);
                      setSubmitted(false);
                    }}
                    style={{
                      width: "100%",
                      padding: "9px",
                      borderRadius: "7px",
                      border: "none",
                      background: "#2563eb",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Open Project
                  </button>
                </div>
              );
            })}
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e5e7eb",
              margin: "30px 0",
            }}
          />

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <h2
                style={{
                  color: "#1e3a8a",
                  margin: 0,
                }}
              >
                Project {currentLesson + 1}: {lesson.title}
              </h2>

              <span
                style={{
                  color: "#64748b",
                  fontWeight: "600",
                }}
              >
                {Math.round(lessonProgress)}%
              </span>
            </div>

            <div
              style={{
                height: "8px",
                background: "#e5e7eb",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "25px",
              }}
            >
              <div
                style={{
                  width: `${lessonProgress}%`,
                  height: "100%",
                  background: "#60a5fa",
                }}
              />
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "25px",
                lineHeight: "1.7",
                color: "#334155",
                whiteSpace: "pre-line",
              }}
            >
              {lesson.lesson.explanation}
            </div>

            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#1e3a8a" }}>
                ⚠️ Common Mistakes
              </h3>

              <ul style={{ lineHeight: "1.8" }}>
                {lesson.lesson.mistakes.map((mistake, index) => (
                  <li key={index}>{mistake}</li>
                ))}
              </ul>
            </div>

            <div
              style={{
                marginTop: "30px",
                padding: "25px",
                border: "1px solid #dbeafe",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#1e3a8a" }}>
                📝 Quick Quiz
              </h3>

              <p
                style={{
                  color: "#64748b",
                  marginBottom: "20px",
                }}
              >
                Question {questionIndex + 1} of{" "}
                {lesson.lesson.quiz.length}
              </p>

              <h3 style={{ marginBottom: "20px" }}>
                {quizQuestion.question}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {options.map((option) => {
                  let background = "#ffffff";
                  let border = "1px solid #cbd5e1";

                  if (submitted) {
                    if (option === quizQuestion.answer) {
                      background = "#dcfce7";
                      border = "1px solid #22c55e";
                    } else if (
                      option === selectedAnswer &&
                      option !== quizQuestion.answer
                    ) {
                      background = "#fee2e2";
                      border = "1px solid #ef4444";
                    }
                  } else if (option === selectedAnswer) {
                    background = "#dbeafe";
                    border = "1px solid #2563eb";
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => {
                        if (!submitted) {
                          setSelectedAnswer(option);
                        }
                      }}
                      style={{
                        textAlign: "left",
                        padding: "13px 15px",
                        borderRadius: "8px",
                        border,
                        background,
                        cursor: submitted
                          ? "default"
                          : "pointer",
                        fontSize: "15px",
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "15px",
                    borderRadius: "8px",
                    background: isCorrect
                      ? "#dcfce7"
                      : "#fef3c7",
                    color: isCorrect
                      ? "#166534"
                      : "#92400e",
                  }}
                >
                  {isCorrect ? (
                    <strong>✅ Correct answer!</strong>
                  ) : (
                    <>
                      <strong>❌ Incorrect answer.</strong>

                      <div style={{ marginTop: "6px" }}>
                        Correct answer:{" "}
                        <strong>{quizQuestion.answer}</strong>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {!submitted ? (
                  <button
                    onClick={submitAnswer}
                    disabled={!selectedAnswer}
                    style={{
                      padding: "11px 20px",
                      borderRadius: "8px",
                      border: "none",
                      background: selectedAnswer
                        ? "#2563eb"
                        : "#94a3b8",
                      color: "#ffffff",
                      cursor: selectedAnswer
                        ? "pointer"
                        : "not-allowed",
                      fontWeight: "600",
                    }}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    style={{
                      padding: "11px 20px",
                      borderRadius: "8px",
                      border: "none",
                      background: "#2563eb",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    {questionIndex <
                    lesson.lesson.quiz.length - 1
                      ? "Next Question →"
                      : currentLesson < totalLessons - 1
                      ? "Finish Project & Next →"
                      : "Finish Topic ✓"}
                  </button>
                )}
              </div>
            </div>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <button
                onClick={previousLesson}
                disabled={currentLesson === 0}
                style={{
                  padding: "11px 18px",
                  borderRadius: "8px",
                  border: "1px solid #bfdbfe",
                  background:
                    currentLesson === 0
                      ? "#e5e7eb"
                      : "#ffffff",
                  color:
                    currentLesson === 0
                      ? "#94a3b8"
                      : "#2563eb",
                  cursor:
                    currentLesson === 0
                      ? "not-allowed"
                      : "pointer",
                  fontWeight: "600",
                }}
              >
                ← Previous Project
              </button>

              {currentLesson < totalLessons - 1 && (
                <button
                  onClick={nextLesson}
                  style={{
                    padding: "11px 18px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Next Project →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityProjects;