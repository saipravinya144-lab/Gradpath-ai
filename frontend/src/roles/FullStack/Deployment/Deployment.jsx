import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "deployment-introduction",
    title: "Deployment Introduction",
    icon: "🚀",
    lesson: {
      overview:
        "Deployment is the process of making an application available in an environment where users can access it. A full stack application usually requires deploying the frontend, backend, database, and supporting configuration.",
      sections: [
        {
          title: "What is Deployment?",
          points: [
            "Deployment moves an application from development into an environment where it can be used.",
            "Production is the environment where the application is made available to real users.",
            "A deployed full stack application may contain frontend, backend, database, and external services.",
            "Deployment also includes configuring the application to run correctly in its target environment.",
          ],
        },
        {
          title: "Development vs Production",
          points: [
            "Development environments are primarily used for building and testing.",
            "Production environments serve the application to real users.",
            "Production configuration should be designed for security, reliability, and performance.",
            "Development credentials and production credentials should be kept separate.",
          ],
        },
        {
          title: "Deployment Components",
          points: [
            "The frontend may be deployed to a static hosting or application platform.",
            "The backend needs a runtime environment capable of running the server.",
            "The database must be accessible securely from the backend.",
            "Domain names, environment variables, HTTPS, and monitoring may also be required.",
          ],
        },
        {
          title: "Deployment Workflow",
          points: [
            "Build and test the application.",
            "Configure production environment variables.",
            "Deploy the required application components.",
            "Verify that frontend, backend, database, and APIs communicate correctly.",
            "Monitor the deployed application for errors.",
          ],
        },
      ],
      mistakes: [
        "Do not deploy development secrets to production.",
        "Do not assume an application works in production simply because it works locally.",
        "Do not forget to configure the production database and environment variables.",
        "Do not deploy without testing the production configuration.",
      ],
      quiz: [
        {
          question: "What is deployment?",
          options: [
            "Making an application available in a target environment",
            "Writing only CSS code",
            "Creating a database table",
            "Changing a browser setting",
          ],
          answer: "Making an application available in a target environment",
        },
        {
          question: "Which environment serves an application to real users?",
          options: [
            "Production",
            "Local development only",
            "Source control",
            "Code editor",
          ],
          answer: "Production",
        },
        {
          question: "What may need to be deployed in a full stack application?",
          options: [
            "Frontend, backend, database, and supporting services",
            "Only CSS",
            "Only HTML",
            "Only the browser",
          ],
          answer:
            "Frontend, backend, database, and supporting services",
        },
      ],
    },
  },

  {
    id: "build-production",
    title: "Production Builds",
    icon: "🏗️",
    lesson: {
      overview:
        "A production build prepares application code for deployment. Build tools can transform, bundle, optimize, and package frontend assets so they can be served efficiently to users.",
      sections: [
        {
          title: "Development Build vs Production Build",
          points: [
            "Development builds are optimized for debugging and fast development.",
            "Production builds are optimized for deployment and users.",
            "Production builds commonly reduce unnecessary code and optimize assets.",
            "The exact build process depends on the framework and build tool.",
          ],
        },
        {
          title: "Frontend Build Process",
          points: [
            "Source files are processed by the project's build tool.",
            "JavaScript and CSS can be bundled or transformed.",
            "Assets can be optimized for production delivery.",
            "The build usually produces files that can be served by a hosting platform.",
          ],
        },
        {
          title: "Build Configuration",
          points: [
            "Build configuration determines how application files are processed.",
            "Environment-specific values may be provided during the build process.",
            "The output directory depends on the framework or build tool.",
            "Build failures should be fixed before deployment.",
          ],
        },
        {
          title: "Testing the Production Build",
          points: [
            "A production build should be tested before or after deployment.",
            "Routes, API connections, assets, and environment configuration should be checked.",
            "Production builds can behave differently from development servers.",
            "Testing helps catch deployment-specific problems early.",
          ],
        },
      ],
      mistakes: [
        "Do not deploy an untested production build.",
        "Do not assume development environment variables will automatically exist in production.",
        "Do not manually edit generated build files unless necessary.",
        "Do not ignore build warnings or errors without understanding them.",
      ],
      quiz: [
        {
          question: "What is a production build mainly prepared for?",
          options: [
            "Deployment and production use",
            "Only writing code",
            "Changing database passwords",
            "Designing HTML manually",
          ],
          answer: "Deployment and production use",
        },
        {
          question: "What can a build tool do?",
          options: [
            "Process and optimize application assets",
            "Replace the database administrator",
            "Create internet users",
            "Automatically fix every security vulnerability",
          ],
          answer: "Process and optimize application assets",
        },
        {
          question: "Why should a production build be tested?",
          options: [
            "To catch deployment-specific problems",
            "To remove all source code",
            "To disable APIs",
            "To prevent users from accessing the application",
          ],
          answer: "To catch deployment-specific problems",
        },
      ],
    },
  },

  {
    id: "hosting",
    title: "Web Hosting",
    icon: "🌐",
    lesson: {
      overview:
        "Web hosting provides infrastructure where applications and websites can run and be accessed over a network. Different hosting approaches are suitable for different application requirements.",
      sections: [
        {
          title: "What is Hosting?",
          points: [
            "Hosting provides resources for serving an application to users.",
            "Static websites can be hosted using platforms designed to serve static files.",
            "Backend applications require a runtime environment capable of running server-side code.",
            "Hosting platforms may provide networking, storage, deployment, and monitoring features.",
          ],
        },
        {
          title: "Static Hosting",
          points: [
            "Static hosting is suitable for applications whose frontend can be served as generated files.",
            "A production frontend build can often be deployed to static hosting.",
            "Static hosting can be simple and cost-effective for frontend applications.",
            "Dynamic backend functionality generally requires a separate server or suitable platform.",
          ],
        },
        {
          title: "Server Hosting",
          points: [
            "Server hosting provides an environment where backend applications can execute.",
            "The server needs the required runtime, dependencies, and configuration.",
            "The application must listen on an appropriate port or platform-provided interface.",
            "Server resources should be selected according to expected workload.",
          ],
        },
        {
          title: "Hosting Considerations",
          points: [
            "Consider reliability, scalability, security, cost, and deployment workflow.",
            "Understand where application data is stored.",
            "Check whether the platform supports the application's runtime.",
            "Review available logs and monitoring capabilities.",
          ],
        },
      ],
      mistakes: [
        "Do not deploy a backend application to a platform that cannot run its required runtime.",
        "Do not assume all hosting platforms work the same way.",
        "Do not ignore hosting limits and resource constraints.",
        "Do not expose internal services unnecessarily.",
      ],
      quiz: [
        {
          question: "What does web hosting provide?",
          options: [
            "Infrastructure for making applications accessible",
            "Only a code editor",
            "Only a database schema",
            "Only browser extensions",
          ],
          answer: "Infrastructure for making applications accessible",
        },
        {
          question: "What is static hosting commonly suitable for?",
          options: [
            "Generated frontend files",
            "Only database administration",
            "Only password hashing",
            "Only server logs",
          ],
          answer: "Generated frontend files",
        },
        {
          question: "What does a backend application require?",
          options: [
            "An environment capable of running its server-side code",
            "Only an HTML file",
            "Only a CSS stylesheet",
            "Only a browser bookmark",
          ],
          answer:
            "An environment capable of running its server-side code",
        },
      ],
    },
  },

  {
    id: "domains-dns",
    title: "Domains & DNS",
    icon: "🔗",
    lesson: {
      overview:
        "A domain name provides a human-readable address for an application. DNS translates domain names into information that allows clients to locate the appropriate services.",
      sections: [
        {
          title: "Domain Names",
          points: [
            "A domain name is a human-readable address such as example.com.",
            "Domains are easier for users to remember than raw server addresses.",
            "Applications can use custom domains instead of platform-provided addresses.",
            "Subdomains can separate different services or environments.",
          ],
        },
        {
          title: "DNS",
          points: [
            "DNS stands for Domain Name System.",
            "DNS translates domain names into network-related records.",
            "Different DNS record types serve different purposes.",
            "DNS configuration determines where traffic for a domain should be directed.",
          ],
        },
        {
          title: "Common DNS Records",
          points: [
            "A records can map a domain to an IPv4 address.",
            "AAAA records can map a domain to an IPv6 address.",
            "CNAME records can point a name to another domain name.",
            "TXT records can store text information used for different verification and configuration purposes.",
          ],
        },
        {
          title: "DNS and Deployment",
          points: [
            "A deployed application can be connected to a custom domain through DNS configuration.",
            "DNS changes may take time to become visible across the internet.",
            "HTTPS certificates must correspond appropriately to the domain.",
            "Subdomains can be used for frontend, API, or other services.",
          ],
        },
      ],
      mistakes: [
        "Do not change DNS records without understanding their purpose.",
        "Do not assume DNS changes become visible everywhere immediately.",
        "Do not forget to configure HTTPS for production domains.",
        "Do not confuse a domain name with the hosting server itself.",
      ],
      quiz: [
        {
          question: "What does DNS stand for?",
          options: [
            "Domain Name System",
            "Data Network Security",
            "Dynamic Node Server",
            "Domain Network Storage",
          ],
          answer: "Domain Name System",
        },
        {
          question: "What can an A record contain?",
          options: [
            "An IPv4 address",
            "A CSS stylesheet",
            "A password hash",
            "An HTML component",
          ],
          answer: "An IPv4 address",
        },
        {
          question: "What is a domain name used for?",
          options: [
            "Providing a human-readable address for a service",
            "Hashing passwords",
            "Creating database indexes",
            "Compiling JavaScript",
          ],
          answer:
            "Providing a human-readable address for a service",
        },
      ],
    },
  },

  {
    id: "environment-config",
    title: "Environment Configuration",
    icon: "⚙️",
    lesson: {
      overview:
        "Environment configuration allows applications to use different settings for development, testing, and production. Secrets and environment-specific values should be managed carefully.",
      sections: [
        {
          title: "Environment Variables",
          points: [
            "Environment variables can store configuration values outside application source code.",
            "They can contain values such as API endpoints, database connection information, and application configuration.",
            "Different environments can use different values.",
            "The exact mechanism depends on the runtime and deployment platform.",
          ],
        },
        {
          title: "Secrets",
          points: [
            "Secrets include sensitive values such as passwords, API keys, and signing keys.",
            "Production secrets should not be committed to source control.",
            "Secret-management systems or protected environment configuration can be used.",
            "Access to secrets should be limited to the services that need them.",
          ],
        },
        {
          title: "Frontend Environment Variables",
          points: [
            "Some frontend build systems expose selected environment variables to browser code.",
            "Anything included in frontend JavaScript can potentially be inspected by users.",
            "Frontend environment variables should therefore not contain private secrets.",
            "Only values intended to be public should be exposed to the client.",
          ],
        },
        {
          title: "Configuration by Environment",
          points: [
            "Development may use local services and development databases.",
            "Production should use production services and secure configuration.",
            "Configuration should be predictable and documented.",
            "Applications should fail safely when required configuration is missing.",
          ],
        },
      ],
      mistakes: [
        "Never commit production secrets to Git.",
        "Do not put private API keys in frontend code.",
        "Do not assume every environment variable is automatically available everywhere.",
        "Do not mix development and production credentials.",
      ],
      quiz: [
        {
          question: "What can environment variables store?",
          options: [
            "Environment-specific configuration values",
            "Only HTML elements",
            "Only CSS colors",
            "Only browser history",
          ],
          answer: "Environment-specific configuration values",
        },
        {
          question: "Should private production secrets be committed to Git?",
          options: [
            "No",
            "Yes",
            "Only in public repositories",
            "Only inside frontend files",
          ],
          answer: "No",
        },
        {
          question: "Why should private secrets not be placed in frontend code?",
          options: [
            "Users can inspect client-side code",
            "Browsers cannot execute JavaScript",
            "CSS cannot contain text",
            "Databases cannot store strings",
          ],
          answer: "Users can inspect client-side code",
        },
      ],
    },
  },

  {
    id: "cloud-deployment",
    title: "Cloud Deployment",
    icon: "☁️",
    lesson: {
      overview:
        "Cloud deployment uses cloud infrastructure to run and expose application components. Cloud platforms can provide computing, storage, networking, databases, and managed deployment services.",
      sections: [
        {
          title: "Cloud Computing",
          points: [
            "Cloud platforms provide computing and infrastructure resources over a network.",
            "Applications can use managed services instead of managing every server manually.",
            "Cloud services can support application hosting, databases, storage, networking, and monitoring.",
            "The appropriate service depends on the application's requirements.",
          ],
        },
        {
          title: "Deployment Models",
          points: [
            "A frontend can be deployed using a managed frontend or static hosting service.",
            "A backend can run on managed application platforms, containers, virtual machines, or serverless infrastructure.",
            "Databases can be hosted using managed database services.",
            "Different components can be deployed separately and communicate through APIs.",
          ],
        },
        {
          title: "Scalability",
          points: [
            "Scalability is the ability to handle changing workload.",
            "Vertical scaling increases resources available to an instance.",
            "Horizontal scaling adds additional instances or service capacity.",
            "Stateless application design can make horizontal scaling easier.",
          ],
        },
        {
          title: "Cloud Security",
          points: [
            "Cloud resources should use appropriate access controls.",
            "Credentials and secrets should be protected.",
            "Only required network access should be exposed.",
            "Monitoring and logging should be configured for important services.",
          ],
        },
      ],
      mistakes: [
        "Do not expose cloud resources unnecessarily.",
        "Do not use highly privileged cloud credentials for routine application tasks.",
        "Do not ignore cloud service costs and resource limits.",
        "Do not assume a cloud provider automatically secures application code.",
      ],
      quiz: [
        {
          question: "What can cloud platforms provide?",
          options: [
            "Computing, storage, networking, and managed services",
            "Only HTML",
            "Only CSS",
            "Only browser extensions",
          ],
          answer:
            "Computing, storage, networking, and managed services",
        },
        {
          question: "What is horizontal scaling?",
          options: [
            "Adding additional instances or service capacity",
            "Increasing only one file's size",
            "Changing a CSS property",
            "Deleting all application servers",
          ],
          answer: "Adding additional instances or service capacity",
        },
        {
          question: "What should be protected in cloud deployments?",
          options: [
            "Credentials, secrets, and access permissions",
            "Only page titles",
            "Only CSS classes",
            "Only browser bookmarks",
          ],
          answer: "Credentials, secrets, and access permissions",
        },
      ],
    },
  },

  {
    id: "ci-cd",
    title: "CI/CD",
    icon: "🔄",
    lesson: {
      overview:
        "CI/CD automates parts of the software development and deployment process. Continuous Integration helps teams frequently validate code changes, while Continuous Delivery or Deployment automates the process of preparing or releasing those changes.",
      sections: [
        {
          title: "Continuous Integration",
          points: [
            "Continuous Integration (CI) involves regularly integrating code changes into a shared project.",
            "Automated tests and checks can run whenever changes are submitted.",
            "CI helps detect problems earlier in the development process.",
            "Linting, unit tests, builds, and other checks can be included.",
          ],
        },
        {
          title: "Continuous Delivery",
          points: [
            "Continuous Delivery keeps software in a deployable state.",
            "Automated pipelines can build and test the application.",
            "A release can then be prepared for deployment.",
            "Some organizations require a manual approval before production release.",
          ],
        },
        {
          title: "Continuous Deployment",
          points: [
            "Continuous Deployment automatically releases qualifying changes to production.",
            "Automated tests and checks are important before deployment.",
            "A reliable rollback strategy is valuable.",
            "The level of automation should match the application's risk and requirements.",
          ],
        },
        {
          title: "CI/CD Pipeline",
          points: [
            "A pipeline can begin when code is pushed to a repository.",
            "The pipeline can install dependencies and run automated checks.",
            "A successful build can be packaged and deployed.",
            "Deployment results should be monitored.",
          ],
        },
      ],
      mistakes: [
        "Do not deploy automatically without appropriate tests and safeguards.",
        "Do not store CI/CD secrets in plain source code.",
        "Do not ignore failed pipeline checks.",
        "Do not build pipelines without a rollback or recovery strategy where appropriate.",
      ],
      quiz: [
        {
          question: "What does CI stand for?",
          options: [
            "Continuous Integration",
            "Cloud Installation",
            "Code Interface",
            "Continuous Internet",
          ],
          answer: "Continuous Integration",
        },
        {
          question: "What can a CI pipeline run?",
          options: [
            "Tests, linting, and builds",
            "Only browser bookmarks",
            "Only CSS animations",
            "Only database backups",
          ],
          answer: "Tests, linting, and builds",
        },
        {
          question: "What is Continuous Deployment?",
          options: [
            "Automatically releasing qualifying changes to production",
            "Writing code without testing",
            "Manually editing production files",
            "Removing source control",
          ],
          answer:
            "Automatically releasing qualifying changes to production",
        },
      ],
    },
  },

  {
    id: "monitoring",
    title: "Monitoring & Logs",
    icon: "📊",
    lesson: {
      overview:
        "Monitoring and logging help developers understand the health and behavior of deployed applications. They are essential for detecting failures, diagnosing problems, and maintaining production systems.",
      sections: [
        {
          title: "Application Logs",
          points: [
            "Logs record events that occur while an application is running.",
            "Backend logs can contain information about requests, errors, and application events.",
            "Logs should provide enough information to diagnose problems without exposing sensitive data.",
            "Log levels can help distinguish normal events from warnings and errors.",
          ],
        },
        {
          title: "Monitoring",
          points: [
            "Monitoring tracks the health and performance of an application or infrastructure.",
            "Important metrics can include response times, error rates, resource usage, and availability.",
            "Monitoring can help identify problems before they become severe.",
            "Alerts can notify developers when important thresholds are exceeded.",
          ],
        },
        {
          title: "Error Tracking",
          points: [
            "Error tracking systems can collect information about application failures.",
            "Errors can be grouped to help identify recurring problems.",
            "Stack traces and contextual information can make debugging easier.",
            "Sensitive information should be excluded or protected.",
          ],
        },
        {
          title: "Production Debugging",
          points: [
            "Reproduce and understand the failure where possible.",
            "Check application logs and monitoring metrics.",
            "Identify whether the issue is related to code, configuration, infrastructure, or dependencies.",
            "Deploy a tested fix and continue monitoring after the change.",
          ],
        },
      ],
      mistakes: [
        "Do not log passwords, tokens, or other sensitive secrets.",
        "Do not ignore production errors.",
        "Do not monitor only server availability while ignoring application errors.",
        "Do not expose internal debugging information to users.",
      ],
      quiz: [
        {
          question: "What is the purpose of application logs?",
          options: [
            "Record events that help understand application behavior",
            "Store user passwords",
            "Replace the database",
            "Create CSS layouts",
          ],
          answer:
            "Record events that help understand application behavior",
        },
        {
          question: "What can monitoring track?",
          options: [
            "Health, performance, errors, and availability",
            "Only HTML indentation",
            "Only browser bookmarks",
            "Only source-code comments",
          ],
          answer:
            "Health, performance, errors, and availability",
        },
        {
          question: "What should not normally be written to logs?",
          options: [
            "Passwords and authentication secrets",
            "Error types",
            "Request timing",
            "Application status",
          ],
          answer: "Passwords and authentication secrets",
        },
      ],
    },
  },

  {
    id: "deployment-projects",
    title: "Deployment Projects",
    icon: "💻",
    lesson: {
      overview:
        "Deployment projects allow you to practice taking a full stack application from local development to a production environment. A good deployment project should include configuration, hosting, security, monitoring, and a repeatable deployment process.",
      sections: [
        {
          title: "Project 1: Deploy a Frontend",
          points: [
            "Create a production build of a frontend application.",
            "Deploy the generated files to a suitable hosting platform.",
            "Configure the required frontend environment values.",
            "Connect a custom domain if required.",
          ],
        },
        {
          title: "Project 2: Deploy a Backend",
          points: [
            "Deploy a backend application to a suitable runtime environment.",
            "Configure production environment variables.",
            "Connect the backend securely to a database.",
            "Verify API endpoints after deployment.",
          ],
        },
        {
          title: "Project 3: Deploy a Full Stack Application",
          points: [
            "Deploy frontend and backend components.",
            "Configure communication between them.",
            "Configure the production database.",
            "Enable HTTPS and appropriate security settings.",
            "Test authentication, APIs, and important user flows.",
          ],
        },
        {
          title: "Project 4: CI/CD Deployment",
          points: [
            "Connect the project repository to a CI/CD pipeline.",
            "Run automated tests and builds.",
            "Deploy successful changes to the target environment.",
            "Monitor the deployment and verify the application after release.",
          ],
        },
      ],
      mistakes: [
        "Do not deploy without testing production configuration.",
        "Do not expose database credentials or API secrets.",
        "Do not forget to configure the frontend's production API URL.",
        "Do not skip post-deployment testing.",
        "Do not ignore logs and monitoring after deployment.",
      ],
      quiz: [
        {
          question: "What should a full stack deployment include?",
          options: [
            "Frontend, backend, database, configuration, and security",
            "Only HTML",
            "Only CSS",
            "Only a local development server",
          ],
          answer:
            "Frontend, backend, database, configuration, and security",
        },
        {
          question: "What should be tested after deployment?",
          options: [
            "Important application flows and API communication",
            "Only the browser's zoom level",
            "Only CSS comments",
            "Only the local development server",
          ],
          answer:
            "Important application flows and API communication",
        },
        {
          question: "What is useful after releasing a deployment?",
          options: [
            "Monitoring logs and application health",
            "Deleting all logs",
            "Removing authentication",
            "Disabling HTTPS",
          ],
          answer: "Monitoring logs and application health",
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

function Deployment({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-deployment", subtopics);
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
    (topic) => topic.id === selectedSubtopic
  );

  const selectedTopic =
    selectedIndex >= 0 ? subtopics[selectedIndex] : null;

  const markComplete = (id) => {
    saveProgress(id);
  };

  const handleAnswer = (topicId, questionIndex, answer) => {
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

    const score = calculateQuizScore(topic);

    await saveQuizResult({
      subject: "Full Stack",
      role: "Full Stack Developer",
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

  const calculateQuizScore = (topic) => {
    return topic.lesson.quiz.reduce((score, question, index) => {
      const selectedAnswer =
        quizAnswers[`${topic.id}-${index}`];

      return score + (selectedAnswer === question.answer ? 1 : 0);
    }, 0);
  };

  const goToPreviousTopic = () => {
    if (selectedIndex > 0) {
      setSelectedSubtopic(subtopics[selectedIndex - 1].id);
    }
  };

  const goToNextTopic = () => {
    if (selectedIndex < subtopics.length - 1) {
      setSelectedSubtopic(subtopics[selectedIndex + 1].id);
    }
  };

  if (selectedTopic) {
    const topic = selectedTopic;

    const score = quizSubmitted[topic.id]
      ? calculateQuizScore(topic)
      : 0;

    const isFirstTopic = selectedIndex === 0;
    const isLastTopic =
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
            ← Back to Deployment
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
                {topic.icon} {topic.title}
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
                Topic {selectedIndex + 1} of {subtopics.length}
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
              {topic.lesson.overview}
            </p>

            {topic.lesson.sections.map((section, index) => (
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
            ))}

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
                {topic.lesson.mistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
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

              {topic.lesson.quiz.map((question, questionIndex) => {
                const selectedAnswer =
                  quizAnswers[`${topic.id}-${questionIndex}`];

                const options =
                  shuffledQuizOptions[topic.id][questionIndex];

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
                      {questionIndex + 1}. {question.question}
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
                              selectedAnswer === option
                                ? "#dbeafe"
                                : "white",
                            border: "1px solid #dbeafe",
                          }}
                        >
                          <input
                            type="radio"
                            name={`${topic.id}-${questionIndex}`}
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={() =>
                              handleAnswer(
                                topic.id,
                                questionIndex,
                                option
                              )
                            }
                          />

                          <span>{option}</span>
                        </label>
                      ))}
                    </div>

                    {quizSubmitted[topic.id] && (
                      <p
                        style={{
                          marginTop: "14px",
                          fontWeight: "600",
                          color:
                            selectedAnswer === question.answer
                              ? "#15803d"
                              : "#dc2626",
                        }}
                      >
                        {selectedAnswer === question.answer
                          ? "✅ Correct!"
                          : `❌ Incorrect. Correct answer: ${question.answer}`}
                      </p>
                    )}
                  </div>
                );
              })}

              <button
                onClick={() => submitQuiz(topic.id)}
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

              {quizSubmitted[topic.id] && (
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
                  🎯 Your Score: {score} / {topic.lesson.quiz.length}
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
                onClick={() => saveProgress(topic.id)}
                disabled={completed.includes(topic.id)}
                style={{
                  background: completed.includes(topic.id)
                    ? "#16a34a"
                    : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: completed.includes(topic.id)
                    ? "default"
                    : "pointer",
                }}
              >
                {completed.includes(topic.id)
                  ? "✅ Topic Completed"
                  : "✓ Mark Topic Complete"}
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
                onClick={goToPreviousTopic}
                disabled={isFirstTopic}
                style={{
                  background: isFirstTopic
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isFirstTopic ? "#9ca3af" : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isFirstTopic
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                ← Previous Topic
              </button>

              <button
                onClick={() => setSelectedSubtopic(null)}
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
                📚 Back to Topics
              </button>

              <button
                onClick={goToNextTopic}
                disabled={isLastTopic}
                style={{
                  background: isLastTopic
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isLastTopic ? "#9ca3af" : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isLastTopic
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                Next Topic →
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
              {completed.includes(topic.id)
                ? "✅ You have completed this topic."
                : "📖 Complete this topic when you are ready to continue."}
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
          🚀 Deployment
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn how to prepare, deploy, host and maintain
          full stack applications in production.
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
            {completedCount} of {subtopics.length} topics completed
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {subtopics.map((topic, index) => {
            const progress = completed.includes(topic.id) ? 100 : 0;

            return (
              <div
                key={topic.id}
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
                    {index + 1}. {topic.icon} {topic.title}
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
                    setSelectedSubtopic(topic.id)
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
                    ? "Review Topic →"
                    : "Open Topic →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Deployment;