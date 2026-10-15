import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "introduction",
    title: "Introduction to NLP",
    lesson: {
      overview:
        "Natural Language Processing (NLP) is a field of Artificial Intelligence that enables computers to work with human language. NLP combines techniques from linguistics, machine learning, and deep learning to process, understand, classify, and generate text.",
      sections: [
        {
          heading: "What is NLP?",
          points: [
            "NLP focuses on processing human language in text and speech form.",
            "Computers need language to be converted into numerical representations before most machine learning models can work with it.",
            "Modern NLP systems can perform tasks such as classification, translation, summarization, question answering, and text generation.",
          ],
        },
        {
          heading: "Common NLP Tasks",
          points: [
            "Sentiment analysis determines whether text expresses positive, negative, or neutral sentiment.",
            "Text classification assigns documents or messages to predefined categories.",
            "Named Entity Recognition identifies entities such as people, organizations, locations, and dates.",
            "Machine translation converts text from one language to another.",
            "Text generation produces new language based on learned patterns.",
          ],
        },
        {
          heading: "Traditional vs Modern NLP",
          points: [
            "Traditional NLP often relies on manually designed features and statistical methods.",
            "Machine learning approaches can learn useful patterns from labeled or unlabeled data.",
            "Deep learning and transformer-based models have significantly improved many NLP tasks.",
          ],
        },
      ],
      mistakes: [
        "Thinking NLP means that a computer understands language exactly like a human.",
        "Ignoring preprocessing and data quality.",
        "Assuming every NLP problem requires a large language model.",
      ],
      quiz: [
        {
          question: "What does NLP stand for?",
          options: [
            "Natural Language Processing",
            "Neural Learning Program",
            "Natural Logic Programming",
            "Network Language Protocol",
          ],
          answer: "Natural Language Processing",
        },
        {
          question: "Which is an NLP task?",
          options: [
            "Sentiment analysis",
            "Disk partitioning",
            "Database indexing only",
            "CSS styling",
          ],
          answer: "Sentiment analysis",
        },
        {
          question: "What usually needs to happen before text can be used by a machine learning model?",
          options: [
            "It needs a suitable numerical representation",
            "It must be converted into HTML",
            "It must be printed",
            "It must be stored in a database only",
          ],
          answer: "It needs a suitable numerical representation",
        },
      ],
    },
  },

  {
    id: "text-cleaning",
    title: "Text Cleaning",
    lesson: {
      overview:
        "Text cleaning prepares raw text for further NLP processing. Real-world text often contains unwanted characters, inconsistent formatting, duplicate content, URLs, punctuation, or other noise that can affect a model.",
      sections: [
        {
          heading: "Common Cleaning Operations",
          points: [
            "Converting text to a consistent case can reduce unnecessary differences between words.",
            "Extra whitespace can be removed.",
            "Unwanted characters or formatting artifacts can be handled according to the task.",
            "URLs, email addresses, HTML tags, or other patterns may be removed or transformed when appropriate.",
          ],
        },
        {
          heading: "Cleaning Depends on the Task",
          points: [
            "Not every NLP task should use the same cleaning pipeline.",
            "Punctuation may contain useful information in some tasks.",
            "Capitalization can sometimes provide useful signals.",
            "Aggressive cleaning can accidentally remove meaningful information.",
          ],
        },
        {
          heading: "Example",
          points: [
            "Raw text such as '  AMAZING Product!!! Visit https://example.com  ' contains extra spaces, capitalization, punctuation, and a URL.",
            "A cleaning pipeline might normalize spaces and selectively handle the URL or punctuation.",
            "The final representation should preserve information that is useful for the specific NLP task.",
          ],
        },
      ],
      mistakes: [
        "Removing every punctuation mark without considering the task.",
        "Applying the same cleaning rules to every dataset.",
        "Cleaning validation or test data differently from training data.",
      ],
      quiz: [
        {
          question: "What is the main purpose of text cleaning?",
          options: [
            "Prepare raw text for further processing",
            "Increase monitor resolution",
            "Create database tables",
            "Compile Java code",
          ],
          answer: "Prepare raw text for further processing",
        },
        {
          question: "Should every NLP task use exactly the same cleaning process?",
          options: [
            "No",
            "Yes",
            "Only for English",
            "Only for images",
          ],
          answer: "No",
        },
        {
          question: "What can aggressive cleaning accidentally do?",
          options: [
            "Remove useful information",
            "Increase model parameters automatically",
            "Create new classes",
            "Train a CNN",
          ],
          answer: "Remove useful information",
        },
      ],
    },
  },

  {
    id: "tokenization",
    title: "Tokenization",
    lesson: {
      overview:
        "Tokenization breaks text into smaller units called tokens. Depending on the NLP approach, tokens can be words, subwords, characters, or other meaningful units.",
      sections: [
        {
          heading: "Why Tokenization Matters",
          points: [
            "Machine learning models generally operate on numerical representations rather than raw strings.",
            "Tokenization determines how text is divided before it is converted into numerical IDs or vectors.",
            "The choice of tokenizer can affect vocabulary size, sequence length, and model performance.",
          ],
        },
        {
          heading: "Word Tokenization",
          points: [
            "Word tokenization attempts to split text into individual words.",
            "For example, 'I love AI' can be represented as ['I', 'love', 'AI'].",
            "Simple word tokenization can struggle with punctuation, contractions, and unseen words.",
          ],
        },
        {
          heading: "Subword Tokenization",
          points: [
            "Modern transformer models commonly use subword tokenization.",
            "A word can be represented using multiple smaller tokens.",
            "Subword methods help handle rare and previously unseen words more effectively.",
          ],
        },
      ],
      mistakes: [
        "Assuming every tokenizer simply splits text at spaces.",
        "Ignoring punctuation and special tokens.",
        "Assuming one token always represents one complete word.",
      ],
      quiz: [
        {
          question: "What does tokenization do?",
          options: [
            "Breaks text into tokens",
            "Converts images into pixels",
            "Creates SQL tables",
            "Deploys a model",
          ],
          answer: "Breaks text into tokens",
        },
        {
          question: "Which type of tokenization is common in modern transformer models?",
          options: [
            "Subword tokenization",
            "Only sentence tokenization",
            "Only character deletion",
            "Database tokenization",
          ],
          answer: "Subword tokenization",
        },
        {
          question: "Is one token always equal to one complete word?",
          options: [
            "No",
            "Yes",
            "Only in Python",
            "Only in English",
          ],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "stopwords-stemming",
    title: "Stop Words & Stemming",
    lesson: {
      overview:
        "Stop word removal and stemming are traditional NLP preprocessing techniques. They can reduce vocabulary size and simplify text representations, but they should be used carefully because they can also remove or alter useful information.",
      sections: [
        {
          heading: "Stop Words",
          points: [
            "Stop words are commonly occurring words that may contribute relatively little to certain NLP tasks.",
            "Examples can include words such as 'the', 'is', and 'a'.",
            "Whether stop words should be removed depends on the task and model.",
          ],
        },
        {
          heading: "Stemming",
          points: [
            "Stemming attempts to reduce words to a common root form by applying simple rules.",
            "Words such as 'playing', 'played', and 'plays' may be reduced to a related stem.",
            "The resulting stem is not necessarily a valid dictionary word.",
          ],
        },
        {
          heading: "Lemmatization",
          points: [
            "Lemmatization aims to reduce words to their dictionary base form.",
            "It generally uses linguistic information and can be more sophisticated than stemming.",
            "For example, related forms can be mapped to a valid lemma such as 'run'.",
          ],
        },
      ],
      mistakes: [
        "Removing stop words without checking whether they contain useful information.",
        "Assuming stemming always produces valid English words.",
        "Confusing stemming with lemmatization.",
      ],
      quiz: [
        {
          question: "What are stop words?",
          options: [
            "Common words that may be removed for some tasks",
            "Words that stop the computer",
            "Only incorrect spellings",
            "Database keywords",
          ],
          answer: "Common words that may be removed for some tasks",
        },
        {
          question: "What does stemming attempt to do?",
          options: [
            "Reduce words to a common stem",
            "Translate text",
            "Generate images",
            "Create neural networks",
          ],
          answer: "Reduce words to a common stem",
        },
        {
          question: "Which technique aims to produce a dictionary base form?",
          options: ["Lemmatization", "Stemming", "Tokenization", "Padding"],
          answer: "Lemmatization",
        },
      ],
    },
  },

  {
    id: "tfidf",
    title: "TF-IDF",
    lesson: {
      overview:
        "TF-IDF, or Term Frequency-Inverse Document Frequency, is a traditional technique for representing text numerically. It gives higher importance to terms that are frequent in a document but relatively uncommon across the collection of documents.",
      sections: [
        {
          heading: "Term Frequency",
          points: [
            "Term Frequency (TF) measures how frequently a term appears in a document.",
            "A term appearing multiple times in a document generally receives a higher TF value.",
            "Different normalization approaches can be used when calculating TF.",
          ],
        },
        {
          heading: "Inverse Document Frequency",
          points: [
            "Inverse Document Frequency (IDF) reduces the importance of terms that appear in many documents.",
            "A term that appears in almost every document provides less information for distinguishing documents.",
            "Rare terms across the document collection receive greater IDF values.",
          ],
        },
        {
          heading: "TF-IDF Representation",
          points: [
            "TF-IDF combines term frequency and inverse document frequency.",
            "The resulting values can be used as numerical features for machine learning models.",
            "TF-IDF is often useful for tasks such as document classification and information retrieval.",
          ],
        },
      ],
      mistakes: [
        "Thinking TF-IDF understands the semantic meaning of words.",
        "Assuming frequent words always receive the highest TF-IDF score.",
        "Forgetting that TF-IDF is based on the document collection.",
      ],
      quiz: [
        {
          question: "What does TF-IDF stand for?",
          options: [
            "Term Frequency-Inverse Document Frequency",
            "Text Feature-Input Data Format",
            "Token Frequency-Indexed Document Function",
            "Term Feature-Information Data File",
          ],
          answer: "Term Frequency-Inverse Document Frequency",
        },
        {
          question: "What happens to the IDF of a term appearing in many documents?",
          options: [
            "Its importance is reduced",
            "It always becomes maximum",
            "It becomes an image",
            "It is automatically deleted",
          ],
          answer: "Its importance is reduced",
        },
        {
          question: "TF-IDF is primarily used to create what?",
          options: [
            "Numerical text features",
            "Images",
            "Database schemas",
            "Web pages",
          ],
          answer: "Numerical text features",
        },
      ],
    },
  },

  {
    id: "word-embeddings",
    title: "Word Embeddings",
    lesson: {
      overview:
        "Word embeddings represent words as dense numerical vectors. Unlike simple one-hot representations, embeddings can capture relationships between words based on how they are used in language.",
      sections: [
        {
          heading: "What are Embeddings?",
          points: [
            "An embedding maps a word or token to a numerical vector.",
            "Words used in similar contexts can have similar vector representations.",
            "Embeddings allow machine learning models to work with meaningful numerical representations of language.",
          ],
        },
        {
          heading: "Traditional Embeddings",
          points: [
            "Word2Vec learns word representations from surrounding context.",
            "GloVe learns vectors using statistical information from word co-occurrence.",
            "These approaches generally assign a fixed vector to a word.",
          ],
        },
        {
          heading: "Contextual Embeddings",
          points: [
            "Modern transformer models can produce contextual representations.",
            "The representation of a word can depend on the surrounding words.",
            "This helps distinguish words that have different meanings in different contexts.",
          ],
        },
      ],
      mistakes: [
        "Thinking embeddings are just word IDs.",
        "Assuming similar vectors guarantee identical meanings.",
        "Confusing static word embeddings with contextual representations.",
      ],
      quiz: [
        {
          question: "What is a word embedding?",
          options: [
            "A numerical vector representation of a word",
            "A database password",
            "A text file",
            "A web page",
          ],
          answer: "A numerical vector representation of a word",
        },
        {
          question: "Which is a traditional word embedding method?",
          options: ["Word2Vec", "SQL", "HTML", "Git"],
          answer: "Word2Vec",
        },
        {
          question: "What is a major advantage of contextual embeddings?",
          options: [
            "Representations can depend on surrounding context",
            "They remove all words",
            "They only work with numbers",
            "They eliminate training",
          ],
          answer: "Representations can depend on surrounding context",
        },
      ],
    },
  },

  {
    id: "text-classification",
    title: "Text Classification",
    lesson: {
      overview:
        "Text classification assigns text to one or more predefined categories. It is used for applications such as spam detection, sentiment analysis, topic classification, and support-ticket routing.",
      sections: [
        {
          heading: "Classification Workflow",
          points: [
            "Collect and label a suitable text dataset.",
            "Clean and preprocess the text when necessary.",
            "Convert text into numerical features or embeddings.",
            "Train a classification model.",
            "Evaluate the model on data it did not train on.",
          ],
        },
        {
          heading: "Common Approaches",
          points: [
            "Traditional approaches can use TF-IDF with algorithms such as Logistic Regression or Naive Bayes.",
            "Neural networks can learn representations directly from text.",
            "Transformer-based models can provide powerful contextual representations for classification.",
          ],
        },
        {
          heading: "Evaluation",
          points: [
            "Accuracy can be useful when classes are reasonably balanced and errors have similar costs.",
            "Precision, recall, and F1-score can provide more detailed information.",
            "A confusion matrix helps identify which categories are frequently confused.",
          ],
        },
      ],
      mistakes: [
        "Training and evaluating on the same text examples.",
        "Ignoring class imbalance.",
        "Using accuracy alone when the costs of different errors are very different.",
      ],
      quiz: [
        {
          question: "What is the goal of text classification?",
          options: [
            "Assign text to predefined categories",
            "Convert text into images",
            "Delete text",
            "Create database tables",
          ],
          answer: "Assign text to predefined categories",
        },
        {
          question: "Which traditional representation can be combined with Logistic Regression for text classification?",
          options: ["TF-IDF", "HTML", "JPEG", "SQL schema"],
          answer: "TF-IDF",
        },
        {
          question: "What can a confusion matrix help identify?",
          options: [
            "Which classes are being confused",
            "Which GPU is installed",
            "Which file is largest",
            "Which URL is fastest",
          ],
          answer: "Which classes are being confused",
        },
      ],
    },
  },

  {
    id: "nlp-projects",
    title: "NLP Projects",
    lesson: {
      overview:
        "NLP projects bring together preprocessing, representation, modeling, evaluation, and deployment. Building practical projects is one of the best ways to understand how individual NLP techniques work together.",
      sections: [
        {
          heading: "Beginner Projects",
          points: [
            "Spam message classification",
            "Sentiment analysis of product or movie reviews",
            "News or document topic classification",
            "Simple text similarity systems",
          ],
        },
        {
          heading: "Intermediate Projects",
          points: [
            "Customer-support ticket classification",
            "Named Entity Recognition system",
            "News article summarization",
            "Question-answering applications",
          ],
        },
        {
          heading: "Project Workflow",
          points: [
            "Define the problem and success metric.",
            "Collect, clean, and label the data.",
            "Build a baseline model.",
            "Train and evaluate improved approaches.",
            "Analyze errors and iterate.",
            "Deploy the final system when appropriate.",
          ],
        },
      ],
      mistakes: [
        "Starting with a complicated model before establishing a baseline.",
        "Ignoring data leakage during preprocessing and evaluation.",
        "Focusing only on model accuracy instead of understanding errors and real-world requirements.",
      ],
      quiz: [
        {
          question: "Which is a suitable beginner NLP project?",
          options: [
            "Spam message classification",
            "Operating system development",
            "Database engine development",
            "Network cable testing",
          ],
          answer: "Spam message classification",
        },
        {
          question: "What should generally be established before building a very complex NLP model?",
          options: [
            "A baseline",
            "A new programming language",
            "A database server",
            "A web browser",
          ],
          answer: "A baseline",
        },
        {
          question: "What is important after evaluating an NLP model?",
          options: [
            "Analyze errors and iterate",
            "Delete the test set",
            "Ignore incorrect predictions",
            "Remove all preprocessing",
          ],
          answer: "Analyze errors and iterate",
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

function NLPTextProcessing({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-nlptextprocessing", subtopics);
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

  const toggleComplete = (topicId) => {
    saveProgress(topicId);
  };

  const selectQuizAnswer = (topicId, questionIndex, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [`${topicId}-${questionIndex}`]: answer,
    }));
  };

  const submitQuiz = async (topicId) => {

    const topic = subtopics.find(
      (item) => item.id === topicId
    );

    if (!topic) return;

    const score = getQuizScore(topic);

    await saveQuizResult({
      subject: "AI/ML",
      role: "AI/ML Engineer",
      topic: topic.title,
      topicId: topic.id,
      score,
      totalQuestions: topic.lesson.quiz.length
    });
    setQuizSubmitted((prev) => ({
      ...prev,
      [topicId]: true,
    }));
  };

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

  const openTopic = (topicId) => {
    setSelectedSubtopic(topicId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentTopic) {
    const topic = currentTopic;
    const quizSubmittedForTopic =
      quizSubmitted[topic.id] || false;
    const score = getQuizScore(topic);
    const options = shuffledQuizOptions[topic.id];

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #eef6ff, #ffffff)",
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
              background: "transparent",
              border: "none",
              color: "#2563eb",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "15px",
              marginBottom: "20px",
            }}
          >
            ← Back to Topics
          </button>

          <h1
            style={{
              color: "#1e3a8a",
              marginBottom: "10px",
            }}
          >
            {topic.title}
          </h1>

          <div
            style={{
              height: "10px",
              background: "#dbeafe",
              borderRadius: "10px",
              overflow: "hidden",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: `${completed.includes(topic.id) ? 100 : 0}%`,
                height: "100%",
                background: "#2563eb",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <h2 style={{ color: "#1e40af" }}>📖 Overview</h2>

          <p
            style={{
              color: "#374151",
              lineHeight: "1.7",
              fontSize: "16px",
            }}
          >
            {topic.lesson.overview}
          </p>

          {topic.lesson.sections.map((section) => (
            <div key={section.heading} style={{ marginTop: "28px" }}>
              <h2 style={{ color: "#1e40af" }}>
                {section.heading}
              </h2>

              <ul
                style={{
                  lineHeight: "1.8",
                  color: "#374151",
                }}
              >
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          <div style={{ marginTop: "35px" }}>
            <h2 style={{ color: "#1e40af" }}>
              ⚠️ Common Mistakes
            </h2>

            <ul
              style={{
                lineHeight: "1.8",
                color: "#374151",
              }}
            >
              {topic.lesson.mistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: "35px" }}>
            <h2 style={{ color: "#1e40af" }}>📝 Quick Quiz</h2>

            {topic.lesson.quiz.map((question, questionIndex) => (
              <div
                key={question.question}
                style={{
                  border: "1px solid #dbeafe",
                  borderRadius: "12px",
                  padding: "20px",
                  marginTop: "18px",
                  background: "#f8fbff",
                }}
              >
                <p
                  style={{
                    fontWeight: "700",
                    color: "#1f2937",
                  }}
                >
                  {questionIndex + 1}. {question.question}
                </p>

                {options[questionIndex].map((option) => {
                  const selected =
                    quizAnswers[
                      `${topic.id}-${questionIndex}`
                    ] === option;

                  return (
                    <label
                      key={option}
                      style={{
                        display: "block",
                        padding: "10px",
                        marginTop: "8px",
                        borderRadius: "8px",
                        border: selected
                          ? "2px solid #2563eb"
                          : "1px solid #dbeafe",
                        background: selected
                          ? "#eff6ff"
                          : "#ffffff",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`${topic.id}-${questionIndex}`}
                        value={option}
                        checked={selected}
                        disabled={quizSubmittedForTopic}
                        onChange={() =>
                          selectQuizAnswer(
                            topic.id,
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

            {!quizSubmittedForTopic ? (
              <button
                onClick={() => submitQuiz(topic.id)}
                style={{
                  marginTop: "20px",
                  padding: "12px 22px",
                  background: "#2563eb",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Check Quiz
              </button>
            ) : (
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "10px",
                  color: "#1e3a8a",
                  fontWeight: "700",
                }}
              >
                🎉 Score: {score} / {topic.lesson.quiz.length}
              </div>
            )}
          </div>

          <button
            onClick={() => toggleComplete(topic.id)}
            style={{
              width: "100%",
              marginTop: "30px",
              padding: "14px",
              background: completed.includes(topic.id)
                ? "#1d4ed8"
                : "#2563eb",
              color: "#ffffff",
              border: "none",
              borderRadius: "9px",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            {completed.includes(topic.id)
              ? "✓ Topic Completed"
              : "Mark Topic Complete"}
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
              disabled={currentIndex === 0}
              onClick={() =>
                openTopic(subtopics[currentIndex - 1].id)
              }
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  currentIndex === 0 ? "#f3f4f6" : "#ffffff",
                color:
                  currentIndex === 0 ? "#9ca3af" : "#2563eb",
                cursor:
                  currentIndex === 0
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
              }}
            >
              ← Previous Topic
            </button>

            <button
              onClick={() => setSelectedSubtopic(null)}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background: "#ffffff",
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Back to Topics
            </button>

            <button
              disabled={
                currentIndex === subtopics.length - 1
              }
              onClick={() =>
                openTopic(subtopics[currentIndex + 1].id)
              }
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  currentIndex === subtopics.length - 1
                    ? "#f3f4f6"
                    : "#ffffff",
                color:
                  currentIndex === subtopics.length - 1
                    ? "#9ca3af"
                    : "#2563eb",
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
        background: "linear-gradient(135deg, #eef6ff, #ffffff)",
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
            background: "transparent",
            border: "none",
            color: "#2563eb",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "15px",
            marginBottom: "15px",
          }}
        >
          ← Back to AI / ML Roadmap
        </button>

        <h1
          style={{
            color: "#1e3a8a",
            marginBottom: "8px",
          }}
        >
          📝 NLP & Text Processing
        </h1>

        <p
          style={{
            color: "#4b5563",
            marginBottom: "25px",
          }}
        >
          Learn how machines process, represent, classify,
          and work with human language.
        </p>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #bfdbfe",
            borderRadius: "14px",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              fontWeight: "700",
              color: "#1e3a8a",
            }}
          >
            <span>Overall Progress</span>

            <span>
              {completedCount} / {subtopics.length} completed
            </span>
          </div>

          <div
            style={{
              height: "12px",
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

          <p
            style={{
              marginBottom: 0,
              marginTop: "10px",
              color: "#2563eb",
              fontWeight: "600",
            }}
          >
            {overallProgress}% complete
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
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
                    fontSize: "14px",
                    color: "#2563eb",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Lesson {index + 1}
                </div>

                <h3
                  style={{
                    color: "#1e3a8a",
                    minHeight: "52px",
                    marginTop: 0,
                  }}
                >
                  {topic.title}
                </h3>

                <div
                  style={{
                    height: "8px",
                    background: "#dbeafe",
                    borderRadius: "8px",
                    overflow: "hidden",
                    margin: "18px 0",
                  }}
                >
                  <div
                    style={{
                      width: `${isCompleted ? 100 : 0}%`,
                      height: "100%",
                      background: "#2563eb",
                    }}
                  />
                </div>

                <p
                  style={{
                    color: isCompleted
                      ? "#2563eb"
                      : "#6b7280",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {isCompleted
                    ? "✓ Completed"
                    : "Not completed"}
                </p>

                <button
                  onClick={() => openTopic(topic.id)}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "11px",
                    background: "#2563eb",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "700",
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
            marginTop: "35px",
            textAlign: "center",
          }}
        >
          <button
            onClick={goBack}
            style={{
              padding: "12px 24px",
              background: "#ffffff",
              color: "#2563eb",
              border: "1px solid #bfdbfe",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            ← Back to AI / ML Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}

export default NLPTextProcessing;