import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "android-permissions",
    title: "Android Permissions",
    lesson: {
      overview:
        "Android permissions control access to protected device features and user data. Applications should request only the permissions they actually need.",
      sections: [
        {
          heading: "Why Permissions Exist",
          content:
            "Permissions protect sensitive information and device capabilities such as location, camera, microphone, contacts, and storage. Android uses permissions to give users control over what applications can access.",
        },
        {
          heading: "Permission Categories",
          content:
            "Android permissions can include normal permissions and dangerous permissions. Dangerous permissions provide access to sensitive data or capabilities and may require user approval at runtime.",
        },
        {
          heading: "Manifest Declaration",
          content:
            "Permissions that an application requires are generally declared in AndroidManifest.xml. Declaring a permission tells the system that the application may need access to a protected capability.",
        },
      ],
      mistakes: [
        "Requesting permissions that the application does not actually need.",
        "Assuming a manifest declaration always means access has been granted.",
        "Ignoring the privacy implications of sensitive permissions.",
      ],
      quiz: [
        {
          question: "Why does Android use permissions?",
          options: [
            "To control access to protected device features and data",
            "To design application layouts",
            "To compile Kotlin",
            "To create database tables",
          ],
          answer:
            "To control access to protected device features and data",
        },
        {
          question: "Where are application permissions commonly declared?",
          options: [
            "AndroidManifest.xml",
            "MainActivity.xml",
            "RecyclerView.java",
            "build-image.xml",
          ],
          answer: "AndroidManifest.xml",
        },
        {
          question: "Which should an application request?",
          options: [
            "Only permissions required by the application",
            "Every available permission",
            "Only Bluetooth permissions",
            "No permissions under any circumstances",
          ],
          answer: "Only permissions required by the application",
        },
      ],
    },
  },

  {
    id: "runtime-permissions",
    title: "Runtime Permissions",
    lesson: {
      overview:
        "Some sensitive Android permissions must be requested while the application is running. The application should explain why access is needed and handle the user's response appropriately.",
      sections: [
        {
          heading: "Runtime Permission Concept",
          content:
            "For permissions that require runtime approval, declaring the permission in the manifest is not enough. The application must request access from the user when it needs the protected feature.",
        },
        {
          heading: "Checking Permission Status",
          content:
            "Before requesting a permission, the application can check whether permission has already been granted. If access is already available, the application can proceed without asking again.",
        },
        {
          heading: "Handling the Result",
          content:
            "The application should handle both granted and denied results. If access is denied, the application should continue gracefully and explain available alternatives when appropriate.",
        },
      ],
      mistakes: [
        "Requesting a permission immediately without explaining why it is needed.",
        "Continuing as if permission was granted after the user denied it.",
        "Repeatedly requesting a permission without considering the user's decision.",
      ],
      quiz: [
        {
          question: "Is declaring a sensitive permission in the manifest always enough?",
          options: [
            "No, runtime approval may also be required",
            "Yes, always",
            "Only for layouts",
            "Only for databases",
          ],
          answer:
            "No, runtime approval may also be required",
        },
        {
          question: "What should an application do before requesting a permission?",
          options: [
            "Check whether it is already granted",
            "Delete the application",
            "Restart the device",
            "Create a new Activity every time",
          ],
          answer: "Check whether it is already granted",
        },
        {
          question: "What should happen if the user denies a permission?",
          options: [
            "The application should handle the denial gracefully",
            "The application should always crash",
            "The application should restart Android",
            "The application should delete all data",
          ],
          answer:
            "The application should handle the denial gracefully",
        },
      ],
    },
  },

  {
    id: "camera-microphone",
    title: "Camera & Microphone",
    lesson: {
      overview:
        "Camera and microphone access allows Android applications to capture images, video, or audio. Because these features involve sensitive device capabilities, applications must request appropriate permissions.",
      sections: [
        {
          heading: "Camera Access",
          content:
            "Applications that need to access the camera should request the appropriate camera permission and use supported Android camera APIs or libraries to capture images or video.",
        },
        {
          heading: "Microphone Access",
          content:
            "Applications that record audio need microphone access. The application should request permission before starting audio recording when runtime permission is required.",
        },
        {
          heading: "Privacy Considerations",
          content:
            "Camera and microphone access can expose highly sensitive information. Applications should clearly communicate why access is needed and stop using the feature when it is no longer required.",
        },
      ],
      mistakes: [
        "Accessing the camera or microphone without appropriate permission.",
        "Requesting both permissions when only one is required.",
        "Continuing to use the camera or microphone after the feature is no longer needed.",
      ],
      quiz: [
        {
          question: "Which permission is associated with camera access?",
          options: [
            "android.permission.CAMERA",
            "android.permission.INTERNET",
            "android.permission.VIBRATE",
            "android.permission.NFC",
          ],
          answer: "android.permission.CAMERA",
        },
        {
          question: "Which capability requires microphone permission?",
          options: [
            "Audio recording",
            "Displaying text",
            "Changing layout size",
            "Opening a local image",
          ],
          answer: "Audio recording",
        },
        {
          question: "Why should camera and microphone access be handled carefully?",
          options: [
            "They can expose sensitive information",
            "They change the screen resolution",
            "They compile Kotlin code",
            "They create database tables",
          ],
          answer: "They can expose sensitive information",
        },
      ],
    },
  },

  {
    id: "location-services",
    title: "Location Services",
    lesson: {
      overview:
        "Location services allow applications to determine a device's geographical position. Location data can be useful for navigation, maps, delivery applications, and location-based features.",
      sections: [
        {
          heading: "Location Permissions",
          content:
            "Android provides location permissions for applications that need access to approximate or precise location. The required permission depends on the application's needs.",
        },
        {
          heading: "Using Location",
          content:
            "Applications can use Android location APIs to obtain location updates. They should request location only when it is necessary for a user-facing feature.",
        },
        {
          heading: "Privacy and Background Location",
          content:
            "Location is sensitive user information. Background location access has additional restrictions and should be requested only when the application's functionality genuinely requires it.",
        },
      ],
      mistakes: [
        "Requesting precise location when approximate location is sufficient.",
        "Collecting location continuously without a clear reason.",
        "Ignoring additional restrictions for background location access.",
      ],
      quiz: [
        {
          question: "What can location services provide?",
          options: [
            "The device's geographical position",
            "The device password",
            "The application source code",
            "The Android Studio project",
          ],
          answer: "The device's geographical position",
        },
        {
          question: "What should determine the level of location access requested?",
          options: [
            "The application's actual requirements",
            "The application icon",
            "The phone wallpaper",
            "The screen brightness",
          ],
          answer: "The application's actual requirements",
        },
        {
          question: "Why is location data sensitive?",
          options: [
            "It can reveal information about a user's whereabouts",
            "It changes the application's font",
            "It controls the emulator",
            "It creates an Activity",
          ],
          answer:
            "It can reveal information about a user's whereabouts",
        },
      ],
    },
  },

  {
    id: "sensors-device-features",
    title: "Sensors & Device Features",
    lesson: {
      overview:
        "Android devices can provide access to hardware sensors and features such as accelerometers, gyroscopes, biometric authentication, Bluetooth, and other capabilities.",
      sections: [
        {
          heading: "Android Sensors",
          content:
            "Android devices may include sensors such as accelerometers, gyroscopes, proximity sensors, light sensors, and magnetometers. Applications can use these sensors for appropriate functionality.",
        },
        {
          heading: "Checking Device Capabilities",
          content:
            "Not every Android device has the same hardware. Applications should check whether a required sensor or feature is available before attempting to use it.",
        },
        {
          heading: "Feature Availability",
          content:
            "Android provides APIs that help applications determine whether a particular hardware feature is supported. Applications can then provide alternatives when the feature is unavailable.",
        },
      ],
      mistakes: [
        "Assuming every Android device contains the same sensors.",
        "Starting sensor-related operations without checking hardware availability.",
        "Ignoring battery consumption caused by unnecessary sensor usage.",
      ],
      quiz: [
        {
          question: "Which is an example of an Android sensor?",
          options: [
            "Accelerometer",
            "TextView",
            "Button",
            "RecyclerView",
          ],
          answer: "Accelerometer",
        },
        {
          question: "Why should applications check hardware availability?",
          options: [
            "Not every Android device has the same hardware",
            "All devices have identical hardware",
            "It is required to change the application icon",
            "It compiles the application",
          ],
          answer:
            "Not every Android device has the same hardware",
        },
        {
          question: "Why should sensor usage be limited when unnecessary?",
          options: [
            "It can consume battery and system resources",
            "It deletes application data",
            "It changes the Android version",
            "It disables the keyboard",
          ],
          answer:
            "It can consume battery and system resources",
        },
      ],
    },
  },

  {
    id: "handling-permissions",
    title: "Handling Permissions Safely",
    lesson: {
      overview:
        "Permission handling should respect user privacy, request access at the appropriate time, and provide graceful behavior when access is denied or unavailable.",
      sections: [
        {
          heading: "Request at the Right Time",
          content:
            "Permissions should generally be requested when the user reaches the feature that needs them rather than requesting every permission when the application first opens.",
        },
        {
          heading: "Explain the Purpose",
          content:
            "Before requesting sensitive access, applications should clearly communicate why the permission is required. The explanation should correspond to an actual application feature.",
        },
        {
          heading: "Graceful Fallback",
          content:
            "If permission is denied, the application should provide an appropriate alternative whenever possible. It should not crash or assume access that was not granted.",
        },
      ],
      mistakes: [
        "Requesting all permissions during application startup.",
        "Using misleading explanations for permission requests.",
        "Crashing when a user denies permission.",
      ],
      quiz: [
        {
          question: "When should an application generally request a permission?",
          options: [
            "When the related feature actually needs it",
            "Before the application does anything",
            "Only when the application is closed",
            "Only after uninstalling the application",
          ],
          answer:
            "When the related feature actually needs it",
        },
        {
          question: "Why should an application explain a permission request?",
          options: [
            "To help the user understand why access is needed",
            "To increase screen brightness",
            "To create a database",
            "To compile the application",
          ],
          answer:
            "To help the user understand why access is needed",
        },
        {
          question: "What should happen when permission is denied?",
          options: [
            "The application should handle the situation gracefully",
            "The application should always crash",
            "The device should restart",
            "All application data should be deleted",
          ],
          answer:
            "The application should handle the situation gracefully",
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

const PermissionsDeviceFeatures = ({ goBack }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-permissions-device-features", subtopics);
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
            🔐 Permissions & Device Features
          </h1>

          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "15px",
            }}
          >
            Learn how Android applications safely access device
            features, sensors, and sensitive user data.
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

export default PermissionsDeviceFeatures;