import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// INFRASTRUCTURE AS CODE — 7 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Infrastructure as Code Fundamentals",
    icon: "🏗️",
    lesson: {
      explanation:
        "Infrastructure as Code (IaC) is the practice of defining and managing infrastructure using machine-readable configuration files instead of configuring resources manually. IaC makes infrastructure more consistent, repeatable, and easier to version.",
      points: [
        "IaC represents infrastructure using configuration or code.",
        "Infrastructure definitions can be stored in version control.",
        "IaC reduces repetitive manual configuration.",
        "The same infrastructure definition can be reused across environments.",
        "IaC supports automation in DevOps workflows.",
      ],
      example:
        "Instead of manually creating several cloud servers, a team can define the required servers, networking, and permissions in IaC files and use those definitions to create the environment.",
      commonMistakes: [
        "Thinking IaC means writing traditional application code for every resource.",
        "Making manual changes without recording them in the IaC configuration.",
        "Keeping infrastructure configuration outside version control.",
      ],
      quiz: [
        {
          question: "What does IaC stand for?",
          options: [
            "Infrastructure as Code",
            "Internet as Configuration",
            "Infrastructure and Containers",
            "Internal Application Control",
          ],
          answer: "Infrastructure as Code",
        },
        {
          question: "What is a major benefit of IaC?",
          options: [
            "Repeatable infrastructure provisioning",
            "Removing all testing",
            "Replacing application source code",
            "Eliminating version control",
          ],
          answer: "Repeatable infrastructure provisioning",
        },
        {
          question: "Where can IaC definitions commonly be stored?",
          options: [
            "Version control repositories",
            "Only in RAM",
            "Only inside containers",
            "Only on local desktops",
          ],
          answer: "Version control repositories",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Declarative vs Imperative Infrastructure",
    icon: "📝",
    lesson: {
      explanation:
        "Infrastructure tools can use declarative or imperative approaches. Declarative configuration describes the desired final state, while imperative approaches describe the steps needed to reach a state.",
      points: [
        "Declarative configuration focuses on the desired state.",
        "Imperative configuration focuses on the sequence of actions.",
        "Terraform is commonly used with a declarative model.",
        "Declarative systems can compare desired and current state.",
        "Both approaches can be useful depending on the task.",
      ],
      example:
        "A declarative configuration can specify that three web servers should exist. The infrastructure tool determines what actions are necessary to reach that state.",
      commonMistakes: [
        "Assuming declarative tools require no understanding of infrastructure.",
        "Confusing desired state with a list of shell commands.",
        "Thinking declarative approaches eliminate all possible configuration errors.",
      ],
      quiz: [
        {
          question: "What does declarative infrastructure primarily describe?",
          options: [
            "The desired final state",
            "Only the exact shell commands",
            "Only application source code",
            "Only network packets",
          ],
          answer: "The desired final state",
        },
        {
          question: "What does an imperative approach focus on?",
          options: [
            "The sequence of actions",
            "Only the final state",
            "Only version numbers",
            "Only container images",
          ],
          answer: "The sequence of actions",
        },
        {
          question: "Which tool commonly uses a declarative infrastructure model?",
          options: [
            "Terraform",
            "Git",
            "Docker Hub",
            "VS Code",
          ],
          answer: "Terraform",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Terraform Fundamentals",
    icon: "🌍",
    lesson: {
      explanation:
        "Terraform is an infrastructure provisioning tool that allows infrastructure to be described using configuration files. It can work with many cloud and infrastructure providers through provider plugins.",
      points: [
        "Terraform uses configuration files to define infrastructure.",
        "Terraform configurations commonly use the HCL language.",
        "Providers allow Terraform to interact with infrastructure platforms.",
        "Resources represent infrastructure objects managed by Terraform.",
        "Terraform can create, update, and remove managed resources.",
      ],
      example:
        "A Terraform configuration can define a cloud virtual machine, network, and storage resources and then use Terraform commands to provision them.",
      commonMistakes: [
        "Hard-coding sensitive credentials into Terraform files.",
        "Applying infrastructure changes without reviewing the plan.",
        "Deleting Terraform state files without understanding their purpose.",
      ],
      quiz: [
        {
          question: "What is Terraform used for?",
          options: [
            "Infrastructure provisioning and management",
            "Writing mobile applications",
            "Editing videos",
            "Creating database queries only",
          ],
          answer:
            "Infrastructure provisioning and management",
        },
        {
          question: "What language is commonly used by Terraform configuration files?",
          options: [
            "HCL",
            "HTML",
            "CSS",
            "SQL",
          ],
          answer: "HCL",
        },
        {
          question: "What does a Terraform provider do?",
          options: [
            "Connects Terraform to an infrastructure platform or service",
            "Compiles Java code",
            "Creates Git commits",
            "Runs browser JavaScript",
          ],
          answer:
            "Connects Terraform to an infrastructure platform or service",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Terraform Providers, Resources & Variables",
    icon: "🧩",
    lesson: {
      explanation:
        "Terraform configurations are built from components such as providers, resources, variables, outputs, and modules. These components help make infrastructure definitions reusable and configurable.",
      points: [
        "Providers define how Terraform communicates with external platforms.",
        "Resources represent infrastructure objects.",
        "Variables allow configuration values to be parameterized.",
        "Outputs expose useful values from Terraform configurations.",
        "Modules can group reusable infrastructure configurations.",
      ],
      example:
        "A Terraform configuration can use a variable for the instance size so the same configuration can create different infrastructure sizes in different environments.",
      commonMistakes: [
        "Hard-coding every value instead of using appropriate variables.",
        "Confusing a provider with a resource.",
        "Creating overly complex modules that are difficult to maintain.",
      ],
      quiz: [
        {
          question: "What does a Terraform resource represent?",
          options: [
            "An infrastructure object",
            "A Git commit",
            "A source-code function",
            "A Docker registry",
          ],
          answer: "An infrastructure object",
        },
        {
          question: "Why are Terraform variables useful?",
          options: [
            "They make configurations configurable and reusable",
            "They remove infrastructure",
            "They replace providers",
            "They disable Terraform state",
          ],
          answer:
            "They make configurations configurable and reusable",
        },
        {
          question: "What can a Terraform module provide?",
          options: [
            "Reusable infrastructure configuration",
            "A physical server",
            "A Git branch",
            "A programming language",
          ],
          answer:
            "Reusable infrastructure configuration",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Terraform State & Plan",
    icon: "📋",
    lesson: {
      explanation:
        "Terraform maintains state information that helps it understand the relationship between configuration and real infrastructure. The terraform plan command previews changes before they are applied.",
      points: [
        "Terraform state records information about managed resources.",
        "The state helps Terraform determine what needs to change.",
        "terraform plan previews proposed infrastructure changes.",
        "terraform apply performs the planned changes.",
        "Remote state storage can support team collaboration.",
      ],
      example:
        "Before changing a production environment, a team can run terraform plan to review which resources Terraform intends to create, modify, or destroy.",
      commonMistakes: [
        "Editing the state file manually without a valid reason.",
        "Skipping terraform plan before important changes.",
        "Storing sensitive state files insecurely.",
      ],
      quiz: [
        {
          question: "What is Terraform state used for?",
          options: [
            "Tracking managed infrastructure resources",
            "Storing Git commits",
            "Building Docker images",
            "Running Kubernetes Pods",
          ],
          answer:
            "Tracking managed infrastructure resources",
        },
        {
          question: "What does terraform plan do?",
          options: [
            "Previews proposed infrastructure changes",
            "Deletes all infrastructure",
            "Creates a Git repository",
            "Builds a mobile application",
          ],
          answer:
            "Previews proposed infrastructure changes",
        },
        {
          question: "Which command applies Terraform changes?",
          options: [
            "terraform apply",
            "terraform start",
            "terraform deploy-only",
            "terraform execute",
          ],
          answer: "terraform apply",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Infrastructure Modules & Environments",
    icon: "📦",
    lesson: {
      explanation:
        "Infrastructure modules help organize reusable configurations, while separate environments such as development, staging, and production allow infrastructure to be managed according to different requirements.",
      points: [
        "Modules can reduce duplication in infrastructure configuration.",
        "Development and production may require different resource sizes.",
        "Environment-specific configuration can be parameterized.",
        "Reusable modules should have clear inputs and outputs.",
        "Infrastructure changes should be tested before production use.",
      ],
      example:
        "A team can create one reusable web-server module and configure it differently for development, staging, and production environments.",
      commonMistakes: [
        "Copying entire infrastructure configurations for every environment.",
        "Making modules too tightly coupled to one environment.",
        "Applying untested infrastructure changes directly to production.",
      ],
      quiz: [
        {
          question: "Why are infrastructure modules useful?",
          options: [
            "They promote reusable infrastructure configuration",
            "They remove version control",
            "They replace cloud providers",
            "They eliminate all variables",
          ],
          answer:
            "They promote reusable infrastructure configuration",
        },
        {
          question: "Which is an example of a common infrastructure environment?",
          options: [
            "Staging",
            "Keyboard",
            "Browser",
            "Compiler",
          ],
          answer: "Staging",
        },
        {
          question: "Why should infrastructure changes be tested before production?",
          options: [
            "To reduce the risk of production failures",
            "To remove all automation",
            "To avoid using version control",
            "To disable Terraform",
          ],
          answer:
            "To reduce the risk of production failures",
        },
      ],
    },
  },

  {
    id: 7,
    title: "IaC with CI/CD & Best Practices",
    icon: "🚀",
    lesson: {
      explanation:
        "Infrastructure as Code can be integrated into CI/CD pipelines so infrastructure changes are reviewed, validated, planned, and applied through an automated workflow. Good IaC practices improve consistency, security, and maintainability.",
      points: [
        "Infrastructure code can be stored in Git repositories.",
        "Pull requests can be used to review infrastructure changes.",
        "CI pipelines can validate and test IaC configurations.",
        "Terraform plans can be reviewed before applying changes.",
        "Secrets should be managed using appropriate secret-management systems.",
      ],
      example:
        "A pull request containing Terraform changes can trigger automated validation and generate a Terraform plan. After approval, the pipeline can apply the approved infrastructure changes.",
      commonMistakes: [
        "Applying infrastructure changes directly from an unmanaged local machine.",
        "Storing cloud credentials in source code.",
        "Skipping code review for infrastructure changes.",
      ],
      quiz: [
        {
          question: "How can Git help with IaC?",
          options: [
            "Track and review infrastructure changes",
            "Replace Terraform providers",
            "Run cloud servers directly",
            "Create physical networks",
          ],
          answer:
            "Track and review infrastructure changes",
        },
        {
          question: "What can a CI pipeline do with IaC?",
          options: [
            "Validate configurations and generate plans",
            "Automatically remove all infrastructure",
            "Replace the cloud provider",
            "Disable version control",
          ],
          answer:
            "Validate configurations and generate plans",
        },
        {
          question: "Where should sensitive credentials ideally be stored?",
          options: [
            "A secure secret-management system",
            "A public Git repository",
            "A Docker image",
            "A README file",
          ],
          answer:
            "A secure secret-management system",
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
// INFRASTRUCTURE AS CODE COMPONENT
// =====================================================

const InfrastructureAsCode = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] =
    useState(null);

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-infrastructure-as-code", subtopics);

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
            ← Back to Infrastructure as Code
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
            🏗️ Infrastructure
            as Code
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
            Learn Infrastructure
            as Code, Terraform,
            infrastructure
            configuration,
            state management,
            reusable modules,
            environments, and
            IaC automation.
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
          📚 Infrastructure as
          Code Lessons
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
                    Infrastructure
                    as Code learning
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

export default InfrastructureAsCode;