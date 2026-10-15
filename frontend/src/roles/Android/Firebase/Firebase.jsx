import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "firebase-introduction",
    title: "Firebase Introduction",
    lesson: {
      overview:
        "Firebase is a cloud platform that provides services commonly used for building mobile and web applications. Android developers can use Firebase for authentication, databases, storage, analytics, notifications, and more.",
      sections: [
        {
          heading: "What is Firebase?",
          content:
            "Firebase is a platform from Google that provides backend services for applications. It can reduce the amount of custom server-side infrastructure needed for many application features.",
        },
        {
          heading: "Firebase Services",
          content:
            "Important Firebase services include Firebase Authentication, Cloud Firestore, Realtime Database, Cloud Storage, Cloud Messaging, and Analytics.",
        },
        {
          heading: "Firebase with Android",
          content:
            "Firebase can be integrated into an Android application through the Firebase SDKs. Developers can then use the required Firebase services from their Kotlin or Java code.",
        },
      ],
      mistakes: [
        "Adding Firebase services that the application does not need.",
        "Ignoring Firebase security rules.",
        "Assuming Firebase automatically makes every application secure.",
      ],
      quiz: [
        {
          question: "What is Firebase?",
          options: [
            "A cloud platform providing application services",
            "An Android layout",
            "A programming language",
            "An Android emulator",
          ],
          answer: "A cloud platform providing application services",
        },
        {
          question: "Which is a Firebase service?",
          options: [
            "Firebase Authentication",
            "ConstraintLayout",
            "RecyclerView",
            "Android Activity",
          ],
          answer: "Firebase Authentication",
        },
        {
          question: "How can Android applications use Firebase?",
          options: [
            "Through Firebase SDKs",
            "Only through XML",
            "Only through Bluetooth",
            "Only through the Android emulator",
          ],
          answer: "Through Firebase SDKs",
        },
      ],
    },
  },

  {
    id: "firebase-project-setup",
    title: "Firebase Project Setup",
    lesson: {
      overview:
        "Before using Firebase services, an Android application needs to be connected to a Firebase project. The setup process associates the Android application with Firebase.",
      sections: [
        {
          heading: "Creating a Firebase Project",
          content:
            "A Firebase project acts as a container for Firebase services and application configuration. Developers can create and manage projects through the Firebase console.",
        },
        {
          heading: "Connecting an Android App",
          content:
            "An Android application is registered with the Firebase project using information such as the Android package name. Firebase then provides configuration information for the application.",
        },
        {
          heading: "Adding Firebase Dependencies",
          content:
            "The required Firebase libraries are added to the Android project so that application code can access the selected Firebase services.",
        },
      ],
      mistakes: [
        "Registering the wrong Android package name.",
        "Adding unnecessary Firebase dependencies.",
        "Forgetting to synchronize the project after changing dependencies.",
      ],
      quiz: [
        {
          question: "What does a Firebase project contain?",
          options: [
            "Firebase services and application configuration",
            "Only Android layouts",
            "Only Kotlin files",
            "Only emulator settings",
          ],
          answer: "Firebase services and application configuration",
        },
        {
          question: "What identifies an Android app when registering it with Firebase?",
          options: [
            "Its Android package name",
            "Its screen brightness",
            "Its wallpaper",
            "Its device volume",
          ],
          answer: "Its Android package name",
        },
        {
          question: "Why are Firebase dependencies added to an Android project?",
          options: [
            "To allow the application to use Firebase services",
            "To change the Android wallpaper",
            "To create a new emulator",
            "To replace Kotlin",
          ],
          answer: "To allow the application to use Firebase services",
        },
      ],
    },
  },

  {
    id: "firebase-authentication",
    title: "Firebase Authentication",
    lesson: {
      overview:
        "Firebase Authentication provides ready-to-use authentication functionality for applications. It supports several sign-in methods and helps developers manage user identity.",
      sections: [
        {
          heading: "Authentication",
          content:
            "Authentication verifies who a user is. Firebase Authentication can support methods such as email and password, phone authentication, and several federated sign-in providers.",
        },
        {
          heading: "User Accounts",
          content:
            "When users authenticate, Firebase manages their authentication identity. The application can use the authenticated user's information to personalize the experience.",
        },
        {
          heading: "Authentication Flow",
          content:
            "A typical flow includes allowing the user to sign up or sign in, sending the credentials to Firebase, receiving the authentication result, and updating the application UI.",
        },
      ],
      mistakes: [
        "Storing passwords manually in application databases.",
        "Not validating user input before authentication requests.",
        "Failing to handle authentication errors.",
      ],
      quiz: [
        {
          question: "What is the purpose of authentication?",
          options: [
            "To verify a user's identity",
            "To design layouts",
            "To create animations",
            "To compile Kotlin",
          ],
          answer: "To verify a user's identity",
        },
        {
          question: "Which is a Firebase Authentication method?",
          options: [
            "Email and password",
            "ConstraintLayout",
            "RecyclerView",
            "SQLiteOpenHelper",
          ],
          answer: "Email and password",
        },
        {
          question: "What should an application do after authentication?",
          options: [
            "Handle the result and update the application appropriately",
            "Always assume success",
            "Delete the user's account",
            "Restart the device",
          ],
          answer:
            "Handle the result and update the application appropriately",
        },
      ],
    },
  },

  {
    id: "cloud-firestore",
    title: "Cloud Firestore",
    lesson: {
      overview:
        "Cloud Firestore is a cloud-hosted NoSQL database provided by Firebase. It stores data in collections and documents and supports real-time updates.",
      sections: [
        {
          heading: "Collections and Documents",
          content:
            "Firestore organizes data into collections containing documents. A document contains fields that represent the stored information.",
        },
        {
          heading: "Reading and Writing Data",
          content:
            "Android applications can add, retrieve, update, and delete Firestore documents. Queries can be used to retrieve documents matching specific conditions.",
        },
        {
          heading: "Real-Time Updates",
          content:
            "Firestore can notify applications when relevant data changes. This makes it useful for applications that need data to remain synchronized across clients.",
        },
      ],
      mistakes: [
        "Designing Firestore data without considering how it will be queried.",
        "Leaving database security rules too permissive.",
        "Performing unnecessary reads that increase usage.",
      ],
      quiz: [
        {
          question: "How does Cloud Firestore organize data?",
          options: [
            "Collections and documents",
            "Activities and fragments",
            "Layouts and views",
            "Files and folders only",
          ],
          answer: "Collections and documents",
        },
        {
          question: "What type of database is Firestore?",
          options: [
            "NoSQL cloud database",
            "Relational-only database",
            "Operating system",
            "Local XML database",
          ],
          answer: "NoSQL cloud database",
        },
        {
          question: "What can Firestore provide to applications?",
          options: [
            "Real-time data synchronization",
            "Android Studio installation",
            "Screen recording",
            "Device charging",
          ],
          answer: "Real-time data synchronization",
        },
      ],
    },
  },

  {
    id: "realtime-database",
    title: "Firebase Realtime Database",
    lesson: {
      overview:
        "Firebase Realtime Database is a cloud-hosted NoSQL database that stores data as a JSON-like tree and synchronizes changes with connected clients in real time.",
      sections: [
        {
          heading: "Data Structure",
          content:
            "Realtime Database stores application data as a large JSON tree. Developers organize the tree into paths representing different types of information.",
        },
        {
          heading: "Real-Time Synchronization",
          content:
            "When data changes, connected clients can receive updates automatically. This makes the database useful for applications requiring live synchronization.",
        },
        {
          heading: "Realtime Database vs Firestore",
          content:
            "Both are Firebase databases, but they have different data models and capabilities. Firestore uses collections and documents, while Realtime Database uses a JSON tree.",
        },
      ],
      mistakes: [
        "Creating an unnecessarily deeply nested JSON structure.",
        "Ignoring database security rules.",
        "Choosing Realtime Database without considering the application's query requirements.",
      ],
      quiz: [
        {
          question: "How is Realtime Database data structured?",
          options: [
            "As a JSON-like tree",
            "Only as XML files",
            "Only as SQL tables",
            "Only as images",
          ],
          answer: "As a JSON-like tree",
        },
        {
          question: "What is a major feature of Realtime Database?",
          options: [
            "Real-time synchronization",
            "Android layout rendering",
            "Kotlin compilation",
            "Application icon creation",
          ],
          answer: "Real-time synchronization",
        },
        {
          question: "How does Firestore differ structurally from Realtime Database?",
          options: [
            "Firestore uses collections and documents",
            "Firestore only stores images",
            "Firestore does not store data",
            "Firestore is an Android Activity",
          ],
          answer: "Firestore uses collections and documents",
        },
      ],
    },
  },

  {
    id: "firebase-storage",
    title: "Firebase Storage",
    lesson: {
      overview:
        "Firebase Cloud Storage allows applications to upload and retrieve user-generated files such as images, videos, and documents using cloud storage infrastructure.",
      sections: [
        {
          heading: "File Storage",
          content:
            "Cloud Storage is designed for storing files rather than structured database records. Applications can upload files and later retrieve them when required.",
        },
        {
          heading: "Uploading Files",
          content:
            "An Android application can select a file, upload it to a Firebase Storage location, and obtain information that can be used to access the stored file.",
        },
        {
          heading: "Security",
          content:
            "Storage security rules control who can read or write files. Authentication can be combined with security rules to restrict access to user-specific content.",
        },
      ],
      mistakes: [
        "Using Cloud Storage for structured records that belong in a database.",
        "Allowing unrestricted read and write access.",
        "Not validating uploaded files.",
      ],
      quiz: [
        {
          question: "What is Firebase Cloud Storage mainly used for?",
          options: [
            "Storing files such as images and videos",
            "Creating Activities",
            "Managing Android layouts",
            "Compiling Kotlin",
          ],
          answer: "Storing files such as images and videos",
        },
        {
          question: "What controls access to Firebase Storage files?",
          options: [
            "Security rules",
            "TextViews",
            "Fragments",
            "Gradle comments",
          ],
          answer: "Security rules",
        },
        {
          question: "Which is a suitable use of Firebase Storage?",
          options: [
            "Uploading user profile images",
            "Storing a Button's click listener",
            "Creating a RecyclerView",
            "Managing an Activity lifecycle",
          ],
          answer: "Uploading user profile images",
        },
      ],
    },
  },

  {
    id: "firebase-integration",
    title: "Firebase Integration in Android Apps",
    lesson: {
      overview:
        "Firebase services can be combined to build complete Android applications. For example, Authentication can identify users, Firestore can store application data, and Storage can store user files.",
      sections: [
        {
          heading: "Combining Services",
          content:
            "An application can use multiple Firebase services together. A user can authenticate with Firebase Authentication, store profile information in Firestore, and upload profile images to Cloud Storage.",
        },
        {
          heading: "Application Architecture",
          content:
            "Firebase operations should be organized into appropriate data or repository layers rather than placing all backend logic directly inside UI components.",
        },
        {
          heading: "Security and Testing",
          content:
            "Firebase security rules should be designed according to the application's requirements. Developers should test authentication, database access, storage access, and error conditions before releasing the application.",
        },
      ],
      mistakes: [
        "Putting all Firebase operations directly inside Activities.",
        "Leaving test security rules enabled in production.",
        "Exposing sensitive configuration or credentials unnecessarily.",
      ],
      quiz: [
        {
          question: "Which Firebase services can be combined in one Android application?",
          options: [
            "Authentication, Firestore, and Storage",
            "Only Authentication",
            "Only Storage",
            "Only Analytics",
          ],
          answer: "Authentication, Firestore, and Storage",
        },
        {
          question: "Where should Firebase data operations ideally be organized?",
          options: [
            "Appropriate data or repository layers",
            "Only inside XML layouts",
            "Only inside ImageViews",
            "Only inside the application icon",
          ],
          answer: "Appropriate data or repository layers",
        },
        {
          question: "What should be checked before releasing a Firebase application?",
          options: [
            "Security rules and error handling",
            "Only the app icon",
            "Only screen brightness",
            "Only emulator wallpaper",
          ],
          answer: "Security rules and error handling",
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

const Firebase = ({ goBack }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-firebase", subtopics);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
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

  const progress =
    subtopics.length > 0
      ? Math.round(
          (completedTopics.length / subtopics.length) * 100
        )
      : 0;

  const markCompleted = () => {
    if (!activeTopic) return;
    saveProgress(activeTopic.id);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || submitted || !currentQuestion) {
      return;
    }

    setSubmitted(true);

    if (selectedAnswer === currentQuestion.answer) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNextQuestion = async () => {
    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex((previous) => previous + 1);
      setSelectedAnswer("");
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
    }
  };

  const openTopic = (index) => {
    setActiveTopicIndex(index);
    setQuestionIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  const goToNextLesson = () => {
    if (activeTopicIndex < subtopics.length - 1) {
      openTopic(activeTopicIndex + 1);
    }
  };

  const goToPreviousLesson = () => {
    if (activeTopicIndex > 0) {
      openTopic(activeTopicIndex - 1);
    }
  };

  if (!activeTopic) {
    return null;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
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
        <button
          onClick={goBack}
          style={{
            border: "none",
            background: "#2563eb",
            color: "white",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          ← Back to Android Topics
        </button>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "28px",
            border: "1px solid #bfdbfe",
            boxShadow:
              "0 8px 24px rgba(37, 99, 235, 0.08)",
            marginBottom: "24px",
          }}
        >
          <h1
            style={{
              margin: "0 0 8px",
              color: "#1e3a8a",
              fontSize: "30px",
            }}
          >
            🔥 Firebase
          </h1>

          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "15px",
            }}
          >
            Learn Firebase services used to add backend capabilities
            to Android applications.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              color: "#334155",
              fontWeight: "600",
            }}
          >
            <span>Overall Progress</span>
            <span>{progress}%</span>
          </div>

          <div
            style={{
              width: "100%",
              height: "10px",
              background: "#dbeafe",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "#2563eb",
                borderRadius: "10px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            marginBottom: "30px",
          }}
        >
          {subtopics.map((topic, index) => {
            const isCompleted = completedTopics.includes(topic.id);
            const isActive = index === activeTopicIndex;

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  borderRadius: "14px",
                  padding: "20px",
                  border: isActive
                    ? "2px solid #2563eb"
                    : "1px solid #bfdbfe",
                  boxShadow:
                    "0 5px 15px rgba(37, 99, 235, 0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: "25px",
                    marginBottom: "10px",
                  }}
                >
                  {index + 1}.
                </div>

                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#1e3a8a",
                    fontSize: "18px",
                  }}
                >
                  {topic.title}
                </h3>

                <p
                  style={{
                    color: isCompleted ? "#15803d" : "#64748b",
                    fontSize: "14px",
                    marginBottom: "15px",
                    fontWeight: "600",
                  }}
                >
                  {isCompleted
                    ? "✓ Completed"
                    : "Not completed"}
                </p>

                <button
                  onClick={() => openTopic(index)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#2563eb",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  {isCompleted
                    ? "Review Lesson"
                    : "Open Lesson"}
                </button>
              </div>
            );
          })}
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            border: "1px solid #bfdbfe",
            boxShadow:
              "0 8px 24px rgba(37, 99, 235, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 5px",
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                Lesson {activeTopicIndex + 1} of{" "}
                {subtopics.length}
              </p>

              <h2
                style={{
                  margin: 0,
                  color: "#1e3a8a",
                  fontSize: "26px",
                }}
              >
                {activeTopic.title}
              </h2>
            </div>

            <div
              style={{
                padding: "8px 14px",
                background: "#eff6ff",
                color: "#2563eb",
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {completedTopics.includes(activeTopic.id)
                ? "✓ Completed"
                : "In Progress"}
            </div>
          </div>

          <section style={{ marginBottom: "30px" }}>
            <h3
              style={{
                color: "#2563eb",
                marginBottom: "10px",
              }}
            >
              Overview
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {activeTopic.lesson.overview}
            </p>
          </section>

          {(activeTopic.lesson.sections || []).map(
            (section, index) => (
              <section
                key={index}
                style={{
                  marginBottom: "24px",
                  padding: "20px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#1e3a8a",
                    fontSize: "18px",
                  }}
                >
                  {section.heading}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#475569",
                    lineHeight: "1.7",
                  }}
                >
                  {section.content}
                </p>
              </section>
            )
          )}

          <section
            style={{
              marginBottom: "30px",
              padding: "20px",
              background: "#fff7ed",
              borderRadius: "12px",
              border: "1px solid #fed7aa",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                color: "#c2410c",
              }}
            >
              ⚠️ Common Mistakes
            </h3>

            <ul
              style={{
                margin: 0,
                paddingLeft: "22px",
                color: "#7c2d12",
                lineHeight: "1.8",
              }}
            >
              {(activeTopic.lesson.mistakes || []).map(
                (mistake, index) => (
                  <li key={index}>{mistake}</li>
                )
              )}
            </ul>
          </section>

          <section
            style={{
              padding: "24px",
              background: "#eff6ff",
              borderRadius: "14px",
              border: "1px solid #bfdbfe",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: "#1e3a8a",
                }}
              >
                🧠 Quick Quiz
              </h3>

              <span
                style={{
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Question {questionIndex + 1} of{" "}
                {quizQuestions.length}
              </span>
            </div>

            {currentQuestion && (
              <>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "#334155",
                    marginBottom: "18px",
                  }}
                >
                  {currentQuestion.question}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {options.map((option, index) => {
                    const isSelected =
                      selectedAnswer === option;

                    const isCorrect =
                      option === currentQuestion.answer;

                    let background = "white";
                    let border = "1px solid #bfdbfe";
                    let textColor = "#334155";

                    if (submitted && isCorrect) {
                      background = "#dcfce7";
                      border = "2px solid #16a34a";
                      textColor = "#166534";
                    } else if (
                      submitted &&
                      isSelected &&
                      !isCorrect
                    ) {
                      background = "#fee2e2";
                      border = "2px solid #dc2626";
                      textColor = "#991b1b";
                    } else if (isSelected) {
                      background = "#dbeafe";
                      border = "2px solid #2563eb";
                      textColor = "#1e3a8a";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (!submitted) {
                            setSelectedAnswer(option);
                          }
                        }}
                        style={{
                          textAlign: "left",
                          padding: "13px 15px",
                          border,
                          borderRadius: "9px",
                          background,
                          color: textColor,
                          cursor: submitted
                            ? "default"
                            : "pointer",
                          fontSize: "14px",
                          lineHeight: "1.5",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {submitted &&
                  selectedAnswer !== currentQuestion.answer && (
                    <p
                      style={{
                        marginTop: "15px",
                        marginBottom: 0,
                        color: "#166534",
                        fontWeight: "600",
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
                        marginTop: "15px",
                        marginBottom: 0,
                        color: "#166534",
                        fontWeight: "600",
                      }}
                    >
                      ✓ Correct answer!
                    </p>
                  )}

                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {!submitted ? (
                    <button
                      onClick={handleSubmit}
                      disabled={!selectedAnswer}
                      style={{
                        padding: "11px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: selectedAnswer
                          ? "#2563eb"
                          : "#94a3b8",
                        color: "white",
                        cursor: selectedAnswer
                          ? "pointer"
                          : "not-allowed",
                        fontWeight: "600",
                      }}
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      style={{
                        padding: "11px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#2563eb",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      {questionIndex <
                      quizQuestions.length - 1
                        ? "Next Question →"
                        : "Complete Lesson ✓"}
                    </button>
                  )}
                </div>

                {submitted &&
                  questionIndex ===
                    quizQuestions.length - 1 && (
                    <p
                      style={{
                        marginTop: "15px",
                        marginBottom: 0,
                        color: "#475569",
                        fontSize: "14px",
                      }}
                    >
                      Current quiz score: {score}/
                      {quizQuestions.length}
                    </p>
                  )}
              </>
            )}
          </section>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              marginTop: "28px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={goToPreviousLesson}
              disabled={activeTopicIndex === 0}
              style={{
                padding: "11px 18px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  activeTopicIndex === 0
                    ? "#f1f5f9"
                    : "white",
                color:
                  activeTopicIndex === 0
                    ? "#94a3b8"
                    : "#2563eb",
                cursor:
                  activeTopicIndex === 0
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={goBack}
              style={{
                padding: "11px 18px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background: "white",
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Back to Topics
            </button>

            <button
              onClick={goToNextLesson}
              disabled={
                activeTopicIndex === subtopics.length - 1
              }
              style={{
                padding: "11px 18px",
                borderRadius: "8px",
                border: "none",
                background:
                  activeTopicIndex === subtopics.length - 1
                    ? "#94a3b8"
                    : "#2563eb",
                color: "white",
                cursor:
                  activeTopicIndex === subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
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

export default Firebase;