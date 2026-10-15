import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// MONITORING & LOGGING — 7 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Monitoring Fundamentals",
    icon: "📊",
    lesson: {
      explanation:
        "Monitoring is the process of continuously observing systems, applications, infrastructure, and services to understand their health and performance. In cloud and DevOps environments, monitoring helps teams detect problems early and maintain reliable services.",
      points: [
        "Monitoring provides visibility into system health and performance.",
        "Metrics are numerical measurements collected from systems.",
        "Monitoring can cover infrastructure, applications, networks, and services.",
        "Alerts can notify teams when important conditions occur.",
        "Monitoring helps identify performance problems and failures.",
      ],
      example:
        "A cloud application can be monitored for CPU usage, memory usage, request rate, response time, and error rate. If the error rate suddenly increases, an alert can notify the DevOps team.",
      commonMistakes: [
        "Monitoring only CPU usage and ignoring application health.",
        "Creating alerts for every small change.",
        "Ignoring monitoring data after deployment.",
      ],
      quiz: [
        {
          question: "What is the main purpose of monitoring?",
          options: [
            "Observe system health and performance",
            "Replace source code",
            "Create user accounts",
            "Delete application logs",
          ],
          answer: "Observe system health and performance",
        },
        {
          question: "What is a metric?",
          options: [
            "A numerical measurement of a system or application",
            "A programming language",
            "A database table",
            "A network cable",
          ],
          answer:
            "A numerical measurement of a system or application",
        },
        {
          question: "What can an alert do?",
          options: [
            "Notify a team when a defined condition occurs",
            "Automatically write application code",
            "Replace a database",
            "Remove all logs",
          ],
          answer:
            "Notify a team when a defined condition occurs",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Metrics, Logs & Traces",
    icon: "📈",
    lesson: {
      explanation:
        "Metrics, logs, and traces provide different types of observability information. Metrics are numerical measurements, logs are records of events, and traces help follow a request as it moves through distributed services.",
      points: [
        "Metrics provide numerical information about system behavior.",
        "Logs record events and activities.",
        "Traces help follow requests across multiple services.",
        "The three types of telemetry complement each other.",
        "Using multiple signals makes troubleshooting easier.",
      ],
      example:
        "If a website becomes slow, metrics may show increased response time, logs may reveal application errors, and a distributed trace may identify which service is causing the delay.",
      commonMistakes: [
        "Treating logs and metrics as the same thing.",
        "Collecting traces without understanding what they represent.",
        "Looking at only one observability signal during an incident.",
      ],
      quiz: [
        {
          question: "What do metrics generally represent?",
          options: [
            "Numerical measurements",
            "Source code files",
            "User passwords",
            "Only database schemas",
          ],
          answer: "Numerical measurements",
        },
        {
          question: "What do logs primarily record?",
          options: [
            "Events and activities",
            "Only CPU temperature",
            "Only source code",
            "Only network cables",
          ],
          answer: "Events and activities",
        },
        {
          question: "What are traces useful for?",
          options: [
            "Following requests through distributed services",
            "Creating operating systems",
            "Replacing authentication",
            "Formatting hard drives",
          ],
          answer:
            "Following requests through distributed services",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Application Monitoring",
    icon: "🖥️",
    lesson: {
      explanation:
        "Application monitoring focuses on the health, performance, and behavior of software applications. Common measurements include response time, request rate, error rate, availability, and application-specific business metrics.",
      points: [
        "Application monitoring helps detect software failures.",
        "Response time measures how quickly an application responds.",
        "Error rate helps identify failed requests and operations.",
        "Availability measures whether a service is accessible.",
        "Business metrics can provide additional application insight.",
      ],
      example:
        "An e-commerce application can monitor checkout errors, API response times, request rates, and successful orders to understand both technical and business health.",
      commonMistakes: [
        "Monitoring infrastructure while ignoring application behavior.",
        "Ignoring error rates because CPU usage is normal.",
        "Collecting application data without defining useful thresholds.",
      ],
      quiz: [
        {
          question: "What does application monitoring focus on?",
          options: [
            "The health and performance of software applications",
            "Only physical cables",
            "Only cloud billing",
            "Only source code formatting",
          ],
          answer:
            "The health and performance of software applications",
        },
        {
          question: "What can response time tell a team?",
          options: [
            "How quickly an application responds to requests",
            "How many developers work on the project",
            "How large the source code is",
            "How many Git branches exist",
          ],
          answer:
            "How quickly an application responds to requests",
        },
        {
          question: "Why is error rate useful?",
          options: [
            "It helps identify failed requests and operations",
            "It automatically fixes bugs",
            "It replaces application testing",
            "It disables network access",
          ],
          answer:
            "It helps identify failed requests and operations",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Infrastructure Monitoring",
    icon: "🖧",
    lesson: {
      explanation:
        "Infrastructure monitoring observes the resources that support applications, including virtual machines, containers, networks, storage, and other cloud resources. It helps teams identify resource exhaustion and infrastructure failures.",
      points: [
        "Infrastructure monitoring can track CPU and memory usage.",
        "Disk utilization and storage capacity can be monitored.",
        "Network traffic and connectivity can be observed.",
        "Container and virtual machine health can be monitored.",
        "Infrastructure metrics can help with capacity planning.",
      ],
      example:
        "A DevOps team can monitor a virtual machine's CPU, memory, disk, and network utilization. A sustained increase in resource usage may indicate that additional capacity is needed.",
      commonMistakes: [
        "Monitoring only CPU and ignoring memory or disk usage.",
        "Ignoring storage capacity until a system runs out of space.",
        "Failing to monitor critical infrastructure components.",
      ],
      quiz: [
        {
          question: "Which is an infrastructure metric?",
          options: [
            "CPU utilization",
            "Git commit message",
            "HTML heading",
            "User interface color",
          ],
          answer: "CPU utilization",
        },
        {
          question: "Why monitor disk utilization?",
          options: [
            "To identify storage capacity problems",
            "To change application colors",
            "To create Git branches",
            "To replace authentication",
          ],
          answer:
            "To identify storage capacity problems",
        },
        {
          question: "What can infrastructure monitoring support?",
          options: [
            "Capacity planning",
            "Password generation only",
            "UI design only",
            "Source code formatting only",
          ],
          answer: "Capacity planning",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Centralized Logging",
    icon: "🗂️",
    lesson: {
      explanation:
        "Centralized logging collects logs from multiple applications, servers, containers, and cloud services into a common location or logging platform. This makes searching, filtering, correlation, and investigation easier in distributed environments.",
      points: [
        "Centralized logging gathers logs from multiple sources.",
        "Logs can be searched and filtered from a common platform.",
        "Centralized logs simplify troubleshooting across distributed systems.",
        "Logs should include useful timestamps and contextual information.",
        "Access to sensitive logs should be controlled.",
      ],
      example:
        "A microservices application may have dozens of services. Instead of checking every server individually, a centralized logging system can collect their logs and allow the team to search for a particular request ID or error.",
      commonMistakes: [
        "Collecting logs without useful timestamps or context.",
        "Allowing unrestricted access to sensitive logs.",
        "Keeping logs indefinitely without a retention strategy.",
      ],
      quiz: [
        {
          question: "What is centralized logging?",
          options: [
            "Collecting logs from multiple sources into a common system",
            "Deleting all logs",
            "Storing logs only on a developer's laptop",
            "Disabling application logging",
          ],
          answer:
            "Collecting logs from multiple sources into a common system",
        },
        {
          question: "Why is centralized logging useful?",
          options: [
            "It simplifies searching and investigating events across systems",
            "It removes the need for applications",
            "It automatically prevents every attack",
            "It replaces source control",
          ],
          answer:
            "It simplifies searching and investigating events across systems",
        },
        {
          question: "What should access to sensitive logs have?",
          options: [
            "Appropriate access controls",
            "Public internet access",
            "No authentication",
            "Unlimited administrator access",
          ],
          answer:
            "Appropriate access controls",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Alerts & Incident Detection",
    icon: "🚨",
    lesson: {
      explanation:
        "Alerts notify teams when monitored systems reach defined conditions. Good alerting focuses attention on meaningful events such as service failures, high error rates, resource exhaustion, or unusual behavior.",
      points: [
        "Alerts can be based on metrics, logs, or other signals.",
        "Thresholds can trigger alerts when values cross defined limits.",
        "Alert severity can help teams prioritize incidents.",
        "Alerts should contain enough context to support investigation.",
        "Alert fatigue can occur when too many low-value alerts are generated.",
      ],
      example:
        "A service can generate a high-priority alert when its error rate remains above a defined threshold for several minutes. The alert can include the affected service and relevant metric information.",
      commonMistakes: [
        "Creating alerts for every minor event.",
        "Using thresholds without considering normal system behavior.",
        "Sending alerts without enough information to investigate them.",
      ],
      quiz: [
        {
          question: "What is the purpose of an alert?",
          options: [
            "Notify teams about a defined condition or event",
            "Replace application code",
            "Delete monitoring data",
            "Disable cloud services",
          ],
          answer:
            "Notify teams about a defined condition or event",
        },
        {
          question: "What is alert fatigue?",
          options: [
            "Too many low-value alerts reducing attention to important ones",
            "A server running out of memory",
            "A failed Git merge",
            "A database backup",
          ],
          answer:
            "Too many low-value alerts reducing attention to important ones",
        },
        {
          question: "What makes an alert more useful?",
          options: [
            "Relevant context about the detected problem",
            "No information",
            "Only a random notification",
            "Removing the affected service name",
          ],
          answer:
            "Relevant context about the detected problem",
        },
      ],
    },
  },

  {
    id: 7,
    title: "Observability & Monitoring Best Practices",
    icon: "🔍",
    lesson: {
      explanation:
        "Observability combines telemetry such as metrics, logs, and traces to help teams understand what is happening inside complex systems. Effective observability requires meaningful monitoring, useful dashboards, actionable alerts, appropriate retention, and regular review.",
      points: [
        "Use metrics, logs, and traces together when appropriate.",
        "Create dashboards for important services and resources.",
        "Design alerts around actionable conditions.",
        "Monitor both technical and business-relevant signals.",
        "Protect monitoring data and control access to it.",
        "Review monitoring coverage regularly.",
      ],
      example:
        "A production service can have a dashboard showing request rate, latency, error rate, resource usage, and availability, while traces and logs provide additional detail when an incident occurs.",
      commonMistakes: [
        "Collecting huge amounts of telemetry without knowing how it will be used.",
        "Creating dashboards that contain only decorative metrics.",
        "Failing to update alerts when the application architecture changes.",
      ],
      quiz: [
        {
          question: "What does observability commonly combine?",
          options: [
            "Metrics, logs, and traces",
            "Only source code",
            "Only Git branches",
            "Only cloud billing",
          ],
          answer: "Metrics, logs, and traces",
        },
        {
          question: "What should a good alert represent?",
          options: [
            "An actionable condition that may require attention",
            "Every small metric change",
            "A random event",
            "Only successful requests",
          ],
          answer:
            "An actionable condition that may require attention",
        },
        {
          question: "Why should monitoring be reviewed regularly?",
          options: [
            "Systems and requirements change over time",
            "Monitoring never changes",
            "Logs are always unnecessary",
            "Alerts should always be deleted",
          ],
          answer:
            "Systems and requirements change over time",
        },
      ],
    },
  },
];

// =====================================================
// SHUFFLE QUIZ OPTIONS
// =====================================================

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
};

// =====================================================
// MONITORING & LOGGING COMPONENT
// =====================================================

const MonitoringLogging = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] =
    useState(null);

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-monitoring-logging", subtopics);

  const [quizIndex, setQuizIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);
  const [score, setScore] = useState(0);

  // =====================================================
  // STABLE SHUFFLED QUIZ OPTIONS
  // =====================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map(
        (question) =>
          shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  // =====================================================
  // PROGRESS
  // =====================================================

  const markLessonComplete = (lessonId) => {
    if (!lessonId) return;
    saveProgress(lessonId);
  };

  const completedCount =
    completedLessons.length;

  const overallProgress =
    subtopics.length === 0
      ? 0
      : Math.round(
          (completedCount /
            subtopics.length) *
            100
        );

  const lessonProgress =
    selectedTopic &&
    completedLessons.includes(
      selectedTopic.id
    )
      ? 100
      : 0;

  // =====================================================
  // OPEN LESSON
  // =====================================================

  const openLesson = (topic, index) => {
    setSelectedTopic(topic);
    setCurrentLesson(index);

    setQuizIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // CLOSE TOPIC
  // =====================================================

  const closeTopic = () => {
    setSelectedTopic(null);
    setCurrentLesson(0);

    setQuizIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // NEXT LESSON
  // QUIZ IS NOT REQUIRED
  // =====================================================

  const nextLesson = () => {
    if (!selectedTopic) {
      return;
    }

    markLessonComplete(
      selectedTopic.id
    );

    if (
      currentLesson <
      subtopics.length - 1
    ) {
      const nextIndex =
        currentLesson + 1;

      setSelectedTopic(
        subtopics[nextIndex]
      );

      setCurrentLesson(
        nextIndex
      );

      setQuizIndex(0);
      setSelectedAnswer("");
      setSubmitted(false);
    setScore(0);

      return;
    }

    closeTopic();
  };

  // =====================================================
  // PREVIOUS LESSON
  // =====================================================

  const previousLesson = () => {
    if (currentLesson === 0) {
      return;
    }

    const previousIndex =
      currentLesson - 1;

    setSelectedTopic(
      subtopics[previousIndex]
    );

    setCurrentLesson(
      previousIndex
    );

    setQuizIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // QUIZ
  // =====================================================

  const currentQuestion =
    selectedTopic?.lesson.quiz[
      quizIndex
    ];

  const currentOptions = selectedTopic
    ? shuffledQuizOptions[
        selectedTopic.id
      ][quizIndex]
    : [];

  const submitAnswer = () => {
    if (!selectedAnswer) {
      return;
    }
    setSubmitted(true);
  };

  const nextQuestion = async () => {
    if (!selectedTopic || !submitted) {
      return;
    }

    const quiz = selectedTopic.lesson.quiz;
    const currentQuestion = quiz[quizIndex];
    const updatedScore = score + (selectedAnswer === currentQuestion.answer ? 1 : 0);

    if (quizIndex < quiz.length - 1) {
      setScore(updatedScore);
      setQuizIndex((previous) => previous + 1);
      setSelectedAnswer("");
      setSubmitted(false);
      return;
    }

    await saveQuizResult({
      subject: "Cloud/DevOps",
      role: "Cloud/DevOps Engineer",
      topic: selectedTopic.title,
      topicId: selectedTopic.id,
      score: updatedScore,
      totalQuestions: quiz.length
    });

    if (!completedLessons.includes(selectedTopic.id)) {
      saveProgress(selectedTopic.id);
    }

    setScore(0);
    setQuizIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  // =====================================================
  // LESSON VIEW
  // =====================================================

  if (selectedTopic) {
    const lesson =
      selectedTopic.lesson;

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff, #ffffff)",
          padding: "40px 20px",
          fontFamily:
            "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* BACK */}
          <button
            onClick={closeTopic}
            style={{
              padding: "10px 18px",
              borderRadius: "8px",
              border:
                "1px solid #bfdbfe",
              background: "#ffffff",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            ← Back to Monitoring & Logging
          </button>

          {/* HEADER */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "22px",
              boxShadow:
                "0 4px 18px rgba(0,0,0,0.08)",
              border:
                "1px solid #dbeafe",
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              LESSON{" "}
              {currentLesson + 1} OF{" "}
              {subtopics.length}
            </div>

            <h1
              style={{
                margin:
                  "0 0 10px",
                color: "#1d4ed8",
              }}
            >
              {selectedTopic.icon}{" "}
              {selectedTopic.title}
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#64748b",
              }}
            >
              <span>
                Lesson Progress
              </span>

              <span>
                {lessonProgress}%
              </span>
            </div>

            <div
              style={{
                height: "8px",
                background:
                  "#e5e7eb",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${lessonProgress}%`,
                  height: "100%",
                  background:
                    "#2563eb",
                }}
              />
            </div>
          </div>

          {/* EXPLANATION */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "30px",
              marginBottom: "22px",
              boxShadow:
                "0 4px 18px rgba(0,0,0,0.08)",
              border:
                "1px solid #dbeafe",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                marginTop: 0,
              }}
            >
              📖 Explanation
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {lesson.explanation}
            </p>

            <h3
              style={{
                color: "#1e3a8a",
                marginTop: "25px",
              }}
            >
              🔑 Key Points
            </h3>

            <ul
              style={{
                color: "#475569",
                lineHeight: "1.8",
              }}
            >
              {lesson.points.map(
                (point) => (
                  <li key={point}>
                    {point}
                  </li>
                )
              )}
            </ul>

            <h3
              style={{
                color: "#1e3a8a",
                marginTop: "25px",
              }}
            >
              💡 Example
            </h3>

            <div
              style={{
                background:
                  "#eff6ff",
                borderLeft:
                  "4px solid #2563eb",
                padding:
                  "15px 18px",
                borderRadius: "8px",
                color: "#334155",
                lineHeight: "1.7",
              }}
            >
              {lesson.example}
            </div>
          </div>

          {/* COMMON MISTAKES */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "30px",
              marginBottom: "22px",
              boxShadow:
                "0 4px 18px rgba(0,0,0,0.08)",
              border:
                "1px solid #dbeafe",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                marginTop: 0,
              }}
            >
              ⚠️ Common Mistakes
            </h2>

            <ul
              style={{
                color: "#475569",
                lineHeight: "1.8",
              }}
            >
              {lesson.commonMistakes.map(
                (mistake) => (
                  <li key={mistake}>
                    {mistake}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* QUIZ */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "30px",
              marginBottom: "25px",
              boxShadow:
                "0 4px 18px rgba(0,0,0,0.08)",
              border:
                "1px solid #dbeafe",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                marginTop: 0,
              }}
            >
              🧠 Quick Quiz
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Question{" "}
              {quizIndex + 1} of{" "}
              {lesson.quiz.length}
            </p>

            <h3
              style={{
                color: "#334155",
                lineHeight: "1.5",
              }}
            >
              {currentQuestion.question}
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: "10px",
              }}
            >
              {currentOptions.map(
                (option) => {
                  const isSelected =
                    selectedAnswer ===
                    option;

                  const isCorrect =
                    submitted &&
                    option ===
                      currentQuestion.answer;

                  const isWrong =
                    submitted &&
                    isSelected &&
                    option !==
                      currentQuestion.answer;

                  return (
                    <button
                      key={option}
                      onClick={() => {
                        if (
                          !submitted
                        ) {
                          setSelectedAnswer(
                            option
                          );
                        }
                      }}
                      style={{
                        width: "100%",
                        textAlign:
                          "left",
                        padding:
                          "14px 16px",
                        borderRadius:
                          "9px",
                        border:
                          isCorrect
                            ? "2px solid #16a34a"
                            : isWrong
                            ? "2px solid #dc2626"
                            : isSelected
                            ? "2px solid #2563eb"
                            : "1px solid #cbd5e1",
                        background:
                          isCorrect
                            ? "#dcfce7"
                            : isWrong
                            ? "#fee2e2"
                            : isSelected
                            ? "#eff6ff"
                            : "#ffffff",
                        color:
                          "#334155",
                        cursor:
                          submitted
                            ? "default"
                            : "pointer",
                        fontSize:
                          "15px",
                      }}
                    >
                      {option}
                    </button>
                  );
                }
              )}
            </div>

            {/* SUBMIT */}
            {!submitted && (
              <button
                onClick={
                  submitAnswer
                }
                disabled={
                  !selectedAnswer
                }
                style={{
                  marginTop:
                    "20px",
                  padding:
                    "11px 22px",
                  borderRadius:
                    "8px",
                  border: "none",
                  background:
                    selectedAnswer
                      ? "#2563eb"
                      : "#94a3b8",
                  color:
                    "#ffffff",
                  cursor:
                    selectedAnswer
                      ? "pointer"
                      : "not-allowed",
                  fontWeight:
                    "600",
                }}
              >
                Submit Answer
              </button>
            )}

            {/* FEEDBACK */}
            {submitted && (
              <div
                style={{
                  marginTop:
                    "20px",
                  padding: "15px",
                  borderRadius:
                    "9px",
                  background:
                    selectedAnswer ===
                    currentQuestion.answer
                      ? "#dcfce7"
                      : "#fee2e2",
                  border:
                    selectedAnswer ===
                    currentQuestion.answer
                      ? "1px solid #86efac"
                      : "1px solid #fca5a5",
                  color:
                    selectedAnswer ===
                    currentQuestion.answer
                      ? "#166534"
                      : "#991b1b",
                  lineHeight:
                    "1.6",
                }}
              >
                {selectedAnswer ===
                currentQuestion.answer ? (
                  <strong>
                    ✅ Correct
                    answer!
                  </strong>
                ) : (
                  <>
                    <strong>
                      ❌ Incorrect
                      answer.
                    </strong>

                    <br />

                    Correct answer:{" "}
                    <strong>
                      {
                        currentQuestion.answer
                      }
                    </strong>
                  </>
                )}
              </div>
            )}

            {/* NEXT QUESTION */}
            {submitted && (
              <button
                onClick={
                  nextQuestion
                }
                style={{
                  marginTop:
                    "15px",
                  padding:
                    "11px 22px",
                  borderRadius:
                    "8px",
                  border: "none",
                  background:
                    "#2563eb",
                  color:
                    "#ffffff",
                  cursor:
                    "pointer",
                  fontWeight:
                    "600",
                }}
              >
                {quizIndex <
                lesson.quiz.length -
                  1
                  ? "Next Question →"
                  : "Restart Quiz ↻"}
              </button>
            )}
          </div>

          {/* LESSON NAVIGATION */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              gap: "15px",
              marginBottom:
                "20px",
            }}
          >
            <button
              onClick={
                previousLesson
              }
              disabled={
                currentLesson === 0
              }
              style={{
                flex: 1,
                padding:
                  "12px",
                borderRadius:
                  "8px",
                border:
                  "1px solid #bfdbfe",
                background:
                  currentLesson ===
                  0
                    ? "#e2e8f0"
                    : "#ffffff",
                color:
                  currentLesson ===
                  0
                    ? "#94a3b8"
                    : "#2563eb",
                cursor:
                  currentLesson ===
                  0
                    ? "not-allowed"
                    : "pointer",
                fontWeight:
                  "600",
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={
                nextLesson
              }
              style={{
                flex: 1,
                padding:
                  "12px",
                borderRadius:
                  "8px",
                border: "none",
                background:
                  "#2563eb",
                color:
                  "#ffffff",
                cursor:
                  "pointer",
                fontWeight:
                  "600",
              }}
            >
              {currentLesson <
              subtopics.length -
                1
                ? "Next Lesson →"
                : "Finish Topic ✓"}
            </button>
          </div>

          <p
            style={{
              textAlign:
                "center",
              color:
                "#64748b",
              fontSize:
                "13px",
            }}
          >
            You can move to the
            next lesson without
            completing the quiz.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // LESSON LIST
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
        fontFamily:
          "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        {/* BACK */}
        <button
          onClick={goBack}
          style={{
            padding:
              "10px 18px",
            borderRadius:
              "8px",
            border:
              "1px solid #bfdbfe",
            background:
              "#ffffff",
            color:
              "#2563eb",
            cursor:
              "pointer",
            fontWeight:
              "600",
            marginBottom:
              "25px",
          }}
        >
          ← Back to Cloud /
          DevOps Roadmap
        </button>

        {/* HEADER */}
        <div
          style={{
            background:
              "#ffffff",
            borderRadius:
              "16px",
            padding:
              "30px",
            marginBottom:
              "25px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border:
              "1px solid #dbeafe",
          }}
        >
          <h1
            style={{
              margin:
                "0 0 10px",
              color:
                "#1d4ed8",
            }}
          >
            📊 Monitoring & Logging
          </h1>

          <p
            style={{
              margin: 0,
              color:
                "#64748b",
              lineHeight:
                "1.6",
            }}
          >
            Learn monitoring,
            metrics, logs, traces,
            application and
            infrastructure
            monitoring, centralized
            logging, alerting, and
            observability best
            practices.
          </p>
        </div>

        {/* OVERALL PROGRESS */}
        <div
          style={{
            background:
              "#ffffff",
            borderRadius:
              "16px",
            padding:
              "25px",
            marginBottom:
              "30px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border:
              "1px solid #dbeafe",
          }}
        >
          <div
            style={{
              display:
                "flex",
              justifyContent:
                "space-between",
              marginBottom:
                "10px",
              fontWeight:
                "600",
            }}
          >
            <span>
              Overall Progress
            </span>

            <span>
              {overallProgress}%
            </span>
          </div>

          <div
            style={{
              height:
                "10px",
              background:
                "#e5e7eb",
              borderRadius:
                "10px",
              overflow:
                "hidden",
            }}
          >
            <div
              style={{
                width: `${overallProgress}%`,
                height:
                  "100%",
                background:
                  "#2563eb",
              }}
            />
          </div>

          <p
            style={{
              marginTop:
                "12px",
              marginBottom:
                0,
              color:
                "#64748b",
              fontSize:
                "14px",
            }}
          >
            {completedCount} of{" "}
            {subtopics.length}{" "}
            lessons completed
          </p>
        </div>

        {/* LESSON CARDS */}
        <h2
          style={{
            color:
              "#1e3a8a",
            marginBottom:
              "20px",
          }}
        >
          📚 Monitoring & Logging Lessons
        </h2>

        <div
          style={{
            display:
              "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap:
              "20px",
          }}
        >
          {subtopics.map(
            (topic, index) => {
              const completed =
                completedLessons.includes(
                  topic.id
                );

              return (
                <div
                  key={
                    topic.id
                  }
                  style={{
                    background:
                      "#ffffff",
                    border:
                      "1px solid #bfdbfe",
                    borderRadius:
                      "14px",
                    padding:
                      "22px",
                    boxShadow:
                      "0 3px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      color:
                        "#64748b",
                      fontSize:
                        "13px",
                      fontWeight:
                        "600",
                      marginBottom:
                        "8px",
                    }}
                  >
                    LESSON{" "}
                    {index + 1}
                  </div>

                  <h3
                    style={{
                      color:
                        "#1e3a8a",
                      margin:
                        "0 0 12px",
                      fontSize:
                        "19px",
                    }}
                  >
                    {
                      topic.icon
                    }{" "}
                    {
                      topic.title
                    }
                  </h3>

                  <p
                    style={{
                      color:
                        "#64748b",
                      marginBottom:
                        "15px",
                    }}
                  >
                    Monitoring and
                    logging learning
                    lesson
                  </p>

                  <div
                    style={{
                      display:
                        "flex",
                      justifyContent:
                        "space-between",
                      marginBottom:
                        "7px",
                      fontSize:
                        "13px",
                      color:
                        "#64748b",
                    }}
                  >
                    <span>
                      Progress
                    </span>

                    <span>
                      {completed
                        ? "100%"
                        : "0%"}
                    </span>
                  </div>

                  <div
                    style={{
                      height:
                        "7px",
                      background:
                        "#e5e7eb",
                      borderRadius:
                        "7px",
                      overflow:
                        "hidden",
                      marginBottom:
                        "18px",
                    }}
                  >
                    <div
                      style={{
                        width:
                          completed
                            ? "100%"
                            : "0%",
                        height:
                          "100%",
                        background:
                          "#60a5fa",
                      }}
                    />
                  </div>

                  <button
                    onClick={() =>
                      openLesson(
                        topic,
                        index
                      )
                    }
                    style={{
                      width:
                        "100%",
                      padding:
                        "11px",
                      borderRadius:
                        "8px",
                      border:
                        "none",
                      background:
                        "#2563eb",
                      color:
                        "#ffffff",
                      cursor:
                        "pointer",
                      fontWeight:
                        "600",
                      fontSize:
                        "14px",
                    }}
                  >
                    {completed
                      ? "Review Lesson →"
                      : "Open Lesson →"}
                  </button>
                </div>
              );
            }
          )}
        </div>

        {/* BOTTOM BACK */}
        <div
          style={{
            marginTop:
              "35px",
            textAlign:
              "center",
          }}
        >
          <button
            onClick={
              goBack
            }
            style={{
              padding:
                "11px 22px",
              borderRadius:
                "8px",
              border:
                "1px solid #bfdbfe",
              background:
                "#ffffff",
              color:
                "#2563eb",
              cursor:
                "pointer",
              fontWeight:
                "600",
            }}
          >
            ← Back to Cloud /
            DevOps
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonitoringLogging;