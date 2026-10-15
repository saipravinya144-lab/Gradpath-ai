import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "introduction",
    title: "Introduction to Deep Learning",
    lesson: {
      overview:
        "Deep Learning is a branch of Machine Learning that uses neural networks with multiple layers to learn complex patterns from data. It is widely used in computer vision, natural language processing, speech recognition, recommendation systems, and generative AI.",
      sections: [
        {
          heading: "What is Deep Learning?",
          points: [
            "Deep Learning uses artificial neural networks to learn representations and patterns from data.",
            "The word 'deep' refers to the use of multiple layers between the input and output.",
            "Deep learning models can automatically learn useful features instead of depending entirely on manually designed features.",
          ],
        },
        {
          heading: "Why Deep Learning is Powerful",
          points: [
            "It can learn highly complex relationships in large datasets.",
            "It performs especially well with images, audio, text, and other unstructured data.",
            "With enough data and computing power, deeper networks can learn increasingly sophisticated representations.",
          ],
        },
        {
          heading: "Applications",
          points: [
            "Image classification and object detection",
            "Speech recognition and voice assistants",
            "Machine translation and text generation",
            "Recommendation systems",
            "Generative AI",
            "Medical and scientific image analysis",
          ],
        },
      ],
      mistakes: [
        "Thinking deep learning and machine learning are completely unrelated technologies.",
        "Assuming a deeper network will always produce a better model.",
        "Ignoring the importance of data quality and quantity.",
      ],
      quiz: [
        {
          question: "What does 'deep' in Deep Learning mainly refer to?",
          options: [
            "Large datasets",
            "Multiple neural network layers",
            "Fast computers",
            "Large files",
          ],
          answer: "Multiple neural network layers",
        },
        {
          question: "Which type of data is Deep Learning particularly effective at handling?",
          options: [
            "Only numerical tables",
            "Only spreadsheets",
            "Images, text, and audio",
            "Only databases",
          ],
          answer: "Images, text, and audio",
        },
        {
          question: "Deep Learning is a branch of which broader field?",
          options: [
            "Machine Learning",
            "Web Development",
            "Operating Systems",
            "Computer Networks",
          ],
          answer: "Machine Learning",
        },
      ],
    },
  },

  {
    id: "neural-network-basics",
    title: "Neural Network Basics",
    lesson: {
      overview:
        "A neural network is a computational model inspired by the way biological neurons process information. It consists of connected neurons organized into layers that transform input data into predictions.",
      sections: [
        {
          heading: "Basic Structure",
          points: [
            "A neural network commonly contains an input layer, one or more hidden layers, and an output layer.",
            "Each connection between neurons has an associated weight.",
            "Neurons combine their inputs and apply an activation function.",
          ],
        },
        {
          heading: "Layers",
          points: [
            "The input layer receives the features of the dataset.",
            "Hidden layers perform transformations and learn representations.",
            "The output layer produces the final prediction or result.",
          ],
        },
        {
          heading: "Learning",
          points: [
            "During training, the network adjusts its weights to reduce prediction error.",
            "The model makes predictions, calculates loss, and updates its parameters.",
            "Repeated training allows the network to learn useful patterns.",
          ],
        },
      ],
      mistakes: [
        "Thinking neurons operate independently without connections.",
        "Confusing the number of layers with the number of neurons.",
        "Assuming neural networks automatically understand what the input represents.",
      ],
      quiz: [
        {
          question: "What does a neural network use to connect neurons?",
          options: ["Weights", "Files", "URLs", "Indexes"],
          answer: "Weights",
        },
        {
          question: "Which layer receives the input features?",
          options: [
            "Output layer",
            "Hidden layer",
            "Input layer",
            "Loss layer",
          ],
          answer: "Input layer",
        },
        {
          question: "What happens to weights during training?",
          options: [
            "They are never changed",
            "They are adjusted to reduce error",
            "They are deleted",
            "They become text",
          ],
          answer: "They are adjusted to reduce error",
        },
      ],
    },
  },

  {
    id: "neurons-layers",
    title: "Neurons & Layers",
    lesson: {
      overview:
        "Neurons are the basic computational units of a neural network. They receive values, combine them using weights and a bias, and pass the result through an activation function.",
      sections: [
        {
          heading: "Artificial Neuron",
          points: [
            "A neuron receives one or more input values.",
            "Each input is multiplied by a corresponding weight.",
            "A bias is added to the weighted sum.",
            "The resulting value is passed through an activation function.",
          ],
        },
        {
          heading: "Weights and Bias",
          points: [
            "Weights determine how strongly individual inputs influence a neuron.",
            "The bias allows the neuron to shift its activation.",
            "Both weights and biases are learned during training.",
          ],
        },
        {
          heading: "Types of Layers",
          points: [
            "Dense or fully connected layers connect neurons from one layer to another.",
            "Convolutional layers are commonly used for image-related tasks.",
            "Other specialized layers can be used depending on the architecture and task.",
          ],
        },
      ],
      mistakes: [
        "Forgetting that bias is also a trainable parameter.",
        "Thinking every neural network must contain only dense layers.",
        "Confusing a neuron with an entire layer.",
      ],
      quiz: [
        {
          question: "What is added to the weighted sum inside a neuron?",
          options: ["Bias", "Dataset", "Epoch", "Batch"],
          answer: "Bias",
        },
        {
          question: "What determines how strongly an input affects a neuron?",
          options: ["Weight", "Epoch", "Loss name", "File size"],
          answer: "Weight",
        },
        {
          question: "What is a neuron?",
          options: [
            "A complete dataset",
            "A basic computational unit",
            "A programming language",
            "A database table",
          ],
          answer: "A basic computational unit",
        },
      ],
    },
  },

  {
    id: "activation-functions",
    title: "Activation Functions",
    lesson: {
      overview:
        "Activation functions determine the output of a neuron after its weighted input and bias are calculated. They introduce non-linearity, allowing neural networks to learn complex relationships.",
      sections: [
        {
          heading: "Why Activation Functions Matter",
          points: [
            "Without suitable activation functions, stacking linear layers would still produce a fundamentally linear transformation.",
            "Non-linear activations allow neural networks to model complex patterns.",
            "Different tasks and architectures may use different activation functions.",
          ],
        },
        {
          heading: "Common Activation Functions",
          points: [
            "ReLU outputs zero for negative inputs and keeps positive inputs.",
            "Sigmoid produces values between 0 and 1 and is often used for binary classification outputs.",
            "Tanh produces values between -1 and 1.",
            "Softmax converts output scores into a probability distribution across multiple classes.",
          ],
        },
        {
          heading: "Choosing an Activation",
          points: [
            "ReLU and its variants are commonly used in hidden layers.",
            "Sigmoid is useful for binary probability outputs.",
            "Softmax is commonly used for multi-class classification outputs.",
          ],
        },
      ],
      mistakes: [
        "Using the same activation function blindly for every layer.",
        "Thinking ReLU always produces positive values.",
        "Confusing Softmax with Sigmoid in multi-class classification.",
      ],
      quiz: [
        {
          question: "Why are activation functions important?",
          options: [
            "They add non-linearity",
            "They store datasets",
            "They create databases",
            "They remove all weights",
          ],
          answer: "They add non-linearity",
        },
        {
          question: "Which activation is commonly used for multi-class classification output?",
          options: ["Softmax", "ReLU", "Tanh", "Linear only"],
          answer: "Softmax",
        },
        {
          question: "What range does Sigmoid produce?",
          options: [
            "0 to 1",
            "-1 to 1",
            "0 to 100",
            "-100 to 100",
          ],
          answer: "0 to 1",
        },
      ],
    },
  },

  {
    id: "forward-propagation",
    title: "Forward Propagation",
    lesson: {
      overview:
        "Forward propagation is the process through which input data moves from the input layer through the neural network to produce an output prediction.",
      sections: [
        {
          heading: "The Process",
          points: [
            "Input features are provided to the network.",
            "Each neuron calculates a weighted sum and adds its bias.",
            "The activation function transforms the result.",
            "The resulting values are passed to the next layer.",
            "The final layer produces the prediction.",
          ],
        },
        {
          heading: "Simple Formula",
          points: [
            "A basic neuron can be represented as z = w₁x₁ + w₂x₂ + b.",
            "The activation function then produces a = activation(z).",
            "In deeper networks, the output of one layer becomes the input to the next layer.",
          ],
        },
        {
          heading: "During Training",
          points: [
            "Forward propagation produces predictions.",
            "The prediction is compared with the actual target using a loss function.",
            "The resulting loss is later used during backpropagation to update parameters.",
          ],
        },
      ],
      mistakes: [
        "Confusing forward propagation with backpropagation.",
        "Forgetting that activation functions are applied during the forward pass.",
        "Thinking forward propagation itself updates the weights.",
      ],
      quiz: [
        {
          question: "What does forward propagation produce?",
          options: [
            "A prediction",
            "A database",
            "A new programming language",
            "A deployment server",
          ],
          answer: "A prediction",
        },
        {
          question: "What is commonly added to the weighted sum?",
          options: ["Bias", "Epoch", "Accuracy", "Dataset name"],
          answer: "Bias",
        },
        {
          question: "Does forward propagation itself update model weights?",
          options: [
            "Yes, always",
            "No",
            "Only during deployment",
            "Only for images",
          ],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "loss-functions",
    title: "Loss Functions",
    lesson: {
      overview:
        "A loss function measures how different a model's prediction is from the actual target. The training process aims to minimize this loss.",
      sections: [
        {
          heading: "Purpose of Loss",
          points: [
            "Loss provides a numerical measure of prediction error.",
            "A lower loss generally indicates that predictions are closer to the target for the chosen objective.",
            "Optimization algorithms use the loss to determine how model parameters should change.",
          ],
        },
        {
          heading: "Common Loss Functions",
          points: [
            "Mean Squared Error is commonly used for regression problems.",
            "Binary Cross-Entropy is commonly used for binary classification.",
            "Categorical Cross-Entropy is commonly used for multi-class classification.",
          ],
        },
        {
          heading: "Loss vs Accuracy",
          points: [
            "Loss is the objective optimized during training.",
            "Accuracy measures the proportion of correct predictions in classification tasks.",
            "A model can have useful accuracy while still having a loss value that provides additional information about its predictions.",
          ],
        },
      ],
      mistakes: [
        "Using classification loss blindly for regression.",
        "Assuming loss and accuracy are the same measurement.",
        "Thinking a single low training loss guarantees good performance on unseen data.",
      ],
      quiz: [
        {
          question: "What does a loss function measure?",
          options: [
            "Prediction error",
            "Computer temperature",
            "Dataset size only",
            "Number of files",
          ],
          answer: "Prediction error",
        },
        {
          question: "Which loss is commonly used for regression?",
          options: [
            "Mean Squared Error",
            "Binary Cross-Entropy",
            "Categorical Cross-Entropy",
            "Softmax",
          ],
          answer: "Mean Squared Error",
        },
        {
          question: "What is the goal during optimization?",
          options: [
            "Maximize loss",
            "Minimize loss",
            "Delete loss",
            "Ignore loss",
          ],
          answer: "Minimize loss",
        },
      ],
    },
  },

  {
    id: "backpropagation",
    title: "Backpropagation",
    lesson: {
      overview:
        "Backpropagation is the process of calculating how much each model parameter contributed to the error. These gradients are then used by an optimizer to update the parameters.",
      sections: [
        {
          heading: "Basic Idea",
          points: [
            "The network first performs forward propagation and calculates a prediction.",
            "A loss function measures the prediction error.",
            "Backpropagation calculates gradients of the loss with respect to model parameters.",
            "The gradients provide information about how parameters should change.",
          ],
        },
        {
          heading: "Chain Rule",
          points: [
            "Backpropagation relies heavily on the calculus chain rule.",
            "The chain rule allows gradients to be propagated through multiple layers.",
            "Automatic differentiation frameworks calculate these gradients efficiently.",
          ],
        },
        {
          heading: "Backpropagation and Optimization",
          points: [
            "Backpropagation calculates gradients.",
            "An optimizer such as gradient descent uses those gradients to update parameters.",
            "These steps are repeated over many training iterations.",
          ],
        },
      ],
      mistakes: [
        "Thinking backpropagation directly means changing weights.",
        "Confusing gradients with weights.",
        "Assuming backpropagation happens before the forward pass.",
      ],
      quiz: [
        {
          question: "What does backpropagation calculate?",
          options: [
            "Gradients",
            "HTML pages",
            "Database records",
            "File names",
          ],
          answer: "Gradients",
        },
        {
          question: "Which mathematical rule is central to backpropagation?",
          options: ["Chain rule", "Pythagorean theorem", "Bayes rule", "Ohm's law"],
          answer: "Chain rule",
        },
        {
          question: "What uses the gradients to update model parameters?",
          options: ["Optimizer", "Browser", "Database", "Compiler"],
          answer: "Optimizer",
        },
      ],
    },
  },

  {
    id: "gradient-descent",
    title: "Gradient Descent",
    lesson: {
      overview:
        "Gradient Descent is an optimization algorithm used to minimize a model's loss by iteratively adjusting its parameters in the direction that reduces the loss.",
      sections: [
        {
          heading: "How Gradient Descent Works",
          points: [
            "The model calculates a loss for its current parameters.",
            "Gradients indicate the direction in which the loss changes.",
            "Parameters are updated in the opposite direction of the gradient.",
            "The process is repeated until the model reaches a suitable solution or training stops.",
          ],
        },
        {
          heading: "Learning Rate",
          points: [
            "The learning rate controls the size of each parameter update.",
            "A learning rate that is too large can cause unstable training or overshoot useful solutions.",
            "A learning rate that is too small can make training extremely slow.",
          ],
        },
        {
          heading: "Training Variants",
          points: [
            "Batch Gradient Descent uses the entire training dataset for an update.",
            "Stochastic Gradient Descent uses individual examples.",
            "Mini-batch Gradient Descent uses small groups of examples and is widely used in deep learning.",
          ],
        },
      ],
      mistakes: [
        "Thinking a larger learning rate is always better.",
        "Confusing an epoch with a gradient update.",
        "Assuming gradient descent guarantees the absolute global optimum for every problem.",
      ],
      quiz: [
        {
          question: "What is the main goal of Gradient Descent?",
          options: [
            "Minimize loss",
            "Increase dataset size",
            "Create neural networks automatically",
            "Remove activation functions",
          ],
          answer: "Minimize loss",
        },
        {
          question: "What controls the size of parameter updates?",
          options: [
            "Learning rate",
            "Accuracy",
            "Batch label",
            "Number of classes",
          ],
          answer: "Learning rate",
        },
        {
          question: "Which approach uses small groups of training examples?",
          options: [
            "Mini-batch Gradient Descent",
            "Only Batch Gradient Descent",
            "Only Stochastic Gradient Descent",
            "Random Forest",
          ],
          answer: "Mini-batch Gradient Descent",
        },
      ],
    },
  },

  {
    id: "pytorch-tensorflow",
    title: "Introduction to PyTorch / TensorFlow",
    lesson: {
      overview:
        "PyTorch and TensorFlow are popular frameworks for building and training deep learning models. They provide tools for tensors, automatic differentiation, neural network layers, optimization, and model training.",
      sections: [
        {
          heading: "PyTorch",
          points: [
            "PyTorch provides tensor operations and automatic differentiation.",
            "Its neural network tools are available through modules such as torch.nn.",
            "PyTorch is widely used in research, education, and production systems.",
          ],
        },
        {
          heading: "TensorFlow",
          points: [
            "TensorFlow is an end-to-end framework for machine learning and deep learning.",
            "It provides APIs for constructing and training neural networks.",
            "TensorFlow can be used for training, deployment, and production-oriented workflows.",
          ],
        },
        {
          heading: "Why Frameworks Matter",
          points: [
            "They provide efficient tensor computation.",
            "Automatic differentiation simplifies gradient calculation.",
            "Built-in layers and optimizers make model development faster.",
            "They can take advantage of hardware accelerators such as GPUs.",
          ],
        },
      ],
      mistakes: [
        "Thinking PyTorch and TensorFlow are programming languages.",
        "Assuming the framework automatically makes a model accurate.",
        "Learning framework syntax without understanding neural-network fundamentals.",
      ],
      quiz: [
        {
          question: "What are PyTorch and TensorFlow?",
          options: [
            "Deep learning frameworks",
            "Database systems",
            "Operating systems",
            "Web browsers",
          ],
          answer: "Deep learning frameworks",
        },
        {
          question: "What does automatic differentiation help calculate?",
          options: [
            "Gradients",
            "HTML",
            "Database tables",
            "File permissions",
          ],
          answer: "Gradients",
        },
        {
          question: "Which hardware can deep learning frameworks commonly use to accelerate computation?",
          options: ["GPU", "Keyboard", "Printer", "Monitor"],
          answer: "GPU",
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

function DeepLearningFoundations({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-deeplearningfoundations", subtopics);
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
    const quizSubmittedForTopic = quizSubmitted[topic.id] || false;
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
                  currentIndex === 0 ? "not-allowed" : "pointer",
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
              disabled={currentIndex === subtopics.length - 1}
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
          🧠 Deep Learning Foundations
        </h1>

        <p
          style={{
            color: "#4b5563",
            marginBottom: "25px",
          }}
        >
          Learn the fundamental concepts behind neural networks
          and modern deep learning.
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

export default DeepLearningFoundations;