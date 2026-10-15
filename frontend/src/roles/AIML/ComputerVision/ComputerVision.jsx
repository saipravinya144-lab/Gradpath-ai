import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "intro",
    title: "Introduction to Computer Vision",
    icon: "👁️",
    lesson: {
      overview:
        "Computer Vision is a field of AI that enables computers to understand and interpret images and videos. It combines image processing, machine learning, and deep learning to solve tasks such as image classification, object detection, and image segmentation.",
      sections: [
        {
          heading: "What is Computer Vision?",
          points: [
            "Computer Vision allows machines to extract useful information from visual data.",
            "Visual data can include images, videos, medical scans, satellite imagery, and camera streams.",
            "A computer vision system typically captures visual data, processes it, extracts useful patterns, and produces a prediction or decision.",
          ],
        },
        {
          heading: "Common Computer Vision Tasks",
          points: [
            "Image classification assigns a category or label to an image.",
            "Object detection identifies objects and their locations using bounding boxes.",
            "Image segmentation assigns labels to individual pixels or regions.",
            "Face detection identifies regions of an image that contain faces.",
            "Image recognition can be used to identify known objects, people, scenes, or patterns.",
          ],
        },
        {
          heading: "Computer Vision and Deep Learning",
          points: [
            "Traditional computer vision often relies on manually designed features.",
            "Deep learning can automatically learn useful visual features from training data.",
            "Convolutional Neural Networks (CNNs) became especially important for image-related deep learning tasks.",
          ],
        },
      ],
      mistakes: [
        "Confusing image classification with object detection.",
        "Assuming computer vision only works with photographs.",
        "Ignoring image quality and preprocessing.",
        "Training models without understanding the dataset and labels.",
      ],
      quiz: [
        {
          question: "What is the primary goal of Computer Vision?",
          options: [
            "To enable computers to understand visual information",
            "To replace databases",
            "To create operating systems",
            "To manage computer networks",
          ],
          answer: "To enable computers to understand visual information",
        },
        {
          question: "Which task identifies objects and their locations in an image?",
          options: [
            "Object detection",
            "Text formatting",
            "Data normalization",
            "Database indexing",
          ],
          answer: "Object detection",
        },
        {
          question: "Which deep learning architecture is especially important for image tasks?",
          options: [
            "Convolutional Neural Network",
            "Decision Tree",
            "K-Means",
            "Naive Bayes",
          ],
          answer: "Convolutional Neural Network",
        },
      ],
    },
  },

  {
    id: "image-processing",
    title: "Image Processing",
    icon: "🖼️",
    lesson: {
      overview:
        "Image processing involves applying computational operations to images to improve their quality, extract useful information, or prepare them for machine learning models.",
      sections: [
        {
          heading: "Image Representation",
          points: [
            "A digital image can be represented as a matrix of pixels.",
            "Grayscale images contain intensity values for each pixel.",
            "Color images commonly contain separate Red, Green, and Blue channels.",
            "Image dimensions are commonly described using width, height, and number of channels.",
          ],
        },
        {
          heading: "Common Image Processing Operations",
          points: [
            "Resizing changes the dimensions of an image.",
            "Cropping extracts a selected region.",
            "Rotation changes the orientation of an image.",
            "Blurring can reduce noise and fine details.",
            "Thresholding converts an image into regions based on pixel intensity.",
          ],
        },
        {
          heading: "Why Preprocessing Matters",
          points: [
            "Images collected from different sources may have different sizes and quality.",
            "Preprocessing can make data more consistent before training.",
            "Normalization and resizing are common preprocessing steps in computer vision pipelines.",
          ],
        },
      ],
      mistakes: [
        "Changing image dimensions without considering the model input size.",
        "Ignoring image channels.",
        "Applying aggressive transformations that destroy useful information.",
        "Using inconsistent preprocessing during training and inference.",
      ],
      quiz: [
        {
          question: "What is a digital image commonly represented as?",
          options: [
            "A matrix of pixel values",
            "A database table only",
            "A text document",
            "A network packet",
          ],
          answer: "A matrix of pixel values",
        },
        {
          question: "What does image resizing change?",
          options: [
            "Image dimensions",
            "Database schema",
            "Model architecture",
            "Programming language",
          ],
          answer: "Image dimensions",
        },
        {
          question: "What is one purpose of image preprocessing?",
          options: [
            "To make visual data more suitable for a model",
            "To delete every image",
            "To replace machine learning",
            "To remove all image channels",
          ],
          answer: "To make visual data more suitable for a model",
        },
      ],
    },
  },

  {
    id: "opencv",
    title: "OpenCV",
    icon: "🔍",
    lesson: {
      overview:
        "OpenCV is an open-source computer vision library widely used for image and video processing. It provides tools for reading, manipulating, analyzing, and transforming visual data.",
      sections: [
        {
          heading: "What is OpenCV?",
          points: [
            "OpenCV stands for Open Source Computer Vision Library.",
            "It provides functions for image processing, video processing, feature detection, and computer vision applications.",
            "OpenCV can be used with Python and several other programming languages.",
          ],
        },
        {
          heading: "Working with Images",
          points: [
            "OpenCV can read images from files.",
            "Images can be resized, cropped, rotated, filtered, and transformed.",
            "Color spaces can be converted depending on the computer vision task.",
            "Processed images can also be written back to files.",
          ],
        },
        {
          heading: "Working with Video",
          points: [
            "OpenCV can read frames from video files.",
            "It can also access frames from cameras.",
            "Each video frame can be processed independently.",
            "This makes OpenCV useful for real-time computer vision applications.",
          ],
        },
      ],
      mistakes: [
        "Confusing OpenCV with a machine learning algorithm.",
        "Forgetting that video processing involves individual frames.",
        "Ignoring image color-space conventions.",
        "Not checking whether an image or video was successfully loaded.",
      ],
      quiz: [
        {
          question: "What does OpenCV primarily provide?",
          options: [
            "Computer vision and image processing tools",
            "Only database management",
            "Only web hosting",
            "Only spreadsheet functions",
          ],
          answer: "Computer vision and image processing tools",
        },
        {
          question: "What can OpenCV process from a video?",
          options: [
            "Individual video frames",
            "Only audio",
            "Only filenames",
            "Only database records",
          ],
          answer: "Individual video frames",
        },
        {
          question: "Is OpenCV itself a machine learning algorithm?",
          options: [
            "No",
            "Yes, it is a classification algorithm",
            "Yes, it is a clustering algorithm",
            "Yes, it is a regression algorithm",
          ],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "classification",
    title: "Image Classification",
    icon: "🏷️",
    lesson: {
      overview:
        "Image classification is the task of assigning one or more labels to an image based on its visual content. It is one of the fundamental applications of computer vision.",
      sections: [
        {
          heading: "How Image Classification Works",
          points: [
            "A classification model receives an image as input.",
            "The image is converted into a numerical representation suitable for the model.",
            "The model learns patterns associated with different classes during training.",
            "During inference, the model predicts the class or classes that best match the input.",
          ],
        },
        {
          heading: "Training a Classifier",
          points: [
            "A labeled dataset is required for supervised image classification.",
            "Images are commonly resized and normalized before training.",
            "The dataset is generally divided into training, validation, and test sets.",
            "A loss function measures prediction error during training.",
          ],
        },
        {
          heading: "Applications",
          points: [
            "Classifying animals or objects in photographs.",
            "Medical image classification.",
            "Plant disease classification.",
            "Quality inspection in manufacturing.",
          ],
        },
      ],
      mistakes: [
        "Using poorly labeled training data.",
        "Ignoring class imbalance.",
        "Evaluating only on the training dataset.",
        "Applying different preprocessing during inference.",
      ],
      quiz: [
        {
          question: "What does image classification primarily predict?",
          options: [
            "A class or label for an image",
            "Only the image dimensions",
            "A database table",
            "A network address",
          ],
          answer: "A class or label for an image",
        },
        {
          question: "What type of dataset is commonly required for supervised image classification?",
          options: [
            "Labeled images",
            "Only unlabeled images",
            "Only text files",
            "Only audio recordings",
          ],
          answer: "Labeled images",
        },
        {
          question: "Why should a classifier be evaluated on a test set?",
          options: [
            "To estimate performance on unseen data",
            "To increase image size",
            "To remove labels",
            "To replace training",
          ],
          answer: "To estimate performance on unseen data",
        },
      ],
    },
  },

  {
    id: "object-detection",
    title: "Object Detection",
    icon: "📦",
    lesson: {
      overview:
        "Object detection identifies objects in an image or video and determines where those objects are located. Unlike image classification, detection provides both class information and spatial information.",
      sections: [
        {
          heading: "Classification vs Detection",
          points: [
            "Image classification predicts what an image contains.",
            "Object detection predicts what objects are present and where they are.",
            "Detection commonly represents objects using bounding boxes.",
          ],
        },
        {
          heading: "Detection Components",
          points: [
            "A bounding box describes the location of a detected object.",
            "A class label describes what the detected object is.",
            "A confidence score indicates how confident the model is in its prediction.",
            "Multiple objects can be detected in the same image.",
          ],
        },
        {
          heading: "Applications",
          points: [
            "Autonomous driving systems.",
            "Traffic monitoring.",
            "Security and surveillance systems.",
            "Retail object detection.",
            "Industrial inspection.",
          ],
        },
      ],
      mistakes: [
        "Confusing object detection with image classification.",
        "Ignoring confidence scores.",
        "Using poorly annotated bounding boxes.",
        "Evaluating detection models only by classification accuracy.",
      ],
      quiz: [
        {
          question: "What does object detection provide in addition to class information?",
          options: [
            "Object locations",
            "Database credentials",
            "Operating system details",
            "Source code",
          ],
          answer: "Object locations",
        },
        {
          question: "How are detected objects commonly localized?",
          options: [
            "Bounding boxes",
            "Database rows",
            "Audio channels",
            "Text paragraphs",
          ],
          answer: "Bounding boxes",
        },
        {
          question: "Can object detection identify multiple objects in one image?",
          options: [
            "Yes",
            "No, only one object is possible",
            "Only when the image is grayscale",
            "Only when no labels exist",
          ],
          answer: "Yes",
        },
      ],
    },
  },

  {
    id: "segmentation",
    title: "Image Segmentation",
    icon: "🧩",
    lesson: {
      overview:
        "Image segmentation divides an image into meaningful regions or assigns labels to pixels. It provides more detailed spatial information than simply classifying an entire image or drawing bounding boxes around objects.",
      sections: [
        {
          heading: "What is Segmentation?",
          points: [
            "Segmentation assigns labels to pixels or regions of an image.",
            "It can identify the exact shape or boundary of objects.",
            "Segmentation is useful when precise localization is required.",
          ],
        },
        {
          heading: "Types of Segmentation",
          points: [
            "Semantic segmentation assigns a class label to every pixel.",
            "Instance segmentation distinguishes individual objects of the same class.",
            "Different segmentation approaches are selected depending on the application.",
          ],
        },
        {
          heading: "Applications",
          points: [
            "Medical image analysis.",
            "Autonomous vehicles.",
            "Satellite image analysis.",
            "Background and foreground separation.",
            "Industrial inspection.",
          ],
        },
      ],
      mistakes: [
        "Confusing semantic segmentation with object detection.",
        "Ignoring pixel-level annotation quality.",
        "Using segmentation when simple classification is sufficient.",
        "Forgetting that segmentation can require substantial computational resources.",
      ],
      quiz: [
        {
          question: "What does image segmentation primarily operate on?",
          options: [
            "Pixels or image regions",
            "Only filenames",
            "Only database rows",
            "Only audio samples",
          ],
          answer: "Pixels or image regions",
        },
        {
          question: "What is a key difference between instance and semantic segmentation?",
          options: [
            "Instance segmentation distinguishes individual objects",
            "Semantic segmentation cannot use images",
            "Instance segmentation only works with text",
            "Semantic segmentation is a database technique",
          ],
          answer: "Instance segmentation distinguishes individual objects",
        },
        {
          question: "Which field can use image segmentation?",
          options: [
            "Medical image analysis",
            "Only accounting",
            "Only web development",
            "Only networking",
          ],
          answer: "Medical image analysis",
        },
      ],
    },
  },

  {
    id: "projects",
    title: "Computer Vision Projects",
    icon: "🏆",
    lesson: {
      overview:
        "Computer vision projects combine image processing, machine learning, deep learning, and practical software development. Projects help turn individual concepts into complete computer vision systems.",
      sections: [
        {
          heading: "Beginner Projects",
          points: [
            "Build an image preprocessing tool using OpenCV.",
            "Create a simple image classifier.",
            "Build a face detection application.",
            "Create an image enhancement or filtering application.",
          ],
        },
        {
          heading: "Intermediate Projects",
          points: [
            "Build an object detection application.",
            "Create a real-time camera-based detection system.",
            "Build a plant disease classification system.",
            "Create an image segmentation application.",
          ],
        },
        {
          heading: "Capstone Project Structure",
          points: [
            "Define a clear computer vision problem.",
            "Collect or select an appropriate dataset.",
            "Clean and preprocess the images.",
            "Train and evaluate a suitable model.",
            "Build an inference or application layer.",
            "Document the architecture, results, limitations, and future improvements.",
          ],
        },
      ],
      mistakes: [
        "Choosing a project without defining the actual problem.",
        "Using a dataset without understanding its labels and limitations.",
        "Focusing only on model accuracy and ignoring the application.",
        "Failing to separate training, validation, and test data.",
      ],
      quiz: [
        {
          question: "What should be defined before selecting a computer vision model?",
          options: [
            "The problem and task",
            "Only the UI color",
            "Only the filename",
            "Only the programming editor",
          ],
          answer: "The problem and task",
        },
        {
          question: "Which is a useful beginner computer vision project?",
          options: [
            "An image preprocessing tool using OpenCV",
            "A database server replacement",
            "An operating system kernel",
            "A spreadsheet macro only",
          ],
          answer: "An image preprocessing tool using OpenCV",
        },
        {
          question: "What should a capstone project document?",
          options: [
            "Architecture, results, limitations, and future improvements",
            "Only the project title",
            "Only the source-code filename",
            "Only the UI screenshots",
          ],
          answer:
            "Architecture, results, limitations, and future improvements",
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

function ComputerVision({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-computervision", subtopics);
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
    const answers = topic.lesson.quiz.map(
      (_, index) => quizAnswers[`${topic.id}-${index}`]
    );

    const score = topic.lesson.quiz.reduce((total, question, index) => {
      return total + (answers[index] === question.answer ? 1 : 0);
    }, 0);

    setQuizSubmitted((prev) => ({
      ...prev,
      [topic.id]: true,
    }));

    return score;

    await saveQuizResult({
      subject: "AI/ML",
      role: "AI/ML Engineer",
      topic: topic.title,
      topicId: topic.id,
      score,
      totalQuestions: topic.lesson.quiz.length
    });

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
          ← Back to AI / ML Roadmap
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
            📷 Computer Vision
          </h1>

          <p style={{ color: "#475569", lineHeight: "1.6" }}>
            Learn the fundamentals of computer vision, image processing,
            OpenCV, image classification, object detection, segmentation,
            and practical computer vision projects.
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

export default ComputerVision;