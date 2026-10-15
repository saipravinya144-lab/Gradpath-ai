import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "backend-introduction",
    title: "Backend Development Introduction",
    icon: "🖥️",
    lesson: {
      overview:
        "Backend development focuses on the server-side part of an application. It handles business logic, databases, authentication, APIs, and communication between the frontend and server.",
      sections: [
        {
          title: "What is Backend Development?",
          points: [
            "The backend is the part of an application that runs mainly on the server.",
            "It processes requests received from the frontend.",
            "It performs business logic and communicates with databases and external services.",
            "The backend sends data or responses back to the frontend.",
          ],
        },
        {
          title: "Frontend vs Backend",
          points: [
            "Frontend is responsible for what users see and interact with.",
            "Backend handles server-side processing and application logic.",
            "Frontend commonly communicates with the backend through APIs.",
            "A full-stack application combines frontend and backend systems.",
          ],
        },
        {
          title: "Common Backend Responsibilities",
          points: [
            "Processing client requests.",
            "Managing users and authentication.",
            "Reading and writing database information.",
            "Validating incoming data.",
            "Providing APIs.",
            "Handling errors and security.",
          ],
        },
        {
          title: "Common Backend Technologies",
          points: [
            "Node.js allows JavaScript to run outside the browser.",
            "Express.js is a popular Node.js web framework.",
            "Databases store application data.",
            "REST APIs are commonly used for frontend-backend communication.",
          ],
        },
      ],
      mistakes: [
        "Do not assume the backend is only a database.",
        "Do not put sensitive secrets directly into frontend code.",
        "Do not trust data received from the client without validation.",
        "Do not ignore authentication and authorization when building protected features.",
      ],
      quiz: [
        {
          question: "What is the main responsibility of a backend?",
          options: [
            "Only designing buttons",
            "Server-side processing and application logic",
            "Only creating images",
            "Only writing HTML",
          ],
          answer: "Server-side processing and application logic",
        },
        {
          question: "How does a frontend commonly communicate with a backend?",
          options: ["APIs", "CSS", "Images", "Fonts"],
          answer: "APIs",
        },
        {
          question: "Which technology allows JavaScript to run outside the browser?",
          options: ["HTML", "Node.js", "CSS", "Figma"],
          answer: "Node.js",
        },
      ],
    },
  },

  {
    id: "nodejs",
    title: "Node.js",
    icon: "🟢",
    lesson: {
      overview:
        "Node.js is a JavaScript runtime that allows JavaScript to execute outside the browser. It is commonly used to build servers, APIs, command-line tools, and backend applications.",
      sections: [
        {
          title: "What is Node.js?",
          points: [
            "Node.js runs JavaScript using the V8 JavaScript engine.",
            "It allows JavaScript to be used for backend development.",
            "Node.js is commonly used for APIs and web servers.",
            "It provides built-in modules for working with files, networking, and other system operations.",
          ],
        },
        {
          title: "Node.js and NPM",
          points: [
            "NPM is commonly used to install Node.js packages.",
            "package.json describes a Node.js project.",
            "node_modules contains installed dependencies.",
            "npm scripts can be used to start development and production commands.",
          ],
        },
        {
          title: "Modules",
          points: [
            "Modules allow code to be organized into reusable pieces.",
            "Node.js provides built-in modules such as fs, path, and http.",
            "Applications can also use third-party packages.",
            "Modules help keep large applications organized.",
          ],
        },
        {
          title: "Asynchronous Programming",
          points: [
            "Node.js frequently uses asynchronous operations.",
            "Promises and async/await are commonly used to handle asynchronous work.",
            "Asynchronous programming is useful for operations such as database queries and file access.",
            "Proper error handling is important when working with asynchronous code.",
          ],
        },
      ],
      mistakes: [
        "Do not confuse Node.js with a programming language.",
        "Do not block the server with unnecessary long-running synchronous operations.",
        "Always handle errors from asynchronous operations.",
        "Keep dependencies updated and avoid unnecessary packages.",
      ],
      quiz: [
        {
          question: "What is Node.js?",
          options: [
            "A JavaScript runtime",
            "A database",
            "A CSS framework",
            "A browser",
          ],
          answer: "A JavaScript runtime",
        },
        {
          question: "Which package manager is commonly used with Node.js?",
          options: ["NPM", "Git", "Figma", "Chrome"],
          answer: "NPM",
        },
        {
          question: "Which syntax is commonly used for asynchronous operations in modern Node.js?",
          options: ["async/await", "HTML tags", "CSS selectors", "SQL tables"],
          answer: "async/await",
        },
      ],
    },
  },

  {
    id: "express",
    title: "Express.js",
    icon: "🚂",
    lesson: {
      overview:
        "Express.js is a lightweight web framework for Node.js that makes it easier to create servers, routes, APIs, and middleware.",
      sections: [
        {
          title: "What is Express.js?",
          points: [
            "Express.js is a web framework built for Node.js.",
            "It simplifies creating HTTP servers and APIs.",
            "It provides routing and middleware features.",
            "It is widely used for building REST APIs.",
          ],
        },
        {
          title: "Creating an Express Server",
          points: [
            "An Express application can be created using express().",
            "The server can listen on a specific port.",
            "Routes define how the application responds to requests.",
            "Middleware can process requests before they reach route handlers.",
          ],
        },
        {
          title: "Express Routes",
          points: [
            "Express supports HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
            "Each route can have a handler function.",
            "Routes can return JSON responses.",
            "Routes should be organized clearly as an application grows.",
          ],
        },
        {
          title: "Why Express is Useful",
          points: [
            "It reduces the amount of low-level HTTP code developers need to write.",
            "It provides a simple routing system.",
            "It supports reusable middleware.",
            "It works well with databases and frontend applications.",
          ],
        },
      ],
      mistakes: [
        "Do not forget to start the server with app.listen().",
        "Do not create every route inside one huge file.",
        "Do not send multiple responses for the same request.",
        "Use middleware and routers to keep the application organized.",
      ],
      quiz: [
        {
          question: "Express.js is built for which runtime?",
          options: ["Node.js", "Python", "Java", "PHP"],
          answer: "Node.js",
        },
        {
          question: "What is Express commonly used to build?",
          options: [
            "REST APIs and web servers",
            "Image files",
            "Operating systems",
            "Spreadsheets",
          ],
          answer: "REST APIs and web servers",
        },
        {
          question: "Which method is commonly used to start an Express server?",
          options: ["app.listen()", "app.startHTML()", "server.css()", "express.runPage()"],
          answer: "app.listen()",
        },
      ],
    },
  },

  {
    id: "server",
    title: "Servers & HTTP",
    icon: "🌐",
    lesson: {
      overview:
        "Servers receive requests from clients, process them, and return responses. HTTP defines the rules used for communication between clients and servers on the web.",
      sections: [
        {
          title: "What is a Server?",
          points: [
            "A server is a system that provides services or resources to clients.",
            "A web server receives HTTP requests and sends HTTP responses.",
            "Backend applications often run on servers.",
            "Servers can communicate with databases and other services.",
          ],
        },
        {
          title: "HTTP Request",
          points: [
            "An HTTP request is sent by a client to a server.",
            "A request contains information such as the HTTP method and URL.",
            "Requests can also contain headers, query parameters, and a body.",
            "The server processes the request and determines the appropriate response.",
          ],
        },
        {
          title: "HTTP Response",
          points: [
            "A response contains a status code, headers, and often a response body.",
            "200-level status codes generally represent successful operations.",
            "400-level status codes generally indicate client-side problems.",
            "500-level status codes generally indicate server-side problems.",
          ],
        },
        {
          title: "Common HTTP Methods",
          points: [
            "GET is commonly used to retrieve data.",
            "POST is commonly used to create data.",
            "PUT is commonly used to replace or update data.",
            "PATCH is commonly used for partial updates.",
            "DELETE is commonly used to remove data.",
          ],
        },
      ],
      mistakes: [
        "Do not use HTTP methods randomly; choose them according to the operation.",
        "Do not return a successful status code for every situation.",
        "Do not expose sensitive information in responses.",
        "Always validate and handle incoming requests properly.",
      ],
      quiz: [
        {
          question: "Which HTTP method is commonly used to retrieve data?",
          options: ["GET", "POST", "DELETE", "PATCH"],
          answer: "GET",
        },
        {
          question: "What does a 404 status generally indicate?",
          options: [
            "Resource not found",
            "Successful request",
            "Server started",
            "Database connected",
          ],
          answer: "Resource not found",
        },
        {
          question: "Which status-code range generally represents server errors?",
          options: ["100", "200", "400", "500"],
          answer: "500",
        },
      ],
    },
  },

  {
    id: "routing",
    title: "Routing",
    icon: "🛣️",
    lesson: {
      overview:
        "Routing determines how a backend application responds to requests for different URLs and HTTP methods.",
      sections: [
        {
          title: "What is Routing?",
          points: [
            "A route connects an HTTP method and URL pattern to application logic.",
            "Different routes can perform different operations.",
            "Routes are commonly used to create REST APIs.",
            "Express provides simple methods for defining routes.",
          ],
        },
        {
          title: "Route Parameters",
          points: [
            "Route parameters allow values to be included in a URL.",
            "For example, /users/:id can represent a specific user.",
            "Parameters can be accessed by the route handler.",
            "They are useful when working with resources identified by IDs.",
          ],
        },
        {
          title: "Query Parameters",
          points: [
            "Query parameters are values placed after ? in a URL.",
            "They are commonly used for filtering, searching, sorting, and pagination.",
            "Multiple query parameters can be combined.",
            "Query parameters should be validated before being used.",
          ],
        },
        {
          title: "Router Organization",
          points: [
            "Large applications can split routes into separate router modules.",
            "Routers can group related endpoints.",
            "A central application file can mount different routers.",
            "Good route organization improves maintainability.",
          ],
        },
      ],
      mistakes: [
        "Do not confuse route parameters with query parameters.",
        "Do not create unnecessarily complicated URL structures.",
        "Validate IDs and query parameters before using them.",
        "Keep related routes organized together.",
      ],
      quiz: [
        {
          question: "What does routing determine?",
          options: [
            "How requests are handled for different URLs and methods",
            "How CSS is displayed",
            "How images are compressed",
            "How databases are physically stored",
          ],
          answer: "How requests are handled for different URLs and methods",
        },
        {
          question: "Which is an example of a route parameter?",
          options: ["/users/:id", "/users?name=John", "/users.css", "#users"],
          answer: "/users/:id",
        },
        {
          question: "What are query parameters commonly useful for?",
          options: [
            "Filtering and searching",
            "Creating CSS",
            "Changing HTML tags",
            "Installing Node.js",
          ],
          answer: "Filtering and searching",
        },
      ],
    },
  },

  {
    id: "middleware",
    title: "Middleware",
    icon: "⚙️",
    lesson: {
      overview:
        "Middleware functions run during the request-response cycle and can inspect, modify, or control requests before the final response is sent.",
      sections: [
        {
          title: "What is Middleware?",
          points: [
            "Middleware is a function that runs between receiving a request and sending a response.",
            "Middleware can inspect request data.",
            "Middleware can modify request or response objects.",
            "Middleware can end the request or pass control to the next function.",
          ],
        },
        {
          title: "The next Function",
          points: [
            "Express middleware commonly receives req, res, and next.",
            "Calling next() passes control to the next middleware or route handler.",
            "If middleware neither sends a response nor calls next(), the request may remain pending.",
            "Middleware order matters.",
          ],
        },
        {
          title: "Common Middleware Uses",
          points: [
            "Logging requests.",
            "Parsing JSON request bodies.",
            "Authentication checks.",
            "Authorization checks.",
            "Input validation.",
            "Error handling.",
          ],
        },
        {
          title: "Application-Level Middleware",
          points: [
            "Middleware can be applied to an entire Express application.",
            "It can also be applied only to specific routes.",
            "Route-specific middleware is useful when only certain endpoints require a check.",
          ],
        },
      ],
      mistakes: [
        "Do not forget to call next() when middleware should continue the request.",
        "Do not put middleware in the wrong order.",
        "Do not perform expensive operations unnecessarily on every request.",
        "Do not assume middleware automatically protects every route.",
      ],
      quiz: [
        {
          question: "What does middleware participate in?",
          options: [
            "The request-response cycle",
            "Only database creation",
            "Only frontend rendering",
            "Only CSS processing",
          ],
          answer: "The request-response cycle",
        },
        {
          question: "Which function passes control to the next middleware?",
          options: ["next()", "continue()", "forward()", "route()"],
          answer: "next()",
        },
        {
          question: "Which is a common use of middleware?",
          options: [
            "Authentication checks",
            "Writing HTML automatically",
            "Creating images",
            "Formatting CSS",
          ],
          answer: "Authentication checks",
        },
      ],
    },
  },

  {
    id: "request-response",
    title: "Request & Response",
    icon: "📨",
    lesson: {
      overview:
        "Backend applications receive request information from clients and create appropriate responses. Understanding request and response data is essential for API development.",
      sections: [
        {
          title: "Request Object",
          points: [
            "The request object contains information sent by the client.",
            "It can contain parameters, query values, headers, and body data.",
            "The HTTP method indicates the type of operation being requested.",
            "Request data should be validated before processing.",
          ],
        },
        {
          title: "Request Body",
          points: [
            "The request body can contain data sent by the client.",
            "POST, PUT, and PATCH requests commonly contain bodies.",
            "JSON is widely used for API request bodies.",
            "The backend should validate the structure and values of incoming data.",
          ],
        },
        {
          title: "Response Object",
          points: [
            "The response object is used by the server to send data back to the client.",
            "Responses can contain status codes, headers, and body data.",
            "JSON responses are commonly used by REST APIs.",
            "A response should communicate the result clearly.",
          ],
        },
        {
          title: "Status Codes",
          points: [
            "200 indicates a successful request.",
            "201 is commonly used when a resource is successfully created.",
            "400 indicates invalid client input.",
            "401 indicates missing or invalid authentication.",
            "403 indicates that access is not allowed.",
            "404 indicates that the requested resource was not found.",
            "500 indicates a server-side error.",
          ],
        },
      ],
      mistakes: [
        "Do not trust request body data without validation.",
        "Do not return sensitive information unnecessarily.",
        "Use appropriate HTTP status codes.",
        "Do not send multiple responses for one request.",
      ],
      quiz: [
        {
          question: "Where is JSON data commonly sent in an API request?",
          options: ["Request body", "CSS file", "URL title", "HTML footer"],
          answer: "Request body",
        },
        {
          question: "Which status code commonly represents successful resource creation?",
          options: ["200", "201", "404", "500"],
          answer: "201",
        },
        {
          question: "Which status code commonly means the resource was not found?",
          options: ["201", "301", "404", "503"],
          answer: "404",
        },
      ],
    },
  },

  {
    id: "error-handling",
    title: "Error Handling",
    icon: "🚨",
    lesson: {
      overview:
        "Error handling allows backend applications to deal with unexpected situations safely and provide useful responses to clients.",
      sections: [
        {
          title: "Why Error Handling Matters",
          points: [
            "Errors are unavoidable in real applications.",
            "Databases, networks, user input, and external services can all fail.",
            "Good error handling prevents applications from crashing unexpectedly.",
            "Users should receive useful but safe error messages.",
          ],
        },
        {
          title: "Types of Errors",
          points: [
            "Validation errors happen when input does not meet requirements.",
            "Authentication errors happen when identity verification fails.",
            "Authorization errors happen when a user lacks permission.",
            "Database and server errors can occur because of infrastructure or application problems.",
          ],
        },
        {
          title: "Try/Catch",
          points: [
            "try/catch can handle errors from operations that may throw exceptions.",
            "Async functions can use try/catch with await.",
            "Errors should be logged appropriately for debugging.",
            "Sensitive internal details should not always be sent to clients.",
          ],
        },
        {
          title: "HTTP Error Responses",
          points: [
            "Return appropriate status codes when operations fail.",
            "400-level responses commonly indicate client-side problems.",
            "500-level responses commonly indicate server-side problems.",
            "A consistent error response structure makes frontend handling easier.",
          ],
        },
      ],
      mistakes: [
        "Do not expose stack traces or secrets to users in production.",
        "Do not silently ignore errors.",
        "Do not return 200 for every failed operation.",
        "Log enough information to diagnose errors without exposing sensitive data.",
      ],
      quiz: [
        {
          question: "Which JavaScript structure is commonly used to catch thrown errors?",
          options: ["try/catch", "if/html", "loop/error", "switch/catchonly"],
          answer: "try/catch",
        },
        {
          question: "Which status-code range commonly represents client errors?",
          options: ["100", "200", "400", "500"],
          answer: "400",
        },
        {
          question: "Should sensitive internal error details normally be exposed to users?",
          options: ["Yes, always", "No", "Only in CSS", "Only on mobile"],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "environment",
    title: "Environment Variables",
    icon: "🔑",
    lesson: {
      overview:
        "Environment variables allow applications to configure values outside the source code, such as ports, database connection settings, and service configuration.",
      sections: [
        {
          title: "What are Environment Variables?",
          points: [
            "Environment variables store configuration values outside application code.",
            "They can change between development, testing, and production environments.",
            "They are commonly used for configuration such as ports and service URLs.",
            "Backend applications can access environment variables through the runtime environment.",
          ],
        },
        {
          title: "Secrets and Credentials",
          points: [
            "API keys, database passwords, and private credentials should not be hard-coded into source code.",
            "Environment variables can help keep configuration separate from code.",
            "Secret values should be managed securely in production.",
            "Never commit real secrets to a public repository.",
          ],
        },
        {
          title: ".env Files",
          points: [
            ".env files are commonly used during local development.",
            "A project can use different environment configurations for different environments.",
            ".env files containing secrets should generally be excluded from Git.",
            "A safe example configuration can be documented separately.",
          ],
        },
        {
          title: "Configuration Best Practices",
          points: [
            "Use clear variable names.",
            "Validate required environment variables when the application starts.",
            "Keep secrets outside the source repository.",
            "Use the hosting platform's secret or environment-variable management for production.",
          ],
        },
      ],
      mistakes: [
        "Never commit real API keys or passwords to Git.",
        "Do not assume environment variables are automatically available everywhere.",
        "Do not expose backend secrets to frontend code.",
        "Use different configuration values where environments require them.",
      ],
      quiz: [
        {
          question: "What are environment variables commonly used for?",
          options: [
            "Application configuration",
            "Writing HTML",
            "Creating CSS animations",
            "Drawing images",
          ],
          answer: "Application configuration",
        },
        {
          question: "Should real API secrets be committed to a public Git repository?",
          options: ["Yes", "No", "Only on weekends", "Only in CSS"],
          answer: "No",
        },
        {
          question: "What is a common local-development file for environment configuration?",
          options: [".env", "index.html", "style.css", "README.png"],
          answer: ".env",
        },
      ],
    },
  },

  {
    id: "file-handling",
    title: "File Handling",
    icon: "📁",
    lesson: {
      overview:
        "Backend applications often need to read, write, upload, validate, and manage files. File handling must be implemented carefully to avoid security and performance problems.",
      sections: [
        {
          title: "Reading and Writing Files",
          points: [
            "Node.js provides the fs module for file-system operations.",
            "Applications can read files from the server's file system.",
            "Applications can create or update files when required.",
            "Asynchronous file operations are generally preferred for server applications.",
          ],
        },
        {
          title: "File Uploads",
          points: [
            "File upload APIs receive files from clients.",
            "Uploaded files may be images, documents, or other supported formats.",
            "Backend applications should validate uploaded files.",
            "Upload size limits should be applied.",
          ],
        },
        {
          title: "File Validation",
          points: [
            "Validate file type and size.",
            "Do not rely only on the filename extension.",
            "Generate safe server-side filenames where appropriate.",
            "Store files in appropriate locations or external storage services.",
          ],
        },
        {
          title: "Security Considerations",
          points: [
            "Never blindly trust uploaded files.",
            "Prevent users from accessing arbitrary server files.",
            "Restrict file types and sizes.",
            "Consider malware scanning for sensitive applications.",
          ],
        },
      ],
      mistakes: [
        "Do not allow unlimited file uploads.",
        "Do not trust filenames supplied by users.",
        "Do not allow arbitrary file paths from user input.",
        "Do not serve sensitive server files publicly.",
      ],
      quiz: [
        {
          question: "Which Node.js module is commonly used for file-system operations?",
          options: ["fs", "httpcss", "database", "browser"],
          answer: "fs",
        },
        {
          question: "What should be checked when accepting file uploads?",
          options: [
            "File type and size",
            "Only the filename",
            "Only the color",
            "Only the screen size",
          ],
          answer: "File type and size",
        },
        {
          question: "Should a backend blindly trust uploaded files?",
          options: ["Yes", "No", "Only images", "Only PDFs"],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "backend-architecture",
    title: "Backend Architecture",
    icon: "🏗️",
    lesson: {
      overview:
        "Backend architecture defines how server-side code is organized so that an application remains maintainable, testable, scalable, and secure.",
      sections: [
        {
          title: "Why Architecture Matters",
          points: [
            "Small applications can become difficult to maintain as they grow.",
            "Architecture separates responsibilities between different parts of the backend.",
            "Good structure makes debugging and testing easier.",
            "Clear organization helps teams work on different parts of an application.",
          ],
        },
        {
          title: "Common Layers",
          points: [
            "Routes define API endpoints.",
            "Controllers handle request-related logic.",
            "Services contain business logic.",
            "Models handle data-related operations.",
            "Middleware handles reusable request-processing logic.",
          ],
        },
        {
          title: "Separation of Concerns",
          points: [
            "Each part of the application should have a clear responsibility.",
            "Avoid putting database logic, business logic, and routing into one huge file.",
            "Reusable logic should be placed in appropriate modules.",
            "Clear separation makes future changes easier.",
          ],
        },
        {
          title: "Scalable Structure",
          points: [
            "Group related files logically.",
            "Use consistent naming conventions.",
            "Keep configuration separate from application logic.",
            "Use reusable services and utilities when appropriate.",
          ],
        },
      ],
      mistakes: [
        "Do not put the entire backend into one file.",
        "Do not mix unrelated responsibilities unnecessarily.",
        "Avoid duplicating the same business logic across many routes.",
        "Do not create unnecessary layers without a reason.",
      ],
      quiz: [
        {
          question: "What is a major benefit of good backend architecture?",
          options: [
            "Better maintainability",
            "More CSS colors",
            "Larger images",
            "Faster typing",
          ],
          answer: "Better maintainability",
        },
        {
          question: "Which layer commonly defines API endpoints?",
          options: ["Routes", "Images", "CSS", "Fonts"],
          answer: "Routes",
        },
        {
          question: "What principle means separating different responsibilities?",
          options: [
            "Separation of concerns",
            "Random coding",
            "Single styling",
            "Browser rendering",
          ],
          answer: "Separation of concerns",
        },
      ],
    },
  },

  {
    id: "backend-projects",
    title: "Backend Projects",
    icon: "💻",
    lesson: {
      overview:
        "Backend projects help you combine Node.js, Express, routing, middleware, validation, databases, authentication, and error handling into practical applications.",
      sections: [
        {
          title: "Project 1: REST API",
          points: [
            "Build a simple REST API for managing resources.",
            "Implement GET, POST, PUT/PATCH, and DELETE operations.",
            "Use appropriate HTTP status codes.",
            "Validate incoming data.",
          ],
        },
        {
          title: "Project 2: Authentication API",
          points: [
            "Create registration and login endpoints.",
            "Validate user credentials.",
            "Implement authentication using an appropriate token or session strategy.",
            "Protect private routes.",
          ],
        },
        {
          title: "Project 3: File Upload API",
          points: [
            "Create an endpoint for uploading files.",
            "Validate file type and size.",
            "Store files safely.",
            "Return useful information about successful uploads.",
          ],
        },
        {
          title: "Project 4: Full Backend Application",
          points: [
            "Combine routing, middleware, validation, database operations, and authentication.",
            "Organize the project into logical modules.",
            "Implement centralized error handling.",
            "Test the API using tools such as Postman or a frontend client.",
          ],
        },
      ],
      mistakes: [
        "Do not build projects without validating input.",
        "Do not store passwords as plain text.",
        "Do not expose secret configuration values.",
        "Do not skip error handling and testing.",
        "Keep the project structure organized as features are added.",
      ],
      quiz: [
        {
          question: "Which project is useful for practicing CRUD operations?",
          options: [
            "REST API",
            "CSS animation",
            "HTML portfolio only",
            "Image editor",
          ],
          answer: "REST API",
        },
        {
          question: "What should be implemented for private API routes?",
          options: [
            "Authentication and authorization",
            "Only CSS",
            "Only HTML",
            "Only images",
          ],
          answer: "Authentication and authorization",
        },
        {
          question: "What is important when building a real backend project?",
          options: [
            "Validation, error handling, and testing",
            "Only changing colors",
            "Only adding animations",
            "Only creating HTML",
          ],
          answer: "Validation, error handling, and testing",
        },
      ],
    },
  },
];

function Backend({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-backend", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});

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
            ← Back to Backend
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
                      {question.options.map((option) => (
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

            {/* PREVIOUS / BACK / NEXT */}

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
          🖥️ Backend
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn server-side development, APIs, Node.js,
          Express.js and backend architecture.
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

export default Backend;