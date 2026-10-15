import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    icon: "👤",
    lesson: {
      overview:
        "A personal portfolio is a practical project for presenting your skills, education, projects, experience, and contact information. It is one of the best first full stack projects because it combines frontend development, responsive design, deployment, and professional presentation.",
      sections: [
        {
          title: "Project Goal",
          points: [
            "Create a professional website that introduces you and your technical skills.",
            "Showcase projects with descriptions, technologies, and links.",
            "Provide a way for visitors or recruiters to contact you.",
            "Make the website responsive across desktop and mobile devices.",
          ],
        },
        {
          title: "Recommended Features",
          points: [
            "Home or hero section introducing yourself.",
            "About section describing your background and interests.",
            "Skills section showing technologies you know.",
            "Projects section containing your best work.",
            "Resume or experience section.",
            "Contact section or contact form.",
          ],
        },
        {
          title: "Full Stack Integration",
          points: [
            "A basic portfolio can be frontend-only.",
            "A contact form can introduce backend API integration.",
            "The backend can validate and process contact form submissions.",
            "A database can optionally store messages.",
            "The completed application can be deployed publicly.",
          ],
        },
        {
          title: "What You Practice",
          points: [
            "HTML and semantic structure.",
            "CSS and responsive design.",
            "React components and routing.",
            "API integration.",
            "Form handling and validation.",
            "Deployment and production configuration.",
          ],
        },
      ],
      mistakes: [
        "Do not overload the portfolio with too many unnecessary sections.",
        "Do not showcase unfinished or broken projects.",
        "Do not make the website difficult to navigate on mobile.",
        "Do not expose private information through the frontend.",
      ],
      quiz: [
        {
          question: "What is the main purpose of a portfolio website?",
          options: [
            "Showcase your skills and projects",
            "Store database backups",
            "Replace a programming language",
            "Manage cloud servers",
          ],
          answer: "Showcase your skills and projects",
        },
        {
          question: "What can a portfolio contact form demonstrate?",
          options: [
            "Frontend, backend, API, and form handling",
            "Only CSS colors",
            "Only database indexing",
            "Only Git branching",
          ],
          answer:
            "Frontend, backend, API, and form handling",
        },
        {
          question: "What should a portfolio prioritize?",
          options: [
            "Clear presentation and responsive usability",
            "Maximum number of animations",
            "As many pages as possible",
            "Unfinished features",
          ],
          answer: "Clear presentation and responsive usability",
        },
      ],
    },
  },

  {
    id: "blog",
    title: "Full Stack Blog Application",
    icon: "📝",
    lesson: {
      overview:
        "A full stack blog application allows users to create, read, update, and delete articles. It is an excellent project for practicing CRUD operations, authentication, databases, APIs, authorization, and frontend state management.",
      sections: [
        {
          title: "Project Goal",
          points: [
            "Allow users to browse published blog posts.",
            "Allow authenticated users to create and manage their own posts.",
            "Store posts and user information in a database.",
            "Build a clean interface for reading and writing content.",
          ],
        },
        {
          title: "Core Features",
          points: [
            "User registration and login.",
            "Create, read, update, and delete posts.",
            "Post titles, content, author, and timestamps.",
            "Post listing and individual post pages.",
            "Authorization for editing and deleting posts.",
            "Comments can be added as an advanced feature.",
          ],
        },
        {
          title: "Backend & Database",
          points: [
            "Create API endpoints for posts and users.",
            "Use a database to persist application data.",
            "Validate post and user input on the backend.",
            "Protect post management endpoints.",
            "Associate posts with their authors.",
          ],
        },
        {
          title: "What You Practice",
          points: [
            "React components and routing.",
            "REST API development.",
            "Database CRUD operations.",
            "Authentication and authorization.",
            "Form validation.",
            "Deployment.",
          ],
        },
      ],
      mistakes: [
        "Do not allow users to edit or delete posts belonging to other users.",
        "Do not trust frontend authorization checks.",
        "Do not store passwords as plain text.",
        "Do not accept unrestricted content without appropriate validation.",
      ],
      quiz: [
        {
          question: "Which database operations are central to a blog application?",
          options: [
            "CRUD operations",
            "Only SELECT operations",
            "Only DELETE operations",
            "Only database backups",
          ],
          answer: "CRUD operations",
        },
        {
          question: "Who should normally be allowed to edit a user's post?",
          options: [
            "The post owner or an appropriately authorized administrator",
            "Any visitor",
            "Only the frontend",
            "Any unauthenticated user",
          ],
          answer:
            "The post owner or an appropriately authorized administrator",
        },
        {
          question: "What can a blog project teach?",
          options: [
            "Authentication, APIs, databases, and CRUD",
            "Only CSS",
            "Only HTML",
            "Only Git installation",
          ],
          answer:
            "Authentication, APIs, databases, and CRUD",
        },
      ],
    },
  },

  {
    id: "ecommerce",
    title: "E-Commerce Application",
    icon: "🛒",
    lesson: {
      overview:
        "An e-commerce application simulates an online shopping system. It combines product management, user accounts, carts, orders, databases, authentication, authorization, and potentially payment integration.",
      sections: [
        {
          title: "Project Goal",
          points: [
            "Allow users to browse products.",
            "Allow users to add products to a shopping cart.",
            "Allow authenticated users to place orders.",
            "Provide administrative functionality for managing products and orders.",
          ],
        },
        {
          title: "Core Features",
          points: [
            "Product listing and product detail pages.",
            "Search and filtering.",
            "Shopping cart.",
            "User registration and authentication.",
            "Order creation and order history.",
            "Admin product and order management.",
          ],
        },
        {
          title: "Database Design",
          points: [
            "Products can contain names, descriptions, prices, and inventory information.",
            "Users can contain account and profile information.",
            "Orders can contain customer and order details.",
            "Order items can reference products and quantities.",
            "Relationships between these entities should be designed carefully.",
          ],
        },
        {
          title: "Advanced Features",
          points: [
            "Payment provider integration.",
            "Product reviews and ratings.",
            "Inventory management.",
            "Order status tracking.",
            "Email notifications.",
            "Admin dashboard and analytics.",
          ],
        },
      ],
      mistakes: [
        "Never trust prices sent by the client during checkout.",
        "Do not expose payment or authentication secrets.",
        "Do not allow normal users to access administrative operations.",
        "Do not assume frontend cart data is authoritative for final order calculations.",
      ],
      quiz: [
        {
          question: "What is a core feature of an e-commerce application?",
          options: [
            "Shopping cart and order management",
            "Only a static homepage",
            "Only a login page",
            "Only a CSS animation",
          ],
          answer: "Shopping cart and order management",
        },
        {
          question: "Where should final order calculations be trusted?",
          options: [
            "Backend",
            "Only browser JavaScript",
            "CSS",
            "HTML comments",
          ],
          answer: "Backend",
        },
        {
          question: "What is an advanced e-commerce feature?",
          options: [
            "Payment integration",
            "Changing browser zoom",
            "Editing CSS comments",
            "Removing database relationships",
          ],
          answer: "Payment integration",
        },
      ],
    },
  },

  {
    id: "task-manager",
    title: "Task Management Application",
    icon: "✅",
    lesson: {
      overview:
        "A task management application allows users to create, organize, update, and complete tasks. It is a manageable project for practicing authentication, CRUD APIs, database relationships, filtering, and frontend state management.",
      sections: [
        {
          title: "Project Goal",
          points: [
            "Allow users to manage personal tasks.",
            "Persist tasks in a database.",
            "Provide clear task status and organization.",
            "Keep each user's tasks protected from other users.",
          ],
        },
        {
          title: "Core Features",
          points: [
            "Create tasks.",
            "Edit tasks.",
            "Delete tasks.",
            "Mark tasks as completed.",
            "Filter tasks by status.",
            "Set priorities or due dates.",
          ],
        },
        {
          title: "Authentication & Authorization",
          points: [
            "Users should authenticate before accessing their task data.",
            "Each task should be associated with its owner.",
            "Backend authorization should prevent users from accessing other users' tasks.",
            "Protected API endpoints should verify authentication.",
          ],
        },
        {
          title: "Advanced Features",
          points: [
            "Task categories or projects.",
            "Due-date reminders.",
            "Drag-and-drop organization.",
            "Search and filtering.",
            "Shared tasks and collaboration.",
            "Notifications.",
          ],
        },
      ],
      mistakes: [
        "Do not identify task ownership only through frontend state.",
        "Do not expose another user's tasks through API responses.",
        "Do not forget to validate task data.",
        "Do not make every task publicly accessible.",
      ],
      quiz: [
        {
          question: "What is a central feature of a task manager?",
          options: [
            "Create, update, complete, and delete tasks",
            "Only display images",
            "Only authenticate administrators",
            "Only show static text",
          ],
          answer:
            "Create, update, complete, and delete tasks",
        },
        {
          question: "How should task ownership be protected?",
          options: [
            "Backend authorization",
            "Only hiding buttons",
            "Only CSS",
            "Only browser storage",
          ],
          answer: "Backend authorization",
        },
        {
          question: "What is an advanced task-manager feature?",
          options: [
            "Task categories and due dates",
            "Removing the database",
            "Removing authentication",
            "Disabling API requests",
          ],
          answer: "Task categories and due dates",
        },
      ],
    },
  },

  {
    id: "social-media",
    title: "Social Media Application",
    icon: "📱",
    lesson: {
      overview:
        "A social media application allows users to create profiles, publish content, interact with other users, and receive updates. It is a larger full stack project that combines many concepts learned throughout the roadmap.",
      sections: [
        {
          title: "Project Goal",
          points: [
            "Allow users to create accounts and profiles.",
            "Allow users to publish posts.",
            "Allow users to interact with other users' content.",
            "Provide a personalized feed.",
          ],
        },
        {
          title: "Core Features",
          points: [
            "User registration and login.",
            "User profiles.",
            "Create and delete posts.",
            "Like or react to posts.",
            "Comments.",
            "Follow or connect with other users.",
          ],
        },
        {
          title: "Backend Architecture",
          points: [
            "Create APIs for users, posts, comments, and relationships.",
            "Use appropriate database relationships.",
            "Protect authenticated operations.",
            "Implement authorization for user-owned resources.",
            "Validate all important user input.",
          ],
        },
        {
          title: "Advanced Features",
          points: [
            "Image uploads.",
            "Real-time notifications.",
            "Messaging.",
            "Content search.",
            "Recommendation systems.",
            "Moderation and reporting.",
          ],
        },
      ],
      mistakes: [
        "Do not expose private user information unnecessarily.",
        "Do not allow users to modify other users' profiles or posts without authorization.",
        "Do not trust client-side ownership information.",
        "Do not ignore scalability when designing feeds and relationships.",
      ],
      quiz: [
        {
          question: "Which is a core social media feature?",
          options: [
            "User profiles and posts",
            "Only static HTML",
            "Only database backups",
            "Only server configuration",
          ],
          answer: "User profiles and posts",
        },
        {
          question: "What should protect user-owned resources?",
          options: [
            "Backend authorization",
            "Only hidden buttons",
            "Only CSS",
            "Only browser history",
          ],
          answer: "Backend authorization",
        },
        {
          question: "Which is an advanced social media feature?",
          options: [
            "Real-time notifications",
            "Changing page margins",
            "Removing APIs",
            "Removing authentication",
          ],
          answer: "Real-time notifications",
        },
      ],
    },
  },

  {
    id: "job-platform",
    title: "Job Portal",
    icon: "💼",
    lesson: {
      overview:
        "A job portal connects job seekers and employers. It is a strong full stack project because it combines authentication, role-based authorization, search, filtering, databases, file handling, and application workflows.",
      sections: [
        {
          title: "Project Goal",
          points: [
            "Allow employers to publish job openings.",
            "Allow job seekers to browse and search jobs.",
            "Allow users to apply for suitable positions.",
            "Provide separate functionality for employers and job seekers.",
          ],
        },
        {
          title: "User Roles",
          points: [
            "Job seekers can create profiles and apply for jobs.",
            "Employers can create and manage job postings.",
            "Administrators can manage users and platform content.",
            "Each role should have appropriate permissions.",
          ],
        },
        {
          title: "Core Features",
          points: [
            "Job listing and search.",
            "Filtering by location, skills, or job type.",
            "Job detail pages.",
            "Application submission.",
            "Employer dashboard.",
            "Applicant management.",
          ],
        },
        {
          title: "Advanced Features",
          points: [
            "Resume uploads.",
            "Application status tracking.",
            "Email notifications.",
            "Saved jobs.",
            "Job recommendations.",
            "Admin moderation.",
          ],
        },
      ],
      mistakes: [
        "Do not give job seekers employer permissions.",
        "Do not expose applicants' private information unnecessarily.",
        "Do not allow unauthorized users to modify job postings.",
        "Do not accept unrestricted file uploads.",
      ],
      quiz: [
        {
          question: "What is a key concept in a job portal?",
          options: [
            "Different user roles and permissions",
            "Only a static homepage",
            "Only CSS animations",
            "Only image compression",
          ],
          answer: "Different user roles and permissions",
        },
        {
          question: "Who should normally manage job postings?",
          options: [
            "Authorized employers",
            "Any visitor",
            "Only unauthenticated users",
            "Any random user",
          ],
          answer: "Authorized employers",
        },
        {
          question: "Which is an advanced job-portal feature?",
          options: [
            "Resume uploads and application tracking",
            "Removing authentication",
            "Deleting all job data",
            "Removing search",
          ],
          answer: "Resume uploads and application tracking",
        },
      ],
    },
  },

  {
    id: "capstone",
    title: "Full Stack Capstone Project",
    icon: "🏆",
    lesson: {
      overview:
        "The capstone project is the final project that brings together the major concepts from the Full Stack Developer roadmap. It should solve a meaningful problem and demonstrate frontend, backend, database, authentication, API, security, and deployment skills.",
      sections: [
        {
          title: "Choose a Real Problem",
          points: [
            "Choose a problem that can be solved with a web application.",
            "Identify the target users and their needs.",
            "Define the main features before beginning development.",
            "Keep the first version achievable while leaving room for advanced features.",
          ],
        },
        {
          title: "Plan the Architecture",
          points: [
            "Decide on the frontend technology and application structure.",
            "Design the backend API and major server responsibilities.",
            "Choose an appropriate database.",
            "Identify authentication and authorization requirements.",
            "Plan how the application will be deployed.",
          ],
        },
        {
          title: "Build the MVP",
          points: [
            "Start with the minimum features required for the application to be useful.",
            "Build the database structure and backend APIs.",
            "Connect the frontend to the backend.",
            "Implement authentication and authorization.",
            "Test the main user flows.",
          ],
        },
        {
          title: "Security & Deployment",
          points: [
            "Validate user input on the backend.",
            "Protect authentication credentials and application secrets.",
            "Use HTTPS in production.",
            "Configure appropriate security headers and access controls.",
            "Deploy the application and monitor its behavior.",
          ],
        },
        {
          title: "Portfolio Presentation",
          points: [
            "Create a clear README describing the project.",
            "Explain the problem, solution, architecture, and technologies used.",
            "Include screenshots or a live demonstration.",
            "Document important API endpoints and setup instructions.",
            "Explain technical decisions and challenges you solved.",
          ],
        },
      ],
      mistakes: [
        "Do not choose a project that is too large to finish.",
        "Do not start coding without defining the core requirements.",
        "Do not ignore backend security because the project is for learning.",
        "Do not build many features while leaving the core functionality incomplete.",
        "Do not deploy without testing authentication, APIs, and important user flows.",
      ],
      quiz: [
        {
          question: "What is the purpose of a capstone project?",
          options: [
            "Demonstrate the major skills learned throughout the roadmap",
            "Only practice CSS colors",
            "Only create a database",
            "Only write documentation",
          ],
          answer:
            "Demonstrate the major skills learned throughout the roadmap",
        },
        {
          question: "What should you build first?",
          options: [
            "A manageable MVP with the core functionality",
            "Every advanced feature immediately",
            "Only the animations",
            "Only the documentation",
          ],
          answer:
            "A manageable MVP with the core functionality",
        },
        {
          question: "What should a strong capstone demonstrate?",
          options: [
            "Frontend, backend, database, security, and deployment",
            "Only HTML",
            "Only CSS",
            "Only Git commands",
          ],
          answer:
            "Frontend, backend, database, security, and deployment",
        },
      ],
    },
  },
];

