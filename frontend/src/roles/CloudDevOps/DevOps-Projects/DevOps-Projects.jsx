import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// DEVOPS PROJECTS — 7 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Containerized Web Application",
    icon: "🐳",
    lesson: {
      explanation:
        "A containerized web application project helps you practice packaging an application and its dependencies into containers. The project can include a frontend, backend, database, Dockerfiles, networking, and configuration.",
      points: [
        "Choose a small web application with a clear purpose.",
        "Create a Dockerfile for the application.",
        "Separate application components into appropriate containers when useful.",
        "Configure communication between containers.",
        "Use environment variables for configuration.",
        "Document how to build and run the application.",
      ],
      example:
        "A student can containerize a simple React frontend and Node.js backend, connect them through Docker networking, and use a database container for development.",
      commonMistakes: [
        "Hard-coding environment-specific configuration.",
        "Putting unnecessary files into Docker images.",
        "Running containers without understanding their networking configuration.",
      ],
      quiz: [
        {
          question: "What is a major goal of containerizing an application?",
          options: [
            "Package the application and its dependencies consistently",
            "Remove all application dependencies",
            "Replace source control",
            "Disable networking",
          ],
          answer:
            "Package the application and its dependencies consistently",
        },
        {
          question: "What can Docker networking provide?",
          options: [
            "Communication between containers",
            "Source code compilation only",
            "Database backups only",
            "User interface design",
          ],
          answer:
            "Communication between containers",
        },
        {
          question: "How should environment-specific configuration commonly be handled?",
          options: [
            "Using appropriate configuration and environment variables",
            "Hard-coding every value into source code",
            "Putting secrets in public files",
            "Deleting configuration",
          ],
          answer:
            "Using appropriate configuration and environment variables",
        },
      ],
    },
  },

  {
    id: 2,
    title: "CI/CD Pipeline Project",
    icon: "🔄",
    lesson: {
      explanation:
        "A CI/CD project demonstrates how source code changes can automatically trigger building, testing, and deployment stages. It helps you understand how development workflows become repeatable through automation.",
      points: [
        "Connect a source repository to a CI/CD system.",
        "Automatically build the application.",
        "Run automated tests.",
        "Create a deployable artifact.",
        "Deploy to a suitable environment.",
        "Monitor pipeline results and failures.",
      ],
      example:
        "A GitHub repository can trigger a CI/CD workflow whenever code is pushed. The workflow installs dependencies, runs tests, builds the application, creates an artifact, and deploys it to a hosting environment.",
      commonMistakes: [
        "Deploying without running automated tests.",
        "Storing secrets directly in workflow files.",
        "Creating a pipeline without failure handling.",
      ],
      quiz: [
        {
          question: "What is a key purpose of a CI/CD project?",
          options: [
            "Automate build, test, and deployment processes",
            "Replace application development",
            "Disable version control",
            "Remove testing",
          ],
          answer:
            "Automate build, test, and deployment processes",
        },
        {
          question: "What should normally happen before deployment?",
          options: [
            "Required automated checks and tests should run",
            "All monitoring should be disabled",
            "Source control should be deleted",
            "The application should be removed",
          ],
          answer:
            "Required automated checks and tests should run",
        },
        {
          question: "Where should CI/CD secrets be stored?",
          options: [
            "Using secure secret-management features",
            "Inside public source code",
            "Inside README files",
            "Inside screenshots",
          ],
          answer:
            "Using secure secret-management features",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Infrastructure as Code Project",
    icon: "🏗️",
    lesson: {
      explanation:
        "An Infrastructure as Code project demonstrates how cloud infrastructure can be defined and managed through configuration files instead of being created entirely through manual actions. Terraform is commonly used for this purpose.",
      points: [
        "Define infrastructure using code.",
        "Store infrastructure configuration in version control.",
        "Use variables for reusable configuration.",
        "Review planned infrastructure changes before applying them.",
        "Separate environments when appropriate.",
        "Avoid storing sensitive values directly in configuration files.",
      ],
      example:
        "A project can use Terraform to define a cloud network, compute resource, security rules, and storage. The configuration can then be reviewed and applied through a controlled workflow.",
      commonMistakes: [
        "Applying infrastructure changes without reviewing the plan.",
        "Hard-coding sensitive credentials.",
        "Making manual changes that are not reflected in the infrastructure code.",
      ],
      quiz: [
        {
          question: "What does Infrastructure as Code manage?",
          options: [
            "Infrastructure through machine-readable configuration",
            "Only application UI",
            "Only documentation",
            "Only Git branches",
          ],
          answer:
            "Infrastructure through machine-readable configuration",
        },
        {
          question: "Why store IaC files in version control?",
          options: [
            "To track and review infrastructure changes",
            "To remove infrastructure history",
            "To disable collaboration",
            "To make resources public",
          ],
          answer:
            "To track and review infrastructure changes",
        },
        {
          question: "What should happen before applying infrastructure changes?",
          options: [
            "Review the planned changes",
            "Delete the configuration",
            "Disable access controls",
            "Remove monitoring",
          ],
          answer:
            "Review the planned changes",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Kubernetes Deployment Project",
    icon: "☸️",
    lesson: {
      explanation:
        "A Kubernetes deployment project helps you practice running a containerized application on a Kubernetes cluster. It can include deployments, services, configuration, scaling, and rolling updates.",
      points: [
        "Containerize an application before deploying it.",
        "Create Kubernetes deployment resources.",
        "Expose applications using appropriate services.",
        "Configure replicas for application availability.",
        "Use configuration and secrets appropriately.",
        "Practice rolling updates and scaling.",
      ],
      example:
        "A Node.js API packaged as a Docker image can be deployed to Kubernetes using a Deployment with multiple replicas and exposed internally or externally through an appropriate Service.",
      commonMistakes: [
        "Using incorrect container ports.",
        "Deploying without health checks.",
        "Storing sensitive values directly in manifests.",
      ],
      quiz: [
        {
          question: "What does a Kubernetes Deployment manage?",
          options: [
            "The desired state and rollout of application Pods",
            "Only Git repositories",
            "Only cloud billing",
            "Only source code formatting",
          ],
          answer:
            "The desired state and rollout of application Pods",
        },
        {
          question: "Why use multiple replicas?",
          options: [
            "To provide additional availability and capacity",
            "To remove networking",
            "To disable scaling",
            "To eliminate containers",
          ],
          answer:
            "To provide additional availability and capacity",
        },
        {
          question: "What can a Kubernetes Service provide?",
          options: [
            "A stable way to access application Pods",
            "Source code compilation",
            "Database encryption only",
            "Git history",
          ],
          answer:
            "A stable way to access application Pods",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Cloud Monitoring Project",
    icon: "📊",
    lesson: {
      explanation:
        "A cloud monitoring project focuses on observing application and infrastructure health after deployment. It can include dashboards, metrics, logs, alerts, and basic incident investigation.",
      points: [
        "Select important application and infrastructure metrics.",
        "Create dashboards for important resources.",
        "Collect application and system logs.",
        "Configure meaningful alerts.",
        "Test alert conditions.",
        "Document how incidents should be investigated.",
      ],
      example:
        "A deployed web application can have a dashboard showing request rate, latency, error rate, CPU usage, and memory usage. Alerts can notify the team when important thresholds are exceeded.",
      commonMistakes: [
        "Monitoring only infrastructure and ignoring application health.",
        "Creating too many low-value alerts.",
        "Never testing whether alerts actually work.",
      ],
      quiz: [
        {
          question: "What is the purpose of a monitoring project?",
          options: [
            "Observe application and infrastructure health",
            "Replace source control",
            "Disable logging",
            "Remove cloud resources",
          ],
          answer:
            "Observe application and infrastructure health",
        },
        {
          question: "What can a monitoring dashboard display?",
          options: [
            "Important metrics and system information",
            "Only source code",
            "Only Git commits",
            "Only documentation",
          ],
          answer:
            "Important metrics and system information",
        },
        {
          question: "Why should alerts be tested?",
          options: [
            "To verify that important conditions generate the expected notifications",
            "To remove all monitoring",
            "To disable the application",
            "To delete logs",
          ],
          answer:
            "To verify that important conditions generate the expected notifications",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Cloud Security Project",
    icon: "🔐",
    lesson: {
      explanation:
        "A cloud security project applies security practices to a deployed cloud environment. It can include IAM, network restrictions, encryption, logging, secret management, and security configuration reviews.",
      points: [
        "Apply least privilege to cloud identities.",
        "Enable appropriate authentication controls.",
        "Restrict unnecessary network access.",
        "Protect sensitive data using suitable encryption.",
        "Store secrets using appropriate secret-management mechanisms.",
        "Review logs and security events.",
      ],
      example:
        "A project can deploy a web application with private database access, restricted security rules, limited IAM permissions, encrypted storage, managed secrets, and centralized security logging.",
      commonMistakes: [
        "Using administrator permissions for the entire application.",
        "Leaving unnecessary ports publicly accessible.",
        "Putting API keys or passwords directly into source code.",
      ],
      quiz: [
        {
          question: "Which principle should guide cloud permissions?",
          options: [
            "Least privilege",
            "Maximum privilege",
            "Public access",
            "Anonymous access",
          ],
          answer: "Least privilege",
        },
        {
          question: "What should happen to application secrets?",
          options: [
            "They should be protected using appropriate secret management",
            "They should be committed to public repositories",
            "They should be placed in README files",
            "They should be displayed in logs",
          ],
          answer:
            "They should be protected using appropriate secret management",
        },
        {
          question: "What is one way to improve cloud network security?",
          options: [
            "Restrict unnecessary network access",
            "Open every port publicly",
            "Disable authentication",
            "Allow all traffic by default",
          ],
          answer:
            "Restrict unnecessary network access",
        },
      ],
    },
  },

  {
    id: 7,
    title: "End-to-End DevOps Project",
    icon: "🏆",
    lesson: {
      explanation:
        "An end-to-end DevOps project combines the skills learned throughout the roadmap into one complete workflow. The project can include source control, CI/CD, containers, infrastructure as code, cloud deployment, security, monitoring, and documentation.",
      points: [
        "Start with a clearly defined application requirement.",
        "Use Git for source control and collaboration.",
        "Containerize the application where appropriate.",
        "Automate testing and deployment.",
        "Use infrastructure as code for reproducible infrastructure.",
        "Apply cloud security practices.",
        "Monitor the deployed system.",
        "Document architecture, deployment, and troubleshooting procedures.",
      ],
      example:
        "A complete project could use GitHub for source control, GitHub Actions for CI/CD, Docker for containerization, Terraform for infrastructure, Kubernetes or a managed cloud service for deployment, and monitoring for operational visibility.",
      commonMistakes: [
        "Trying to add technologies without a clear purpose.",
        "Skipping documentation because the application already works.",
        "Building the deployment pipeline without considering security and monitoring.",
      ],
      quiz: [
        {
          question: "What is an end-to-end DevOps project?",
          options: [
            "A project combining development, automation, deployment, security, and operations practices",
            "Only a frontend application",
            "Only a database project",
            "Only a Git repository",
          ],
          answer:
            "A project combining development, automation, deployment, security, and operations practices",
        },
        {
          question: "Which combination can be part of an end-to-end DevOps workflow?",
          options: [
            "Git, CI/CD, containers, IaC, cloud deployment, and monitoring",
            "Only HTML and CSS",
            "Only a database",
            "Only a text editor",
          ],
          answer:
            "Git, CI/CD, containers, IaC, cloud deployment, and monitoring",
        },
        {
          question: "Why is documentation important in a DevOps project?",
          options: [
            "It explains architecture, deployment, and operational procedures",
            "It replaces testing",
            "It disables automation",
            "It removes version control",
          ],
          answer:
            "It explains architecture, deployment, and operational procedures",
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
// DEVOPS PROJECTS COMPONENT
// =====================================================

const DevOpsProjects = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] =
    useState(null);

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-devops-projects", subtopics);

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
            ← Back to DevOps Projects
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
              PROJECT{" "}
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
              📖 Project Overview
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
            next project without
            completing the quiz.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // PROJECT LIST
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
            💻 DevOps Projects
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
            Apply your Cloud and
            DevOps skills through
            practical projects
            covering containers,
            CI/CD, infrastructure as
            code, Kubernetes,
            monitoring, security,
            and complete end-to-end
            workflows.
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
            projects completed
          </p>
        </div>

        {/* PROJECT CARDS */}
        <h2
          style={{
            color:
              "#1e3a8a",
            marginBottom:
              "20px",
          }}
        >
          📚 DevOps Project Roadmap
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
                    PROJECT{" "}
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
                    Practical DevOps
                    project
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
                      ? "Review Project →"
                      : "Open Project →"}
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

export default DevOpsProjects;