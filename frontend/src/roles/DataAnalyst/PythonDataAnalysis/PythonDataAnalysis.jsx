// =====================================================
// PYTHON FOR DATA ANALYSIS TOPIC
// =====================================================

import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// SHUFFLE QUIZ OPTIONS
// =====================================================

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

// =====================================================
// PYTHON FOR DATA ANALYSIS LESSONS
// =====================================================

const subtopics = [
  // ===================================================
  // 1. PYTHON BASICS
  // ===================================================

  {
    id: "python-basics",
    title: "Python Basics",
    icon: "🐍",

    lesson: {
      overview:
        "Python is one of the most widely used programming languages for data analysis. Its simple syntax and large ecosystem make it useful for working with data, performing calculations, and automating analysis tasks.",

      sections: [
        {
          heading: "Variables and Data Types",
          content:
            "Python variables store values such as numbers, strings, lists, and dictionaries. Common data types include integers, floating-point numbers, strings, booleans, lists, tuples, sets, and dictionaries.",
        },
        {
          heading: "Conditions and Loops",
          content:
            "Conditional statements such as if, elif, and else allow programs to make decisions. Loops such as for and while allow repeated operations over data or a sequence of values.",
        },
        {
          heading: "Functions",
          content:
            "Functions are reusable blocks of code that perform a specific task. They help organize data analysis programs and make repeated operations easier to maintain.",
        },
      ],

      mistakes: [
        "Using a variable before assigning a value to it.",
        "Confusing lists, tuples, and dictionaries.",
        "Writing repetitive code instead of creating reusable functions.",
      ],

      quiz: [
        {
          question:
            "Which language is commonly used for data analysis?",
          options: [
            "Python",
            "HTML",
            "CSS",
            "SQL Server",
          ],
          answer: "Python",
        },
        {
          question:
            "Which keyword is used to define a function in Python?",
          options: [
            "def",
            "function",
            "func",
            "define",
          ],
          answer: "def",
        },
        {
          question:
            "Which statement is used for conditional logic?",
          options: [
            "if",
            "loop",
            "repeat",
            "check",
          ],
          answer: "if",
        },
      ],
    },
  },

  // ===================================================
  // 2. NUMPY
  // ===================================================

  {
    id: "numpy",
    title: "NumPy",
    icon: "🔢",

    lesson: {
      overview:
        "NumPy is a Python library designed for numerical computing. It provides efficient arrays and mathematical operations that form the foundation for many data science workflows.",

      sections: [
        {
          heading: "NumPy Arrays",
          content:
            "A NumPy array is a structured collection of values that supports efficient numerical operations. Arrays can be one-dimensional or multidimensional and are generally more efficient for numerical computation than standard Python lists.",
        },
        {
          heading: "Array Operations",
          content:
            "NumPy supports vectorized operations, meaning calculations can be performed on entire arrays without explicitly writing a loop for every element. Operations include addition, subtraction, multiplication, division, and mathematical functions.",
        },
        {
          heading: "Indexing and Reshaping",
          content:
            "NumPy arrays can be accessed using indexes and slices. Reshaping changes the dimensions of an array while keeping the same underlying values when the requested shape is compatible.",
        },
      ],

      mistakes: [
        "Confusing NumPy arrays with regular Python lists.",
        "Trying to reshape an array into an incompatible number of elements.",
        "Ignoring array dimensions when performing calculations.",
      ],

      quiz: [
        {
          question:
            "What is NumPy primarily used for?",
          options: [
            "Numerical computing",
            "Web page styling",
            "Database administration",
            "Mobile app development",
          ],
          answer: "Numerical computing",
        },
        {
          question:
            "What is a major advantage of NumPy arrays?",
          options: [
            "Efficient numerical operations",
            "They only store text",
            "They replace databases",
            "They automatically create dashboards",
          ],
          answer: "Efficient numerical operations",
        },
        {
          question:
            "What does reshaping an array change?",
          options: [
            "Its dimensions",
            "Its programming language",
            "Its database",
            "Its file extension",
          ],
          answer: "Its dimensions",
        },
      ],
    },
  },

  // ===================================================
  // 3. PANDAS
  // ===================================================

  {
    id: "pandas",
    title: "Pandas",
    icon: "🐼",

    lesson: {
      overview:
        "Pandas is a Python library designed for working with structured and tabular data. It provides convenient data structures and tools for cleaning, transforming, analyzing, and exploring datasets.",

      sections: [
        {
          heading: "Series and DataFrame",
          content:
            "A Pandas Series is a one-dimensional labeled data structure. A DataFrame is a two-dimensional labeled structure that organizes data into rows and columns.",
        },
        {
          heading: "Reading Data",
          content:
            "Pandas can read data from common formats such as CSV and Excel files. Functions such as read_csv() are frequently used to load datasets into a DataFrame.",
        },
        {
          heading: "Inspecting Data",
          content:
            "Methods such as head(), tail(), info(), and describe() help analysts understand the structure, data types, and basic statistics of a dataset.",
        },
      ],

      mistakes: [
        "Forgetting to inspect the dataset after loading it.",
        "Assuming every column has the correct data type.",
        "Confusing a Series with a DataFrame.",
      ],

      quiz: [
        {
          question:
            "Which Pandas structure is two-dimensional?",
          options: [
            "DataFrame",
            "Series",
            "Tuple",
            "Set",
          ],
          answer: "DataFrame",
        },
        {
          question:
            "Which function is commonly used to read a CSV file?",
          options: [
            "read_csv()",
            "open_csv()",
            "load_csv()",
            "csv_read_file()",
          ],
          answer: "read_csv()",
        },
        {
          question:
            "Which method provides information about DataFrame columns and data types?",
          options: [
            "info()",
            "details()",
            "columns_info()",
            "inspect()",
          ],
          answer: "info()",
        },
      ],
    },
  },

  // ===================================================
  // 4. DATAFRAMES
  // ===================================================

  {
    id: "dataframes",
    title: "DataFrames",
    icon: "🗂️",

    lesson: {
      overview:
        "A Pandas DataFrame is one of the most important structures for data analysis in Python. It represents tabular data using labeled rows and columns.",

      sections: [
        {
          heading: "Selecting Columns",
          content:
            "Columns can be selected using their names. For example, df['salary'] selects a single column, while a list of column names can be used to select multiple columns.",
        },
        {
          heading: "Selecting Rows",
          content:
            "Rows can be selected using methods such as loc and iloc. loc primarily works with labels, while iloc works with integer-based positions.",
        },
        {
          heading: "Sorting and Grouping",
          content:
            "DataFrames can be sorted using sort_values(). The groupby() operation allows analysts to split data into groups and perform calculations such as sums, averages, and counts.",
        },
      ],

      mistakes: [
        "Mixing up loc and iloc.",
        "Using incorrect column names.",
        "Forgetting that groupby() returns grouped data that usually needs an aggregation or transformation.",
      ],

      quiz: [
        {
          question:
            "What does df['salary'] generally select?",
          options: [
            "The salary column",
            "The salary row",
            "The entire database",
            "Only the first value",
          ],
          answer: "The salary column",
        },
        {
          question:
            "Which Pandas indexer is primarily label-based?",
          options: [
            "loc",
            "iloc",
            "index",
            "labeler",
          ],
          answer: "loc",
        },
        {
          question:
            "Which operation is commonly used to group DataFrame rows?",
          options: [
            "groupby()",
            "cluster()",
            "divideby()",
            "splitrows()",
          ],
          answer: "groupby()",
        },
      ],
    },
  },

  // ===================================================
  // 5. DATA CLEANING WITH PANDAS
  // ===================================================

  {
    id: "data-cleaning-pandas",
    title: "Data Cleaning with Pandas",
    icon: "🧹",

    lesson: {
      overview:
        "Real-world datasets often contain missing values, duplicates, incorrect data types, and inconsistent information. Pandas provides tools for identifying and cleaning these problems.",

      sections: [
        {
          heading: "Missing Values",
          content:
            "Missing values can be identified using methods such as isna() and isnull(). Depending on the situation, missing values can be removed using dropna() or replaced using fillna().",
        },
        {
          heading: "Duplicates",
          content:
            "Duplicate records can affect analysis by causing some observations to be counted more than once. Pandas provides duplicated() for identifying duplicates and drop_duplicates() for removing them.",
        },
        {
          heading: "Data Types",
          content:
            "Correct data types are important for analysis. The astype() method can convert values to an appropriate type, while functions such as to_datetime() are useful for converting date information.",
        },
      ],

      mistakes: [
        "Deleting missing values without considering why they are missing.",
        "Removing duplicates without checking whether repeated records are actually valid.",
        "Leaving numeric or date columns stored as strings.",
      ],

      quiz: [
        {
          question:
            "Which method can be used to remove rows containing missing values?",
          options: [
            "dropna()",
            "remove_missing()",
            "delete_na()",
            "clearna()",
          ],
          answer: "dropna()",
        },
        {
          question:
            "Which method removes duplicate rows?",
          options: [
            "drop_duplicates()",
            "remove_duplicates()",
            "delete_duplicates()",
            "clear_duplicates()",
          ],
          answer: "drop_duplicates()",
        },
        {
          question:
            "Which function is useful for converting values to datetime?",
          options: [
            "to_datetime()",
            "to_date()",
            "convert_date()",
            "datetime_convert()",
          ],
          answer: "to_datetime()",
        },
      ],
    },
  },

  // ===================================================
  // 6. EXPLORATORY DATA ANALYSIS
  // ===================================================

  {
    id: "exploratory-data-analysis",
    title: "Exploratory Data Analysis",
    icon: "🔍",

    lesson: {
      overview:
        "Exploratory Data Analysis (EDA) is the process of investigating a dataset to discover patterns, relationships, anomalies, and important characteristics before deeper analysis or modeling.",

      sections: [
        {
          heading: "Understanding the Dataset",
          content:
            "EDA begins by examining the dataset's shape, columns, data types, missing values, and basic statistics. This helps analysts understand what information is available and what cleaning may be required.",
        },
        {
          heading: "Finding Patterns",
          content:
            "Analysts use summaries, grouping, filtering, and visualizations to identify trends and relationships. Comparing variables can reveal useful patterns that may not be obvious from raw data.",
        },
        {
          heading: "Detecting Outliers",
          content:
            "Outliers are observations that are unusually different from other values. They can be identified using statistical summaries, visualizations, or methods such as the interquartile range.",
        },
      ],

      mistakes: [
        "Starting analysis without understanding the dataset.",
        "Assuming every unusual value is an error.",
        "Ignoring visual exploration when numerical summaries are insufficient.",
      ],

      quiz: [
        {
          question:
            "What is the main purpose of EDA?",
          options: [
            "Discover patterns and understand the dataset",
            "Immediately deploy a machine learning model",
            "Create a database server",
            "Write a mobile application",
          ],
          answer:
            "Discover patterns and understand the dataset",
        },
        {
          question:
            "What is an outlier?",
          options: [
            "An unusually different observation",
            "A missing column name",
            "A database connection",
            "A duplicate Python package",
          ],
          answer:
            "An unusually different observation",
        },
        {
          question:
            "Which activity is commonly part of EDA?",
          options: [
            "Examining distributions and relationships",
            "Installing an operating system",
            "Designing a mobile interface",
            "Creating a network router",
          ],
          answer:
            "Examining distributions and relationships",
        },
      ],
    },
  },
];

