import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// SHUFFLE QUIZ OPTIONS
// =====================================================

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

// =====================================================
// CLOUD COMPUTING FUNDAMENTALS
// =====================================================

const subtopics = [
  {
    id: "what-is-cloud-computing",
    title: "What is Cloud Computing?",
    lesson: {
      description:
        "Cloud computing is the delivery of computing resources such as servers, storage, databases, networking, and software over the internet. Instead of purchasing and maintaining physical infrastructure, organizations can access computing resources when they need them.",

      points: [
        "Cloud computing provides computing resources over the internet.",
        "Users can access resources without owning the underlying physical infrastructure.",
        "Cloud resources can be provisioned and released according to demand.",
        "Common cloud resources include computing power, storage, databases, and networking.",
        "Cloud computing supports scalable and flexible application deployment.",
      ],

      example:
        "For example, instead of purchasing a physical server for an application, a company can rent a virtual server from a cloud provider and use it whenever required.",

      mistakes: [
        "Thinking that cloud computing means storing only files online.",
        "Assuming that cloud resources are always completely free.",
        "Confusing cloud computing with a specific cloud provider.",
      ],

      quiz: [
        {
          question: "What is cloud computing primarily used for?",
          options: [
            "Delivering computing resources over the internet",
            "Only creating mobile applications",
            "Only storing photographs",
            "Replacing all computer hardware",
          ],
          answer: "Delivering computing resources over the internet",
        },
        {
          question:
            "Which of the following can be provided through cloud computing?",
          options: [
            "Servers and storage",
            "Only keyboards",
            "Only monitors",
            "Only printers",
          ],
          answer: "Servers and storage",
        },
        {
          question:
            "What is one important characteristic of cloud computing?",
          options: [
            "Resources can be provisioned according to demand",
            "Resources can never be changed",
            "Users must always own physical servers",
            "Applications must run without networks",
          ],
          answer: "Resources can be provisioned according to demand",
        },
      ],
    },
  },

  {
    id: "cloud-service-models",
    title: "Cloud Service Models — IaaS, PaaS, SaaS",
    lesson: {
      description:
        "Cloud service models describe different levels of responsibility between the cloud provider and the customer. The three commonly discussed models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",

      points: [
        "IaaS provides fundamental computing infrastructure such as virtual machines, storage, and networking.",
        "PaaS provides a platform for developers to build and deploy applications.",
        "SaaS provides ready-to-use software applications through the internet.",
        "As you move from IaaS toward SaaS, the cloud provider manages more of the underlying infrastructure.",
        "Choosing a service model depends on the level of control and management required.",
      ],

      example:
        "A developer who wants control over virtual machines may choose IaaS. A development team that wants to focus mainly on application code may choose PaaS. An end user using an online email application is using a SaaS-style service.",

      mistakes: [
        "Thinking IaaS, PaaS, and SaaS are different cloud providers.",
        "Assuming SaaS requires users to manage servers.",
        "Confusing PaaS with a complete ready-to-use application.",
      ],

      quiz: [
        {
          question: "What does IaaS stand for?",
          options: [
            "Infrastructure as a Service",
            "Internet as a Software",
            "Infrastructure as a System",
            "Internet as a Service",
          ],
          answer: "Infrastructure as a Service",
        },
        {
          question: "Which model provides ready-to-use software?",
          options: [
            "SaaS",
            "IaaS",
            "PaaS",
            "LAN",
          ],
          answer: "SaaS",
        },
        {
          question: "Which cloud service model is focused on providing a platform for application development?",
          options: [
            "PaaS",
            "SaaS",
            "IaaS",
            "DNS",
          ],
          answer: "PaaS",
        },
      ],
    },
  },

  {
    id: "cloud-deployment-models",
    title: "Cloud Deployment Models — Public, Private, Hybrid",
    lesson: {
      description:
        "Cloud deployment models describe how cloud infrastructure is organized and made available. The major models include public cloud, private cloud, and hybrid cloud.",

      points: [
        "Public cloud infrastructure is provided by a cloud provider and shared among multiple customers.",
        "Private cloud infrastructure is dedicated to a particular organization.",
        "Hybrid cloud combines private infrastructure with public cloud resources.",
        "Deployment model selection depends on requirements such as control, scalability, security, and organizational needs.",
        "Different workloads can use different deployment approaches.",
      ],

      example:
        "An organization might keep sensitive workloads in its private environment while using public cloud resources for applications that need additional computing capacity.",

      mistakes: [
        "Assuming public cloud means that everyone can access your data.",
        "Thinking private cloud always means a server sitting in a personal room.",
        "Assuming hybrid cloud means using two public cloud providers only.",
      ],

      quiz: [
        {
          question: "What is a public cloud?",
          options: [
            "Cloud infrastructure provided by a provider for multiple customers",
            "A cloud used by exactly one employee",
            "A cloud that has no internet connection",
            "A physical computer at home",
          ],
          answer:
            "Cloud infrastructure provided by a provider for multiple customers",
        },
        {
          question: "What does a private cloud generally provide?",
          options: [
            "Infrastructure dedicated to an organization",
            "Free internet access",
            "Only public websites",
            "Only personal email",
          ],
          answer: "Infrastructure dedicated to an organization",
        },
        {
          question: "What does a hybrid cloud combine?",
          options: [
            "Private and public cloud environments",
            "Two desktop computers",
            "Only two private clouds",
            "A laptop and a printer",
          ],
          answer: "Private and public cloud environments",
        },
      ],
    },
  },

  {
    id: "regions-availability-zones",
    title: "Cloud Regions & Availability Zones",
    lesson: {
      description:
        "Cloud providers organize their infrastructure geographically. A region is a geographic area containing cloud infrastructure, while availability zones are isolated locations within a region that help improve application availability and resilience.",

      points: [
        "A cloud region represents a geographic location where cloud infrastructure is hosted.",
        "Availability zones are separate infrastructure locations within a region.",
        "Availability zones are designed to provide isolation from certain infrastructure failures.",
        "Applications can distribute resources across availability zones for greater resilience.",
        "Choosing an appropriate region can affect latency, compliance, and service availability.",
      ],

      example:
        "A web application can deploy servers across multiple availability zones within a region so that the application can continue operating if one zone experiences an infrastructure problem.",

      mistakes: [
        "Thinking a region and an availability zone are the same thing.",
        "Assuming every cloud service is available in every region.",
        "Ignoring latency when selecting a cloud region.",
      ],

      quiz: [
        {
          question: "What is a cloud region?",
          options: [
            "A geographic area containing cloud infrastructure",
            "A single virtual machine",
            "A type of database",
            "A programming language",
          ],
          answer: "A geographic area containing cloud infrastructure",
        },
        {
          question: "Where are availability zones located?",
          options: [
            "Within cloud regions",
            "Only on personal computers",
            "Inside databases",
            "Inside programming languages",
          ],
          answer: "Within cloud regions",
        },
        {
          question: "Why can applications use multiple availability zones?",
          options: [
            "To improve resilience and availability",
            "To remove the need for networking",
            "To eliminate all software bugs",
            "To replace application code",
          ],
          answer: "To improve resilience and availability",
        },
      ],
    },
  },

  {
    id: "virtualization-virtual-machines",
    title: "Virtualization & Virtual Machines",
    lesson: {
      description:
        "Virtualization allows physical computing resources to be divided into multiple virtual environments. A virtual machine (VM) is a software-based computer that runs its own operating system and applications using resources provided by a physical host.",

      points: [
        "Virtualization allows multiple virtual environments to run on physical hardware.",
        "A virtual machine behaves like a computer with its own operating system.",
        "A hypervisor is software or firmware that manages virtual machines.",
        "Virtual machines can improve hardware utilization.",
        "Cloud providers use virtualization as one of the technologies behind many computing services.",
      ],

      example:
        "One physical server can run several virtual machines, with each VM running its own operating system and applications.",

      mistakes: [
        "Thinking a virtual machine is physically separate hardware.",
        "Assuming virtualization automatically makes every application faster.",
        "Confusing a VM with a container.",
      ],

      quiz: [
        {
          question: "What does virtualization allow?",
          options: [
            "Multiple virtual environments to run on physical hardware",
            "Only one application to run on a computer",
            "Computers to work without hardware",
            "Networks to work without protocols",
          ],
          answer:
            "Multiple virtual environments to run on physical hardware",
        },
        {
          question: "What is a virtual machine?",
          options: [
            "A software-based computer environment",
            "A physical keyboard",
            "A network cable",
            "A database table",
          ],
          answer: "A software-based computer environment",
        },
        {
          question: "What manages virtual machines on a physical host?",
          options: [
            "A hypervisor",
            "A compiler",
            "A browser",
            "A text editor",
          ],
          answer: "A hypervisor",
        },
      ],
    },
  },

  {
    id: "cloud-storage-basics",
    title: "Cloud Storage Basics",
    lesson: {
      description:
        "Cloud storage allows data to be stored on infrastructure managed by a cloud provider and accessed through a network. Different storage technologies are designed for different workloads.",

      points: [
        "Cloud storage provides remotely managed storage resources.",
        "Object storage stores data as objects and is commonly used for files, media, backups, and large datasets.",
        "Block storage provides storage volumes that can be attached to computing instances.",
        "File storage provides shared file-system style access.",
        "Storage selection depends on application requirements and access patterns.",
      ],

      example:
        "A website can use object storage for images and videos while using block storage for data attached to a virtual machine.",

      mistakes: [
        "Assuming all cloud storage works in exactly the same way.",
        "Confusing object storage with a traditional file system.",
        "Ignoring data access patterns when choosing storage.",
      ],

      quiz: [
        {
          question: "What is cloud storage?",
          options: [
            "Storage resources provided through cloud infrastructure",
            "Only storage on a USB drive",
            "A programming language",
            "A computer monitor",
          ],
          answer: "Storage resources provided through cloud infrastructure",
        },
        {
          question: "Which storage type stores data as objects?",
          options: [
            "Object storage",
            "Block storage",
            "CPU storage",
            "Register storage",
          ],
          answer: "Object storage",
        },
        {
          question: "Which storage type provides storage volumes that can be attached to compute instances?",
          options: [
            "Block storage",
            "Object storage",
            "Browser storage",
            "Cache memory",
          ],
          answer: "Block storage",
        },
      ],
    },
  },

  {
    id: "benefits-challenges",
    title: "Cloud Computing Benefits & Challenges",
    lesson: {
      description:
        "Cloud computing can provide scalability, flexibility, and access to managed infrastructure. However, cloud environments also introduce challenges such as cost management, security responsibilities, dependency on network connectivity, and provider dependency.",

      points: [
        "Cloud resources can scale according to workload requirements.",
        "Organizations can avoid purchasing all physical infrastructure upfront.",
        "Cloud platforms can provide access to managed services.",
        "Cloud usage requires careful cost management.",
        "Security remains a shared responsibility between cloud providers and customers.",
        "Network connectivity can affect access to cloud resources.",
      ],

      example:
        "An application experiencing a sudden increase in traffic can use additional cloud resources instead of permanently maintaining enough physical servers for its maximum expected traffic.",

      mistakes: [
        "Assuming cloud computing automatically reduces every cost.",
        "Assuming the cloud provider handles every security responsibility.",
        "Ignoring network dependency.",
      ],

      quiz: [
        {
          question: "Which is a common benefit of cloud computing?",
          options: [
            "Scalability",
            "Guaranteed zero cost",
            "No security responsibilities",
            "No need for networks",
          ],
          answer: "Scalability",
        },
        {
          question: "Why is cloud cost management important?",
          options: [
            "Cloud resources can generate costs based on usage",
            "Cloud resources are always free",
            "Cloud platforms cannot track resources",
            "Cloud services never change",
          ],
          answer:
            "Cloud resources can generate costs based on usage",
        },
        {
          question: "Who is responsible for security in the cloud?",
          options: [
            "Both the provider and customer depending on the service",
            "Only the customer in every situation",
            "Only the provider in every situation",
            "Nobody",
          ],
          answer:
            "Both the provider and customer depending on the service",
        },
      ],
    },
  },

  {
    id: "cloud-architecture-fundamentals",
    title: "Cloud Architecture Fundamentals",
    lesson: {
      description:
        "Cloud architecture describes how cloud resources and services are organized to build reliable applications. A typical architecture can contain components such as users, networking, application servers, databases, storage, and monitoring services.",

      points: [
        "Cloud architecture defines how different cloud components work together.",
        "Applications commonly separate presentation, application logic, and data layers.",
        "Load balancing can distribute incoming traffic across application instances.",
        "Databases provide persistent data storage.",
        "Monitoring helps track application and infrastructure health.",
        "Good architecture considers availability, scalability, security, performance, and cost.",
      ],

      example:
        "A basic web application architecture may contain users, a load balancer, multiple application servers, a database, object storage, and monitoring services.",

      mistakes: [
        "Designing architecture without considering scalability.",
        "Putting every component into one server without considering availability.",
        "Ignoring monitoring and security during architecture design.",
      ],

      quiz: [
        {
          question: "What does cloud architecture describe?",
          options: [
            "How cloud resources and services are organized",
            "Only the design of a website logo",
            "Only the physical appearance of a server",
            "Only programming syntax",
          ],
          answer: "How cloud resources and services are organized",
        },
        {
          question: "What can a load balancer do?",
          options: [
            "Distribute incoming traffic across application instances",
            "Store passwords automatically",
            "Replace every database",
            "Write application code",
          ],
          answer:
            "Distribute incoming traffic across application instances",
        },
        {
          question:
            "Which of the following should be considered when designing cloud architecture?",
          options: [
            "Scalability, security, availability, performance, and cost",
            "Only the application logo",
            "Only the programming language",
            "Only the screen size",
          ],
          answer:
            "Scalability, security, availability, performance, and cost",
        },
      ],
    },
  },
];

