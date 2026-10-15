// =====================================================
// SQL TOPIC
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
// SQL LESSONS
// =====================================================

const subtopics = [
  // ===================================================
  // 1. SQL BASICS
  // ===================================================

  {
    id: "sql-basics",
    title: "SQL Basics",
    icon: "📘",

    lesson: {
      overview:
        "SQL (Structured Query Language) is used to communicate with relational databases. It allows you to create, read, update, and delete data stored in tables.",

      sections: [
        {
          heading: "What is SQL?",
          content:
            "SQL is a standard language used to work with relational databases. With SQL, you can retrieve data, insert new records, update existing records, delete records, and manage database structures.",
        },
        {
          heading: "Tables, Rows and Columns",
          content:
            "A relational database stores information in tables. A table contains rows and columns. Each row represents a record, while each column represents an attribute of that record. For example, a Students table may contain StudentID, Name, Age, and Course.",
        },
        {
          heading: "Basic SQL Commands",
          content:
            "Common SQL commands include CREATE for creating database objects, INSERT for adding records, SELECT for retrieving records, UPDATE for modifying records, and DELETE for removing records.",
        },
      ],

      mistakes: [
        "Confusing rows with columns.",
        "Forgetting that SQL keywords are commonly written in uppercase for readability.",
        "Writing SQL statements without understanding which table they operate on.",
      ],

      quiz: [
        {
          question: "What does SQL stand for?",
          options: [
            "Structured Query Language",
            "Simple Query Language",
            "System Query Logic",
            "Structured Question Language",
          ],
          answer: "Structured Query Language",
        },
        {
          question: "What does a row generally represent in a database table?",
          options: [
            "A record",
            "A database",
            "A column name",
            "A SQL command",
          ],
          answer: "A record",
        },
        {
          question: "Which SQL command is used to retrieve data?",
          options: [
            "SELECT",
            "INSERT",
            "DELETE",
            "UPDATE",
          ],
          answer: "SELECT",
        },
      ],
    },
  },

  // ===================================================
  // 2. SELECT & FILTERING
  // ===================================================

  {
    id: "select-filtering",
    title: "SELECT & Filtering",
    icon: "🔎",

    lesson: {
      overview:
        "The SELECT statement is used to retrieve data from tables. Filtering allows you to retrieve only the records that satisfy a specific condition.",

      sections: [
        {
          heading: "SELECT Statement",
          content:
            "SELECT is the most commonly used SQL command. You can select specific columns, such as SELECT name, age FROM students, or use SELECT * to retrieve all columns.",
        },
        {
          heading: "WHERE Clause",
          content:
            "The WHERE clause filters rows based on a condition. For example, SELECT * FROM students WHERE age > 18 returns students whose age is greater than 18.",
        },
        {
          heading: "Common Filtering Operators",
          content:
            "SQL supports operators such as =, !=, >, <, >=, and <=. You can also use AND, OR, NOT, BETWEEN, IN, and LIKE to create more useful filtering conditions.",
        },
      ],

      mistakes: [
        "Using WHERE incorrectly with text values.",
        "Forgetting quotation marks around string values.",
        "Using AND when OR is actually required.",
      ],

      quiz: [
        {
          question: "Which clause is used to filter rows?",
          options: [
            "WHERE",
            "FROM",
            "SELECT",
            "ORDER",
          ],
          answer: "WHERE",
        },
        {
          question: "What does SELECT * generally return?",
          options: [
            "All columns",
            "Only the first column",
            "Only numeric columns",
            "Only rows with NULL values",
          ],
          answer: "All columns",
        },
        {
          question: "Which operator checks whether a value falls within a range?",
          options: [
            "BETWEEN",
            "LIKE",
            "IN",
            "MATCH",
          ],
          answer: "BETWEEN",
        },
      ],
    },
  },

  // ===================================================
  // 3. AGGREGATE FUNCTIONS
  // ===================================================

  {
    id: "aggregate-functions",
    title: "Aggregate Functions",
    icon: "🧮",

    lesson: {
      overview:
        "Aggregate functions perform calculations on multiple rows and return a single result. They are commonly used when analyzing datasets.",

      sections: [
        {
          heading: "COUNT, SUM and AVG",
          content:
            "COUNT counts rows or values, SUM calculates a total, and AVG calculates an average. These functions are frequently used in data analysis.",
        },
        {
          heading: "MIN and MAX",
          content:
            "MIN returns the smallest value in a column, while MAX returns the largest value. They can be used with numeric, date, and other comparable data depending on the database system.",
        },
        {
          heading: "Aggregate Functions with Conditions",
          content:
            "Aggregate functions can be combined with WHERE to calculate values for a filtered set of rows. For example, you can calculate the average salary only for employees in a particular department.",
        },
      ],

      mistakes: [
        "Confusing COUNT(*) with COUNT(column).",
        "Forgetting that aggregate functions summarize multiple rows.",
        "Using aggregate functions without understanding NULL handling.",
      ],

      quiz: [
        {
          question: "Which function calculates the average value?",
          options: [
            "AVG",
            "SUM",
            "COUNT",
            "MEAN",
          ],
          answer: "AVG",
        },
        {
          question: "Which function returns the largest value?",
          options: [
            "MAX",
            "TOP",
            "HIGH",
            "LARGE",
          ],
          answer: "MAX",
        },
        {
          question: "Which function is commonly used to count rows?",
          options: [
            "COUNT",
            "NUMBER",
            "TOTAL",
            "ROWS",
          ],
          answer: "COUNT",
        },
      ],
    },
  },

  // ===================================================
  // 4. GROUP BY & HAVING
  // ===================================================

  {
    id: "group-by-having",
    title: "GROUP BY & HAVING",
    icon: "📊",

    lesson: {
      overview:
        "GROUP BY organizes rows into groups based on one or more columns. HAVING filters those groups after aggregation.",

      sections: [
        {
          heading: "GROUP BY",
          content:
            "GROUP BY is commonly used with aggregate functions. For example, you can group employees by department and calculate the average salary for each department.",
        },
        {
          heading: "HAVING",
          content:
            "HAVING filters grouped results. Unlike WHERE, which filters individual rows before grouping, HAVING is generally used to filter groups after aggregation.",
        },
        {
          heading: "WHERE vs HAVING",
          content:
            "WHERE filters rows before GROUP BY is applied. HAVING filters groups after GROUP BY and is especially useful when working with aggregate results such as COUNT, SUM, or AVG.",
        },
      ],

      mistakes: [
        "Using HAVING when WHERE should be used.",
        "Forgetting to include the grouping column correctly.",
        "Trying to filter aggregate results using WHERE.",
      ],

      quiz: [
        {
          question: "What is GROUP BY primarily used for?",
          options: [
            "Creating groups of rows",
            "Deleting duplicate tables",
            "Creating databases",
            "Renaming columns",
          ],
          answer: "Creating groups of rows",
        },
        {
          question: "Which clause filters grouped results?",
          options: [
            "HAVING",
            "WHERE",
            "FILTER",
            "GROUP",
          ],
          answer: "HAVING",
        },
        {
          question: "When is WHERE generally applied?",
          options: [
            "Before grouping",
            "After all aggregation",
            "Only after HAVING",
            "Only after ORDER BY",
          ],
          answer: "Before grouping",
        },
      ],
    },
  },

  // ===================================================
  // 5. JOINS
  // ===================================================

  {
    id: "joins",
    title: "Joins",
    icon: "🔗",

    lesson: {
      overview:
        "SQL joins combine related data from multiple tables. They are essential for working with normalized relational databases.",

      sections: [
        {
          heading: "INNER JOIN",
          content:
            "INNER JOIN returns rows where matching values exist in both tables. It is useful when you only want records that have a corresponding match.",
        },
        {
          heading: "LEFT and RIGHT JOIN",
          content:
            "LEFT JOIN keeps all rows from the left table and matching rows from the right table. RIGHT JOIN does the opposite, keeping all rows from the right table.",
        },
        {
          heading: "FULL JOIN",
          content:
            "FULL OUTER JOIN returns matching rows as well as unmatched rows from both tables, where supported by the database system.",
        },
      ],

      mistakes: [
        "Joining tables using the wrong columns.",
        "Forgetting the relationship between the tables.",
        "Accidentally creating duplicate rows because of an incorrect join condition.",
      ],

      quiz: [
        {
          question: "Which JOIN returns only matching rows from both tables?",
          options: [
            "INNER JOIN",
            "LEFT JOIN",
            "FULL JOIN",
            "CROSS JOIN",
          ],
          answer: "INNER JOIN",
        },
        {
          question: "Which JOIN keeps all rows from the left table?",
          options: [
            "LEFT JOIN",
            "INNER JOIN",
            "RIGHT JOIN",
            "FULL JOIN",
          ],
          answer: "LEFT JOIN",
        },
        {
          question: "What is the main purpose of a JOIN?",
          options: [
            "Combine related data from tables",
            "Delete tables",
            "Create a database",
            "Sort a single column",
          ],
          answer: "Combine related data from tables",
        },
      ],
    },
  },

  // ===================================================
  // 6. SUBQUERIES
  // ===================================================

  {
    id: "subqueries",
    title: "Subqueries",
    icon: "🔄",

    lesson: {
      overview:
        "A subquery is a query nested inside another SQL query. Subqueries allow you to use the result of one query as part of another operation.",

      sections: [
        {
          heading: "What is a Subquery?",
          content:
            "A subquery is enclosed within parentheses and is used inside another SQL statement. It can appear in places such as WHERE, FROM, or SELECT depending on the query and database system.",
        },
        {
          heading: "Subqueries with WHERE",
          content:
            "A subquery can be used to compare values against a result from another query. For example, you can find employees whose salary is greater than the average salary calculated by a subquery.",
        },
        {
          heading: "Types of Subqueries",
          content:
            "Subqueries can return a single value, multiple values, or a table-like result. Operators such as IN, EXISTS, and comparison operators can be used depending on the type of result.",
        },
      ],

      mistakes: [
        "Forgetting parentheses around a subquery.",
        "Using a single-value comparison when the subquery returns multiple values.",
        "Writing unnecessarily complicated nested queries.",
      ],

      quiz: [
        {
          question: "What is a subquery?",
          options: [
            "A query inside another query",
            "A database backup",
            "A type of database table",
            "A SQL comment",
          ],
          answer: "A query inside another query",
        },
        {
          question: "Which operator is commonly used when a subquery returns multiple possible values?",
          options: [
            "IN",
            "EQUALS",
            "SAME",
            "MATCHES",
          ],
          answer: "IN",
        },
        {
          question: "Where is a subquery commonly placed?",
          options: [
            "Inside parentheses",
            "Inside a database name",
            "Inside a table name",
            "Inside a column type",
          ],
          answer: "Inside parentheses",
        },
      ],
    },
  },

  // ===================================================
  // 7. WINDOW FUNCTIONS
  // ===================================================

  {
    id: "window-functions",
    title: "Window Functions",
    icon: "🪟",

    lesson: {
      overview:
        "Window functions perform calculations across related rows while still keeping individual rows in the result. They are especially useful for ranking, running totals, and comparisons.",

      sections: [
        {
          heading: "What are Window Functions?",
          content:
            "Unlike traditional aggregate functions that can reduce multiple rows into a single row, window functions calculate values across a set of related rows while preserving the original rows.",
        },
        {
          heading: "ROW_NUMBER, RANK and DENSE_RANK",
          content:
            "ROW_NUMBER assigns a unique sequential number to rows. RANK assigns the same rank to tied values but can leave gaps. DENSE_RANK also assigns the same rank to tied values but does not leave gaps.",
        },
        {
          heading: "PARTITION BY and ORDER BY",
          content:
            "PARTITION BY divides rows into groups for the window calculation, while ORDER BY determines the order in which the calculation is performed. Together they allow powerful analytical queries.",
        },
      ],

      mistakes: [
        "Confusing RANK with ROW_NUMBER.",
        "Forgetting ORDER BY when using ranking functions.",
        "Using PARTITION BY when the calculation should apply to the entire result set.",
      ],

      quiz: [
        {
          question: "What is a major feature of window functions?",
          options: [
            "They calculate across rows without necessarily collapsing them",
            "They always delete duplicate rows",
            "They create new databases",
            "They only work with text",
          ],
          answer:
            "They calculate across rows without necessarily collapsing them",
        },
        {
          question: "Which function assigns a unique sequential number to rows?",
          options: [
            "ROW_NUMBER",
            "RANK",
            "DENSE_RANK",
            "SEQUENCE",
          ],
          answer: "ROW_NUMBER",
        },
        {
          question: "What does PARTITION BY do in a window function?",
          options: [
            "Divides rows into groups for the calculation",
            "Deletes groups",
            "Sorts the database permanently",
            "Creates a new table",
          ],
          answer: "Divides rows into groups for the calculation",
        },
      ],
    },
  },
];

