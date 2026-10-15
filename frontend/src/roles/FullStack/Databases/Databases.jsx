import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "database-introduction",
    title: "Database Introduction",
    icon: "🗄️",
    lesson: {
      overview:
        "A database is an organized system for storing, managing, and retrieving data. Modern applications use databases to persist information such as users, products, orders, messages, and other application data.",
      sections: [
        {
          title: "What is a Database?",
          points: [
            "A database stores structured or unstructured information.",
            "Applications use databases to persist data beyond the lifetime of a single request.",
            "Databases provide ways to create, read, update, and delete information.",
            "Database systems help applications efficiently manage large amounts of data.",
          ],
        },
        {
          title: "Database Management System",
          points: [
            "A Database Management System (DBMS) is software used to manage databases.",
            "A DBMS provides mechanisms for storing, retrieving, updating, and organizing data.",
            "Examples include MySQL, PostgreSQL, MongoDB, and other database systems.",
            "The DBMS also handles important concerns such as access control and data integrity.",
          ],
        },
        {
          title: "Why Applications Need Databases",
          points: [
            "User accounts and profiles need persistent storage.",
            "E-commerce applications store products and orders.",
            "Social applications store posts, comments, and relationships.",
            "Analytics applications store information that can later be queried and analyzed.",
          ],
        },
        {
          title: "Basic Database Operations",
          points: [
            "Create adds new information.",
            "Read retrieves existing information.",
            "Update changes existing information.",
            "Delete removes information.",
            "These operations are commonly referred to as CRUD.",
          ],
        },
      ],
      mistakes: [
        "Do not treat a database as simply a collection of random files.",
        "Do not store important application data only in frontend state.",
        "Do not allow every part of the application to access the database without proper control.",
        "Plan how data will be stored before creating large features.",
      ],
      quiz: [
        {
          question: "What is the main purpose of a database?",
          options: [
            "Store and manage data",
            "Design CSS",
            "Create animations",
            "Compile JavaScript",
          ],
          answer: "Store and manage data",
        },
        {
          question: "What does DBMS stand for?",
          options: [
            "Database Management System",
            "Data Browser Management Service",
            "Database Memory Storage",
            "Dynamic Backend Management System",
          ],
          answer: "Database Management System",
        },
        {
          question: "Which set represents CRUD operations?",
          options: [
            "Create, Read, Update, Delete",
            "Copy, Run, Upload, Download",
            "Create, Render, Use, Deploy",
            "Compile, Read, Undo, Debug",
          ],
          answer: "Create, Read, Update, Delete",
        },
      ],
    },
  },

  {
    id: "sql-vs-nosql",
    title: "SQL vs NoSQL",
    icon: "⚖️",
    lesson: {
      overview:
        "SQL and NoSQL represent different approaches to storing and querying data. Choosing between them depends on the application's data model, consistency requirements, scalability needs, and access patterns.",
      sections: [
        {
          title: "SQL Databases",
          points: [
            "SQL databases are commonly relational databases.",
            "Data is usually organized into tables containing rows and columns.",
            "SQL is used to query and manipulate relational data.",
            "Relationships between tables can be represented using keys.",
          ],
        },
        {
          title: "NoSQL Databases",
          points: [
            "NoSQL databases use models other than traditional relational tables.",
            "Document databases commonly store JSON-like documents.",
            "NoSQL systems can be useful when data structures are flexible.",
            "Different NoSQL databases support different models such as documents, key-value pairs, graphs, or wide columns.",
          ],
        },
        {
          title: "Choosing Between SQL and NoSQL",
          points: [
            "Use cases should determine the database choice rather than popularity alone.",
            "Relational databases are useful when relationships and structured schemas are important.",
            "Document databases can be useful when application data naturally fits a document model.",
            "Consider consistency, querying requirements, scalability, team expertise, and operational needs.",
          ],
        },
        {
          title: "Important Difference",
          points: [
            "SQL and NoSQL are not simply 'old' versus 'new' technologies.",
            "Both approaches are widely used in modern applications.",
            "Some applications even use more than one type of database.",
          ],
        },
      ],
      mistakes: [
        "Do not assume NoSQL is always faster than SQL.",
        "Do not choose a database only because it is popular.",
        "Do not assume SQL databases cannot scale.",
        "Understand the application's data and query requirements first.",
      ],
      quiz: [
        {
          question: "What is a common structure used by relational SQL databases?",
          options: ["Tables", "Only images", "Only text files", "Browser tabs"],
          answer: "Tables",
        },
        {
          question:
            "Which is commonly associated with document-oriented NoSQL databases?",
          options: [
            "JSON-like documents",
            "Only spreadsheets",
            "CSS selectors",
            "HTML elements",
          ],
          answer: "JSON-like documents",
        },
        {
          question: "What should primarily influence database selection?",
          options: [
            "Application requirements",
            "Logo color",
            "Keyboard type",
            "Screen resolution",
          ],
          answer: "Application requirements",
        },
      ],
    },
  },

  {
    id: "relational-databases",
    title: "Relational Databases",
    icon: "🔗",
    lesson: {
      overview:
        "Relational databases organize data into related tables. They use rows, columns, keys, and constraints to maintain structured and consistent information.",
      sections: [
        {
          title: "Tables, Rows & Columns",
          points: [
            "A table represents a particular type of data or entity.",
            "Rows represent individual records.",
            "Columns represent attributes of those records.",
            "Each column normally has a defined data type.",
          ],
        },
        {
          title: "Primary Keys",
          points: [
            "A primary key uniquely identifies a record.",
            "A primary key should uniquely identify each row.",
            "IDs are commonly used as primary keys.",
            "Primary keys are useful when connecting records across tables.",
          ],
        },
        {
          title: "Foreign Keys",
          points: [
            "A foreign key references a key in another table.",
            "Foreign keys are commonly used to establish relationships.",
            "They help maintain referential integrity.",
            "For example, an orders table can reference a customer ID.",
          ],
        },
        {
          title: "Constraints",
          points: [
            "Constraints help ensure that stored data follows defined rules.",
            "NOT NULL prevents a column from containing NULL values.",
            "UNIQUE prevents duplicate values where required.",
            "PRIMARY KEY uniquely identifies records.",
            "FOREIGN KEY maintains relationships between tables.",
          ],
        },
      ],
      mistakes: [
        "Do not use duplicate values as a primary key.",
        "Do not create relationships without considering data integrity.",
        "Do not ignore appropriate constraints.",
        "Choose suitable data types for columns.",
      ],
      quiz: [
        {
          question: "What uniquely identifies a row in a relational table?",
          options: [
            "Primary key",
            "CSS class",
            "Database password",
            "Table color",
          ],
          answer: "Primary key",
        },
        {
          question: "What is commonly used to connect records between tables?",
          options: ["Foreign key", "HTML tag", "CSS selector", "File extension"],
          answer: "Foreign key",
        },
        {
          question: "What does NOT NULL help enforce?",
          options: [
            "A value must be provided",
            "A row must be deleted",
            "A table must be empty",
            "A query must fail",
          ],
          answer: "A value must be provided",
        },
      ],
    },
  },

  {
    id: "mysql",
    title: "MySQL",
    icon: "🐬",
    lesson: {
      overview:
        "MySQL is a popular relational database management system. It stores structured data in tables and uses SQL for querying and modifying information.",
      sections: [
        {
          title: "What is MySQL?",
          points: [
            "MySQL is a relational database management system.",
            "It stores data using tables, rows, and columns.",
            "SQL is used to interact with MySQL databases.",
            "It is widely used in web applications.",
          ],
        },
        {
          title: "Databases and Tables",
          points: [
            "A MySQL server can contain multiple databases.",
            "A database can contain multiple tables.",
            "Tables contain columns and rows.",
            "Relationships can be established using keys.",
          ],
        },
        {
          title: "Basic SQL Commands",
          points: [
            "CREATE DATABASE creates a database.",
            "CREATE TABLE creates a table.",
            "INSERT adds records.",
            "SELECT retrieves records.",
            "UPDATE modifies records.",
            "DELETE removes records.",
          ],
        },
        {
          title: "MySQL in Full Stack Applications",
          points: [
            "A backend application can connect to MySQL.",
            "The backend can execute SQL queries on behalf of the frontend.",
            "Database credentials should be stored securely.",
            "Connection management should be handled carefully in production applications.",
          ],
        },
      ],
      mistakes: [
        "Do not expose database credentials in frontend code.",
        "Do not run destructive SQL commands without understanding their effect.",
        "Do not construct unsafe SQL queries using untrusted input.",
        "Use appropriate constraints and indexes.",
      ],
      quiz: [
        {
          question: "What type of database system is MySQL?",
          options: [
            "Relational",
            "Graphical editor",
            "CSS framework",
            "Operating system",
          ],
          answer: "Relational",
        },
        {
          question: "Which language is commonly used to query MySQL?",
          options: ["SQL", "HTML", "CSS", "XML only"],
          answer: "SQL",
        },
        {
          question: "Which SQL command retrieves data?",
          options: ["SELECT", "INSERT", "DELETE", "DROP"],
          answer: "SELECT",
        },
      ],
    },
  },

  {
    id: "mongodb",
    title: "MongoDB",
    icon: "🍃",
    lesson: {
      overview:
        "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents.",
      sections: [
        {
          title: "What is MongoDB?",
          points: [
            "MongoDB is a NoSQL document database.",
            "Data is stored in collections containing documents.",
            "Documents use a JSON-like structure.",
            "MongoDB supports flexible document structures.",
          ],
        },
        {
          title: "Collections & Documents",
          points: [
            "A collection is similar to a table conceptually, but it stores documents.",
            "A document contains fields and values.",
            "Documents within a collection do not always need identical fields.",
            "MongoDB automatically provides a unique identifier for documents unless configured otherwise.",
          ],
        },
        {
          title: "CRUD in MongoDB",
          points: [
            "insert operations create documents.",
            "find operations retrieve documents.",
            "update operations modify documents.",
            "delete operations remove documents.",
            "Queries can filter documents based on field values.",
          ],
        },
        {
          title: "MongoDB in Full Stack Applications",
          points: [
            "Node.js applications can connect to MongoDB.",
            "MongoDB is commonly used with Express-based applications.",
            "Applications should validate data before storing it.",
            "Indexes can improve query performance when used appropriately.",
          ],
        },
      ],
      mistakes: [
        "Do not assume MongoDB requires absolutely no schema planning.",
        "Do not store unlimited nested data without considering query and performance requirements.",
        "Do not expose database connection strings.",
        "Validate important data before storing it.",
      ],
      quiz: [
        {
          question: "What type of database is MongoDB?",
          options: [
            "Document-oriented NoSQL",
            "Relational-only",
            "CSS database",
            "File system",
          ],
          answer: "Document-oriented NoSQL",
        },
        {
          question: "What does MongoDB store?",
          options: ["Documents", "HTML pages only", "CSS rules", "Java classes"],
          answer: "Documents",
        },
        {
          question: "What is a group of MongoDB documents called?",
          options: ["Collection", "Table row", "CSS group", "Component"],
          answer: "Collection",
        },
      ],
    },
  },

  {
    id: "crud",
    title: "CRUD Operations",
    icon: "✏️",
    lesson: {
      overview:
        "CRUD represents the four basic operations performed on application data: Create, Read, Update, and Delete.",
      sections: [
        {
          title: "Create",
          points: [
            "Create adds new data to a database.",
            "In SQL this is commonly performed using INSERT.",
            "In document databases it can be performed using an insert operation.",
            "Input should be validated before creating records.",
          ],
        },
        {
          title: "Read",
          points: [
            "Read retrieves existing data.",
            "SQL commonly uses SELECT for reading data.",
            "Queries can filter, sort, and limit results.",
            "Only required data should be retrieved when practical.",
          ],
        },
        {
          title: "Update",
          points: [
            "Update changes existing data.",
            "SQL commonly uses UPDATE.",
            "Document databases provide update operations.",
            "Updates should target the intended records carefully.",
          ],
        },
        {
          title: "Delete",
          points: [
            "Delete removes data.",
            "SQL commonly uses DELETE.",
            "Applications should carefully control destructive operations.",
            "Soft deletion can sometimes be used when records need to remain recoverable.",
          ],
        },
      ],
      mistakes: [
        "Do not execute UPDATE or DELETE without appropriate filtering.",
        "Do not allow unauthorized users to modify data.",
        "Validate data before creating or updating records.",
        "Be careful with permanent deletion.",
      ],
      quiz: [
        {
          question: "What does CRUD stand for?",
          options: [
            "Create, Read, Update, Delete",
            "Copy, Run, Upload, Download",
            "Create, Render, Use, Deploy",
            "Connect, Read, Upload, Debug",
          ],
          answer: "Create, Read, Update, Delete",
        },
        {
          question: "Which SQL command is commonly used to retrieve data?",
          options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
          answer: "SELECT",
        },
        {
          question: "Which operation removes data?",
          options: ["Delete", "Create", "Read", "Render"],
          answer: "Delete",
        },
      ],
    },
  },

  {
    id: "database-design",
    title: "Database Design",
    icon: "🏗️",
    lesson: {
      overview:
        "Database design is the process of deciding how application data should be organized, related, constrained, and stored.",
      sections: [
        {
          title: "Identify Entities",
          points: [
            "Start by identifying the important entities in the application.",
            "Examples include users, products, orders, courses, and payments.",
            "Each entity may become a table or collection depending on the database model.",
          ],
        },
        {
          title: "Define Attributes",
          points: [
            "Each entity has attributes that describe it.",
            "For a user, attributes might include name, email, and creation date.",
            "Choose suitable data types for attributes.",
            "Avoid storing unrelated information in the same field.",
          ],
        },
        {
          title: "Define Relationships",
          points: [
            "Determine how entities are connected.",
            "A user may have many orders.",
            "An order may contain multiple products.",
            "Relationships should reflect actual application requirements.",
          ],
        },
        {
          title: "Normalization",
          points: [
            "Normalization organizes relational data to reduce unnecessary duplication.",
            "It can improve consistency and make updates safer.",
            "Common normal forms include 1NF, 2NF, and 3NF.",
            "Practical database design balances normalization with performance requirements.",
          ],
        },
      ],
      mistakes: [
        "Do not duplicate the same data unnecessarily.",
        "Do not create tables without understanding their relationships.",
        "Do not put multiple unrelated values into a single field.",
        "Do not over-normalize without considering real application requirements.",
      ],
      quiz: [
        {
          question: "What should you identify first when designing a database?",
          options: [
            "Important entities",
            "Button colors",
            "CSS animations",
            "Browser extensions",
          ],
          answer: "Important entities",
        },
        {
          question: "What is one purpose of normalization?",
          options: [
            "Reduce unnecessary data duplication",
            "Increase CSS size",
            "Create frontend animations",
            "Install Node.js",
          ],
          answer: "Reduce unnecessary data duplication",
        },
        {
          question: "What should database relationships represent?",
          options: [
            "Actual application relationships",
            "Random connections",
            "Only frontend colors",
            "Browser settings",
          ],
          answer: "Actual application relationships",
        },
      ],
    },
  },

  {
    id: "relationships",
    title: "Database Relationships",
    icon: "🔄",
    lesson: {
      overview:
        "Database relationships describe how records in different entities are connected. Understanding these relationships is essential for designing reliable data models.",
      sections: [
        {
          title: "One-to-One",
          points: [
            "One record in one entity is associated with one record in another entity.",
            "For example, a user may have one profile record.",
            "The exact implementation depends on application requirements.",
          ],
        },
        {
          title: "One-to-Many",
          points: [
            "One record can be associated with multiple records.",
            "For example, one customer can have many orders.",
            "A foreign key is commonly stored on the many side in relational databases.",
          ],
        },
        {
          title: "Many-to-Many",
          points: [
            "Multiple records on one side can relate to multiple records on another side.",
            "For example, students can enroll in many courses and courses can have many students.",
            "Relational databases commonly represent this using a junction or join table.",
          ],
        },
        {
          title: "Why Relationships Matter",
          points: [
            "Relationships help avoid unnecessary duplication.",
            "They allow related information to be queried together.",
            "They help maintain data integrity.",
            "Correct relationship design makes applications easier to maintain.",
          ],
        },
      ],
      mistakes: [
        "Do not confuse one-to-many with many-to-many.",
        "Do not create duplicate records instead of properly representing relationships.",
        "Do not forget foreign keys where they are required.",
        "Design relationships based on real application requirements.",
      ],
      quiz: [
        {
          question: "A customer having many orders is an example of:",
          options: [
            "One-to-many",
            "One-to-one",
            "Many-to-zero only",
            "No relationship",
          ],
          answer: "One-to-many",
        },
        {
          question: "Students and courses are commonly an example of:",
          options: [
            "Many-to-many",
            "One-to-one",
            "Only one-to-many",
            "No relationship",
          ],
          answer: "Many-to-many",
        },
        {
          question:
            "What is commonly used to represent many-to-many relationships in relational databases?",
          options: [
            "Junction table",
            "CSS file",
            "HTML form",
            "Environment variable",
          ],
          answer: "Junction table",
        },
      ],
    },
  },

  {
    id: "orm",
    title: "ORM & ODM",
    icon: "⚙️",
    lesson: {
      overview:
        "ORMs and ODMs provide programming abstractions for interacting with databases. They can reduce repetitive database code and make data access easier to integrate into applications.",
      sections: [
        {
          title: "What is an ORM?",
          points: [
            "ORM stands for Object-Relational Mapping.",
            "An ORM maps application objects to relational database structures.",
            "It allows developers to interact with relational databases using application-level objects and methods.",
            "Many ORMs provide query-building and relationship features.",
          ],
        },
        {
          title: "What is an ODM?",
          points: [
            "ODM stands for Object-Document Mapping.",
            "ODMs are commonly used with document-oriented databases.",
            "They provide a structured programming interface for working with documents.",
            "They can provide validation, models, and query helpers.",
          ],
        },
        {
          title: "Benefits",
          points: [
            "Can reduce repetitive database interaction code.",
            "Can provide model definitions and validation.",
            "Can make relationships and queries easier to represent in application code.",
            "Can improve consistency in larger applications.",
          ],
        },
        {
          title: "Trade-offs",
          points: [
            "Developers should still understand the underlying database.",
            "Complex queries may require database-specific knowledge.",
            "Abstractions can sometimes hide performance problems.",
            "Choosing a library should depend on the application's requirements.",
          ],
        },
      ],
      mistakes: [
        "Do not use an ORM without understanding the underlying database.",
        "Do not assume ORM queries are always efficient.",
        "Do not blindly rely on automatically generated queries.",
        "Understand how relationships and indexes work in the actual database.",
      ],
      quiz: [
        {
          question: "What does ORM stand for?",
          options: [
            "Object-Relational Mapping",
            "Object-Request Manager",
            "Online Resource Model",
            "Open Relational Module",
          ],
          answer: "Object-Relational Mapping",
        },
        {
          question: "What is an ODM commonly used with?",
          options: [
            "Document databases",
            "CSS files",
            "HTML pages",
            "Operating systems",
          ],
          answer: "Document databases",
        },
        {
          question:
            "Should developers still understand the database when using an ORM?",
          options: ["Yes", "No", "Only for CSS", "Only for HTML"],
          answer: "Yes",
        },
      ],
    },
  },

  {
    id: "database-security",
    title: "Database Security",
    icon: "🔐",
    lesson: {
      overview:
        "Database security protects stored information from unauthorized access, accidental exposure, modification, and destruction.",
      sections: [
        {
          title: "Authentication & Authorization",
          points: [
            "Authentication verifies who is accessing the system.",
            "Authorization determines what that user or service is allowed to do.",
            "Database accounts should receive only the permissions they need.",
            "Application users should not automatically have unrestricted database access.",
          ],
        },
        {
          title: "SQL Injection",
          points: [
            "SQL injection occurs when untrusted input is improperly incorporated into SQL queries.",
            "Parameterized queries or prepared statements help prevent SQL injection.",
            "Input validation provides additional protection.",
            "Never construct SQL queries by blindly concatenating untrusted input.",
          ],
        },
        {
          title: "Protecting Credentials",
          points: [
            "Database usernames and passwords should not be exposed in frontend code.",
            "Credentials should be stored securely.",
            "Environment or secret-management systems can be used for configuration.",
            "Production credentials should be protected from public repositories.",
          ],
        },
        {
          title: "Backups & Access Control",
          points: [
            "Important databases should have appropriate backup strategies.",
            "Backups should also be protected from unauthorized access.",
            "Use least-privilege access wherever possible.",
            "Monitor suspicious database activity when appropriate.",
          ],
        },
      ],
      mistakes: [
        "Never expose database credentials in frontend JavaScript.",
        "Do not build SQL queries using raw untrusted input.",
        "Do not give every application account administrator-level database permissions.",
        "Do not ignore backups for important production data.",
      ],
      quiz: [
        {
          question:
            "What attack involves malicious input being inserted into SQL queries?",
          options: [
            "SQL injection",
            "CSS injection only",
            "Image compression",
            "DNS caching",
          ],
          answer: "SQL injection",
        },
        {
          question: "What helps prevent SQL injection?",
          options: [
            "Parameterized queries",
            "Changing CSS colors",
            "Using larger images",
            "Removing HTML",
          ],
          answer: "Parameterized queries",
        },
        {
          question: "Where should database credentials generally be kept?",
          options: [
            "Secure configuration or secret management",
            "Frontend source code",
            "Public README",
            "HTML comments",
          ],
          answer: "Secure configuration or secret management",
        },
      ],
    },
  },

  {
    id: "database-projects",
    title: "Database Projects",
    icon: "💻",
    lesson: {
      overview:
        "Database projects combine database design, CRUD operations, relationships, queries, security, and backend integration into practical applications.",
      sections: [
        {
          title: "Project 1: Student Management System",
          points: [
            "Create students, courses, and enrollment records.",
            "Practice CRUD operations.",
            "Represent relationships between students and courses.",
            "Create queries to retrieve useful information.",
          ],
        },
        {
          title: "Project 2: E-Commerce Database",
          points: [
            "Create users, products, orders, and order-item data.",
            "Design relationships between the entities.",
            "Implement product and order CRUD operations.",
            "Practice queries for orders, products, and customers.",
          ],
        },
        {
          title: "Project 3: Full Stack Database Application",
          points: [
            "Connect a Node.js backend to a database.",
            "Create API endpoints for database operations.",
            "Connect the frontend to the backend APIs.",
            "Implement validation and error handling.",
          ],
        },
        {
          title: "Project 4: MongoDB Application",
          points: [
            "Create a document-based application using MongoDB.",
            "Design appropriate collections and documents.",
            "Implement document CRUD operations.",
            "Connect MongoDB to a Node.js and Express backend.",
          ],
        },
      ],
      mistakes: [
        "Do not start coding before designing the data model.",
        "Do not skip validation and security.",
        "Do not expose database credentials.",
        "Test CRUD operations and relationships carefully.",
        "Do not ignore error handling when connecting the backend to a database.",
      ],
      quiz: [
        {
          question: "Which project is useful for practicing relationships?",
          options: [
            "Student Management System",
            "CSS animation",
            "Image editor",
            "HTML-only page",
          ],
          answer: "Student Management System",
        },
        {
          question: "What connects a full-stack frontend to a database?",
          options: [
            "Backend/API layer",
            "CSS only",
            "HTML comments",
            "Browser wallpaper",
          ],
          answer: "Backend/API layer",
        },
        {
          question:
            "What should be considered before implementing a large database application?",
          options: [
            "Data model and relationships",
            "Only button colors",
            "Only font size",
            "Only page background",
          ],
          answer: "Data model and relationships",
        },
      ],
    },
  },
];

/* -------------------------------------------------------
   SHUFFLE QUIZ OPTIONS
   -------------------------------------------------------
   Each question gets shuffled ONCE when the component loads.
   The correct answer is still identified by its actual text,
   so scoring remains correct even after shuffling.
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

function Databases({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-databases", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});

  /*
    Create shuffled options only once.

    This is important:
    - Options do NOT reshuffle every time React re-renders.
    - The correct answer can appear in A, B, C, or D.
    - The selected answer remains stable.
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
            ← Back to Databases
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
          🗄️ Databases
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn database concepts, SQL, NoSQL, database
          design, CRUD operations, security and more.
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

export default Databases;