import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: 1,
    title: "Navigation in Android",
    lesson: {
      overview:
        "Navigation is the process of moving users between different screens or destinations in an Android application. Good navigation helps users understand where they are and how to move through the application.",
      sections: [
        {
          heading: "What Is Navigation?",
          content:
            "Navigation determines how users move from one screen to another. An Android application may contain multiple screens for features such as login, home, profile, settings, and details.",
        },
        {
          heading: "Navigation Between Activities",
          content:
            "Activities can communicate and start one another using Intents. An Intent can specify the Activity that should be opened and can also carry small amounts of data.",
        },
        {
          heading: "Modern Android Navigation",
          content:
            "Modern Android applications commonly use the Navigation Component to manage navigation between destinations. It provides a structured approach to screen navigation and back-stack management.",
        },
      ],
      mistakes: [
        "Creating complicated navigation logic in every Activity.",
        "Ignoring the back-stack behavior of the application.",
        "Using navigation without considering the user's expected flow.",
      ],
      quiz: [
        {
          question: "What does navigation describe in an Android application?",
          options: [
            "Movement between screens or destinations",
            "Database creation",
            "Image compression",
            "Application installation",
          ],
          answer: "Movement between screens or destinations",
        },
        {
          question: "Which mechanism can be used to start another Activity?",
          options: ["Intent", "RecyclerView", "TextView", "Gradle"],
          answer: "Intent",
        },
        {
          question: "Which Android component provides a structured approach to navigation?",
          options: [
            "Navigation Component",
            "ImageView",
            "SQLite",
            "Manifest",
          ],
          answer: "Navigation Component",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Navigation Component",
    lesson: {
      overview:
        "The Android Navigation Component provides a framework for implementing navigation between destinations while managing navigation actions and the back stack.",
      sections: [
        {
          heading: "What Is Navigation Component?",
          content:
            "Navigation Component is part of Android Jetpack. It helps developers organize navigation between destinations such as Activities and Fragments.",
        },
        {
          heading: "Destinations",
          content:
            "A destination represents a screen or location that the user can navigate to. In many applications, Fragments are used as destinations within a single Activity.",
        },
        {
          heading: "Navigation Controller",
          content:
            "NavController manages navigation within a NavHost. It can navigate between destinations, handle the back stack, and respond to navigation actions.",
        },
      ],
      mistakes: [
        "Confusing a navigation destination with a layout file.",
        "Trying to manually manage every back-stack operation.",
        "Using inconsistent navigation actions throughout the application.",
      ],
      quiz: [
        {
          question: "Navigation Component is part of which Android platform collection?",
          options: [
            "Android Jetpack",
            "Android XML",
            "JavaScript",
            "Gradle only",
          ],
          answer: "Android Jetpack",
        },
        {
          question: "What does a destination represent?",
          options: [
            "A screen or location in the navigation flow",
            "A database table",
            "A drawable image",
            "A Gradle dependency",
          ],
          answer: "A screen or location in the navigation flow",
        },
        {
          question: "Which object manages navigation between destinations?",
          options: ["NavController", "TextView", "ViewModelStore", "RecyclerView"],
          answer: "NavController",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Navigation Graph",
    lesson: {
      overview:
        "A navigation graph describes the destinations in an application and the possible navigation paths between them.",
      sections: [
        {
          heading: "What Is a Navigation Graph?",
          content:
            "A navigation graph is a resource that defines destinations and navigation actions. It provides a visual and structured representation of how screens are connected.",
        },
        {
          heading: "Destinations and Actions",
          content:
            "A graph contains destinations and can define actions that connect one destination to another. These actions describe possible navigation paths.",
        },
        {
          heading: "Start Destination",
          content:
            "A navigation graph has a start destination. This is the destination that is displayed when the navigation flow begins.",
        },
      ],
      mistakes: [
        "Forgetting to define a start destination.",
        "Creating navigation actions that do not match the intended application flow.",
        "Adding unnecessary destinations to the graph.",
      ],
      quiz: [
        {
          question: "What does a navigation graph describe?",
          options: [
            "Destinations and navigation paths",
            "Database relationships only",
            "Application colors",
            "Gradle repositories",
          ],
          answer: "Destinations and navigation paths",
        },
        {
          question: "What is a start destination?",
          options: [
            "The initial destination shown in a navigation flow",
            "The last screen in the app",
            "The application package name",
            "A database table",
          ],
          answer: "The initial destination shown in a navigation flow",
        },
        {
          question: "What connects destinations in a navigation graph?",
          options: [
            "Navigation actions",
            "CSS selectors",
            "Database indexes",
            "Gradle plugins",
          ],
          answer: "Navigation actions",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Passing Data Between Destinations",
    lesson: {
      overview:
        "Applications often need to pass information from one screen to another. Android navigation provides mechanisms for transferring small pieces of data between destinations.",
      sections: [
        {
          heading: "Why Pass Data?",
          content:
            "A screen may need information selected or entered on another screen. For example, a product list can pass a product identifier to a product-details screen.",
        },
        {
          heading: "Navigation Arguments",
          content:
            "Navigation destinations can define arguments that specify the data expected by a destination. Arguments help make navigation data explicit and structured.",
        },
        {
          heading: "Safe Data Transfer",
          content:
            "Only appropriate amounts of data should be passed directly between destinations. Large objects or sensitive information should generally be handled through suitable shared data or storage mechanisms.",
        },
      ],
      mistakes: [
        "Passing unnecessarily large objects between destinations.",
        "Forgetting to provide required navigation arguments.",
        "Assuming navigation arguments are a replacement for persistent storage.",
      ],
      quiz: [
        {
          question: "Why might data be passed between destinations?",
          options: [
            "To provide information needed by the next screen",
            "To install the application",
            "To create XML files",
            "To compile Kotlin",
          ],
          answer: "To provide information needed by the next screen",
        },
        {
          question: "What can define data expected by a navigation destination?",
          options: [
            "Navigation arguments",
            "CSS classes",
            "Gradle repositories",
            "Drawable folders",
          ],
          answer: "Navigation arguments",
        },
        {
          question: "Should large objects generally be passed directly between destinations?",
          options: [
            "No",
            "Yes, always",
            "Only during debugging",
            "Only through TextView",
          ],
          answer: "No",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Bottom Navigation & Navigation Drawer",
    lesson: {
      overview:
        "Bottom navigation and navigation drawers provide common patterns for moving between major sections of an Android application.",
      sections: [
        {
          heading: "Bottom Navigation",
          content:
            "Bottom navigation places a set of primary destinations at the bottom of the screen. It is commonly used when an application has a small number of important top-level sections.",
        },
        {
          heading: "Navigation Drawer",
          content:
            "A navigation drawer provides a side panel containing navigation options. It is useful when an application has several destinations or categories that need to be accessible from a common menu.",
        },
        {
          heading: "Choosing a Pattern",
          content:
            "The navigation pattern should match the application's structure. Top-level destinations should be easy to discover and should not overwhelm the user with too many choices.",
        },
      ],
      mistakes: [
        "Adding too many items to bottom navigation.",
        "Using a navigation drawer for only two or three essential destinations.",
        "Mixing navigation patterns without a clear reason.",
      ],
      quiz: [
        {
          question: "Where is bottom navigation normally placed?",
          options: [
            "At the bottom of the screen",
            "Inside the database",
            "At the top of AndroidManifest.xml",
            "Inside Gradle",
          ],
          answer: "At the bottom of the screen",
        },
        {
          question: "What does a navigation drawer usually provide?",
          options: [
            "A side panel with navigation options",
            "A database connection",
            "A background thread",
            "An image editor",
          ],
          answer: "A side panel with navigation options",
        },
        {
          question: "What should determine the navigation pattern?",
          options: [
            "The structure and needs of the application",
            "The filename of the APK",
            "The device wallpaper",
            "The Gradle version only",
          ],
          answer: "The structure and needs of the application",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Android App Architecture",
    lesson: {
      overview:
        "Application architecture defines how an Android application organizes its user interface, business logic, data, and responsibilities.",
      sections: [
        {
          heading: "Why Architecture Matters",
          content:
            "A well-organized architecture separates responsibilities and makes an application easier to understand, test, maintain, and extend.",
        },
        {
          heading: "Common Layers",
          content:
            "Android applications can separate the UI layer, domain or business logic, and data layer. Each layer has a specific responsibility and communicates with the others through defined interfaces.",
        },
        {
          heading: "Separation of Responsibilities",
          content:
            "The user interface should focus on displaying information and handling user interaction, while data and business logic should be kept separate where appropriate.",
        },
      ],
      mistakes: [
        "Putting all application logic inside an Activity.",
        "Mixing database operations directly with UI code.",
        "Creating architecture that is unnecessarily complicated for a small application.",
      ],
      quiz: [
        {
          question: "What is a major purpose of application architecture?",
          options: [
            "Organizing responsibilities and improving maintainability",
            "Changing the phone wallpaper",
            "Increasing screen brightness",
            "Installing Android Studio",
          ],
          answer: "Organizing responsibilities and improving maintainability",
        },
        {
          question: "Which is a common application layer?",
          options: ["UI layer", "Wallpaper layer", "Keyboard layer", "Bluetooth layer"],
          answer: "UI layer",
        },
        {
          question: "Where should database operations generally be separated from?",
          options: [
            "UI code",
            "Application resources",
            "The APK file",
            "The Android device",
          ],
          answer: "UI code",
        },
      ],
    },
  },

  {
    id: 7,
    title: "MVVM Architecture",
    lesson: {
      overview:
        "MVVM, or Model-View-ViewModel, is an architecture pattern commonly used in Android applications to separate UI concerns from application data and logic.",
      sections: [
        {
          heading: "Model",
          content:
            "The Model represents the application's data and data-related operations. It can interact with repositories, databases, APIs, or other data sources.",
        },
        {
          heading: "View",
          content:
            "The View represents the user interface. In Android, Activities and Fragments commonly act as UI components that display state and respond to user interactions.",
        },
        {
          heading: "ViewModel",
          content:
            "The ViewModel holds and manages UI-related state and logic in a lifecycle-aware way. It helps keep important UI state separate from Activity or Fragment code.",
        },
      ],
      mistakes: [
        "Putting all business logic directly inside the View.",
        "Treating ViewModel as a replacement for the database.",
        "Keeping references to Activities or Views unnecessarily inside a ViewModel.",
      ],
      quiz: [
        {
          question: "What does MVVM stand for?",
          options: [
            "Model-View-ViewModel",
            "Model-View-Visual-Machine",
            "Main-View-Value-Model",
            "Module-View-Version-Manager",
          ],
          answer: "Model-View-ViewModel",
        },
        {
          question: "Which part of MVVM manages UI-related state?",
          options: ["ViewModel", "Database", "Gradle", "Manifest"],
          answer: "ViewModel",
        },
        {
          question: "What does the View primarily represent?",
          options: [
            "The user interface",
            "The database schema",
            "The build system",
            "The application package",
          ],
          answer: "The user interface",
        },
      ],
    },
  },
];

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
};

const NavigationAppArchitecture = ({ goBack }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const { completed, markComplete: saveProgress } = useLearningProgress("android-navigation-app-architecture", subtopics);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      const quiz = topic?.lesson?.quiz || [];

      shuffled[topic.id] = quiz.map((question) =>
        shuffleArray(question?.options || [])
      );
    });

    return shuffled;
  });

  const activeTopic = subtopics[activeTopicIndex];

  const quizQuestions = activeTopic?.lesson?.quiz || [];

  const currentQuestion =
    quizQuestions[questionIndex] || quizQuestions[0];

  const options =
    activeTopic && shuffledQuizOptions[activeTopic.id]
      ? shuffledQuizOptions[activeTopic.id][questionIndex] || []
      : [];

  const openTopic = (index) => {
    setActiveTopicIndex(index);
    setQuizStarted(false);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setScore(0);
  };

  const markCompleted = () => {
    if (!activeTopic) return;
    saveProgress(activeTopic.id);
  };

  const startQuiz = () => {
    if (!currentQuestion || quizQuestions.length === 0) {
      return;
    }

    setQuizStarted(true);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setScore(0);
  };

  const submitAnswer = () => {
    if (!selectedAnswer || submitted || !currentQuestion) {
      return;
    }

    setSubmitted(true);

    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = async () => {
    if (!currentQuestion) {
      return;
    }

    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setSubmitted(false);
    } else {
      const finalScore = score;

      await saveQuizResult({
        subject: "Android Developer",
        role: "Android Developer",
        topic: activeTopic.title,
        topicId: activeTopic.id,
        score: finalScore,
        totalQuestions: quizQuestions.length
      });

      markCompleted();
      setQuizStarted(false);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  };

  const getOptionStyle = (option) => {
    if (!submitted) {
      return {
        background:
          selectedAnswer === option ? "#dbeafe" : "white",
        border:
          selectedAnswer === option
            ? "2px solid #2563eb"
            : "1px solid #d1d5db",
        color: "#111827",
      };
    }

    if (
      currentQuestion &&
      option === currentQuestion.answer
    ) {
      return {
        background: "#dcfce7",
        border: "2px solid #16a34a",
        color: "#166534",
      };
    }

    if (
      option === selectedAnswer &&
      currentQuestion &&
      selectedAnswer !== currentQuestion.answer
    ) {
      return {
        background: "#fee2e2",
        border: "2px solid #dc2626",
        color: "#991b1b",
      };
    }

    return {
      background: "white",
      border: "1px solid #d1d5db",
      color: "#111827",
    };
  };

  if (!activeTopic) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p>Unable to load Navigation & App Architecture.</p>
      </div>
    );
  }

  if (quizStarted && currentQuestion) {
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
            maxWidth: "800px",
            margin: "0 auto",
            background: "white",
            borderRadius: "18px",
            padding: "32px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          }}
        >
          <button
            onClick={() => setQuizStarted(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "#2563eb",
              cursor: "pointer",
              fontSize: "15px",
              marginBottom: "20px",
            }}
          >
            ← Back to Lesson
          </button>

          <h1
            style={{
              color: "#1e3a8a",
              marginBottom: "8px",
            }}
          >
            🧭 {activeTopic.title} Quiz
          </h1>

          <p style={{ color: "#6b7280" }}>
            Question {questionIndex + 1} of{" "}
            {quizQuestions.length}
          </p>

          <div
            style={{
              height: "8px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
              margin: "20px 0 30px",
            }}
          >
            <div
              style={{
                width: `${
                  ((questionIndex + 1) /
                    quizQuestions.length) *
                  100
                }%`,
                height: "100%",
                background: "#2563eb",
              }}
            />
          </div>

          <h2
            style={{
              fontSize: "22px",
              color: "#111827",
              marginBottom: "24px",
            }}
          >
            {currentQuestion.question}
          </h2>

          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {options.map((option, index) => (
              <button
                key={`${option}-${index}`}
                onClick={() =>
                  !submitted &&
                  setSelectedAnswer(option)
                }
                style={{
                  ...getOptionStyle(option),
                  padding: "15px 18px",
                  borderRadius: "10px",
                  textAlign: "left",
                  cursor: submitted
                    ? "default"
                    : "pointer",
                  fontSize: "16px",
                }}
              >
                {option}
              </button>
            ))}
          </div>

          {submitted &&
            selectedAnswer !== currentQuestion.answer && (
              <p
                style={{
                  marginTop: "20px",
                  color: "#166534",
                  fontWeight: "bold",
                }}
              >
                Correct answer:{" "}
                {currentQuestion.answer}
              </p>
            )}

          {submitted &&
            selectedAnswer === currentQuestion.answer && (
              <p
                style={{
                  marginTop: "20px",
                  color: "#166534",
                  fontWeight: "bold",
                }}
              >
                ✅ Correct answer!
              </p>
            )}

          {!submitted ? (
            <button
              onClick={submitAnswer}
              disabled={!selectedAnswer}
              style={{
                marginTop: "28px",
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "none",
                background: selectedAnswer
                  ? "#2563eb"
                  : "#93c5fd",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: selectedAnswer
                  ? "pointer"
                  : "not-allowed",
              }}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              style={{
                marginTop: "28px",
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {questionIndex ===
              quizQuestions.length - 1
                ? "Finish Quiz"
                : "Next Question →"}
            </button>
          )}
        </div>
      </div>
    );
  }

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
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={goBack}
          style={{
            background: "transparent",
            border: "none",
            color: "#2563eb",
            cursor: "pointer",
            fontSize: "15px",
            marginBottom: "20px",
          }}
        >
          ← Back to Android Topics
        </button>

        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "32px",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h1
                style={{
                  color: "#1e3a8a",
                  marginBottom: "8px",
                }}
              >
                {activeTopic.title}
              </h1>

              <p
                style={{
                  color: "#6b7280",
                  margin: 0,
                }}
              >
                Lesson {activeTopicIndex + 1} of{" "}
                {subtopics.length}
              </p>
            </div>

            {completed.includes(activeTopic.id) && (
              <span
                style={{
                  background: "#dcfce7",
                  color: "#166534",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
              >
                ✓ Completed
              </span>
            )}
          </div>

          <div
            style={{
              marginTop: "25px",
              height: "9px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${
                  ((activeTopicIndex + 1) /
                    subtopics.length) *
                  100
                }%`,
                height: "100%",
                background: "#2563eb",
              }}
            />
          </div>

          <section style={{ marginTop: "32px" }}>
            <h2 style={{ color: "#1e40af" }}>
              📖 Overview
            </h2>

            <p
              style={{
                color: "#374151",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {activeTopic.lesson.overview}
            </p>
          </section>

          {(activeTopic.lesson.sections || []).map(
            (section, index) => (
              <section
                key={`${section.heading}-${index}`}
                style={{
                  marginTop: "28px",
                  padding: "22px",
                  background: "#f8fbff",
                  borderRadius: "12px",
                  border: "1px solid #dbeafe",
                }}
              >
                <h3
                  style={{
                    color: "#1e40af",
                    marginTop: 0,
                  }}
                >
                  {section.heading}
                </h3>

                <p
                  style={{
                    color: "#374151",
                    lineHeight: "1.8",
                    marginBottom: 0,
                  }}
                >
                  {section.content}
                </p>
              </section>
            )
          )}

          <section style={{ marginTop: "30px" }}>
            <h2 style={{ color: "#1e40af" }}>
              ⚠️ Common Mistakes
            </h2>

            <ul
              style={{
                color: "#374151",
                lineHeight: "1.9",
                paddingLeft: "22px",
              }}
            >
              {(activeTopic.lesson.mistakes || []).map(
                (mistake, index) => (
                  <li key={`${mistake}-${index}`}>
                    {mistake}
                  </li>
                )
              )}
            </ul>
          </section>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={startQuiz}
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "13px 22px",
                borderRadius: "9px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              📝 Take Quiz
            </button>

            {!completed.includes(activeTopic.id) && (
              <button
                onClick={markCompleted}
                style={{
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  padding: "13px 22px",
                  borderRadius: "9px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ✓ Mark Lesson Complete
              </button>
            )}
          </div>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <button
              onClick={() =>
                activeTopicIndex > 0 &&
                openTopic(activeTopicIndex - 1)
              }
              disabled={activeTopicIndex === 0}
              style={{
                padding: "12px 20px",
                borderRadius: "9px",
                border: "1px solid #bfdbfe",
                background:
                  activeTopicIndex === 0
                    ? "#f3f4f6"
                    : "white",
                color:
                  activeTopicIndex === 0
                    ? "#9ca3af"
                    : "#2563eb",
                cursor:
                  activeTopicIndex === 0
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={() =>
                activeTopicIndex <
                  subtopics.length - 1 &&
                openTopic(activeTopicIndex + 1)
              }
              disabled={
                activeTopicIndex ===
                subtopics.length - 1
              }
              style={{
                padding: "12px 20px",
                borderRadius: "9px",
                border: "none",
                background:
                  activeTopicIndex ===
                  subtopics.length - 1
                    ? "#dbeafe"
                    : "#2563eb",
                color:
                  activeTopicIndex ===
                  subtopics.length - 1
                    ? "#93c5fd"
                    : "white",
                cursor:
                  activeTopicIndex ===
                  subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Next Lesson →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationAppArchitecture;