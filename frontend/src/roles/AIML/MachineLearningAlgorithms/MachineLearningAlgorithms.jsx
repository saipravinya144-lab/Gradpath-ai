import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// QUIZ SHUFFLE
// =====================================================

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
};

// =====================================================
// MACHINE LEARNING ALGORITHMS DATA
// =====================================================

const subtopics = [
  {
    id: "linear-regression",
    title: "Linear Regression",
    icon: "📈",

    lesson: {
      overview:
        "Linear Regression is a supervised learning algorithm used to predict a continuous numerical value. It learns a relationship between input features and a target variable by fitting a line that minimizes prediction error.",

      sections: [
        {
          heading: "What is Linear Regression?",
          points: [
            "Linear Regression predicts a continuous target value from one or more input features.",
            "It assumes that the target has an approximately linear relationship with the input variables.",
            "The simplest form uses a straight line represented as y = mx + c.",
          ],
        },
        {
          heading: "Simple vs Multiple Linear Regression",
          points: [
            "Simple Linear Regression uses one input feature.",
            "Multiple Linear Regression uses two or more input features.",
            "Multiple regression can model more complex relationships while still using a linear equation.",
          ],
        },
        {
          heading: "Cost Function",
          points: [
            "The model needs a way to measure how far its predictions are from the actual values.",
            "Mean Squared Error (MSE) is commonly used as the loss or cost function.",
            "Training attempts to find parameters that minimize the prediction error.",
          ],
        },
        {
          heading: "When to Use Linear Regression",
          points: [
            "Use it when the target variable is continuous.",
            "It is useful for tasks such as predicting prices, sales, temperature, or demand.",
            "It is also useful when interpretability of feature relationships is important.",
          ],
        },
      ],

      mistakes: [
        "Using Linear Regression for a categorical target without an appropriate formulation.",
        "Ignoring strong non-linear relationships in the data.",
        "Evaluating the model only on training data.",
      ],

      quiz: [
        {
          question:
            "What type of target is Linear Regression primarily used to predict?",
          options: [
            "Continuous numerical values",
            "Only image labels",
            "Only text categories",
            "Boolean values only",
          ],
          answer: "Continuous numerical values",
        },
        {
          question:
            "Which metric is commonly used as a cost function for Linear Regression?",
          options: [
            "Mean Squared Error",
            "Accuracy",
            "F1-score",
            "Confusion Matrix",
          ],
          answer: "Mean Squared Error",
        },
        {
          question:
            "Multiple Linear Regression uses:",
          options: [
            "Two or more input features",
            "Exactly one feature",
            "No features",
            "Only categorical labels",
          ],
          answer: "Two or more input features",
        },
      ],
    },
  },

  {
    id: "logistic-regression",
    title: "Logistic Regression",
    icon: "🔢",

    lesson: {
      overview:
        "Logistic Regression is a supervised learning algorithm commonly used for classification. It estimates the probability that an observation belongs to a particular class.",

      sections: [
        {
          heading: "What is Logistic Regression?",
          points: [
            "Despite its name, Logistic Regression is mainly used for classification tasks.",
            "It converts a linear combination of features into a probability.",
            "The predicted probability can then be converted into a class label.",
          ],
        },
        {
          heading: "Sigmoid Function",
          points: [
            "The sigmoid function maps values into a range between 0 and 1.",
            "This makes it useful for representing probabilities.",
            "A threshold such as 0.5 can be used to decide between two classes.",
          ],
        },
        {
          heading: "Binary Classification",
          points: [
            "Logistic Regression is commonly introduced using two classes.",
            "Examples include spam vs not spam and pass vs fail.",
            "The model learns coefficients that describe how features influence class probability.",
          ],
        },
        {
          heading: "Multiclass Classification",
          points: [
            "Logistic Regression can also be extended to multiple classes.",
            "Different strategies can be used to classify observations into more than two categories.",
            "The choice depends on the implementation and problem.",
          ],
        },
      ],

      mistakes: [
        "Confusing Logistic Regression with Linear Regression.",
        "Treating the probability output as a guaranteed prediction.",
        "Choosing a classification threshold without considering the problem requirements.",
      ],

      quiz: [
        {
          question:
            "Logistic Regression is primarily used for:",
          options: [
            "Classification",
            "Image compression",
            "Sorting",
            "Database indexing",
          ],
          answer: "Classification",
        },
        {
          question:
            "Which function is commonly associated with binary Logistic Regression?",
          options: [
            "Sigmoid",
            "ReLU",
            "Softplus only",
            "Absolute value",
          ],
          answer: "Sigmoid",
        },
        {
          question:
            "The sigmoid function produces values mainly between:",
          options: [
            "0 and 1",
            "-100 and 100",
            "1 and 10",
            "0 and 1000",
          ],
          answer: "0 and 1",
        },
      ],
    },
  },

  {
    id: "decision-trees",
    title: "Decision Trees",
    icon: "🌳",

    lesson: {
      overview:
        "Decision Trees are supervised learning models that make predictions by repeatedly splitting data according to feature-based conditions. They can be used for both classification and regression.",

      sections: [
        {
          heading: "How Decision Trees Work",
          points: [
            "A tree begins at a root node.",
            "The data is split using conditions based on feature values.",
            "Each internal node represents a decision, while leaf nodes represent final predictions.",
          ],
        },
        {
          heading: "Splitting Criteria",
          points: [
            "Classification trees can use measures such as Gini impurity or entropy.",
            "Regression trees can use measures based on numerical prediction error.",
            "The algorithm selects splits that improve the chosen objective.",
          ],
        },
        {
          heading: "Tree Depth",
          points: [
            "A deeper tree can capture more complex patterns.",
            "Very deep trees can memorize training data and overfit.",
            "Maximum depth and other constraints can be used to control complexity.",
          ],
        },
        {
          heading: "Advantages",
          points: [
            "Decision Trees are relatively easy to interpret.",
            "They can model non-linear relationships.",
            "They can work with numerical and categorical features depending on implementation.",
          ],
        },
      ],

      mistakes: [
        "Allowing a tree to grow unnecessarily deep.",
        "Assuming every split automatically improves generalization.",
        "Ignoring validation performance when selecting tree parameters.",
      ],

      quiz: [
        {
          question:
            "What structure does a Decision Tree use to make predictions?",
          options: [
            "Nodes and branches",
            "Only matrices",
            "A database table",
            "A hash map",
          ],
          answer: "Nodes and branches",
        },
        {
          question:
            "What can happen when a Decision Tree becomes too deep?",
          options: [
            "It may overfit",
            "It always becomes more accurate on unseen data",
            "It stops using features",
            "It becomes unsupervised",
          ],
          answer: "It may overfit",
        },
        {
          question:
            "Decision Trees can be used for:",
          options: [
            "Classification and regression",
            "Only clustering",
            "Only regression",
            "Only dimensionality reduction",
          ],
          answer: "Classification and regression",
        },
      ],
    },
  },

  {
    id: "random-forest",
    title: "Random Forest",
    icon: "🌲",

    lesson: {
      overview:
        "Random Forest is an ensemble learning algorithm that combines multiple Decision Trees to produce a more robust prediction. It can be used for classification and regression.",

      sections: [
        {
          heading: "What is Random Forest?",
          points: [
            "Random Forest creates many Decision Trees instead of relying on a single tree.",
            "Each tree is trained using a randomized view of the training data and features.",
            "The predictions from the trees are combined to produce the final result.",
          ],
        },
        {
          heading: "Bagging",
          points: [
            "Random Forest is based on the idea of combining models trained on different samples.",
            "This process is commonly associated with bootstrap aggregation, or bagging.",
            "Combining multiple trees can reduce the instability of individual Decision Trees.",
          ],
        },
        {
          heading: "Classification and Regression",
          points: [
            "For classification, tree predictions can be combined using voting.",
            "For regression, predictions can be combined using averaging.",
            "The exact implementation determines available options.",
          ],
        },
        {
          heading: "Feature Importance",
          points: [
            "Random Forest models can provide measures of feature importance.",
            "These measures can help identify features that contribute strongly to predictions.",
            "Feature importance should still be interpreted carefully.",
          ],
        },
      ],

      mistakes: [
        "Assuming more trees always means unlimited improvement.",
        "Ignoring model hyperparameters such as maximum depth.",
        "Treating feature importance as proof of causation.",
      ],

      quiz: [
        {
          question:
            "Random Forest is an ensemble of:",
          options: [
            "Decision Trees",
            "Linear equations only",
            "Neural networks only",
            "K-Means models",
          ],
          answer: "Decision Trees",
        },
        {
          question:
            "For classification, Random Forest commonly combines tree predictions using:",
          options: [
            "Voting",
            "Text generation",
            "Gradient descent only",
            "Sorting",
          ],
          answer: "Voting",
        },
        {
          question:
            "Random Forest can be used for:",
          options: [
            "Classification and regression",
            "Only clustering",
            "Only dimensionality reduction",
            "Only reinforcement learning",
          ],
          answer: "Classification and regression",
        },
      ],
    },
  },

  {
    id: "knn",
    title: "K-Nearest Neighbors",
    icon: "📍",

    lesson: {
      overview:
        "K-Nearest Neighbors (KNN) is a supervised learning algorithm that makes predictions based on the closest training examples. It can be used for classification and regression.",

      sections: [
        {
          heading: "How KNN Works",
          points: [
            "KNN stores the training examples rather than learning a traditional parametric model.",
            "For a new observation, the algorithm identifies its nearest training examples.",
            "The value of K determines how many neighbors are considered.",
          ],
        },
        {
          heading: "Distance",
          points: [
            "KNN commonly uses a distance measure to determine which examples are nearest.",
            "Euclidean distance is a common choice for numerical data.",
            "The appropriate distance measure depends on the type and representation of the data.",
          ],
        },
        {
          heading: "Choosing K",
          points: [
            "A small K can make the model sensitive to individual observations.",
            "A large K can make the model smoother but may ignore local patterns.",
            "K should generally be selected using validation or cross-validation.",
          ],
        },
        {
          heading: "Feature Scaling",
          points: [
            "Distance-based algorithms can be strongly affected by feature scales.",
            "Scaling features can prevent large-scale features from dominating the distance calculation.",
            "Standardization or normalization may be useful depending on the data.",
          ],
        },
      ],

      mistakes: [
        "Using KNN without considering feature scaling.",
        "Choosing K arbitrarily.",
        "Using an unsuitable distance metric.",
      ],

      quiz: [
        {
          question:
            "KNN makes predictions primarily based on:",
          options: [
            "Nearby training examples",
            "A fixed decision tree",
            "Random labels",
            "Database keys",
          ],
          answer: "Nearby training examples",
        },
        {
          question:
            "What does K represent in KNN?",
          options: [
            "Number of neighbors considered",
            "Number of classes only",
            "Number of datasets",
            "Number of features removed",
          ],
          answer: "Number of neighbors considered",
        },
        {
          question:
            "Why is feature scaling often important for KNN?",
          options: [
            "It affects distance calculations",
            "It converts classification into regression",
            "It removes all missing values",
            "It creates new labels",
          ],
          answer: "It affects distance calculations",
        },
      ],
    },
  },

  {
    id: "svm",
    title: "Support Vector Machines",
    icon: "📐",

    lesson: {
      overview:
        "Support Vector Machines (SVMs) are supervised learning algorithms that find decision boundaries capable of separating classes. They can also be used for regression.",

      sections: [
        {
          heading: "What is an SVM?",
          points: [
            "An SVM attempts to find a boundary that separates different classes.",
            "The boundary is selected with the goal of creating a large margin between classes.",
            "The observations closest to the boundary are called support vectors.",
          ],
        },
        {
          heading: "Margin",
          points: [
            "The margin represents the distance between the decision boundary and the closest training observations.",
            "A larger margin can improve generalization in suitable problems.",
            "The optimization process attempts to balance separation and model complexity.",
          ],
        },
        {
          heading: "Kernel Trick",
          points: [
            "Some datasets cannot be separated effectively using a simple linear boundary.",
            "Kernel functions allow SVMs to model more complex decision boundaries.",
            "Common kernels include linear, polynomial, and RBF kernels.",
          ],
        },
        {
          heading: "Feature Scaling",
          points: [
            "SVM performance can be sensitive to feature scales.",
            "Scaling numerical features is often an important preprocessing step.",
            "The appropriate preprocessing depends on the dataset.",
          ],
        },
      ],

      mistakes: [
        "Ignoring feature scaling.",
        "Choosing kernel and hyperparameters without validation.",
        "Assuming a complex kernel is always better.",
      ],

      quiz: [
        {
          question:
            "What does an SVM try to find?",
          options: [
            "A decision boundary with a suitable margin",
            "A database schema",
            "A random cluster",
            "A neural network layer",
          ],
          answer: "A decision boundary with a suitable margin",
        },
        {
          question:
            "Which observations are called support vectors?",
          options: [
            "Observations closest to the decision boundary",
            "All observations with missing values",
            "Only the first observations",
            "Only correctly classified observations",
          ],
          answer:
            "Observations closest to the decision boundary",
        },
        {
          question:
            "What can kernels help SVMs model?",
          options: [
            "Non-linear decision boundaries",
            "Database relationships",
            "Missing values automatically",
            "Text spelling",
          ],
          answer: "Non-linear decision boundaries",
        },
      ],
    },
  },

  {
    id: "naive-bayes",
    title: "Naive Bayes",
    icon: "🎲",

    lesson: {
      overview:
        "Naive Bayes is a probabilistic supervised learning algorithm based on Bayes' theorem. It makes a simplifying assumption that features are conditionally independent given the class.",

      sections: [
        {
          heading: "Bayes' Theorem",
          points: [
            "Bayes' theorem describes how a prior belief can be updated using evidence.",
            "It combines prior probability with the likelihood of observed features.",
            "The resulting posterior probability can be used for classification.",
          ],
        },
        {
          heading: "The Naive Assumption",
          points: [
            "Naive Bayes assumes that features are conditionally independent given the class.",
            "This assumption is often unrealistic in real-world datasets.",
            "Despite the simplification, the algorithm can perform well on many classification tasks.",
          ],
        },
        {
          heading: "Common Applications",
          points: [
            "Naive Bayes is frequently used for text classification.",
            "It can be useful for spam detection and document classification.",
            "Different Naive Bayes variants are suited to different feature distributions.",
          ],
        },
        {
          heading: "Advantages",
          points: [
            "The algorithm can be fast and computationally efficient.",
            "It can work well with high-dimensional feature spaces.",
            "It provides a probabilistic approach to classification.",
          ],
        },
      ],

      mistakes: [
        "Assuming the independence assumption is always true.",
        "Using an inappropriate Naive Bayes variant for the feature data.",
        "Ignoring the need for suitable feature representation.",
      ],

      quiz: [
        {
          question:
            "Naive Bayes is based on:",
          options: [
            "Bayes' theorem",
            "Gradient descent only",
            "Decision tree pruning",
            "K-Means centroids",
          ],
          answer: "Bayes' theorem",
        },
        {
          question:
            "What is the 'naive' assumption?",
          options: [
            "Features are conditionally independent given the class",
            "All data is identical",
            "There is only one feature",
            "The model has no parameters",
          ],
          answer:
            "Features are conditionally independent given the class",
        },
        {
          question:
            "Naive Bayes is commonly useful for:",
          options: [
            "Text classification",
            "Rendering websites",
            "Database normalization",
            "Image resizing only",
          ],
          answer: "Text classification",
        },
      ],
    },
  },

  {
    id: "kmeans",
    title: "K-Means Clustering",
    icon: "🔵",

    lesson: {
      overview:
        "K-Means is an unsupervised learning algorithm that divides observations into a specified number of clusters. It attempts to group observations so that members of the same cluster are relatively similar.",

      sections: [
        {
          heading: "What is K-Means?",
          points: [
            "K-Means is an unsupervised clustering algorithm.",
            "It does not require class labels during training.",
            "The user or algorithm must determine the number of clusters, K.",
          ],
        },
        {
          heading: "Centroids",
          points: [
            "Each cluster is represented by a centroid.",
            "Observations are assigned to the nearest centroid according to the selected distance measure.",
            "Centroids are repeatedly updated based on their assigned observations.",
          ],
        },
        {
          heading: "Basic Process",
          points: [
            "Initialize K cluster centroids.",
            "Assign observations to their nearest centroid.",
            "Recalculate the centroids.",
            "Repeat until the assignments or centroids stabilize according to the stopping criteria.",
          ],
        },
        {
          heading: "Choosing K",
          points: [
            "The number of clusters can strongly affect the resulting groups.",
            "The elbow method is one approach for evaluating different K values.",
            "Domain knowledge can also help determine an appropriate number of clusters.",
          ],
        },
      ],

      mistakes: [
        "Assuming K-Means automatically discovers the correct number of clusters.",
        "Ignoring feature scaling when distances are affected by feature magnitude.",
        "Assuming every dataset is naturally suited to spherical or centroid-based clusters.",
      ],

      quiz: [
        {
          question:
            "K-Means is primarily a:",
          options: [
            "Clustering algorithm",
            "Supervised regression algorithm",
            "Database algorithm",
            "Sorting algorithm",
          ],
          answer: "Clustering algorithm",
        },
        {
          question:
            "What represents each cluster in K-Means?",
          options: [
            "A centroid",
            "A decision tree",
            "A class label",
            "A support vector",
          ],
          answer: "A centroid",
        },
        {
          question:
            "What does K represent in K-Means?",
          options: [
            "Number of clusters",
            "Number of features",
            "Number of labels",
            "Number of training epochs",
          ],
          answer: "Number of clusters",
        },
      ],
    },
  },

  {
    id: "hierarchical-clustering",
    title: "Hierarchical Clustering",
    icon: "🌿",

    lesson: {
      overview:
        "Hierarchical Clustering is an unsupervised learning technique that creates a hierarchy of groups. The hierarchy can be represented using a tree-like structure called a dendrogram.",

      sections: [
        {
          heading: "What is Hierarchical Clustering?",
          points: [
            "Hierarchical Clustering groups observations based on their similarity.",
            "It creates nested clusters rather than requiring a single flat grouping immediately.",
            "The resulting hierarchy can be visualized using a dendrogram.",
          ],
        },
        {
          heading: "Agglomerative Clustering",
          points: [
            "Agglomerative clustering starts with each observation as its own cluster.",
            "The closest clusters are repeatedly merged.",
            "The process continues until the desired hierarchy is produced.",
          ],
        },
        {
          heading: "Dendrogram",
          points: [
            "A dendrogram shows how clusters are merged at different similarity or distance levels.",
            "A horizontal cut through the dendrogram can be used to obtain a chosen number of clusters.",
            "The height of a merge represents the distance or dissimilarity at which the merge occurs.",
          ],
        },
        {
          heading: "Linkage Methods",
          points: [
            "Different linkage methods define how the distance between clusters is calculated.",
            "Common approaches include single, complete, average, and Ward linkage.",
            "The choice of linkage can change the resulting clusters.",
          ],
        },
      ],

      mistakes: [
        "Ignoring the distance metric used by the algorithm.",
        "Selecting clusters without examining the dendrogram or validation evidence.",
        "Assuming one linkage method works best for every dataset.",
      ],

      quiz: [
        {
          question:
            "Hierarchical Clustering is:",
          options: [
            "An unsupervised clustering technique",
            "A supervised regression algorithm",
            "A database query language",
            "A neural network architecture",
          ],
          answer:
            "An unsupervised clustering technique",
        },
        {
          question:
            "What visualizes the hierarchy of clusters?",
          options: [
            "Dendrogram",
            "Confusion matrix",
            "ROC curve only",
            "Loss function",
          ],
          answer: "Dendrogram",
        },
        {
          question:
            "Agglomerative clustering starts by:",
          options: [
            "Treating each observation as its own cluster",
            "Creating one cluster for every feature",
            "Removing all observations",
            "Training a neural network",
          ],
          answer:
            "Treating each observation as its own cluster",
        },
      ],
    },
  },

  {
    id: "pca",
    title: "Principal Component Analysis",
    icon: "📉",

    lesson: {
      overview:
        "Principal Component Analysis (PCA) is a dimensionality reduction technique that transforms data into a new set of directions called principal components. These components capture important patterns of variation in the data.",

      sections: [
        {
          heading: "What is PCA?",
          points: [
            "PCA transforms correlated features into a smaller set of new variables called principal components.",
            "The components are ordered according to the amount of variance they capture.",
            "PCA can reduce the number of dimensions while attempting to preserve important information.",
          ],
        },
        {
          heading: "Principal Components",
          points: [
            "The first principal component captures the greatest possible variance along one direction.",
            "The next components capture additional variance while being orthogonal to previous components.",
            "A subset of the components can be retained for dimensionality reduction.",
          ],
        },
        {
          heading: "Why Use PCA?",
          points: [
            "PCA can reduce computational complexity when datasets contain many features.",
            "It can help visualize high-dimensional data in two or three dimensions.",
            "It can also reduce redundancy caused by correlated features.",
          ],
        },
        {
          heading: "Feature Scaling and PCA",
          points: [
            "PCA is sensitive to feature scales because it is based on variance and directions in feature space.",
            "Scaling may therefore be important before applying PCA.",
            "The appropriate preprocessing depends on the dataset.",
          ],
        },
      ],

      mistakes: [
        "Applying PCA without considering feature scaling.",
        "Assuming every principal component has a direct real-world interpretation.",
        "Keeping too few components without checking how much variance is retained.",
      ],

      quiz: [
        {
          question:
            "PCA is mainly used for:",
          options: [
            "Dimensionality reduction",
            "Database management",
            "Web development",
            "Sorting records",
          ],
          answer: "Dimensionality reduction",
        },
        {
          question:
            "What are the new directions created by PCA called?",
          options: [
            "Principal components",
            "Decision nodes",
            "Support vectors",
            "Cluster labels",
          ],
          answer: "Principal components",
        },
        {
          question:
            "Why can scaling be important before PCA?",
          options: [
            "PCA is sensitive to feature scale",
            "PCA requires categorical labels",
            "Scaling creates clusters automatically",
            "Scaling removes the need for training",
          ],
          answer: "PCA is sensitive to feature scale",
        },
      ],
    },
  },
];

