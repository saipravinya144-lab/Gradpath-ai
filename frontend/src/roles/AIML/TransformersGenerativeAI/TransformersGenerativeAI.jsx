import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "transformers",
    title: "Introduction to Transformers",
    lesson: {
      overview:
        "Transformers are a neural network architecture designed to process sequences using attention mechanisms. They became a major foundation for modern NLP and are also used in areas such as vision, audio, and multimodal AI.",
      sections: [
        {
          heading: "What are Transformers?",
          points: [
            "Transformers process relationships between elements in a sequence using attention.",
            "Unlike traditional recurrent architectures, transformers can process many sequence positions in parallel during training.",
            "They became the foundation for many modern language models and generative AI systems.",
          ],
        },
        {
          heading: "Main Components",
          points: [
            "Attention allows the model to determine which parts of the input are relevant to each other.",
            "Feed-forward networks further transform representations inside transformer layers.",
            "Positional information is added because the architecture itself does not inherently process tokens in sequential order.",
            "Transformer architectures commonly use repeated layers containing attention and feed-forward components.",
          ],
        },
        {
          heading: "Why Transformers Matter",
          points: [
            "They can model long-range relationships in sequences.",
            "They support efficient parallel computation during training.",
            "They scale effectively with large datasets and model sizes.",
            "They are widely used in large language models and generative AI.",
          ],
        },
      ],
      mistakes: [
        "Thinking transformers are only used for text.",
        "Assuming transformers process sequences exactly like recurrent neural networks.",
        "Forgetting that positional information is important for sequence order.",
      ],
      quiz: [
        {
          question: "What is a core mechanism of transformer architectures?",
          options: [
            "Attention",
            "Database indexing",
            "File compression",
            "Web routing",
          ],
          answer: "Attention",
        },
        {
          question: "Why is positional information needed in transformers?",
          options: [
            "To represent the order of sequence elements",
            "To store passwords",
            "To increase image resolution",
            "To create database tables",
          ],
          answer: "To represent the order of sequence elements",
        },
        {
          question: "Transformers became especially important in which area?",
          options: [
            "Natural Language Processing",
            "Printer management",
            "Operating system installation",
            "Spreadsheet formatting",
          ],
          answer: "Natural Language Processing",
        },
      ],
    },
  },

  {
    id: "attention",
    title: "Attention Mechanism",
    lesson: {
      overview:
        "The attention mechanism allows a model to determine how strongly different elements of an input should influence a particular representation. It helps neural networks focus on relevant information when processing sequences.",
      sections: [
        {
          heading: "Basic Idea",
          points: [
            "For a given token, attention calculates how relevant other tokens are.",
            "Relevant tokens receive greater influence in the resulting representation.",
            "This allows the model to capture relationships between distant elements.",
          ],
        },
        {
          heading: "Query, Key, and Value",
          points: [
            "Attention commonly uses three representations called Query, Key, and Value.",
            "A query is compared with keys to determine attention scores.",
            "The scores are normalized and used to combine the value representations.",
          ],
        },
        {
          heading: "Why Attention Helps",
          points: [
            "It allows the model to focus on context that matters for the current token.",
            "It can capture relationships between tokens that are far apart.",
            "It provides a flexible way to represent contextual information.",
          ],
        },
      ],
      mistakes: [
        "Thinking attention means the model only looks at the nearest word.",
        "Confusing Query, Key, and Value.",
        "Assuming attention automatically guarantees that every relationship is meaningful.",
      ],
      quiz: [
        {
          question: "What does attention help a model determine?",
          options: [
            "Which parts of the input are relevant",
            "Which file to delete",
            "Which database to install",
            "Which browser to use",
          ],
          answer: "Which parts of the input are relevant",
        },
        {
          question: "Which three representations are commonly used in attention?",
          options: [
            "Query, Key, Value",
            "Input, Output, File",
            "Train, Test, Deploy",
            "Image, Audio, Video",
          ],
          answer: "Query, Key, Value",
        },
        {
          question: "What can attention help capture?",
          options: [
            "Relationships between distant tokens",
            "Only adjacent characters",
            "Only numerical tables",
            "Only image pixels",
          ],
          answer: "Relationships between distant tokens",
        },
      ],
    },
  },

  {
    id: "self-attention",
    title: "Self-Attention",
    lesson: {
      overview:
        "Self-attention is an attention mechanism in which tokens within the same sequence attend to one another. It allows each token representation to incorporate information from other relevant tokens in the sequence.",
      sections: [
        {
          heading: "How Self-Attention Works",
          points: [
            "Each token is transformed into Query, Key, and Value representations.",
            "Queries are compared with keys to calculate attention scores.",
            "The scores determine how values are combined.",
            "The resulting representation contains contextual information from the sequence.",
          ],
        },
        {
          heading: "Scaled Dot-Product Attention",
          points: [
            "A common attention calculation uses the dot product between queries and keys.",
            "The scores are scaled before applying Softmax.",
            "Softmax converts the scores into normalized attention weights.",
            "The weighted values produce the output representation.",
          ],
        },
        {
          heading: "Multi-Head Attention",
          points: [
            "Multi-head attention runs several attention mechanisms in parallel.",
            "Different heads can learn different relationships or patterns.",
            "The outputs from the heads are combined to form the final representation.",
          ],
        },
      ],
      mistakes: [
        "Confusing self-attention with attention between completely separate sequences.",
        "Forgetting the role of Softmax in producing normalized attention weights.",
        "Thinking every attention head must learn exactly the same relationship.",
      ],
      quiz: [
        {
          question: "In self-attention, what attends to what?",
          options: [
            "Tokens attend to tokens within the same sequence",
            "Images attend to databases",
            "Files attend to folders",
            "Models attend to browsers",
          ],
          answer: "Tokens attend to tokens within the same sequence",
        },
        {
          question: "What is commonly applied to attention scores to produce normalized weights?",
          options: ["Softmax", "ReLU only", "PCA", "K-Means"],
          answer: "Softmax",
        },
        {
          question: "What is the purpose of multiple attention heads?",
          options: [
            "Learn different relationships in parallel",
            "Delete duplicate tokens",
            "Reduce every sequence to one word",
            "Replace the training dataset",
          ],
          answer: "Learn different relationships in parallel",
        },
      ],
    },
  },

  {
    id: "encoder-decoder",
    title: "Encoder & Decoder",
    lesson: {
      overview:
        "Encoder and decoder components are important concepts in transformer architectures. An encoder transforms an input sequence into contextual representations, while a decoder can generate an output sequence based on available context.",
      sections: [
        {
          heading: "Encoder",
          points: [
            "An encoder processes an input sequence and creates contextual representations.",
            "Encoder representations can capture relationships among input tokens.",
            "Encoder-focused architectures are useful for understanding or representing input text.",
          ],
        },
        {
          heading: "Decoder",
          points: [
            "A decoder generates output tokens step by step.",
            "Decoder-only models use causal attention so a token cannot directly attend to future tokens during generation.",
            "Decoder architectures are widely used for text generation.",
          ],
        },
        {
          heading: "Encoder-Decoder Architecture",
          points: [
            "An encoder-decoder model contains both components.",
            "The encoder processes the source sequence.",
            "The decoder generates the target sequence using the encoded information and previously generated tokens.",
            "This architecture has been widely used for sequence-to-sequence tasks such as translation.",
          ],
        },
      ],
      mistakes: [
        "Assuming all modern language models use both an encoder and a decoder.",
        "Forgetting that decoder generation is autoregressive in common decoder-based language models.",
        "Confusing encoder representations with generated output tokens.",
      ],
      quiz: [
        {
          question: "What does an encoder primarily produce?",
          options: [
            "Contextual representations of the input",
            "Database tables",
            "HTML pages",
            "Operating system files",
          ],
          answer: "Contextual representations of the input",
        },
        {
          question: "Which architecture is commonly used for text generation?",
          options: [
            "Decoder-only transformer",
            "Database-only architecture",
            "CSS-only architecture",
            "Spreadsheet-only architecture",
          ],
          answer: "Decoder-only transformer",
        },
        {
          question: "What is a common use of encoder-decoder models?",
          options: [
            "Sequence-to-sequence tasks",
            "Disk formatting",
            "Web styling",
            "File compression only",
          ],
          answer: "Sequence-to-sequence tasks",
        },
      ],
    },
  },

  {
    id: "llms",
    title: "Large Language Models",
    lesson: {
      overview:
        "Large Language Models (LLMs) are large neural networks trained on extensive text datasets to learn patterns in language. Many modern LLMs are based on transformer architectures and can perform tasks such as generation, summarization, classification, and question answering.",
      sections: [
        {
          heading: "What Makes an LLM Large?",
          points: [
            "LLMs can contain very large numbers of trainable parameters.",
            "They are generally trained on large and diverse datasets.",
            "Training often requires substantial computational resources.",
          ],
        },
        {
          heading: "Pretraining",
          points: [
            "A language model can first be pretrained on large amounts of text.",
            "A common objective for decoder-based models is predicting the next token from previous context.",
            "Pretraining allows the model to learn broad language patterns and representations.",
          ],
        },
        {
          heading: "Capabilities",
          points: [
            "LLMs can generate and transform text.",
            "They can answer questions and summarize information.",
            "They can assist with coding and reasoning-related tasks.",
            "Their capabilities depend heavily on architecture, training data, training methods, and evaluation.",
          ],
        },
      ],
      mistakes: [
        "Thinking an LLM stores every training sentence as a simple database.",
        "Assuming a larger model is automatically better for every task.",
        "Treating generated text as guaranteed to be factually correct.",
      ],
      quiz: [
        {
          question: "What does LLM stand for?",
          options: [
            "Large Language Model",
            "Linear Learning Machine",
            "Language Logic Module",
            "Large Learning Method",
          ],
          answer: "Large Language Model",
        },
        {
          question: "What is a common pretraining objective for decoder-based language models?",
          options: [
            "Predict the next token",
            "Delete every token",
            "Sort database rows",
            "Classify images only",
          ],
          answer: "Predict the next token",
        },
        {
          question: "Are LLM outputs guaranteed to be factually correct?",
          options: [
            "No",
            "Yes, always",
            "Only when they are long",
            "Only when they use images",
          ],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    lesson: {
      overview:
        "Prompt engineering is the practice of designing and refining instructions given to generative AI models. Good prompts provide enough context, constraints, and desired output information to make the model's response more useful and reliable.",
      sections: [
        {
          heading: "Elements of a Good Prompt",
          points: [
            "Clearly describe the task that needs to be completed.",
            "Provide relevant context and constraints.",
            "Specify the desired output format when useful.",
            "Give examples when the expected behavior is difficult to describe.",
          ],
        },
        {
          heading: "Common Prompting Techniques",
          points: [
            "Zero-shot prompting asks the model to perform a task without examples.",
            "Few-shot prompting provides examples of the desired input-output behavior.",
            "Role or context instructions can help establish the perspective or constraints for a task.",
            "Structured prompts can improve consistency for repeated workflows.",
          ],
        },
        {
          heading: "Iterative Prompting",
          points: [
            "Prompts often need refinement after observing model outputs.",
            "Testing prompts with representative examples helps identify weaknesses.",
            "Clear evaluation criteria are useful when comparing prompt variations.",
          ],
        },
      ],
      mistakes: [
        "Writing vague prompts and expecting highly specific results.",
        "Assuming prompt engineering can eliminate every model limitation.",
        "Testing a prompt on only one example.",
      ],
      quiz: [
        {
          question: "What is prompt engineering?",
          options: [
            "Designing and refining instructions for AI models",
            "Building computer hardware",
            "Managing databases",
            "Writing CSS animations",
          ],
          answer: "Designing and refining instructions for AI models",
        },
        {
          question: "What does few-shot prompting provide?",
          options: [
            "Examples of desired behavior",
            "A new neural network",
            "A database schema",
            "A deployment server",
          ],
          answer: "Examples of desired behavior",
        },
        {
          question: "Why should prompts be tested on multiple examples?",
          options: [
            "To check consistency across different inputs",
            "To increase GPU temperature",
            "To remove all model parameters",
            "To create a database",
          ],
          answer: "To check consistency across different inputs",
        },
      ],
    },
  },

  {
    id: "embeddings-vector-search",
    title: "Embeddings & Vector Search",
    lesson: {
      overview:
        "Embeddings convert text, images, or other information into numerical vectors that capture useful relationships. Vector search compares these representations to retrieve items that are semantically similar to a query.",
      sections: [
        {
          heading: "Embeddings",
          points: [
            "An embedding represents an input as a vector in a numerical space.",
            "Items with similar characteristics can have nearby representations.",
            "Embedding models can be trained or designed for specific types of data and tasks.",
          ],
        },
        {
          heading: "Vector Search",
          points: [
            "A query can be converted into an embedding.",
            "The query vector is compared with stored vectors.",
            "Similarity measures such as cosine similarity can be used to find relevant items.",
            "The most similar results can then be returned to an application.",
          ],
        },
        {
          heading: "Applications",
          points: [
            "Semantic document search",
            "Recommendation systems",
            "Duplicate or similarity detection",
            "Retrieval-Augmented Generation",
            "Multimodal search",
          ],
        },
      ],
      mistakes: [
        "Thinking vector similarity is identical to keyword matching.",
        "Ignoring the quality of the embedding model.",
        "Assuming the nearest vector is always the correct result.",
      ],
      quiz: [
        {
          question: "What does an embedding represent?",
          options: [
            "Information as a numerical vector",
            "Only a text filename",
            "A database password",
            "A web page",
          ],
          answer: "Information as a numerical vector",
        },
        {
          question: "What can vector search find?",
          options: [
            "Semantically similar items",
            "Only exact keyword matches",
            "Only images",
            "Only database records",
          ],
          answer: "Semantically similar items",
        },
        {
          question: "Which is a commonly used vector similarity measure?",
          options: [
            "Cosine similarity",
            "HTML similarity",
            "SQL similarity",
            "File similarity",
          ],
          answer: "Cosine similarity",
        },
      ],
    },
  },

  {
    id: "rag",
    title: "RAG",
    lesson: {
      overview:
        "Retrieval-Augmented Generation (RAG) combines information retrieval with generative models. Instead of relying only on information encoded in model parameters, a RAG system retrieves relevant external information and provides it as context for generation.",
      sections: [
        {
          heading: "RAG Pipeline",
          points: [
            "Documents are collected and divided into useful chunks.",
            "The chunks are converted into embeddings and stored in a retrieval system.",
            "A user query is converted into an appropriate representation.",
            "Relevant chunks are retrieved.",
            "The retrieved context is supplied to a generative model to produce an answer.",
          ],
        },
        {
          heading: "Why Use RAG?",
          points: [
            "It can provide access to domain-specific or changing information.",
            "It can ground generated responses in retrieved documents.",
            "It can reduce the need to retrain a model whenever a document collection changes.",
          ],
        },
        {
          heading: "RAG Components",
          points: [
            "Document ingestion and chunking",
            "Embedding generation",
            "Vector or hybrid retrieval",
            "Context construction",
            "Generative model",
            "Evaluation and monitoring",
          ],
        },
      ],
      mistakes: [
        "Assuming RAG automatically makes every answer correct.",
        "Retrieving too much irrelevant context.",
        "Ignoring document quality and chunking strategy.",
      ],
      quiz: [
        {
          question: "What does RAG stand for?",
          options: [
            "Retrieval-Augmented Generation",
            "Random AI Generation",
            "Recursive Answer Generator",
            "Retrieval Analysis Graph",
          ],
          answer: "Retrieval-Augmented Generation",
        },
        {
          question: "What happens before the generative model answers in a typical RAG system?",
          options: [
            "Relevant information is retrieved",
            "The database is deleted",
            "The model is retrained from scratch",
            "All documents are removed",
          ],
          answer: "Relevant information is retrieved",
        },
        {
          question: "Does RAG guarantee that every generated answer is correct?",
          options: [
            "No",
            "Yes",
            "Only for PDFs",
            "Only for short questions",
          ],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "generative-ai-applications",
    title: "Generative AI Applications",
    lesson: {
      overview:
        "Generative AI systems can create or transform content such as text, images, audio, video, and code. Building useful applications requires more than choosing a model: developers also need to consider data, prompting, evaluation, safety, latency, cost, and user experience.",
      sections: [
        {
          heading: "Common Applications",
          points: [
            "AI assistants and chatbots",
            "Document summarization",
            "Code generation and coding assistants",
            "Content generation",
            "Question-answering systems",
            "Image and multimedia generation",
          ],
        },
        {
          heading: "Building a Generative AI Application",
          points: [
            "Define the problem and identify the target users.",
            "Select an appropriate model and supporting components.",
            "Design prompts, retrieval, tools, or workflows as needed.",
            "Evaluate output quality using representative test cases.",
            "Deploy the application and monitor its behavior.",
          ],
        },
        {
          heading: "Important Considerations",
          points: [
            "Generated content can contain factual errors.",
            "Applications may need privacy and security controls.",
            "Latency and inference cost can affect user experience.",
            "Evaluation should consider both technical quality and real-world usefulness.",
          ],
        },
      ],
      mistakes: [
        "Assuming a generative AI model can be used without evaluation.",
        "Ignoring privacy and security when processing user data.",
        "Choosing the largest model without considering cost and latency.",
      ],
      quiz: [
        {
          question: "Which is an example of a Generative AI application?",
          options: [
            "AI assistant",
            "Disk formatting utility",
            "Network cable",
            "Spreadsheet cell",
          ],
          answer: "AI assistant",
        },
        {
          question: "What should happen before deploying a generative AI application?",
          options: [
            "Evaluate it using representative test cases",
            "Delete the training data",
            "Disable all monitoring",
            "Remove all security controls",
          ],
          answer: "Evaluate it using representative test cases",
        },
        {
          question: "What can affect the cost of a generative AI application?",
          options: [
            "Model size and inference usage",
            "HTML indentation",
            "Keyboard layout",
            "Screen brightness",
          ],
          answer: "Model size and inference usage",
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

function TransformersGenerativeAI({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-transformersgenerativeai", subtopics);
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
            <h2 style={{ color: "#1e3a8a" }}>
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
          ✨ Transformers & Generative AI
        </h1>

        <p
          style={{
            color: "#4b5563",
            marginBottom: "25px",
          }}
        >
          Learn the foundations of transformers, LLMs,
          embeddings, RAG, and modern Generative AI
          applications.
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

export default TransformersGenerativeAI;