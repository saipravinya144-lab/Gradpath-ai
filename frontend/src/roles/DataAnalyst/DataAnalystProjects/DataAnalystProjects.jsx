import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
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

function DataAnalystProjects({ goBack }) {
  const subtopics = [
    {
      id: "excel-project",
      title: "Excel Project",
      icon: "📗",
      lesson: {
        overview:
          "An Excel project gives you practical experience cleaning, analyzing, and presenting structured data. The goal is to transform a raw dataset into useful insights using Excel's analytical features.",

        sections: [
          {
            title: "Project Objective",
            content:
              "Choose a realistic dataset such as sales, customer, employee, or inventory data. Start by understanding the columns and the business questions that the dataset can answer. Define a small set of useful questions before beginning the analysis.",
          },
          {
            title: "Data Cleaning and Analysis",
            content:
              "Clean missing or inconsistent values, remove unnecessary duplicates, format columns correctly, and use formulas and functions to calculate useful metrics. Pivot tables can then be used to summarize the data by categories such as product, region, month, or customer segment.",
          },
          {
            title: "Dashboard and Insights",
            content:
              "Create charts and a simple dashboard that communicate the most important findings. Include meaningful titles, labels, key metrics, and concise observations. The final workbook should allow another person to understand the main results without inspecting every raw-data row.",
          },
        ],

        mistakes: [
          "Starting the dashboard before cleaning the dataset.",
          "Using formulas without understanding what the resulting metric represents.",
          "Creating charts that do not answer a specific question.",
          "Including too much information on the dashboard.",
        ],

        quiz: [
          {
            question: "What should you generally do before building an Excel dashboard?",
            options: [
              "Clean and understand the data",
              "Delete the raw dataset",
              "Add random charts",
              "Change the workbook theme only",
            ],
            answer: "Clean and understand the data",
          },
          {
            question: "Which Excel feature is useful for summarizing data by categories?",
            options: [
              "Pivot Table",
              "WordArt",
              "Page Break",
              "Header",
            ],
            answer: "Pivot Table",
          },
          {
            question: "What should a project dashboard communicate?",
            options: [
              "Important findings and useful metrics",
              "Every row in the dataset",
              "Only formulas",
              "Only formatting choices",
            ],
            answer: "Important findings and useful metrics",
          },
        ],
      },
    },

    {
      id: "sql-project",
      title: "SQL Project",
      icon: "🗄️",
      lesson: {
        overview:
          "A SQL project helps you practice retrieving, aggregating, joining, and analyzing data stored in relational databases. A good project focuses on answering realistic business questions using SQL queries.",

        sections: [
          {
            title: "Project Setup",
            content:
              "Choose a relational dataset such as an e-commerce database containing customers, products, orders, and payments. Understand the tables, primary keys, foreign keys, and relationships before writing queries.",
          },
          {
            title: "Querying the Data",
            content:
              "Write queries using SELECT, WHERE, ORDER BY, GROUP BY, HAVING, aggregate functions, joins, subqueries, and window functions where appropriate. Each query should answer a clearly defined analytical question.",
          },
          {
            title: "Analyzing Results",
            content:
              "Use SQL results to identify patterns such as top-selling products, high-value customers, monthly revenue, customer activity, or changes in performance. Document the questions and queries so that the analysis can be reproduced.",
          },
        ],

        mistakes: [
          "Writing complex queries without first understanding table relationships.",
          "Using incorrect joins that duplicate or lose records.",
          "Grouping by the wrong columns.",
          "Writing queries without knowing what analytical question they are intended to answer.",
        ],

        quiz: [
          {
            question: "What should you understand before writing complex SQL queries?",
            options: [
              "Tables and their relationships",
              "Only the database name",
              "Only the column colors",
              "Only the number of files",
            ],
            answer: "Tables and their relationships",
          },
          {
            question: "Which SQL feature is commonly used to combine related tables?",
            options: [
              "JOIN",
              "STYLE",
              "FORMAT",
              "DISPLAY",
            ],
            answer: "JOIN",
          },
          {
            question: "What should each analytical SQL query ideally answer?",
            options: [
              "A clearly defined question",
              "A random calculation",
              "A formatting requirement",
              "A file-management task",
            ],
            answer: "A clearly defined question",
          },
        ],
      },
    },

    {
      id: "python-eda-project",
      title: "Python EDA Project",
      icon: "🐍",
      lesson: {
        overview:
          "Exploratory Data Analysis, or EDA, is the process of examining a dataset to understand its structure, distributions, relationships, patterns, and potential problems. Python provides powerful tools for performing EDA with NumPy, Pandas, and visualization libraries.",

        sections: [
          {
            title: "Dataset Exploration",
            content:
              "Begin by loading the dataset with Pandas and examining its shape, columns, data types, missing values, duplicate records, and basic statistics. This initial exploration helps identify data-quality issues and determines the next steps.",
          },
          {
            title: "Cleaning and Analysis",
            content:
              "Handle missing values, incorrect data types, duplicates, and unusual values where appropriate. Use Pandas operations to calculate statistics, group records, compare categories, and investigate relationships between variables.",
          },
          {
            title: "Visual Exploration",
            content:
              "Use Matplotlib or Seaborn to visualize distributions, trends, comparisons, and relationships. Combine numerical analysis with visual evidence to identify meaningful patterns and explain what they might indicate.",
          },
        ],

        mistakes: [
          "Skipping initial inspection of the dataset.",
          "Deleting missing values without considering why they are missing.",
          "Treating every outlier as an error.",
          "Creating visualizations without connecting them to an analytical question.",
        ],

        quiz: [
          {
            question: "What does EDA stand for?",
            options: [
              "Exploratory Data Analysis",
              "External Data Application",
              "Enhanced Database Analysis",
              "Electronic Data Automation",
            ],
            answer: "Exploratory Data Analysis",
          },
          {
            question: "Which Python library is commonly used for working with tabular data?",
            options: [
              "Pandas",
              "Flask",
              "Requests",
              "Tkinter",
            ],
            answer: "Pandas",
          },
          {
            question: "Why are visualizations useful during EDA?",
            options: [
              "They help reveal patterns and relationships",
              "They automatically prove causation",
              "They replace all data cleaning",
              "They remove the need for analysis",
            ],
            answer: "They help reveal patterns and relationships",
          },
        ],
      },
    },

    {
      id: "power-bi-dashboard",
      title: "Power BI Dashboard",
      icon: "📊",
      lesson: {
        overview:
          "A Power BI dashboard project combines data preparation, modeling, DAX calculations, and visualization into an interactive analytical solution. The project should turn raw business data into a report that helps users make decisions.",

        sections: [
          {
            title: "Prepare the Data",
            content:
              "Import data from one or more sources and use Power Query to clean and transform it. Check data types, remove unnecessary fields, handle missing values, and create a suitable structure for analysis.",
          },
          {
            title: "Build the Model",
            content:
              "Create relationships between related tables and organize the model appropriately. Define important measures using DAX, such as total sales, average sales, customer counts, or year-over-year metrics depending on the dataset.",
          },
          {
            title: "Create the Dashboard",
            content:
              "Build report pages using cards, charts, tables, slicers, and other appropriate visuals. Organize the dashboard around important business questions and provide a clear visual hierarchy so users can quickly identify key insights.",
          },
        ],

        mistakes: [
          "Creating visuals before building a reliable data model.",
          "Using too many visuals on one page.",
          "Creating DAX measures without understanding filter context.",
          "Designing the report without considering the intended audience.",
        ],

        quiz: [
          {
            question: "What should be done to raw data before creating a Power BI report?",
            options: [
              "Clean and transform it appropriately",
              "Delete all columns",
              "Convert everything into text",
              "Create charts immediately",
            ],
            answer: "Clean and transform it appropriately",
          },
          {
            question: "What is commonly used to create analytical calculations in Power BI?",
            options: [
              "DAX",
              "HTML",
              "CSS",
              "Git",
            ],
            answer: "DAX",
          },
          {
            question: "What should guide the design of a Power BI dashboard?",
            options: [
              "Important business questions and the target audience",
              "The number of available colors",
              "The size of the raw file",
              "Random chart selection",
            ],
            answer:
              "Important business questions and the target audience",
          },
        ],
      },
    },

    {
      id: "end-to-end-data-analysis",
      title: "End-to-End Data Analysis",
      icon: "🏆",
      lesson: {
        overview:
          "An end-to-end data analysis project combines the skills learned throughout the Data Analyst roadmap. You work from raw data through cleaning, analysis, visualization, and communication to produce a complete analytical solution.",

        sections: [
          {
            title: "Define the Problem",
            content:
              "Start by identifying a realistic business or analytical problem. Define the questions that need to be answered, the metrics that matter, and the data required. A clearly defined problem prevents the analysis from becoming unfocused.",
          },
          {
            title: "Clean and Analyze",
            content:
              "Collect or load the required datasets, inspect their quality, clean and transform the data, and perform exploratory analysis. Use SQL, Excel, or Python depending on the nature of the task and combine tools when appropriate.",
          },
          {
            title: "Visualize and Present Findings",
            content:
              "Create appropriate visualizations or dashboards and communicate the major findings. Explain the evidence behind each conclusion and provide practical recommendations where appropriate. Document the workflow so that the analysis can be understood and reproduced.",
          },
        ],

        mistakes: [
          "Starting analysis without defining the problem.",
          "Using every available tool simply because it is available.",
          "Reporting observations without explaining their significance.",
          "Failing to document assumptions, cleaning decisions, and methodology.",
        ],

        quiz: [
          {
            question: "What is the first important step in an end-to-end analysis project?",
            options: [
              "Define the problem and questions",
              "Create random charts",
              "Write SQL immediately",
              "Build a dashboard immediately",
            ],
            answer: "Define the problem and questions",
          },
          {
            question: "Which tools can be combined in a data analysis project?",
            options: [
              "Excel, SQL, Python, and Power BI",
              "Only one programming language",
              "Only a presentation tool",
              "Only a database",
            ],
            answer: "Excel, SQL, Python, and Power BI",
          },
          {
            question: "What should a final analysis communicate?",
            options: [
              "Evidence-based findings and their practical meaning",
              "Only raw data",
              "Only source code",
              "Only chart designs",
            ],
            answer:
              "Evidence-based findings and their practical meaning",
          },
        ],
      },
    },
  ];

  const { completed, markComplete: saveProgress } = useLearningProgress("dataanalyst-dataanalystprojects", subtopics);
  const [activeTopic, setActiveTopic] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const completedCount = completed.length;

  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const openTopic = (topic) => {
    setActiveTopic(topic);
    setQuizStarted(false);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const closeTopic = () => {
    setActiveTopic(null);
    setQuizStarted(false);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const submitAnswer = async () => {
    if (!selectedAnswer) return;

    const question = activeTopic.lesson.quiz[questionIndex];

    if (selectedAnswer === question.answer) {
      setQuizScore((prev) => prev + 1);
    }

    if (questionIndex < activeTopic.lesson.quiz.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      const finalScore = quizScore;

      await saveQuizResult({
        subject: "Data Analyst",
        role: "Data Analyst",
        topic: activeTopic.title,
        topicId: activeTopic.id,
        score: finalScore,
        totalQuestions: activeTopic.lesson.quiz.length
      });

      setQuizFinished(true);
    }
  };

  const markComplete = () => {
    saveProgress(activeTopic.id);
  };

  if (activeTopic) {
    const quiz = activeTopic.lesson.quiz;
    const question = quiz[questionIndex];
    const options = shuffledQuizOptions[activeTopic.id][questionIndex];

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #eef6ff, #ffffff)",
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
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
            ← Back to Data Analyst Projects
          </button>

          <div
            style={{
              background: "white",
              border: "1px solid #bfdbfe",
              borderRadius: "14px",
              padding: "35px",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
            }}
          >
            <h1
              style={{
                color: "#1e3a8a",
                marginTop: 0,
                marginBottom: "12px",
              }}
            >
              {activeTopic.icon} {activeTopic.title}
            </h1>

            <div
              style={{
                color: "#64748b",
                lineHeight: "1.7",
                marginBottom: "30px",
              }}
            >
              <h3 style={{ color: "#1e3a8a" }}>Overview</h3>
              <p>{activeTopic.lesson.overview}</p>
            </div>

            {activeTopic.lesson.sections.map((section) => (
              <div
                key={section.title}
                style={{
                  marginBottom: "25px",
                }}
              >
                <h3
                  style={{
                    color: "#1e3a8a",
                    marginBottom: "8px",
                  }}
                >
                  {section.title}
                </h3>

                <p
                  style={{
                    color: "#475569",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {section.content}
                </p>
              </div>
            ))}

            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "10px",
                padding: "20px",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <h3
                style={{
                  color: "#1e3a8a",
                  marginTop: 0,
                }}
              >
                ⚠️ Common Mistakes
              </h3>

              <ul
                style={{
                  color: "#475569",
                  lineHeight: "1.8",
                  marginBottom: 0,
                }}
              >
                {activeTopic.lesson.mistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </div>

            {!quizStarted && !completed.includes(activeTopic.id) && (
              <button
                onClick={startQuiz}
                style={{
                  width: "100%",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "13px 18px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                📝 Start Quiz
              </button>
            )}

            {completed.includes(activeTopic.id) && !quizStarted && (
              <div
                style={{
                  background: "#eff6ff",
                  border: "1px solid #93c5fd",
                  borderRadius: "10px",
                  padding: "18px",
                  textAlign: "center",
                  color: "#1e3a8a",
                  fontWeight: "600",
                }}
              >
                ✅ Lesson Completed
              </div>
            )}

            {quizStarted && !quizFinished && (
              <div
                style={{
                  marginTop: "30px",
                  borderTop: "1px solid #dbeafe",
                  paddingTop: "30px",
                }}
              >
                <div
                  style={{
                    color: "#64748b",
                    marginBottom: "12px",
                  }}
                >
                  Question {questionIndex + 1} of {quiz.length}
                </div>

                <h3
                  style={{
                    color: "#1e3a8a",
                    marginBottom: "20px",
                  }}
                >
                  {question.question}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gap: "12px",
                  }}
                >
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedAnswer(option)}
                      style={{
                        textAlign: "left",
                        padding: "13px 16px",
                        borderRadius: "8px",
                        border:
                          selectedAnswer === option
                            ? "2px solid #2563eb"
                            : "1px solid #bfdbfe",
                        background:
                          selectedAnswer === option
                            ? "#eff6ff"
                            : "white",
                        color: "#334155",
                        cursor: "pointer",
                        fontSize: "15px",
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <button
                  onClick={submitAnswer}
                  disabled={!selectedAnswer}
                  style={{
                    width: "100%",
                    marginTop: "22px",
                    background: selectedAnswer ? "#2563eb" : "#94a3b8",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "13px 18px",
                    cursor: selectedAnswer ? "pointer" : "not-allowed",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {questionIndex === quiz.length - 1
                    ? "Finish Quiz"
                    : "Next Question →"}
                </button>
              </div>
            )}

            {quizFinished && (
              <div
                style={{
                  marginTop: "30px",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "12px",
                  padding: "25px",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    color: "#1e3a8a",
                    marginTop: 0,
                  }}
                >
                  🎉 Quiz Completed!
                </h2>

                <p
                  style={{
                    color: "#475569",
                    fontSize: "17px",
                  }}
                >
                  Score: {quizScore} / {quiz.length}
                </p>

                {!completed.includes(activeTopic.id) && (
                  <button
                    onClick={markComplete}
                    style={{
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "12px 20px",
                      cursor: "pointer",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    ✅ Mark Lesson Complete
                  </button>
                )}

                {completed.includes(activeTopic.id) && (
                  <p
                    style={{
                      color: "#1e3a8a",
                      fontWeight: "600",
                    }}
                  >
                    ✅ This lesson is already completed.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef6ff, #ffffff)",
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
            💼 Data Analyst Projects
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Apply your Excel, SQL, Python, and Power BI skills through
            practical data analysis projects.
          </p>
        </div>

        <div
          style={{
            background: "white",
            border: "1px solid #bfdbfe",
            borderRadius: "14px",
            padding: "22px",
            marginBottom: "30px",
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
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

          <div
            style={{
              textAlign: "right",
              color: "#64748b",
              fontSize: "14px",
              marginTop: "8px",
            }}
          >
            {overallProgress}% Complete
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
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
                  border: "1px solid #bfdbfe",
                  borderRadius: "14px",
                  padding: "25px",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    color: "#64748b",
                    marginBottom: "10px",
                  }}
                >
                  Project {index + 1}
                </div>

                <h3
                  style={{
                    color: "#1e3a8a",
                    minHeight: "52px",
                    margin: "0 0 15px 0",
                  }}
                >
                  {topic.icon} {topic.title}
                </h3>

                <div
                  style={{
                    color: isCompleted ? "#2563eb" : "#64748b",
                    marginBottom: "12px",
                  }}
                >
                  {isCompleted ? "✅ Completed" : "📚 Project Lesson"}
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "#dbeafe",
                    borderRadius: "8px",
                    overflow: "hidden",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: isCompleted ? "100%" : "0%",
                      height: "100%",
                      background: "#2563eb",
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "18px",
                  }}
                >
                  <span
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                    }}
                  >
                    {isCompleted ? "1 / 1 completed" : "0 / 1 completed"}
                  </span>
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
                  ▶ Open Project
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DataAnalystProjects;