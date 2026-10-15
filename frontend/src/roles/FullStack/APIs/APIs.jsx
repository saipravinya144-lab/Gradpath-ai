import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "api-introduction",
    title: "API Introduction",
    icon: "🔗",
    lesson: {
      overview:
        "An API (Application Programming Interface) is a way for different software components to communicate with each other. APIs allow applications to request data or services from another application or server.",
      sections: [
        {
          title: "What is an API?",
          points: [
            "API stands for Application Programming Interface.",
            "An API defines how different software components can communicate.",
            "APIs allow one application to request data or functionality from another system.",
            "Web APIs commonly communicate over HTTP.",
          ],
        },
        {
          title: "Why APIs Are Important",
          points: [
            "Frontend applications can use APIs to communicate with backend servers.",
            "APIs allow different applications and services to work together.",
            "They separate the client interface from backend logic.",
            "APIs make it possible to reuse backend functionality across different clients.",
          ],
        },
        {
          title: "Client and Server",
          points: [
            "A client sends a request to a server.",
            "The server processes the request.",
            "The server sends a response back to the client.",
            "The response may contain data, status information, or an error.",
          ],
        },
        {
          title: "Example",
          points: [
            "A weather application can request weather information from a weather API.",
            "The application sends a request containing the required information.",
            "The API processes the request and returns data.",
            "The frontend displays the returned information to the user.",
          ],
        },
      ],
      mistakes: [
        "Do not think an API is only a user interface.",
        "Do not expose sensitive credentials in frontend code.",
        "Understand what data an API expects before sending requests.",
        "Always handle possible API errors.",
      ],
      quiz: [
        {
          question: "What does API stand for?",
          options: [
            "Application Programming Interface",
            "Application Processing Internet",
            "Advanced Programming Integration",
            "Automated Program Instruction",
          ],
          answer: "Application Programming Interface",
        },
        {
          question: "What commonly communicates with a backend API?",
          options: [
            "Client application",
            "CSS stylesheet",
            "Image file",
            "Keyboard driver",
          ],
          answer: "Client application",
        },
        {
          question: "What does a server normally send after processing an API request?",
          options: [
            "A response",
            "A CSS selector",
            "A keyboard command",
            "A browser extension",
          ],
          answer: "A response",
        },
      ],
    },
  },

  {
    id: "rest-api",
    title: "REST APIs",
    icon: "🌐",
    lesson: {
      overview:
        "REST is an architectural style commonly used for designing web APIs. REST APIs expose resources through URLs and use standard HTTP methods to operate on those resources.",
      sections: [
        {
          title: "What is REST?",
          points: [
            "REST stands for Representational State Transfer.",
            "REST is an architectural style for designing networked applications.",
            "REST APIs commonly use HTTP.",
            "Resources are identified using URLs.",
          ],
        },
        {
          title: "Resources",
          points: [
            "A resource represents something that an application manages.",
            "Examples include users, products, orders, and courses.",
            "A URL can identify a particular resource or collection.",
            "For example, /users can represent a collection of users.",
          ],
        },
        {
          title: "Stateless Communication",
          points: [
            "REST APIs are designed around stateless requests.",
            "Each request should contain the information needed to process it.",
            "The server does not rely on previous requests to understand the current request.",
            "Statelessness can make APIs easier to scale.",
          ],
        },
        {
          title: "REST API Example",
          points: [
            "GET /users can retrieve users.",
            "GET /users/10 can retrieve a particular user.",
            "POST /users can create a user.",
            "DELETE /users/10 can remove a particular user.",
          ],
        },
      ],
      mistakes: [
        "Do not use HTTP methods randomly.",
        "Do not design URLs without considering the resources they represent.",
        "Do not assume REST means every API must look exactly the same.",
        "Understand the difference between a resource and an action.",
      ],
      quiz: [
        {
          question: "What does REST stand for?",
          options: [
            "Representational State Transfer",
            "Remote Execution State Technology",
            "Resource Execution Service Transfer",
            "Representational Server Transaction",
          ],
          answer: "Representational State Transfer",
        },
        {
          question: "In a REST API, what commonly identifies a resource?",
          options: [
            "URL",
            "CSS class",
            "File extension",
            "Browser tab",
          ],
          answer: "URL",
        },
        {
          question: "What is a characteristic of RESTful communication?",
          options: [
            "Stateless requests",
            "CSS-dependent requests",
            "Browser-only requests",
            "Requests requiring previous page styles",
          ],
          answer: "Stateless requests",
        },
      ],
    },
  },

  {
    id: "http-methods",
    title: "HTTP Methods",
    icon: "📡",
    lesson: {
      overview:
        "HTTP methods describe the intended operation of an HTTP request. REST APIs commonly use GET, POST, PUT, PATCH, and DELETE.",
      sections: [
        {
          title: "GET",
          points: [
            "GET is commonly used to retrieve data.",
            "GET requests should generally not be used to modify server data.",
            "A GET request can retrieve a collection or a specific resource.",
          ],
        },
        {
          title: "POST",
          points: [
            "POST is commonly used to submit data and create a new resource.",
            "The request body can contain the data being submitted.",
            "POST requests can cause a change on the server.",
          ],
        },
        {
          title: "PUT and PATCH",
          points: [
            "PUT is commonly used to replace a resource with a new representation.",
            "PATCH is commonly used for partial updates.",
            "The exact behavior can depend on the API design.",
          ],
        },
        {
          title: "DELETE",
          points: [
            "DELETE is used to request removal of a resource.",
            "For example, DELETE /users/10 can request deletion of user 10.",
            "Applications should authorize destructive operations carefully.",
          ],
        },
      ],
      mistakes: [
        "Do not use GET when you need to create or modify data.",
        "Do not confuse PUT with PATCH.",
        "Do not assume DELETE should be available to every user.",
        "Choose methods based on the intended operation.",
      ],
      quiz: [
        {
          question: "Which HTTP method is commonly used to retrieve data?",
          options: ["GET", "POST", "DELETE", "PATCH"],
          answer: "GET",
        },
        {
          question: "Which HTTP method is commonly used to create a new resource?",
          options: ["POST", "GET", "DELETE", "OPTIONS"],
          answer: "POST",
        },
        {
          question: "Which method is commonly associated with partial updates?",
          options: ["PATCH", "GET", "DELETE", "HEAD"],
          answer: "PATCH",
        },
      ],
    },
  },

  {
    id: "status-codes",
    title: "HTTP Status Codes",
    icon: "📊",
    lesson: {
      overview:
        "HTTP status codes communicate the result of an HTTP request. They help clients understand whether a request succeeded, failed, or requires further action.",
      sections: [
        {
          title: "2xx Success",
          points: [
            "2xx status codes indicate successful processing.",
            "200 OK commonly indicates a successful request.",
            "201 Created commonly indicates that a resource was created.",
            "204 No Content indicates successful processing without a response body.",
          ],
        },
        {
          title: "3xx Redirection",
          points: [
            "3xx status codes are related to redirection.",
            "They can indicate that additional action is needed to complete a request.",
            "Clients and browsers can handle many redirects automatically.",
          ],
        },
        {
          title: "4xx Client Errors",
          points: [
            "4xx status codes indicate an error associated with the request.",
            "400 Bad Request indicates that the request is invalid.",
            "401 Unauthorized commonly indicates that authentication is required or has failed.",
            "403 Forbidden indicates that access is not allowed.",
            "404 Not Found indicates that the requested resource was not found.",
          ],
        },
        {
          title: "5xx Server Errors",
          points: [
            "5xx status codes indicate a server-side failure.",
            "500 Internal Server Error is a common server error.",
            "502 Bad Gateway can indicate an invalid response from an upstream server.",
            "503 Service Unavailable indicates that the server is currently unable to handle the request.",
          ],
        },
      ],
      mistakes: [
        "Do not treat every failed request as a 500 error.",
        "Understand the difference between 401 and 403.",
        "Do not ignore status codes when handling API responses.",
        "Return meaningful status codes from backend APIs.",
      ],
      quiz: [
        {
          question: "What does HTTP status code 200 commonly indicate?",
          options: [
            "Successful request",
            "Resource not found",
            "Server failure",
            "Authentication required",
          ],
          answer: "Successful request",
        },
        {
          question: "What does HTTP status code 404 commonly indicate?",
          options: [
            "Resource not found",
            "Request succeeded",
            "Server started",
            "Resource created",
          ],
          answer: "Resource not found",
        },
        {
          question: "Which status code commonly represents an internal server error?",
          options: ["500", "200", "201", "404"],
          answer: "500",
        },
      ],
    },
  },

  {
    id: "json",
    title: "JSON & Data Exchange",
    icon: "📄",
    lesson: {
      overview:
        "JSON (JavaScript Object Notation) is a lightweight text format commonly used to exchange structured data between clients and servers.",
      sections: [
        {
          title: "What is JSON?",
          points: [
            "JSON stands for JavaScript Object Notation.",
            "JSON represents structured data using objects and arrays.",
            "JSON is commonly used in web APIs.",
            "JSON is text-based and can be processed by many programming languages.",
          ],
        },
        {
          title: "JSON Objects",
          points: [
            "JSON objects contain key-value pairs.",
            "Keys are written as strings.",
            "Values can be strings, numbers, booleans, arrays, objects, or null.",
            "Example data can represent a user with fields such as name and email.",
          ],
        },
        {
          title: "JSON Arrays",
          points: [
            "JSON arrays represent ordered collections of values.",
            "An array can contain multiple objects.",
            "APIs commonly return arrays when multiple resources are requested.",
            "Clients can iterate over returned arrays to display data.",
          ],
        },
        {
          title: "JSON in APIs",
          points: [
            "A server can return JSON in an API response.",
            "A client can send JSON in an API request body.",
            "The Content-Type header commonly identifies JSON request bodies.",
            "Applications should validate incoming data before using it.",
          ],
        },
      ],
      mistakes: [
        "Do not confuse JSON with JavaScript objects in every context.",
        "Remember that JSON property names use double quotes.",
        "Do not assume every API returns JSON.",
        "Validate API data before trusting it.",
      ],
      quiz: [
        {
          question: "What does JSON stand for?",
          options: [
            "JavaScript Object Notation",
            "Java Source Object Network",
            "JavaScript Online Node",
            "JSON Object Network",
          ],
          answer: "JavaScript Object Notation",
        },
        {
          question: "Which is commonly used to represent an ordered collection in JSON?",
          options: ["Array", "Function", "CSS rule", "HTML tag"],
          answer: "Array",
        },
        {
          question: "What type of data format is JSON?",
          options: [
            "Text-based structured data format",
            "CSS styling format",
            "Binary image format",
            "Programming language",
          ],
          answer: "Text-based structured data format",
        },
      ],
    },
  },

  {
    id: "api-requests",
    title: "Making API Requests",
    icon: "📤",
    lesson: {
      overview:
        "Frontend and backend applications can make HTTP requests to APIs. Understanding URLs, methods, headers, query parameters, and request bodies is essential for working with APIs.",
      sections: [
        {
          title: "Request URL",
          points: [
            "The URL identifies the API endpoint being requested.",
            "Different endpoints can represent different resources.",
            "Query parameters can provide additional request information.",
            "URLs should be constructed carefully.",
          ],
        },
        {
          title: "Headers",
          points: [
            "HTTP headers provide additional information about a request.",
            "Content-Type can describe the format of the request body.",
            "Authorization headers can carry authentication information when an API requires it.",
            "Headers should not expose sensitive information unnecessarily.",
          ],
        },
        {
          title: "Request Body",
          points: [
            "A request body can contain data sent to the server.",
            "POST, PUT, and PATCH commonly use request bodies.",
            "JSON is frequently used as the request body format.",
            "The server should validate received data.",
          ],
        },
        {
          title: "JavaScript Example",
          points: [
            "The fetch() function can make HTTP requests from JavaScript.",
            "The method option can specify GET, POST, PUT, PATCH, or DELETE.",
            "The body option can contain serialized JSON data.",
            "The response should be checked before using returned data.",
          ],
        },
      ],
      mistakes: [
        "Do not send sensitive data without appropriate protection.",
        "Do not forget required headers.",
        "Do not assume every request succeeds.",
        "Do not send invalid data without validation.",
      ],
      quiz: [
        {
          question: "Which JavaScript function is commonly used to make HTTP requests?",
          options: ["fetch()", "render()", "style()", "compile()"],
          answer: "fetch()",
        },
        {
          question: "Where is JSON request data commonly placed for a POST request?",
          options: [
            "Request body",
            "CSS selector",
            "HTML title",
            "Browser history",
          ],
          answer: "Request body",
        },
        {
          question: "What can query parameters provide?",
          options: [
            "Additional request information",
            "CSS animations",
            "JavaScript compilation",
            "Operating system settings",
          ],
          answer: "Additional request information",
        },
      ],
    },
  },

  {
    id: "api-responses",
    title: "Handling API Responses",
    icon: "📥",
    lesson: {
      overview:
        "Handling API responses correctly means checking the response status, processing returned data, and displaying or handling errors appropriately.",
      sections: [
        {
          title: "Checking the Response",
          points: [
            "An API request can succeed or fail.",
            "The response status should be considered before treating the request as successful.",
            "With fetch(), response.ok indicates whether the HTTP status is in the successful range.",
            "Applications should handle unexpected responses gracefully.",
          ],
        },
        {
          title: "Reading JSON",
          points: [
            "The response.json() method can parse a JSON response body.",
            "Parsing is asynchronous and normally returns a Promise.",
            "The resulting object or array can then be used by the application.",
          ],
        },
        {
          title: "Error Handling",
          points: [
            "Network errors and HTTP errors should be handled appropriately.",
            "An application can show a useful message when an API request fails.",
            "The UI should avoid displaying undefined or incomplete data.",
            "Errors can be logged for debugging when appropriate.",
          ],
        },
        {
          title: "Loading States",
          points: [
            "API requests can take time to complete.",
            "A loading indicator can improve the user experience.",
            "The loading state should end after the request completes or fails.",
            "Empty and error states should also be considered.",
          ],
        },
      ],
      mistakes: [
        "Do not assume fetch() automatically rejects for every HTTP error status.",
        "Do not try to display data before it has been received.",
        "Do not ignore loading and error states.",
        "Do not expose internal server error details unnecessarily.",
      ],
      quiz: [
        {
          question: "What does response.json() commonly do?",
          options: [
            "Parses a JSON response body",
            "Sends a CSS request",
            "Creates a database",
            "Deletes a server",
          ],
          answer: "Parses a JSON response body",
        },
        {
          question: "What does response.ok indicate in fetch?",
          options: [
            "The HTTP response has a successful status",
            "The request contains CSS",
            "The database is connected",
            "The browser is online",
          ],
          answer: "The HTTP response has a successful status",
        },
        {
          question: "Why is a loading state useful during an API request?",
          options: [
            "It communicates that data is still being retrieved",
            "It permanently stores the API response",
            "It changes the HTTP method",
            "It creates a database table",
          ],
          answer: "It communicates that data is still being retrieved",
        },
      ],
    },
  },

  {
    id: "api-testing",
    title: "API Testing",
    icon: "🧪",
    lesson: {
      overview:
        "API testing verifies that endpoints behave correctly under different conditions. Testing can check status codes, response data, validation, authentication, and error handling.",
      sections: [
        {
          title: "Why Test APIs?",
          points: [
            "API tests verify that endpoints behave as expected.",
            "Testing helps detect bugs before deployment.",
            "Tests can verify both successful and failed requests.",
            "API testing is useful for backend development and maintenance.",
          ],
        },
        {
          title: "What to Test",
          points: [
            "Test HTTP methods and endpoint behavior.",
            "Test valid and invalid input.",
            "Test expected status codes.",
            "Test response structure and returned data.",
            "Test authentication and authorization when required.",
          ],
        },
        {
          title: "API Testing Tools",
          points: [
            "Postman is commonly used to manually test APIs.",
            "Insomnia is another API client.",
            "Automated tests can be written using testing frameworks.",
            "Browser developer tools can also help inspect network requests.",
          ],
        },
        {
          title: "Testing Edge Cases",
          points: [
            "Test missing required fields.",
            "Test invalid data types and values.",
            "Test requests for resources that do not exist.",
            "Test unauthorized and forbidden requests.",
          ],
        },
      ],
      mistakes: [
        "Do not test only successful requests.",
        "Do not ignore validation failures.",
        "Do not assume an endpoint works just because one request succeeded.",
        "Include authentication and authorization cases where applicable.",
      ],
      quiz: [
        {
          question: "What is one purpose of API testing?",
          options: [
            "Verify endpoint behavior",
            "Design CSS animations",
            "Create HTML layouts",
            "Change monitor resolution",
          ],
          answer: "Verify endpoint behavior",
        },
        {
          question: "Which tool is commonly used for manual API testing?",
          options: ["Postman", "Photoshop", "Excel", "PowerPoint"],
          answer: "Postman",
        },
        {
          question: "What should API testing include besides successful requests?",
          options: [
            "Invalid and error cases",
            "Only successful requests",
            "Only CSS rendering",
            "Only page navigation",
          ],
          answer: "Invalid and error cases",
        },
      ],
    },
  },

  {
    id: "api-projects",
    title: "API Projects",
    icon: "💻",
    lesson: {
      overview:
        "API projects combine endpoint design, HTTP methods, data exchange, validation, error handling, authentication, and frontend integration into practical applications.",
      sections: [
        {
          title: "Project 1: Todo API",
          points: [
            "Create endpoints for todo items.",
            "Implement create, read, update, and delete operations.",
            "Use appropriate HTTP methods.",
            "Return meaningful status codes.",
          ],
        },
        {
          title: "Project 2: Student API",
          points: [
            "Create endpoints for students and courses.",
            "Implement CRUD operations.",
            "Validate incoming student data.",
            "Handle missing and invalid resources.",
          ],
        },
        {
          title: "Project 3: Product API",
          points: [
            "Create endpoints for products.",
            "Support product creation and updates.",
            "Add filtering or search using query parameters.",
            "Connect the API to a database.",
          ],
        },
        {
          title: "Project 4: Full Stack API Application",
          points: [
            "Build a backend API with Express.",
            "Connect the API to a database.",
            "Create a React frontend that consumes the API.",
            "Implement loading, error, validation, and authentication states.",
          ],
        },
      ],
      mistakes: [
        "Do not build endpoints without planning the resource structure.",
        "Do not skip validation.",
        "Do not return inconsistent response formats.",
        "Do not expose sensitive credentials.",
        "Test both successful and unsuccessful API requests.",
      ],
      quiz: [
        {
          question: "Which project is useful for practicing CRUD through an API?",
          options: [
            "Todo API",
            "CSS animation",
            "Image editor",
            "HTML-only page",
          ],
          answer: "Todo API",
        },
        {
          question: "What can query parameters be used for in a product API?",
          options: [
            "Filtering or searching",
            "Changing CSS colors",
            "Compiling React",
            "Creating browser tabs",
          ],
          answer: "Filtering or searching",
        },
        {
          question: "What can a React frontend use to communicate with a backend API?",
          options: [
            "HTTP requests",
            "CSS selectors",
            "HTML comments",
            "Image compression",
          ],
          answer: "HTTP requests",
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

function APIs({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-apis", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});

  /*
    Shuffle every question once when the component loads.
    The correct answer is checked by its actual text,
    so changing its position does not affect scoring.
  */
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
            ← Back to APIs
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
          🔗 APIs
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn how applications communicate with servers
          and exchange data using APIs.
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

export default APIs;