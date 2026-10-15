import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// CLOUD / DEVOPS CAPSTONE PROJECT — 6 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Capstone Project Planning & Architecture",
    icon: "🗺️",
    lesson: {
      explanation:
        "The first stage of a Cloud / DevOps capstone is planning the complete system. You define the application, users, architecture, infrastructure, deployment workflow, security requirements, and monitoring strategy before implementing everything.",
      points: [
        "Define a clear application problem and project scope.",
        "Identify the main application components.",
        "Design how components communicate with each other.",
        "Choose suitable cloud and DevOps technologies.",
        "Plan development, testing, deployment, and monitoring.",
        "Document the architecture before implementation.",
      ],
      example:
        "A capstone can be a full-stack task management application with a React frontend, backend API, database, Docker containers, cloud infrastructure, CI/CD, monitoring, and security controls.",
      commonMistakes: [
        "Choosing too many technologies without a clear purpose.",
        "Starting implementation without defining the architecture.",
        "Making the project unnecessarily large and difficult to complete.",
      ],
      quiz: [
        {
          question:
            "What should be done before implementing a large DevOps capstone?",
          options: [
            "Define the project scope and architecture",
            "Delete the source repository",
            "Deploy everything manually",
            "Disable monitoring",
          ],
          answer:
            "Define the project scope and architecture",
        },
        {
          question:
            "Why is architecture planning useful?",
          options: [
            "It explains how the major components will work together",
            "It removes the need for testing",
            "It eliminates version control",
            "It prevents documentation",
          ],
          answer:
            "It explains how the major components will work together",
        },
        {
          question:
            "What is an important consideration when defining project scope?",
          options: [
            "Keep the scope achievable and aligned with the project goal",
            "Add every available cloud technology",
            "Avoid defining requirements",
            "Build unrelated features",
          ],
          answer:
            "Keep the scope achievable and aligned with the project goal",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Application Containerization",
    icon: "🐳",
    lesson: {
      explanation:
        "After planning the application, containerize its components where appropriate. Docker provides a consistent way to package applications and their dependencies so that they can run across development, testing, and deployment environments.",
      points: [
        "Create appropriate Dockerfiles.",
        "Build and test container images locally.",
        "Use efficient image structures.",
        "Configure containers using environment variables.",
        "Create appropriate container networking.",
        "Use multi-container orchestration when required.",
      ],
      example:
        "A capstone application can use separate containers for a frontend and backend, with a database running as another service during development. Docker Compose can coordinate the local environment.",
      commonMistakes: [
        "Putting secrets directly inside Dockerfiles.",
        "Creating unnecessarily large images.",
        "Using inconsistent ports or environment configuration.",
      ],
      quiz: [
        {
          question:
            "What is a major benefit of containerization?",
          options: [
            "Consistent application packaging and execution",
            "Removing all dependencies",
            "Replacing source control",
            "Disabling application networking",
          ],
          answer:
            "Consistent application packaging and execution",
        },
        {
          question:
            "Where should sensitive application secrets generally be kept?",
          options: [
            "In appropriate secret-management or secure configuration systems",
            "Inside Dockerfiles",
            "Inside public README files",
            "Inside container image source code",
          ],
          answer:
            "In appropriate secret-management or secure configuration systems",
        },
        {
          question:
            "What can Docker Compose help manage?",
          options: [
            "Multiple related containers and their configuration",
            "Only Git branches",
            "Only cloud billing",
            "Only source code formatting",
          ],
          answer:
            "Multiple related containers and their configuration",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Cloud Infrastructure & Infrastructure as Code",
    icon: "☁️",
    lesson: {
      explanation:
        "The infrastructure stage converts the planned architecture into reproducible cloud resources. Infrastructure as Code allows resources such as networks, compute services, storage, and security configurations to be defined and managed through version-controlled configuration.",
      points: [
        "Create the required cloud infrastructure.",
        "Define infrastructure using Terraform or another IaC tool.",
        "Use variables for reusable configuration.",
        "Separate infrastructure into logical components.",
        "Review infrastructure changes before applying them.",
        "Keep infrastructure configuration under version control.",
      ],
      example:
        "A capstone can use Terraform to create a virtual network, application resources, security rules, storage, and supporting cloud services.",
      commonMistakes: [
        "Making infrastructure changes manually without updating IaC.",
        "Hard-coding sensitive credentials.",
        "Applying infrastructure changes without reviewing the plan.",
      ],
      quiz: [
        {
          question:
            "What is the purpose of Infrastructure as Code in a capstone?",
          options: [
            "Create reproducible and manageable infrastructure through code",
            "Replace application source code",
            "Disable cloud resources",
            "Remove version control",
          ],
          answer:
            "Create reproducible and manageable infrastructure through code",
        },
        {
          question:
            "Why should infrastructure code be stored in version control?",
          options: [
            "To track and review infrastructure changes",
            "To make all resources public",
            "To disable collaboration",
            "To remove change history",
          ],
          answer:
            "To track and review infrastructure changes",
        },
        {
          question:
            "What should be done before applying significant infrastructure changes?",
          options: [
            "Review the planned changes",
            "Delete the IaC files",
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
    title: "CI/CD & Automated Deployment",
    icon: "🔄",
    lesson: {
      explanation:
        "The CI/CD stage automates the journey from source code to deployment. A complete capstone pipeline can build the application, run tests, create container images, publish artifacts, and deploy approved changes to the target environment.",
      points: [
        "Connect the repository to a CI/CD platform.",
        "Run automated tests on code changes.",
        "Build application artifacts or container images.",
        "Store artifacts in an appropriate registry.",
        "Automate deployment to the cloud environment.",
        "Use protected secrets and controlled deployment stages.",
      ],
      example:
        "A GitHub Actions workflow can run tests whenever code is pushed, build a Docker image, publish it to a container registry, and deploy the new version after required checks pass.",
      commonMistakes: [
        "Deploying every change without automated validation.",
        "Exposing cloud credentials in workflow files.",
        "Building a pipeline without handling failed deployments.",
      ],
      quiz: [
        {
          question:
            "What is a key purpose of CI/CD in the capstone?",
          options: [
            "Automate testing, building, and deployment",
            "Remove source control",
            "Replace application requirements",
            "Disable testing",
          ],
          answer:
            "Automate testing, building, and deployment",
        },
        {
          question:
            "What should a CI pipeline commonly perform?",
          options: [
            "Build the application and run automated checks",
            "Delete the repository",
            "Disable security controls",
            "Remove application dependencies",
          ],
          answer:
            "Build the application and run automated checks",
        },
        {
          question:
            "How should deployment credentials be handled?",
          options: [
            "Use secure secret-management mechanisms",
            "Commit them directly to the repository",
            "Put them in screenshots",
            "Print them in logs",
          ],
          answer:
            "Use secure secret-management mechanisms",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Security, Monitoring & Reliability",
    icon: "🛡️",
    lesson: {
      explanation:
        "A capstone should not stop at deployment. Security, monitoring, and reliability practices help keep the application observable and protected after it reaches the cloud environment.",
      points: [
        "Apply least-privilege access.",
        "Restrict unnecessary network exposure.",
        "Protect application and infrastructure secrets.",
        "Enable useful application and infrastructure logging.",
        "Monitor important metrics and service health.",
        "Configure meaningful alerts.",
        "Plan basic backup and recovery procedures.",
      ],
      example:
        "A production-style capstone can monitor request rate, latency, error rate, CPU usage, and memory usage while using restricted IAM permissions, protected secrets, network controls, and centralized logs.",
      commonMistakes: [
        "Treating security as something to add only at the end.",
        "Creating too many noisy alerts.",
        "Deploying without a way to detect application failures.",
      ],
      quiz: [
        {
          question:
            "Which access-control principle is important for a cloud capstone?",
          options: [
            "Least privilege",
            "Maximum privilege",
            "Anonymous administration",
            "Public access to all resources",
          ],
          answer: "Least privilege",
        },
        {
          question:
            "Why is monitoring important after deployment?",
          options: [
            "It helps detect and investigate system health and failures",
            "It replaces source control",
            "It removes the need for testing",
            "It disables application logging",
          ],
          answer:
            "It helps detect and investigate system health and failures",
        },
        {
          question:
            "What makes an alert useful?",
          options: [
            "It identifies an important condition that requires attention",
            "It triggers continuously for harmless events",
            "It exposes secrets",
            "It disables monitoring",
          ],
          answer:
            "It identifies an important condition that requires attention",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Final Capstone Integration & Presentation",
    icon: "🏆",
    lesson: {
      explanation:
        "The final stage brings the entire DevOps workflow together. You validate the application, infrastructure, automation, security, monitoring, and documentation, then present how the system works and how it can be maintained.",
      points: [
        "Run complete application and deployment tests.",
        "Verify the CI/CD workflow.",
        "Confirm infrastructure can be reproduced.",
        "Review security configurations.",
        "Verify monitoring and alerting.",
        "Document architecture and deployment steps.",
        "Prepare a clear project demonstration.",
        "Record important lessons and future improvements.",
      ],
      example:
        "A final demonstration can show a code change being committed, automated tests running, a container image being built, deployment occurring through the pipeline, and the updated application being observed through cloud monitoring.",
      commonMistakes: [
        "Demonstrating only the application and ignoring the DevOps workflow.",
        "Failing to document how the system was deployed.",
        "Adding features at the last moment without testing the complete system.",
      ],
      quiz: [
        {
          question:
            "What should the final capstone demonstrate?",
          options: [
            "The complete development, deployment, security, and operations workflow",
            "Only the application's homepage",
            "Only the source code",
            "Only the database",
          ],
          answer:
            "The complete development, deployment, security, and operations workflow",
        },
        {
          question:
            "Why should the final system be tested end-to-end?",
          options: [
            "To verify that the complete workflow works together",
            "To remove documentation",
            "To disable CI/CD",
            "To avoid monitoring",
          ],
          answer:
            "To verify that the complete workflow works together",
        },
        {
          question:
            "What should good capstone documentation include?",
          options: [
            "Architecture, deployment, configuration, and operational information",
            "Only the project title",
            "Only screenshots",
            "Only the source-code filename",
          ],
          answer:
            "Architecture, deployment, configuration, and operational information",
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
// CLOUD / DEVOPS CAPSTONE COMPONENT
// =====================================================

const CloudDevOpsCapstone = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [currentLesson, setCurrentLesson] = useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-cloud-devops-capstone", subtopics);

  const [quizIndex, setQuizIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // =====================================================
  // STABLE SHUFFLED QUIZ OPTIONS
  // =====================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
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

  const completedCount = completedLessons.length;

  const overallProgress =
    subtopics.length === 0
      ? 0
      : Math.round(
          (completedCount / subtopics.length) * 100
        );

  const lessonProgress =
    selectedTopic &&
    completedLessons.includes(selectedTopic.id)
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

    markLessonComplete(selectedTopic.id);

    if (currentLesson < subtopics.length - 1) {
      const nextIndex = currentLesson + 1;

      setSelectedTopic(subtopics[nextIndex]);
      setCurrentLesson(nextIndex);

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

    const previousIndex = currentLesson - 1;

    setSelectedTopic(subtopics[previousIndex]);
    setCurrentLesson(previousIndex);

    setQuizIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // QUIZ
  // =====================================================

  const currentQuestion =
    selectedTopic?.lesson.quiz[quizIndex];

  const currentOptions = selectedTopic
    ? shuffledQuizOptions[selectedTopic.id][quizIndex]
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
    const lesson = selectedTopic.lesson;

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff, #ffffff)",
          padding: "40px 20px",
          fontFamily: "Arial, sans-serif",
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
              border: "1px solid #bfdbfe",
              background: "#ffffff",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            ← Back to Capstone
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
              border: "1px solid #dbeafe",
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
              CAPSTONE STAGE {currentLesson + 1} OF{" "}
              {subtopics.length}
            </div>

            <h1
              style={{
                margin: "0 0 10px",
                color: "#1d4ed8",
              }}
            >
              {selectedTopic.icon} {selectedTopic.title}
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#64748b",
              }}
            >
              <span>Stage Progress</span>
              <span>{lessonProgress}%</span>
            </div>

            <div
              style={{
                height: "8px",
                background: "#e5e7eb",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${lessonProgress}%`,
                  height: "100%",
                  background: "#2563eb",
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
              border: "1px solid #dbeafe",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                marginTop: 0,
              }}
            >
              📖 Stage Overview
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
              {lesson.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
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
                background: "#eff6ff",
                borderLeft: "4px solid #2563eb",
                padding: "15px 18px",
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
              border: "1px solid #dbeafe",
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
              {lesson.commonMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
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
              border: "1px solid #dbeafe",
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
              Question {quizIndex + 1} of{" "}
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
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {currentOptions.map((option) => {
                const isSelected =
                  selectedAnswer === option;

                const isCorrect =
                  submitted &&
                  option === currentQuestion.answer;

                const isWrong =
                  submitted &&
                  isSelected &&
                  option !== currentQuestion.answer;

                return (
                  <button
                    key={option}
                    onClick={() => {
                      if (!submitted) {
                        setSelectedAnswer(option);
                      }
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "14px 16px",
                      borderRadius: "9px",
                      border: isCorrect
                        ? "2px solid #16a34a"
                        : isWrong
                        ? "2px solid #dc2626"
                        : isSelected
                        ? "2px solid #2563eb"
                        : "1px solid #cbd5e1",
                      background: isCorrect
                        ? "#dcfce7"
                        : isWrong
                        ? "#fee2e2"
                        : isSelected
                        ? "#eff6ff"
                        : "#ffffff",
                      color: "#334155",
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

            {/* SUBMIT */}
            {!submitted && (
              <button
                onClick={submitAnswer}
                disabled={!selectedAnswer}
                style={{
                  marginTop: "20px",
                  padding: "11px 22px",
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
            )}

            {/* FEEDBACK */}
            {submitted && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  borderRadius: "9px",
                  background:
                    selectedAnswer === currentQuestion.answer
                      ? "#dcfce7"
                      : "#fee2e2",
                  border:
                    selectedAnswer === currentQuestion.answer
                      ? "1px solid #86efac"
                      : "1px solid #fca5a5",
                  color:
                    selectedAnswer === currentQuestion.answer
                      ? "#166534"
                      : "#991b1b",
                  lineHeight: "1.6",
                }}
              >
                {selectedAnswer === currentQuestion.answer ? (
                  <strong>✅ Correct answer!</strong>
                ) : (
                  <>
                    <strong>❌ Incorrect answer.</strong>
                    <br />
                    Correct answer:{" "}
                    <strong>
                      {currentQuestion.answer}
                    </strong>
                  </>
                )}
              </div>
            )}

            {/* NEXT QUESTION */}
            {submitted && (
              <button
                onClick={nextQuestion}
                style={{
                  marginTop: "15px",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2563eb",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                {quizIndex < lesson.quiz.length - 1
                  ? "Next Question →"
                  : "Restart Quiz ↻"}
              </button>
            )}
          </div>

          {/* LESSON NAVIGATION */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <button
              onClick={previousLesson}
              disabled={currentLesson === 0}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  currentLesson === 0
                    ? "#e2e8f0"
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
              ← Previous Stage
            </button>

            <button
              onClick={nextLesson}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#2563eb",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {currentLesson < subtopics.length - 1
                ? "Next Stage →"
                : "Finish Capstone ✓"}
            </button>
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "13px",
            }}
          >
            You can move to the next stage without
            completing the quiz.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // CAPSTONE LIST
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
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
          ← Back to Cloud / DevOps Roadmap
        </button>

        {/* HEADER */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              color: "#1d4ed8",
            }}
          >
            🏆 Cloud / DevOps Capstone Project
          </h1>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Bring together everything you learned across
            the Cloud / DevOps roadmap into one complete,
            production-style project.
          </p>
        </div>

        {/* OVERALL PROGRESS */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "25px",
            marginBottom: "30px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            <span>Overall Capstone Progress</span>
            <span>{overallProgress}%</span>
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
                width: `${overallProgress}%`,
                height: "100%",
                background: "#2563eb",
              }}
            />
          </div>

          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            {completedCount} of {subtopics.length}{" "}
            capstone stages completed
          </p>
        </div>

        {/* STAGES */}
        <h2
          style={{
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          📚 Capstone Roadmap
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {subtopics.map((topic, index) => {
            const completed =
              completedLessons.includes(topic.id);

            return (
              <div
                key={topic.id}
                style={{
                  background: "#ffffff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "14px",
                  padding: "22px",
                  boxShadow:
                    "0 3px 12px rgba(0,0,0,0.05)",
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
                  CAPSTONE STAGE {index + 1}
                </div>

                <h3
                  style={{
                    color: "#1e3a8a",
                    margin: "0 0 12px",
                    fontSize: "19px",
                  }}
                >
                  {topic.icon} {topic.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    marginBottom: "15px",
                  }}
                >
                  Capstone implementation stage
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "7px",
                    fontSize: "13px",
                    color: "#64748b",
                  }}
                >
                  <span>Progress</span>
                  <span>
                    {completed ? "100%" : "0%"}
                  </span>
                </div>

                <div
                  style={{
                    height: "7px",
                    background: "#e5e7eb",
                    borderRadius: "7px",
                    overflow: "hidden",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: completed ? "100%" : "0%",
                      height: "100%",
                      background: "#60a5fa",
                    }}
                  />
                </div>

                <button
                  onClick={() =>
                    openLesson(topic, index)
                  }
                  style={{
                    width: "100%",
                    padding: "11px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {completed
                    ? "Review Stage →"
                    : "Open Stage →"}
                </button>
              </div>
            );
          })}
        </div>

        {/* BOTTOM BACK */}
        <div
          style={{
            marginTop: "35px",
            textAlign: "center",
          }}
        >
          <button
            onClick={goBack}
            style={{
              padding: "11px 22px",
              borderRadius: "8px",
              border: "1px solid #bfdbfe",
              background: "#ffffff",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            ← Back to Cloud / DevOps
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOpsCapstone;