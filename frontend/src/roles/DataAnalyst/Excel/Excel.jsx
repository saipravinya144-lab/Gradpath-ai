import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "excel-basics",
    title: "Excel Basics",
    icon: "📗",
    lesson: {
      overview:
        "Excel is a spreadsheet application used to organize, calculate, analyze, and visualize data. Understanding the basic structure of worksheets, cells, rows, columns, and tables is the foundation for effective data analysis.",
      sections: [
        {
          heading: "Understanding the Excel Interface",
          points: [
            "A workbook is an Excel file that can contain multiple worksheets.",
            "A worksheet is organized into rows and columns.",
            "A cell is the intersection of a row and a column.",
            "Each cell has an address such as A1, B5, or C10.",
            "The formula bar displays and allows you to edit the contents of a selected cell.",
          ],
        },
        {
          heading: "Entering and Organizing Data",
          points: [
            "Data can include text, numbers, dates, percentages, and formulas.",
            "Use meaningful column headers to describe the data.",
            "Keep one type of information in each column whenever possible.",
            "Avoid unnecessary blank rows and columns inside a dataset.",
            "Consistent formatting makes datasets easier to analyze.",
          ],
        },
        {
          heading: "Excel Tables",
          points: [
            "Excel Tables provide structured formatting and useful filtering features.",
            "Tables automatically expand when new data is added next to the existing table.",
            "Structured references can make formulas easier to understand.",
            "Tables are useful when preparing data for analysis and dashboards.",
          ],
        },
      ],
      mistakes: [
        "Using merged cells inside a dataset.",
        "Leaving important values as inconsistent data types.",
        "Using unclear or missing column headers.",
        "Adding decorative blank rows inside the data.",
      ],
      quiz: [
        {
          question: "What is a cell in Excel?",
          options: [
            "The intersection of a row and a column",
            "A complete worksheet",
            "A collection of workbooks",
            "A chart type",
          ],
          answer: "The intersection of a row and a column",
        },
        {
          question: "What is an Excel workbook?",
          options: [
            "An Excel file that can contain multiple worksheets",
            "Only one cell",
            "Only a chart",
            "A single formula",
          ],
          answer:
            "An Excel file that can contain multiple worksheets",
        },
        {
          question: "Why are meaningful column headers important?",
          options: [
            "They make the dataset easier to understand and analyze",
            "They automatically increase the number of rows",
            "They remove formulas",
            "They prevent all errors",
          ],
          answer:
            "They make the dataset easier to understand and analyze",
        },
      ],
    },
  },

  {
    id: "formulas-functions",
    title: "Formulas & Functions",
    icon: "🧮",
    lesson: {
      overview:
        "Formulas and functions allow Excel to perform calculations and transform data. They are essential for calculating totals, averages, conditions, dates, and many other analytical operations.",
      sections: [
        {
          heading: "Excel Formulas",
          points: [
            "Excel formulas normally begin with an equals sign (=).",
            "Formulas can use numbers, cell references, operators, and functions.",
            "Arithmetic operators include addition, subtraction, multiplication, and division.",
            "Cell references allow formulas to work with values stored in other cells.",
          ],
        },
        {
          heading: "Common Functions",
          points: [
            "SUM adds numerical values.",
            "AVERAGE calculates the arithmetic mean.",
            "COUNT counts cells containing numbers.",
            "COUNTA counts non-empty cells.",
            "MIN and MAX return the smallest and largest values.",
            "IF performs a logical test and returns different results based on the condition.",
          ],
        },
        {
          heading: "Cell References",
          points: [
            "Relative references change when a formula is copied to another location.",
            "Absolute references use the $ symbol to keep a row or column fixed.",
            "Mixed references can lock either the row or the column.",
            "Understanding references is important when creating reusable formulas.",
          ],
        },
      ],
      mistakes: [
        "Forgetting the equals sign at the beginning of a formula.",
        "Using the wrong cell range.",
        "Confusing COUNT with COUNTA.",
        "Forgetting to use absolute references when a fixed value is required.",
      ],
      quiz: [
        {
          question: "Which symbol normally starts an Excel formula?",
          options: ["=", "+", "#", "@"],
          answer: "=",
        },
        {
          question: "Which function calculates the arithmetic mean?",
          options: ["AVERAGE", "COUNT", "MAX", "SUM"],
          answer: "AVERAGE",
        },
        {
          question: "What does an absolute cell reference do?",
          options: [
            "Keeps the referenced row or column fixed when copied",
            "Deletes the referenced cell",
            "Converts text into a chart",
            "Sorts the worksheet automatically",
          ],
          answer:
            "Keeps the referenced row or column fixed when copied",
        },
      ],
    },
  },

  {
    id: "data-cleaning",
    title: "Data Cleaning in Excel",
    icon: "🧹",
    lesson: {
      overview:
        "Data cleaning prepares raw spreadsheet data for reliable analysis. It involves identifying and correcting missing, duplicate, inconsistent, or incorrectly formatted values.",
      sections: [
        {
          heading: "Identifying Data Quality Problems",
          points: [
            "Missing values can affect calculations and analysis.",
            "Duplicate records can cause incorrect totals and counts.",
            "Inconsistent spelling or formatting can split one category into multiple categories.",
            "Numbers stored as text may prevent calculations from working correctly.",
            "Incorrect dates and inconsistent date formats can cause analysis problems.",
          ],
        },
        {
          heading: "Cleaning Techniques",
          points: [
            "Remove duplicate records when they represent accidental repetitions.",
            "Use Find and Replace to correct repeated inconsistencies.",
            "TRIM can help remove unnecessary spaces from text.",
            "Text-to-Columns can split combined information into separate columns.",
            "Use appropriate number, date, and percentage formats.",
          ],
        },
        {
          heading: "Handling Missing Data",
          points: [
            "First determine why values are missing.",
            "Some missing values may need to remain blank.",
            "Numerical missing values may sometimes be replaced using a suitable method.",
            "Do not automatically replace every blank with zero because zero and missing are different concepts.",
          ],
        },
      ],
      mistakes: [
        "Replacing all missing values with zero without understanding the data.",
        "Removing duplicates without checking whether they are actually duplicates.",
        "Ignoring leading or trailing spaces.",
        "Changing values without keeping track of important cleaning decisions.",
      ],
      quiz: [
        {
          question: "Why is data cleaning important?",
          options: [
            "To improve data quality before analysis",
            "To make every value equal to zero",
            "To remove all formulas",
            "To automatically create a dashboard",
          ],
          answer: "To improve data quality before analysis",
        },
        {
          question: "Which Excel function can help remove extra spaces from text?",
          options: ["TRIM", "SUM", "MAX", "COUNT"],
          answer: "TRIM",
        },
        {
          question: "Why should blanks not automatically be replaced with zero?",
          options: [
            "A missing value and zero can represent different meanings",
            "Excel cannot display zero",
            "Zero is always invalid",
            "Blanks are always errors",
          ],
          answer:
            "A missing value and zero can represent different meanings",
        },
      ],
    },
  },

  {
    id: "sorting-filtering",
    title: "Sorting & Filtering",
    icon: "🔎",
    lesson: {
      overview:
        "Sorting and filtering help analysts quickly organize and inspect spreadsheet data. Sorting changes the order of records, while filtering temporarily displays only rows that meet selected conditions.",
      sections: [
        {
          heading: "Sorting Data",
          points: [
            "Sorting can arrange values from smallest to largest or largest to smallest.",
            "Text can be sorted alphabetically.",
            "Dates can be sorted chronologically.",
            "Multiple-level sorting can organize data using more than one column.",
          ],
        },
        {
          heading: "Filtering Data",
          points: [
            "Filters display only records that satisfy selected conditions.",
            "Text filters can select specific categories or patterns.",
            "Number filters can select values above, below, or between thresholds.",
            "Date filters can focus analysis on specific periods.",
            "Filtering does not normally delete the rows that are hidden.",
          ],
        },
        {
          heading: "Using Sorting and Filtering for Analysis",
          points: [
            "Sort sales from highest to lowest to identify top-performing records.",
            "Filter by region to analyze one geographical segment.",
            "Filter by date to examine a particular time period.",
            "Combine multiple filters to investigate a specific subset of data.",
          ],
        },
      ],
      mistakes: [
        "Sorting only one column instead of the complete dataset.",
        "Accidentally separating values from their corresponding records.",
        "Assuming filtered rows have been deleted.",
        "Forgetting that multiple sorting levels can affect the final order.",
      ],
      quiz: [
        {
          question: "What does filtering do?",
          options: [
            "Displays only rows that meet selected conditions",
            "Permanently deletes all other rows",
            "Changes every value",
            "Creates a new workbook automatically",
          ],
          answer:
            "Displays only rows that meet selected conditions",
        },
        {
          question: "What can multi-level sorting use?",
          options: [
            "More than one column",
            "Only one cell",
            "Only charts",
            "Only formulas",
          ],
          answer: "More than one column",
        },
        {
          question: "What happens to rows hidden by a normal filter?",
          options: [
            "They remain in the dataset",
            "They are permanently deleted",
            "They become formulas",
            "They are converted into charts",
          ],
          answer: "They remain in the dataset",
        },
      ],
    },
  },

  {
    id: "pivot-tables",
    title: "Pivot Tables",
    icon: "📊",
    lesson: {
      overview:
        "Pivot Tables are powerful Excel tools for summarizing and analyzing large datasets. They allow analysts to quickly group, aggregate, and compare information without manually writing many formulas.",
      sections: [
        {
          heading: "What is a Pivot Table?",
          points: [
            "A Pivot Table summarizes data from a source dataset.",
            "Fields can be placed into Rows, Columns, Values, and Filters.",
            "Numerical fields can commonly be summarized using Sum, Count, or Average.",
            "Categories can be grouped to compare different segments.",
          ],
        },
        {
          heading: "Pivot Table Example",
          points: [
            "Suppose a sales dataset contains Region, Product, Salesperson, Date, and Sales.",
            "Region can be placed in Rows.",
            "Product can be placed in Columns.",
            "Sales can be placed in Values and summarized using Sum.",
            "This creates a quick summary of sales by region and product.",
          ],
        },
        {
          heading: "Using Pivot Tables for Analysis",
          points: [
            "Use Pivot Tables to find totals by category.",
            "Compare performance across regions or products.",
            "Analyze counts and averages.",
            "Apply filters to focus on specific segments.",
            "Refresh Pivot Tables when the underlying data changes.",
          ],
        },
      ],
      mistakes: [
        "Using a source dataset with missing or unclear headers.",
        "Forgetting to refresh a Pivot Table after source data changes.",
        "Choosing an inappropriate aggregation such as Sum when Count is required.",
        "Mixing different data types in the same field.",
      ],
      quiz: [
        {
          question: "What is the main purpose of a Pivot Table?",
          options: [
            "To summarize and analyze data quickly",
            "To replace the operating system",
            "To create programming languages",
            "To delete all source data",
          ],
          answer: "To summarize and analyze data quickly",
        },
        {
          question: "Where would a numerical sales field commonly be placed to calculate totals?",
          options: ["Values", "Rows only", "Columns only", "Filters only"],
          answer: "Values",
        },
        {
          question: "What should you do after the source data changes?",
          options: [
            "Refresh the Pivot Table",
            "Delete the workbook",
            "Remove all filters permanently",
            "Convert every value to text",
          ],
          answer: "Refresh the Pivot Table",
        },
      ],
    },
  },

  {
    id: "charts-dashboards",
    title: "Charts & Dashboards",
    icon: "📈",
    lesson: {
      overview:
        "Charts and dashboards turn analyzed data into visual information that can be understood quickly. A good dashboard focuses on relevant metrics, clear visualizations, and useful comparisons.",
      sections: [
        {
          heading: "Choosing Charts",
          points: [
            "Column and bar charts are useful for comparing categories.",
            "Line charts are useful for showing trends over time.",
            "Pie or doughnut charts can show simple part-to-whole relationships when there are only a few categories.",
            "Scatter plots are useful for exploring relationships between numerical variables.",
            "The chart type should match the analytical question.",
          ],
        },
        {
          heading: "Dashboard Components",
          points: [
            "Key Performance Indicators (KPIs) summarize important metrics.",
            "Charts provide visual comparisons and trends.",
            "Filters and slicers can allow users to explore different segments.",
            "Consistent labels and formatting make dashboards easier to understand.",
            "Important information should have clear visual priority.",
          ],
        },
        {
          heading: "Good Dashboard Design",
          points: [
            "Keep the dashboard focused on a specific purpose.",
            "Avoid unnecessary charts and decorative elements.",
            "Use clear titles and labels.",
            "Make comparisons easy to understand.",
            "Check that the dashboard communicates insights rather than simply displaying data.",
          ],
        },
      ],
      mistakes: [
        "Using too many charts on one dashboard.",
        "Choosing a chart type that does not match the data.",
        "Using unclear labels or missing units.",
        "Focusing on decoration instead of useful information.",
      ],
      quiz: [
        {
          question: "Which chart is commonly useful for showing trends over time?",
          options: [
            "Line chart",
            "Pie chart only",
            "Doughnut chart only",
            "Text box",
          ],
          answer: "Line chart",
        },
        {
          question: "What should determine the choice of chart?",
          options: [
            "The analytical question and type of data",
            "Only the chart's appearance",
            "Only the number of worksheet tabs",
            "Only the file name",
          ],
          answer:
            "The analytical question and type of data",
        },
        {
          question: "What is an important goal of a dashboard?",
          options: [
            "Communicate useful information and insights clearly",
            "Display as many charts as possible",
            "Use as many colors as possible",
            "Hide the underlying data",
          ],
          answer:
            "Communicate useful information and insights clearly",
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

function Excel({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("dataanalyst-excel", subtopics);
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

  const completedCount = completed.length;

  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const currentIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const currentTopic =
    currentIndex !== -1 ? subtopics[currentIndex] : null;

  const handleQuizAnswer = (topicId, questionIndex, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [`${topicId}-${questionIndex}`]: answer,
    }));
  };

  const checkQuiz = async (topic) => {
    const score = getScore(topic);

    await saveQuizResult({
      subject: "Data Analyst",
      role: "Data Analyst",
      topic: topic.title,
      topicId: topic.id,
      score,
      totalQuestions: topic.lesson.quiz.length
    });

    setQuizSubmitted((prev) => ({
      ...prev,
      [topic.id]: true,
    }));
  };

  const getScore = (topic) => {
    return topic.lesson.quiz.reduce((total, question, index) => {
      return (
        total +
        (quizAnswers[`${topic.id}-${index}`] === question.answer ? 1 : 0)
      );
    }, 0);
  };

  const toggleComplete = (topicId) => {
    saveProgress(topicId);
  };

  const openTopic = (topicId) => {
    setSelectedSubtopic(topicId);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      openTopic(subtopics[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < subtopics.length - 1) {
      openTopic(subtopics[currentIndex + 1].id);
    }
  };

  if (currentTopic) {
    const options = shuffledQuizOptions[currentTopic.id];
    const submitted = quizSubmitted[currentTopic.id];

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#eef6ff",
          padding: "30px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#ffffff",
            border: "1px solid #bfdbfe",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 8px 25px rgba(37, 99, 235, 0.08)",
          }}
        >
          <button
            onClick={() => setSelectedSubtopic(null)}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #bfdbfe",
              background: "#ffffff",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            ← Back to Topics
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <h1 style={{ color: "#1e3a8a", marginBottom: "5px" }}>
              {currentTopic.icon} {currentTopic.title}
            </h1>

            <span
              style={{
                color: completed.includes(currentTopic.id)
                  ? "#15803d"
                  : "#2563eb",
                fontWeight: "700",
              }}
            >
              {completed.includes(currentTopic.id) ? "✓ Completed" : "In Progress"}
            </span>
          </div>

          <div style={{ margin: "20px 0 30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "7px",
                fontSize: "14px",
                color: "#475569",
              }}
            >
              <span>Topic Progress</span>
              <span>
                {completed.includes(currentTopic.id) ? "100%" : "0%"}
              </span>
            </div>

            <div
              style={{
                height: "8px",
                background: "#dbeafe",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: completed.includes(currentTopic.id) ? "100%" : "0%",
                  height: "100%",
                  background: "#2563eb",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>

          <section>
            <h2 style={{ color: "#2563eb" }}>📖 Overview</h2>

            <p style={{ lineHeight: "1.7", color: "#334155" }}>
              {currentTopic.lesson.overview}
            </p>
          </section>

          {currentTopic.lesson.sections.map((section) => (
            <section key={section.heading} style={{ marginTop: "28px" }}>
              <h2 style={{ color: "#2563eb" }}>{section.heading}</h2>

              <ul style={{ lineHeight: "1.8", color: "#334155" }}>
                {section.points.map((point) => (
                  <li key={point} style={{ marginBottom: "8px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#f8fbff",
              border: "1px solid #bfdbfe",
              borderRadius: "12px",
            }}
          >
            <h2 style={{ color: "#2563eb" }}>⚠️ Common Mistakes</h2>

            <ul style={{ lineHeight: "1.8", color: "#334155" }}>
              {currentTopic.lesson.mistakes.map((mistake) => (
                <li key={mistake} style={{ marginBottom: "8px" }}>
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ marginTop: "35px" }}>
            <h2 style={{ color: "#2563eb" }}>🧠 Quick Quiz</h2>

            {currentTopic.lesson.quiz.map((question, questionIndex) => (
              <div
                key={question.question}
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  border: "1px solid #dbeafe",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#1e3a8a", lineHeight: "1.5" }}>
                  {questionIndex + 1}. {question.question}
                </h3>

                {options[questionIndex].map((option) => {
                  const selected =
                    quizAnswers[
                      `${currentTopic.id}-${questionIndex}`
                    ] === option;

                  const correct = option === question.answer;

                  return (
                    <label
                      key={option}
                      style={{
                        display: "block",
                        padding: "10px",
                        marginTop: "8px",
                        borderRadius: "8px",
                        background:
                          submitted && correct
                            ? "#dcfce7"
                            : selected
                            ? "#dbeafe"
                            : "#ffffff",
                        border:
                          submitted && correct
                            ? "1px solid #86efac"
                            : selected
                            ? "1px solid #60a5fa"
                            : "1px solid #e2e8f0",
                        cursor: submitted ? "default" : "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`${currentTopic.id}-${questionIndex}`}
                        value={option}
                        checked={selected}
                        disabled={submitted}
                        onChange={() =>
                          handleQuizAnswer(
                            currentTopic.id,
                            questionIndex,
                            option
                          )
                        }
                        style={{ marginRight: "10px" }}
                      />

                      {option}
                    </label>
                  );
                })}
              </div>
            ))}

            {!submitted ? (
              <button
                onClick={() => checkQuiz(currentTopic)}
                disabled={currentTopic.lesson.quiz.some(
                  (_, index) =>
                    !quizAnswers[
                      `${currentTopic.id}-${index}`
                    ]
                )}
                style={{
                  marginTop: "25px",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2563eb",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              >
                Check Quiz
              </button>
            ) : (
              <div
                style={{
                  marginTop: "25px",
                  padding: "18px",
                  background: "#eef6ff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "10px",
                  color: "#1e3a8a",
                  fontWeight: "700",
                }}
              >
                🎉 Score: {getScore(currentTopic)} /{" "}
                {currentTopic.lesson.quiz.length}
              </div>
            )}
          </section>

          <button
            onClick={() => toggleComplete(currentTopic.id)}
            style={{
              marginTop: "30px",
              width: "100%",
              padding: "13px",
              borderRadius: "9px",
              border: "none",
              background: completed.includes(currentTopic.id)
                ? "#64748b"
                : "#2563eb",
              color: "#ffffff",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            {completed.includes(currentTopic.id)
              ? "Mark Topic Incomplete"
              : "✓ Mark Topic Complete"}
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              marginTop: "25px",
            }}
          >
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              style={{
                padding: "11px 16px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  currentIndex === 0 ? "#e2e8f0" : "#ffffff",
                color:
                  currentIndex === 0 ? "#94a3b8" : "#2563eb",
                cursor:
                  currentIndex === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
              }}
            >
              ← Previous Topic
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex === subtopics.length - 1}
              style={{
                padding: "11px 16px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  currentIndex === subtopics.length - 1
                    ? "#e2e8f0"
                    : "#2563eb",
                color:
                  currentIndex === subtopics.length - 1
                    ? "#94a3b8"
                    : "#ffffff",
                cursor:
                  currentIndex === subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
              }}
            >
              Next Topic →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef6ff",
        padding: "30px 20px",
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
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #bfdbfe",
            background: "#ffffff",
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          ← Back to Data Analyst Roadmap
        </button>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #bfdbfe",
            borderRadius: "16px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow: "0 8px 25px rgba(37, 99, 235, 0.08)",
          }}
        >
          <h1 style={{ color: "#1e3a8a", marginTop: 0 }}>
            📗 Excel
          </h1>

          <p style={{ color: "#475569", lineHeight: "1.6" }}>
            Learn Excel fundamentals, formulas, data cleaning,
            sorting and filtering, Pivot Tables, charts, and
            dashboard creation for data analysis.
          </p>

          <div style={{ marginTop: "25px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#334155",
              }}
            >
              <span>Overall Progress</span>
              <span>{overallProgress}%</span>
            </div>

            <div
              style={{
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
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {subtopics.map((topic, index) => {
            const isCompleted = completed.includes(topic.id);

            return (
              <div
                key={topic.id}
                style={{
                  background: "#ffffff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "14px",
                  padding: "22px",
                  boxShadow:
                    "0 6px 18px rgba(37, 99, 235, 0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <h2
                    style={{
                      marginTop: 0,
                      color: "#1e3a8a",
                      fontSize: "20px",
                      lineHeight: "1.4",
                    }}
                  >
                    {index + 1}. {topic.icon} {topic.title}
                  </h2>

                  {isCompleted && (
                    <span
                      style={{
                        color: "#15803d",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      ✓
                    </span>
                  )}
                </div>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    marginBottom: "18px",
                  }}
                >
                  1 lesson
                </p>

                <div
                  style={{
                    height: "7px",
                    background: "#dbeafe",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "15px",
                  }}
                >
                  <div
                    style={{
                      width: isCompleted ? "100%" : "0%",
                      height: "100%",
                      background: "#2563eb",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#475569",
                    marginBottom: "15px",
                  }}
                >
                  Progress: {isCompleted ? "100%" : "0%"}
                </p>

                <button
                  onClick={() => openTopic(topic.id)}
                  style={{
                    width: "100%",
                    padding: "11px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "700",
                  }}
                >
                  {isCompleted ? "Review Topic" : "Open Topic →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Excel;