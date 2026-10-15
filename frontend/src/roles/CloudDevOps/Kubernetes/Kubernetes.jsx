import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// KUBERNETES — 8 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Kubernetes Fundamentals",
    icon: "⚙️",
    lesson: {
      explanation:
        "Kubernetes is an open-source platform for deploying, scaling, and managing containerized applications. It automates many tasks involved in running containers across a cluster of machines.",
      points: [
        "Kubernetes is commonly used for container orchestration.",
        "A Kubernetes cluster consists of a control plane and worker nodes.",
        "Kubernetes manages the desired state of applications.",
        "It can automatically restart failed containers.",
        "Kubernetes can scale applications based on configured requirements.",
      ],
      example:
        "A web application running in containers can be deployed to a Kubernetes cluster so Kubernetes can maintain the required number of application instances.",
      commonMistakes: [
        "Thinking Kubernetes is itself a container runtime.",
        "Confusing Kubernetes with Docker.",
        "Assuming Kubernetes automatically solves every application problem.",
      ],
      quiz: [
        {
          question: "What is Kubernetes mainly used for?",
          options: [
            "Container orchestration",
            "Writing CSS",
            "Creating databases only",
            "Editing images",
          ],
          answer: "Container orchestration",
        },
        {
          question: "What does Kubernetes manage?",
          options: [
            "Containerized workloads and services",
            "Only source code",
            "Only Git repositories",
            "Only database tables",
          ],
          answer: "Containerized workloads and services",
        },
        {
          question: "What can Kubernetes do when an application instance fails?",
          options: [
            "Automatically restart or replace it",
            "Delete the entire cluster",
            "Rewrite the application",
            "Remove the source repository",
          ],
          answer: "Automatically restart or replace it",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Kubernetes Architecture",
    icon: "🏗️",
    lesson: {
      explanation:
        "A Kubernetes cluster contains a control plane that manages the cluster and worker nodes that run application workloads. The control plane includes components responsible for API access, scheduling, and maintaining cluster state.",
      points: [
        "The control plane manages the Kubernetes cluster.",
        "Worker nodes run application workloads.",
        "The Kubernetes API server provides the main interface to the cluster.",
        "The scheduler decides where new Pods should run.",
        "The controller manager helps maintain the desired state.",
      ],
      example:
        "When a deployment requests three application replicas, Kubernetes schedules the required Pods onto suitable worker nodes.",
      commonMistakes: [
        "Thinking worker nodes are responsible for making cluster-wide scheduling decisions.",
        "Confusing the API server with the scheduler.",
        "Assuming every Kubernetes component runs inside an application container.",
      ],
      quiz: [
        {
          question: "What is the main role of the control plane?",
          options: [
            "Manage the Kubernetes cluster",
            "Only store application images",
            "Only serve web pages",
            "Replace all worker nodes",
          ],
          answer: "Manage the Kubernetes cluster",
        },
        {
          question: "Where do application workloads normally run?",
          options: [
            "Worker nodes",
            "Only the API server",
            "Only the scheduler",
            "Only the registry",
          ],
          answer: "Worker nodes",
        },
        {
          question: "Which component provides the main API interface to Kubernetes?",
          options: [
            "API server",
            "Scheduler",
            "Kubelet",
            "Container registry",
          ],
          answer: "API server",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Pods & Containers",
    icon: "📦",
    lesson: {
      explanation:
        "A Pod is the smallest deployable unit in Kubernetes. A Pod can contain one or more containers that share networking and storage resources and are scheduled together on a node.",
      points: [
        "Pods are the basic execution units in Kubernetes.",
        "A Pod can contain one or more containers.",
        "Containers in the same Pod share a network namespace.",
        "Pods are designed to be replaceable.",
        "Kubernetes normally manages Pods through higher-level workload resources.",
      ],
      example:
        "A simple web application might run inside a Pod containing one application container. Kubernetes can create replacement Pods when required.",
      commonMistakes: [
        "Thinking a Pod is exactly the same as a Docker container.",
        "Manually treating Pods as permanent servers.",
        "Putting unrelated applications into the same Pod.",
      ],
      quiz: [
        {
          question: "What is the smallest deployable unit in Kubernetes?",
          options: [
            "Pod",
            "Cluster",
            "Node",
            "Registry",
          ],
          answer: "Pod",
        },
        {
          question: "Can a Pod contain multiple containers?",
          options: [
            "Yes",
            "No, never",
            "Only on Windows",
            "Only without networking",
          ],
          answer: "Yes",
        },
        {
          question: "What happens when a Pod is replaced?",
          options: [
            "A new Pod can be created to provide the required workload",
            "The entire cluster must be deleted",
            "The Docker image is permanently destroyed",
            "The source code is automatically rewritten",
          ],
          answer:
            "A new Pod can be created to provide the required workload",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Deployments & ReplicaSets",
    icon: "🔄",
    lesson: {
      explanation:
        "Deployments provide a higher-level way to manage replicated applications in Kubernetes. They work with ReplicaSets to maintain the desired number of Pods and support controlled application updates.",
      points: [
        "A Deployment describes the desired state of an application.",
        "ReplicaSets maintain a specified number of Pod replicas.",
        "Deployments can perform rolling updates.",
        "Deployments can support rollback to an earlier version.",
        "Kubernetes continuously works toward the desired state.",
      ],
      example:
        "A Deployment can specify that five replicas of a web application should always be available. If one Pod fails, Kubernetes can create another.",
      commonMistakes: [
        "Creating individual Pods manually for applications that need replication.",
        "Confusing a Deployment with a container image.",
        "Changing production deployments without understanding the update strategy.",
      ],
      quiz: [
        {
          question: "What does a ReplicaSet help maintain?",
          options: [
            "A desired number of Pod replicas",
            "A Git branch",
            "A Dockerfile",
            "A database schema",
          ],
          answer: "A desired number of Pod replicas",
        },
        {
          question: "What Kubernetes resource commonly manages ReplicaSets?",
          options: [
            "Deployment",
            "Service",
            "ConfigMap",
            "Namespace",
          ],
          answer: "Deployment",
        },
        {
          question: "What is a rolling update used for?",
          options: [
            "Gradually updating application instances",
            "Deleting all nodes immediately",
            "Creating database tables",
            "Building a Docker image",
          ],
          answer: "Gradually updating application instances",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Services & Networking",
    icon: "🌐",
    lesson: {
      explanation:
        "Kubernetes Services provide a stable way to access a group of Pods. Since Pods can be created and replaced, their individual IP addresses may change, so Services provide a stable networking abstraction.",
      points: [
        "Services provide stable access to application Pods.",
        "A Service can select Pods using labels.",
        "ClusterIP is commonly used for internal cluster communication.",
        "NodePort can expose a service through a node port.",
        "LoadBalancer can integrate with supported cloud load-balancing services.",
      ],
      example:
        "A frontend application can communicate with a backend Service instead of directly depending on the changing IP addresses of backend Pods.",
      commonMistakes: [
        "Connecting directly to individual Pod IP addresses for long-term communication.",
        "Confusing a Service with a Deployment.",
        "Exposing internal services publicly without a reason.",
      ],
      quiz: [
        {
          question: "Why are Kubernetes Services useful?",
          options: [
            "They provide stable access to Pods",
            "They build Docker images",
            "They replace the control plane",
            "They compile applications",
          ],
          answer: "They provide stable access to Pods",
        },
        {
          question: "How can a Service identify its target Pods?",
          options: [
            "Labels and selectors",
            "File names",
            "Git commits only",
            "Dockerfile comments",
          ],
          answer: "Labels and selectors",
        },
        {
          question: "Which Service type is commonly used for internal cluster access?",
          options: [
            "ClusterIP",
            "ExternalDisk",
            "InternalPort",
            "PrivateNode",
          ],
          answer: "ClusterIP",
        },
      ],
    },
  },

  {
    id: 6,
    title: "ConfigMaps & Secrets",
    icon: "🔐",
    lesson: {
      explanation:
        "ConfigMaps and Secrets allow Kubernetes applications to receive configuration separately from container images. ConfigMaps are intended for non-sensitive configuration, while Secrets are designed for sensitive values.",
      points: [
        "ConfigMaps store non-sensitive configuration data.",
        "Secrets are intended for sensitive configuration values.",
        "Configuration can be injected into Pods as environment variables or mounted files.",
        "Separating configuration from images improves deployment flexibility.",
        "Secrets still require appropriate security practices and access controls.",
      ],
      example:
        "An application can receive its database host from a ConfigMap and a database password from a Secret instead of hard-coding them into the container image.",
      commonMistakes: [
        "Putting passwords directly into application source code.",
        "Treating Kubernetes Secrets as automatically secure in every environment.",
        "Storing sensitive information in a ConfigMap.",
      ],
      quiz: [
        {
          question: "What is a ConfigMap generally used for?",
          options: [
            "Non-sensitive configuration",
            "Container images",
            "Physical storage",
            "Git repositories",
          ],
          answer: "Non-sensitive configuration",
        },
        {
          question: "What is a Kubernetes Secret intended for?",
          options: [
            "Sensitive configuration values",
            "CSS files",
            "Docker images",
            "Pod scheduling",
          ],
          answer: "Sensitive configuration values",
        },
        {
          question: "Why separate configuration from container images?",
          options: [
            "The same image can be configured differently across environments",
            "It removes the need for containers",
            "It prevents all networking",
            "It automatically creates databases",
          ],
          answer:
            "The same image can be configured differently across environments",
        },
      ],
    },
  },

  {
    id: 7,
    title: "Storage & Persistent Volumes",
    icon: "💾",
    lesson: {
      explanation:
        "Kubernetes provides storage abstractions for applications that need data to survive beyond individual Pod lifecycles. PersistentVolumes and PersistentVolumeClaims help separate storage provisioning from application usage.",
      points: [
        "Pods can be temporary and replaceable.",
        "Persistent storage is required by many stateful applications.",
        "PersistentVolume represents storage available to a cluster.",
        "PersistentVolumeClaim is a request for storage by an application.",
        "StorageClasses can support dynamic storage provisioning.",
      ],
      example:
        "A database application can use a PersistentVolumeClaim to request storage without needing the application configuration to know the details of the underlying storage system.",
      commonMistakes: [
        "Assuming Pod storage is automatically permanent.",
        "Deleting persistent storage without checking its data.",
        "Confusing PersistentVolumes with container images.",
      ],
      quiz: [
        {
          question: "What is a PersistentVolume used for?",
          options: [
            "Providing persistent storage to workloads",
            "Creating Pods",
            "Scheduling containers",
            "Building Docker images",
          ],
          answer: "Providing persistent storage to workloads",
        },
        {
          question: "What does a PersistentVolumeClaim represent?",
          options: [
            "A request for storage",
            "A request for a new Pod",
            "A Docker image",
            "A network address",
          ],
          answer: "A request for storage",
        },
        {
          question: "Which type of application commonly requires persistent storage?",
          options: [
            "Database",
            "Temporary calculator",
            "Static icon",
            "CSS animation",
          ],
          answer: "Database",
        },
      ],
    },
  },

  {
    id: 8,
    title: "Kubernetes Scaling & Rolling Updates",
    icon: "📈",
    lesson: {
      explanation:
        "Kubernetes supports application scaling and controlled updates. Workloads can be scaled to different numbers of replicas, while Deployments can gradually replace old application versions with new ones.",
      points: [
        "Applications can be scaled by changing the desired number of replicas.",
        "Horizontal scaling adds or removes application instances.",
        "Deployments can perform rolling updates.",
        "Rollback can be used when an update needs to be reversed.",
        "Autoscaling can adjust workloads based on configured metrics.",
      ],
      example:
        "If a web application needs more capacity, its Deployment can be configured to run additional replicas. During an update, Kubernetes can gradually replace the old Pods.",
      commonMistakes: [
        "Scaling without considering application and database capacity.",
        "Changing replica counts without understanding resource requirements.",
        "Assuming autoscaling works correctly without configuring appropriate metrics and resource requests.",
      ],
      quiz: [
        {
          question: "What does horizontal scaling generally mean?",
          options: [
            "Adding or removing application instances",
            "Increasing the size of one source file",
            "Changing a database column",
            "Increasing monitor resolution",
          ],
          answer: "Adding or removing application instances",
        },
        {
          question: "What does a rolling update do?",
          options: [
            "Gradually replaces old application instances with new ones",
            "Deletes every Pod immediately",
            "Creates a new Git repository",
            "Removes all configuration",
          ],
          answer:
            "Gradually replaces old application instances with new ones",
        },
        {
          question: "What can a rollback do?",
          options: [
            "Return a deployment to an earlier version",
            "Delete every container image",
            "Remove the Kubernetes cluster",
            "Convert Pods into virtual machines",
          ],
          answer:
            "Return a deployment to an earlier version",
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
// KUBERNETES COMPONENT
// =====================================================

const Kubernetes = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] =
    useState(null);

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-kubernetes", subtopics);

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
            ← Back to Kubernetes
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
            ⚙️ Kubernetes
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
            Learn Kubernetes
            fundamentals,
            architecture, Pods,
            Deployments,
            Services, storage,
            configuration,
            scaling, and
            rolling updates.
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
          📚 Kubernetes Lessons
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
                    Kubernetes
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

export default Kubernetes;