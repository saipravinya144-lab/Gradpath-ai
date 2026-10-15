import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// GIT & CI/CD — 8 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Git Fundamentals",
    icon: "🌿",
    lesson: {
      explanation:
        "Git is a distributed version control system used to track changes in source code and collaborate with other developers. It allows developers to maintain project history and work safely on different versions of a project.",
      points: [
        "Git tracks changes made to files.",
        "A Git repository contains the project's version history.",
        "Git allows developers to work on branches.",
        "Commits record snapshots of project changes.",
        "Git can be used locally without a remote repository.",
      ],
      example:
        "A developer can initialize a Git repository in a project, make changes, commit them, and later inspect or revert those changes.",
      commonMistakes: [
        "Thinking Git and GitHub are the same thing.",
        "Making large commits containing unrelated changes.",
        "Ignoring meaningful commit messages.",
      ],
      quiz: [
        {
          question: "What is Git?",
          options: [
            "A distributed version control system",
            "A cloud database",
            "A container runtime",
            "A programming language",
          ],
          answer:
            "A distributed version control system",
        },
        {
          question: "What does a Git commit represent?",
          options: [
            "A recorded snapshot of changes",
            "A cloud server",
            "A Docker container",
            "A database table",
          ],
          answer:
            "A recorded snapshot of changes",
        },
        {
          question: "Can Git be used without GitHub?",
          options: [
            "Yes",
            "No",
            "Only with Docker",
            "Only with Kubernetes",
          ],
          answer: "Yes",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Branches & Merging",
    icon: "🌳",
    lesson: {
      explanation:
        "Git branches allow developers to work on different lines of development without directly changing another branch. Changes from one branch can later be merged into another branch.",
      points: [
        "Branches isolate development work.",
        "The main branch commonly contains the primary project history.",
        "Feature branches can be used for individual features.",
        "Merging combines changes from one branch into another.",
        "Branches make collaborative development safer.",
      ],
      example:
        "A developer can create a feature branch, implement a login feature, test it, and merge it into the main branch after review.",
      commonMistakes: [
        "Making all changes directly on the main branch.",
        "Merging without resolving conflicts.",
        "Creating too many long-lived branches without a clear purpose.",
      ],
      quiz: [
        {
          question: "Why are Git branches used?",
          options: [
            "To isolate development work",
            "To create databases",
            "To run containers",
            "To replace commits",
          ],
          answer:
            "To isolate development work",
        },
        {
          question: "What does merging do?",
          options: [
            "Combines changes from branches",
            "Deletes all Git history",
            "Creates a Docker image",
            "Installs dependencies",
          ],
          answer:
            "Combines changes from branches",
        },
        {
          question:
            "What is a common use of a feature branch?",
          options: [
            "Develop a specific feature separately",
            "Store database passwords",
            "Replace Git entirely",
            "Run a Kubernetes cluster",
          ],
          answer:
            "Develop a specific feature separately",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Remote Repositories & GitHub",
    icon: "🐙",
    lesson: {
      explanation:
        "Remote repositories allow Git projects to be stored and shared on remote platforms. GitHub is a popular platform that provides Git repository hosting along with collaboration and development tools.",
      points: [
        "A remote repository can store a copy of a Git project.",
        "GitHub hosts Git repositories.",
        "git clone downloads a remote repository.",
        "git push uploads local commits to a remote repository.",
        "git pull retrieves changes from a remote repository.",
      ],
      example:
        "A developer can clone a GitHub repository, make changes locally, commit them, and push the commits back to the remote repository.",
      commonMistakes: [
        "Confusing Git with GitHub.",
        "Pushing passwords or API keys into a public repository.",
        "Pulling and pushing without understanding which branch is being used.",
      ],
      quiz: [
        {
          question: "What is GitHub?",
          options: [
            "A platform for hosting and collaborating on Git repositories",
            "A programming language",
            "A container runtime",
            "A database server",
          ],
          answer:
            "A platform for hosting and collaborating on Git repositories",
        },
        {
          question: "What does git push generally do?",
          options: [
            "Uploads local commits to a remote repository",
            "Deletes the local repository",
            "Creates a Docker container",
            "Downloads a repository",
          ],
          answer:
            "Uploads local commits to a remote repository",
        },
        {
          question: "What does git clone do?",
          options: [
            "Copies a remote repository to the local machine",
            "Deletes a remote repository",
            "Creates a database",
            "Starts a Kubernetes Pod",
          ],
          answer:
            "Copies a remote repository to the local machine",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Pull Requests & Code Review",
    icon: "🔍",
    lesson: {
      explanation:
        "Pull requests provide a structured way to propose changes to a repository. They allow team members to review code, discuss changes, request modifications, and eventually merge approved work.",
      points: [
        "Pull requests are commonly used for collaborative development.",
        "Reviewers can inspect code changes before merging.",
        "Comments can be added to specific changes.",
        "Automated checks can run on pull requests.",
        "Code review helps identify bugs and maintain coding standards.",
      ],
      example:
        "A developer creates a feature branch and opens a pull request to merge the feature into the main branch. Team members review the changes before approval.",
      commonMistakes: [
        "Creating pull requests containing unrelated changes.",
        "Ignoring review comments.",
        "Merging code without checking automated tests.",
      ],
      quiz: [
        {
          question: "What is the purpose of a pull request?",
          options: [
            "Propose and review changes before merging",
            "Create a physical server",
            "Delete Git history",
            "Install Kubernetes",
          ],
          answer:
            "Propose and review changes before merging",
        },
        {
          question: "Who can inspect changes in a pull request?",
          options: [
            "Code reviewers",
            "Only the operating system",
            "Only Docker",
            "Only the database",
          ],
          answer: "Code reviewers",
        },
        {
          question:
            "What can run automatically on a pull request?",
          options: [
            "Automated tests and checks",
            "Hardware upgrades",
            "Physical backups only",
            "Operating system installation",
          ],
          answer:
            "Automated tests and checks",
        },
      ],
    },
  },

  {
    id: 5,
    title: "CI — Continuous Integration",
    icon: "🔄",
    lesson: {
      explanation:
        "Continuous Integration is a development practice where developers frequently integrate code changes into a shared repository. Automated builds and tests can run whenever changes are submitted.",
      points: [
        "CI encourages frequent integration of code changes.",
        "Automated tests can detect problems early.",
        "Build processes can run automatically.",
        "CI helps reduce integration problems.",
        "CI pipelines can run on commits and pull requests.",
      ],
      example:
        "When a developer pushes code to a repository, a CI system can automatically install dependencies, run tests, and report whether the build succeeded.",
      commonMistakes: [
        "Having CI pipelines that do not actually test the application.",
        "Ignoring failed builds.",
        "Making pipelines unnecessarily slow.",
      ],
      quiz: [
        {
          question: "What does CI stand for?",
          options: [
            "Continuous Integration",
            "Container Installation",
            "Cloud Infrastructure",
            "Code Inspection",
          ],
          answer: "Continuous Integration",
        },
        {
          question: "What is a common CI activity?",
          options: [
            "Automatically running tests",
            "Replacing all developers",
            "Deleting repositories",
            "Creating physical servers",
          ],
          answer:
            "Automatically running tests",
        },
        {
          question:
            "Why does CI encourage frequent integration?",
          options: [
            "To detect integration problems earlier",
            "To avoid version control",
            "To remove automated testing",
            "To eliminate branches completely",
          ],
          answer:
            "To detect integration problems earlier",
        },
      ],
    },
  },

  {
    id: 6,
    title: "CD — Continuous Delivery & Deployment",
    icon: "🚀",
    lesson: {
      explanation:
        "Continuous Delivery keeps software in a deployable state through automated processes. Continuous Deployment goes further by automatically releasing approved changes to a target environment.",
      points: [
        "Continuous Delivery automates software delivery processes.",
        "Continuous Deployment can automatically release changes.",
        "Deployment pipelines can contain testing and approval stages.",
        "CD reduces manual deployment work.",
        "Automated deployment requires reliable tests and safeguards.",
      ],
      example:
        "After CI tests pass, a pipeline can build an application image and deploy it to a staging environment. With continuous deployment, a successful pipeline can automatically release it to production.",
      commonMistakes: [
        "Deploying automatically without adequate testing.",
        "Confusing Continuous Delivery with Continuous Deployment.",
        "Ignoring rollback strategies.",
      ],
      quiz: [
        {
          question: "What does CD commonly refer to in DevOps?",
          options: [
            "Continuous Delivery or Continuous Deployment",
            "Container Database",
            "Code Database",
            "Cloud Debugging",
          ],
          answer:
            "Continuous Delivery or Continuous Deployment",
        },
        {
          question:
            "What can Continuous Deployment do after successful checks?",
          options: [
            "Automatically release changes",
            "Delete the application",
            "Remove version control",
            "Disable testing",
          ],
          answer:
            "Automatically release changes",
        },
        {
          question: "Why are rollback strategies important?",
          options: [
            "They help recover from problematic deployments",
            "They replace Git",
            "They create Docker images",
            "They remove the need for testing",
          ],
          answer:
            "They help recover from problematic deployments",
        },
      ],
    },
  },

  {
    id: 7,
    title: "CI/CD Pipelines",
    icon: "🛠️",
    lesson: {
      explanation:
        "A CI/CD pipeline automates a sequence of software development and delivery tasks. A typical pipeline may include source checkout, dependency installation, testing, building, security checks, artifact creation, and deployment.",
      points: [
        "Pipelines automate repeatable software delivery tasks.",
        "Pipeline stages can run sequentially or in parallel.",
        "Automated tests can act as quality gates.",
        "Build artifacts can be produced by pipeline jobs.",
        "Deployment stages can target different environments.",
      ],
      example:
        "A pipeline can run tests first, build a Docker image after the tests pass, push the image to a registry, and deploy it to a Kubernetes environment.",
      commonMistakes: [
        "Putting every task into one large unmaintainable pipeline.",
        "Skipping tests before deployment.",
        "Hard-coding secrets inside pipeline configuration.",
      ],
      quiz: [
        {
          question: "What is a CI/CD pipeline?",
          options: [
            "An automated sequence of development and delivery tasks",
            "A physical network cable",
            "A database table",
            "A programming language",
          ],
          answer:
            "An automated sequence of development and delivery tasks",
        },
        {
          question: "What can a pipeline produce?",
          options: [
            "Build artifacts or container images",
            "Only Git branches",
            "Only database passwords",
            "Only source files",
          ],
          answer:
            "Build artifacts or container images",
        },
        {
          question:
            "Why can tests act as quality gates?",
          options: [
            "They can prevent later stages when required checks fail",
            "They delete failed code",
            "They replace version control",
            "They automatically rewrite applications",
          ],
          answer:
            "They can prevent later stages when required checks fail",
        },
      ],
    },
  },

  {
    id: 8,
    title: "GitHub Actions & DevOps Automation",
    icon: "🤖",
    lesson: {
      explanation:
        "GitHub Actions is a workflow automation platform integrated with GitHub repositories. It can automate CI/CD tasks such as testing, building applications, creating container images, and deploying software.",
      points: [
        "GitHub Actions uses workflow files to define automation.",
        "Workflows can be triggered by repository events.",
        "Jobs contain steps that perform tasks.",
        "Actions can be reused for common automation tasks.",
        "GitHub Actions can support both CI and CD workflows.",
      ],
      example:
        "A GitHub Actions workflow can run whenever code is pushed to the main branch, execute automated tests, build a Docker image, and deploy the application if all required checks pass.",
      commonMistakes: [
        "Storing secrets directly inside workflow files.",
        "Giving workflows more permissions than necessary.",
        "Running deployment workflows without appropriate checks.",
      ],
      quiz: [
        {
          question: "What is GitHub Actions used for?",
          options: [
            "Workflow and CI/CD automation",
            "Creating physical servers",
            "Replacing Git",
            "Managing database tables only",
          ],
          answer:
            "Workflow and CI/CD automation",
        },
        {
          question: "What can trigger a GitHub Actions workflow?",
          options: [
            "Repository events such as pushes or pull requests",
            "Only a computer restart",
            "Only a database query",
            "Only Docker installation",
          ],
          answer:
            "Repository events such as pushes or pull requests",
        },
        {
          question: "Where are GitHub Actions workflows commonly defined?",
          options: [
            ".github/workflows",
            ".docker/images",
            ".kubernetes/apps",
            ".git/database",
          ],
          answer: ".github/workflows",
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
// GIT & CI/CD COMPONENT
// =====================================================

const GitCICD = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] =
    useState(null);

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-git-ci-cd", subtopics);

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
            ← Back to Git & CI/CD
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
            🔄 Git & CI/CD
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
            Learn Git,
            branching,
            GitHub, pull
            requests, CI/CD
            pipelines, and
            DevOps automation.
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
          📚 Git & CI/CD Lessons
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
                    Git and DevOps
                    learning lesson
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

export default GitCICD;