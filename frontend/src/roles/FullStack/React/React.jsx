import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "react-introduction",
    title: "React Introduction",
    icon: "⚛️",
    description:
      "Understand what React is, why it is used, and how React applications work.",

    sections: [
      {
        title: "What is React?",
        content: (
          <>
            <p>
              <strong>React</strong> is a JavaScript library for building user
              interfaces. It is especially popular for creating interactive
              web applications.
            </p>

            <p>
              React applications are built using reusable components. Instead
              of manually updating every part of a page, developers describe
              what the interface should look like based on the application's
              data.
            </p>

            <div className="lesson-note">
              <strong>Remember:</strong> React is a library focused primarily
              on building user interfaces. Additional tools and libraries can
              be added when an application needs routing, data fetching,
              state management, and other features.
            </div>
          </>
        ),
      },

      {
        title: "Why Use React?",
        content: (
          <>
            <p>React provides several useful ideas for frontend development:</p>

            <ul>
              <li>Reusable UI components.</li>
              <li>Declarative user interfaces.</li>
              <li>Efficient updates to the interface.</li>
              <li>Component-based application structure.</li>
              <li>A large ecosystem and developer community.</li>
            </ul>
          </>
        ),
      },

      {
        title: "Component-Based Architecture",
        content: (
          <>
            <p>
              A React application can be divided into small components, with
              each component responsible for part of the interface.
            </p>

            <CodeBlock
              code={`App
├── Navbar
├── Sidebar
├── Dashboard
│   ├── UserCard
│   ├── ProgressCard
│   └── ActivityList
└── Footer`}
            />

            <p>
              This structure makes complex interfaces easier to organize and
              reuse.
            </p>
          </>
        ),
      },

      {
        title: "Creating a React Application",
        content: (
          <>
            <p>
              Modern React projects can be created using tools such as Vite.
              For example:
            </p>

            <CodeBlock
              code={`npm create vite@latest my-react-app

cd my-react-app

npm install

npm run dev`}
            />

            <p>
              The exact project setup can vary depending on the tooling and
              requirements of the application.
            </p>
          </>
        ),
      },

      {
        title: "React and JavaScript",
        content: (
          <>
            <p>
              React does not replace JavaScript. React applications are built
              using JavaScript and React-specific concepts such as components,
              JSX, state and hooks.
            </p>

            <p>
              Strong JavaScript fundamentals are therefore very important when
              learning React.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "React is a JavaScript library for building user interfaces.",
      "React uses reusable components.",
      "React encourages declarative UI development.",
      "JavaScript knowledge is important for React.",
      "Modern React projects commonly use build tools such as Vite.",
    ],

    mistakes: [
      "Thinking React replaces JavaScript.",
      "Trying to learn React without understanding basic JavaScript.",
      "Putting an entire application into one huge component.",
      "Assuming React automatically provides every frontend feature.",
    ],

    quiz: [
      {
        question: "What is React?",
        options: [
          "A database",
          "A JavaScript library for building user interfaces",
          "An operating system",
          "A programming language",
        ],
        answer: 1,
      },
      {
        question: "What is a major React concept?",
        options: [
          "Reusable components",
          "Database tables",
          "Server hardware",
          "Operating system kernels",
        ],
        answer: 0,
      },
      {
        question: "React applications are primarily built using which language?",
        options: ["Python", "Java", "JavaScript", "C"],
        answer: 2,
      },
    ],
  },

  {
    id: "jsx",
    title: "JSX",
    icon: "🧩",
    description:
      "Learn JSX syntax and how JavaScript and UI markup work together in React.",

    sections: [
      {
        title: "What is JSX?",
        content: (
          <>
            <p>
              <strong>JSX</strong> is a syntax extension commonly used with
              React that allows developers to write markup-like syntax inside
              JavaScript code.
            </p>

            <CodeBlock
              code={`function Welcome() {
  return <h1>Hello, React!</h1>;
}`}
            />

            <p>
              JSX makes component UI easier to read and write.
            </p>
          </>
        ),
      },

      {
        title: "JSX Expressions",
        content: (
          <>
            <p>
              JavaScript expressions can be placed inside JSX using curly
              braces.
            </p>

            <CodeBlock
              code={`const name = "Keerthana";

function Welcome() {
  return <h1>Hello, {name}!</h1>;
}`}
            />

            <p>
              Expressions can include variables, calculations, function calls
              and other valid JavaScript expressions.
            </p>
          </>
        ),
      },

      {
        title: "JSX Attributes",
        content: (
          <>
            <p>
              JSX uses attributes to provide information to elements.
            </p>

            <CodeBlock
              code={`const imageUrl = "/profile.png";

<img
  src={imageUrl}
  alt="Profile"
/>`}
            />

            <p>
              Some JSX attributes use names that differ from HTML. For
              example, React commonly uses <code>className</code> instead of
              HTML's <code>class</code>.
            </p>
          </>
        ),
      },

      {
        title: "Multiple Elements",
        content: (
          <>
            <p>
              A component must return a single root element or a fragment
              containing multiple elements.
            </p>

            <CodeBlock
              code={`function Profile() {
  return (
    <div>
      <h2>Keerthana</h2>
      <p>Frontend Developer</p>
    </div>
  );
}`}
            />

            <p>
              React fragments can also be used when an additional DOM element
              is unnecessary.
            </p>

            <CodeBlock
              code={`function Profile() {
  return (
    <>
      <h2>Keerthana</h2>
      <p>Frontend Developer</p>
    </>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "Conditional JSX",
        content: (
          <>
            <p>
              JavaScript operators can be used to conditionally display
              content.
            </p>

            <CodeBlock
              code={`function Message({ loggedIn }) {
  return (
    <div>
      {loggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "JSX allows markup-like syntax inside JavaScript.",
      "JavaScript expressions can be written inside curly braces.",
      "JSX uses attributes such as className.",
      "Components can return JSX.",
      "Conditional expressions can be used inside JSX.",
    ],

    mistakes: [
      "Using HTML class instead of className.",
      "Forgetting to close JSX tags.",
      "Putting statements directly inside JSX expressions.",
      "Forgetting that JSX expressions use curly braces.",
    ],

    quiz: [
      {
        question: "What is JSX?",
        options: [
          "A database language",
          "A syntax extension commonly used with React",
          "A CSS framework",
          "A Git command",
        ],
        answer: 1,
      },
      {
        question: "How do you insert a JavaScript expression into JSX?",
        options: ["()", "{}", "[]", "<>"],
        answer: 1,
      },
      {
        question: "Which attribute is commonly used instead of HTML class?",
        options: ["cssClass", "className", "classValue", "styleClass"],
        answer: 1,
      },
    ],
  },

  {
    id: "components",
    title: "Components",
    icon: "🧱",
    description:
      "Learn how React components are created, composed and reused.",

    sections: [
      {
        title: "What is a Component?",
        content: (
          <>
            <p>
              A <strong>component</strong> is a reusable piece of a React
              application's user interface.
            </p>

            <CodeBlock
              code={`function Welcome() {
  return <h1>Welcome!</h1>;
}`}
            />

            <p>
              Components allow large interfaces to be divided into smaller,
              manageable pieces.
            </p>
          </>
        ),
      },

      {
        title: "Functional Components",
        content: (
          <>
            <p>
              Modern React applications commonly use JavaScript functions as
              components.
            </p>

            <CodeBlock
              code={`function Button() {
  return <button>Click Me</button>;
}`}
            />

            <p>
              Component names should normally begin with a capital letter.
            </p>
          </>
        ),
      },

      {
        title: "Using Components",
        content: (
          <>
            <CodeBlock
              code={`function Header() {
  return <header>My Website</header>;
}

function App() {
  return (
    <div>
      <Header />
      <main>Content</main>
    </div>
  );
}`}
            />

            <p>
              <code>&lt;Header /&gt;</code> renders the Header component.
            </p>
          </>
        ),
      },

      {
        title: "Component Composition",
        content: (
          <>
            <p>
              Components can contain other components. This is called
              <strong> composition</strong>.
            </p>

            <CodeBlock
              code={`function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
}`}
            />

            <p>
              Composition helps keep applications modular.
            </p>
          </>
        ),
      },

      {
        title: "Reusable Components",
        content: (
          <>
            <CodeBlock
              code={`function Card() {
  return (
    <div className="card">
      <h3>Course</h3>
      <p>React Fundamentals</p>
    </div>
  );
}`}
            />

            <p>
              A reusable component can later accept props to display different
              information.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "Components are reusable UI building blocks.",
      "Modern React commonly uses function components.",
      "Component names normally begin with capital letters.",
      "Components can be composed together.",
      "Reusable components make applications easier to maintain.",
    ],

    mistakes: [
      "Using lowercase names for custom components.",
      "Creating unnecessarily huge components.",
      "Duplicating identical UI instead of creating reusable components.",
      "Mixing unrelated responsibilities into one component.",
    ],

    quiz: [
      {
        question: "What is a React component?",
        options: [
          "A reusable UI building block",
          "A database",
          "A Git branch",
          "A CSS property",
        ],
        answer: 0,
      },
      {
        question: "How are modern React function components commonly defined?",
        options: [
          "As JavaScript functions",
          "As SQL queries",
          "As CSS classes",
          "As Git commits",
        ],
        answer: 0,
      },
      {
        question: "How do you render a component named Header?",
        options: ["<header>", "<Header />", "[Header]", "render.Header"],
        answer: 1,
      },
    ],
  },

  {
    id: "props",
    title: "Props",
    icon: "📨",
    description:
      "Learn how data is passed from parent components to child components.",

    sections: [
      {
        title: "What are Props?",
        content: (
          <>
            <p>
              <strong>Props</strong>, short for properties, allow a parent
              component to pass data to a child component.
            </p>

            <CodeBlock
              code={`function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return <Welcome name="Keerthana" />;
}`}
            />
          </>
        ),
      },

      {
        title: "Passing Different Data",
        content: (
          <>
            <CodeBlock
              code={`function UserCard({ name, age, isStudent }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

<UserCard
  name="Anu"
  age={21}
  isStudent={true}
/>`}
            />

            <p>
              Props can contain strings, numbers, booleans, arrays, objects,
              functions and other values.
            </p>
          </>
        ),
      },

      {
        title: "Props are Read-Only",
        content: (
          <>
            <p>
              A child component should not directly modify the props it
              receives. Props are treated as inputs to the component.
            </p>

            <div className="lesson-note">
              <strong>Think of props as:</strong> data coming into a
              component.
            </div>
          </>
        ),
      },

      {
        title: "Passing Functions",
        content: (
          <>
            <p>
              A parent can pass a function as a prop so the child can notify
              the parent about an action.
            </p>

            <CodeBlock
              code={`function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Save
    </button>
  );
}

function App() {
  const handleSave = () => {
    console.log("Saved");
  };

  return <Button onClick={handleSave} />;
}`}
            />
          </>
        ),
      },

      {
        title: "Destructuring Props",
        content: (
          <>
            <p>
              Props can be accessed through the props object or destructured
              directly in the function parameter.
            </p>

            <CodeBlock
              code={`function User({ name, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "Props pass data from parent to child components.",
      "Props can contain many types of JavaScript values.",
      "Props should be treated as read-only.",
      "Functions can be passed through props.",
      "Props can be destructured in component parameters.",
    ],

    mistakes: [
      "Trying to directly modify props.",
      "Confusing props with state.",
      "Forgetting to pass required props.",
      "Calling a function immediately instead of passing the function reference to an event handler.",
    ],

    quiz: [
      {
        question: "What are props used for?",
        options: [
          "Passing data to components",
          "Creating databases",
          "Installing packages",
          "Creating Git branches",
        ],
        answer: 0,
      },
      {
        question: "Should a child component directly modify its props?",
        options: ["Yes", "No", "Only strings", "Only numbers"],
        answer: 1,
      },
      {
        question: "Can a function be passed as a prop?",
        options: ["Yes", "No", "Only in CSS", "Only in HTML"],
        answer: 0,
      },
    ],
  },

  {
    id: "state",
    title: "State",
    icon: "🔄",
    description:
      "Learn how state stores changing data and causes React components to update.",

    sections: [
      {
        title: "What is State?",
        content: (
          <>
            <p>
              <strong>State</strong> is data managed by a component that can
              change over time.
            </p>

            <p>
              When state changes, React can render the component again so the
              interface reflects the new state.
            </p>
          </>
        ),
      },

      {
        title: "useState",
        content: (
          <>
            <p>
              The <code>useState</code> hook creates state in a function
              component.
            </p>

            <CodeBlock
              code={`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "Updating State",
        content: (
          <>
            <p>
              State should be updated using its setter function rather than
              directly changing the state variable.
            </p>

            <CodeBlock
              code={`const [name, setName] = useState("");

setName("Keerthana");`}
            />
          </>
        ),
      },

      {
        title: "State with Objects",
        content: (
          <>
            <p>
              When state contains an object, create a new object when updating
              it rather than mutating the existing object.
            </p>

            <CodeBlock
              code={`const [user, setUser] = useState({
  name: "Keerthana",
  age: 21,
});

setUser({
  ...user,
  age: 22,
});`}
            />
          </>
        ),
      },

      {
        title: "State with Arrays",
        content: (
          <>
            <p>
              Arrays in state should also be updated immutably.
            </p>

            <CodeBlock
              code={`const [items, setItems] = useState([]);

setItems([...items, "React"]);`}
            />

            <p>
              Methods such as <code>map</code>, <code>filter</code> and the
              spread operator are commonly useful when working with arrays in
              state.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "State stores data that can change over time.",
      "useState is a common hook for local component state.",
      "State should be updated using its setter.",
      "Avoid directly mutating objects and arrays in state.",
      "State changes can cause components to re-render.",
    ],

    mistakes: [
      "Directly changing state variables.",
      "Mutating objects or arrays stored in state.",
      "Forgetting to use the functional updater when an update depends on previous state.",
      "Putting every piece of data into state unnecessarily.",
    ],

    quiz: [
      {
        question: "What is state?",
        options: [
          "Data managed by a component that can change",
          "A CSS file",
          "A database table",
          "A Git branch",
        ],
        answer: 0,
      },
      {
        question: "Which hook is commonly used for local state?",
        options: ["useData", "useState", "useValue", "useLocal"],
        answer: 1,
      },
      {
        question: "How should state normally be updated?",
        options: [
          "By directly modifying the variable",
          "Using the state setter",
          "By editing the DOM manually",
          "By restarting React",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "events",
    title: "Event Handling",
    icon: "🖱️",
    description:
      "Learn how React handles clicks, input changes, form submissions and other events.",

    sections: [
      {
        title: "React Events",
        content: (
          <>
            <p>
              React allows components to respond to user interactions such as
              clicks, typing, form submissions and mouse events.
            </p>

            <CodeBlock
              code={`function Button() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "Passing Event Handlers",
        content: (
          <>
            <p>
              Pass the function itself to the event handler rather than
              calling it during rendering.
            </p>

            <CodeBlock
              code={`// Correct
<button onClick={handleClick}>
  Click
</button>

// Also valid
<button onClick={() => handleClick()}>
  Click
</button>`}
            />
          </>
        ),
      },

      {
        title: "Handling Input Events",
        content: (
          <>
            <CodeBlock
              code={`function SearchBox() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input onChange={handleChange} />
  );
}`}
            />

            <p>
              The event object provides information about the interaction and
              the element that triggered it.
            </p>
          </>
        ),
      },

      {
        title: "Event Object",
        content: (
          <>
            <CodeBlock
              code={`function handleClick(event) {
  console.log(event.type);
  console.log(event.target);
}`}
            />

            <p>
              React provides an event object to event handlers.
            </p>
          </>
        ),
      },

      {
        title: "Preventing Default Behavior",
        content: (
          <>
            <p>
              For events such as form submission, you can prevent the browser's
              default behavior when needed.
            </p>

            <CodeBlock
              code={`function handleSubmit(event) {
  event.preventDefault();

  console.log("Form submitted");
}`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "React supports event handlers such as onClick and onChange.",
      "Event handlers are usually functions.",
      "The event object contains information about the event.",
      "event.preventDefault() can prevent default browser behavior.",
      "Event handlers can update component state.",
    ],

    mistakes: [
      "Calling event handlers immediately during rendering.",
      "Forgetting event.preventDefault() for controlled form submissions when appropriate.",
      "Ignoring the event object's target.",
      "Putting too much unrelated logic directly inside JSX.",
    ],

    quiz: [
      {
        question: "Which prop handles a click event in React?",
        options: ["onclick", "onClick", "click", "handleClickEvent"],
        answer: 1,
      },
      {
        question: "What does event.preventDefault() do?",
        options: [
          "Stops React from rendering",
          "Prevents the default browser action",
          "Deletes state",
          "Creates a component",
        ],
        answer: 1,
      },
      {
        question: "Which event is commonly used for text input changes?",
        options: ["onChange", "onText", "onInputChangeOnly", "onType"],
        answer: 0,
      },
    ],
  },

  {
    id: "conditional-rendering",
    title: "Conditional Rendering",
    icon: "🔀",
    description:
      "Learn how to display different UI based on application state and conditions.",

    sections: [
      {
        title: "What is Conditional Rendering?",
        content: (
          <>
            <p>
              Conditional rendering means displaying different UI depending on
              a condition.
            </p>

            <CodeBlock
              code={`function Dashboard({ loggedIn }) {
  if (!loggedIn) {
    return <p>Please log in.</p>;
  }

  return <p>Welcome to your dashboard.</p>;
}`}
            />
          </>
        ),
      },

      {
        title: "Ternary Operator",
        content: (
          <>
            <CodeBlock
              code={`function Message({ loggedIn }) {
  return (
    <div>
      {loggedIn ? (
        <p>Welcome!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "Logical AND",
        content: (
          <>
            <p>
              The <code>&amp;&amp;</code> operator is useful when something
              should be rendered only if a condition is true.
            </p>

            <CodeBlock
              code={`function Notifications({ count }) {
  return (
    <div>
      {count > 0 && (
        <p>You have notifications.</p>
      )}
    </div>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "Multiple Conditions",
        content: (
          <>
            <CodeBlock
              code={`function Status({ status }) {
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Something went wrong.</p>;
  }

  return <p>Data loaded.</p>;
}`}
            />
          </>
        ),
      },

      {
        title: "Conditional Classes and Styles",
        content: (
          <>
            <CodeBlock
              code={`function Button({ active }) {
  return (
    <button
      className={active ? "active" : "inactive"}
    >
      Button
    </button>
  );
}`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "Conditional rendering displays UI based on conditions.",
      "if statements work well for larger rendering decisions.",
      "Ternary operators are useful for two alternatives.",
      "&& is useful for rendering something only when a condition is true.",
      "Conditions can also control classes and styles.",
    ],

    mistakes: [
      "Creating extremely complicated nested ternaries.",
      "Forgetting that JavaScript expressions can produce unexpected values.",
      "Using conditions that are difficult to understand.",
      "Repeating the same condition throughout the component.",
    ],

    quiz: [
      {
        question: "What does conditional rendering mean?",
        options: [
          "Displaying UI based on conditions",
          "Deleting components",
          "Installing React",
          "Creating databases",
        ],
        answer: 0,
      },
      {
        question: "Which operator is commonly used for two alternative UI states?",
        options: ["+", "?", "Ternary ?: ", "==="],
        answer: 2,
      },
      {
        question: "Which operator can conditionally render content when a condition is true?",
        options: ["&&", "||=", "++", "%"],
        answer: 0,
      },
    ],
  },

  {
    id: "lists",
    title: "Lists & Keys",
    icon: "📋",
    description:
      "Learn how to render collections of data and why keys are important in React.",

    sections: [
      {
        title: "Rendering a List",
        content: (
          <>
            <p>
              The JavaScript <code>map()</code> method is commonly used to
              render a list of React elements.
            </p>

            <CodeBlock
              code={`const topics = [
  "HTML",
  "CSS",
  "React",
];

function TopicList() {
  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic}>
          {topic}
        </li>
      ))}
    </ul>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "Why Keys Matter",
        content: (
          <>
            <p>
              A <strong>key</strong> gives React a stable identity for an item
              in a rendered collection.
            </p>

            <p>
              Keys help React determine which items were added, removed or
              changed when a list updates.
            </p>
          </>
        ),
      },

      {
        title: "Good Keys",
        content: (
          <>
            <CodeBlock
              code={`const users = [
  { id: 101, name: "Anu" },
  { id: 102, name: "Ravi" },
];

function Users() {
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}`}
            />

            <p>
              A stable unique identifier from the data is generally a better
              key than a changing value.
            </p>
          </>
        ),
      },

      {
        title: "Index as a Key",
        content: (
          <>
            <p>
              Using an array index as a key can be acceptable in some static
              lists, but can cause problems when list items are inserted,
              removed or reordered.
            </p>

            <CodeBlock
              code={`items.map((item, index) => (
  <div key={index}>
    {item}
  </div>
))`}
            />

            <div className="lesson-note">
              <strong>Best practice:</strong> Prefer stable unique IDs when
              they are available.
            </div>
          </>
        ),
      },
    ],

    keyPoints: [
      "map() is commonly used to render lists.",
      "Each list item should have a key.",
      "Keys help React identify list items.",
      "Stable unique IDs are generally preferred.",
      "Index keys can be problematic for changing lists.",
    ],

    mistakes: [
      "Forgetting keys entirely.",
      "Using random values as keys.",
      "Using array indexes for dynamic lists without considering the consequences.",
      "Using a non-unique value as a key.",
    ],

    quiz: [
      {
        question: "Which JavaScript method is commonly used to render lists?",
        options: ["map()", "push()", "sortOnly()", "joinUI()"],
        answer: 0,
      },
      {
        question: "Why are keys used in React lists?",
        options: [
          "To style elements",
          "To help React identify list items",
          "To create CSS",
          "To store passwords",
        ],
        answer: 1,
      },
      {
        question: "What is generally preferred for list keys?",
        options: [
          "Random numbers",
          "Stable unique IDs",
          "Always the same string",
          "Current time",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "forms",
    title: "Forms in React",
    icon: "📝",
    description:
      "Learn how to build, control and validate forms in React.",

    sections: [
      {
        title: "React Forms",
        content: (
          <>
            <p>
              Forms are used to collect information such as names, emails,
              passwords, search terms and other user input.
            </p>

            <p>
              React commonly manages form values using component state.
            </p>
          </>
        ),
      },

      {
        title: "Controlled Inputs",
        content: (
          <>
            <CodeBlock
              code={`function Login() {
  const [email, setEmail] = useState("");

  return (
    <input
      value={email}
      onChange={(event) =>
        setEmail(event.target.value)
      }
    />
  );
}`}
            />

            <p>
              In a controlled input, React state is the source of truth for
              the input value.
            </p>
          </>
        ),
      },

      {
        title: "Handling Form Submission",
        content: (
          <>
            <CodeBlock
              code={`function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submit form");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" />
      <button type="submit">
        Login
      </button>
    </form>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "Multiple Inputs",
        content: (
          <>
            <CodeBlock
              code={`const [form, setForm] = useState({
  name: "",
  email: "",
});

const handleChange = (event) => {
  setForm({
    ...form,
    [event.target.name]: event.target.value,
  });
};`}
            />

            <p>
              The computed property name lets one handler update different
              fields.
            </p>
          </>
        ),
      },

      {
        title: "Basic Validation",
        content: (
          <>
            <p>
              Validation checks whether submitted data satisfies the
              application's requirements.
            </p>

            <CodeBlock
              code={`if (!email.includes("@")) {
  setError("Enter a valid email.");
  return;
}`}
            />

            <p>
              Client-side validation improves user experience, but important
              validation should also be performed on the server.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "React forms commonly use controlled inputs.",
      "State can store form values.",
      "onChange handles input updates.",
      "onSubmit handles form submission.",
      "Validation should protect both user experience and application logic.",
    ],

    mistakes: [
      "Forgetting to prevent unwanted browser form submission.",
      "Mixing controlled and uncontrolled approaches without understanding them.",
      "Validating only on the client for security-sensitive operations.",
      "Not displaying useful validation errors.",
    ],

    quiz: [
      {
        question: "What is a controlled input?",
        options: [
          "An input whose value is managed by React state",
          "An input styled with CSS",
          "An input stored in Git",
          "An input stored in a database automatically",
        ],
        answer: 0,
      },
      {
        question: "Which event handles form submission?",
        options: ["onSend", "onSubmit", "onForm", "onPost"],
        answer: 1,
      },
      {
        question: "Where should important security validation happen?",
        options: [
          "Only in the browser",
          "Only in CSS",
          "On the server as well",
          "Only in JSX",
        ],
        answer: 2,
      },
    ],
  },

  {
    id: "hooks",
    title: "React Hooks",
    icon: "🪝",
    description:
      "Understand React Hooks and how they provide state and other React features to function components.",

    sections: [
      {
        title: "What are Hooks?",
        content: (
          <>
            <p>
              <strong>Hooks</strong> are functions that let function
              components use React features such as state and effects.
            </p>

            <p>
              Common hooks include <code>useState</code>,{" "}
              <code>useEffect</code>, <code>useRef</code> and{" "}
              <code>useContext</code>.
            </p>
          </>
        ),
      },

      {
        title: "Rules of Hooks",
        content: (
          <>
            <p>
              Hooks have important usage rules.
            </p>

            <ul>
              <li>Call hooks at the top level of a component or custom hook.</li>
              <li>Do not call hooks inside loops or conditions.</li>
              <li>Call hooks from React function components or custom hooks.</li>
            </ul>

            <CodeBlock
              code={`function Counter() {
  const [count, setCount] = useState(0);

  // Use hooks consistently at the top level.
  
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "Common Hooks",
        content: (
          <>
            <ul>
              <li>
                <strong>useState</strong> — local component state.
              </li>
              <li>
                <strong>useEffect</strong> — synchronize with external
                systems and perform effects.
              </li>
              <li>
                <strong>useRef</strong> — hold mutable values or reference DOM
                elements.
              </li>
              <li>
                <strong>useContext</strong> — consume context values.
              </li>
            </ul>
          </>
        ),
      },

      {
        title: "Custom Hooks",
        content: (
          <>
            <p>
              Developers can create custom hooks to reuse stateful logic across
              components.
            </p>

            <CodeBlock
              code={`function useOnlineStatus() {
  // reusable hook logic
}`}
            />

            <p>
              Custom hooks normally begin with the word <code>use</code>.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "Hooks provide React features to function components.",
      "Hooks should follow the Rules of Hooks.",
      "Common hooks include useState, useEffect, useRef and useContext.",
      "Custom hooks allow reusable stateful logic.",
      "Custom hooks normally begin with use.",
    ],

    mistakes: [
      "Calling hooks conditionally.",
      "Calling hooks inside loops.",
      "Calling hooks from ordinary non-hook functions.",
      "Creating custom hooks that do not actually provide reusable logic.",
    ],

    quiz: [
      {
        question: "What do React Hooks provide?",
        options: [
          "Access to React features in function components",
          "Database storage",
          "CSS compilation",
          "Git hosting",
        ],
        answer: 0,
      },
      {
        question: "Where should hooks normally be called?",
        options: [
          "Inside loops",
          "Inside conditions",
          "At the top level of components or custom hooks",
          "Inside CSS",
        ],
        answer: 2,
      },
      {
        question: "What naming pattern is commonly used for custom hooks?",
        options: ["hook_", "use", "react_", "custom_"],
        answer: 1,
      },
    ],
  },

  {
    id: "useeffect",
    title: "useEffect",
    icon: "⚙️",
    description:
      "Learn how useEffect synchronizes components with external systems and handles effects.",

    sections: [
      {
        title: "What is useEffect?",
        content: (
          <>
            <p>
              <code>useEffect</code> is a React hook used to synchronize a
              component with an external system or perform work related to
              rendering.
            </p>

            <CodeBlock
              code={`import { useEffect } from "react";

useEffect(() => {
  console.log("Effect ran");
}, []);`}
            />
          </>
        ),
      },

      {
        title: "Dependency Array",
        content: (
          <>
            <p>
              The dependency array controls when an effect is synchronized
              again.
            </p>

            <CodeBlock
              code={`useEffect(() => {
  console.log("Runs after render");
});

useEffect(() => {
  console.log("Runs after initial mount");
}, []);

useEffect(() => {
  console.log("Runs when count changes");
}, [count]);`}
            />
          </>
        ),
      },

      {
        title: "Fetching Data",
        content: (
          <>
            <p>
              Effects are often used when a component needs to synchronize
              with external data or browser APIs.
            </p>

            <CodeBlock
              code={`useEffect(() => {
  fetch("/api/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}, []);`}
            />

            <p>
              Real applications should also handle loading, errors and
              cancellation where appropriate.
            </p>
          </>
        ),
      },

      {
        title: "Cleanup",
        content: (
          <>
            <p>
              An effect can return a cleanup function. Cleanup is useful for
              subscriptions, timers and event listeners.
            </p>

            <CodeBlock
              code={`useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);`}
            />
          </>
        ),
      },

      {
        title: "Avoiding Unnecessary Effects",
        content: (
          <>
            <p>
              Not every calculation or state transformation needs an effect.
              If something can be calculated directly during rendering, an
              effect may be unnecessary.
            </p>

            <div className="lesson-note">
              <strong>Think:</strong> useEffect is mainly for synchronizing
              with something outside the component's normal rendering logic.
            </div>
          </>
        ),
      },
    ],

    keyPoints: [
      "useEffect is used for synchronization and effects.",
      "Dependencies determine when an effect runs again.",
      "Effects can return cleanup functions.",
      "Timers and subscriptions often require cleanup.",
      "Not every calculation needs useEffect.",
    ],

    mistakes: [
      "Adding unnecessary effects.",
      "Using incorrect dependencies.",
      "Forgetting cleanup for subscriptions or timers.",
      "Creating infinite effect loops through incorrect state updates.",
    ],

    quiz: [
      {
        question: "What is useEffect commonly used for?",
        options: [
          "Synchronizing with external systems and effects",
          "Creating CSS",
          "Creating Git repositories",
          "Defining HTML tags",
        ],
        answer: 0,
      },
      {
        question: "What does an empty dependency array commonly indicate?",
        options: [
          "The effect has no code",
          "The effect is synchronized after the initial mount",
          "The effect runs on every state update",
          "The effect is disabled",
        ],
        answer: 1,
      },
      {
        question: "What can an effect return?",
        options: [
          "A cleanup function",
          "A CSS stylesheet",
          "A Git commit",
          "A database",
        ],
        answer: 0,
      },
    ],
  },

  {
    id: "useref",
    title: "useRef",
    icon: "📌",
    description:
      "Learn how useRef stores mutable values without causing re-renders and references DOM elements.",

    sections: [
      {
        title: "What is useRef?",
        content: (
          <>
            <p>
              <code>useRef</code> creates a mutable reference object whose
              value persists between renders.
            </p>

            <CodeBlock
              code={`const countRef = useRef(0);

console.log(countRef.current);`}
            />

            <p>
              The stored value is accessed through the <code>current</code>
              property.
            </p>
          </>
        ),
      },

      {
        title: "Referencing DOM Elements",
        content: (
          <>
            <p>
              One common use of useRef is accessing a DOM element.
            </p>

            <CodeBlock
              code={`function Search() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus
      </button>
    </>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "useRef and Re-Renders",
        content: (
          <>
            <p>
              Updating <code>ref.current</code> does not itself cause the
              component to re-render.
            </p>

            <p>
              This makes refs useful for values that need to persist but do not
              need to directly control the rendered UI.
            </p>
          </>
        ),
      },

      {
        title: "Storing Mutable Values",
        content: (
          <>
            <CodeBlock
              code={`const renderCount = useRef(0);

renderCount.current += 1;`}
            />

            <p>
              This can track information across renders without putting that
              information into state.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "useRef creates a persistent mutable reference.",
      "The value is accessed through current.",
      "Changing ref.current does not itself trigger a re-render.",
      "Refs can point to DOM elements.",
      "Refs can store values that do not directly control UI.",
    ],

    mistakes: [
      "Using refs when state is actually required.",
      "Assuming changing ref.current re-renders the component.",
      "Accessing ref.current before the referenced element exists.",
      "Using refs to bypass React state unnecessarily.",
    ],

    quiz: [
      {
        question: "Where is a useRef value stored?",
        options: ["ref.value", "ref.current", "ref.data", "ref.state"],
        answer: 1,
      },
      {
        question: "Does changing ref.current itself cause a re-render?",
        options: ["Yes", "No", "Only in CSS", "Only in production"],
        answer: 1,
      },
      {
        question: "What can useRef commonly reference?",
        options: [
          "DOM elements",
          "Git commits",
          "SQL tables",
          "CSS files only",
        ],
        answer: 0,
      },
    ],
  },

  {
    id: "context",
    title: "Context API",
    icon: "🌐",
    description:
      "Learn how Context allows data to be shared across a component tree without passing props through every level.",

    sections: [
      {
        title: "What is Context?",
        content: (
          <>
            <p>
              React Context allows a value to be made available to components
              deeper in the component tree without manually passing it through
              every intermediate component.
            </p>

            <p>
              It can be useful for values such as themes, localization,
              authentication information and other shared application data.
            </p>
          </>
        ),
      },

      {
        title: "Creating Context",
        content: (
          <>
            <CodeBlock
              code={`import { createContext } from "react";

const ThemeContext = createContext("light");`}
            />

            <p>
              The context defines the shared value's communication mechanism.
            </p>
          </>
        ),
      },

      {
        title: "Providing a Value",
        content: (
          <>
            <CodeBlock
              code={`<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>`}
            />

            <p>
              The provider makes a value available to components below it in
              the tree.
            </p>
          </>
        ),
      },

      {
        title: "Reading Context",
        content: (
          <>
            <CodeBlock
              code={`import { useContext } from "react";

function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button>
      Theme: {theme}
    </button>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "When to Use Context",
        content: (
          <>
            <p>
              Context can reduce prop drilling when many components need access
              to the same value.
            </p>

            <div className="lesson-note">
              <strong>Important:</strong> Context is not automatically the
              correct solution for every shared state problem. Use it when
              sharing a value through the component tree makes sense.
            </div>
          </>
        ),
      },
    ],

    keyPoints: [
      "Context shares values through a component tree.",
      "Context can reduce prop drilling.",
      "createContext creates a context.",
      "A provider makes a value available to descendants.",
      "useContext reads a context value.",
    ],

    mistakes: [
      "Using context for every piece of state.",
      "Putting frequently changing unrelated values into one huge context.",
      "Forgetting to provide the expected context value.",
      "Using context when simple props would be clearer.",
    ],

    quiz: [
      {
        question: "What problem can Context help reduce?",
        options: [
          "Prop drilling",
          "CSS compilation",
          "Git conflicts",
          "Database normalization",
        ],
        answer: 0,
      },
      {
        question: "Which function creates a context?",
        options: ["makeContext", "createContext", "newContext", "useContext"],
        answer: 1,
      },
      {
        question: "Which hook reads a context value?",
        options: ["useState", "useContext", "useValue", "useProvider"],
        answer: 1,
      },
    ],
  },

  {
    id: "routing",
    title: "React Router",
    icon: "🛣️",
    description:
      "Learn how client-side routing allows React applications to display different pages and views.",

    sections: [
      {
        title: "What is Routing?",
        content: (
          <>
            <p>
              Routing determines which UI should be displayed for a particular
              URL or application location.
            </p>

            <p>
              In React applications, a routing library such as React Router
              can provide navigation between different views.
            </p>
          </>
        ),
      },

      {
        title: "Defining Routes",
        content: (
          <>
            <CodeBlock
              code={`import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}`}
            />
          </>
        ),
      },

      {
        title: "Navigation",
        content: (
          <>
            <CodeBlock
              code={`import { Link } from "react-router-dom";

<Link to="/about">
  About
</Link>`}
            />

            <p>
              Link components allow users to navigate within the application
              without manually changing the browser location using ordinary
              anchor behavior.
            </p>
          </>
        ),
      },

      {
        title: "Route Parameters",
        content: (
          <>
            <CodeBlock
              code={`<Route
  path="/users/:id"
  element={<User />}
/>`}
            />

            <p>
              A route parameter such as <code>:id</code> can represent a
              dynamic part of a URL.
            </p>
          </>
        ),
      },

      {
        title: "Nested Routes",
        content: (
          <>
            <p>
              Larger applications can organize routes into nested structures.
            </p>

            <CodeBlock
              code={`/dashboard
/dashboard/profile
/dashboard/settings
/dashboard/courses`}
            />

            <p>
              Nested routing can mirror the structure of the application's
              interface.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "Routing maps URLs to UI.",
      "React Router is commonly used for client-side routing.",
      "Routes define paths and the components they render.",
      "Link provides navigation within a routed application.",
      "Route parameters allow dynamic URLs.",
    ],

    mistakes: [
      "Forgetting to configure the router.",
      "Using incorrect route paths.",
      "Creating duplicate or confusing routes.",
      "Using normal navigation incorrectly when client-side routing is intended.",
    ],

    quiz: [
      {
        question: "What does routing determine?",
        options: [
          "Which UI is displayed for a URL",
          "Which database is used",
          "Which CSS color is active",
          "Which Git branch exists",
        ],
        answer: 0,
      },
      {
        question: "Which component commonly defines a route?",
        options: ["<Route />", "<Path />", "<Page />", "<URL />"],
        answer: 0,
      },
      {
        question: "What is :id in /users/:id?",
        options: [
          "A CSS class",
          "A route parameter",
          "A React hook",
          "A Git variable",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "api",
    title: "API Integration",
    icon: "🔗",
    description:
      "Learn how React applications communicate with backend APIs and handle asynchronous data.",

    sections: [
      {
        title: "What is API Integration?",
        content: (
          <>
            <p>
              API integration allows a React frontend to communicate with a
              backend service.
            </p>

            <p>
              A frontend might request users, products, courses or other data
              from an API and then display the response.
            </p>

            <CodeBlock
              code={`React Frontend
      ↓
   HTTP Request
      ↓
Backend API
      ↓
   Database
      ↓
HTTP Response
      ↓
React Frontend`}
            />
          </>
        ),
      },

      {
        title: "Using fetch",
        content: (
          <>
            <CodeBlock
              code={`fetch("/api/courses")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });`}
            />
          </>
        ),
      },

      {
        title: "API Calls with useEffect",
        content: (
          <>
            <CodeBlock
              code={`useEffect(() => {
  const loadCourses = async () => {
    try {
      const response = await fetch(
        "/api/courses"
      );

      const data = await response.json();

      setCourses(data);
    } catch (error) {
      setError("Failed to load courses");
    }
  };

  loadCourses();
}, []);`}
            />
          </>
        ),
      },

      {
        title: "Loading and Error States",
        content: (
          <>
            <CodeBlock
              code={`const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [courses, setCourses] = useState([]);

if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>{error}</p>;
}

return <CourseList courses={courses} />;`}
            />

            <p>
              Handling loading, success and error states makes API-driven UI
              more reliable.
            </p>
          </>
        ),
      },

      {
        title: "Sending Data",
        content: (
          <>
            <CodeBlock
              code={`const response = await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Keerthana",
  }),
});`}
            />

            <p>
              The exact endpoint, method and request body depend on the
              backend API contract.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "React applications can communicate with backend APIs.",
      "fetch is a built-in browser API for making HTTP requests.",
      "API requests are asynchronous.",
      "Loading and error states should be handled.",
      "POST and other methods can send data to an API.",
    ],

    mistakes: [
      "Assuming an API request always succeeds.",
      "Ignoring HTTP errors.",
      "Rendering data before checking its availability.",
      "Hardcoding sensitive credentials in frontend code.",
      "Not matching the frontend request to the backend API contract.",
    ],

    quiz: [
      {
        question: "What does API integration allow a frontend to do?",
        options: [
          "Communicate with backend services",
          "Create CSS automatically",
          "Replace JavaScript",
          "Create Git branches",
        ],
        answer: 0,
      },
      {
        question: "Which browser API can make HTTP requests?",
        options: ["fetch", "requestHTML", "httpReact", "sendBrowser"],
        answer: 0,
      },
      {
        question: "Which states are commonly useful during API requests?",
        options: [
          "Loading, success and error",
          "Only success",
          "Only loading",
          "Only error",
        ],
        answer: 0,
      },
    ],
  },

  {
    id: "projects",
    title: "React Projects",
    icon: "💻",
    description:
      "Apply React concepts by building progressively more realistic frontend projects.",

    sections: [
      {
        title: "Project 1: Counter App",
        content: (
          <>
            <p>
              Build a counter application to practice components, state and
              event handling.
            </p>

            <CodeBlock
              code={`Features:

• Display count
• Increment
• Decrement
• Reset
• Prevent invalid values if required`}
            />

            <p>
              This project is simple but teaches the core React update cycle.
            </p>
          </>
        ),
      },

      {
        title: "Project 2: Todo Application",
        content: (
          <>
            <p>
              Build a Todo application to practice arrays, state, forms and
              list rendering.
            </p>

            <CodeBlock
              code={`Features:

• Add task
• Delete task
• Mark task complete
• Filter tasks
• Display task count`}
            />
          </>
        ),
      },

      {
        title: "Project 3: Weather Dashboard",
        content: (
          <>
            <p>
              Build a weather dashboard that consumes an external API.
            </p>

            <CodeBlock
              code={`Features:

• Search city
• Fetch weather
• Loading state
• Error state
• Weather display
• Responsive UI`}
            />

            <p>
              This project helps connect React UI concepts with asynchronous
              API integration.
            </p>
          </>
        ),
      },

      {
        title: "Project 4: Course Dashboard",
        content: (
          <>
            <p>
              Build a learning dashboard similar to a real educational
              platform.
            </p>

            <CodeBlock
              code={`Features:

• Course list
• Course details
• Progress tracking
• Search
• Categories
• User dashboard
• Routing`}
            />
          </>
        ),
      },

      {
        title: "Project 5: Full React Application",
        content: (
          <>
            <p>
              Build a complete React application that combines the concepts
              learned throughout this roadmap.
            </p>

            <ul>
              <li>Reusable components.</li>
              <li>Props and state.</li>
              <li>Forms.</li>
              <li>Routing.</li>
              <li>API integration.</li>
              <li>Authentication-aware UI.</li>
              <li>Loading and error states.</li>
              <li>Responsive design.</li>
            </ul>

            <div className="lesson-note">
              <strong>Goal:</strong> Don't just copy a tutorial. Design the
              application's structure yourself and explain why each major
              component exists.
            </div>
          </>
        ),
      },

      {
        title: "React Project Workflow",
        content: (
          <>
            <CodeBlock
              code={`1. Define the problem

2. Plan pages and components

3. Create the React project

4. Build reusable components

5. Add state

6. Add forms and events

7. Add routing

8. Connect APIs

9. Handle loading and errors

10. Test and improve

11. Build for production`}
            />

            <p>
              Building multiple projects is one of the best ways to turn React
              concepts into practical development skills.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "Projects turn React concepts into practical skills.",
      "Start with small applications and gradually increase complexity.",
      "Projects should combine multiple React concepts.",
      "API integration is important for realistic applications.",
      "A strong project should be understandable and explainable.",
    ],

    mistakes: [
      "Copying tutorials without understanding the code.",
      "Building projects that are too large before learning the fundamentals.",
      "Ignoring error and loading states.",
      "Putting everything into one component.",
      "Not being able to explain your own project decisions.",
    ],

    quiz: [
      {
        question: "Which project is useful for practicing list rendering and state?",
        options: [
          "Todo application",
          "Operating system",
          "Database engine",
          "Git server",
        ],
        answer: 0,
      },
      {
        question: "What should a realistic API-based React project handle?",
        options: [
          "Only success",
          "Loading and error states as well as successful data",
          "Only CSS",
          "Only Git commits",
        ],
        answer: 1,
      },
      {
        question: "What is the best way to improve React skills?",
        options: [
          "Only reading documentation",
          "Building and understanding projects",
          "Avoiding code",
          "Memorizing every HTML tag",
        ],
        answer: 1,
      },
    ],
  },
];

function CodeBlock({ code }) {
  return (
    <pre
      style={{
        background: "#111827",
        color: "#f9fafb",
        padding: "18px",
        borderRadius: "12px",
        overflowX: "auto",
        fontSize: "14px",
        lineHeight: "1.6",
        margin: "18px 0",
      }}
    >
      <code>{code}</code>
    </pre>
  );
}

function InfoCard({ title, children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "18px",
        padding: "28px",
        marginTop: "22px",
        border: "1px solid #dbeafe",
      }}
    >
      <h2
        style={{
          margin: "0 0 18px",
          color: "#111827",
        }}
      >
        {title}
      </h2>

      {children}
    </div>
  );
}

const listStyle = {
  color: "#374151",
  lineHeight: "1.8",
  paddingLeft: "25px",
};

function buttonStyle(background) {
  return {
    background,
    color: "white",
    border: "none",
    borderRadius: "9px",
    padding: "11px 20px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  };
}

function navButtonStyle(disabled) {
  return {
    background: disabled ? "#e5e7eb" : "#2563eb",
    color: disabled ? "#9ca3af" : "white",
    border: "none",
    borderRadius: "9px",
    padding: "11px 20px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: disabled ? "not-allowed" : "pointer",
  };
}

function ReactRoadmap({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-react", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const completedSubtopics = completed.length;

  const overallProgress =
    subtopics.length === 0
      ? 0
      : Math.round((completedSubtopics / subtopics.length) * 100);

  const selectedIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const selectedTopic =
    selectedIndex >= 0 ? subtopics[selectedIndex] : null;

  const toggleComplete = () => {
    if (!selectedTopic) return;
    saveProgress(selectedTopic.id);
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    if (!selectedTopic) return;

    setQuizAnswers((previous) => ({
      ...previous,
      [`${selectedTopic.id}-${questionIndex}`]: answerIndex,
    }));
  };

  const submitQuiz = async () => {
    if (!selectedTopic || !Array.isArray(selectedTopic.quiz)) return;

    const score = selectedTopic.quiz.reduce((total, question, index) => {
      const selectedAnswer = quizAnswers[`${selectedTopic.id}-${index}`];
      return total + (selectedAnswer === question.answer ? 1 : 0);
    }, 0);

    await saveQuizResult({
      subject: "Full Stack",
      role: "Full Stack Developer",
      topic: selectedTopic.title,
      topicId: selectedTopic.id,
      score,
      totalQuestions: selectedTopic.quiz.length
    });

    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    if (!selectedTopic) return;

    const updatedAnswers = { ...quizAnswers };

    selectedTopic.quiz.forEach((_, index) => {
      delete updatedAnswers[`${selectedTopic.id}-${index}`];
    });

    setQuizAnswers(updatedAnswers);
    setQuizSubmitted(false);
  };

  const openSubtopic = (topic) => {
    setSelectedSubtopic(topic.id);
    setQuizSubmitted(false);
  };

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedSubtopic(subtopics[selectedIndex - 1].id);
      setQuizSubmitted(false);
    }
  };

  const goToNext = () => {
    if (selectedIndex < subtopics.length - 1) {
      setSelectedSubtopic(subtopics[selectedIndex + 1].id);
      setQuizSubmitted(false);
    }
  };

  if (selectedTopic) {
    const isCompleted = completed.includes(selectedTopic.id);

    const quizScore = selectedTopic.quiz.reduce(
      (score, question, index) => {
        const selectedAnswer =
          quizAnswers[`${selectedTopic.id}-${index}`];

        return score + (selectedAnswer === question.answer ? 1 : 0);
      },
      0
    );

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
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setSelectedSubtopic(null)}
            style={{
              ...buttonStyle("#2563eb"),
              marginBottom: "20px",
            }}
          >
            ← Back to React
          </button>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #bfdbfe",
              boxShadow:
                "0 4px 15px rgba(37, 99, 235, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  React • Lesson {selectedIndex + 1} of{" "}
                  {subtopics.length}
                </p>

                <h1
                  style={{
                    margin: "0 0 10px",
                    fontSize: "30px",
                    color: "#111827",
                  }}
                >
                  {selectedTopic.icon} {selectedTopic.title}
                </h1>

                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {selectedTopic.description}
                </p>
              </div>

              <div
                style={{
                  background: isCompleted ? "#dcfce7" : "#eff6ff",
                  color: isCompleted ? "#166534" : "#1d4ed8",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  fontWeight: "600",
                }}
              >
                {isCompleted ? "✅ Completed" : "📚 In Progress"}
              </div>
            </div>

            <div
              style={{
                marginTop: "25px",
                height: "10px",
                background: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.round(
                    ((selectedIndex + 1) / subtopics.length) * 100
                  )}%`,
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          {selectedTopic.sections.map((section, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "18px",
                padding: "28px",
                marginTop: "22px",
                border: "1px solid #dbeafe",
                boxShadow:
                  "0 3px 12px rgba(37, 99, 235, 0.06)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 18px",
                  color: "#111827",
                  fontSize: "23px",
                }}
              >
                {index + 1}. {section.title}
              </h2>

              <div
                style={{
                  color: "#374151",
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                {section.content}
              </div>
            </div>
          ))}

          <InfoCard title="💡 Key Points">
            <ul style={listStyle}>
              {selectedTopic.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </InfoCard>

          <div
            style={{
              background: "#fff7ed",
              borderRadius: "18px",
              padding: "28px",
              marginTop: "22px",
              border: "1px solid #fed7aa",
            }}
          >
            <h2
              style={{
                margin: "0 0 18px",
                color: "#9a3412",
              }}
            >
              ⚠️ Common Mistakes
            </h2>

            <ul
              style={{
                color: "#7c2d12",
                lineHeight: "1.8",
                paddingLeft: "25px",
              }}
            >
              {selectedTopic.mistakes.map((mistake, index) => (
                <li key={index}>{mistake}</li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "28px",
              marginTop: "22px",
              border: "1px solid #dbeafe",
            }}
          >
            <h2
              style={{
                margin: "0 0 22px",
                color: "#111827",
              }}
            >
              🧠 Quick Quiz
            </h2>

            {selectedTopic.quiz.map((question, questionIndex) => {
              const selectedAnswer =
                quizAnswers[
                  `${selectedTopic.id}-${questionIndex}`
                ];

              const isCorrect =
                selectedAnswer === question.answer;

              return (
                <div
                  key={questionIndex}
                  style={{
                    marginBottom: "28px",
                    paddingBottom: "24px",
                    borderBottom:
                      questionIndex !==
                      selectedTopic.quiz.length - 1
                        ? "1px solid #e5e7eb"
                        : "none",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "17px",
                      color: "#111827",
                      marginBottom: "14px",
                    }}
                  >
                    {questionIndex + 1}. {question.question}
                  </h3>

                  {question.options.map(
                    (option, optionIndex) => {
                      const selected =
                        selectedAnswer === optionIndex;

                      let background = "white";
                      let border = "1px solid #d1d5db";

                      if (
                        quizSubmitted &&
                        optionIndex === question.answer
                      ) {
                        background = "#dcfce7";
                        border = "1px solid #22c55e";
                      } else if (
                        quizSubmitted &&
                        selected &&
                        optionIndex !== question.answer
                      ) {
                        background = "#fee2e2";
                        border = "1px solid #ef4444";
                      } else if (selected) {
                        background = "#eff6ff";
                        border = "1px solid #2563eb";
                      }

                      return (
                        <button
                          key={optionIndex}
                          onClick={() =>
                            handleQuizAnswer(
                              questionIndex,
                              optionIndex
                            )
                          }
                          disabled={quizSubmitted}
                          style={{
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            background,
                            border,
                            borderRadius: "9px",
                            padding: "12px 15px",
                            marginBottom: "9px",
                            cursor: quizSubmitted
                              ? "default"
                              : "pointer",
                            fontSize: "15px",
                            color: "#111827",
                          }}
                        >
                          {option}
                        </button>
                      );
                    }
                  )}

                  {quizSubmitted && (
                    <p
                      style={{
                        marginTop: "10px",
                        fontWeight: "600",
                        color: isCorrect
                          ? "#15803d"
                          : "#b91c1c",
                      }}
                    >
                      {isCorrect
                        ? "✅ Correct!"
                        : `❌ Incorrect. Correct answer: ${
                            question.options[
                              question.answer
                            ]
                          }`}
                    </p>
                  )}
                </div>
              );
            })}

            {!quizSubmitted ? (
              <button
                onClick={submitQuiz}
                style={buttonStyle("#2563eb")}
              >
                Submit Quiz
              </button>
            ) : (
              <div>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "17px",
                    color: "#111827",
                  }}
                >
                  🎯 Score: {quizScore} /{" "}
                  {selectedTopic.quiz.length}
                </p>

                <button
                  onClick={resetQuiz}
                  style={{
                    background: "white",
                    color: "#2563eb",
                    border: "1px solid #2563eb",
                    borderRadius: "9px",
                    padding: "10px 18px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "25px",
              marginTop: "22px",
              border: "1px solid #dbeafe",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={goToPrevious}
              disabled={selectedIndex === 0}
              style={navButtonStyle(selectedIndex === 0)}
            >
              ← Previous
            </button>

            <button
              onClick={toggleComplete}
              style={buttonStyle(
                isCompleted ? "#16a34a" : "#2563eb"
              )}
            >
              {isCompleted
                ? "✓ Completed"
                : "Mark as Complete"}
            </button>

            <button
              onClick={goToNext}
              disabled={
                selectedIndex === subtopics.length - 1
              }
              style={navButtonStyle(
                selectedIndex === subtopics.length - 1
              )}
            >
              Next →
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
            ...buttonStyle("#2563eb"),
            marginBottom: "20px",
          }}
        >
          ← Back to Full Stack
        </button>

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          ⚛️ React
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn React from the fundamentals to building real-world frontend
          applications.
        </p>

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "21px",
                color: "#111827",
              }}
            >
              Overall Progress: {overallProgress}% 🎯
            </h2>

            <span
              style={{
                color: "#555",
                fontSize: "14px",
              }}
            >
              {completedSubtopics} / {subtopics.length} completed
            </span>
          </div>

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
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {subtopics.map((topic, index) => {
            const isCompleted = completed.includes(topic.id);
            const progress = isCompleted ? 100 : 0;

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "205px",
                  border: isCompleted
                    ? "1px solid #86efac"
                    : "1px solid #bfdbfe",
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
                      margin: "0 0 8px",
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
                      fontSize: "15px",
                      color: "#555",
                      lineHeight: "1.5",
                    }}
                  >
                    {topic.description}
                  </p>

                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: "15px",
                      color: "#111827",
                    }}
                  >
                    Progress: {progress}%
                  </p>

                  <div
                    style={{
                      width: "100%",
                      height: "10px",
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
                        borderRadius: "10px",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => openSubtopic(topic)}
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "18px",
                    ...buttonStyle(
                      isCompleted ? "#16a34a" : "#2563eb"
                    ),
                  }}
                >
                  {isCompleted
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

export default ReactRoadmap;