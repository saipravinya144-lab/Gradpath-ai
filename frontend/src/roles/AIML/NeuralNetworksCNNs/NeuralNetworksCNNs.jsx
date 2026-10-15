import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "fully-connected",
    title: "Fully Connected Networks",
    lesson: {
      overview:
        "A Fully Connected Network, also called a dense neural network, is an architecture in which every neuron in one layer is connected to every neuron in the next layer. It is one of the fundamental building blocks of neural networks.",
      sections: [
        {
          heading: "What is a Fully Connected Layer?",
          points: [
            "Every neuron in a fully connected layer receives input from all neurons in the previous layer.",
            "Each connection has a learnable weight.",
            "A bias is associated with each neuron.",
            "The weighted inputs and bias are passed through an activation function.",
          ],
        },
        {
          heading: "Network Structure",
          points: [
            "A typical dense network contains an input layer, one or more hidden layers, and an output layer.",
            "Adding more hidden layers increases the depth of the network.",
            "Increasing the number of neurons in a layer increases the number of parameters.",
          ],
        },
        {
          heading: "When to Use Dense Networks",
          points: [
            "Dense networks work well for many structured or tabular datasets.",
            "They can also be used as parts of larger architectures.",
            "For images, using a dense layer directly on raw pixels can create a very large number of parameters, which is one reason convolutional networks are useful.",
          ],
        },
      ],
      mistakes: [
        "Thinking fully connected means every neuron connects to every neuron in the entire network.",
        "Ignoring the large number of parameters that dense layers can create.",
        "Assuming deeper networks are automatically better.",
      ],
      quiz: [
        {
          question:
            "What does fully connected mean in a neural network layer?",
          options: [
            "Every neuron connects to all neurons in the previous layer",
            "Every neuron connects only to itself",
            "There are no trainable parameters",
            "The layer contains only one neuron",
          ],
          answer:
            "Every neuron connects to all neurons in the previous layer",
        },
        {
          question: "What are learned on the connections between neurons?",
          options: ["Weights", "Labels", "File names", "URLs"],
          answer: "Weights",
        },
        {
          question: "What is another common name for a fully connected layer?",
          options: [
            "Dense layer",
            "Pooling layer",
            "Input file",
            "Kernel layer",
          ],
          answer: "Dense layer",
        },
      ],
    },
  },

  {
    id: "training-neural-networks",
    title: "Training Neural Networks",
    lesson: {
      overview:
        "Training a neural network means adjusting its learnable parameters so that its predictions become better according to a chosen loss function. Training repeatedly performs forward propagation, loss calculation, backpropagation, and parameter updates.",
      sections: [
        {
          heading: "Training Cycle",
          points: [
            "Input data is passed through the network during the forward pass.",
            "The model produces a prediction.",
            "The loss function measures the difference between the prediction and target.",
            "Backpropagation calculates gradients.",
            "An optimizer updates the model parameters.",
          ],
        },
        {
          heading: "Epochs and Batches",
          points: [
            "An epoch represents one complete pass through the training dataset.",
            "A batch is a smaller group of training examples processed together.",
            "Mini-batches allow models to train efficiently without requiring the entire dataset in every update.",
          ],
        },
        {
          heading: "Training and Validation",
          points: [
            "Training data is used to learn model parameters.",
            "Validation data helps evaluate performance during model development.",
            "A separate test set can be used for final evaluation on unseen data.",
          ],
        },
      ],
      mistakes: [
        "Confusing an epoch with a single parameter update.",
        "Evaluating the final model only on the training data.",
        "Training for too many epochs without monitoring validation performance.",
      ],
      quiz: [
        {
          question: "What is an epoch?",
          options: [
            "One complete pass through the training dataset",
            "One neuron",
            "One model parameter",
            "One activation function",
          ],
          answer: "One complete pass through the training dataset",
        },
        {
          question: "What happens after the loss is calculated?",
          options: [
            "Gradients can be calculated and parameters updated",
            "The dataset is automatically deleted",
            "The model is permanently deployed",
            "All neurons are removed",
          ],
          answer: "Gradients can be calculated and parameters updated",
        },
        {
          question: "What is validation data mainly used for?",
          options: [
            "Evaluating the model during development",
            "Replacing all training data",
            "Creating HTML pages",
            "Storing model files",
          ],
          answer: "Evaluating the model during development",
        },
      ],
    },
  },

  {
    id: "optimizers",
    title: "Optimizers",
    lesson: {
      overview:
        "Optimizers are algorithms that update a neural network's trainable parameters using the gradients calculated during backpropagation. They control how the model learns from its errors.",
      sections: [
        {
          heading: "Role of an Optimizer",
          points: [
            "The optimizer receives gradients of the loss with respect to model parameters.",
            "It determines how the parameters should be updated.",
            "The goal is generally to reduce the training loss.",
          ],
        },
        {
          heading: "Common Optimizers",
          points: [
            "Gradient Descent is the basic optimization approach.",
            "Stochastic Gradient Descent, or SGD, performs updates using individual examples or mini-batches.",
            "Adam combines ideas related to adaptive learning rates and momentum and is widely used in deep learning.",
          ],
        },
        {
          heading: "Learning Rate",
          points: [
            "The learning rate controls the size of parameter updates.",
            "A very large learning rate can make training unstable.",
            "A very small learning rate can make training unnecessarily slow.",
          ],
        },
      ],
      mistakes: [
        "Thinking the optimizer calculates the loss itself.",
        "Using an unnecessarily large learning rate.",
        "Assuming Adam is always the best optimizer for every problem.",
      ],
      quiz: [
        {
          question: "What is the main job of an optimizer?",
          options: [
            "Update model parameters using gradients",
            "Collect images",
            "Create labels",
            "Remove training data",
          ],
          answer: "Update model parameters using gradients",
        },
        {
          question: "Which optimizer is widely used in deep learning?",
          options: ["Adam", "HTML", "SQL", "Git"],
          answer: "Adam",
        },
        {
          question: "What does the learning rate control?",
          options: [
            "The size of parameter updates",
            "The number of classes",
            "The image resolution",
            "The dataset filename",
          ],
          answer: "The size of parameter updates",
        },
      ],
    },
  },

  {
    id: "regularization",
    title: "Regularization",
    lesson: {
      overview:
        "Regularization is a collection of techniques used to reduce overfitting and improve a model's ability to generalize to unseen data. It discourages the model from relying too heavily on overly complex patterns.",
      sections: [
        {
          heading: "Why Regularization is Needed",
          points: [
            "A neural network with many parameters can memorize training data.",
            "A model that performs extremely well on training data may perform poorly on unseen data.",
            "Regularization introduces constraints or penalties that encourage better generalization.",
          ],
        },
        {
          heading: "Common Techniques",
          points: [
            "L1 regularization adds a penalty related to the absolute values of weights.",
            "L2 regularization adds a penalty related to the squared values of weights.",
            "Dropout randomly removes some activations during training.",
            "Early stopping stops training when validation performance stops improving.",
          ],
        },
        {
          heading: "Generalization",
          points: [
            "The goal of regularization is not simply to reduce training accuracy.",
            "The important objective is better performance on unseen data.",
            "Regularization strength should be selected carefully.",
          ],
        },
      ],
      mistakes: [
        "Thinking regularization is only used to increase training accuracy.",
        "Applying extremely strong regularization without checking model performance.",
        "Confusing regularization with normalization.",
      ],
      quiz: [
        {
          question: "What is the main purpose of regularization?",
          options: [
            "Reduce overfitting",
            "Increase file size",
            "Remove all parameters",
            "Create new labels",
          ],
          answer: "Reduce overfitting",
        },
        {
          question: "Which technique randomly removes activations during training?",
          options: ["Dropout", "PCA", "K-Means", "Sorting"],
          answer: "Dropout",
        },
        {
          question: "Which regularization method penalizes squared weights?",
          options: ["L2", "L1", "Softmax", "ReLU"],
          answer: "L2",
        },
      ],
    },
  },

  {
    id: "dropout",
    title: "Dropout",
    lesson: {
      overview:
        "Dropout is a regularization technique in which randomly selected neuron activations are temporarily ignored during training. This encourages the network to avoid becoming overly dependent on particular neurons.",
      sections: [
        {
          heading: "How Dropout Works",
          points: [
            "During training, a selected fraction of activations is randomly set to zero.",
            "The specific neurons dropped can change from one training step to another.",
            "This prevents the network from relying too heavily on particular pathways.",
          ],
        },
        {
          heading: "Training vs Inference",
          points: [
            "Dropout is normally active during training.",
            "During inference or evaluation, dropout is disabled.",
            "Deep learning frameworks handle the appropriate scaling and behavior between training and evaluation modes.",
          ],
        },
        {
          heading: "Benefits",
          points: [
            "Dropout can reduce overfitting.",
            "It encourages more distributed representations.",
            "It is especially useful in networks with enough capacity to memorize training data.",
          ],
        },
      ],
      mistakes: [
        "Forgetting to switch the model to evaluation mode when using frameworks such as PyTorch.",
        "Thinking the same neurons are always dropped.",
        "Assuming adding more dropout will always improve the model.",
      ],
      quiz: [
        {
          question: "What does Dropout do during training?",
          options: [
            "Randomly disables some activations",
            "Deletes the dataset",
            "Adds more labels",
            "Changes the input file format",
          ],
          answer: "Randomly disables some activations",
        },
        {
          question: "Is Dropout normally active during inference?",
          options: ["No", "Yes, always", "Only for SQL", "Only for images"],
          answer: "No",
        },
        {
          question: "What is a major purpose of Dropout?",
          options: [
            "Reduce overfitting",
            "Increase database size",
            "Create new classes",
            "Remove the loss function",
          ],
          answer: "Reduce overfitting",
        },
      ],
    },
  },

  {
    id: "cnn",
    title: "Convolutional Neural Networks",
    lesson: {
      overview:
        "Convolutional Neural Networks, or CNNs, are neural network architectures designed especially for data with spatial structure, such as images. They use convolutional operations to learn local patterns and build increasingly complex representations.",
      sections: [
        {
          heading: "Why CNNs?",
          points: [
            "Images contain spatial relationships between nearby pixels.",
            "CNNs can learn local patterns such as edges, textures, and shapes.",
            "The same convolutional filters can be applied across different locations in an image.",
          ],
        },
        {
          heading: "Convolution",
          points: [
            "A small learnable filter, or kernel, moves across an input.",
            "At each position, the filter interacts with a local region of the input.",
            "The result forms a feature map.",
            "Different filters can learn different visual patterns.",
          ],
        },
        {
          heading: "Typical CNN Architecture",
          points: [
            "A CNN may contain convolutional layers, activation functions, pooling layers, and fully connected layers.",
            "Early layers often learn simple patterns.",
            "Deeper layers can combine these patterns into more complex features.",
          ],
        },
      ],
      mistakes: [
        "Thinking CNNs are only useful for classifying cats and dogs.",
        "Confusing a convolution kernel with the complete convolutional layer.",
        "Ignoring the spatial structure of image data.",
      ],
      quiz: [
        {
          question: "What type of data are CNNs especially designed for?",
          options: [
            "Spatial data such as images",
            "Only text files",
            "Only database tables",
            "Only audio filenames",
          ],
          answer: "Spatial data such as images",
        },
        {
          question: "What does a convolutional filter learn?",
          options: [
            "Patterns in local regions",
            "Database passwords",
            "Web page layouts",
            "File extensions",
          ],
          answer: "Patterns in local regions",
        },
        {
          question: "What is produced by applying a convolution filter across an input?",
          options: ["Feature map", "Spreadsheet", "Database", "URL"],
          answer: "Feature map",
        },
      ],
    },
  },

  {
    id: "pooling-feature-maps",
    title: "Pooling & Feature Maps",
    lesson: {
      overview:
        "Feature maps contain the responses produced by convolutional filters. Pooling operations reduce the spatial dimensions of feature maps while retaining important information, helping make CNNs more computationally efficient and robust.",
      sections: [
        {
          heading: "Feature Maps",
          points: [
            "A feature map represents the response of a filter to different locations in the input.",
            "Different filters can produce different feature maps.",
            "Feature maps can highlight patterns such as edges, textures, or shapes.",
          ],
        },
        {
          heading: "Pooling",
          points: [
            "Pooling reduces the spatial dimensions of feature maps.",
            "Max pooling selects the maximum value within a local region.",
            "Average pooling calculates the average value within a local region.",
          ],
        },
        {
          heading: "Benefits of Pooling",
          points: [
            "It reduces computational requirements.",
            "It decreases the spatial size of intermediate representations.",
            "It can provide some robustness to small changes in the location of features.",
          ],
        },
      ],
      mistakes: [
        "Confusing pooling with convolution.",
        "Assuming pooling always improves accuracy.",
        "Forgetting that pooling reduces spatial information.",
      ],
      quiz: [
        {
          question: "What is a feature map?",
          options: [
            "The response produced by a filter across an input",
            "A database table",
            "A list of class labels only",
            "A model filename",
          ],
          answer: "The response produced by a filter across an input",
        },
        {
          question: "What does max pooling select?",
          options: [
            "The maximum value in a local region",
            "The minimum value in the entire dataset",
            "The average of all model weights",
            "The first pixel only",
          ],
          answer: "The maximum value in a local region",
        },
        {
          question: "What is a major effect of pooling?",
          options: [
            "Reducing spatial dimensions",
            "Increasing image resolution",
            "Adding more training labels",
            "Removing all feature maps",
          ],
          answer: "Reducing spatial dimensions",
        },
      ],
    },
  },

  {
    id: "image-classification",
    title: "Image Classification",
    lesson: {
      overview:
        "Image classification is the task of assigning one or more labels to an image. CNNs are commonly used to learn visual features and predict the class of an input image.",
      sections: [
        {
          heading: "Classification Pipeline",
          points: [
            "Images are loaded and converted into a suitable numerical representation.",
            "Images are often resized and normalized before being passed to the model.",
            "A CNN extracts useful visual features.",
            "The final layers use these features to predict class probabilities or scores.",
          ],
        },
        {
          heading: "Training an Image Classifier",
          points: [
            "A labeled image dataset is divided into appropriate training and evaluation sets.",
            "The model learns from the training images and their labels.",
            "Loss is calculated from the predictions.",
            "Backpropagation and optimization update the model parameters.",
          ],
        },
        {
          heading: "Evaluation",
          points: [
            "Accuracy can be used when class distributions and error costs make it appropriate.",
            "A confusion matrix can show which classes are being confused.",
            "Precision, recall, and F1-score can provide additional information for classification performance.",
          ],
        },
      ],
      mistakes: [
        "Training and testing on the same images.",
        "Ignoring class imbalance.",
        "Using inconsistent image preprocessing between training and inference.",
      ],
      quiz: [
        {
          question: "What is the goal of image classification?",
          options: [
            "Assign labels to images",
            "Resize every image only",
            "Delete image pixels",
            "Create database tables",
          ],
          answer: "Assign labels to images",
        },
        {
          question: "What does a CNN primarily learn from images?",
          options: [
            "Visual features and patterns",
            "SQL queries",
            "Web routes",
            "File permissions",
          ],
          answer: "Visual features and patterns",
        },
        {
          question: "Which tool can show which classes are being confused?",
          options: [
            "Confusion matrix",
            "HTML table",
            "Git log",
            "Terminal prompt",
          ],
          answer: "Confusion matrix",
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

function NeuralNetworksCNNs({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-neuralnetworkscnns", subtopics);
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
          👁️ Neural Networks & CNNs
        </h1>

        <p
          style={{
            color: "#4b5563",
            marginBottom: "25px",
          }}
        >
          Learn how neural networks are trained and how CNNs
          process images and learn visual features.
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

export default NeuralNetworksCNNs;