// =====================================================
// SQL COMPONENT
// =====================================================

function SQL({ goBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const { completed, markComplete: saveProgress } = useLearningProgress("dataanalyst-sql", subtopics);

  const [quizAnswers, setQuizAnswers] = useState({});

  const [quizSubmitted, setQuizSubmitted] = useState({});

  // ===================================================
  // SHUFFLED QUIZ OPTIONS
  // ===================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
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
  // QUIZ ANSWER
  // ===================================================

  const selectAnswer = (topicId, questionIndex, answer) => {
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
  // CALCULATE QUIZ SCORE
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
  // PREVIOUS TOPIC
  // ===================================================

  const goToPrevious = () => {
    const currentIndex = subtopics.findIndex(
      (topic) => topic.id === selectedTopic.id
    );

    if (currentIndex > 0) {
      setSelectedTopic(subtopics[currentIndex - 1]);
    }
  };

  // ===================================================
  // NEXT TOPIC
  // ===================================================

  const goToNext = () => {
    const currentIndex = subtopics.findIndex(
      (topic) => topic.id === selectedTopic.id
    );

    if (currentIndex < subtopics.length - 1) {
      setSelectedTopic(subtopics[currentIndex + 1]);
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
            ← Back to SQL
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
              Lesson {currentIndex + 1} of {subtopics.length}
            </div>

            <h1
              style={{
                color: "#1e3a8a",
                marginTop: "0",
              }}
            >
              {selectedTopic.icon} {selectedTopic.title}
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
                    {index + 1}. {section.heading}
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
                    <li key={index}>{mistake}</li>
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
                        border: "1px solid #dbeafe",
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
                          selectedAnswer === option;

                        const isCorrect =
                          option === question.answer;

                        let background = "white";

                        if (quizSubmittedForTopic) {
                          if (isCorrect) {
                            background = "#dcfce7";
                          } else if (isSelected) {
                            background = "#fee2e2";
                          }
                        } else if (isSelected) {
                          background = "#dbeafe";
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
                              textAlign: "left",
                              marginTop: "10px",
                              padding: "12px 15px",
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
                    border: "1px solid #bfdbfe",
                  }}
                >
                  <strong style={{ color: "#1e3a8a" }}>
                    🎯 Your Score: {score} /{" "}
                    {selectedTopic.lesson.quiz.length}
                  </strong>
                </div>
              )}
            </div>

            {/* Complete Lesson */}

            <div
              style={{
                marginTop: "30px",
                paddingTop: "25px",
                borderTop: "1px solid #e2e8f0",
              }}
            >
              <button
                onClick={() =>
                  saveProgress(selectedTopic.id)
                }
                style={{
                  background: completed.includes(
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
                {completed.includes(selectedTopic.id)
                  ? "✓ Lesson Completed"
                  : "✓ Mark Lesson Complete"}
              </button>
            </div>
          </div>

          {/* Navigation */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
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
              📚 All SQL Topics
            </button>

            <button
              onClick={goToNext}
              disabled={
                currentIndex === subtopics.length - 1
              }
              style={{
                background:
                  currentIndex === subtopics.length - 1
                    ? "#cbd5e1"
                    : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "11px 20px",
                cursor:
                  currentIndex === subtopics.length - 1
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
  // SQL ROADMAP PAGE
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
            🗄️ SQL
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Learn SQL step by step for data analysis
            and database querying.
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
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <strong style={{ color: "#1e3a8a" }}>
              Overall Progress
            </strong>

            <span style={{ color: "#64748b" }}>
              {completedCount} / {subtopics.length} Lessons
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
                transition: "width 0.3s ease",
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
          {subtopics.map((topic, index) => {
            const isCompleted =
              completed.includes(topic.id) || false;

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  border: "1px solid #bfdbfe",
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
                    margin: "0 0 15px 0",
                  }}
                >
                  {topic.icon} {topic.title}
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
                    marginBottom: "15px",
                  }}
                >
                  <div
                    style={{
                      width: isCompleted
                        ? "100%"
                        : "0%",
                      height: "100%",
                      background: "#2563eb",
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>

                <div
                  style={{
                    color: isCompleted
                      ? "#16a34a"
                      : "#64748b",
                    fontSize: "14px",
                    marginBottom: "18px",
                  }}
                >
                  {isCompleted
                    ? "✓ Completed"
                    : "0 / 1 completed"}
                </div>

                <button
                  onClick={() => openTopic(topic)}
                  style={{
                    width: "100%",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "11px 15px",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  ▶ Open Lesson
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SQL;