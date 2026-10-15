import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// CLOUD DEPLOYMENT & ARCHITECTURE — 8 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Cloud Architecture Fundamentals",
    icon: "🏗️",
    lesson: {
      explanation:
        "Cloud architecture describes how cloud resources, applications, networks, storage, databases, and supporting services are organized to deliver an application. A good architecture considers reliability, scalability, security, performance, and cost.",
      points: [
        "Cloud architecture defines how application components work together.",
        "Applications can use compute, storage, networking, databases, and managed services.",
        "Architectures should consider reliability and availability.",
        "Security should be designed into the architecture.",
        "Cost and performance are important architectural considerations.",
      ],
      example:
        "A web application can use a load balancer to distribute requests across application servers, while a managed database stores application data and object storage handles files.",
      commonMistakes: [
        "Designing architecture without considering failure scenarios.",
        "Using unnecessary services simply because they are available.",
        "Ignoring security and cost during architecture design.",
      ],
      quiz: [
        {
          question: "What does cloud architecture describe?",
          options: [
            "How cloud components are organized and work together",
            "Only the application's user interface",
            "Only source code formatting",
            "Only database queries",
          ],
          answer:
            "How cloud components are organized and work together",
        },
        {
          question: "Which is an important architectural consideration?",
          options: [
            "Reliability",
            "Only screen size",
            "Only keyboard layout",
            "Only code indentation",
          ],
          answer: "Reliability",
        },
        {
          question: "What should be considered during architecture design?",
          options: [
            "Security, performance, reliability, and cost",
            "Only application colors",
            "Only source code length",
            "Only developer preferences",
          ],
          answer:
            "Security, performance, reliability, and cost",
        },
      ],
    },
  },

  {
    id: 2,
    title: "High Availability & Fault Tolerance",
    icon: "🛡️",
    lesson: {
      explanation:
        "High availability aims to keep applications accessible even when individual components fail. Fault-tolerant architectures reduce the impact of failures by using redundancy, multiple availability zones, health checks, and automated recovery mechanisms.",
      points: [
        "High availability reduces service downtime.",
        "Redundancy can prevent a single component from becoming a single point of failure.",
        "Multiple availability zones can improve resilience.",
        "Health checks can detect unhealthy resources.",
        "Automated recovery can restore failed components.",
      ],
      example:
        "An application can run servers across multiple availability zones behind a load balancer. If one server or zone becomes unavailable, traffic can be directed to healthy resources.",
      commonMistakes: [
        "Running a critical application on a single server.",
        "Assuming redundancy automatically guarantees availability.",
        "Not testing recovery procedures.",
      ],
      quiz: [
        {
          question: "What is a goal of high availability?",
          options: [
            "Keep services accessible despite individual failures",
            "Reduce all application features",
            "Remove backups",
            "Use only one server",
          ],
          answer:
            "Keep services accessible despite individual failures",
        },
        {
          question: "Why is redundancy useful?",
          options: [
            "It reduces dependence on a single component",
            "It removes monitoring",
            "It disables scaling",
            "It eliminates networking",
          ],
          answer:
            "It reduces dependence on a single component",
        },
        {
          question: "What can health checks identify?",
          options: [
            "Unhealthy resources",
            "Developer salaries",
            "Source code style",
            "Git usernames",
          ],
          answer: "Unhealthy resources",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Load Balancing & Traffic Distribution",
    icon: "⚖️",
    lesson: {
      explanation:
        "Load balancing distributes incoming network requests across multiple servers or application instances. It can improve availability, scalability, and resource utilization while preventing a single server from handling all traffic.",
      points: [
        "Load balancers distribute incoming requests.",
        "Traffic can be sent to healthy backend instances.",
        "Load balancing supports horizontal scaling.",
        "Health checks can prevent traffic from reaching unhealthy instances.",
        "Different load-balancing strategies can be used depending on requirements.",
      ],
      example:
        "If three application servers are running behind a load balancer, incoming requests can be distributed among them. When one server becomes unhealthy, the load balancer can stop sending traffic to it.",
      commonMistakes: [
        "Sending traffic to unhealthy instances.",
        "Using a load balancer without configuring health checks.",
        "Assuming load balancing alone solves every performance problem.",
      ],
      quiz: [
        {
          question: "What is the main purpose of a load balancer?",
          options: [
            "Distribute incoming traffic across backend resources",
            "Store application source code",
            "Encrypt every database",
            "Replace monitoring",
          ],
          answer:
            "Distribute incoming traffic across backend resources",
        },
        {
          question: "Why are health checks useful with load balancers?",
          options: [
            "They help identify resources that should not receive traffic",
            "They create source code",
            "They remove authentication",
            "They disable scaling",
          ],
          answer:
            "They help identify resources that should not receive traffic",
        },
        {
          question: "What type of scaling commonly works with load balancing?",
          options: [
            "Horizontal scaling",
            "Manual screen scaling",
            "Source code scaling",
            "Keyboard scaling",
          ],
          answer: "Horizontal scaling",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Auto Scaling & Elasticity",
    icon: "📈",
    lesson: {
      explanation:
        "Auto scaling automatically adjusts the number or capacity of resources based on workload requirements. Elasticity allows cloud systems to increase capacity during demand and reduce capacity when demand decreases.",
      points: [
        "Auto scaling can add resources when demand increases.",
        "Resources can be reduced when demand decreases.",
        "Scaling policies can use metrics or scheduled conditions.",
        "Horizontal scaling adds more instances.",
        "Vertical scaling increases the capacity of an existing instance.",
      ],
      example:
        "An online store may automatically add application instances during a large sale and reduce the number of instances after traffic returns to normal.",
      commonMistakes: [
        "Choosing thresholds without understanding normal workload patterns.",
        "Scaling application servers without considering databases or other dependencies.",
        "Ignoring the cost impact of excessive scaling.",
      ],
      quiz: [
        {
          question: "What does auto scaling do?",
          options: [
            "Automatically adjusts resources based on defined conditions",
            "Deletes every cloud resource",
            "Disables monitoring",
            "Only changes application colors",
          ],
          answer:
            "Automatically adjusts resources based on defined conditions",
        },
        {
          question: "What is horizontal scaling?",
          options: [
            "Adding more instances or resources",
            "Increasing the CPU of one existing server",
            "Deleting instances",
            "Changing a database password",
          ],
          answer:
            "Adding more instances or resources",
        },
        {
          question: "What is elasticity?",
          options: [
            "The ability to adjust capacity according to demand",
            "A type of database",
            "A source control strategy",
            "A network protocol",
          ],
          answer:
            "The ability to adjust capacity according to demand",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Microservices & Distributed Architecture",
    icon: "🧩",
    lesson: {
      explanation:
        "Microservices architecture divides an application into smaller services that can be developed, deployed, and scaled independently. Distributed architectures can provide flexibility and scalability but also introduce additional networking and operational complexity.",
      points: [
        "Microservices divide applications into smaller services.",
        "Services can often be deployed independently.",
        "Different services may scale independently.",
        "Service communication requires reliable networking.",
        "Distributed systems require strong monitoring and observability.",
      ],
      example:
        "An online shopping platform may separate user management, product catalog, orders, and payments into different services that communicate through APIs.",
      commonMistakes: [
        "Splitting a simple application into too many services.",
        "Ignoring communication failures between services.",
        "Using microservices without appropriate monitoring.",
      ],
      quiz: [
        {
          question: "What is a characteristic of microservices?",
          options: [
            "An application is divided into smaller services",
            "Everything must run on one server",
            "There are no APIs",
            "All components must be deployed together",
          ],
          answer:
            "An application is divided into smaller services",
        },
        {
          question: "What is one benefit of microservices?",
          options: [
            "Services can often be deployed and scaled independently",
            "They eliminate networking",
            "They remove monitoring requirements",
            "They eliminate databases",
          ],
          answer:
            "Services can often be deployed and scaled independently",
        },
        {
          question: "What does a distributed architecture require?",
          options: [
            "Reliable communication and observability",
            "No monitoring",
            "Only one network connection",
            "No failure handling",
          ],
          answer:
            "Reliable communication and observability",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Serverless & Managed Services",
    icon: "☁️",
    lesson: {
      explanation:
        "Serverless and managed cloud services allow teams to use computing, databases, messaging, storage, and other capabilities without managing all of the underlying infrastructure themselves. The provider handles many operational tasks while the customer focuses on application functionality and configuration.",
      points: [
        "Serverless services can execute application code without managing traditional servers.",
        "Managed services reduce infrastructure administration.",
        "Cloud providers handle different operational responsibilities depending on the service.",
        "Serverless architectures can automatically scale according to supported service behavior.",
        "Managed services can simplify application architecture.",
      ],
      example:
        "An application can use a serverless function to process an uploaded file and a managed database to store application information without directly managing database servers.",
      commonMistakes: [
        "Assuming serverless means there are no servers.",
        "Ignoring service limits and pricing models.",
        "Giving managed services unnecessary permissions.",
      ],
      quiz: [
        {
          question: "What is a benefit of managed cloud services?",
          options: [
            "They reduce the amount of underlying infrastructure management",
            "They eliminate all application code",
            "They remove security responsibilities completely",
            "They require physical server ownership",
          ],
          answer:
            "They reduce the amount of underlying infrastructure management",
        },
        {
          question: "Does serverless mean that servers do not exist?",
          options: [
            "No, the provider manages the underlying infrastructure",
            "Yes, no servers exist anywhere",
            "Only databases have servers",
            "Only developers manage physical servers",
          ],
          answer:
            "No, the provider manages the underlying infrastructure",
        },
        {
          question: "What should be considered when using managed services?",
          options: [
            "Service limits, permissions, and pricing",
            "Only the service logo",
            "Only screen resolution",
            "Only source code formatting",
          ],
          answer:
            "Service limits, permissions, and pricing",
        },
      ],
    },
  },

  {
    id: 7,
    title: "Cloud Deployment Strategies",
    icon: "🚀",
    lesson: {
      explanation:
        "Deployment strategies define how new application versions are released to users. Common approaches include rolling, blue-green, and canary deployments. The appropriate strategy depends on application requirements, risk tolerance, infrastructure, and operational capabilities.",
      points: [
        "Rolling deployments gradually replace old application instances.",
        "Blue-green deployments maintain separate environments for old and new versions.",
        "Canary deployments release a new version to a limited portion of users or traffic.",
        "Deployment strategies can reduce release risk.",
        "Automated testing and monitoring are important during deployments.",
      ],
      example:
        "With a canary deployment, a new application version may initially receive a small percentage of traffic. If monitoring shows healthy behavior, the deployment can gradually expand.",
      commonMistakes: [
        "Deploying without health checks or monitoring.",
        "Changing production systems without a rollback plan.",
        "Increasing deployment traffic before validating the new version.",
      ],
      quiz: [
        {
          question: "What does a rolling deployment do?",
          options: [
            "Gradually replaces old instances with new ones",
            "Deletes the entire application immediately",
            "Only changes database passwords",
            "Disables monitoring",
          ],
          answer:
            "Gradually replaces old instances with new ones",
        },
        {
          question: "What is a canary deployment?",
          options: [
            "Releasing a new version to a limited amount of traffic first",
            "Deploying only to developers' laptops",
            "Deleting the old version before testing",
            "Disabling load balancing",
          ],
          answer:
            "Releasing a new version to a limited amount of traffic first",
        },
        {
          question: "Why is monitoring important during deployment?",
          options: [
            "It helps detect problems with the new version",
            "It replaces testing completely",
            "It removes the need for rollback",
            "It disables traffic",
          ],
          answer:
            "It helps detect problems with the new version",
        },
      ],
    },
  },

  {
    id: 8,
    title: "Cloud Architecture Best Practices",
    icon: "🏆",
    lesson: {
      explanation:
        "Effective cloud architecture balances reliability, security, performance, scalability, operational excellence, and cost. Architecture should be reviewed continuously because application requirements, traffic patterns, technologies, and business needs change over time.",
      points: [
        "Design for failure instead of assuming every component will always work.",
        "Use automation for repeatable deployments and infrastructure changes.",
        "Apply least privilege to cloud resources and services.",
        "Use monitoring and logging to understand system behavior.",
        "Choose services according to actual application requirements.",
        "Plan for backup, recovery, scaling, and cost management.",
      ],
      example:
        "A production architecture can combine multiple availability zones, load balancing, auto scaling, managed databases, infrastructure as code, centralized monitoring, and automated deployment pipelines.",
      commonMistakes: [
        "Optimizing only for performance while ignoring cost and security.",
        "Creating architecture that is unnecessarily complicated.",
        "Failing to document and review architectural decisions.",
      ],
      quiz: [
        {
          question: "What should a good cloud architecture balance?",
          options: [
            "Reliability, security, performance, scalability, and cost",
            "Only performance",
            "Only application size",
            "Only development speed",
          ],
          answer:
            "Reliability, security, performance, scalability, and cost",
        },
        {
          question: "Why should cloud architectures be reviewed regularly?",
          options: [
            "Application requirements and environments change",
            "Cloud architecture never changes",
            "Monitoring is unnecessary",
            "Cloud services cannot evolve",
          ],
          answer:
            "Application requirements and environments change",
        },
        {
          question: "What is an important operational practice?",
          options: [
            "Plan for backup, recovery, scaling, and cost management",
            "Avoid all monitoring",
            "Use maximum permissions everywhere",
            "Deploy without testing",
          ],
          answer:
            "Plan for backup, recovery, scaling, and cost management",
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
// CLOUD DEPLOYMENT & ARCHITECTURE COMPONENT
// =====================================================

const CloudDeploymentArchitecture = ({
  goBack,
}) => {
  const [selectedTopic, setSelectedTopic] =
    useState(null);

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-cloud-deployment-architecture", subtopics);

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
            ← Back to Cloud Deployment
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
            🏗️ Cloud Deployment & Architecture
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
            Learn cloud architecture,
            high availability,
            load balancing,
            auto scaling,
            distributed systems,
            serverless services,
            deployment strategies,
            and cloud architecture
            best practices.
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
          📚 Cloud Deployment & Architecture Lessons
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
                    Cloud deployment
                    and architecture
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

export default CloudDeploymentArchitecture;