import { useEffect, useMemo, useState } from "react";
import { saveQuizResult } from "../utils/saveQuizResult";

function DBMS({ goToLearning }) {
  // =========================================================
  // ======================= DBMS DATA =======================
  // =========================================================

  const topics = {
    "DBMS Basics": {
      icon: "📖",
      content: (
        <>
          <h3>📖 What is DBMS?</h3>

          <p>
            A Database Management System (DBMS) is software used to
            create, store, organize, retrieve and manage data in a database.
          </p>

          <h3>🎯 Why do we need DBMS?</h3>

          <ul>
            <li>Store large amounts of data</li>
            <li>Retrieve data efficiently</li>
            <li>Reduce data redundancy</li>
            <li>Maintain data consistency</li>
            <li>Provide data security</li>
            <li>Allow multiple users to access data</li>
          </ul>

          <h3>📌 Examples of DBMS</h3>

          <ul>
            <li>MySQL</li>
            <li>Oracle</li>
            <li>PostgreSQL</li>
            <li>Microsoft SQL Server</li>
          </ul>

          <h3>💡 Important</h3>

          <p>
            DBMS acts as an interface between users/applications and
            the database.
          </p>
        </>
      ),

      questions: [
        {
          question: "What does DBMS stand for?",
          options: [
            "Database Management System",
            "Data Backup Management System",
            "Database Monitoring System",
            "Data Management Software",
          ],
          answer: "Database Management System",
        },
        {
          question: "Which of the following is a DBMS?",
          options: ["MySQL", "HTML", "CSS", "JavaScript"],
          answer: "MySQL",
        },
        {
          question: "What is the main purpose of a DBMS?",
          options: [
            "Manage and organize data",
            "Design websites",
            "Compile programs",
            "Create animations",
          ],
          answer: "Manage and organize data",
        },
        {
          question: "Which is a relational DBMS?",
          options: ["MySQL", "MongoDB", "Redis", "Cassandra"],
          answer: "MySQL",
        },
        {
          question: "What does a database store?",
          options: [
            "Organized data",
            "Only images",
            "Only programs",
            "Only passwords",
          ],
          answer: "Organized data",
        },
      ],
    },

    "ER Model": {
      icon: "🧩",
      content: (
        <>
          <h3>📖 What is an ER Model?</h3>

          <p>
            ER stands for Entity Relationship. The ER model is used to
            visually represent the structure of a database.
          </p>

          <h3>🧱 Main Components</h3>

          <ul>
            <li>
              <strong>Entity:</strong> A real-world object.
            </li>
            <li>
              <strong>Attribute:</strong> A property of an entity.
            </li>
            <li>
              <strong>Relationship:</strong> Association between entities.
            </li>
          </ul>

          <h3>📌 Example</h3>

          <p>
            Consider a college database.
          </p>

          <ul>
            <li>Student → Entity</li>
            <li>Student ID → Attribute</li>
            <li>Student enrolls in Course → Relationship</li>
          </ul>

          <h3>💡 Common ER Symbols</h3>

          <ul>
            <li>Rectangle → Entity</li>
            <li>Oval → Attribute</li>
            <li>Diamond → Relationship</li>
          </ul>
        </>
      ),

      questions: [
        {
          question: "What does ER stand for?",
          options: [
            "Entity Relationship",
            "Electronic Record",
            "Entity Record",
            "External Relationship",
          ],
          answer: "Entity Relationship",
        },
        {
          question: "What represents a real-world object?",
          options: ["Entity", "Attribute", "Tuple", "Query"],
          answer: "Entity",
        },
        {
          question: "Which describes a property of an entity?",
          options: ["Attribute", "Relationship", "Table", "Database"],
          answer: "Attribute",
        },
        {
          question: "What represents an association between entities?",
          options: ["Relationship", "Attribute", "Column", "Row"],
          answer: "Relationship",
        },
        {
          question: "Which symbol represents an entity in an ER diagram?",
          options: ["Rectangle", "Oval", "Diamond", "Circle"],
          answer: "Rectangle",
        },
      ],
    },

    "Relational Model": {
      icon: "📊",
      content: (
        <>
          <h3>📖 Relational Model</h3>

          <p>
            The relational model stores data in the form of tables.
            Each table contains rows and columns.
          </p>

          <h3>📊 Important Terms</h3>

          <ul>
            <li>
              <strong>Table:</strong> Collection of related data.
            </li>
            <li>
              <strong>Row/Tuple:</strong> One record.
            </li>
            <li>
              <strong>Column/Attribute:</strong> A property of data.
            </li>
            <li>
              <strong>Domain:</strong> Set of valid values for an attribute.
            </li>
          </ul>

          <h3>💻 Example</h3>

          <pre>
{`Student
--------------------------------
ID     Name       Branch
--------------------------------
101    Sai        IT
102    Ravi       CSE
103    Anu        ECE`}
          </pre>

          <p>
            Here, Student is the table, each row is a tuple and each
            column is an attribute.
          </p>
        </>
      ),

      questions: [
        {
          question: "In a relational database, data is stored in?",
          options: ["Tables", "Files", "Objects", "Graphs"],
          answer: "Tables",
        },
        {
          question: "What is a row called?",
          options: ["Tuple", "Attribute", "Domain", "Schema"],
          answer: "Tuple",
        },
        {
          question: "What is a column called?",
          options: ["Attribute", "Tuple", "Record", "Key"],
          answer: "Attribute",
        },
        {
          question: "What is a collection of related tables?",
          options: ["Database", "Tuple", "Attribute", "Query"],
          answer: "Database",
        },
        {
          question: "Which identifies a row uniquely?",
          options: ["Primary Key", "Foreign Key", "Column", "View"],
          answer: "Primary Key",
        },
      ],
    },

    Keys: {
      icon: "🔑",
      content: (
        <>
          <h3>🔑 What are Keys?</h3>

          <p>
            Keys are attributes or combinations of attributes used to
            identify records and establish relationships between tables.
          </p>

          <h3>📌 Important Types of Keys</h3>

          <ul>
            <li>
              <strong>Primary Key:</strong> Uniquely identifies each record.
            </li>
            <li>
              <strong>Foreign Key:</strong> Connects one table to another.
            </li>
            <li>
              <strong>Candidate Key:</strong> Minimal key that can uniquely
              identify a record.
            </li>
            <li>
              <strong>Super Key:</strong> Any set of attributes that uniquely
              identifies a record.
            </li>
            <li>
              <strong>Composite Key:</strong> Key containing multiple
              attributes.
            </li>
          </ul>

          <h3>💻 Example</h3>

          <pre>
{`Student
ID    Name
101   Sai
102   Ravi

Course
CourseID    CourseName
C01         DBMS`}
          </pre>

          <p>
            Student ID can be a primary key, while CourseID can be
            referenced using a foreign key in another table.
          </p>
        </>
      ),

      questions: [
        {
          question: "Which key uniquely identifies each record?",
          options: [
            "Primary Key",
            "Foreign Key",
            "Candidate Key",
            "Alternate Key",
          ],
          answer: "Primary Key",
        },
        {
          question: "Which key creates a relationship between tables?",
          options: [
            "Foreign Key",
            "Primary Key",
            "Super Key",
            "Candidate Key",
          ],
          answer: "Foreign Key",
        },
        {
          question: "A minimal super key is called?",
          options: [
            "Candidate Key",
            "Foreign Key",
            "Primary Key",
            "Composite Key",
          ],
          answer: "Candidate Key",
        },
        {
          question: "A key containing multiple attributes is called?",
          options: [
            "Composite Key",
            "Foreign Key",
            "Simple Key",
            "Alternate Key",
          ],
          answer: "Composite Key",
        },
        {
          question: "Which candidate key is selected to identify records?",
          options: [
            "Primary Key",
            "Foreign Key",
            "Super Key",
            "Composite Key",
          ],
          answer: "Primary Key",
        },
      ],
    },

    Normalization: {
      icon: "🧹",
      content: (
        <>
          <h3>📖 What is Normalization?</h3>

          <p>
            Normalization is the process of organizing data in a database
            to reduce redundancy and prevent data anomalies.
          </p>

          <h3>🎯 Goals</h3>

          <ul>
            <li>Reduce duplicate data</li>
            <li>Improve data consistency</li>
            <li>Prevent update anomalies</li>
            <li>Prevent insertion anomalies</li>
            <li>Prevent deletion anomalies</li>
          </ul>

          <h3>📚 Normal Forms</h3>

          <ul>
            <li>
              <strong>1NF:</strong> No repeating groups and atomic values.
            </li>
            <li>
              <strong>2NF:</strong> 1NF + no partial dependency.
            </li>
            <li>
              <strong>3NF:</strong> 2NF + no transitive dependency.
            </li>
            <li>
              <strong>BCNF:</strong> Stronger version of 3NF.
            </li>
          </ul>

          <h3>💡 Remember</h3>

          <p>
            Normalization mainly focuses on reducing redundancy and
            improving consistency.
          </p>
        </>
      ),

      questions: [
        {
          question: "What is the main purpose of normalization?",
          options: [
            "Reduce data redundancy",
            "Increase duplicate data",
            "Delete all data",
            "Increase storage",
          ],
          answer: "Reduce data redundancy",
        },
        {
          question: "Which normal form removes repeating groups?",
          options: ["1NF", "2NF", "3NF", "BCNF"],
          answer: "1NF",
        },
        {
          question: "Which normal form removes partial dependency?",
          options: ["2NF", "1NF", "3NF", "BCNF"],
          answer: "2NF",
        },
        {
          question: "Which normal form removes transitive dependency?",
          options: ["3NF", "1NF", "2NF", "4NF"],
          answer: "3NF",
        },
        {
          question: "Normalization helps prevent?",
          options: [
            "Update anomalies",
            "Queries",
            "Tables",
            "Primary keys",
          ],
          answer: "Update anomalies",
        },
      ],
    },

    "SQL Basics": {
      icon: "💻",
      content: (
        <>
          <h3>📖 What is SQL?</h3>

          <p>
            SQL stands for Structured Query Language. It is used to
            communicate with relational databases.
          </p>

          <h3>🧰 Common SQL Commands</h3>

          <ul>
            <li>SELECT → Retrieve data</li>
            <li>INSERT → Add data</li>
            <li>UPDATE → Modify data</li>
            <li>DELETE → Remove data</li>
            <li>CREATE → Create database objects</li>
            <li>DROP → Remove database objects</li>
          </ul>

          <h3>💻 Example</h3>

          <pre>
{`SELECT * FROM Student;

INSERT INTO Student
VALUES (101, 'Sai', 'IT');

UPDATE Student
SET Branch = 'CSE'
WHERE ID = 101;

DELETE FROM Student
WHERE ID = 101;`}
          </pre>
        </>
      ),

      questions: [
        {
          question: "What does SQL stand for?",
          options: [
            "Structured Query Language",
            "Simple Query Language",
            "System Query Language",
            "Structured Question Language",
          ],
          answer: "Structured Query Language",
        },
        {
          question: "Which command retrieves data?",
          options: ["SELECT", "GET", "FETCH", "READ"],
          answer: "SELECT",
        },
        {
          question: "Which command adds records?",
          options: ["INSERT", "ADD", "CREATE", "UPDATE"],
          answer: "INSERT",
        },
        {
          question: "Which command modifies existing records?",
          options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
          answer: "UPDATE",
        },
        {
          question: "Which command removes records?",
          options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
          answer: "DELETE",
        },
      ],
    },

    "SQL Joins": {
      icon: "🔗",
      content: (
        <>
          <h3>🔗 What are Joins?</h3>

          <p>
            SQL joins are used to combine data from two or more tables
            based on a related column.
          </p>

          <h3>📚 Types of Joins</h3>

          <ul>
            <li>
              <strong>INNER JOIN:</strong> Returns matching records.
            </li>
            <li>
              <strong>LEFT JOIN:</strong> Returns all records from the
              left table and matching records from the right.
            </li>
            <li>
              <strong>RIGHT JOIN:</strong> Returns all records from the
              right table and matching records from the left.
            </li>
            <li>
              <strong>FULL OUTER JOIN:</strong> Returns matching and
              unmatched records from both tables.
            </li>
            <li>
              <strong>CROSS JOIN:</strong> Produces Cartesian product.
            </li>
          </ul>

          <h3>💻 Example</h3>

          <pre>
{`SELECT Student.Name, Course.CourseName
FROM Student
INNER JOIN Course
ON Student.CourseID = Course.CourseID;`}
          </pre>
        </>
      ),

      questions: [
        {
          question: "Which join returns matching records from both tables?",
          options: [
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "FULL JOIN",
          ],
          answer: "INNER JOIN",
        },
        {
          question: "Which join returns all records from the left table?",
          options: [
            "LEFT JOIN",
            "INNER JOIN",
            "RIGHT JOIN",
            "CROSS JOIN",
          ],
          answer: "LEFT JOIN",
        },
        {
          question: "Which join returns all records from the right table?",
          options: [
            "RIGHT JOIN",
            "LEFT JOIN",
            "INNER JOIN",
            "SELF JOIN",
          ],
          answer: "RIGHT JOIN",
        },
        {
          question: "Which join returns unmatched records from both tables?",
          options: [
            "FULL OUTER JOIN",
            "INNER JOIN",
            "LEFT JOIN",
            "CROSS JOIN",
          ],
          answer: "FULL OUTER JOIN",
        },
        {
          question: "Which join produces a Cartesian product?",
          options: [
            "CROSS JOIN",
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
          ],
          answer: "CROSS JOIN",
        },
      ],
    },

    Transactions: {
      icon: "💳",
      content: (
        <>
          <h3>💳 What is a Transaction?</h3>

          <p>
            A transaction is a logical unit of work performed against
            a database.
          </p>

          <h3>🧱 ACID Properties</h3>

          <ul>
            <li>
              <strong>Atomicity:</strong> All operations happen or none happen.
            </li>
            <li>
              <strong>Consistency:</strong> Database remains valid.
            </li>
            <li>
              <strong>Isolation:</strong> Transactions do not interfere
              incorrectly with each other.
            </li>
            <li>
              <strong>Durability:</strong> Committed changes remain saved.
            </li>
          </ul>

          <h3>💻 Important Commands</h3>

          <pre>
{`COMMIT;
ROLLBACK;`}
          </pre>

          <p>
            COMMIT permanently saves changes, while ROLLBACK undoes
            uncommitted changes.
          </p>
        </>
      ),

      questions: [
        {
          question: "What is a transaction?",
          options: [
            "A logical unit of database work",
            "A database table",
            "A database column",
            "A SQL keyword",
          ],
          answer: "A logical unit of database work",
        },
        {
          question: "Which command permanently saves a transaction?",
          options: ["COMMIT", "SAVE", "STORE", "PUSH"],
          answer: "COMMIT",
        },
        {
          question: "Which command cancels uncommitted changes?",
          options: ["ROLLBACK", "UNDO", "CANCEL", "RESET"],
          answer: "ROLLBACK",
        },
        {
          question: "What does ACID stand for?",
          options: [
            "Atomicity, Consistency, Isolation, Durability",
            "Accuracy, Control, Integrity, Data",
            "Atomicity, Control, Isolation, Data",
            "Access, Consistency, Integrity, Durability",
          ],
          answer: "Atomicity, Consistency, Isolation, Durability",
        },
        {
          question: "Which ACID property means all-or-nothing?",
          options: [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability",
          ],
          answer: "Atomicity",
        },
      ],
    },

    Indexing: {
      icon: "⚡",
      content: (
        <>
          <h3>⚡ What is Indexing?</h3>

          <p>
            An index is a data structure that helps the database find
            records faster.
          </p>

          <h3>🎯 Why use indexes?</h3>

          <ul>
            <li>Improve data retrieval speed</li>
            <li>Make searches faster</li>
            <li>Improve query performance</li>
          </ul>

          <h3>⚠️ Disadvantages</h3>

          <ul>
            <li>Indexes require additional storage.</li>
            <li>INSERT operations may become slower.</li>
            <li>UPDATE operations may become slower.</li>
            <li>DELETE operations may require index maintenance.</li>
          </ul>

          <h3>💻 Example</h3>

          <pre>
{`CREATE INDEX idx_student_name
ON Student(Name);`}
          </pre>
        </>
      ),

      questions: [
        {
          question: "What is the main purpose of an index?",
          options: [
            "Speed up data retrieval",
            "Delete records",
            "Increase redundancy",
            "Create backups",
          ],
          answer: "Speed up data retrieval",
        },
        {
          question: "An index is generally created on?",
          options: ["Column(s)", "Database only", "Server", "User"],
          answer: "Column(s)",
        },
        {
          question: "Indexes generally improve?",
          options: [
            "SELECT performance",
            "Data duplication",
            "Storage size",
            "Passwords",
          ],
          answer: "SELECT performance",
        },
        {
          question: "Too many indexes can affect?",
          options: [
            "INSERT and UPDATE performance",
            "Database name",
            "Table existence",
            "Primary key definition",
          ],
          answer: "INSERT and UPDATE performance",
        },
        {
          question: "Which command creates an index?",
          options: [
            "CREATE INDEX",
            "MAKE INDEX",
            "ADD INDEX",
            "NEW INDEX",
          ],
          answer: "CREATE INDEX",
        },
      ],
    },

    "Concurrency Control": {
      icon: "🔄",
      content: (
        <>
          <h3>🔄 What is Concurrency Control?</h3>

          <p>
            Concurrency control manages multiple transactions executing
            at the same time while maintaining database consistency.
          </p>

          <h3>🎯 Why is it needed?</h3>

          <ul>
            <li>Prevent data inconsistency</li>
            <li>Maintain isolation between transactions</li>
            <li>Prevent conflicting operations</li>
            <li>Maintain database correctness</li>
          </ul>

          <h3>🔒 Locks</h3>

          <ul>
            <li>
              <strong>Shared Lock:</strong> Generally used for reading.
            </li>
            <li>
              <strong>Exclusive Lock:</strong> Generally used when modifying
              data.
            </li>
          </ul>

          <h3>💡 Example</h3>

          <p>
            If two users try to modify the same bank account at the
            same time, concurrency control helps ensure that the final
            balance remains correct.
          </p>
        </>
      ),

      questions: [
        {
          question: "What is concurrency control?",
          options: [
            "Managing simultaneous transactions",
            "Deleting transactions",
            "Creating tables",
            "Backing up databases",
          ],
          answer: "Managing simultaneous transactions",
        },
        {
          question: "Which technique uses locks?",
          options: [
            "Lock-based concurrency control",
            "File-based control",
            "Memory control",
            "Query control",
          ],
          answer: "Lock-based concurrency control",
        },
        {
          question: "A shared lock generally allows?",
          options: [
            "Reading",
            "Deleting",
            "Dropping",
            "Exclusive writing",
          ],
          answer: "Reading",
        },
        {
          question: "An exclusive lock is generally used for?",
          options: [
            "Writing",
            "Only reading",
            "Only searching",
            "Only viewing",
          ],
          answer: "Writing",
        },
        {
          question: "Concurrency control helps prevent?",
          options: [
            "Data inconsistency",
            "Database creation",
            "SQL syntax",
            "Table naming",
          ],
          answer: "Data inconsistency",
        },
      ],
    },

    "Database Security": {
      icon: "🔐",
      content: (
        <>
          <h3>🔐 Database Security</h3>

          <p>
            Database security protects databases from unauthorized
            access, modification, destruction and data leakage.
          </p>

          <h3>🛡️ Important Security Methods</h3>

          <ul>
            <li>Authentication</li>
            <li>Authorization</li>
            <li>Access control</li>
            <li>Encryption</li>
            <li>Backups</li>
            <li>Auditing</li>
          </ul>

          <h3>👤 Authentication vs Authorization</h3>

          <p>
            <strong>Authentication</strong> checks who the user is.
          </p>

          <p>
            <strong>Authorization</strong> determines what the user
            is allowed to do.
          </p>

          <h3>💡 Example</h3>

          <p>
            A student may be allowed to view marks but not modify
            the marks table.
          </p>
        </>
      ),

      questions: [
        {
          question: "What is the main purpose of database security?",
          options: [
            "Protect database information",
            "Increase duplicate records",
            "Delete tables",
            "Increase query length",
          ],
          answer: "Protect database information",
        },
        {
          question: "Authentication checks?",
          options: [
            "Who the user is",
            "What the user can do",
            "Database size",
            "Number of tables",
          ],
          answer: "Who the user is",
        },
        {
          question: "Authorization determines?",
          options: [
            "What a user is allowed to do",
            "User's password length",
            "Database size",
            "Number of records",
          ],
          answer: "What a user is allowed to do",
        },
        {
          question:
            "Which technique protects data by converting it into an unreadable form?",
          options: [
            "Encryption",
            "Indexing",
            "Normalization",
            "Joins",
          ],
          answer: "Encryption",
        },
        {
          question: "Which helps recover data after data loss?",
          options: [
            "Backup",
            "Join",
            "Index",
            "Normalization",
          ],
          answer: "Backup",
        },
      ],
    },
  };

  const topicNames = Object.keys(topics);

  // =========================================================
  // ======================= STATE ===========================
  // =========================================================

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [mode, setMode] = useState("roadmap");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [completed, setCompleted] = useState(false);

  const [completedTopics, setCompletedTopics] = useState([]);
  useEffect(() => {
  const fetchProgress = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      const response = await fetch(
        "https://gradpath-ai-backend.onrender.com/learning-progress",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (response.ok) {
        setCompletedTopics(data.completedTopics || []);
      }

    } catch (error) {
      console.error(
        "Error loading learning progress:",
        error
      );
    }
  };

  fetchProgress();

}, []);

  const [quizQuestions, setQuizQuestions] = useState([]);

  // =========================================================
  // ===================== SAVE PROGRESS =====================
  // =========================================================

  
  // =========================================================
  // ===================== PROGRESS ==========================
  // =========================================================

  const subjectCompletedTopics = Array.from(
    new Set(
      completedTopics.filter((topic) =>
        topicNames.includes(topic)
      )
    )
  );

  const totalTopics = topicNames.length;

  const overallProgress =
    totalTopics === 0
      ? 0
      : Math.round((subjectCompletedTopics.length / totalTopics) * 100);

  const getTopicProgress = (topic) => {
    return subjectCompletedTopics.includes(topic) ? 100 : 0;
  };

  // =========================================================
  // ===================== SHUFFLE ===========================
  // =========================================================

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

  const prepareQuiz = (topic) => {
    const questions = topics[topic].questions.map((question) => {
      return {
        ...question,
        options: shuffleArray(question.options),
      };
    });

    return questions;
  };

  // =========================================================
  // ===================== TOPIC FUNCTIONS ===================
  // =========================================================

  const startTopic = (topic) => {
    setSelectedTopic(topic);
    setMode("content");

    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setCompleted(false);
    setQuizQuestions([]);
  };

  const startQuiz = () => {
    const questions = prepareQuiz(selectedTopic);

    setQuizQuestions(questions);
    setMode("quiz");

    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setCompleted(false);
  };

  // =========================================================
  // ===================== ANSWER FUNCTION ==================
  // =========================================================

  const chooseAnswer = (option) => {
    if (answered) return;

    const question = quizQuestions[currentQuestion];

    setSelectedAnswer(option);
    setAnswered(true);

    if (option === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  // =========================================================
  // ===================== NEXT QUESTION ====================
  // =========================================================

  const nextQuestion = async () => {
  if (currentQuestion < quizQuestions.length - 1) {
    setCurrentQuestion((previous) => previous + 1);
    setAnswered(false);
    setSelectedAnswer(null);
  } else {
    const finalScore = score;
    const passed = finalScore >= Math.ceil(quizQuestions.length * 0.6);

    await saveQuizResult({
      subject: "DBMS",
      topic: selectedTopic,
      topicId: selectedTopic,
      score: finalScore,
      totalQuestions: quizQuestions.length
    });

    setCompleted(true);

    if (passed && !subjectCompletedTopics.includes(selectedTopic)) {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      try {
        const response = await fetch(
          "https://gradpath-ai-backend.onrender.com/learning-progress/complete",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
              topicId: selectedTopic
            })
          }
        );

        const data = await response.json();

        if (response.ok) {
          setCompletedTopics(
            data.completedTopics || []
          );
        } else {
          console.error(
            "Failed to save progress:",
            data.message
          );
        }

      } catch (error) {
        console.error(
          "Error saving progress:",
          error
        );
      }
    }
  }
};

  // =========================================================
  // ======================= RETRY ===========================
  // =========================================================

  const retryQuiz = () => {
    const questions = prepareQuiz(selectedTopic);

    setQuizQuestions(questions);
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setCompleted(false);
    setMode("quiz");
  };

  // =========================================================
  // ===================== BACK FUNCTIONS ===================
  // =========================================================

  const backToRoadmap = () => {
    setSelectedTopic(null);
    setMode("roadmap");

    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setCompleted(false);
    setQuizQuestions([]);
  };

  const reviewTopic = () => {
    setMode("content");
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setCompleted(false);
  };

  // =========================================================
  // ===================== ROADMAP PAGE ======================
  // =========================================================

  if (!selectedTopic && mode === "roadmap") {
    return (
      <div
        className="subject-container"
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "25px",
        }}
      >
        {/* HEADER */}

        <div style={{ marginBottom: "25px" }}>
          <h1 style={{ marginBottom: "5px" }}>
            🗄️ DBMS
          </h1>

          <p style={{ marginTop: "0" }}>
            Learn DBMS concepts from basics to interview-level topics.
          </p>
        </div>

        {/* OVERALL PROGRESS */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "22px",
            marginBottom: "30px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginTop: "0" }}>
            📊 Overall Progress: {overallProgress}% 🎯
          </h3>

          <div
            style={{
              width: "100%",
              height: "13px",
              background: "#e9e9e9",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${overallProgress}%`,
                height: "100%",
                background: "#f5b800",
                borderRadius: "20px",
                transition: "width 0.4s ease",
              }}
            />
          </div>

          <p style={{ marginBottom: "0" }}>
            {subjectCompletedTopics.length} / {totalTopics} topics completed
          </p>
        </div>

        {/* ROADMAP TITLE */}

        <h2 style={{ marginBottom: "20px" }}>
          🗺️ DBMS Roadmap
        </h2>

        {/* TOPIC CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "22px",
          }}
        >
          {topicNames.map((topic, index) => {
            const progress = getTopicProgress(topic);
            const isCompleted = subjectCompletedTopics.includes(topic);

            return (
              <div
                key={topic}
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "25px",
                  border: "1px solid #f0d878",
                  boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
                  minHeight: "215px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      marginTop: "0",
                      marginBottom: "8px",
                      fontSize: "20px",
                    }}
                  >
                    {index + 1}. {topics[topic].icon} {topic}
                  </h3>

                  <p style={{ margin: "5px 0 10px" }}>
                    {isCompleted
                      ? "📚 Completed"
                      : "📖 Not completed"}
                  </p>

                  <div
                    style={{
                      width: "100%",
                      height: "10px",
                      background: "#e9e9e9",
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "#f5b800",
                        borderRadius: "20px",
                        transition: "width 0.4s ease",
                      }}
                    />
                  </div>

                  <p
                    style={{
                      marginTop: "8px",
                      marginBottom: "18px",
                    }}
                  >
                    {progress}% complete
                  </p>
                </div>

                <button
                  onClick={() => startTopic(topic)}
                  style={{
                    alignSelf: "flex-start",
                    padding: "11px 20px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#f5b800",
                    color: "#111",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {isCompleted
                    ? "📖 Review Topic →"
                    : "📖 Open Topic →"}
                </button>
              </div>
            );
          })}
        </div>

        {/* BACK */}

        <div style={{ marginTop: "30px" }}>
          <button
            onClick={goToLearning}
            style={{
              padding: "11px 20px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            ← Back to Learning
          </button>
        </div>
      </div>
    );
  }

  // =========================================================
  // ===================== CONTENT PAGE ======================
  // =========================================================

  if (mode === "content" && selectedTopic) {
    return (
      <div
        className="subject-container"
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          padding: "25px",
        }}
      >
        {/* BREADCRUMB */}

        <p style={{ marginBottom: "10px" }}>
          DBMS → {selectedTopic}
        </p>

        <h1>
          {topics[selectedTopic].icon} {selectedTopic}
        </h1>

        <hr />

        {/* CONTENT */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "25px",
            lineHeight: "1.6",
          }}
        >
          {topics[selectedTopic].content}
        </div>

        <hr />

        {/* QUIZ CTA */}

        <div
          style={{
            background: "#fff8dc",
            borderRadius: "16px",
            padding: "25px",
            marginTop: "20px",
          }}
        >
          <h3>🧠 Ready to test yourself?</h3>

          <p>
            Complete the 5-question quiz to check your understanding.
          </p>

          <button
            onClick={startQuiz}
            style={{
              padding: "12px 24px",
              border: "none",
              borderRadius: "10px",
              background: "#f5b800",
              color: "#111",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            🧠 Start Quiz
          </button>
        </div>

        <br />

        <button
          onClick={backToRoadmap}
          style={{
            padding: "11px 20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          ← Back to DBMS Roadmap
        </button>
      </div>
    );
  }

  // =========================================================
  // ======================= RESULT ==========================
  // =========================================================

  if (completed && selectedTopic) {
    const totalQuestions = quizQuestions.length;

    return (
      <div
        className="subject-container"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "25px",
          textAlign: "center",
        }}
      >
        <h1>
          {topics[selectedTopic].icon} {selectedTopic}
        </h1>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "35px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2>🎉 Quiz Completed!</h2>
          <p style={{ fontSize: "18px", color: score >= Math.ceil(totalQuestions * 0.6) ? "#2e7d32" : "#b45309", fontWeight: "600" }}>
            {score >= Math.ceil(totalQuestions * 0.6)
              ? "✅ Quiz passed! Your topic completion has been saved."
              : "📚 Quiz attempt saved. Pass the quiz to mark this topic completed."}
          </p>

          <h1>
            Score: {score} / {totalQuestions}
          </h1>

          <p style={{ fontSize: "18px" }}>
            {score === totalQuestions ? (
              "🌟 Excellent! Perfect score!"
            ) : score >= Math.ceil(totalQuestions * 0.6) ? (
              "👍 Good job! You passed this quiz."
            ) : (
              "📖 Keep learning and try the quiz again."
            )}
          </p>

          <div
            style={{
              margin: "25px auto",
              width: "90%",
              height: "12px",
              background: "#e9e9e9",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(score / totalQuestions) * 100}%`,
                height: "100%",
                background: "#f5b800",
                borderRadius: "20px",
              }}
            />
          </div>

          <button
            onClick={retryQuiz}
            style={{
              display: "block",
              margin: "15px auto",
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              background: "#f5b800",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            🔄 Retry Quiz
          </button>

          <button
            onClick={reviewTopic}
            style={{
              display: "block",
              margin: "15px auto",
              padding: "12px 25px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            📖 Review Topic
          </button>

          <button
            onClick={backToRoadmap}
            style={{
              display: "block",
              margin: "15px auto",
              padding: "12px 25px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            ← Back to DBMS Roadmap
          </button>
        </div>
      </div>
    );
  }

  // =========================================================
  // ======================== QUIZ ============================
  // =========================================================

  if (
    mode === "quiz" &&
    selectedTopic &&
    quizQuestions.length > 0
  ) {
    const question = quizQuestions[currentQuestion];

    return (
      <div
        className="subject-container"
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "25px",
        }}
      >
        {/* QUIZ HEADER */}

        <p>
          DBMS → {selectedTopic} → Quiz
        </p>

        <h1>
          {topics[selectedTopic].icon} {selectedTopic}
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <strong>
            Question {currentQuestion + 1} of{" "}
            {quizQuestions.length}
          </strong>

          <strong>
            Score: {score}
          </strong>
        </div>

        {/* QUESTION PROGRESS */}

        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#e9e9e9",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: `${
                ((currentQuestion + 1) /
                  quizQuestions.length) *
                100
              }%`,
              height: "100%",
              background: "#f5b800",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        <hr />

        {/* QUESTION CARD */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "30px",
            marginTop: "25px",
            boxShadow: "0 5px 18px rgba(0,0,0,0.07)",
          }}
        >
          <h2 style={{ marginTop: "0" }}>
            {question.question}
          </h2>

          {/* OPTIONS */}

          <div style={{ marginTop: "25px" }}>
            {question.options.map((option, index) => {
              let background = "#ffffff";
              let border = "1px solid #ddd";

              if (answered) {
                if (option === question.answer) {
                  background = "#d9f7df";
                  border = "2px solid #35a853";
                } else if (
                  option === selectedAnswer &&
                  option !== question.answer
                ) {
                  background = "#ffe0e0";
                  border = "2px solid #e53935";
                }
              }

              return (
                <button
                  key={option}
                  onClick={() => chooseAnswer(option)}
                  disabled={answered}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "15px",
                    marginBottom: "12px",
                    border,
                    borderRadius: "12px",
                    background,
                    cursor: answered
                      ? "default"
                      : "pointer",
                    fontSize: "16px",
                  }}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              );
            })}
          </div>

          {/* ANSWER FEEDBACK */}

          {answered && (
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                borderRadius: "12px",
                background:
                  selectedAnswer === question.answer
                    ? "#e5f8e9"
                    : "#ffeaea",
              }}
            >
              <strong>
                {selectedAnswer === question.answer
                  ? "✅ Correct!"
                  : "❌ Wrong!"}
              </strong>

              {selectedAnswer !== question.answer && (
                <p style={{ marginBottom: "0" }}>
                  Correct answer:{" "}
                  <strong>{question.answer}</strong>
                </p>
              )}
            </div>
          )}

          {/* NEXT BUTTON */}

          {answered && (
            <button
              onClick={nextQuestion}
              style={{
                marginTop: "20px",
                padding: "12px 25px",
                border: "none",
                borderRadius: "10px",
                background: "#f5b800",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {currentQuestion === quizQuestions.length - 1
                ? "🏁 Finish Quiz"
                : "Next Question →"}
            </button>
          )}
        </div>

        <br />

        {/* NAVIGATION */}

        <button
          onClick={reviewTopic}
          style={{
            padding: "11px 20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            background: "#fff",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          📖 Back to Content
        </button>

        <button
          onClick={backToRoadmap}
          style={{
            padding: "11px 20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          ← Back to DBMS Roadmap
        </button>
      </div>
    );
  }

  return null;
}

export default DBMS;