// =====================================================
// MACHINE LEARNING ALGORITHMS COMPONENT
// =====================================================

function MachineLearningAlgorithms({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] =
    useState(null);

  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-machinelearningalgorithms", subtopics);

  const [quizAnswers, setQuizAnswers] = useState({});

  const [quizSubmitted, setQuizSubmitted] =
    useState({});

  // =====================================================
  // STABLE QUIZ SHUFFLE
  // =====================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map(
        (question) => shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  // =====================================================
  // PROGRESS
  // =====================================================

  const completedCount =
    completed.length;

  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const currentIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const currentTopic =
    currentIndex >= 0
      ? subtopics[currentIndex]
      : null;

  // =====================================================
  // OPEN SUBTOPIC
  // =====================================================

  const openSubtopic = (topicId) => {
    setSelectedSubtopic(topicId);
  };

  // =====================================================
  // MARK COMPLETE
  // =====================================================

  const markComplete = (topicId) => {
    saveProgress(topicId);
  };

  // =====================================================
  // QUIZ ANSWER
  // =====================================================

  const selectAnswer = (
    topicId,
    questionIndex,
    answer
  ) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [topicId]: {
        ...(prev[topicId] || {}),
        [questionIndex]: answer,
      },
    }));
  };

  // =====================================================
  // SUBMIT QUIZ
  // =====================================================

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

  // =====================================================
  // QUIZ SCORE
  // =====================================================

  const getQuizScore = (topic) => {
    const answers = quizAnswers[topic.id] || {};

    return topic.lesson.quiz.reduce(
      (score, question, index) => {
        if (
          answers[index] === question.answer
        ) {
          return score + 1;
        }

        return score;
      },
      0
    );
  };

  // =====================================================
  // NEXT SUBTOPIC
  // =====================================================

  const goToNext = () => {
    if (
      currentIndex >= 0 &&
      currentIndex < subtopics.length - 1
    ) {
      setSelectedSubtopic(
        subtopics[currentIndex + 1].id
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // =====================================================
  // PREVIOUS SUBTOPIC
  // =====================================================

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedSubtopic(
        subtopics[currentIndex - 1].id
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // =====================================================
  // LESSON PAGE
  // =====================================================

  if (currentTopic) {
    const topicProgress = completed.includes(currentTopic.id)
      ? 100
      : 0;

    const answers =
      quizAnswers[currentTopic.id] || {};

    const submitted =
      quizSubmitted[currentTopic.id] || false;

    const score = getQuizScore(currentTopic);

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
          padding: "30px 20px 60px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* BACK BUTTON */}

          <button
            onClick={() => setSelectedSubtopic(null)}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "25px",
            }}
          >
            ← Back to Topics
          </button>

          {/* TITLE */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #bfdbfe",
              boxShadow:
                "0 4px 15px rgba(37, 99, 235, 0.08)",
              marginBottom: "22px",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                color: "#2563eb",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Lesson {currentIndex + 1} of{" "}
              {subtopics.length}
            </p>

            <h1
              style={{
                margin: "0 0 12px",
                fontSize: "30px",
                color: "#111827",
              }}
            >
              {currentTopic.icon}{" "}
              {currentTopic.title}
            </h1>

            <p
              style={{
                margin: "0 0 16px",
                color: "#6b7280",
                fontSize: "15px",
              }}
            >
              Progress: {topicProgress}%
            </p>

            <div
              style={{
                width: "100%",
                height: "12px",
                background: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${topicProgress}%`,
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "10px",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>

          {/* OVERVIEW */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #dbeafe",
              marginBottom: "22px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#111827",
              }}
            >
              📖 Overview
            </h2>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {currentTopic.lesson.overview}
            </p>
          </div>

          {/* LESSON SECTIONS */}

          {currentTopic.lesson.sections.map(
            (section, index) => (
              <div
                key={section.heading}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "30px",
                  border: "1px solid #dbeafe",
                  marginBottom: "22px",
                }}
              >
                <h2
                  style={{
                    marginTop: 0,
                    color: "#111827",
                  }}
                >
                  {index + 1}.{" "}
                  {section.heading}
                </h2>

                <ul
                  style={{
                    paddingLeft: "22px",
                    marginBottom: 0,
                  }}
                >
                  {section.points.map((point) => (
                    <li
                      key={point}
                      style={{
                        color: "#4b5563",
                        lineHeight: "1.8",
                        marginBottom: "10px",
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          {/* COMMON MISTAKES */}

          <div
            style={{
              background: "#fff7ed",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #fed7aa",
              marginBottom: "22px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#9a3412",
              }}
            >
              ⚠️ Common Mistakes
            </h2>

            <ul
              style={{
                paddingLeft: "22px",
                marginBottom: 0,
              }}
            >
              {currentTopic.lesson.mistakes.map(
                (mistake) => (
                  <li
                    key={mistake}
                    style={{
                      color: "#7c2d12",
                      lineHeight: "1.8",
                      marginBottom: "10px",
                    }}
                  >
                    {mistake}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* QUIZ */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #bfdbfe",
              marginBottom: "22px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#111827",
              }}
            >
              🧠 Quick Quiz
            </h2>

            <p
              style={{
                color: "#6b7280",
                marginBottom: "25px",
              }}
            >
              Answer all 3 questions and check
              your score.
            </p>

            {currentTopic.lesson.quiz.map(
              (question, questionIndex) => {
                const options =
                  shuffledQuizOptions[
                    currentTopic.id
                  ][questionIndex];

                const selectedAnswer =
                  answers[questionIndex];

                return (
                  <div
                    key={question.question}
                    style={{
                      marginBottom: "30px",
                      paddingBottom: "25px",
                      borderBottom:
                        questionIndex <
                        currentTopic.lesson.quiz
                          .length -
                          1
                          ? "1px solid #e5e7eb"
                          : "none",
                    }}
                  >
                    <h3
                      style={{
                        color: "#111827",
                        lineHeight: "1.5",
                        marginBottom: "15px",
                      }}
                    >
                      {questionIndex + 1}.{" "}
                      {question.question}
                    </h3>

                    {options.map((option) => {
                      const isSelected =
                        selectedAnswer ===
                        option;

                      const isCorrect =
                        option ===
                        question.answer;

                      let background = "white";
                      let border =
                        "1px solid #d1d5db";

                      if (
                        submitted &&
                        isCorrect
                      ) {
                        background = "#dcfce7";
                        border =
                          "1px solid #16a34a";
                      } else if (
                        submitted &&
                        isSelected &&
                        !isCorrect
                      ) {
                        background = "#fee2e2";
                        border =
                          "1px solid #dc2626";
                      } else if (isSelected) {
                        background = "#eff6ff";
                        border =
                          "1px solid #2563eb";
                      }

                      return (
                        <button
                          key={option}
                          onClick={() =>
                            !submitted &&
                            selectAnswer(
                              currentTopic.id,
                              questionIndex,
                              option
                            )
                          }
                          disabled={submitted}
                          style={{
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            background,
                            border,
                            borderRadius: "10px",
                            padding: "13px 15px",
                            marginBottom: "10px",
                            cursor: submitted
                              ? "default"
                              : "pointer",
                            fontSize: "15px",
                            color: "#111827",
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

            {!submitted ? (
              <button
                onClick={() =>
                  submitQuiz(currentTopic.id)
                }
                disabled={
                  Object.keys(answers).length !==
                  currentTopic.lesson.quiz.length
                }
                style={{
                  background:
                    Object.keys(answers).length ===
                    currentTopic.lesson.quiz.length
                      ? "#2563eb"
                      : "#9ca3af",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 22px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor:
                    Object.keys(answers).length ===
                    currentTopic.lesson.quiz.length
                      ? "pointer"
                      : "not-allowed",
                }}
              >
                Check Quiz
              </button>
            ) : (
              <div
                style={{
                  background:
                    score ===
                    currentTopic.lesson.quiz.length
                      ? "#dcfce7"
                      : "#eff6ff",
                  borderRadius: "12px",
                  padding: "18px",
                  color: "#111827",
                  fontWeight: "600",
                }}
              >
                🎯 Your Score: {score} /{" "}
                {currentTopic.lesson.quiz.length}
              </div>
            )}
          </div>

          {/* COMPLETE LESSON */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px 30px",
              border: "1px solid #dbeafe",
              marginBottom: "22px",
              textAlign: "center",
            }}
          >
            <button
              onClick={() =>
                saveProgress(currentTopic.id)
              }
              disabled={completed.includes(currentTopic.id)}
              style={{
                background: completed.includes(
                  currentTopic.id
                )
                  ? "#16a34a"
                  : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "9px",
                padding: "13px 24px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: completed.includes(
                  currentTopic.id
                )
                  ? "default"
                  : "pointer",
              }}
            >
              {completed.includes(currentTopic.id)
                ? "✅ Lesson Completed"
                : "✓ Mark Lesson Complete"}
            </button>
          </div>

          {/* NAVIGATION */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              style={{
                background:
                  currentIndex === 0
                    ? "#d1d5db"
                    : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "9px",
                padding: "12px 20px",
                fontSize: "15px",
                fontWeight: "600",
                cursor:
                  currentIndex === 0
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={() =>
                setSelectedSubtopic(null)
              }
              style={{
                background: "white",
                color: "#2563eb",
                border:
                  "1px solid #2563eb",
                borderRadius: "9px",
                padding: "12px 20px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Back to Topics
            </button>

            <button
              onClick={goToNext}
              disabled={
                currentIndex ===
                subtopics.length - 1
              }
              style={{
                background:
                  currentIndex ===
                  subtopics.length - 1
                    ? "#d1d5db"
                    : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "9px",
                padding: "12px 20px",
                fontSize: "15px",
                fontWeight: "600",
                cursor:
                  currentIndex ===
                  subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Next Lesson →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // TOPIC LIST PAGE
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
        padding: "30px 20px 60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        {/* BACK */}

        <button
          onClick={goBack}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Back
        </button>

        {/* HEADER */}

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          🤖 Machine Learning Algorithms
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Learn the major supervised and unsupervised
          machine learning algorithms used to build
          predictive models and discover patterns in
          data.
        </p>

        {/* OVERALL PROGRESS */}

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px 22px",
            marginBottom: "28px",
            boxShadow:
              "0 4px 15px rgba(0, 0, 0, 0.06)",
            border: "1px solid #dbeafe",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "21px",
              color: "#111827",
            }}
          >
            Overall Progress: {overallProgress}% 🎯
          </h2>

          <div
            style={{
              width: "100%",
              height: "13px",
              background: "#e5e7eb",
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

          <p
            style={{
              margin: "12px 0 0",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            {completedCount} of {subtopics.length}{" "}
            lessons completed
          </p>
        </div>

        {/* SUBTOPIC CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {subtopics.map((topic, index) => {
            const progress = completed.includes(topic.id)
              ? 100
              : 0;

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "205px",
                  border: "1px solid #bfdbfe",
                  boxShadow:
                    "0 4px 12px rgba(37, 99, 235, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: "0 0 7px",
                      fontSize: "20px",
                      color: "#111827",
                      lineHeight: "1.35",
                    }}
                  >
                    {index + 1}. {topic.icon}{" "}
                    {topic.title}
                  </h2>

                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: "15px",
                      color: "#6b7280",
                    }}
                  >
                    1 lesson
                  </p>

                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: "16px",
                      color: "#111827",
                    }}
                  >
                    Progress: {progress}%
                  </p>

                  <div
                    style={{
                      width: "100%",
                      height: "13px",
                      background: "#e5e7eb",
                      borderRadius: "10px",
                      overflow: "hidden",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "#2563eb",
                        borderRadius: "10px",
                        transition:
                          "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() =>
                    openSubtopic(topic.id)
                  }
                  style={{
                    alignSelf: "flex-start",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "9px",
                    padding: "11px 20px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {completed.includes(topic.id)
                    ? "Review Lesson →"
                    : "Open Lesson →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MachineLearningAlgorithms;