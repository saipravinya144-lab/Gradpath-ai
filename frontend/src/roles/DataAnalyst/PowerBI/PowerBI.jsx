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

function PowerBI({ goBack }) {
  const subtopics = [
    {
      id: "power-bi-basics",
      title: "Power BI Basics",
      icon: "📊",
      lesson: {
        overview:
          "Power BI is a business intelligence and data visualization platform from Microsoft. It allows users to connect to data, transform it, build interactive reports, and share insights through dashboards and reports.",

        sections: [
          {
            title: "What is Power BI?",
            content:
              "Power BI is used to turn data from different sources into interactive visual reports. It is widely used for business analysis, reporting, monitoring performance, and communicating data-driven insights.",
          },
          {
            title: "Power BI Components",
            content:
              "Important Power BI components include Power BI Desktop for creating reports, Power BI Service for publishing and sharing reports, and Power BI Mobile for viewing reports on mobile devices. Power Query is used for data transformation and DAX is used for calculations.",
          },
          {
            title: "Basic Power BI Workflow",
            content:
              "A typical workflow involves connecting to a data source, transforming and cleaning the data, creating a data model, building visualizations, adding calculations, and finally publishing or sharing the report.",
          },
        ],

        mistakes: [
          "Confusing Power BI Desktop with Power BI Service.",
          "Building visualizations before understanding and cleaning the data.",
          "Adding too many visuals to one report page.",
          "Ignoring the structure and relationships between datasets.",
        ],

        quiz: [
          {
            question: "What is Power BI primarily used for?",
            options: [
              "Data analysis and business intelligence",
              "Operating system development",
              "Video game development",
              "Writing device drivers",
            ],
            answer: "Data analysis and business intelligence",
          },
          {
            question: "Which Power BI component is commonly used to create reports?",
            options: [
              "Power BI Desktop",
              "Power BI Compiler",
              "Power BI Terminal",
              "Power BI Kernel",
            ],
            answer: "Power BI Desktop",
          },
          {
            question: "Which tool is used for data transformation in Power BI?",
            options: [
              "Power Query",
              "PowerShell only",
              "Visual Studio",
              "Git",
            ],
            answer: "Power Query",
          },
        ],
      },
    },

    {
      id: "importing-data",
      title: "Importing Data",
      icon: "📥",
      lesson: {
        overview:
          "Power BI can connect to many different data sources. Understanding how to import data correctly is an important first step in creating reliable reports.",

        sections: [
          {
            title: "Common Data Sources",
            content:
              "Power BI can connect to sources such as Excel workbooks, CSV files, SQL databases, web sources, cloud services, and many other systems. The appropriate connector depends on where the data is stored.",
          },
          {
            title: "Loading Data into Power BI",
            content:
              "In Power BI Desktop, users can select Get Data, choose an appropriate connector, select the required tables or files, and load the data. Before loading, Power Query can be used to inspect and transform the imported data.",
          },
          {
            title: "Import vs DirectQuery",
            content:
              "Import mode loads data into Power BI's model, which can provide fast report performance. DirectQuery allows Power BI to query the underlying data source when users interact with a report. The choice depends on data size, freshness requirements, and source capabilities.",
          },
        ],

        mistakes: [
          "Selecting the wrong data source or connector.",
          "Loading unnecessary columns and tables.",
          "Ignoring data types during import.",
          "Using DirectQuery without understanding its performance implications.",
        ],

        quiz: [
          {
            question: "Which option is commonly used to connect Power BI to external data?",
            options: [
              "Get Data",
              "Get Code",
              "Get Theme",
              "Get Layout",
            ],
            answer: "Get Data",
          },
          {
            question: "Which mode loads data into the Power BI data model?",
            options: [
              "Import",
              "DirectQuery only",
              "Streaming only",
              "Preview",
            ],
            answer: "Import",
          },
          {
            question: "What should be checked when importing data?",
            options: [
              "Data types and structure",
              "Only file color",
              "Only file name",
              "Only screen resolution",
            ],
            answer: "Data types and structure",
          },
        ],
      },
    },

    {
      id: "data-transformation",
      title: "Data Transformation",
      icon: "🧹",
      lesson: {
        overview:
          "Data transformation prepares raw data for analysis. Power Query provides tools for cleaning, reshaping, combining, and transforming datasets before they are used in reports.",

        sections: [
          {
            title: "Cleaning Data",
            content:
              "Common cleaning operations include removing unnecessary rows or columns, handling missing values, correcting data types, removing duplicates, and replacing incorrect values. Clean data improves the reliability of analysis.",
          },
          {
            title: "Transforming Data",
            content:
              "Power Query can split columns, merge columns, pivot and unpivot data, filter rows, group values, and create calculated transformations. These operations help convert raw datasets into a structure suitable for analysis.",
          },
          {
            title: "Applied Steps",
            content:
              "Power Query records transformations as Applied Steps. Each step represents an operation performed on the data. This makes the transformation process repeatable and easier to review or modify later.",
          },
        ],

        mistakes: [
          "Changing data without understanding its original meaning.",
          "Using inconsistent data types.",
          "Keeping duplicate or irrelevant data.",
          "Performing transformations manually outside Power BI when they could be made reproducible in Power Query.",
        ],

        quiz: [
          {
            question: "Which Power BI tool is mainly used for data transformation?",
            options: [
              "Power Query",
              "Power BI Mobile",
              "Power BI Service only",
              "DAX Studio",
            ],
            answer: "Power Query",
          },
          {
            question: "What does removing duplicates help with?",
            options: [
              "Improving data quality",
              "Increasing duplicate records",
              "Changing the monitor resolution",
              "Creating user accounts",
            ],
            answer: "Improving data quality",
          },
          {
            question: "Where are Power Query transformations recorded?",
            options: [
              "Applied Steps",
              "Visual Gallery",
              "Dashboard History",
              "Theme Settings",
            ],
            answer: "Applied Steps",
          },
        ],
      },
    },

    {
      id: "data-modeling",
      title: "Data Modeling",
      icon: "🗂️",
      lesson: {
        overview:
          "Data modeling organizes tables and relationships so that Power BI can analyze data correctly. A well-designed model improves report accuracy, performance, and maintainability.",

        sections: [
          {
            title: "Tables and Relationships",
            content:
              "Power BI models can contain multiple tables connected through relationships. Relationships define how records in one table correspond to records in another table and allow visuals to combine information from different datasets.",
          },
          {
            title: "Fact and Dimension Tables",
            content:
              "A common modeling approach is a star schema. Fact tables generally contain measurable business events, while dimension tables contain descriptive information such as customers, products, or dates.",
          },
          {
            title: "Keys and Cardinality",
            content:
              "Relationships use columns that act as keys. Cardinality describes how records in two tables relate, such as one-to-many or many-to-many. Choosing appropriate relationships is important for obtaining correct results from reports.",
          },
        ],

        mistakes: [
          "Creating unnecessary relationships between tables.",
          "Using duplicate values incorrectly as relationship keys.",
          "Ignoring relationship direction and cardinality.",
          "Building an overly complicated data model.",
        ],

        quiz: [
          {
            question: "What is the purpose of relationships between Power BI tables?",
            options: [
              "To connect related data",
              "To change screen brightness",
              "To install Power BI",
              "To create presentation animations",
            ],
            answer: "To connect related data",
          },
          {
            question: "Which schema is commonly recommended for analytical models?",
            options: [
              "Star schema",
              "Circular schema",
              "Random schema",
              "Single-cell schema",
            ],
            answer: "Star schema",
          },
          {
            question: "What does cardinality describe?",
            options: [
              "How records in two tables relate",
              "The report's page size",
              "The number of dashboard colors",
              "The file's compression level",
            ],
            answer: "How records in two tables relate",
          },
        ],
      },
    },

    {
      id: "dax-basics",
      title: "DAX Basics",
      icon: "🧮",
      lesson: {
        overview:
          "DAX, or Data Analysis Expressions, is the formula language used in Power BI for creating calculations. It is especially important for measures, calculated columns, and calculated tables.",

        sections: [
          {
            title: "What is DAX?",
            content:
              "DAX is a formula language designed for data analysis. It provides functions for aggregation, filtering, time-based calculations, logical operations, and many other analytical tasks.",
          },
          {
            title: "Measures vs Calculated Columns",
            content:
              "Measures are calculations evaluated based on the current filter context and are commonly used in reports. Calculated columns are computed for individual rows and stored as part of the table. Choosing between them depends on the type of calculation required.",
          },
          {
            title: "Common DAX Functions",
            content:
              "Common DAX functions include SUM(), AVERAGE(), COUNT(), CALCULATE(), IF(), and DISTINCTCOUNT(). CALCULATE() is particularly important because it modifies the filter context used to evaluate an expression.",
          },
        ],

        mistakes: [
          "Confusing measures with calculated columns.",
          "Ignoring filter context when writing DAX.",
          "Using calculated columns when a measure would be more appropriate.",
          "Writing complex formulas without first understanding the required calculation.",
        ],

        quiz: [
          {
            question: "What does DAX stand for?",
            options: [
              "Data Analysis Expressions",
              "Data Application Extension",
              "Database Analysis XML",
              "Dynamic Analytics Execution",
            ],
            answer: "Data Analysis Expressions",
          },
          {
            question: "Which DAX function can modify filter context?",
            options: [
              "CALCULATE()",
              "PRINT()",
              "DISPLAY()",
              "FILTERSCREEN()",
            ],
            answer: "CALCULATE()",
          },
          {
            question: "What is commonly used for calculations that respond to report filters?",
            options: [
              "Measures",
              "File names",
              "Page backgrounds",
              "Data source icons",
            ],
            answer: "Measures",
          },
        ],
      },
    },

    {
      id: "reports-dashboards",
      title: "Reports & Dashboards",
      icon: "📈",
      lesson: {
        overview:
          "Power BI reports and dashboards present analytical results through interactive visualizations. Effective report design helps users quickly understand important metrics and make informed decisions.",

        sections: [
          {
            title: "Building Reports",
            content:
              "Power BI reports can contain multiple pages with charts, tables, cards, slicers, and other visuals. Visuals can interact with one another, allowing users to filter and explore the underlying data.",
          },
          {
            title: "Filters and Slicers",
            content:
              "Filters restrict the data displayed by visuals. Slicers provide an interactive way for report users to select values such as dates, regions, products, or departments and explore the report dynamically.",
          },
          {
            title: "Dashboard Design",
            content:
              "A good dashboard focuses on important metrics and presents them in a clear visual hierarchy. Consistent formatting, meaningful titles, appropriate chart choices, and limited clutter make dashboards easier to understand.",
          },
        ],

        mistakes: [
          "Putting too many visuals on one page.",
          "Using inconsistent formatting across reports.",
          "Ignoring the needs of the report's target audience.",
          "Using decorative visuals that do not provide analytical value.",
        ],

        quiz: [
          {
            question: "What is the purpose of a slicer in Power BI?",
            options: [
              "To let users interactively filter data",
              "To delete the entire report",
              "To install Power BI",
              "To change the operating system",
            ],
            answer: "To let users interactively filter data",
          },
          {
            question: "What makes a dashboard easier to understand?",
            options: [
              "Clear visual hierarchy and limited clutter",
              "Maximum number of charts",
              "Random formatting",
              "Unlabeled visuals",
            ],
            answer: "Clear visual hierarchy and limited clutter",
          },
          {
            question: "What can multiple report visuals often do?",
            options: [
              "Interact through filtering and selection",
              "Replace the database",
              "Change computer hardware",
              "Install external applications",
            ],
            answer: "Interact through filtering and selection",
          },
        ],
      },
    },
  ];

  const { completed, markComplete: saveProgress } = useLearningProgress("dataanalyst-powerbi", subtopics);
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
            ← Back to Power BI
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
            📊 Power BI
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Learn Power BI for data transformation, modeling, analysis,
            visualization, and dashboard creation.
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
                  Lesson {index + 1}
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
                  {isCompleted ? "✅ Completed" : "📚 Lesson"}
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

export default PowerBI;