// =====================================================
// COMPONENT
// =====================================================

const CloudComputingFundamentals = ({ goBack }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-cloud-computing-fundamentals", subtopics);

  // =====================================================
  // SHUFFLED QUIZ OPTIONS
  // =====================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const topic = subtopics[currentLesson];

  const quizQuestions = topic.lesson.quiz;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const question = quizQuestions[questionIndex];

  const options = shuffledQuizOptions[topic.id][questionIndex];

  // =====================================================
  // PROGRESS
  // =====================================================

  const progress = Math.round(
    (completedLessons.length / subtopics.length) * 100
  );

  // =====================================================
  // SUBMIT ANSWER
  // =====================================================

  const submitAnswer = () => {
    if (selectedAnswer === null) {
      return;
    }
    setSubmitted(true);
  };

  // =====================================================
  // NEXT QUESTION
  // =====================================================

  const nextQuestion = async () => {
    if (!submitted) {
      return;
    }

    const updatedScore = score + (selectedAnswer === question.answer ? 1 : 0);

    if (questionIndex < quizQuestions.length - 1) {
      setScore(updatedScore);
      setQuestionIndex((previous) => previous + 1);
      setSelectedAnswer(null);
      setSubmitted(false);
      return;
    }

    await saveQuizResult({
      subject: "Cloud/DevOps",
      role: "Cloud/DevOps Engineer",
      topic: topic.title,
      topicId: topic.id,
      score: updatedScore,
      totalQuestions: quizQuestions.length
    });

    if (!completedLessons.includes(topic.id)) {
      saveProgress(topic.id);
    }

    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // NEXT LESSON
  // =====================================================

  const nextLesson = () => {
    if (!completedLessons.includes(topic.id)) {
      saveProgress(topic.id);
    }

    if (currentLesson < subtopics.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setSubmitted(false);
      setScore(0);
    }
  };

  // =====================================================
  // PREVIOUS LESSON
  // =====================================================

  const previousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  };

  // =====================================================
  // BACK TO ROADMAP
  // =====================================================

  const handleBack = () => {
    goBack();
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
        }}
      >
        {/* BACK BUTTON */}

        <button
          onClick={handleBack}
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
            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              color: "#1d4ed8",
            }}
          >
            ☁️ Cloud Computing Fundamentals
          </h1>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Learn the fundamental concepts behind cloud
            computing, infrastructure, services, virtualization,
            storage, and cloud architecture.
          </p>
        </div>

        {/* PROGRESS */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "22px",
            marginBottom: "25px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            <span>Topic Progress</span>
            <span>{progress}%</span>
          </div>

          <div
            style={{
              height: "9px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "#2563eb",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <p
            style={{
              margin: "10px 0 0",
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            {completedLessons.length} of {subtopics.length} lessons
            completed
          </p>
        </div>

        {/* LESSON NAVIGATION */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "25px",
          }}
        >
          {subtopics.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentLesson(index);
                setQuestionIndex(0);
                setSelectedAnswer(null);
                setSubmitted(false);
              }}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border:
                  currentLesson === index
                    ? "1px solid #2563eb"
                    : "1px solid #bfdbfe",
                background:
                  currentLesson === index
                    ? "#2563eb"
                    : "#ffffff",
                color:
                  currentLesson === index
                    ? "#ffffff"
                    : "#2563eb",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {index + 1}
              {completedLessons.includes(item.id) ? " ✓" : ""}
            </button>
          ))}
        </div>

        {/* LESSON CARD */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "35px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <div
            style={{
              color: "#64748b",
              fontSize: "13px",
              fontWeight: "700",
              marginBottom: "8px",
            }}
          >
            LESSON {currentLesson + 1} OF {subtopics.length}
          </div>

          <h2
            style={{
              color: "#1e3a8a",
              marginTop: 0,
              marginBottom: "18px",
            }}
          >
            {topic.title}
          </h2>

          <p
            style={{
              color: "#334155",
              lineHeight: "1.7",
              fontSize: "16px",
            }}
          >
            {topic.lesson.description}
          </p>

          {/* KEY POINTS */}

          <h3
            style={{
              color: "#1d4ed8",
              marginTop: "30px",
            }}
          >
            📌 Key Points
          </h3>

          <ul
            style={{
              color: "#334155",
              lineHeight: "1.8",
              paddingLeft: "22px",
            }}
          >
            {topic.lesson.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* EXAMPLE */}

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "10px",
              padding: "18px",
              marginTop: "25px",
            }}
          >
            <h3
              style={{
                color: "#1d4ed8",
                marginTop: 0,
              }}
            >
              💡 Example
            </h3>

            <p
              style={{
                color: "#334155",
                lineHeight: "1.7",
                marginBottom: 0,
              }}
            >
              {topic.lesson.example}
            </p>
          </div>

          {/* COMMON MISTAKES */}

          <div
            style={{
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              borderRadius: "10px",
              padding: "18px",
              marginTop: "25px",
            }}
          >
            <h3
              style={{
                color: "#c2410c",
                marginTop: 0,
              }}
            >
              ⚠️ Common Mistakes
            </h3>

            <ul
              style={{
                color: "#7c2d12",
                lineHeight: "1.8",
                paddingLeft: "22px",
                marginBottom: 0,
              }}
            >
              {topic.lesson.mistakes.map((mistake, index) => (
                <li key={index}>{mistake}</li>
              ))}
            </ul>
          </div>

          {/* QUIZ */}

          <div
            style={{
              marginTop: "35px",
              paddingTop: "30px",
              borderTop: "1px solid #dbeafe",
            }}
          >
            <h3
              style={{
                color: "#1d4ed8",
                marginTop: 0,
              }}
            >
              📝 Quick Quiz
            </h3>

            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Question {questionIndex + 1} of{" "}
              {quizQuestions.length}
            </p>

            <h4
              style={{
                color: "#1e3a8a",
                fontSize: "17px",
                lineHeight: "1.5",
              }}
            >
              {question.question}
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "18px",
              }}
            >
              {options.map((option) => {
                const isSelected = selectedAnswer === option;
                const isCorrect =
                  option === question.answer;

                let background = "#ffffff";
                let border = "1px solid #bfdbfe";
                let color = "#334155";

                if (submitted && isCorrect) {
                  background = "#dcfce7";
                  border = "1px solid #22c55e";
                  color = "#166534";
                } else if (
                  submitted &&
                  isSelected &&
                  !isCorrect
                ) {
                  background = "#fee2e2";
                  border = "1px solid #ef4444";
                  color = "#991b1b";
                } else if (isSelected) {
                  background = "#eff6ff";
                  border = "1px solid #2563eb";
                  color = "#1d4ed8";
                }

                return (
                  <button
                    key={option}
                    onClick={() => {
                      if (!submitted) {
                        setSelectedAnswer(option);
                      }
                    }}
                    style={{
                      textAlign: "left",
                      padding: "13px 15px",
                      borderRadius: "9px",
                      border,
                      background,
                      color,
                      cursor: submitted
                        ? "default"
                        : "pointer",
                      fontWeight: isSelected
                        ? "600"
                        : "400",
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* FEEDBACK */}

            {submitted && (
              <div
                style={{
                  marginTop: "18px",
                  padding: "15px",
                  borderRadius: "9px",
                  background:
                    selectedAnswer === question.answer
                      ? "#dcfce7"
                      : "#fee2e2",
                  color:
                    selectedAnswer === question.answer
                      ? "#166534"
                      : "#991b1b",
                  lineHeight: "1.6",
                }}
              >
                {selectedAnswer === question.answer ? (
                  <strong>✅ Correct answer!</strong>
                ) : (
                  <>
                    <strong>❌ Incorrect answer.</strong>
                    <br />
                    Correct answer:{" "}
                    <strong>{question.answer}</strong>
                  </>
                )}
              </div>
            )}

            {/* QUIZ BUTTON */}

            {!submitted ? (
              <button
                onClick={submitAnswer}
                disabled={selectedAnswer === null}
                style={{
                  marginTop: "20px",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "none",
                  background:
                    selectedAnswer === null
                      ? "#94a3b8"
                      : "#2563eb",
                  color: "#ffffff",
                  cursor:
                    selectedAnswer === null
                      ? "not-allowed"
                      : "pointer",
                  fontWeight: "600",
                }}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                style={{
                  marginTop: "20px",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2563eb",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                {questionIndex < quizQuestions.length - 1
                  ? "Next Question →"
                  : "Finish Quiz →"}
              </button>
            )}
          </div>

          {/* LESSON NAVIGATION */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              marginTop: "35px",
              paddingTop: "25px",
              borderTop: "1px solid #dbeafe",
            }}
          >
            <button
              onClick={previousLesson}
              disabled={currentLesson === 0}
              style={{
                padding: "11px 20px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  currentLesson === 0
                    ? "#f1f5f9"
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

            {currentLesson < subtopics.length - 1 ? (
              <button
                onClick={nextLesson}
                style={{
                  padding: "11px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2563eb",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Next Lesson →
              </button>
            ) : (
              <button
                onClick={() => {
                  if (!completedLessons.includes(topic.id)) {
                    saveProgress(topic.id);
                  }
                }}
                style={{
                  padding: "11px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#16a34a",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                ✓ Complete Topic
              </button>
            )}
          </div>
        </div>

        {/* TOPIC COMPLETION */}

        {completedLessons.length === subtopics.length && (
          <div
            style={{
              marginTop: "25px",
              background: "#ecfdf5",
              border: "1px solid #86efac",
              borderRadius: "14px",
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#166534",
                marginTop: 0,
              }}
            >
              🎉 Topic Completed!
            </h2>

            <p
              style={{
                color: "#166534",
                marginBottom: "20px",
              }}
            >
              You have completed all 8 lessons in Cloud
              Computing Fundamentals.
            </p>

            <button
              onClick={handleBack}
              style={{
                padding: "11px 22px",
                borderRadius: "8px",
                border: "none",
                background: "#16a34a",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              ← Back to Cloud / DevOps Roadmap
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CloudComputingFundamentals;