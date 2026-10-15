import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "storage-basics",
    title: "Android Data Storage Basics",
    lesson: {
      overview:
        "Android provides different ways to store application data depending on how much data is needed, how long it should remain available, and whether it should be private or shared.",
      sections: [
        {
          heading: "Why Data Storage Matters",
          content:
            "Android applications often need to store information such as user preferences, login settings, files, or structured application data. Choosing the appropriate storage method helps keep data organized and available when the application needs it.",
        },
        {
          heading: "Common Storage Options",
          content:
            "Common Android storage mechanisms include SharedPreferences, DataStore, SQLite databases, Room, and files. Each option is designed for different types of data and use cases.",
        },
        {
          heading: "Choosing Storage",
          content:
            "Simple key-value settings can use DataStore, while structured data with relationships is better suited to a database such as Room. The choice should depend on the structure and requirements of the application.",
        },
      ],
      mistakes: [
        "Using a database for simple settings unnecessarily.",
        "Storing sensitive information without considering security.",
        "Choosing a storage method without considering the lifetime of the data.",
      ],
      quiz: [
        {
          question: "Why do Android applications need data storage?",
          options: [
            "To store information that the application needs later",
            "Only to display animations",
            "Only to change the screen color",
            "To replace the Android operating system",
          ],
          answer: "To store information that the application needs later",
        },
        {
          question: "Which is suitable for structured application data?",
          options: ["A database", "Only an ImageView", "A Button", "A TextView"],
          answer: "A database",
        },
        {
          question: "What should influence the choice of storage method?",
          options: [
            "The type and requirements of the data",
            "The phone wallpaper",
            "The application icon only",
            "The device ringtone",
          ],
          answer: "The type and requirements of the data",
        },
      ],
    },
  },

  {
    id: "shared-preferences",
    title: "SharedPreferences",
    lesson: {
      overview:
        "SharedPreferences is a key-value storage mechanism traditionally used for storing small amounts of simple application data such as settings and preferences.",
      sections: [
        {
          heading: "Key-Value Storage",
          content:
            "SharedPreferences stores data using a key and its corresponding value. Common values include Boolean, String, Int, Float, and Long types.",
        },
        {
          heading: "Typical Uses",
          content:
            "It can be used for simple settings such as whether a user has completed an introduction, selected a particular preference, or enabled a feature.",
        },
        {
          heading: "Limitations",
          content:
            "SharedPreferences is intended for relatively small key-value data. It is not designed to replace a relational database for complex structured information.",
        },
      ],
      mistakes: [
        "Trying to store large structured datasets in SharedPreferences.",
        "Using unclear or inconsistent keys.",
        "Assuming SharedPreferences is appropriate for every type of application data.",
      ],
      quiz: [
        {
          question: "What type of storage does SharedPreferences provide?",
          options: [
            "Key-value storage",
            "Graph storage",
            "Video streaming",
            "Network routing",
          ],
          answer: "Key-value storage",
        },
        {
          question: "Which is a suitable use of SharedPreferences?",
          options: [
            "Storing simple application settings",
            "Storing a large relational database",
            "Rendering a RecyclerView",
            "Creating an Android Activity",
          ],
          answer: "Storing simple application settings",
        },
        {
          question: "Which data type can traditionally be stored in SharedPreferences?",
          options: ["Boolean", "Only images", "Only videos", "Only Activities"],
          answer: "Boolean",
        },
      ],
    },
  },

  {
    id: "datastore",
    title: "DataStore",
    lesson: {
      overview:
        "DataStore is a modern Android data storage solution designed for storing small amounts of data asynchronously and safely.",
      sections: [
        {
          heading: "What is DataStore?",
          content:
            "DataStore provides a modern approach for storing key-value preferences or typed data. It uses Kotlin coroutines and Flow to work with data asynchronously.",
        },
        {
          heading: "Preferences DataStore",
          content:
            "Preferences DataStore stores data using key-value pairs. It is useful for application settings and preferences.",
        },
        {
          heading: "Why Use DataStore?",
          content:
            "DataStore is designed to handle data asynchronously and provides a modern alternative to SharedPreferences for many preference-storage scenarios.",
        },
      ],
      mistakes: [
        "Using DataStore as a replacement for a complex relational database.",
        "Ignoring asynchronous operations when working with DataStore.",
        "Using DataStore without understanding the type of data being stored.",
      ],
      quiz: [
        {
          question: "What is DataStore mainly designed for?",
          options: [
            "Small amounts of application data and preferences",
            "Replacing the Android OS",
            "Rendering images",
            "Creating animations",
          ],
          answer: "Small amounts of application data and preferences",
        },
        {
          question: "Which Kotlin feature is commonly used with DataStore?",
          options: ["Flow", "Canvas only", "Intent only", "XML parser only"],
          answer: "Flow",
        },
        {
          question: "DataStore is considered a modern alternative to which older preference mechanism?",
          options: [
            "SharedPreferences",
            "RecyclerView",
            "ConstraintLayout",
            "Activity",
          ],
          answer: "SharedPreferences",
        },
      ],
    },
  },

  {
    id: "sqlite",
    title: "SQLite",
    lesson: {
      overview:
        "SQLite is a lightweight relational database engine available on Android. It allows applications to store structured data using tables and SQL queries.",
      sections: [
        {
          heading: "Relational Database",
          content:
            "SQLite stores structured information in tables consisting of rows and columns. Applications can use SQL statements to create, read, update, and delete data.",
        },
        {
          heading: "SQLiteOpenHelper",
          content:
            "Android provides SQLiteOpenHelper to help applications create and manage SQLite databases, including database creation and version management.",
        },
        {
          heading: "SQL Operations",
          content:
            "SQLite supports common database operations such as INSERT, SELECT, UPDATE, and DELETE. These operations allow applications to manage structured local data.",
        },
      ],
      mistakes: [
        "Writing inefficient database queries.",
        "Forgetting to handle database version changes.",
        "Using SQLite directly when a higher-level abstraction such as Room would simplify the application.",
      ],
      quiz: [
        {
          question: "What type of database is SQLite?",
          options: [
            "Relational database",
            "Document-only database",
            "Image editor",
            "Web browser",
          ],
          answer: "Relational database",
        },
        {
          question: "Which SQL operation retrieves data?",
          options: ["SELECT", "DELETE", "INSERT", "UPDATE"],
          answer: "SELECT",
        },
        {
          question: "Which Android helper assists with SQLite database management?",
          options: [
            "SQLiteOpenHelper",
            "RecyclerViewHelper",
            "ActivityHelper",
            "IntentHelper",
          ],
          answer: "SQLiteOpenHelper",
        },
      ],
    },
  },

  {
    id: "room",
    title: "Room Database",
    lesson: {
      overview:
        "Room is an Android persistence library that provides an abstraction layer over SQLite. It makes database access easier to organize and work with in modern Android applications.",
      sections: [
        {
          heading: "Room Components",
          content:
            "A Room database commonly consists of entities, a DAO (Data Access Object), and a database class. Entities represent stored data, while DAOs define database operations.",
        },
        {
          heading: "Entities",
          content:
            "An entity represents a table in the database. Its fields represent the information stored for each record.",
        },
        {
          heading: "DAOs",
          content:
            "A DAO provides methods for accessing database data. It can define operations such as inserting, updating, deleting, and querying records.",
        },
      ],
      mistakes: [
        "Forgetting to define entities correctly.",
        "Putting database logic throughout UI code instead of using a DAO.",
        "Ignoring database versioning and migrations.",
      ],
      quiz: [
        {
          question: "Room provides an abstraction over which database engine?",
          options: ["SQLite", "MongoDB", "Redis", "Firebase Storage"],
          answer: "SQLite",
        },
        {
          question: "What does DAO stand for?",
          options: [
            "Data Access Object",
            "Data Android Operation",
            "Database Application Output",
            "Data Activity Object",
          ],
          answer: "Data Access Object",
        },
        {
          question: "What does a Room Entity generally represent?",
          options: [
            "A database table",
            "An Android screen",
            "A button",
            "A network request",
          ],
          answer: "A database table",
        },
      ],
    },
  },

  {
    id: "crud",
    title: "CRUD Operations",
    lesson: {
      overview:
        "CRUD stands for Create, Read, Update, and Delete. These four operations form the foundation of managing stored application data.",
      sections: [
        {
          heading: "Create",
          content:
            "Create means adding new records to storage. For example, an application can create a new user record or save a new task.",
        },
        {
          heading: "Read and Update",
          content:
            "Read retrieves stored information, while Update modifies existing records. Together they allow applications to display and change previously stored data.",
        },
        {
          heading: "Delete",
          content:
            "Delete removes records that are no longer required. CRUD operations are commonly implemented through database queries or Room DAO methods.",
        },
      ],
      mistakes: [
        "Confusing Update with Create.",
        "Deleting records without checking which record is being targeted.",
        "Not validating data before storing it.",
      ],
      quiz: [
        {
          question: "What does CRUD stand for?",
          options: [
            "Create, Read, Update, Delete",
            "Create, Run, Upload, Download",
            "Code, Read, Use, Debug",
            "Connect, Run, Update, Deploy",
          ],
          answer: "Create, Read, Update, Delete",
        },
        {
          question: "Which operation modifies an existing record?",
          options: ["Update", "Create", "Read", "Delete"],
          answer: "Update",
        },
        {
          question: "Which operation removes stored data?",
          options: ["Delete", "Read", "Create", "Update"],
          answer: "Delete",
        },
      ],
    },
  },

  {
    id: "choosing-storage",
    title: "Choosing the Right Storage Method",
    lesson: {
      overview:
        "Different Android storage mechanisms are appropriate for different requirements. Selecting the right method helps keep an application efficient and maintainable.",
      sections: [
        {
          heading: "Simple Preferences",
          content:
            "For small preference-style data, DataStore is commonly appropriate. Examples include application settings and simple user preferences.",
        },
        {
          heading: "Structured Data",
          content:
            "For structured local data involving multiple records and relationships, Room provides a convenient database abstraction over SQLite.",
        },
        {
          heading: "Making the Decision",
          content:
            "Consider the amount of data, its structure, access requirements, persistence needs, and application architecture before choosing a storage mechanism.",
        },
      ],
      mistakes: [
        "Choosing a storage mechanism only because it is familiar.",
        "Using simple key-value storage for relational data.",
        "Ignoring the application's future data requirements.",
      ],
      quiz: [
        {
          question: "Which storage solution is suitable for structured local database data?",
          options: ["Room", "TextView", "Button", "Intent"],
          answer: "Room",
        },
        {
          question: "Which factor should be considered when choosing storage?",
          options: [
            "Data structure and application requirements",
            "Only the application icon",
            "Only the screen size",
            "Only the device wallpaper",
          ],
          answer: "Data structure and application requirements",
        },
        {
          question: "Which is commonly suitable for simple preferences?",
          options: ["DataStore", "Room only", "RecyclerView", "Fragment"],
          answer: "DataStore",
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

const DataStorage = ({ goBack }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-data-storage", subtopics);
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
        background: "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
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
            boxShadow: "0 8px 24px rgba(37, 99, 235, 0.08)",
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
            💾 Data Storage
          </h1>

          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "15px",
            }}
          >
            Learn how Android applications store preferences, structured data,
            and persistent information.
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
                  boxShadow: "0 5px 15px rgba(37, 99, 235, 0.06)",
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
                  {isCompleted ? "✓ Completed" : "Not completed"}
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
                  {isCompleted ? "Review Lesson" : "Open Lesson"}
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
            boxShadow: "0 8px 24px rgba(37, 99, 235, 0.08)",
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
                Lesson {activeTopicIndex + 1} of {subtopics.length}
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

          {(activeTopic.lesson.sections || []).map((section, index) => (
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
          ))}

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
              {(activeTopic.lesson.mistakes || []).map((mistake, index) => (
                <li key={index}>{mistake}</li>
              ))}
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
                Question {questionIndex + 1} of {quizQuestions.length}
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
                    const isSelected = selectedAnswer === option;
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
                      Correct answer: {currentQuestion.answer}
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
                      {questionIndex < quizQuestions.length - 1
                        ? "Next Question →"
                        : "Complete Lesson ✓"}
                    </button>
                  )}
                </div>

                {submitted &&
                  questionIndex === quizQuestions.length - 1 && (
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
                  activeTopicIndex === 0 ? "#f1f5f9" : "white",
                color:
                  activeTopicIndex === 0 ? "#94a3b8" : "#2563eb",
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
              disabled={activeTopicIndex === subtopics.length - 1}
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

export default DataStorage;