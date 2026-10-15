import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// DEVOPS & CLOUD TOOLS — 7 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "DevOps Tools Overview",
    icon: "🛠️",
    lesson: {
      explanation:
        "DevOps uses a collection of tools to automate software development, testing, deployment, infrastructure management, monitoring, and collaboration. Different tools solve different parts of the software delivery lifecycle.",
      points: [
        "DevOps tools support automation and collaboration.",
        "Different tools are used for source control, CI/CD, containers, infrastructure, and monitoring.",
        "Tool selection should depend on project requirements.",
        "Automation reduces repetitive manual work.",
        "Tools are often combined into a larger DevOps workflow.",
      ],
      example:
        "A team may use GitHub for source control, GitHub Actions for CI/CD, Docker for containers, Terraform for infrastructure, and a monitoring platform to observe the deployed application.",
      commonMistakes: [
        "Trying to use every DevOps tool in a single project.",
        "Choosing tools without considering project requirements.",
        "Using automation without understanding the process being automated.",
      ],
      quiz: [
        {
          question: "What is a major purpose of DevOps tools?",
          options: [
            "Support automation and collaboration",
            "Replace all developers",
            "Remove source control",
            "Disable monitoring",
          ],
          answer: "Support automation and collaboration",
        },
        {
          question: "Why are different DevOps tools combined?",
          options: [
            "Different tools solve different parts of the delivery lifecycle",
            "Every tool performs exactly the same function",
            "Tools cannot work together",
            "To avoid automation",
          ],
          answer:
            "Different tools solve different parts of the delivery lifecycle",
        },
        {
          question: "What should influence tool selection?",
          options: [
            "Project requirements",
            "Only tool popularity",
            "Only the tool logo",
            "Random selection",
          ],
          answer: "Project requirements",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Jenkins & Build Automation",
    icon: "🔨",
    lesson: {
      explanation:
        "Jenkins is an automation server commonly used to implement CI/CD pipelines. It can automatically build software, run tests, perform other pipeline steps, and integrate with source control and deployment systems.",
      points: [
        "Jenkins can automate software delivery tasks.",
        "Jobs and pipelines define automated workflows.",
        "Jenkins can integrate with source control systems.",
        "Automated builds provide consistent repeatable processes.",
        "Pipeline steps can include building, testing, and deployment.",
      ],
      example:
        "A Jenkins pipeline can detect a new change in a repository, build the application, run automated tests, create an artifact, and continue to a deployment stage.",
      commonMistakes: [
        "Putting sensitive credentials directly into pipeline scripts.",
        "Creating pipelines without testing individual stages.",
        "Allowing unnecessary permissions for Jenkins agents.",
      ],
      quiz: [
        {
          question: "What is Jenkins commonly used for?",
          options: [
            "Automation and CI/CD pipelines",
            "Designing database schemas only",
            "Editing images",
            "Replacing operating systems",
          ],
          answer: "Automation and CI/CD pipelines",
        },
        {
          question: "What can a Jenkins pipeline perform?",
          options: [
            "Build, test, and deployment steps",
            "Only write documentation",
            "Only create users",
            "Only monitor CPU temperature",
          ],
          answer:
            "Build, test, and deployment steps",
        },
        {
          question: "Why should credentials be protected in Jenkins?",
          options: [
            "Credentials can provide access to protected systems",
            "Credentials are unnecessary",
            "Pipelines cannot use credentials",
            "Credentials are only UI elements",
          ],
          answer:
            "Credentials can provide access to protected systems",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Artifact & Package Management",
    icon: "📦",
    lesson: {
      explanation:
        "Artifact and package management systems store software packages and build outputs so they can be reused and deployed consistently. Artifacts can include compiled applications, container images, libraries, and other release files.",
      points: [
        "Build artifacts are outputs produced by a build process.",
        "Package repositories store reusable software packages.",
        "Artifact repositories help maintain consistent versions.",
        "Artifacts can be promoted between development and production environments.",
        "Versioning helps identify and reproduce releases.",
      ],
      example:
        "A CI pipeline can compile an application and upload the resulting package to an artifact repository. A deployment pipeline can then retrieve the exact version for production deployment.",
      commonMistakes: [
        "Overwriting artifacts without proper versioning.",
        "Deploying an artifact that was not tested.",
        "Keeping important artifacts only on a developer's local machine.",
      ],
      quiz: [
        {
          question: "What is a build artifact?",
          options: [
            "An output produced by a build process",
            "A source code editor",
            "A network cable",
            "A monitoring alert",
          ],
          answer:
            "An output produced by a build process",
        },
        {
          question: "Why is artifact versioning useful?",
          options: [
            "It helps identify and reproduce specific releases",
            "It removes testing",
            "It disables deployment",
            "It makes every artifact identical",
          ],
          answer:
            "It helps identify and reproduce specific releases",
        },
        {
          question: "Where can reusable packages be stored?",
          options: [
            "A package repository",
            "Only a text editor",
            "Only a browser cache",
            "Only a local screenshot",
          ],
          answer: "A package repository",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Configuration Management",
    icon: "⚙️",
    lesson: {
      explanation:
        "Configuration management involves maintaining consistent system and application configuration across environments. Automation tools can help define and apply configuration repeatedly instead of relying on manual server changes.",
      points: [
        "Configuration management helps maintain consistency.",
        "Automated configuration reduces manual work.",
        "Configuration should be version controlled where appropriate.",
        "Tools can configure packages, services, users, and system settings.",
        "Repeatable configuration makes environments easier to reproduce.",
      ],
      example:
        "An organization can use an automation tool to install the same web server package, configure its service, and apply required settings across multiple servers.",
      commonMistakes: [
        "Making manual changes that are not recorded.",
        "Allowing different servers to drift into inconsistent configurations.",
        "Storing sensitive configuration values insecurely.",
      ],
      quiz: [
        {
          question: "What is a goal of configuration management?",
          options: [
            "Maintain consistent system configurations",
            "Remove all automation",
            "Delete server settings",
            "Replace source control",
          ],
          answer:
            "Maintain consistent system configurations",
        },
        {
          question: "What can automated configuration reduce?",
          options: [
            "Manual repetitive work",
            "Application requirements",
            "The need for documentation",
            "All security controls",
          ],
          answer:
            "Manual repetitive work",
        },
        {
          question: "Why is repeatable configuration useful?",
          options: [
            "It makes environments easier to reproduce",
            "It prevents versioning",
            "It removes testing",
            "It makes every server public",
          ],
          answer:
            "It makes environments easier to reproduce",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Cloud CLI & Automation",
    icon: "⌨️",
    lesson: {
      explanation:
        "Cloud command-line interfaces allow engineers to manage cloud resources through commands and scripts. CLI-based automation can be integrated into development workflows, CI/CD pipelines, and operational tasks.",
      points: [
        "Cloud CLIs provide command-line access to cloud services.",
        "Commands can be combined into scripts.",
        "Automation can reduce repetitive manual cloud operations.",
        "CLI credentials should be managed securely.",
        "Scripts should be tested before being used against production resources.",
      ],
      example:
        "A deployment pipeline can use a cloud CLI to upload an application artifact, update a service, or retrieve deployment information as part of an automated workflow.",
      commonMistakes: [
        "Hard-coding access keys inside scripts.",
        "Running destructive commands without verifying the target environment.",
        "Using administrator credentials for every CLI operation.",
      ],
      quiz: [
        {
          question: "What does a cloud CLI provide?",
          options: [
            "Command-line access to cloud services",
            "Only graphical design tools",
            "Only database diagrams",
            "Only source code editing",
          ],
          answer:
            "Command-line access to cloud services",
        },
        {
          question: "Why can CLI commands be useful in DevOps?",
          options: [
            "They can be scripted and automated",
            "They cannot be automated",
            "They replace all applications",
            "They disable CI/CD",
          ],
          answer:
            "They can be scripted and automated",
        },
        {
          question: "How should cloud credentials be handled?",
          options: [
            "Securely using appropriate credential-management mechanisms",
            "Hard-coded in public scripts",
            "Stored in README files",
            "Shared through chat messages",
          ],
          answer:
            "Securely using appropriate credential-management mechanisms",
        },
      ],
    },
  },

  {
    id: 6,
    title: "DevOps Collaboration & Issue Tracking",
    icon: "👥",
    lesson: {
      explanation:
        "DevOps involves collaboration between development, operations, security, and other teams. Issue tracking, project management, code review, documentation, and communication tools help teams coordinate work and maintain visibility.",
      points: [
        "Issue tracking helps teams organize tasks and problems.",
        "Code review improves collaboration around changes.",
        "Documentation helps teams understand systems and processes.",
        "Project boards can provide visibility into work.",
        "Clear communication supports reliable delivery.",
      ],
      example:
        "A team can create an issue for a production bug, assign it to a developer, link the related pull request, review the fix, and close the issue after deployment and verification.",
      commonMistakes: [
        "Closing issues without verifying the actual fix.",
        "Failing to link changes to relevant tasks.",
        "Keeping important operational knowledge only in private messages.",
      ],
      quiz: [
        {
          question: "What is an issue tracker useful for?",
          options: [
            "Organizing tasks, bugs, and work items",
            "Replacing cloud infrastructure",
            "Encrypting every database",
            "Building physical servers",
          ],
          answer:
            "Organizing tasks, bugs, and work items",
        },
        {
          question: "What does code review support?",
          options: [
            "Collaboration and quality checks around code changes",
            "Automatic hardware replacement",
            "Cloud billing only",
            "Deleting repositories",
          ],
          answer:
            "Collaboration and quality checks around code changes",
        },
        {
          question: "Why is documentation important in DevOps?",
          options: [
            "It helps teams understand systems and processes",
            "It replaces monitoring",
            "It removes version control",
            "It prevents automation",
          ],
          answer:
            "It helps teams understand systems and processes",
        },
      ],
    },
  },

  {
    id: 7,
    title: "Integrating DevOps Tools",
    icon: "🔗",
    lesson: {
      explanation:
        "DevOps tools become more effective when they are integrated into a coherent workflow. Source control, CI/CD, infrastructure automation, containers, cloud services, and monitoring can work together to create a repeatable software delivery process.",
      points: [
        "Tools should work together as part of a defined workflow.",
        "Source changes can trigger automated pipelines.",
        "Build outputs can be stored and deployed automatically.",
        "Infrastructure can be provisioned through automation.",
        "Monitoring can provide feedback after deployment.",
        "Tool integration should maintain security and access controls.",
      ],
      example:
        "A developer pushes code to a Git repository. A CI/CD pipeline builds and tests it, creates a container image, stores the image in a registry, deploys it to the cloud, and monitoring then observes the running application.",
      commonMistakes: [
        "Integrating tools without defining clear responsibilities.",
        "Giving every tool excessive permissions.",
        "Building complicated pipelines that are difficult to maintain.",
      ],
      quiz: [
        {
          question: "Why integrate DevOps tools?",
          options: [
            "To create a connected and repeatable delivery workflow",
            "To make every tool perform the same task",
            "To remove automation",
            "To eliminate monitoring",
          ],
          answer:
            "To create a connected and repeatable delivery workflow",
        },
        {
          question: "What can trigger a CI/CD pipeline?",
          options: [
            "A change pushed to a source repository",
            "Only a computer restart",
            "A screen resolution change",
            "A browser bookmark",
          ],
          answer:
            "A change pushed to a source repository",
        },
        {
          question: "What should tool integration consider?",
          options: [
            "Security and appropriate access controls",
            "Only visual appearance",
            "Only tool names",
            "Removing authentication",
          ],
          answer:
            "Security and appropriate access controls",
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
// DEVOPS & CLOUD TOOLS COMPONENT
// =====================================================

const DevOpsCloudTools = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] =
    useState(null);

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-devops-cloud-tools", subtopics);

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
            ← Back to DevOps & Cloud Tools
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
            🛠️ DevOps & Cloud Tools
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
            Learn essential
            DevOps and cloud tools
            for automation,
            build pipelines,
            artifact management,
            configuration,
            cloud CLI usage,
            collaboration, and
            tool integration.
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
          📚 DevOps & Cloud Tools Lessons
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
                    DevOps and cloud
                    tools learning
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

export default DevOpsCloudTools;