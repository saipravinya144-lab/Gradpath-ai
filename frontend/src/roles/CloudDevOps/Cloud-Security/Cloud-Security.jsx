import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// CLOUD SECURITY — 7 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Cloud Security Fundamentals",
    icon: "🔐",
    lesson: {
      explanation:
        "Cloud security is the practice of protecting cloud infrastructure, applications, data, identities, and services from unauthorized access and other security threats. Cloud security requires organizations and cloud providers to understand and manage their respective responsibilities.",
      points: [
        "Cloud security protects cloud resources, applications, and data.",
        "Security responsibilities are shared between the provider and customer.",
        "Identity and access management is a major part of cloud security.",
        "Data should be protected both in transit and at rest.",
        "Security should be considered throughout the cloud environment lifecycle.",
      ],
      example:
        "A company running an application in the cloud can use identity controls, network restrictions, encryption, logging, and monitoring to protect the application and its data.",
      commonMistakes: [
        "Assuming the cloud provider is responsible for every security task.",
        "Giving every user administrative access.",
        "Ignoring security monitoring after deployment.",
      ],
      quiz: [
        {
          question: "What is cloud security primarily concerned with?",
          options: [
            "Protecting cloud resources, applications, and data",
            "Designing mobile interfaces",
            "Writing only frontend code",
            "Replacing version control",
          ],
          answer:
            "Protecting cloud resources, applications, and data",
        },
        {
          question: "Who is responsible for cloud security?",
          options: [
            "Responsibilities are shared between provider and customer",
            "Only the cloud provider",
            "Only the customer",
            "Only the network administrator",
          ],
          answer:
            "Responsibilities are shared between provider and customer",
        },
        {
          question: "Which is an important part of cloud security?",
          options: [
            "Identity and access management",
            "Changing screen resolution",
            "Deleting logs",
            "Disabling authentication",
          ],
          answer:
            "Identity and access management",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Shared Responsibility Model",
    icon: "🤝",
    lesson: {
      explanation:
        "The shared responsibility model divides security responsibilities between a cloud service provider and its customers. The exact responsibilities depend on the cloud service being used, such as infrastructure, platform, or software services.",
      points: [
        "Cloud providers protect the underlying cloud infrastructure.",
        "Customers remain responsible for security tasks related to their use of cloud services.",
        "Responsibilities differ between IaaS, PaaS, and SaaS.",
        "Customers must properly configure services they control.",
        "Understanding responsibility boundaries helps prevent security gaps.",
      ],
      example:
        "A cloud provider may secure physical data centers, while the customer remains responsible for configuring application permissions and protecting the data stored in its cloud resources.",
      commonMistakes: [
        "Assuming the provider secures application-level configurations automatically.",
        "Not checking the provider's responsibility documentation.",
        "Treating every cloud service model as having identical security responsibilities.",
      ],
      quiz: [
        {
          question: "What does the shared responsibility model describe?",
          options: [
            "Security responsibilities between cloud provider and customer",
            "Only employee responsibilities",
            "Only network routing",
            "Only application development",
          ],
          answer:
            "Security responsibilities between cloud provider and customer",
        },
        {
          question: "Who is generally responsible for the physical cloud infrastructure?",
          options: [
            "The cloud provider",
            "Every application developer",
            "The database user",
            "The Git repository",
          ],
          answer: "The cloud provider",
        },
        {
          question:
            "Do security responsibilities vary between cloud service models?",
          options: [
            "Yes",
            "No",
            "Only for local servers",
            "Only for containers",
          ],
          answer: "Yes",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Identity & Access Management",
    icon: "👤",
    lesson: {
      explanation:
        "Identity and Access Management (IAM) controls who can access cloud resources and what actions they are allowed to perform. Strong IAM practices reduce unauthorized access and limit the impact of compromised accounts.",
      points: [
        "IAM manages identities and permissions.",
        "Authentication verifies an identity.",
        "Authorization determines what an identity can access.",
        "Least privilege gives users only the permissions they need.",
        "Multi-factor authentication adds another layer of protection.",
      ],
      example:
        "A developer may be allowed to deploy an application but not delete production databases. Separate permissions can be assigned according to job responsibilities.",
      commonMistakes: [
        "Giving users unnecessary administrator privileges.",
        "Sharing credentials between employees.",
        "Disabling multi-factor authentication when it is available.",
      ],
      quiz: [
        {
          question: "What does authentication verify?",
          options: [
            "The identity of a user or system",
            "The size of a database",
            "The speed of a network",
            "The version of a Docker image",
          ],
          answer:
            "The identity of a user or system",
        },
        {
          question: "What does authorization determine?",
          options: [
            "What an identity is allowed to access or do",
            "Whether a password exists",
            "Which operating system is installed",
            "Which browser is being used",
          ],
          answer:
            "What an identity is allowed to access or do",
        },
        {
          question: "What does least privilege mean?",
          options: [
            "Give only the permissions required for a task",
            "Give everyone administrator access",
            "Remove authentication",
            "Allow all network traffic",
          ],
          answer:
            "Give only the permissions required for a task",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Network Security in the Cloud",
    icon: "🌐",
    lesson: {
      explanation:
        "Cloud network security protects communication between cloud resources and external networks. Security groups, network access controls, private networks, firewalls, and controlled ingress and egress help reduce unauthorized network access.",
      points: [
        "Cloud networks can isolate different workloads.",
        "Security groups can control network traffic to resources.",
        "Network access controls can restrict traffic based on defined rules.",
        "Private resources should not be publicly exposed without a requirement.",
        "Network segmentation can reduce the impact of security incidents.",
      ],
      example:
        "A cloud application can place its database in a private network while allowing only the application servers to communicate with the database.",
      commonMistakes: [
        "Opening unnecessary ports to the internet.",
        "Making databases publicly accessible.",
        "Using overly broad network rules such as allowing all traffic.",
      ],
      quiz: [
        {
          question: "What is a major purpose of cloud network security?",
          options: [
            "Control and protect network communication",
            "Create application source code",
            "Replace databases",
            "Manage Git commits",
          ],
          answer:
            "Control and protect network communication",
        },
        {
          question: "Why can network segmentation improve security?",
          options: [
            "It can limit access between different workloads",
            "It removes authentication",
            "It disables monitoring",
            "It makes every resource public",
          ],
          answer:
            "It can limit access between different workloads",
        },
        {
          question: "What is generally safer for a database?",
          options: [
            "Keeping it private and allowing only required application access",
            "Opening every database port publicly",
            "Disabling authentication",
            "Allowing all internet traffic",
          ],
          answer:
            "Keeping it private and allowing only required application access",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Data Protection & Encryption",
    icon: "🔒",
    lesson: {
      explanation:
        "Cloud data protection includes controlling access to data, encrypting sensitive information, managing encryption keys, and protecting data during storage and transmission. Encryption can reduce the risk of exposing readable data to unauthorized parties.",
      points: [
        "Encryption can protect data at rest.",
        "Encryption can protect data in transit.",
        "TLS is commonly used to protect network communication.",
        "Encryption keys need appropriate protection and management.",
        "Sensitive data should have appropriate access controls.",
      ],
      example:
        "An application can use HTTPS for communication and encryption for stored database information so that sensitive data is protected both while moving and while stored.",
      commonMistakes: [
        "Sending sensitive information over unencrypted connections.",
        "Storing encryption keys directly in source code.",
        "Assuming encryption removes the need for access controls.",
      ],
      quiz: [
        {
          question: "What does encryption do?",
          options: [
            "Transforms data to help protect it from unauthorized access",
            "Deletes all data",
            "Creates a database automatically",
            "Removes authentication",
          ],
          answer:
            "Transforms data to help protect it from unauthorized access",
        },
        {
          question: "What is data at rest?",
          options: [
            "Data stored on a system or storage service",
            "Data moving across a network",
            "Only deleted data",
            "Only application source code",
          ],
          answer:
            "Data stored on a system or storage service",
        },
        {
          question: "What is commonly used to protect web traffic?",
          options: [
            "TLS",
            "FTP without encryption",
            "Plain text",
            "HTTP without encryption",
          ],
          answer: "TLS",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Logging, Monitoring & Threat Detection",
    icon: "📊",
    lesson: {
      explanation:
        "Security logging and monitoring help organizations detect suspicious activity, investigate incidents, and understand what is happening in their cloud environments. Logs can record authentication events, API activity, network events, and resource changes.",
      points: [
        "Logs provide evidence of activities performed in an environment.",
        "Monitoring can help identify unusual behavior.",
        "Security alerts can notify teams about suspicious activity.",
        "Logs should be protected from unauthorized modification.",
        "Centralized logging can simplify investigation across multiple services.",
      ],
      example:
        "If an unexpected login occurs from an unusual location, security monitoring can generate an alert so the organization can investigate the event.",
      commonMistakes: [
        "Disabling important security logs to reduce storage costs.",
        "Ignoring security alerts.",
        "Keeping logs where attackers can easily modify or delete them.",
      ],
      quiz: [
        {
          question: "Why are security logs important?",
          options: [
            "They provide evidence of activities and events",
            "They replace authentication",
            "They automatically fix every vulnerability",
            "They eliminate the need for backups",
          ],
          answer:
            "They provide evidence of activities and events",
        },
        {
          question: "What can security monitoring help detect?",
          options: [
            "Suspicious or unusual activity",
            "Only application colors",
            "Only Git branches",
            "Only database schemas",
          ],
          answer:
            "Suspicious or unusual activity",
        },
        {
          question: "Why should logs be protected?",
          options: [
            "Attackers should not be able to easily modify or delete evidence",
            "Logs are unnecessary",
            "Logs automatically encrypt themselves",
            "Logs replace firewalls",
          ],
          answer:
            "Attackers should not be able to easily modify or delete evidence",
        },
      ],
    },
  },

  {
    id: 7,
    title: "Cloud Security Best Practices",
    icon: "🛡️",
    lesson: {
      explanation:
        "Effective cloud security combines identity controls, network protection, encryption, monitoring, secure configuration, vulnerability management, and regular review. Security should be treated as an ongoing process rather than a one-time configuration task.",
      points: [
        "Use least privilege for identities and services.",
        "Enable multi-factor authentication where appropriate.",
        "Keep cloud resources and software properly updated.",
        "Monitor security events and review alerts.",
        "Regularly review cloud configurations and permissions.",
        "Protect secrets using dedicated secret-management mechanisms.",
      ],
      example:
        "A DevOps team can include security checks in its CI/CD pipeline, regularly review IAM permissions, monitor cloud logs, scan images for vulnerabilities, and maintain secure network configurations.",
      commonMistakes: [
        "Treating security as a one-time setup.",
        "Ignoring unused accounts and permissions.",
        "Keeping secrets inside source code or container images.",
      ],
      quiz: [
        {
          question: "Which principle limits unnecessary permissions?",
          options: [
            "Least privilege",
            "Maximum access",
            "Public access",
            "Anonymous access",
          ],
          answer: "Least privilege",
        },
        {
          question: "Why should cloud permissions be reviewed regularly?",
          options: [
            "To remove unnecessary or outdated access",
            "To disable all users",
            "To remove encryption",
            "To make every resource public",
          ],
          answer:
            "To remove unnecessary or outdated access",
        },
        {
          question: "How should application secrets generally be handled?",
          options: [
            "Use appropriate secret-management mechanisms",
            "Put them in public source code",
            "Store them in README files",
            "Put them directly in Docker image layers",
          ],
          answer:
            "Use appropriate secret-management mechanisms",
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
// CLOUD SECURITY COMPONENT
// =====================================================

const CloudSecurity = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] =
    useState(null);

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-cloud-security", subtopics);

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
            ← Back to Cloud Security
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
            🔐 Cloud Security
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
            Learn cloud security
            fundamentals, shared
            responsibility, IAM,
            network security, data
            protection, monitoring,
            and security best
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
          📚 Cloud Security Lessons
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
                    Cloud security
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

export default CloudSecurity;