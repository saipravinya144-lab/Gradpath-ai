import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// AWS / CLOUD PLATFORM — 9 LESSONS
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "AWS Fundamentals",
    icon: "☁️",
    lesson: {
      explanation:
        "Amazon Web Services (AWS) is a cloud computing platform that provides infrastructure and managed services over the Internet. Instead of maintaining all physical infrastructure yourself, you can provision computing, storage, networking, databases, security, and other resources through AWS.",
      points: [
        "AWS provides on-demand cloud services.",
        "AWS services can be provisioned through the console, CLI, SDKs, and APIs.",
        "Cloud resources can be scaled according to application requirements.",
        "AWS follows a pay-as-you-go pricing model for many services.",
        "AWS provides services across computing, storage, databases, networking, security, and more.",
      ],
      example:
        "A developer can create a virtual server in AWS instead of purchasing and maintaining a physical server.",
      commonMistakes: [
        "Thinking AWS is only a virtual machine provider.",
        "Assuming every AWS service is free.",
        "Confusing AWS with a single product rather than a collection of cloud services.",
      ],
      quiz: [
        {
          question: "What is AWS?",
          options: [
            "A cloud computing platform",
            "A programming language",
            "A database only",
            "A desktop operating system",
          ],
          answer: "A cloud computing platform",
        },
        {
          question:
            "Which is a common way to interact with AWS services?",
          options: [
            "AWS Management Console",
            "Only physical cables",
            "BIOS settings",
            "A text editor only",
          ],
          answer: "AWS Management Console",
        },
        {
          question: "What does AWS provide?",
          options: [
            "Cloud computing services",
            "Only computer monitors",
            "Only programming courses",
            "Only antivirus software",
          ],
          answer: "Cloud computing services",
        },
      ],
    },
  },

  {
    id: 2,
    title: "AWS Global Infrastructure",
    icon: "🌍",
    lesson: {
      explanation:
        "AWS organizes its infrastructure into geographical Regions and Availability Zones. Regions are separate geographic areas, while Availability Zones are isolated locations within a Region designed to provide resilient infrastructure.",
      points: [
        "An AWS Region is a separate geographical area.",
        "A Region contains multiple Availability Zones.",
        "Availability Zones are designed to be isolated from failures in other zones.",
        "Applications can be distributed across Availability Zones for higher availability.",
        "AWS also operates edge locations for services such as content delivery.",
      ],
      example:
        "An application can run servers in multiple Availability Zones within the same Region so that a failure affecting one zone does not necessarily stop the entire application.",
      commonMistakes: [
        "Thinking a Region and Availability Zone are the same thing.",
        "Assuming Availability Zones are simply different folders in AWS.",
        "Ignoring geographical location when designing cloud infrastructure.",
      ],
      quiz: [
        {
          question: "What is an AWS Region?",
          options: [
            "A geographical area containing AWS infrastructure",
            "A single virtual machine",
            "A database table",
            "A network cable",
          ],
          answer:
            "A geographical area containing AWS infrastructure",
        },
        {
          question: "What is an Availability Zone?",
          options: [
            "An isolated infrastructure location within a Region",
            "A programming environment",
            "A database record",
            "A DNS domain",
          ],
          answer:
            "An isolated infrastructure location within a Region",
        },
        {
          question:
            "Why can applications use multiple Availability Zones?",
          options: [
            "To improve resilience and availability",
            "To remove all networking",
            "To eliminate databases",
            "To avoid using IP addresses",
          ],
          answer:
            "To improve resilience and availability",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Amazon EC2",
    icon: "🖥️",
    lesson: {
      explanation:
        "Amazon Elastic Compute Cloud (EC2) provides resizable virtual computing capacity in AWS. EC2 instances can be configured with different compute, memory, storage, and networking characteristics according to application requirements.",
      points: [
        "EC2 provides virtual servers called instances.",
        "Instances can be launched using machine images.",
        "Instance types provide different combinations of compute resources.",
        "Security groups control inbound and outbound network traffic for instances.",
        "EC2 instances can be started, stopped, restarted, and terminated.",
      ],
      example:
        "A developer can launch an EC2 instance running Linux and deploy a web application on it.",
      commonMistakes: [
        "Thinking EC2 is a physical server that you personally own.",
        "Confusing stopping an instance with terminating it.",
        "Ignoring security group configuration.",
      ],
      quiz: [
        {
          question: "What does EC2 provide?",
          options: [
            "Virtual computing capacity",
            "Only object storage",
            "Only DNS records",
            "Only email services",
          ],
          answer: "Virtual computing capacity",
        },
        {
          question: "What is an EC2 instance?",
          options: [
            "A virtual server",
            "A database table",
            "A DNS record",
            "A physical keyboard",
          ],
          answer: "A virtual server",
        },
        {
          question:
            "What controls network traffic for an EC2 instance?",
          options: [
            "Security groups",
            "HTML",
            "Git branches",
            "CSS",
          ],
          answer: "Security groups",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Amazon S3",
    icon: "🪣",
    lesson: {
      explanation:
        "Amazon Simple Storage Service (S3) is an object storage service. It is commonly used to store files, images, videos, backups, logs, datasets, and other objects.",
      points: [
        "S3 stores data as objects.",
        "Objects are stored inside buckets.",
        "S3 is designed for highly durable object storage.",
        "S3 can be used for backups and static website assets.",
        "S3 supports access controls and multiple storage classes.",
      ],
      example:
        "A web application can store uploaded profile images in an S3 bucket rather than storing those files directly on an application server.",
      commonMistakes: [
        "Thinking S3 is the same as an EC2 filesystem.",
        "Making buckets publicly accessible without understanding the security implications.",
        "Confusing a bucket with an individual object.",
      ],
      quiz: [
        {
          question: "What type of storage is Amazon S3?",
          options: [
            "Object storage",
            "CPU cache",
            "Virtual memory",
            "Processor storage",
          ],
          answer: "Object storage",
        },
        {
          question: "Where are S3 objects stored?",
          options: [
            "Buckets",
            "EC2 CPUs",
            "DNS zones",
            "Security groups",
          ],
          answer: "Buckets",
        },
        {
          question: "Which could be stored in S3?",
          options: [
            "Images and backups",
            "Only CPU instructions",
            "Only passwords",
            "Only network cables",
          ],
          answer: "Images and backups",
        },
      ],
    },
  },

  {
    id: 5,
    title: "AWS IAM",
    icon: "🔐",
    lesson: {
      explanation:
        "AWS Identity and Access Management (IAM) controls access to AWS resources. IAM can be used to manage users, groups, roles, and policies that define what actions are allowed or denied.",
      points: [
        "IAM manages authentication and authorization for AWS resources.",
        "Policies define permissions.",
        "IAM users can represent individual identities.",
        "IAM roles provide permissions that can be assumed by trusted entities.",
        "Least privilege means granting only the permissions required.",
      ],
      example:
        "An application running on EC2 can use an IAM role to access a specific S3 bucket without storing long-term access keys inside the application code.",
      commonMistakes: [
        "Giving every user administrator-level permissions.",
        "Hard-coding access keys into source code.",
        "Confusing authentication with authorization.",
      ],
      quiz: [
        {
          question: "What is IAM used for?",
          options: [
            "Managing access to AWS resources",
            "Creating video files",
            "Compiling Java programs",
            "Designing websites",
          ],
          answer: "Managing access to AWS resources",
        },
        {
          question: "What defines permissions in IAM?",
          options: [
            "Policies",
            "HTML tags",
            "CSS rules",
            "Git commits",
          ],
          answer: "Policies",
        },
        {
          question: "What does least privilege mean?",
          options: [
            "Grant only the permissions that are required",
            "Give everyone administrator access",
            "Disable all security",
            "Use one password everywhere",
          ],
          answer:
            "Grant only the permissions that are required",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Amazon VPC",
    icon: "🔗",
    lesson: {
      explanation:
        "Amazon Virtual Private Cloud (VPC) lets you create a logically isolated virtual network for AWS resources. A VPC can contain subnets, route tables, gateways, and security controls.",
      points: [
        "A VPC provides a virtual network environment.",
        "Subnets divide a VPC IP address range.",
        "Route tables control how network traffic is routed.",
        "Internet gateways can provide connectivity between a VPC and the Internet.",
        "Security groups and network ACLs help control network traffic.",
      ],
      example:
        "A three-tier application can place public-facing components in public subnets and databases in private subnets.",
      commonMistakes: [
        "Thinking a VPC is automatically the same as a physical LAN.",
        "Putting every application component in a public subnet.",
        "Ignoring route tables when troubleshooting connectivity.",
      ],
      quiz: [
        {
          question: "What does Amazon VPC provide?",
          options: [
            "A logically isolated virtual network",
            "A programming language",
            "A physical laptop",
            "A database editor",
          ],
          answer:
            "A logically isolated virtual network",
        },
        {
          question:
            "What divides a VPC address range into smaller networks?",
          options: [
            "Subnets",
            "Buckets",
            "IAM users",
            "EC2 images",
          ],
          answer: "Subnets",
        },
        {
          question: "What controls routing decisions in a VPC?",
          options: [
            "Route tables",
            "S3 buckets",
            "IAM users",
            "Machine images",
          ],
          answer: "Route tables",
        },
      ],
    },
  },

  {
    id: 7,
    title: "AWS Databases",
    icon: "🗄️",
    lesson: {
      explanation:
        "AWS provides managed database services for different types of workloads. Amazon RDS supports managed relational databases, while DynamoDB provides a managed NoSQL database service.",
      points: [
        "Amazon RDS is a managed relational database service.",
        "RDS supports several relational database engines.",
        "DynamoDB is a managed NoSQL database service.",
        "Managed database services reduce infrastructure administration work.",
        "Database selection depends on application requirements and data models.",
      ],
      example:
        "An application requiring relational tables and SQL queries could use Amazon RDS, while an application needing a managed key-value or document database could use DynamoDB.",
      commonMistakes: [
        "Thinking RDS is itself a single database engine.",
        "Assuming NoSQL databases work exactly like relational databases.",
        "Choosing a database without considering workload requirements.",
      ],
      quiz: [
        {
          question: "What is Amazon RDS?",
          options: [
            "A managed relational database service",
            "An object storage service",
            "A DNS service",
            "A virtual network",
          ],
          answer:
            "A managed relational database service",
        },
        {
          question:
            "Which AWS service is a managed NoSQL database?",
          options: [
            "DynamoDB",
            "S3",
            "EC2",
            "VPC",
          ],
          answer: "DynamoDB",
        },
        {
          question:
            "What is a benefit of managed database services?",
          options: [
            "Reduced infrastructure administration",
            "No need for data",
            "No networking required",
            "Automatic replacement of application code",
          ],
          answer:
            "Reduced infrastructure administration",
        },
      ],
    },
  },

  {
    id: 8,
    title: "AWS Lambda & Serverless",
    icon: "⚡",
    lesson: {
      explanation:
        "AWS Lambda is a serverless compute service that runs code in response to events without requiring the developer to manage servers directly. Serverless architectures can combine Lambda with services such as API Gateway, S3, and DynamoDB.",
      points: [
        "Lambda runs code in response to events.",
        "Developers do not manage the underlying servers directly.",
        "Lambda functions can be triggered by many AWS services.",
        "Serverless architectures can scale automatically according to workload.",
        "Lambda is commonly used for event-driven applications and APIs.",
      ],
      example:
        "A file uploaded to an S3 bucket can trigger a Lambda function that processes the uploaded file.",
      commonMistakes: [
        "Thinking serverless means there are no servers.",
        "Assuming Lambda functions run indefinitely.",
        "Using Lambda for workloads without considering execution and architecture constraints.",
      ],
      quiz: [
        {
          question: "What is AWS Lambda?",
          options: [
            "A serverless compute service",
            "An object storage service",
            "A physical server",
            "A relational database",
          ],
          answer: "A serverless compute service",
        },
        {
          question: "What can trigger a Lambda function?",
          options: [
            "Events",
            "Only manual server reboots",
            "Only database tables",
            "Only browser refreshes",
          ],
          answer: "Events",
        },
        {
          question:
            "What does serverless mean in this context?",
          options: [
            "The provider manages the underlying servers",
            "No servers exist anywhere",
            "The application cannot use a network",
            "The application has no backend",
          ],
          answer:
            "The provider manages the underlying servers",
        },
      ],
    },
  },

  {
    id: 9,
    title: "AWS Monitoring, Scaling & Cost Management",
    icon: "📊",
    lesson: {
      explanation:
        "Cloud applications need monitoring, scaling, and cost management. AWS provides services and features that help developers observe workloads, adjust capacity, and understand resource usage.",
      points: [
        "Amazon CloudWatch can collect metrics, logs, and monitoring information.",
        "Auto Scaling can adjust compute capacity according to demand.",
        "Load balancing can distribute traffic across application resources.",
        "AWS billing tools help users understand and manage cloud costs.",
        "Monitoring helps identify performance and operational problems.",
      ],
      example:
        "An application can use CloudWatch metrics together with Auto Scaling so that additional compute capacity is launched when demand increases.",
      commonMistakes: [
        "Waiting until an application fails before setting up monitoring.",
        "Ignoring cloud resource costs.",
        "Assuming scaling automatically solves every performance problem.",
      ],
      quiz: [
        {
          question:
            "Which AWS service is commonly used for monitoring metrics and logs?",
          options: [
            "Amazon CloudWatch",
            "Amazon S3",
            "Amazon Route 53",
            "Amazon DynamoDB",
          ],
          answer: "Amazon CloudWatch",
        },
        {
          question: "What can Auto Scaling do?",
          options: [
            "Adjust compute capacity according to demand",
            "Create programming languages",
            "Replace DNS",
            "Delete all databases",
          ],
          answer:
            "Adjust compute capacity according to demand",
        },
        {
          question: "Why is cloud cost management important?",
          options: [
            "Cloud resources can generate usage-based costs",
            "Cloud services are always free",
            "Costs never change",
            "Only physical servers have costs",
          ],
          answer:
            "Cloud resources can generate usage-based costs",
        },
      ],
    },
  },
];

// =====================================================
// SHUFFLE QUIZ OPTIONS
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
// AWS / CLOUD PLATFORM COMPONENT
// =====================================================

const AWSCloudPlatform = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-aws-cloud-platform", subtopics);

  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] =
    useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // =====================================================
  // STABLE SHUFFLED QUIZ OPTIONS
  // =====================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map(
        (question) =>
          shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  // =====================================================
  // PROGRESS
  // =====================================================

  const markLessonComplete = (lessonId) => {
    if (!lessonId) return;
    saveProgress(lessonId);
  };

  const completedCount = completedLessons.length;

  const overallProgress =
    subtopics.length === 0
      ? 0
      : Math.round(
          (completedCount / subtopics.length) * 100
        );

  const lessonProgress =
    selectedTopic &&
    completedLessons.includes(selectedTopic.id)
      ? 100
      : 0;

  // =====================================================
  // OPEN LESSON
  // =====================================================

  const openLesson = (topic, index) => {
    setSelectedTopic(topic);
    setCurrentLesson(index);

    setQuizIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // CLOSE TOPIC
  // =====================================================

  const closeTopic = () => {
    setSelectedTopic(null);
    setCurrentLesson(0);

    setQuizIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // NEXT LESSON
  // QUIZ IS NOT REQUIRED
  // =====================================================

  const nextLesson = () => {
    if (!selectedTopic) {
      return;
    }

    // Mark current lesson complete
    markLessonComplete(selectedTopic.id);

    // If another lesson exists
    if (currentLesson < subtopics.length - 1) {
      const nextIndex = currentLesson + 1;

      // IMPORTANT:
      // Update the actual lesson object
      setSelectedTopic(subtopics[nextIndex]);

      setCurrentLesson(nextIndex);

      // Reset quiz
      setQuizIndex(0);
      setSelectedAnswer("");
      setSubmitted(false);
    setScore(0);

      return;
    }

    // Last lesson
    closeTopic();
  };

  // =====================================================
  // PREVIOUS LESSON
  // =====================================================

  const previousLesson = () => {
    if (currentLesson === 0) {
      return;
    }

    const previousIndex = currentLesson - 1;

    // IMPORTANT:
    // Update the actual lesson object
    setSelectedTopic(subtopics[previousIndex]);

    setCurrentLesson(previousIndex);

    // Reset quiz
    setQuizIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // QUIZ
  // =====================================================

  const currentQuestion =
    selectedTopic?.lesson.quiz[quizIndex];

  const currentOptions = selectedTopic
    ? shuffledQuizOptions[selectedTopic.id][quizIndex]
    : [];

  const submitAnswer = () => {
    if (!selectedAnswer) {
      return;
    }
    setSubmitted(true);
  };

  const nextQuestion = async () => {
    if (!selectedTopic || !submitted) {
      return;
    }

    const quiz = selectedTopic.lesson.quiz;
    const currentQuestion = quiz[quizIndex];
    const updatedScore = score + (selectedAnswer === currentQuestion.answer ? 1 : 0);

    if (quizIndex < quiz.length - 1) {
      setScore(updatedScore);
      setQuizIndex((previous) => previous + 1);
      setSelectedAnswer("");
      setSubmitted(false);
      return;
    }

    await saveQuizResult({
      subject: "Cloud/DevOps",
      role: "Cloud/DevOps Engineer",
      topic: selectedTopic.title,
      topicId: selectedTopic.id,
      score: updatedScore,
      totalQuestions: quiz.length
    });

    if (!completedLessons.includes(selectedTopic.id)) {
      saveProgress(selectedTopic.id);
    }

    setScore(0);
    setQuizIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  // =====================================================
  // LESSON VIEW
  // =====================================================

  if (selectedTopic) {
    const lesson = selectedTopic.lesson;

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff, #ffffff)",
          padding: "40px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* BACK */}
          <button
            onClick={closeTopic}
            style={{
              padding: "10px 18px",
              borderRadius: "8px",
              border: "1px solid #bfdbfe",
              background: "#ffffff",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            ← Back to AWS / Cloud Platform
          </button>

          {/* LESSON HEADER */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "22px",
              boxShadow:
                "0 4px 18px rgba(0,0,0,0.08)",
              border: "1px solid #dbeafe",
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              LESSON {currentLesson + 1} OF{" "}
              {subtopics.length}
            </div>

            <h1
              style={{
                margin: "0 0 10px",
                color: "#1d4ed8",
              }}
            >
              {selectedTopic.icon}{" "}
              {selectedTopic.title}
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#64748b",
              }}
            >
              <span>Lesson Progress</span>
              <span>{lessonProgress}%</span>
            </div>

            <div
              style={{
                height: "8px",
                background: "#e5e7eb",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${lessonProgress}%`,
                  height: "100%",
                  background: "#2563eb",
                }}
              />
            </div>
          </div>

          {/* EXPLANATION */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "30px",
              marginBottom: "22px",
              boxShadow:
                "0 4px 18px rgba(0,0,0,0.08)",
              border: "1px solid #dbeafe",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                marginTop: 0,
              }}
            >
              📖 Explanation
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {lesson.explanation}
            </p>

            <h3
              style={{
                color: "#1e3a8a",
                marginTop: "25px",
              }}
            >
              🔑 Key Points
            </h3>

            <ul
              style={{
                color: "#475569",
                lineHeight: "1.8",
              }}
            >
              {lesson.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <h3
              style={{
                color: "#1e3a8a",
                marginTop: "25px",
              }}
            >
              💡 Example
            </h3>

            <div
              style={{
                background: "#eff6ff",
                borderLeft:
                  "4px solid #2563eb",
                padding: "15px 18px",
                borderRadius: "8px",
                color: "#334155",
                lineHeight: "1.7",
              }}
            >
              {lesson.example}
            </div>
          </div>

          {/* COMMON MISTAKES */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "30px",
              marginBottom: "22px",
              boxShadow:
                "0 4px 18px rgba(0,0,0,0.08)",
              border: "1px solid #dbeafe",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                marginTop: 0,
              }}
            >
              ⚠️ Common Mistakes
            </h2>

            <ul
              style={{
                color: "#475569",
                lineHeight: "1.8",
              }}
            >
              {lesson.commonMistakes.map(
                (mistake) => (
                  <li key={mistake}>{mistake}</li>
                )
              )}
            </ul>
          </div>

          {/* QUIZ */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "30px",
              marginBottom: "25px",
              boxShadow:
                "0 4px 18px rgba(0,0,0,0.08)",
              border: "1px solid #dbeafe",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                marginTop: 0,
              }}
            >
              🧠 Quick Quiz
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Question {quizIndex + 1} of{" "}
              {lesson.quiz.length}
            </p>

            <h3
              style={{
                color: "#334155",
                lineHeight: "1.5",
              }}
            >
              {currentQuestion.question}
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {currentOptions.map((option) => {
                const isSelected =
                  selectedAnswer === option;

                const isCorrect =
                  submitted &&
                  option ===
                    currentQuestion.answer;

                const isWrong =
                  submitted &&
                  isSelected &&
                  option !==
                    currentQuestion.answer;

                return (
                  <button
                    key={option}
                    onClick={() => {
                      if (!submitted) {
                        setSelectedAnswer(
                          option
                        );
                      }
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "14px 16px",
                      borderRadius: "9px",
                      border: isCorrect
                        ? "2px solid #16a34a"
                        : isWrong
                        ? "2px solid #dc2626"
                        : isSelected
                        ? "2px solid #2563eb"
                        : "1px solid #cbd5e1",
                      background: isCorrect
                        ? "#dcfce7"
                        : isWrong
                        ? "#fee2e2"
                        : isSelected
                        ? "#eff6ff"
                        : "#ffffff",
                      color: "#334155",
                      cursor: submitted
                        ? "default"
                        : "pointer",
                      fontSize: "15px",
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* SUBMIT */}
            {!submitted && (
              <button
                onClick={submitAnswer}
                disabled={!selectedAnswer}
                style={{
                  marginTop: "20px",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "none",
                  background: selectedAnswer
                    ? "#2563eb"
                    : "#94a3b8",
                  color: "#ffffff",
                  cursor: selectedAnswer
                    ? "pointer"
                    : "not-allowed",
                  fontWeight: "600",
                }}
              >
                Submit Answer
              </button>
            )}

            {/* FEEDBACK */}
            {submitted && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  borderRadius: "9px",
                  background:
                    selectedAnswer ===
                    currentQuestion.answer
                      ? "#dcfce7"
                      : "#fee2e2",
                  border:
                    selectedAnswer ===
                    currentQuestion.answer
                      ? "1px solid #86efac"
                      : "1px solid #fca5a5",
                  color:
                    selectedAnswer ===
                    currentQuestion.answer
                      ? "#166534"
                      : "#991b1b",
                  lineHeight: "1.6",
                }}
              >
                {selectedAnswer ===
                currentQuestion.answer ? (
                  <strong>
                    ✅ Correct answer!
                  </strong>
                ) : (
                  <>
                    <strong>
                      ❌ Incorrect answer.
                    </strong>
                    <br />
                    Correct answer:{" "}
                    <strong>
                      {currentQuestion.answer}
                    </strong>
                  </>
                )}
              </div>
            )}

            {/* NEXT QUESTION */}
            {submitted && (
              <button
                onClick={nextQuestion}
                style={{
                  marginTop: "15px",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2563eb",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                {quizIndex <
                lesson.quiz.length - 1
                  ? "Next Question →"
                  : "Restart Quiz ↻"}
              </button>
            )}
          </div>

          {/* PREVIOUS / NEXT LESSON */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <button
              onClick={previousLesson}
              disabled={currentLesson === 0}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border:
                  "1px solid #bfdbfe",
                background:
                  currentLesson === 0
                    ? "#e2e8f0"
                    : "#ffffff",
                color:
                  currentLesson === 0
                    ? "#94a3b8"
                    : "#2563eb",
                cursor:
                  currentLesson === 0
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={nextLesson}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#2563eb",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {currentLesson <
              subtopics.length - 1
                ? "Next Lesson →"
                : "Finish Topic ✓"}
            </button>
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "13px",
            }}
          >
            You can move to the next lesson without
            completing the quiz.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // LESSON LIST
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
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
            padding: "10px 18px",
            borderRadius: "8px",
            border: "1px solid #bfdbfe",
            background: "#ffffff",
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "600",
            marginBottom: "25px",
          }}
        >
          ← Back to Cloud / DevOps Roadmap
        </button>

        {/* HEADER */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              color: "#1d4ed8",
            }}
          >
            ☁️ AWS / Cloud Platform
          </h1>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Learn the core AWS services and cloud
            concepts required for Cloud and DevOps
            engineering.
          </p>
        </div>

        {/* OVERALL PROGRESS */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "25px",
            marginBottom: "30px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            <span>Overall Progress</span>
            <span>{overallProgress}%</span>
          </div>

          <div
            style={{
              height: "10px",
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
              }}
            />
          </div>

          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            {completedCount} of{" "}
            {subtopics.length} lessons completed
          </p>
        </div>

        {/* LESSON CARDS */}
        <h2
          style={{
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          📚 AWS / Cloud Platform Lessons
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {subtopics.map((topic, index) => {
            const completed =
              completedLessons.includes(
                topic.id
              );

            return (
              <div
                key={topic.id}
                style={{
                  background: "#ffffff",
                  border:
                    "1px solid #bfdbfe",
                  borderRadius: "14px",
                  padding: "22px",
                  boxShadow:
                    "0 3px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  LESSON {index + 1}
                </div>

                <h3
                  style={{
                    color: "#1e3a8a",
                    margin: "0 0 12px",
                    fontSize: "19px",
                  }}
                >
                  {topic.icon} {topic.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    marginBottom: "15px",
                  }}
                >
                  AWS and cloud platform lesson
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    marginBottom: "7px",
                    fontSize: "13px",
                    color: "#64748b",
                  }}
                >
                  <span>Progress</span>
                  <span>
                    {completed
                      ? "100%"
                      : "0%"}
                  </span>
                </div>

                <div
                  style={{
                    height: "7px",
                    background: "#e5e7eb",
                    borderRadius: "7px",
                    overflow: "hidden",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: completed
                        ? "100%"
                        : "0%",
                      height: "100%",
                      background: "#60a5fa",
                    }}
                  />
                </div>

                <button
                  onClick={() =>
                    openLesson(
                      topic,
                      index
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "11px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {completed
                    ? "Review Lesson →"
                    : "Open Lesson →"}
                </button>
              </div>
            );
          })}
        </div>

        {/* BOTTOM BACK */}
        <div
          style={{
            marginTop: "35px",
            textAlign: "center",
          }}
        >
          <button
            onClick={goBack}
            style={{
              padding: "11px 22px",
              borderRadius: "8px",
              border:
                "1px solid #bfdbfe",
              background: "#ffffff",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            ← Back to Cloud / DevOps
          </button>
        </div>
      </div>
    </div>
  );
};

export default AWSCloudPlatform;