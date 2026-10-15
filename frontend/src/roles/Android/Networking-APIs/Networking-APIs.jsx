import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "networking-basics",
    title: "Networking Basics in Android",
    lesson: {
      overview:
        "Android applications often communicate with remote servers to retrieve or send information. Understanding basic networking concepts is essential for building connected applications.",
      sections: [
        {
          heading: "What is Networking?",
          content:
            "Networking allows an Android application to communicate with another system over a network. For example, an application may request weather information, load a user's profile, or send form data to a server.",
        },
        {
          heading: "Client and Server",
          content:
            "The Android application generally acts as the client, while a remote server processes requests and returns responses. Communication commonly happens over the internet using HTTP or HTTPS.",
        },
        {
          heading: "Internet Permission",
          content:
            "An Android application that needs network access generally declares the INTERNET permission in its AndroidManifest.xml file.",
        },
      ],
      mistakes: [
        "Forgetting to declare the required internet permission.",
        "Performing long-running network operations directly on the main UI thread.",
        "Ignoring network failures and unavailable connections.",
      ],
      quiz: [
        {
          question: "What does networking allow an Android application to do?",
          options: [
            "Communicate with remote systems",
            "Only change text color",
            "Only create layouts",
            "Only play local animations",
          ],
          answer: "Communicate with remote systems",
        },
        {
          question: "In a typical API interaction, the Android application acts as the:",
          options: ["Client", "Database engine", "Router", "Operating system"],
          answer: "Client",
        },
        {
          question: "Which permission is commonly required for internet access?",
          options: [
            "android.permission.INTERNET",
            "android.permission.CAMERA",
            "android.permission.BLUETOOTH",
            "android.permission.VIBRATE",
          ],
          answer: "android.permission.INTERNET",
        },
      ],
    },
  },

  {
    id: "http-rest",
    title: "HTTP & REST APIs",
    lesson: {
      overview:
        "HTTP is a protocol commonly used for communication between applications and web servers. REST APIs use HTTP methods and resources to allow applications to interact with server-side data.",
      sections: [
        {
          heading: "HTTP Methods",
          content:
            "Common HTTP methods include GET for retrieving data, POST for creating or submitting data, PUT or PATCH for modifying data, and DELETE for removing data.",
        },
        {
          heading: "HTTP Status Codes",
          content:
            "Servers use status codes to describe the result of a request. For example, 200 commonly indicates success, 404 indicates that a resource was not found, and 500 indicates a server-side error.",
        },
        {
          heading: "REST APIs",
          content:
            "A REST API exposes resources through endpoints. An Android application can call these endpoints to retrieve or manipulate information stored on a remote server.",
        },
      ],
      mistakes: [
        "Using the wrong HTTP method for an operation.",
        "Ignoring HTTP status codes.",
        "Assuming every API request will succeed.",
      ],
      quiz: [
        {
          question: "Which HTTP method is commonly used to retrieve data?",
          options: ["GET", "POST", "DELETE", "PATCH"],
          answer: "GET",
        },
        {
          question: "What does HTTP status code 404 commonly indicate?",
          options: [
            "Resource not found",
            "Successful request",
            "Server started",
            "Data successfully deleted",
          ],
          answer: "Resource not found",
        },
        {
          question: "What does a REST API expose?",
          options: [
            "Resources through endpoints",
            "Only Android layouts",
            "Only local files",
            "Only device sensors",
          ],
          answer: "Resources through endpoints",
        },
      ],
    },
  },

  {
    id: "retrofit",
    title: "Retrofit",
    lesson: {
      overview:
        "Retrofit is a popular Android networking library that makes it easier to communicate with REST APIs. It converts API responses into usable application objects.",
      sections: [
        {
          heading: "Retrofit Overview",
          content:
            "Retrofit allows developers to define API endpoints as Kotlin interfaces. The library handles much of the HTTP communication and provides a structured way to work with responses.",
        },
        {
          heading: "API Interface",
          content:
            "Developers define functions representing API operations and annotate them with HTTP methods such as GET or POST. Retrofit uses these definitions to make requests.",
        },
        {
          heading: "Converter Support",
          content:
            "Retrofit can work with converters to transform response formats such as JSON into Kotlin objects. This reduces the amount of manual parsing code required.",
        },
      ],
      mistakes: [
        "Using incorrect endpoint paths.",
        "Forgetting to configure the appropriate converter.",
        "Not handling failed network requests.",
      ],
      quiz: [
        {
          question: "What is Retrofit commonly used for?",
          options: [
            "Communicating with REST APIs",
            "Designing Android icons",
            "Creating XML layouts",
            "Managing device brightness",
          ],
          answer: "Communicating with REST APIs",
        },
        {
          question: "How are Retrofit API endpoints commonly defined?",
          options: [
            "Using Kotlin interfaces and annotations",
            "Using ImageViews",
            "Using Android themes only",
            "Using RecyclerView adapters",
          ],
          answer: "Using Kotlin interfaces and annotations",
        },
        {
          question: "What can a Retrofit converter help with?",
          options: [
            "Converting JSON responses into application objects",
            "Creating Activities",
            "Changing screen orientation",
            "Installing Android Studio",
          ],
          answer: "Converting JSON responses into application objects",
        },
      ],
    },
  },

  {
    id: "api-requests",
    title: "Making API Requests",
    lesson: {
      overview:
        "Making an API request involves defining an endpoint, sending the appropriate request, receiving the response, and processing the returned data.",
      sections: [
        {
          heading: "Request Structure",
          content:
            "An API request can contain a URL or endpoint, HTTP method, headers, query parameters, path parameters, and sometimes a request body.",
        },
        {
          heading: "Asynchronous Requests",
          content:
            "Network requests should be performed asynchronously so that the application's main UI thread remains responsive. Kotlin coroutines are commonly used for asynchronous work.",
        },
        {
          heading: "Processing Responses",
          content:
            "After receiving a response, the application should check whether the request succeeded, process the returned data, and update the UI appropriately.",
        },
      ],
      mistakes: [
        "Blocking the main thread with network operations.",
        "Not checking whether a response was successful.",
        "Updating the UI with invalid or incomplete response data.",
      ],
      quiz: [
        {
          question: "Why should network requests be asynchronous?",
          options: [
            "To keep the UI responsive",
            "To increase screen brightness",
            "To change the application icon",
            "To create XML files",
          ],
          answer: "To keep the UI responsive",
        },
        {
          question: "Which can be part of an API request?",
          options: [
            "Headers and query parameters",
            "Only a TextView",
            "Only an Activity",
            "Only an image",
          ],
          answer: "Headers and query parameters",
        },
        {
          question: "What should an application do after receiving a response?",
          options: [
            "Check the result and process the returned data",
            "Always assume success",
            "Close the application",
            "Delete the request",
          ],
          answer: "Check the result and process the returned data",
        },
      ],
    },
  },

  {
    id: "json-parsing",
    title: "JSON Parsing",
    lesson: {
      overview:
        "JSON is a common data format used by web APIs. Android applications can parse JSON responses and convert them into objects that can be used by the application.",
      sections: [
        {
          heading: "JSON Structure",
          content:
            "JSON represents information using objects, arrays, key-value pairs, strings, numbers, Boolean values, and null values.",
        },
        {
          heading: "Serialization and Deserialization",
          content:
            "Serialization converts application objects into a transferable format, while deserialization converts received data such as JSON into application objects.",
        },
        {
          heading: "Using API Models",
          content:
            "Applications commonly define data models that represent the structure of an API response. A JSON converter can then map response fields to those models.",
        },
      ],
      mistakes: [
        "Assuming JSON fields will always be present.",
        "Using incorrect field names in data models.",
        "Not handling null or unexpected values.",
      ],
      quiz: [
        {
          question: "What is JSON commonly used for?",
          options: [
            "Representing data exchanged between applications",
            "Designing Android layouts",
            "Creating device drivers",
            "Compiling Kotlin",
          ],
          answer: "Representing data exchanged between applications",
        },
        {
          question: "What does deserialization generally do?",
          options: [
            "Converts received data into application objects",
            "Deletes JSON data",
            "Creates an Activity",
            "Starts the emulator",
          ],
          answer: "Converts received data into application objects",
        },
        {
          question: "Why should an application handle missing JSON fields?",
          options: [
            "API responses may contain missing or unexpected data",
            "Android cannot display text",
            "JSON always contains images",
            "It changes the device wallpaper",
          ],
          answer: "API responses may contain missing or unexpected data",
        },
      ],
    },
  },

  {
    id: "api-errors",
    title: "Handling API Errors",
    lesson: {
      overview:
        "Network communication can fail for many reasons. Android applications should handle errors gracefully and provide useful feedback instead of crashing.",
      sections: [
        {
          heading: "Types of Errors",
          content:
            "Errors can result from no internet connection, server failures, invalid requests, authentication problems, timeouts, or malformed responses.",
        },
        {
          heading: "HTTP Errors",
          content:
            "The application should examine HTTP status codes and respond appropriately. Different status codes can represent client errors, missing resources, authentication issues, or server problems.",
        },
        {
          heading: "User-Friendly Handling",
          content:
            "When a request fails, the application can display an appropriate message, allow the user to retry, or provide an alternative action rather than terminating unexpectedly.",
        },
      ],
      mistakes: [
        "Allowing network exceptions to crash the application.",
        "Showing technical error messages directly to users.",
        "Failing to provide a retry option when appropriate.",
      ],
      quiz: [
        {
          question: "What can cause an API request to fail?",
          options: [
            "Network problems or server errors",
            "Only screen size",
            "Only font size",
            "Only the application theme",
          ],
          answer: "Network problems or server errors",
        },
        {
          question: "What should an application do when a network request fails?",
          options: [
            "Handle the error gracefully",
            "Always crash",
            "Delete all application data",
            "Restart Android Studio",
          ],
          answer: "Handle the error gracefully",
        },
        {
          question: "Which can be a useful response to a temporary network failure?",
          options: [
            "Allowing the user to retry",
            "Deleting the application",
            "Changing the device wallpaper",
            "Closing Android Studio",
          ],
          answer: "Allowing the user to retry",
        },
      ],
    },
  },

  {
    id: "api-integration",
    title: "API Integration in Android Apps",
    lesson: {
      overview:
        "API integration connects an Android application's user interface and application logic with remote services. A clean architecture helps keep networking code organized and maintainable.",
      sections: [
        {
          heading: "Typical Integration Flow",
          content:
            "A common flow is UI → ViewModel or application logic → repository or data layer → API service → server. The response then travels back through the data layer to the UI.",
        },
        {
          heading: "Loading and Error States",
          content:
            "A good application should represent different states such as loading, successful data retrieval, and errors. This allows users to understand what is happening during a network operation.",
        },
        {
          heading: "Practical Example",
          content:
            "A weather application can call a weather API, receive JSON data, convert it into Kotlin objects, and display the temperature and weather conditions on the screen.",
        },
      ],
      mistakes: [
        "Putting all networking logic directly inside an Activity.",
        "Ignoring loading and error states.",
        "Hard-coding sensitive API keys inside publicly distributed application code.",
      ],
      quiz: [
        {
          question: "Which is a common flow for API integration?",
          options: [
            "UI → data layer → API service → server",
            "Button → wallpaper → server",
            "TextView → emulator → database",
            "ImageView → Android Studio → router",
          ],
          answer: "UI → data layer → API service → server",
        },
        {
          question: "Which states should a network-based UI commonly represent?",
          options: [
            "Loading, success, and error",
            "Only success",
            "Only loading",
            "Only error",
          ],
          answer: "Loading, success, and error",
        },
        {
          question: "Why should sensitive API keys be protected?",
          options: [
            "They may be exposed if placed directly in distributed application code",
            "They change the screen size",
            "They prevent XML layouts",
            "They are required only for buttons",
          ],
          answer:
            "They may be exposed if placed directly in distributed application code",
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

const NetworkingAPIs = ({ goBack }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-networking-apis", subtopics);
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
      ? Math.round((completedTopics.length / subtopics.length) * 100)
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
            🌐 Networking & APIs
          </h1>

          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "15px",
            }}
          >
            Learn how Android applications communicate with servers
            and integrate REST APIs.
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

export default NetworkingAPIs;