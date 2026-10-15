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

function DataVisualization({ goBack }) {
  const subtopics = [
    {
      id: "visualization-basics",
      title: "Visualization Basics",
      icon: "📊",
      lesson: {
        overview:
          "Data visualization is the process of representing data using charts, graphs, and other visual formats. Good visualizations make patterns, trends, comparisons, and relationships easier to understand.",

        sections: [
          {
            title: "Why Data Visualization Matters",
            content:
              "Large datasets can be difficult to understand when viewed only as rows and columns. Visualization converts data into a visual form so important patterns and insights can be identified quickly. Analysts use visualizations to communicate findings to both technical and non-technical audiences.",
          },
          {
            title: "Common Types of Visualizations",
            content:
              "Common visualizations include bar charts for comparing categories, line charts for showing trends over time, pie or donut charts for simple proportions, scatter plots for relationships between numerical variables, histograms for distributions, and box plots for understanding spread and outliers.",
          },
          {
            title: "Principles of Good Visualization",
            content:
              "A good visualization should have a clear purpose, appropriate chart type, readable labels, meaningful titles, and minimal unnecessary decoration. The visualization should make the important information easier to understand rather than creating additional confusion.",
          },
        ],

        mistakes: [
          "Using a complicated chart when a simple chart would communicate the information better.",
          "Leaving out titles, axis labels, or units.",
          "Using too many colors or visual elements.",
          "Creating a chart without first understanding the question the data needs to answer.",
        ],

        quiz: [
          {
            question: "What is the main purpose of data visualization?",
            options: [
              "To make data easier to understand",
              "To increase the size of a dataset",
              "To replace databases",
              "To remove all numerical values",
            ],
            answer: "To make data easier to understand",
          },
          {
            question: "Which chart is commonly used to show trends over time?",
            options: [
              "Line chart",
              "Pie chart",
              "Histogram",
              "Box plot",
            ],
            answer: "Line chart",
          },
          {
            question: "What should be considered before selecting a chart?",
            options: [
              "The question being answered",
              "The computer's wallpaper",
              "The file name only",
              "The number of folders in the project",
            ],
            answer: "The question being answered",
          },
        ],
      },
    },

    {
      id: "matplotlib",
      title: "Matplotlib",
      icon: "📈",
      lesson: {
        overview:
          "Matplotlib is a popular Python library for creating static, animated, and interactive visualizations. It provides flexible tools for creating charts and customizing their appearance.",

        sections: [
          {
            title: "Getting Started with Matplotlib",
            content:
              "Matplotlib is commonly imported using import matplotlib.pyplot as plt. The pyplot module provides functions for creating charts such as plt.plot(), plt.bar(), plt.scatter(), and plt.hist(). Charts can be displayed using plt.show().",
          },
          {
            title: "Creating and Customizing Charts",
            content:
              "Matplotlib allows analysts to customize titles, axis labels, legends, markers, line styles, and figure dimensions. Functions such as plt.title(), plt.xlabel(), plt.ylabel(), and plt.legend() help make charts easier to interpret.",
          },
          {
            title: "Common Matplotlib Charts",
            content:
              "Line charts can be created with plt.plot(), bar charts with plt.bar(), scatter plots with plt.scatter(), and histograms with plt.hist(). The chart type should be selected according to the type of data and the analytical question.",
          },
        ],

        mistakes: [
          "Forgetting to label axes.",
          "Using a chart type that does not match the data.",
          "Creating charts without meaningful titles.",
          "Adding unnecessary visual complexity.",
        ],

        quiz: [
          {
            question: "Which module is commonly imported as plt?",
            options: [
              "matplotlib.pyplot",
              "pandas.data",
              "numpy.chart",
              "seaborn.pyplot",
            ],
            answer: "matplotlib.pyplot",
          },
          {
            question: "Which function creates a bar chart in Matplotlib?",
            options: [
              "plt.bar()",
              "plt.line()",
              "plt.column()",
              "plt.graph()",
            ],
            answer: "plt.bar()",
          },
          {
            question: "Which function is used to display a Matplotlib chart?",
            options: [
              "plt.show()",
              "plt.displayData()",
              "plt.open()",
              "plt.renderChart()",
            ],
            answer: "plt.show()",
          },
        ],
      },
    },

    {
      id: "seaborn",
      title: "Seaborn",
      icon: "🎨",
      lesson: {
        overview:
          "Seaborn is a Python visualization library built on top of Matplotlib. It provides a high-level interface for creating attractive and informative statistical graphics and works particularly well with Pandas DataFrames.",

        sections: [
          {
            title: "Introduction to Seaborn",
            content:
              "Seaborn simplifies many common statistical visualization tasks. It can create charts such as bar plots, count plots, scatter plots, box plots, histograms, and heatmaps using concise Python code.",
          },
          {
            title: "Working with DataFrames",
            content:
              "Seaborn integrates naturally with Pandas DataFrames. Columns can be passed directly to plotting functions using parameters such as x, y, hue, and data. This makes it convenient for exploring relationships and patterns in structured datasets.",
          },
          {
            title: "Statistical Visualizations",
            content:
              "Seaborn provides visualization functions that can reveal distributions, category comparisons, relationships, and correlations. For example, sns.boxplot() can help identify spread and outliers, while sns.heatmap() can display correlation matrices.",
          },
        ],

        mistakes: [
          "Using Seaborn without understanding the underlying data.",
          "Choosing variables that are not appropriate for the selected chart.",
          "Using too many categories in one visualization.",
          "Assuming a visual correlation automatically proves causation.",
        ],

        quiz: [
          {
            question: "Seaborn is built on top of which visualization library?",
            options: [
              "Matplotlib",
              "NumPy",
              "Pandas",
              "TensorFlow",
            ],
            answer: "Matplotlib",
          },
          {
            question: "Which Seaborn function can be used to create a heatmap?",
            options: [
              "sns.heatmap()",
              "sns.matrix()",
              "sns.gridmap()",
              "sns.colorplot()",
            ],
            answer: "sns.heatmap()",
          },
          {
            question: "Which parameter can be used to separate categories using color?",
            options: [
              "hue",
              "colorGroup",
              "categoryColor",
              "groupByColor",
            ],
            answer: "hue",
          },
        ],
      },
    },

    {
      id: "choosing-right-chart",
      title: "Choosing the Right Chart",
      icon: "📉",
      lesson: {
        overview:
          "Selecting the correct chart is an important analytical skill. The best visualization depends on the type of data, the relationship being investigated, and the message that needs to be communicated.",

        sections: [
          {
            title: "Comparison",
            content:
              "Bar charts are useful when comparing values across discrete categories. Grouped or stacked bar charts can be used when multiple categories or components need to be compared.",
          },
          {
            title: "Trends and Relationships",
            content:
              "Line charts are useful for showing changes over time. Scatter plots are useful for examining relationships between two numerical variables. Adding trend lines or grouping variables can make relationships easier to analyze.",
          },
          {
            title: "Distributions and Composition",
            content:
              "Histograms show how numerical values are distributed. Box plots summarize distributions and can highlight outliers. Pie or donut charts can show simple part-to-whole relationships, although they should not be overloaded with categories.",
          },
        ],

        mistakes: [
          "Using pie charts for too many categories.",
          "Using line charts when the x-axis does not represent an ordered sequence.",
          "Using 3D charts when a 2D chart communicates the information more clearly.",
          "Choosing charts based only on appearance instead of purpose.",
        ],

        quiz: [
          {
            question: "Which chart is generally useful for comparing categories?",
            options: [
              "Bar chart",
              "Line chart",
              "Scatter plot",
              "Histogram",
            ],
            answer: "Bar chart",
          },
          {
            question: "Which chart is commonly used to show a trend over time?",
            options: [
              "Line chart",
              "Pie chart",
              "Box plot",
              "Heatmap",
            ],
            answer: "Line chart",
          },
          {
            question: "Which chart is useful for examining the relationship between two numerical variables?",
            options: [
              "Scatter plot",
              "Pie chart",
              "Bar chart",
              "Donut chart",
            ],
            answer: "Scatter plot",
          },
        ],
      },
    },

    {
      id: "data-storytelling",
      title: "Data Storytelling",
      icon: "📖",
      lesson: {
        overview:
          "Data storytelling combines data, visualizations, and explanation to communicate meaningful insights. It helps an audience understand not only what happened, but also why the finding matters and what action may be appropriate.",

        sections: [
          {
            title: "From Data to Insight",
            content:
              "Data storytelling begins with understanding the analytical question. The analyst explores the data, identifies meaningful patterns, selects appropriate visualizations, and explains the insight in a way that connects directly to the original question.",
          },
          {
            title: "Building a Clear Narrative",
            content:
              "A strong data story generally has a clear beginning, key evidence, and a conclusion. Charts should support the narrative rather than overwhelm the audience. Important findings should be highlighted while unnecessary information is reduced.",
          },
          {
            title: "Communicating Recommendations",
            content:
              "The final part of a data story can explain the practical meaning of the findings. Recommendations should be supported by evidence from the analysis and should clearly communicate what the audience should understand or consider doing next.",
          },
        ],

        mistakes: [
          "Showing charts without explaining the insight.",
          "Including every available metric instead of focusing on important findings.",
          "Making unsupported claims from visual patterns.",
          "Ignoring the audience's level of technical knowledge.",
        ],

        quiz: [
          {
            question: "What does data storytelling combine?",
            options: [
              "Data, visualizations, and explanation",
              "Only programming code",
              "Only database tables",
              "Only presentation animations",
            ],
            answer: "Data, visualizations, and explanation",
          },
          {
            question: "What should visualizations do in a data story?",
            options: [
              "Support the narrative and communicate insights",
              "Make the presentation longer",
              "Replace all explanations",
              "Display every available column",
            ],
            answer: "Support the narrative and communicate insights",
          },
          {
            question: "What should recommendations be based on?",
            options: [
              "Evidence from the analysis",
              "Random assumptions",
              "Chart colors",
              "The number of rows in the dataset",
            ],
            answer: "Evidence from the analysis",
          },
        ],
      },
    },
  ];

  const { completed, markComplete: saveProgress } = useLearningProgress("dataanalyst-datavisualization", subtopics);
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
            ← Back to Data Visualization
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
            📈 Data Visualization
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Learn how to communicate data effectively using charts,
            visualization libraries, and data storytelling.
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

export default DataVisualization;