/* -------------------------------------------------------
   SHUFFLE QUIZ OPTIONS
   ------------------------------------------------------- */

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

function Projects({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-projects", subtopics);
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

  const selectedIndex = subtopics.findIndex(
    (project) => project.id === selectedSubtopic
  );

  const selectedProject =
    selectedIndex >= 0 ? subtopics[selectedIndex] : null;

  const markComplete = (id) => {
    saveProgress(id);
  };

  const handleAnswer = (projectId, questionIndex, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [`${projectId}-${questionIndex}`]: answer,
    }));
  };

  const submitQuiz = async (projectId) => {

    const project = subtopics.find(
      (item) => item.id === projectId
    );

    if (!project) return;

    const score = calculateQuizScore(project);

    await saveQuizResult({
      subject: "Full Stack",
      role: "Full Stack Developer",
      topic: project.title,
      topicId: project.id,
      score,
      totalQuestions: project.lesson.quiz.length
    });
    setQuizSubmitted((prev) => ({
      ...prev,
      [projectId]: true,
    }));
  };

  const calculateQuizScore = (project) => {
    return project.lesson.quiz.reduce(
      (score, question, index) => {
        const selectedAnswer =
          quizAnswers[`${project.id}-${index}`];

        return (
          score +
          (selectedAnswer === question.answer ? 1 : 0)
        );
      },
      0
    );
  };

  const goToPreviousProject = () => {
    if (selectedIndex > 0) {
      setSelectedSubtopic(
        subtopics[selectedIndex - 1].id
      );
    }
  };

  const goToNextProject = () => {
    if (selectedIndex < subtopics.length - 1) {
      setSelectedSubtopic(
        subtopics[selectedIndex + 1].id
      );
    }
  };

  if (selectedProject) {
    const project = selectedProject;

    const score = quizSubmitted[project.id]
      ? calculateQuizScore(project)
      : 0;

    const isFirstProject = selectedIndex === 0;
    const isLastProject =
      selectedIndex === subtopics.length - 1;

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
            ← Back to Projects
          </button>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "35px",
              border: "1px solid #bfdbfe",
              boxShadow:
                "0 4px 15px rgba(37, 99, 235, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
                marginBottom: "12px",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "30px",
                  color: "#111827",
                }}
              >
                {project.icon} {project.title}
              </h1>

              <span
                style={{
                  background: "#eff6ff",
                  color: "#2563eb",
                  border: "1px solid #bfdbfe",
                  borderRadius: "20px",
                  padding: "7px 13px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Project {selectedIndex + 1} of{" "}
                {subtopics.length}
              </span>
            </div>

            <p
              style={{
                fontSize: "17px",
                color: "#374151",
                lineHeight: "1.7",
                marginBottom: "30px",
              }}
            >
              {project.lesson.overview}
            </p>

            {project.lesson.sections.map(
              (section, index) => (
                <div
                  key={section.title}
                  style={{
                    marginBottom: "28px",
                    padding: "22px",
                    background: "#f8fbff",
                    borderRadius: "14px",
                    border: "1px solid #dbeafe",
                  }}
                >
                  <h2
                    style={{
                      margin: "0 0 14px",
                      color: "#1e3a8a",
                      fontSize: "21px",
                    }}
                  >
                    {index + 1}. {section.title}
                  </h2>

                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "22px",
                      color: "#374151",
                      lineHeight: "1.8",
                    }}
                  >
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              )
            )}

            <div
              style={{
                marginTop: "10px",
                padding: "22px",
                background: "#eff6ff",
                borderRadius: "14px",
                border: "1px solid #bfdbfe",
              }}
            >
              <h2
                style={{
                  margin: "0 0 14px",
                  color: "#1e3a8a",
                  fontSize: "21px",
                }}
              >
                ⚠️ Common Mistakes
              </h2>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "22px",
                  color: "#374151",
                  lineHeight: "1.8",
                }}
              >
                {project.lesson.mistakes.map(
                  (mistake) => (
                    <li key={mistake}>{mistake}</li>
                  )
                )}
              </ul>
            </div>

            <div style={{ marginTop: "35px" }}>
              <h2
                style={{
                  color: "#111827",
                  fontSize: "24px",
                  marginBottom: "18px",
                }}
              >
                📝 Quick Quiz
              </h2>

              {project.lesson.quiz.map(
                (question, questionIndex) => {
                  const selectedAnswer =
                    quizAnswers[
                      `${project.id}-${questionIndex}`
                    ];

                  const options =
                    shuffledQuizOptions[
                      project.id
                    ][questionIndex];

                  return (
                    <div
                      key={question.question}
                      style={{
                        marginBottom: "24px",
                        padding: "22px",
                        borderRadius: "14px",
                        background: "#f9fafb",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 15px",
                          color: "#111827",
                          fontSize: "17px",
                          lineHeight: "1.5",
                        }}
                      >
                        {questionIndex + 1}.{" "}
                        {question.question}
                      </h3>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        {options.map((option) => (
                          <label
                            key={option}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              padding: "10px 12px",
                              borderRadius: "8px",
                              cursor: "pointer",
                              background:
                                selectedAnswer ===
                                option
                                  ? "#dbeafe"
                                  : "white",
                              border:
                                "1px solid #dbeafe",
                            }}
                          >
                            <input
                              type="radio"
                              name={`${project.id}-${questionIndex}`}
                              value={option}
                              checked={
                                selectedAnswer ===
                                option
                              }
                              onChange={() =>
                                handleAnswer(
                                  project.id,
                                  questionIndex,
                                  option
                                )
                              }
                            />

                            <span>{option}</span>
                          </label>
                        ))}
                      </div>

                      {quizSubmitted[
                        project.id
                      ] && (
                        <p
                          style={{
                            marginTop: "14px",
                            fontWeight: "600",
                            color:
                              selectedAnswer ===
                              question.answer
                                ? "#15803d"
                                : "#dc2626",
                          }}
                        >
                          {selectedAnswer ===
                          question.answer
                            ? "✅ Correct!"
                            : `❌ Incorrect. Correct answer: ${question.answer}`}
                        </p>
                      )}
                    </div>
                  );
                }
              )}

              <button
                onClick={() =>
                  submitQuiz(project.id)
                }
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 22px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Check Quiz
              </button>

              {quizSubmitted[project.id] && (
                <div
                  style={{
                    marginTop: "18px",
                    padding: "16px",
                    background: "#eff6ff",
                    borderRadius: "10px",
                    border: "1px solid #bfdbfe",
                    color: "#1e3a8a",
                    fontWeight: "600",
                  }}
                >
                  🎯 Your Score: {score} /{" "}
                  {project.lesson.quiz.length}
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: "35px",
                paddingTop: "25px",
                borderTop: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              <button
                onClick={() =>
                  saveProgress(project.id)
                }
                disabled={completed.includes(project.id)}
                style={{
                  background: completed.includes(project.id)
                    ? "#16a34a"
                    : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: completed.includes(project.id)
                    ? "default"
                    : "pointer",
                }}
              >
                {completed.includes(project.id)
                  ? "✅ Project Completed"
                  : "✓ Mark Project Complete"}
              </button>
            </div>

            <div
              style={{
                marginTop: "30px",
                paddingTop: "25px",
                borderTop: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={goToPreviousProject}
                disabled={isFirstProject}
                style={{
                  background: isFirstProject
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isFirstProject
                    ? "#9ca3af"
                    : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isFirstProject
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                ← Previous Project
              </button>

              <button
                onClick={() =>
                  setSelectedSubtopic(null)
                }
                style={{
                  background: "white",
                  color: "#2563eb",
                  border: "1px solid #2563eb",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                📚 Back to Projects
              </button>

              <button
                onClick={goToNextProject}
                disabled={isLastProject}
                style={{
                  background: isLastProject
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isLastProject
                    ? "#9ca3af"
                    : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isLastProject
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                Next Project →
              </button>
            </div>

            <div
              style={{
                marginTop: "25px",
                padding: "15px",
                background: "#f8fbff",
                borderRadius: "10px",
                textAlign: "center",
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              {completed.includes(project.id)
                ? "✅ You have completed this project."
                : "💻 Build this project and mark it complete when you are ready."}
            </div>
          </div>
        </div>
      </div>
    );
  }

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

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          💻 Full Stack Projects
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Apply your full stack skills by building practical
          projects from beginner applications to a complete
          capstone project.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px 22px",
            marginBottom: "28px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
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
            {completedCount} of {subtopics.length} projects
            completed
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {subtopics.map((project, index) => {
            const progress = completed.includes(project.id)
              ? 100
              : 0;

            return (
              <div
                key={project.id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "180px",
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
                      margin: "0 0 4px",
                      fontSize: "20px",
                      color: "#111827",
                      lineHeight: "1.3",
                    }}
                  >
                    {index + 1}. {project.icon}{" "}
                    {project.title}
                  </h2>

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
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() =>
                    setSelectedSubtopic(project.id)
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
                  {completed.includes(project.id)
                    ? "Review Project →"
                    : "Open Project →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;