// =====================================================
// PYTHON FOR DATA ANALYSIS COMPONENT
// =====================================================

function PythonDataAnalysis({ goBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const { completed, markComplete: saveProgress } = useLearningProgress("dataanalyst-pythondataanalysis", subtopics);

  const [quizAnswers, setQuizAnswers] = useState({});

  const [quizSubmitted, setQuizSubmitted] = useState({});

  // ===================================================
  // SHUFFLED QUIZ OPTIONS
  // ===================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map(
        (question) => shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  // ===================================================
  // PROGRESS
  // ===================================================

  const completedCount = completed.length;

  const overallProgress =
    (completedCount / subtopics.length) * 100;

  // ===================================================
  // OPEN TOPIC
  // ===================================================

  const openTopic = (topic) => {
    setSelectedTopic(topic);
  };

  // ===================================================
  // CLOSE TOPIC
  // ===================================================

  const closeTopic = () => {
    setSelectedTopic(null);
  };

  // ===================================================
  // MARK LESSON COMPLETE
  // ===================================================

  const markComplete = (topicId) => {
    if (!topicId) return;
    saveProgress(topicId);
  };

  // ===================================================
  // SELECT QUIZ ANSWER
  // ===================================================

  const selectAnswer = (
    topicId,
    questionIndex,
    answer
  ) => {
    setQuizAnswers((previous) => ({
      ...previous,
      [`${topicId}-${questionIndex}`]: answer,
    }));
  };

  // ===================================================
  // CHECK QUIZ
  // ===================================================

  const checkQuiz = async (topic) => {

    const score = getQuizScore(topic);

    await saveQuizResult({
      subject: "Data Analyst",
      role: "Data Analyst",
      topic: topic.title,
      topicId: topic.id,
      score,
      totalQuestions: topic.lesson.quiz.length
    });
    setQuizSubmitted((previous) => ({
      ...previous,
      [topic.id]: true,
    }));
  };

  // ===================================================
  // QUIZ SCORE
  // ===================================================

  const getQuizScore = (topic) => {
    let score = 0;

    topic.lesson.quiz.forEach((question, index) => {
      const selectedAnswer =
        quizAnswers[`${topic.id}-${index}`];

      if (selectedAnswer === question.answer) {
        score++;
      }
    });

    return score;
  };

  // ===================================================
  // PREVIOUS LESSON
  // ===================================================

  const goToPrevious = () => {
    const currentIndex = subtopics.findIndex(
      (topic) => topic.id === selectedTopic.id
    );

    if (currentIndex > 0) {
      setSelectedTopic(
        subtopics[currentIndex - 1]
      );
    }
  };

  // ===================================================
  // NEXT LESSON
  // ===================================================

  const goToNext = () => {
    const currentIndex = subtopics.findIndex(
      (topic) => topic.id === selectedTopic.id
    );

    if (currentIndex < subtopics.length - 1) {
      setSelectedTopic(
        subtopics[currentIndex + 1]
      );
    }
  };

  // =====================================================
  // LESSON PAGE
  // =====================================================

  if (selectedTopic) {
    const currentIndex = subtopics.findIndex(
      (topic) => topic.id === selectedTopic.id
    );

    const quizSubmittedForTopic =
      quizSubmitted[selectedTopic.id] || false;

    const score = getQuizScore(selectedTopic);

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff, #ffffff)",
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Back Button */}

          <button
            onClick={closeTopic}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              cursor: "pointer",
              fontSize: "15px",
              marginBottom: "25px",
            }}
          >
            ← Back to Python for Data Analysis
          </button>

          {/* Lesson Card */}

          <div
            style={{
              background: "white",
              border: "1px solid #bfdbfe",
              borderRadius: "14px",
              padding: "30px",
              boxShadow:
                "0 4px 12px rgba(37, 99, 235, 0.08)",
            }}
          >
            <div
              style={{
                color: "#64748b",
                marginBottom: "8px",
              }}
            >
              Lesson {currentIndex + 1} of{" "}
              {subtopics.length}
            </div>

            <h1
              style={{
                color: "#1e3a8a",
                marginTop: "0",
              }}
            >
              {selectedTopic.icon}{" "}
              {selectedTopic.title}
            </h1>

            {/* Overview */}

            <h2 style={{ color: "#1e40af" }}>
              📖 Overview
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.7",
              }}
            >
              {selectedTopic.lesson.overview}
            </p>

            {/* Sections */}

            {selectedTopic.lesson.sections.map(
              (section, index) => (
                <div key={index}>
                  <h2
                    style={{
                      color: "#1e40af",
                      marginTop: "28px",
                    }}
                  >
                    {index + 1}.{" "}
                    {section.heading}
                  </h2>

                  <p
                    style={{
                      color: "#475569",
                      lineHeight: "1.7",
                    }}
                  >
                    {section.content}
                  </p>
                </div>
              )
            )}

            {/* Common Mistakes */}

            <div
              style={{
                marginTop: "30px",
                padding: "20px",
                background: "#eff6ff",
                borderRadius: "10px",
                border: "1px solid #bfdbfe",
              }}
            >
              <h2
                style={{
                  color: "#1e40af",
                  marginTop: "0",
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
                {selectedTopic.lesson.mistakes.map(
                  (mistake, index) => (
                    <li key={index}>
                      {mistake}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Quiz */}

            <div style={{ marginTop: "35px" }}>
              <h2 style={{ color: "#1e40af" }}>
                🧠 Quick Quiz
              </h2>

              {selectedTopic.lesson.quiz.map(
                (question, questionIndex) => {
                  const options =
                    shuffledQuizOptions[
                      selectedTopic.id
                    ][questionIndex];

                  const selectedAnswer =
                    quizAnswers[
                      `${selectedTopic.id}-${questionIndex}`
                    ];

                  return (
                    <div
                      key={questionIndex}
                      style={{
                        marginBottom: "28px",
                        padding: "20px",
                        border:
                          "1px solid #dbeafe",
                        borderRadius: "10px",
                      }}
                    >
                      <h3
                        style={{
                          color: "#1e3a8a",
                          marginTop: "0",
                        }}
                      >
                        {questionIndex + 1}.{" "}
                        {question.question}
                      </h3>

                      {options.map((option) => {
                        const isSelected =
                          selectedAnswer ===
                          option;

                        const isCorrect =
                          option ===
                          question.answer;

                        let background = "white";

                        if (
                          quizSubmittedForTopic
                        ) {
                          if (isCorrect) {
                            background =
                              "#dcfce7";
                          } else if (
                            isSelected
                          ) {
                            background =
                              "#fee2e2";
                          }
                        } else if (
                          isSelected
                        ) {
                          background =
                            "#dbeafe";
                        }

                        return (
                          <button
                            key={option}
                            onClick={() =>
                              !quizSubmittedForTopic &&
                              selectAnswer(
                                selectedTopic.id,
                                questionIndex,
                                option
                              )
                            }
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign:
                                "left",
                              marginTop: "10px",
                              padding:
                                "12px 15px",
                              border:
                                "1px solid #bfdbfe",
                              borderRadius: "8px",
                              background,
                              cursor:
                                quizSubmittedForTopic
                                  ? "default"
                                  : "pointer",
                              color: "#334155",
                              fontSize: "15px",
                            }}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  );
                }
              )}

              {!quizSubmittedForTopic && (
                <button
                  onClick={() =>
                    checkQuiz(selectedTopic)
                  }
                  style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 22px",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                >
                  Submit Quiz
                </button>
              )}

              {quizSubmittedForTopic && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "18px",
                    background: "#eff6ff",
                    borderRadius: "10px",
                    border:
                      "1px solid #bfdbfe",
                  }}
                >
                  <strong
                    style={{
                      color: "#1e3a8a",
                    }}
                  >
                    🎯 Your Score: {score} /{" "}
                    {
                      selectedTopic.lesson.quiz
                        .length
                    }
                  </strong>
                </div>
              )}
            </div>

            {/* Complete Lesson */}

            <div
              style={{
                marginTop: "30px",
                paddingTop: "25px",
                borderTop:
                  "1px solid #e2e8f0",
              }}
            >
              <button
                onClick={() =>
                  saveProgress(
                    selectedTopic.id
                  )
                }
                style={{
                  background:
                    completed.includes(
                      selectedTopic.id
                    )
                      ? "#16a34a"
                      : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 22px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                {completed.includes(
                  selectedTopic.id
                )
                  ? "✓ Lesson Completed"
                  : "✓ Mark Lesson Complete"}
              </button>
            </div>
          </div>

          {/* Navigation */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginTop: "25px",
              gap: "15px",
            }}
          >
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              style={{
                background:
                  currentIndex === 0
                    ? "#cbd5e1"
                    : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "11px 20px",
                cursor:
                  currentIndex === 0
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              ← Previous
            </button>

            <button
              onClick={closeTopic}
              style={{
                background: "#1e40af",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "11px 20px",
                cursor: "pointer",
              }}
            >
              📚 All Python Topics
            </button>

            <button
              onClick={goToNext}
              disabled={
                currentIndex ===
                subtopics.length - 1
              }
              style={{
                background:
                  currentIndex ===
                  subtopics.length - 1
                    ? "#cbd5e1"
                    : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "11px 20px",
                cursor:
                  currentIndex ===
                  subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // PYTHON DATA ANALYSIS ROADMAP PAGE
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        {/* Back Button */}

        <button
          onClick={goBack}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            cursor: "pointer",
            fontSize: "15px",
            marginBottom: "25px",
          }}
        >
          ← Back to Data Analyst Roadmap
        </button>

        {/* Header */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              color: "#1e3a8a",
              marginBottom: "10px",
            }}
          >
            🐍 Python for Data Analysis
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Learn Python and its data analysis tools
            step by step.
          </p>
        </div>

        {/* Overall Progress */}

        <div
          style={{
            background: "white",
            border: "1px solid #bfdbfe",
            borderRadius: "14px",
            padding: "22px",
            marginBottom: "30px",
            boxShadow:
              "0 4px 12px rgba(37, 99, 235, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <strong
              style={{ color: "#1e3a8a" }}
            >
              Overall Progress
            </strong>

            <span
              style={{ color: "#64748b" }}
            >
              {completedCount} /{" "}
              {subtopics.length} Lessons
            </span>
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
                width: `${overallProgress}%`,
                height: "100%",
                background: "#2563eb",
                borderRadius: "10px",
                transition:
                  "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Topic Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {subtopics.map(
            (topic, index) => {
              const isCompleted =
                completed.includes(topic.id) ||
                false;

              return (
                <div
                  key={topic.id}
                  style={{
                    background: "white",
                    border:
                      "1px solid #bfdbfe",
                    borderRadius: "14px",
                    padding: "25px",
                    boxShadow:
                      "0 4px 12px rgba(37, 99, 235, 0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#64748b",
                      marginBottom: "10px",
                    }}
                  >
                    Lesson {index + 1}
                  </div>

                  <h3
                    style={{
                      color: "#1e3a8a",
                      minHeight: "55px",
                      margin:
                        "0 0 15px 0",
                    }}
                  >
                    {topic.icon}{" "}
                    {topic.title}
                  </h3>

                  <div
                    style={{
                      color: "#64748b",
                      marginBottom: "12px",
                    }}
                  >
                    📚 1 Lesson
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      background: "#dbeafe",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom:
                        "15px",
                    }}
                  >
                    <div
                      style={{
                        width: isCompleted
                          ? "100%"
                          : "0%",
                        height: "100%",
                        background:
                          "#2563eb",
                        transition:
                          "width 0.3s ease",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      color: isCompleted
                        ? "#16a34a"
                        : "#64748b",
                      fontSize: "14px",
                      marginBottom:
                        "18px",
                    }}
                  >
                    {isCompleted
                      ? "✓ Completed"
                      : "0 / 1 completed"}
                  </div>

                  <button
                    onClick={() =>
                      openTopic(topic)
                    }
                    style={{
                      width: "100%",
                      background:
                        "#2563eb",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding:
                        "11px 15px",
                      cursor: "pointer",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    ▶ Open Lesson
                  </button>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default PythonDataAnalysis;