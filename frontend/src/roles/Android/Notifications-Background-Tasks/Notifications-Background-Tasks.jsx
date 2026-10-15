import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "android-notifications",
    title: "Android Notifications",
    lesson: {
      overview:
        "Notifications allow Android applications to provide timely information to users outside the application's main screen. They can inform users about messages, updates, reminders, and other events.",
      sections: [
        {
          heading: "What is a Notification?",
          content:
            "A notification is a message displayed by Android to inform the user about an event or update. Users can interact with notifications to open an application or perform an action.",
        },
        {
          heading: "Notification Builder",
          content:
            "Android applications can construct notifications using notification APIs. A notification commonly contains a small icon, title, text, and an action that determines what happens when the user interacts with it.",
        },
        {
          heading: "Notification Manager",
          content:
            "NotificationManager is used to deliver notifications to the Android system. The application creates a notification and submits it to the manager for display.",
        },
      ],
      mistakes: [
        "Creating notifications without a valid notification channel on supported Android versions.",
        "Using notifications for unnecessary information.",
        "Forgetting to provide an appropriate small icon.",
      ],
      quiz: [
        {
          question: "What is the purpose of an Android notification?",
          options: [
            "To inform the user about an event or update",
            "To replace an Activity",
            "To compile Kotlin code",
            "To create a database",
          ],
          answer: "To inform the user about an event or update",
        },
        {
          question: "Which Android component is commonly used to deliver notifications?",
          options: [
            "NotificationManager",
            "RecyclerView",
            "SQLiteOpenHelper",
            "ConstraintLayout",
          ],
          answer: "NotificationManager",
        },
        {
          question: "Which can be included in a notification?",
          options: [
            "Title and text",
            "Only an Activity",
            "Only a database",
            "Only an XML file",
          ],
          answer: "Title and text",
        },
      ],
    },
  },

  {
    id: "notification-channels",
    title: "Notification Channels",
    lesson: {
      overview:
        "Notification channels organize notifications into categories and allow users to control notification behavior for each category.",
      sections: [
        {
          heading: "What is a Notification Channel?",
          content:
            "A notification channel represents a category of notifications. Applications create channels and assign notifications to them so Android can provide user controls for those categories.",
        },
        {
          heading: "Channel Importance",
          content:
            "A channel has an importance level that influences how notifications are presented. Users can also control channel behavior through Android system settings.",
        },
        {
          heading: "Creating Channels",
          content:
            "On Android versions that require channels, an application creates a NotificationChannel with a unique ID, a user-visible name, and an importance level before posting notifications to it.",
        },
      ],
      mistakes: [
        "Using a different channel ID every time the application starts.",
        "Creating too many unnecessary channels.",
        "Assuming the application can completely override the user's channel preferences.",
      ],
      quiz: [
        {
          question: "What is the purpose of a notification channel?",
          options: [
            "To categorize notifications and provide user controls",
            "To store application passwords",
            "To create Activities",
            "To manage SQLite tables",
          ],
          answer: "To categorize notifications and provide user controls",
        },
        {
          question: "What identifies a notification channel?",
          options: [
            "A unique channel ID",
            "An Activity name only",
            "A layout file",
            "A database row",
          ],
          answer: "A unique channel ID",
        },
        {
          question: "Who can control notification channel behavior?",
          options: [
            "The user through Android settings",
            "Only the RecyclerView",
            "Only the emulator",
            "Only the XML layout",
          ],
          answer: "The user through Android settings",
        },
      ],
    },
  },

  {
    id: "pending-intent-actions",
    title: "PendingIntent & Notification Actions",
    lesson: {
      overview:
        "PendingIntent allows another application component, such as the Android system, to execute a predefined operation on behalf of an application at a later time.",
      sections: [
        {
          heading: "What is PendingIntent?",
          content:
            "A PendingIntent is a token representing an operation that another component can perform later. It is commonly used with notifications, alarms, and other system-managed actions.",
        },
        {
          heading: "Notification Click Actions",
          content:
            "A notification can contain a PendingIntent that opens a particular Activity when the user taps the notification.",
        },
        {
          heading: "Notification Action Buttons",
          content:
            "Notifications can provide action buttons such as Reply, Mark as Read, or Snooze. These actions can be connected to PendingIntent operations.",
        },
      ],
      mistakes: [
        "Using inappropriate PendingIntent flags.",
        "Creating actions that perform unexpected operations.",
        "Forgetting to define the intended destination or action correctly.",
      ],
      quiz: [
        {
          question: "What does a PendingIntent represent?",
          options: [
            "A predefined operation that another component can perform later",
            "A database table",
            "An Android layout",
            "A Kotlin class only",
          ],
          answer:
            "A predefined operation that another component can perform later",
        },
        {
          question: "What can a PendingIntent do when attached to a notification?",
          options: [
            "Open an Activity when the notification is tapped",
            "Compile the application",
            "Create a database",
            "Change the device wallpaper",
          ],
          answer: "Open an Activity when the notification is tapped",
        },
        {
          question: "Which can be implemented as a notification action?",
          options: [
            "Mark as Read",
            "Create an emulator",
            "Compile Kotlin",
            "Change screen resolution",
          ],
          answer: "Mark as Read",
        },
      ],
    },
  },

  {
    id: "workmanager",
    title: "WorkManager",
    lesson: {
      overview:
        "WorkManager is an Android library designed for scheduling deferrable background work that should continue reliably even when application conditions change.",
      sections: [
        {
          heading: "What is WorkManager?",
          content:
            "WorkManager helps schedule background tasks that do not need to execute immediately. It is designed for work that should be completed reliably even if the application is not currently visible.",
        },
        {
          heading: "Workers",
          content:
            "A Worker defines the work that needs to be performed. The work can include tasks such as synchronizing data or uploading information.",
        },
        {
          heading: "Constraints",
          content:
            "WorkManager supports constraints that determine when work should run. For example, work can be configured to require network connectivity or sufficient battery conditions.",
        },
      ],
      mistakes: [
        "Using WorkManager for tasks that must happen immediately.",
        "Ignoring constraints when scheduling background work.",
        "Putting UI-specific operations inside a Worker.",
      ],
      quiz: [
        {
          question: "What is WorkManager mainly designed for?",
          options: [
            "Reliable scheduling of deferrable background work",
            "Creating Android layouts",
            "Displaying buttons",
            "Managing Activity navigation only",
          ],
          answer:
            "Reliable scheduling of deferrable background work",
        },
        {
          question: "What defines the work performed by WorkManager?",
          options: ["A Worker", "A TextView", "An ImageView", "A Fragment"],
          answer: "A Worker",
        },
        {
          question: "What can WorkManager constraints specify?",
          options: [
            "Conditions such as network availability",
            "Only text color",
            "Only font size",
            "Only screen orientation",
          ],
          answer: "Conditions such as network availability",
        },
      ],
    },
  },

  {
    id: "background-scheduling",
    title: "Background Tasks & Scheduling",
    lesson: {
      overview:
        "Android provides different mechanisms for background work. The appropriate mechanism depends on whether the task is immediate, deferrable, periodic, or requires special system handling.",
      sections: [
        {
          heading: "Immediate vs Deferrable Work",
          content:
            "Some operations need to happen immediately, while others can be delayed. Deferrable work can often be scheduled using WorkManager so the system can determine an appropriate execution time.",
        },
        {
          heading: "Periodic Work",
          content:
            "Applications sometimes need to perform recurring tasks such as periodic synchronization. WorkManager supports periodic work for suitable background operations.",
        },
        {
          heading: "System-Friendly Background Work",
          content:
            "Modern Android versions place restrictions on background execution to improve battery life and performance. Applications should use supported background APIs instead of continuously running unnecessary processes.",
        },
      ],
      mistakes: [
        "Running continuous background work unnecessarily.",
        "Ignoring Android background execution restrictions.",
        "Scheduling frequent work when occasional work would be sufficient.",
      ],
      quiz: [
        {
          question: "Which type of work is well suited to WorkManager?",
          options: [
            "Deferrable background work",
            "Changing a Button's color",
            "Displaying a TextView",
            "Drawing a layout",
          ],
          answer: "Deferrable background work",
        },
        {
          question: "What can periodic work be used for?",
          options: [
            "Recurring synchronization tasks",
            "Creating an Activity",
            "Changing the application icon",
            "Designing an XML layout",
          ],
          answer: "Recurring synchronization tasks",
        },
        {
          question: "Why does Android restrict background execution?",
          options: [
            "To improve battery life and system performance",
            "To remove Kotlin",
            "To prevent XML layouts",
            "To disable notifications",
          ],
          answer: "To improve battery life and system performance",
        },
      ],
    },
  },

  {
    id: "background-work-real-apps",
    title: "Handling Background Work in Real Apps",
    lesson: {
      overview:
        "Real applications often combine notifications and background processing. For example, an application can perform background synchronization and notify the user when important work is completed.",
      sections: [
        {
          heading: "Background Sync",
          content:
            "An application can schedule background synchronization to retrieve or upload data without requiring the user to keep the application open.",
        },
        {
          heading: "Combining WorkManager and Notifications",
          content:
            "After background work completes, the application can display a notification when user attention is useful. This creates a clear connection between background processing and user communication.",
        },
        {
          heading: "Battery and User Experience",
          content:
            "Background tasks should be scheduled responsibly. Applications should avoid unnecessary network operations and notifications because they can consume resources and disturb users.",
        },
      ],
      mistakes: [
        "Sending notifications for every minor background event.",
        "Running expensive background operations more frequently than necessary.",
        "Ignoring failures in scheduled background work.",
      ],
      quiz: [
        {
          question: "What can an application do after background work completes?",
          options: [
            "Notify the user when appropriate",
            "Always restart the phone",
            "Delete application data",
            "Close Android Studio",
          ],
          answer: "Notify the user when appropriate",
        },
        {
          question: "Why should background tasks be scheduled responsibly?",
          options: [
            "They can consume battery and system resources",
            "They change the Android version",
            "They remove application layouts",
            "They disable Kotlin",
          ],
          answer: "They can consume battery and system resources",
        },
        {
          question: "What should scheduled background work handle?",
          options: [
            "Failures and appropriate retry behavior",
            "Only screen colors",
            "Only application icons",
            "Only font sizes",
          ],
          answer: "Failures and appropriate retry behavior",
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

const NotificationsBackgroundTasks = ({ goBack }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-notifications-background-tasks", subtopics);
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
            🔔 Notifications & Background Tasks
          </h1>

          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "15px",
            }}
          >
            Learn how Android applications communicate with users
            and perform reliable background work.
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

export default NotificationsBackgroundTasks;