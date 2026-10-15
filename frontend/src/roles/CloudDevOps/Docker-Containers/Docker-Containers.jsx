import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// DOCKER & CONTAINERS — 8 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Containers & Docker Fundamentals",
    icon: "🐳",
    lesson: {
      explanation:
        "Containers package an application together with the dependencies it needs to run. Docker is a platform that makes it easier to build, run, and manage containers.",
      points: [
        "Containers provide isolated environments for applications.",
        "Docker is a popular containerization platform.",
        "Containers share the host operating system kernel.",
        "Containers are generally lighter than full virtual machines.",
        "Containerization helps create consistent application environments.",
      ],
      example:
        "A developer can package a Python application and its dependencies into a Docker container so it can run consistently on different machines.",
      commonMistakes: [
        "Thinking a container is exactly the same as a virtual machine.",
        "Thinking Docker automatically makes an application secure.",
        "Assuming a container always contains a complete operating system.",
      ],
      quiz: [
        {
          question: "What is the main purpose of a container?",
          options: [
            "Package an application with its dependencies",
            "Replace a monitor",
            "Create a database automatically",
            "Compile hardware",
          ],
          answer:
            "Package an application with its dependencies",
        },
        {
          question: "What is Docker?",
          options: [
            "A containerization platform",
            "A programming language",
            "A database engine",
            "A web browser",
          ],
          answer: "A containerization platform",
        },
        {
          question:
            "What do containers generally share with the host?",
          options: [
            "The host operating system kernel",
            "The host monitor",
            "The host keyboard",
            "The host browser history",
          ],
          answer:
            "The host operating system kernel",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Docker Images",
    icon: "🖼️",
    lesson: {
      explanation:
        "A Docker image is a read-only template used to create containers. Images contain application code, dependencies, libraries, and configuration needed to run an application.",
      points: [
        "Images are used as templates for containers.",
        "Docker images are built in layers.",
        "Images can be stored in container registries.",
        "Docker Hub is a commonly used public image registry.",
        "Images can be created using Dockerfiles.",
      ],
      example:
        "A Node.js application can use a Node.js base image and add the application's source code and dependencies on top of it.",
      commonMistakes: [
        "Confusing an image with a running container.",
        "Thinking changing a running container automatically changes the original image.",
        "Using untrusted images without checking their source.",
      ],
      quiz: [
        {
          question: "What is a Docker image?",
          options: [
            "A template used to create containers",
            "A running process only",
            "A physical server",
            "A network cable",
          ],
          answer:
            "A template used to create containers",
        },
        {
          question: "Docker images are commonly built using what?",
          options: [
            "Dockerfiles",
            "HTML files",
            "CSS files",
            "SQL tables",
          ],
          answer: "Dockerfiles",
        },
        {
          question:
            "Where can Docker images be stored and shared?",
          options: [
            "Container registries",
            "Only RAM",
            "Only BIOS",
            "Only local browsers",
          ],
          answer: "Container registries",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Dockerfiles",
    icon: "📄",
    lesson: {
      explanation:
        "A Dockerfile is a text file containing instructions used to build a Docker image. It defines the base image, application files, dependencies, commands, and other configuration required by the image.",
      points: [
        "Dockerfiles contain instructions for building images.",
        "FROM specifies a base image.",
        "WORKDIR sets the working directory.",
        "COPY can copy files into the image.",
        "CMD defines a default command for a container.",
      ],
      example:
        "A Dockerfile for a Python application can start from a Python base image, copy the application code, install dependencies, and define the command used to start the application.",
      commonMistakes: [
        "Using unnecessary files in the Docker build context.",
        "Putting secrets directly inside a Dockerfile.",
        "Confusing CMD with a shell command typed directly on the host.",
      ],
      quiz: [
        {
          question: "What is a Dockerfile?",
          options: [
            "A file containing image build instructions",
            "A database backup",
            "A running container",
            "A network configuration only",
          ],
          answer:
            "A file containing image build instructions",
        },
        {
          question: "Which Dockerfile instruction specifies a base image?",
          options: [
            "FROM",
            "START",
            "BASE",
            "IMAGE",
          ],
          answer: "FROM",
        },
        {
          question: "Which instruction can copy application files into an image?",
          options: [
            "COPY",
            "MOVE",
            "TRANSFER",
            "IMPORT",
          ],
          answer: "COPY",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Docker Containers & Commands",
    icon: "⌨️",
    lesson: {
      explanation:
        "Docker provides command-line commands for creating, running, stopping, inspecting, and removing containers. Understanding these commands is essential for everyday container management.",
      points: [
        "docker run creates and starts a container.",
        "docker ps lists running containers.",
        "docker stop stops a running container.",
        "docker start starts an existing stopped container.",
        "docker rm removes a container.",
      ],
      example:
        "After building an image named myapp, you can run it as a container using a Docker command such as docker run myapp.",
      commonMistakes: [
        "Confusing docker stop with docker rm.",
        "Assuming docker ps displays every stopped container by default.",
        "Deleting containers without understanding whether important data is stored inside them.",
      ],
      quiz: [
        {
          question: "Which command starts a new container from an image?",
          options: [
            "docker run",
            "docker delete",
            "docker image",
            "docker build-only",
          ],
          answer: "docker run",
        },
        {
          question: "Which command lists running containers?",
          options: [
            "docker ps",
            "docker list-files",
            "docker show",
            "docker containers-only",
          ],
          answer: "docker ps",
        },
        {
          question: "Which command stops a running container?",
          options: [
            "docker stop",
            "docker pause-all",
            "docker kill-image",
            "docker close",
          ],
          answer: "docker stop",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Docker Networking",
    icon: "🌐",
    lesson: {
      explanation:
        "Docker networking allows containers to communicate with each other, the host, and external networks. Docker provides different network drivers and mechanisms for connecting containers.",
      points: [
        "Containers can communicate through Docker networks.",
        "The default bridge network is commonly used for containers on a host.",
        "User-defined bridge networks can provide better container-to-container communication.",
        "Ports can be published from containers to the host.",
        "Container networking is important when applications are split into multiple services.",
      ],
      example:
        "A web application container can communicate with a database container through a shared Docker network.",
      commonMistakes: [
        "Assuming every container automatically has the same network configuration.",
        "Confusing container ports with host ports.",
        "Publishing database ports unnecessarily.",
      ],
      quiz: [
        {
          question: "What allows Docker containers to communicate with each other?",
          options: [
            "Docker networks",
            "Docker images only",
            "Dockerfiles only",
            "Git branches",
          ],
          answer: "Docker networks",
        },
        {
          question: "What does port publishing allow?",
          options: [
            "A container port to be made accessible through the host",
            "An image to become a database",
            "A Dockerfile to become a server",
            "A container to become a virtual machine",
          ],
          answer:
            "A container port to be made accessible through the host",
        },
        {
          question:
            "Why might multiple application containers share a Docker network?",
          options: [
            "To communicate with each other",
            "To remove all dependencies",
            "To replace source code",
            "To disable networking",
          ],
          answer:
            "To communicate with each other",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Docker Volumes & Persistent Data",
    icon: "💾",
    lesson: {
      explanation:
        "Containers are often treated as disposable environments, so application data that must survive container removal should be stored using persistent storage mechanisms such as Docker volumes.",
      points: [
        "Container filesystems are not ideal for important persistent data.",
        "Docker volumes provide persistent storage managed by Docker.",
        "Volumes can be attached to containers.",
        "Volumes are useful for databases and application data.",
        "Persistent storage separates important data from the container lifecycle.",
      ],
      example:
        "A database container can store its database files in a Docker volume so that removing and recreating the container does not necessarily remove the database data.",
      commonMistakes: [
        "Storing important database data only inside the container filesystem.",
        "Deleting volumes without checking their contents.",
        "Confusing volumes with Docker images.",
      ],
      quiz: [
        {
          question: "Why are Docker volumes used?",
          options: [
            "To persist data beyond a container's lifecycle",
            "To build CPUs",
            "To create Docker images only",
            "To replace networking",
          ],
          answer:
            "To persist data beyond a container's lifecycle",
        },
        {
          question: "Which application commonly needs persistent storage?",
          options: [
            "A database",
            "A temporary calculator",
            "A static HTML file only",
            "A text editor toolbar",
          ],
          answer: "A database",
        },
        {
          question: "What does a Docker volume provide?",
          options: [
            "Persistent storage",
            "A programming language",
            "A container image",
            "A network protocol",
          ],
          answer: "Persistent storage",
        },
      ],
    },
  },

  {
    id: 7,
    title: "Docker Compose",
    icon: "🧩",
    lesson: {
      explanation:
        "Docker Compose is used to define and manage multi-container applications. A Compose file describes services, networks, volumes, environment variables, and other configuration needed to run an application stack.",
      points: [
        "Docker Compose helps manage multiple containers as an application.",
        "Compose configurations are commonly written in YAML.",
        "Services can define application containers and dependencies.",
        "Compose can create networks and volumes for the application.",
        "Compose is useful for local development and testing multi-service applications.",
      ],
      example:
        "A web application can use one Compose service for the frontend, one for the backend, and another for a database.",
      commonMistakes: [
        "Thinking Compose is the same thing as Kubernetes.",
        "Hard-coding sensitive credentials in Compose files.",
        "Forgetting to define persistent storage for stateful services.",
      ],
      quiz: [
        {
          question: "What is Docker Compose mainly used for?",
          options: [
            "Managing multi-container applications",
            "Compiling kernels",
            "Creating physical servers",
            "Editing images",
          ],
          answer:
            "Managing multi-container applications",
        },
        {
          question: "What format is commonly used for Compose configuration?",
          options: [
            "YAML",
            "JPEG",
            "MP3",
            "EXE",
          ],
          answer: "YAML",
        },
        {
          question: "What can a Compose file define?",
          options: [
            "Services, networks, and volumes",
            "Only CSS styles",
            "Only database tables",
            "Only Git commits",
          ],
          answer:
            "Services, networks, and volumes",
        },
      ],
    },
  },

  {
    id: 8,
    title: "Container Registries & Docker in DevOps",
    icon: "🚀",
    lesson: {
      explanation:
        "Container registries store and distribute container images. In DevOps workflows, teams can build an image, push it to a registry, and deploy that image to development, testing, staging, or production environments.",
      points: [
        "A container registry stores container images.",
        "Docker Hub is a commonly used container registry.",
        "Private registries can be used for organizational images.",
        "Images can be tagged with versions.",
        "CI/CD pipelines can automatically build and push container images.",
      ],
      example:
        "A CI pipeline can build an application image after a code change, tag the image with a version, and push it to a container registry for deployment.",
      commonMistakes: [
        "Using the latest tag blindly in production.",
        "Publishing private application images publicly.",
        "Skipping image security checks in a CI/CD pipeline.",
      ],
      quiz: [
        {
          question: "What is a container registry used for?",
          options: [
            "Storing and distributing container images",
            "Running SQL queries",
            "Creating user interfaces",
            "Managing physical keyboards",
          ],
          answer:
            "Storing and distributing container images",
        },
        {
          question: "What can image tags be used for?",
          options: [
            "Identifying image versions",
            "Creating network cables",
            "Replacing Dockerfiles",
            "Encrypting all databases",
          ],
          answer:
            "Identifying image versions",
        },
        {
          question:
            "How can CI/CD pipelines use Docker?",
          options: [
            "Build and push container images automatically",
            "Replace all source code",
            "Disable version control",
            "Remove application dependencies",
          ],
          answer:
            "Build and push container images automatically",
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
// DOCKER & CONTAINERS COMPONENT
// =====================================================

const DockerContainers = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] =
    useState(null);

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-docker-containers", subtopics);

  const [quizIndex, setQuizIndex] = useState(0);

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

    // Mark current lesson complete
    markLessonComplete(
      selectedTopic.id
    );

    if (
      currentLesson <
      subtopics.length - 1
    ) {
      const nextIndex =
        currentLesson + 1;

      // IMPORTANT:
      // Change the actual lesson
      setSelectedTopic(
        subtopics[nextIndex]
      );

      setCurrentLesson(nextIndex);

      // Reset quiz
      setQuizIndex(0);
      setSelectedAnswer("");
      setSubmitted(false);
    setScore(0);

      return;
    }

    // Last lesson
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

    // IMPORTANT:
    // Change the actual lesson
    setSelectedTopic(
      subtopics[previousIndex]
    );

    setCurrentLesson(previousIndex);

    // Reset quiz
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
            ← Back to Docker &
            Containers
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
            🐳 Docker &
            Containers
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
            Learn containerization,
            Docker images,
            Dockerfiles,
            networking,
            storage, Compose,
            and container-based
            DevOps workflows.
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
          📚 Docker &
          Containers Lessons
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
                    Docker and
                    containerization
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

export default DockerContainers;