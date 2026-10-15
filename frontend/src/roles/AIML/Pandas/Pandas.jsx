import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: 1,
    title: "Pandas Basics",
    icon: "🐼",
    lesson: {
      overview:
        "Pandas is a Python library designed for working with structured and tabular data. It provides powerful data structures and tools that make data analysis and preparation easier.",
      sections: [
        {
          heading: "What is Pandas?",
          points: [
            "Pandas is an open-source Python library for data manipulation and analysis.",
            "It is especially useful for structured and tabular datasets.",
            "Pandas works closely with NumPy and is widely used in data science and machine learning.",
          ],
        },
        {
          heading: "Why Pandas is Important",
          points: [
            "Machine learning projects often require cleaning and exploring datasets before training models.",
            "Pandas provides convenient tools for filtering, transforming, and analyzing data.",
            "It can work with common data formats such as CSV and Excel files.",
          ],
        },
        {
          heading: "Importing Pandas",
          points: [
            "Pandas is commonly imported using the alias pd.",
            "Example: import pandas as pd",
            "The pd alias makes Pandas functions shorter and easier to use.",
          ],
        },
      ],
      commonMistakes: [
        "Forgetting to import Pandas before using pd.",
        "Confusing Pandas with NumPy.",
        "Assuming Pandas is only useful for machine learning models.",
      ],
      quiz: [
        {
          question: "What is Pandas mainly used for?",
          options: [
            "Data manipulation and analysis",
            "Building websites",
            "Creating operating systems",
            "Designing graphics",
          ],
          answer: "Data manipulation and analysis",
        },
        {
          question: "Which alias is commonly used for Pandas?",
          options: ["pd", "pds", "pan", "pandaslib"],
          answer: "pd",
        },
        {
          question: "Pandas is especially useful for working with what type of data?",
          options: [
            "Structured and tabular data",
            "Only images",
            "Only audio",
            "Only source code",
          ],
          answer: "Structured and tabular data",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Series & DataFrames",
    icon: "📊",
    lesson: {
      overview:
        "Pandas provides two fundamental data structures: Series and DataFrame. Understanding these structures is essential for working with datasets.",
      sections: [
        {
          heading: "Series",
          points: [
            "A Series is a one-dimensional labeled data structure.",
            "It can contain values along with an associated index.",
            "A Series can be created from lists, arrays, or other data structures.",
          ],
        },
        {
          heading: "DataFrame",
          points: [
            "A DataFrame is a two-dimensional labeled data structure.",
            "It contains rows and columns and is commonly used to represent datasets.",
            "Each column in a DataFrame can contain a different type of data.",
          ],
        },
        {
          heading: "Series vs DataFrame",
          points: [
            "A Series is one-dimensional.",
            "A DataFrame is two-dimensional.",
            "A DataFrame can contain multiple Series as its columns.",
          ],
        },
      ],
      commonMistakes: [
        "Confusing a Series with a DataFrame.",
        "Forgetting that DataFrames have both rows and columns.",
        "Assuming every DataFrame column must have the same data type.",
      ],
      quiz: [
        {
          question: "What is a Pandas Series?",
          options: [
            "A one-dimensional labeled data structure",
            "A two-dimensional database",
            "A machine learning model",
            "A Python package manager",
          ],
          answer: "A one-dimensional labeled data structure",
        },
        {
          question: "What is a DataFrame?",
          options: [
            "A two-dimensional labeled data structure",
            "A single numerical value",
            "A Python function",
            "A visualization library",
          ],
          answer: "A two-dimensional labeled data structure",
        },
        {
          question: "A DataFrame can contain multiple what?",
          options: [
            "Series as columns",
            "Operating systems",
            "Python interpreters",
            "Web servers",
          ],
          answer: "Series as columns",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Reading & Writing Data",
    icon: "📁",
    lesson: {
      overview:
        "Real-world datasets are often stored in files. Pandas provides convenient functions for reading data into DataFrames and writing processed data back to files.",
      sections: [
        {
          heading: "Reading CSV Files",
          points: [
            "CSV files are commonly used to store tabular data.",
            "Pandas provides read_csv() to load CSV data into a DataFrame.",
            "Example: pd.read_csv('data.csv').",
          ],
        },
        {
          heading: "Reading Other Formats",
          points: [
            "Pandas can work with several common data formats.",
            "It provides functions for formats such as Excel and JSON.",
            "The appropriate read function depends on the file format.",
          ],
        },
        {
          heading: "Writing Data",
          points: [
            "Processed DataFrames can be saved back to files.",
            "For example, to_csv() can write a DataFrame to a CSV file.",
            "Saving processed data is useful when building repeatable data workflows.",
          ],
        },
      ],
      commonMistakes: [
        "Using the wrong read function for a file format.",
        "Using an incorrect file path.",
        "Forgetting that writing data can overwrite an existing file if configured that way.",
      ],
      quiz: [
        {
          question: "Which Pandas function is commonly used to read a CSV file?",
          options: [
            "pd.read_csv()",
            "pd.open_csv()",
            "pd.load_table()",
            "pd.csv_read()",
          ],
          answer: "pd.read_csv()",
        },
        {
          question: "What does a read function generally do?",
          options: [
            "Loads data into a Pandas structure",
            "Deletes a dataset",
            "Trains a model",
            "Creates a neural network",
          ],
          answer: "Loads data into a Pandas structure",
        },
        {
          question: "Which method can save a DataFrame as CSV?",
          options: [
            "to_csv()",
            "save_csv_file()",
            "write_table()",
            "export_data_csv()",
          ],
          answer: "to_csv()",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Selecting & Filtering Data",
    icon: "🔎",
    lesson: {
      overview:
        "Selecting and filtering allow you to work with only the rows and columns you need. These operations are essential during data exploration and preprocessing.",
      sections: [
        {
          heading: "Selecting Columns",
          points: [
            "Individual columns can be selected using their column names.",
            "Multiple columns can also be selected.",
            "Selecting columns helps focus analysis on relevant features.",
          ],
        },
        {
          heading: "Filtering Rows",
          points: [
            "Rows can be filtered using conditions.",
            "Boolean conditions can identify records that satisfy a requirement.",
            "For example, you can select rows where a numerical value is greater than a threshold.",
          ],
        },
        {
          heading: "loc and iloc",
          points: [
            "loc is label-based selection.",
            "iloc is primarily integer-position-based selection.",
            "Both are useful when selecting specific rows and columns.",
          ],
        },
      ],
      commonMistakes: [
        "Using the wrong column name.",
        "Confusing loc with iloc.",
        "Writing filtering conditions incorrectly.",
      ],
      quiz: [
        {
          question: "What is filtering used for?",
          options: [
            "Selecting rows that satisfy a condition",
            "Installing Pandas",
            "Changing Python versions",
            "Creating a database server",
          ],
          answer: "Selecting rows that satisfy a condition",
        },
        {
          question: "What type of selection is loc primarily associated with?",
          options: [
            "Label-based selection",
            "Random selection",
            "Image selection",
            "File selection",
          ],
          answer: "Label-based selection",
        },
        {
          question: "What is iloc primarily based on?",
          options: [
            "Integer positions",
            "Column colors",
            "File names",
            "Data types only",
          ],
          answer: "Integer positions",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Sorting & Aggregation",
    icon: "↕️",
    lesson: {
      overview:
        "Sorting organizes data according to one or more columns, while aggregation summarizes data using operations such as sum, mean, minimum, and maximum.",
      sections: [
        {
          heading: "Sorting Data",
          points: [
            "Pandas provides sorting methods for arranging rows.",
            "Data can be sorted in ascending or descending order.",
            "Sorting helps identify high or low values and makes datasets easier to inspect.",
          ],
        },
        {
          heading: "Aggregation",
          points: [
            "Aggregation reduces multiple values into summary statistics.",
            "Common aggregation operations include sum, mean, minimum, and maximum.",
            "Aggregations are useful when summarizing datasets.",
          ],
        },
        {
          heading: "Why Aggregation Matters",
          points: [
            "Aggregated values can reveal patterns that are difficult to see in raw data.",
            "They can be used to calculate totals, averages, and other summaries.",
            "Aggregation is often combined with grouping operations.",
          ],
        },
      ],
      commonMistakes: [
        "Sorting in the wrong direction.",
        "Applying an aggregation to inappropriate columns.",
        "Confusing an individual value with an aggregated summary.",
      ],
      quiz: [
        {
          question: "What does sorting do?",
          options: [
            "Arranges rows according to selected values",
            "Deletes duplicate files",
            "Trains a model",
            "Creates a new Python interpreter",
          ],
          answer: "Arranges rows according to selected values",
        },
        {
          question: "Which is an example of an aggregation operation?",
          options: ["mean", "rename_file", "open_browser", "compile"],
          answer: "mean",
        },
        {
          question: "Why is aggregation useful?",
          options: [
            "It summarizes multiple values",
            "It creates HTML pages",
            "It installs libraries",
            "It changes the operating system",
          ],
          answer: "It summarizes multiple values",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Grouping Data",
    icon: "🗂️",
    lesson: {
      overview:
        "Grouping allows you to divide data into categories and calculate summaries for each category. It is one of the most useful techniques for analyzing structured datasets.",
      sections: [
        {
          heading: "What is Grouping?",
          points: [
            "Grouping organizes rows based on one or more columns.",
            "Each unique category becomes a group.",
            "Operations can then be applied separately to each group.",
          ],
        },
        {
          heading: "groupby()",
          points: [
            "Pandas provides groupby() for grouping data.",
            "It can be combined with aggregation operations such as sum and mean.",
            "For example, sales can be grouped by product or region and then summarized.",
          ],
        },
        {
          heading: "Multiple Grouping Columns",
          points: [
            "Data can be grouped using more than one column.",
            "This allows analysis at a more detailed level.",
            "The resulting summaries can reveal relationships between categories.",
          ],
        },
      ],
      commonMistakes: [
        "Grouping by the wrong column.",
        "Forgetting to apply an aggregation or other operation after grouping.",
        "Misinterpreting grouped results as individual raw records.",
      ],
      quiz: [
        {
          question: "What is the purpose of groupby()?",
          options: [
            "To organize data into groups for analysis",
            "To install Pandas",
            "To create images",
            "To delete columns automatically",
          ],
          answer: "To organize data into groups for analysis",
        },
        {
          question: "What can be applied after grouping?",
          options: [
            "Aggregation operations",
            "Only HTML",
            "Only CSS",
            "Only JavaScript",
          ],
          answer: "Aggregation operations",
        },
        {
          question: "Can Pandas group data using multiple columns?",
          options: [
            "Yes",
            "No",
            "Only for images",
            "Only for text files",
          ],
          answer: "Yes",
        },
      ],
    },
  },

  {
    id: 7,
    title: "Data Exploration",
    icon: "🧭",
    lesson: {
      overview:
        "Data exploration is the process of understanding a dataset before deeper analysis or machine learning. Pandas provides many functions that help inspect structure, values, data types, and summary statistics.",
      sections: [
        {
          heading: "Inspecting a Dataset",
          points: [
            "head() can display the first few rows.",
            "tail() can display the last few rows.",
            "shape provides the number of rows and columns.",
          ],
        },
        {
          heading: "Understanding Data Types",
          points: [
            "dtypes shows the data type of each column.",
            "Knowing data types helps determine what preprocessing may be required.",
            "Incorrect data types can cause problems during analysis and model preparation.",
          ],
        },
        {
          heading: "Summary Statistics",
          points: [
            "describe() provides descriptive statistics for suitable numerical columns.",
            "Summary statistics can include count, mean, standard deviation, minimum, and maximum.",
            "Exploration helps identify unusual values and understand the dataset before modeling.",
          ],
        },
      ],
      commonMistakes: [
        "Skipping dataset exploration before modeling.",
        "Ignoring incorrect or unexpected data types.",
        "Assuming summary statistics alone explain the entire dataset.",
      ],
      quiz: [
        {
          question: "Which method commonly shows the first few rows of a DataFrame?",
          options: ["head()", "first_rows()", "top()", "start()"],
          answer: "head()",
        },
        {
          question: "Which attribute shows the number of rows and columns?",
          options: ["shape", "size_type", "dimensions()", "layout"],
          answer: "shape",
        },
        {
          question: "Which method provides descriptive statistics?",
          options: ["describe()", "summary_all()", "stats_table()", "details()"],
          answer: "describe()",
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

function Pandas({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-pandas", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const selectedIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const selectedTopic =
    selectedIndex >= 0 ? subtopics[selectedIndex] : null;

  const completedCount =
    completed.length;

  const progress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const handleAnswer = (questionIndex, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [`${selectedSubtopic}-${questionIndex}`]: answer,
    }));
  };

  const checkQuiz = async () => {
    const score = calculateScore();

    await saveQuizResult({
      subject: "AI/ML",
      role: "AI/ML Engineer",
      topic: selectedTopic?.title || selectedSubtopic,
      topicId: selectedSubtopic,
      score,
      totalQuestions: selectedTopic?.lesson?.quiz?.length || 0
    });

    setQuizSubmitted((prev) => ({
      ...prev,
      [selectedSubtopic]: true,
    }));
  };

  const calculateScore = () => {
    if (!selectedTopic) return 0;

    return selectedTopic.lesson.quiz.reduce(
      (score, question, index) => {
        const selectedAnswer =
          quizAnswers[`${selectedSubtopic}-${index}`];

        return (
          score +
          (selectedAnswer === question.answer ? 1 : 0)
        );
      },
      0
    );
  };

  const markComplete = () => {
    saveProgress(selectedSubtopic);
  };

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedSubtopic(
        subtopics[selectedIndex - 1].id
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex < subtopics.length - 1) {
      setSelectedSubtopic(
        subtopics[selectedIndex + 1].id
      );
    }
  };

  // =====================================================
  // SELECTED LESSON PAGE
  // =====================================================

  if (selectedTopic) {
    const options = shuffledQuizOptions[selectedTopic.id];

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
          padding: "30px 20px 60px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setSelectedSubtopic(null)}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "25px",
            }}
          >
            ← Back to Topics
          </button>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "35px",
              border: "1px solid #bfdbfe",
              boxShadow:
                "0 4px 15px rgba(37, 99, 235, 0.08)",
            }}
          >
            <h1
              style={{
                margin: "0 0 10px",
                fontSize: "30px",
                color: "#111827",
              }}
            >
              {selectedTopic.icon} {selectedTopic.title}
            </h1>

            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                marginBottom: "28px",
              }}
            >
              Lesson {selectedIndex + 1} of{" "}
              {subtopics.length}
            </p>

            <h2
              style={{
                color: "#111827",
                fontSize: "22px",
              }}
            >
              📖 Overview
            </h2>

            <p
              style={{
                color: "#374151",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              {selectedTopic.lesson.overview}
            </p>

            {selectedTopic.lesson.sections.map(
              (section) => (
                <div
                  key={section.heading}
                  style={{
                    marginTop: "28px",
                  }}
                >
                  <h2
                    style={{
                      color: "#111827",
                      fontSize: "21px",
                    }}
                  >
                    {section.heading}
                  </h2>

                  <ul
                    style={{
                      paddingLeft: "22px",
                      color: "#374151",
                      lineHeight: "1.8",
                    }}
                  >
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              )
            )}

            {/* ================= COMMON MISTAKES ================= */}

            <div
              style={{
                marginTop: "30px",
                padding: "22px",
                background: "#eff6ff",
                borderRadius: "14px",
                border: "1px solid #bfdbfe",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  color: "#1e3a8a",
                  fontSize: "20px",
                }}
              >
                ⚠️ Common Mistakes
              </h2>

              <ul
                style={{
                  paddingLeft: "22px",
                  color: "#374151",
                  lineHeight: "1.8",
                  marginBottom: 0,
                }}
              >
                {selectedTopic.lesson.commonMistakes.map(
                  (mistake) => (
                    <li key={mistake}>{mistake}</li>
                  )
                )}
              </ul>
            </div>

            {/* ================= QUIZ ================= */}

            <div
              style={{
                marginTop: "35px",
                padding: "25px",
                borderRadius: "16px",
                background: "#f8fafc",
                border: "1px solid #dbeafe",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  color: "#111827",
                }}
              >
                🧠 Quick Quiz
              </h2>

              {selectedTopic.lesson.quiz.map(
                (question, questionIndex) => {
                  const answerKey = `${selectedSubtopic}-${questionIndex}`;
                  const selectedAnswer =
                    quizAnswers[answerKey];

                  return (
                    <div
                      key={question.question}
                      style={{
                        marginBottom: "28px",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "700",
                          color: "#111827",
                          lineHeight: "1.5",
                        }}
                      >
                        {questionIndex + 1}.{" "}
                        {question.question}
                      </p>

                      {options[questionIndex].map(
                        (option) => (
                          <label
                            key={option}
                            style={{
                              display: "block",
                              padding: "10px 12px",
                              marginBottom: "8px",
                              borderRadius: "8px",
                              border:
                                "1px solid #dbeafe",
                              background:
                                selectedAnswer === option
                                  ? "#dbeafe"
                                  : "white",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="radio"
                              name={answerKey}
                              value={option}
                              checked={
                                selectedAnswer === option
                              }
                              onChange={() =>
                                handleAnswer(
                                  questionIndex,
                                  option
                                )
                              }
                              style={{
                                marginRight: "9px",
                              }}
                            />

                            {option}
                          </label>
                        )
                      )}
                    </div>
                  );
                }
              )}

              <button
                onClick={checkQuiz}
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 22px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Check Quiz
              </button>

              {quizSubmitted[selectedSubtopic] && (
                <div
                  style={{
                    marginTop: "18px",
                    padding: "15px",
                    background: "#eff6ff",
                    borderRadius: "10px",
                    color: "#1e3a8a",
                    fontWeight: "600",
                  }}
                >
                  🎯 Score: {calculateScore()} /{" "}
                  {selectedTopic.lesson.quiz.length}
                </div>
              )}
            </div>

            {/* ================= COMPLETE ================= */}

            <div
              style={{
                marginTop: "30px",
              }}
            >
              <button
                onClick={markComplete}
                disabled={completed.includes(selectedSubtopic)}
                style={{
                  background: completed.includes(selectedSubtopic)
                    ? "#16a34a"
                    : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 20px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: completed.includes(selectedSubtopic)
                    ? "default"
                    : "pointer",
                }}
              >
                {completed.includes(selectedSubtopic)
                  ? "✅ Lesson Completed"
                  : "✓ Mark Lesson Complete"}
              </button>
            </div>

            {/* ================= NAVIGATION ================= */}

            <div
              style={{
                marginTop: "35px",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={goToPrevious}
                disabled={selectedIndex === 0}
                style={{
                  background:
                    selectedIndex === 0
                      ? "#e5e7eb"
                      : "#2563eb",
                  color:
                    selectedIndex === 0
                      ? "#9ca3af"
                      : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontWeight: "600",
                  cursor:
                    selectedIndex === 0
                      ? "default"
                      : "pointer",
                }}
              >
                ← Previous
              </button>

              <button
                onClick={() => setSelectedSubtopic(null)}
                style={{
                  background: "white",
                  color: "#2563eb",
                  border: "1px solid #2563eb",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Back to Topics
              </button>

              <button
                onClick={goToNext}
                disabled={
                  selectedIndex === subtopics.length - 1
                }
                style={{
                  background:
                    selectedIndex ===
                    subtopics.length - 1
                      ? "#e5e7eb"
                      : "#2563eb",
                  color:
                    selectedIndex ===
                    subtopics.length - 1
                      ? "#9ca3af"
                      : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontWeight: "600",
                  cursor:
                    selectedIndex ===
                    subtopics.length - 1
                      ? "default"
                      : "pointer",
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // PANDAS ROADMAP PAGE
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
        padding: "30px 20px 60px",
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
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Back
        </button>

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          🐼 Pandas & Data Processing
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Learn Pandas fundamentals, DataFrames, data
          loading, filtering, aggregation, grouping, and
          dataset exploration.
        </p>

        {/* ================= OVERALL PROGRESS ================= */}

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px 22px",
            marginBottom: "28px",
            boxShadow:
              "0 4px 15px rgba(0, 0, 0, 0.06)",
            border: "1px solid #dbeafe",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "21px",
              color: "#111827",
            }}
          >
            Overall Progress: {progress}% 🎯
          </h2>

          <div
            style={{
              width: "100%",
              height: "13px",
              background: "#e5e7eb",
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

          <p
            style={{
              margin: "12px 0 0",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            {completedCount} of {subtopics.length} lessons
            completed
          </p>
        </div>

        {/* ================= LESSON CARDS ================= */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {subtopics.map((topic, index) => {
            const isCompleted = completed.includes(topic.id);

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "210px",
                  border: "1px solid #bfdbfe",
                  boxShadow:
                    "0 4px 12px rgba(37, 99, 235, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: "0 0 8px",
                      fontSize: "20px",
                      color: "#111827",
                      lineHeight: "1.35",
                    }}
                  >
                    {index + 1}. {topic.icon}{" "}
                    {topic.title}
                  </h2>

                  <p
                    style={{
                      margin: "0 0 15px",
                      fontSize: "15px",
                      color: "#6b7280",
                    }}
                  >
                    Lesson {index + 1}
                  </p>

                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: "15px",
                      color: isCompleted
                        ? "#16a34a"
                        : "#111827",
                      fontWeight: "600",
                    }}
                  >
                    {isCompleted
                      ? "Completed: 100%"
                      : "Progress: 0%"}
                  </p>

                  <div
                    style={{
                      width: "100%",
                      height: "13px",
                      background: "#e5e7eb",
                      borderRadius: "10px",
                      overflow: "hidden",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: isCompleted
                          ? "100%"
                          : "0%",
                        height: "100%",
                        background: "#2563eb",
                        borderRadius: "10px",
                        transition:
                          "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() =>
                    setSelectedSubtopic(topic.id)
                  }
                  style={{
                    alignSelf: "flex-start",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "9px",
                    padding: "11px 20px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {isCompleted
                    ? "Review Lesson →"
                    : "Open Lesson →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pandas;