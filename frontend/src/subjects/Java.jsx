import { useEffect, useState } from "react";
import { saveQuizResult } from "../utils/saveQuizResult";
function Java({ goToLearning }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const [completedTopics, setCompletedTopics] = useState([]);
  useEffect(() => {
  const fetchProgress = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/learning-progress",
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

  // =========================================================
  // QUIZ HELPER
  // =========================================================

  const createQuiz = (questions) =>
    questions.map((item) => ({
      question: item.question,
      options: item.options,
      answer: item.answer,
    }));

  // =========================================================
  // JAVA DATA
  // =========================================================

  const javaTopics = [
    // =======================================================
    // 1. JAVA FUNDAMENTALS
    // =======================================================

    {
      id: "java-fundamentals",
      title: "☕ Java Fundamentals",
      subtopics: [
        {
          id: "java-introduction",
          title: "Introduction to Java",
          content: (
            <>
              <h3>What is Java?</h3>
              <p>
                Java is a high-level, object-oriented programming language
                designed to be portable and platform independent.
              </p>

              <h3>Why Java?</h3>
              <ul>
                <li>Object-oriented</li>
                <li>Platform independent</li>
                <li>Secure</li>
                <li>Robust</li>
                <li>Widely used in backend development</li>
              </ul>
            </>
          ),
          quiz: createQuiz([
            {
              question: "What type of language is Java?",
              options: [
                "Object-oriented programming language",
                "Markup language",
                "Database language",
                "Styling language",
              ],
              answer: "Object-oriented programming language",
            },
            {
              question: "Java is mainly known for being?",
              options: [
                "Platform independent",
                "Hardware dependent",
                "CSS dependent",
                "Browser only",
              ],
              answer: "Platform independent",
            },
            {
              question: "Which is a feature of Java?",
              options: [
                "Object-oriented programming",
                "Only procedural programming",
                "No memory management",
                "No security",
              ],
              answer: "Object-oriented programming",
            },
            {
              question: "Java is commonly used for?",
              options: [
                "Backend applications",
                "Only image editing",
                "Only HTML pages",
                "Only databases",
              ],
              answer: "Backend applications",
            },
            {
              question: "Java source code is compiled into?",
              options: [
                "Bytecode",
                "HTML",
                "CSS",
                "SQL",
              ],
              answer: "Bytecode",
            },
          ]),
        },

        {
          id: "jdk-jre-jvm",
          title: "JDK, JRE and JVM",
          content: (
            <>
              <h3>JDK</h3>
              <p>
                JDK stands for Java Development Kit. It provides tools needed
                to develop Java applications.
              </p>

              <h3>JRE</h3>
              <p>
                JRE provides the environment required to run Java programs.
              </p>

              <h3>JVM</h3>
              <p>
                JVM executes Java bytecode.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "What does JDK stand for?",
              options: [
                "Java Development Kit",
                "Java Data Kit",
                "Java Design Kernel",
                "Java Development Kernel",
              ],
              answer: "Java Development Kit",
            },
            {
              question: "What does JRE provide?",
              options: [
                "Environment to run Java programs",
                "Only source code",
                "Only compiler",
                "Only database access",
              ],
              answer: "Environment to run Java programs",
            },
            {
              question: "What executes Java bytecode?",
              options: [
                "JVM",
                "JDK",
                "JRE only",
                "HTML",
              ],
              answer: "JVM",
            },
            {
              question: "Which contains development tools?",
              options: [
                "JDK",
                "JVM",
                "JRE only",
                "CPU",
              ],
              answer: "JDK",
            },
            {
              question: "What does JVM stand for?",
              options: [
                "Java Virtual Machine",
                "Java Variable Method",
                "Java Visual Machine",
                "Java Virtual Method",
              ],
              answer: "Java Virtual Machine",
            },
          ]),
        },

        {
          id: "java-variables",
          title: "Variables",
          content: (
            <>
              <h3>Variables</h3>
              <p>
                A variable is a named memory location used to store a value.
              </p>

              <p>Example:</p>

              <pre>{`int age = 20;
String name = "Sai";`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "What is a variable?",
              options: [
                "Named storage location",
                "A loop",
                "A class only",
                "A package",
              ],
              answer: "Named storage location",
            },
            {
              question: "Which declares an integer variable?",
              options: [
                "int age = 20;",
                "integer age;",
                "number age;",
                "age int;",
              ],
              answer: "int age = 20;",
            },
            {
              question: "Which stores text?",
              options: [
                "String",
                "int",
                "double",
                "boolean",
              ],
              answer: "String",
            },
            {
              question: "A variable stores?",
              options: [
                "A value",
                "Only a method",
                "Only a class",
                "Only a package",
              ],
              answer: "A value",
            },
            {
              question: "Which is a valid Java variable?",
              options: [
                "int marks = 90;",
                "90 = marks;",
                "int = marks 90;",
                "marks int 90;",
              ],
              answer: "int marks = 90;",
            },
          ]),
        },

        {
          id: "java-data-types",
          title: "Data Types",
          content: (
            <>
              <h3>Java Data Types</h3>

              <p>Primitive types include:</p>

              <ul>
                <li>byte</li>
                <li>short</li>
                <li>int</li>
                <li>long</li>
                <li>float</li>
                <li>double</li>
                <li>char</li>
                <li>boolean</li>
              </ul>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Which is a primitive data type?",
              options: ["int", "String", "ArrayList", "Scanner"],
              answer: "int",
            },
            {
              question: "Which stores true or false?",
              options: ["boolean", "int", "char", "double"],
              answer: "boolean",
            },
            {
              question: "Which stores a single character?",
              options: ["char", "String", "boolean", "int"],
              answer: "char",
            },
            {
              question: "Which is used for decimal values?",
              options: ["double", "boolean", "char", "byte"],
              answer: "double",
            },
            {
              question: "How many primitive data types does Java have?",
              options: ["8", "5", "10", "12"],
              answer: "8",
            },
          ]),
        },

        {
          id: "java-type-casting",
          title: "Type Casting",
          content: (
            <>
              <h3>Type Casting</h3>

              <p>
                Type casting converts a value from one data type to another.
              </p>

              <p>
                Widening conversion is generally automatic.
              </p>

              <p>
                Narrowing conversion usually requires explicit casting.
              </p>

              <pre>{`double x = 10;
int y = (int) x;`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Type casting means?",
              options: [
                "Converting one data type to another",
                "Creating a class",
                "Creating a loop",
                "Deleting data",
              ],
              answer: "Converting one data type to another",
            },
            {
              question: "Which usually happens automatically?",
              options: [
                "Widening conversion",
                "Narrowing conversion",
                "String deletion",
                "Object deletion",
              ],
              answer: "Widening conversion",
            },
            {
              question: "Which may require explicit casting?",
              options: [
                "Narrowing conversion",
                "Widening conversion",
                "Variable declaration",
                "Method calling",
              ],
              answer: "Narrowing conversion",
            },
            {
              question: "Which is explicit casting?",
              options: [
                "(int) x",
                "int x",
                "cast x",
                "convert.int(x)",
              ],
              answer: "(int) x",
            },
            {
              question: "Casting changes?",
              options: [
                "Data type representation",
                "Variable name only",
                "Class name only",
                "Package name",
              ],
              answer: "Data type representation",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 2. CONTROL FLOW
    // =======================================================

    {
      id: "control-flow",
      title: "🔀 Control Flow",
      subtopics: [
        {
          id: "if-else",
          title: "if / else",
          content: (
            <>
              <h3>if / else</h3>
              <p>
                if/else is used to execute code based on a condition.
              </p>

              <pre>{`if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "if/else is used for?",
              options: [
                "Decision making",
                "Creating arrays",
                "Creating packages",
                "Importing classes",
              ],
              answer: "Decision making",
            },
            {
              question: "What does if check?",
              options: [
                "A condition",
                "A package",
                "A class name",
                "A file",
              ],
              answer: "A condition",
            },
            {
              question: "else executes when?",
              options: [
                "if condition is false",
                "if condition is always true",
                "Program starts",
                "Class is imported",
              ],
              answer: "if condition is false",
            },
            {
              question: "Which operator can compare values?",
              options: ["==", "import", "new", "class"],
              answer: "==",
            },
            {
              question: "Can if statements be nested?",
              options: ["Yes", "No", "Only in arrays", "Only in classes"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "switch",
          title: "switch",
          content: (
            <>
              <h3>switch</h3>
              <p>
                switch selects one block from multiple possible cases.
              </p>

              <pre>{`switch(day) {
    case 1:
        System.out.println("Monday");
        break;
    default:
        System.out.println("Invalid");
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "switch is useful for?",
              options: [
                "Multiple choices",
                "Only loops",
                "Memory allocation",
                "Creating objects only",
              ],
              answer: "Multiple choices",
            },
            {
              question: "Which keyword defines a switch option?",
              options: ["case", "loop", "option", "choice"],
              answer: "case",
            },
            {
              question: "Which keyword commonly stops a case?",
              options: ["break", "stop", "exit", "returning"],
              answer: "break",
            },
            {
              question: "Which handles unmatched cases?",
              options: ["default", "elsecase", "otherwise", "none"],
              answer: "default",
            },
            {
              question: "switch is a?",
              options: [
                "Selection statement",
                "Loop only",
                "Class",
                "Method",
              ],
              answer: "Selection statement",
            },
          ]),
        },

        {
          id: "for-loop",
          title: "for Loop",
          content: (
            <>
              <h3>for Loop</h3>
              <p>
                A for loop repeats code for a controlled number of iterations.
              </p>

              <pre>{`for(int i = 0; i < 5; i++) {
    System.out.println(i);
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "for loop is used for?",
              options: [
                "Repetition",
                "Creating classes",
                "Importing packages",
                "Exception creation",
              ],
              answer: "Repetition",
            },
            {
              question: "Which part initializes the loop?",
              options: ["int i = 0", "i++", "i < 5", "System.out"],
              answer: "int i = 0",
            },
            {
              question: "Which part checks the condition?",
              options: ["i < 5", "i++", "int i = 0", "println"],
              answer: "i < 5",
            },
            {
              question: "Which updates i?",
              options: ["i++", "i < 5", "int i", "new"],
              answer: "i++",
            },
            {
              question: "Can for loops be nested?",
              options: ["Yes", "No", "Only once", "Only in methods"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "while-loop",
          title: "while Loop",
          content: (
            <>
              <h3>while Loop</h3>
              <p>
                A while loop repeatedly executes while its condition is true.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "while loop runs while?",
              options: [
                "Condition is true",
                "Condition is false",
                "Program is closed",
                "Class is imported",
              ],
              answer: "Condition is true",
            },
            {
              question: "A while loop checks its condition?",
              options: [
                "Before each iteration",
                "Never",
                "Only after program ends",
                "Only once after loop",
              ],
              answer: "Before each iteration",
            },
            {
              question: "A while loop may execute zero times?",
              options: ["Yes", "No", "Only with arrays", "Only with strings"],
              answer: "Yes",
            },
            {
              question: "What can cause an infinite while loop?",
              options: [
                "Condition never becomes false",
                "Using int",
                "Using System.out",
                "Using a method",
              ],
              answer: "Condition never becomes false",
            },
            {
              question: "while is a?",
              options: ["Loop", "Class", "Package", "Object"],
              answer: "Loop",
            },
          ]),
        },

        {
          id: "do-while",
          title: "do-while Loop",
          content: (
            <>
              <h3>do-while</h3>
              <p>
                A do-while loop executes its body at least once before
                checking the condition.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "do-while executes at least?",
              options: ["Once", "Zero times", "Five times", "Ten times"],
              answer: "Once",
            },
            {
              question: "When is the condition checked?",
              options: [
                "After the body",
                "Before the body",
                "Never",
                "Before program starts",
              ],
              answer: "After the body",
            },
            {
              question: "do-while is a?",
              options: ["Loop", "Class", "Interface", "Package"],
              answer: "Loop",
            },
            {
              question: "Which keyword begins a do-while loop?",
              options: ["do", "while", "repeat", "loop"],
              answer: "do",
            },
            {
              question: "Can do-while execute when condition is initially false?",
              options: ["Yes", "No", "Only with arrays", "Only with objects"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "break-continue",
          title: "break and continue",
          content: (
            <>
              <h3>break</h3>
              <p>break terminates the loop or switch.</p>

              <h3>continue</h3>
              <p>
                continue skips the current iteration and continues with the
                next iteration.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "break is used to?",
              options: [
                "Exit a loop",
                "Skip only one iteration",
                "Create a class",
                "Import a package",
              ],
              answer: "Exit a loop",
            },
            {
              question: "continue is used to?",
              options: [
                "Skip current iteration",
                "Exit program completely",
                "Create object",
                "Stop JVM",
              ],
              answer: "Skip current iteration",
            },
            {
              question: "break can be used in switch?",
              options: ["Yes", "No", "Only with loops", "Only with arrays"],
              answer: "Yes",
            },
            {
              question: "continue normally works inside?",
              options: [
                "Loops",
                "Classes only",
                "Packages",
                "Constructors only",
              ],
              answer: "Loops",
            },
            {
              question: "Which completely exits the current loop?",
              options: ["break", "continue", "skip", "next"],
              answer: "break",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 3. METHODS
    // =======================================================

    {
      id: "methods",
      title: "🔧 Methods",
      subtopics: [
        {
          id: "method-basics",
          title: "Methods Introduction",
          content: (
            <>
              <h3>Methods</h3>
              <p>
                A method is a block of code designed to perform a specific
                task.
              </p>

              <pre>{`static void greet() {
    System.out.println("Hello");
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "A method is?",
              options: [
                "Block of code performing a task",
                "A variable",
                "A package",
                "A database",
              ],
              answer: "Block of code performing a task",
            },
            {
              question: "Methods help with?",
              options: [
                "Code reuse",
                "Removing all variables",
                "Deleting classes",
                "Changing hardware",
              ],
              answer: "Code reuse",
            },
            {
              question: "Which keyword can define a static method?",
              options: ["static", "method", "function", "define"],
              answer: "static",
            },
            {
              question: "A method may return?",
              options: [
                "A value or void",
                "Only strings",
                "Only integers",
                "Nothing ever",
              ],
              answer: "A value or void",
            },
            {
              question: "Methods improve?",
              options: [
                "Program organization",
                "Monitor brightness",
                "Internet speed",
                "RAM physically",
              ],
              answer: "Program organization",
            },
          ]),
        },

        {
          id: "parameters-arguments",
          title: "Parameters and Arguments",
          content: (
            <>
              <h3>Parameters</h3>
              <p>
                Parameters are variables declared in a method definition.
              </p>

              <h3>Arguments</h3>
              <p>
                Arguments are actual values passed when calling the method.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Parameters are declared where?",
              options: [
                "Method definition",
                "Only inside main",
                "Package",
                "Database",
              ],
              answer: "Method definition",
            },
            {
              question: "Arguments are?",
              options: [
                "Values passed to a method",
                "Class names",
                "Packages",
                "Loops",
              ],
              answer: "Values passed to a method",
            },
            {
              question: "Which is a parameter?",
              options: [
                "int a",
                "5",
                "10",
                "System.out",
              ],
              answer: "int a",
            },
            {
              question: "Which is an argument?",
              options: ["5", "int a", "String name", "void"],
              answer: "5",
            },
            {
              question: "Parameters allow methods to receive?",
              options: [
                "Input values",
                "Packages",
                "Classes only",
                "Files only",
              ],
              answer: "Input values",
            },
          ]),
        },

        {
          id: "return-values",
          title: "Return Values",
          content: (
            <>
              <h3>Return Values</h3>
              <p>
                A method can return a value using the return keyword.
              </p>

              <pre>{`int add(int a, int b) {
    return a + b;
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Which keyword sends a value back?",
              options: ["return", "send", "back", "output"],
              answer: "return",
            },
            {
              question: "What can a method return?",
              options: [
                "A value",
                "Only int",
                "Only String",
                "Only boolean",
              ],
              answer: "A value",
            },
            {
              question: "What return type means no value is returned?",
              options: ["void", "null", "empty", "none"],
              answer: "void",
            },
            {
              question: "Return type should generally match?",
              options: [
                "Returned value type",
                "Class name",
                "Package name",
                "Variable name only",
              ],
              answer: "Returned value type",
            },
            {
              question: "Can a method return an object?",
              options: ["Yes", "No", "Only int", "Only char"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "method-overloading",
          title: "Method Overloading",
          content: (
            <>
              <h3>Method Overloading</h3>
              <p>
                Method overloading means having multiple methods with the
                same name but different parameter lists.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Method overloading means?",
              options: [
                "Same method name with different parameters",
                "Same variable name",
                "Different class names",
                "Deleting methods",
              ],
              answer: "Same method name with different parameters",
            },
            {
              question: "Overloaded methods must differ in?",
              options: [
                "Parameter list",
                "Only return type",
                "Only access modifier",
                "Only comments",
              ],
              answer: "Parameter list",
            },
            {
              question: "Is overloading compile-time polymorphism?",
              options: ["Yes", "No", "Only runtime", "Only inheritance"],
              answer: "Yes",
            },
            {
              question: "Can overloaded methods have different parameter counts?",
              options: ["Yes", "No", "Never", "Only constructors"],
              answer: "Yes",
            },
            {
              question: "Can changing only return type overload a method?",
              options: ["No", "Yes", "Always", "Only static methods"],
              answer: "No",
            },
          ]),
        },

        {
          id: "recursion",
          title: "Recursion",
          content: (
            <>
              <h3>Recursion</h3>
              <p>
                Recursion occurs when a method calls itself.
              </p>

              <p>
                A recursive method needs a base condition to stop.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Recursion means?",
              options: [
                "Method calling itself",
                "Method deleting itself",
                "Class importing itself",
                "Variable changing type",
              ],
              answer: "Method calling itself",
            },
            {
              question: "What stops recursion?",
              options: [
                "Base condition",
                "Import",
                "Package",
                "Constructor",
              ],
              answer: "Base condition",
            },
            {
              question: "Missing a base condition can cause?",
              options: [
                "Infinite recursion",
                "Compilation into HTML",
                "Automatic sorting",
                "Database creation",
              ],
              answer: "Infinite recursion",
            },
            {
              question: "Recursion uses the?",
              options: [
                "Call stack",
                "CSS stack",
                "Database stack",
                "Network stack only",
              ],
              answer: "Call stack",
            },
            {
              question: "Factorial can be solved using recursion?",
              options: ["Yes", "No", "Only with String", "Only with HashMap"],
              answer: "Yes",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 4. ARRAYS AND STRINGS
    // =======================================================

    {
      id: "arrays-strings",
      title: "📦 Arrays & Strings",
      subtopics: [
        {
          id: "one-dimensional-arrays",
          title: "1D Arrays",
          content: (
            <>
              <h3>One Dimensional Array</h3>

              <pre>{`int[] arr = {10, 20, 30, 40};`}</pre>

              <p>
                Array indexes start from 0.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Array indexes start from?",
              options: ["0", "1", "-1", "2"],
              answer: "0",
            },
            {
              question: "Which declares an integer array?",
              options: [
                "int[] arr",
                "array int arr",
                "integer arr[] only",
                "int arr()",
              ],
              answer: "int[] arr",
            },
            {
              question: "Arrays store?",
              options: [
                "Multiple values",
                "Only one value",
                "Only methods",
                "Only classes",
              ],
              answer: "Multiple values",
            },
            {
              question: "Array size is generally?",
              options: [
                "Fixed after creation",
                "Always infinite",
                "Always zero",
                "Automatically doubled",
              ],
              answer: "Fixed after creation",
            },
            {
              question: "arr[0] accesses?",
              options: [
                "First element",
                "Second element",
                "Last element",
                "No element",
              ],
              answer: "First element",
            },
          ]),
        },

        {
          id: "two-dimensional-arrays",
          title: "2D Arrays",
          content: (
            <>
              <h3>Two Dimensional Arrays</h3>

              <p>
                A 2D array can be viewed as rows and columns.
              </p>

              <pre>{`int[][] matrix = {
    {1, 2},
    {3, 4}
};`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "A 2D array can represent?",
              options: [
                "Rows and columns",
                "Only one value",
                "Only strings",
                "Only methods",
              ],
              answer: "Rows and columns",
            },
            {
              question: "Which declares a 2D integer array?",
              options: [
                "int[][] matrix",
                "int matrix",
                "matrix[][] int",
                "2D int matrix only",
              ],
              answer: "int[][] matrix",
            },
            {
              question: "matrix[0][0] represents?",
              options: [
                "First row, first column",
                "Second row",
                "Last row",
                "Only column",
              ],
              answer: "First row, first column",
            },
            {
              question: "Nested loops are commonly used to traverse?",
              options: [
                "2D arrays",
                "Only variables",
                "Packages",
                "Classes",
              ],
              answer: "2D arrays",
            },
            {
              question: "Can Java arrays be multidimensional?",
              options: ["Yes", "No", "Only 2D exactly", "Only 3D"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "string",
          title: "String",
          content: (
            <>
              <h3>String</h3>

              <p>
                String represents a sequence of characters.
              </p>

              <pre>{`String name = "GradPath";`}</pre>

              <p>
                Strings in Java are immutable.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "String represents?",
              options: [
                "Sequence of characters",
                "Only numbers",
                "Only objects",
                "Only arrays",
              ],
              answer: "Sequence of characters",
            },
            {
              question: "Java Strings are?",
              options: [
                "Immutable",
                "Always mutable",
                "Numeric",
                "Primitive",
              ],
              answer: "Immutable",
            },
            {
              question: "Which creates a String?",
              options: [
                'String name = "Sai";',
                "string name;",
                "String = Sai;",
                "text name;",
              ],
              answer: 'String name = "Sai";',
            },
            {
              question: "Which compares String contents?",
              options: [
                "equals()",
                "== always",
                "compare() only",
                "same()",
              ],
              answer: "equals()",
            },
            {
              question: "String is a?",
              options: [
                "Class",
                "Primitive type",
                "Loop",
                "Operator",
              ],
              answer: "Class",
            },
          ]),
        },

        {
          id: "string-methods",
          title: "String Methods",
          content: (
            <>
              <h3>Common String Methods</h3>

              <ul>
                <li>length()</li>
                <li>charAt()</li>
                <li>substring()</li>
                <li>toUpperCase()</li>
                <li>toLowerCase()</li>
                <li>equals()</li>
              </ul>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Which finds String length?",
              options: ["length()", "size()", "count()", "length"],
              answer: "length()",
            },
            {
              question: "Which accesses a character?",
              options: ["charAt()", "character()", "getChar()", "index()"],
              answer: "charAt()",
            },
            {
              question: "Which converts to uppercase?",
              options: [
                "toUpperCase()",
                "upper()",
                "makeUpper()",
                "uppercaseString()",
              ],
              answer: "toUpperCase()",
            },
            {
              question: "Which compares String content?",
              options: ["equals()", "compareOnly()", "same()", "==only"],
              answer: "equals()",
            },
            {
              question: "Which extracts part of a String?",
              options: ["substring()", "extract()", "part()", "sliceString()"],
              answer: "substring()",
            },
          ]),
        },

        {
          id: "string-builder-buffer",
          title: "StringBuilder & StringBuffer",
          content: (
            <>
              <h3>StringBuilder</h3>
              <p>
                StringBuilder is mutable and useful for repeatedly modifying
                strings.
              </p>

              <h3>StringBuffer</h3>
              <p>
                StringBuffer is also mutable and provides synchronized methods.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "StringBuilder is?",
              options: [
                "Mutable",
                "Immutable",
                "Primitive",
                "An array",
              ],
              answer: "Mutable",
            },
            {
              question: "StringBuffer is?",
              options: [
                "Mutable",
                "Primitive",
                "Immutable only",
                "A loop",
              ],
              answer: "Mutable",
            },
            {
              question: "Which is generally faster in single-threaded use?",
              options: [
                "StringBuilder",
                "StringBuffer",
                "String",
                "char",
              ],
              answer: "StringBuilder",
            },
            {
              question: "StringBuffer methods are generally?",
              options: [
                "Synchronized",
                "Removed",
                "Static only",
                "Private only",
              ],
              answer: "Synchronized",
            },
            {
              question: "Which is useful for repeated string modifications?",
              options: [
                "StringBuilder",
                "int",
                "boolean",
                "char only",
              ],
              answer: "StringBuilder",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 5. OOP
    // =======================================================

    {
      id: "oops",
      title: "🏗️ Object-Oriented Programming",
      subtopics: [
        {
          id: "classes-objects",
          title: "Classes & Objects",
          content: (
            <>
              <h3>Class</h3>
              <p>
                A class is a blueprint for creating objects.
              </p>

              <h3>Object</h3>
              <p>
                An object is an instance of a class.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "A class is a?",
              options: [
                "Blueprint",
                "Loop",
                "Variable only",
                "Database",
              ],
              answer: "Blueprint",
            },
            {
              question: "An object is?",
              options: [
                "Instance of a class",
                "A package",
                "A method only",
                "A primitive type",
              ],
              answer: "Instance of a class",
            },
            {
              question: "Which keyword creates an object?",
              options: ["new", "object", "create", "instance"],
              answer: "new",
            },
            {
              question: "Objects can have?",
              options: [
                "State and behavior",
                "Only names",
                "Only numbers",
                "Only packages",
              ],
              answer: "State and behavior",
            },
            {
              question: "OOP organizes programs around?",
              options: [
                "Objects",
                "Only loops",
                "Only variables",
                "Only files",
              ],
              answer: "Objects",
            },
          ]),
        },

        {
          id: "constructors",
          title: "Constructors",
          content: (
            <>
              <h3>Constructor</h3>
              <p>
                A constructor is used to initialize objects.
              </p>

              <p>
                It has the same name as the class and has no return type.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Constructor is mainly used for?",
              options: [
                "Initializing objects",
                "Deleting objects",
                "Sorting arrays",
                "Creating packages",
              ],
              answer: "Initializing objects",
            },
            {
              question: "Constructor name must match?",
              options: [
                "Class name",
                "Method name",
                "Package name",
                "Variable name",
              ],
              answer: "Class name",
            },
            {
              question: "Does a constructor have a return type?",
              options: ["No", "Yes", "Only void", "Only int"],
              answer: "No",
            },
            {
              question: "Can constructors have parameters?",
              options: ["Yes", "No", "Never", "Only static"],
              answer: "Yes",
            },
            {
              question: "When is a constructor commonly called?",
              options: [
                "When an object is created",
                "When package is imported",
                "When loop ends",
                "When program is compiled only",
              ],
              answer: "When an object is created",
            },
          ]),
        },

        {
          id: "this-keyword",
          title: "this Keyword",
          content: (
            <>
              <h3>this</h3>
              <p>
                this refers to the current object.
              </p>

              <pre>{`class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "this refers to?",
              options: [
                "Current object",
                "Parent class only",
                "Static class",
                "Package",
              ],
              answer: "Current object",
            },
            {
              question: "this is commonly used to distinguish?",
              options: [
                "Instance variable and parameter",
                "Two classes",
                "Two packages",
                "Two loops",
              ],
              answer: "Instance variable and parameter",
            },
            {
              question: "Can this call another constructor?",
              options: ["Yes", "No", "Only static", "Only interface"],
              answer: "Yes",
            },
            {
              question: "this is related to?",
              options: [
                "Current instance",
                "JVM only",
                "Package only",
                "Database",
              ],
              answer: "Current instance",
            },
            {
              question: "Can this be used in a static method?",
              options: [
                "No",
                "Yes always",
                "Only with int",
                "Only with String",
              ],
              answer: "No",
            },
          ]),
        },

        {
          id: "static-keyword",
          title: "static",
          content: (
            <>
              <h3>static</h3>
              <p>
                static members belong to the class rather than individual
                objects.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "static members belong to?",
              options: [
                "Class",
                "Only one object",
                "Package",
                "Method parameter",
              ],
              answer: "Class",
            },
            {
              question: "Can a static method be called using the class name?",
              options: ["Yes", "No", "Only objects", "Only constructors"],
              answer: "Yes",
            },
            {
              question: "main method is usually?",
              options: ["static", "private only", "abstract", "final only"],
              answer: "static",
            },
            {
              question: "Static variables are shared among?",
              options: [
                "Objects of the class",
                "Only one method",
                "Only packages",
                "Only loops",
              ],
              answer: "Objects of the class",
            },
            {
              question: "Can a static method directly access instance variables?",
              options: [
                "No",
                "Yes always",
                "Only private",
                "Only final",
              ],
              answer: "No",
            },
          ]),
        },

        {
          id: "encapsulation",
          title: "Encapsulation",
          content: (
            <>
              <h3>Encapsulation</h3>
              <p>
                Encapsulation bundles data and methods together and controls
                access to internal state.
              </p>

              <p>
                private fields with getters and setters are a common example.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Encapsulation is about?",
              options: [
                "Bundling data and methods with controlled access",
                "Only inheritance",
                "Only loops",
                "Only compilation",
              ],
              answer: "Bundling data and methods with controlled access",
            },
            {
              question: "Which access modifier is commonly used to hide fields?",
              options: ["private", "public", "package", "global"],
              answer: "private",
            },
            {
              question: "Getters are used to?",
              options: [
                "Access data",
                "Create packages",
                "Start JVM",
                "Create loops",
              ],
              answer: "Access data",
            },
            {
              question: "Setters are commonly used to?",
              options: [
                "Modify data",
                "Compile code",
                "Create interfaces",
                "Delete classes",
              ],
              answer: "Modify data",
            },
            {
              question: "Encapsulation improves?",
              options: [
                "Data protection",
                "Internet speed",
                "Screen size",
                "CPU frequency",
              ],
              answer: "Data protection",
            },
          ]),
        },

        {
          id: "inheritance",
          title: "Inheritance",
          content: (
            <>
              <h3>Inheritance</h3>
              <p>
                Inheritance allows one class to acquire properties and
                behavior of another class.
              </p>

              <pre>{`class Dog extends Animal {
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Inheritance allows a class to?",
              options: [
                "Acquire properties and behavior",
                "Delete another class",
                "Create databases",
                "Skip compilation",
              ],
              answer: "Acquire properties and behavior",
            },
            {
              question: "Which keyword is used for class inheritance?",
              options: ["extends", "inherits", "parent", "using"],
              answer: "extends",
            },
            {
              question: "The inherited class is called?",
              options: [
                "Parent/Superclass",
                "Child only",
                "Package",
                "Object variable",
              ],
              answer: "Parent/Superclass",
            },
            {
              question: "The inheriting class is called?",
              options: [
                "Child/Subclass",
                "Parent",
                "Package",
                "Interface only",
              ],
              answer: "Child/Subclass",
            },
            {
              question: "Inheritance supports code reuse?",
              options: ["Yes", "No", "Only interfaces", "Only arrays"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "polymorphism",
          title: "Polymorphism",
          content: (
            <>
              <h3>Polymorphism</h3>
              <p>
                Polymorphism means one interface or reference can represent
                different forms of behavior.
              </p>

              <p>
                Method overloading and method overriding are important
                examples.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Polymorphism means?",
              options: [
                "Many forms",
                "One variable only",
                "No objects",
                "Only inheritance",
              ],
              answer: "Many forms",
            },
            {
              question: "Method overloading is generally?",
              options: [
                "Compile-time polymorphism",
                "Runtime polymorphism",
                "No polymorphism",
                "Database polymorphism",
              ],
              answer: "Compile-time polymorphism",
            },
            {
              question: "Method overriding is generally?",
              options: [
                "Runtime polymorphism",
                "Compile-time only",
                "No polymorphism",
                "Static polymorphism only",
              ],
              answer: "Runtime polymorphism",
            },
            {
              question: "Overriding requires?",
              options: [
                "Inheritance",
                "Only variables",
                "Only arrays",
                "Only packages",
              ],
              answer: "Inheritance",
            },
            {
              question: "Polymorphism improves?",
              options: [
                "Flexibility",
                "Screen brightness",
                "Internet speed",
                "RAM size",
              ],
              answer: "Flexibility",
            },
          ]),
        },

        {
          id: "abstraction",
          title: "Abstraction",
          content: (
            <>
              <h3>Abstraction</h3>
              <p>
                Abstraction hides implementation details and exposes the
                essential functionality.
              </p>

              <p>
                Abstract classes and interfaces are common ways to achieve it.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Abstraction hides?",
              options: [
                "Implementation details",
                "All data",
                "All methods",
                "The JVM",
              ],
              answer: "Implementation details",
            },
            {
              question: "Which supports abstraction?",
              options: [
                "Abstract class",
                "Only loops",
                "Only arrays",
                "Only variables",
              ],
              answer: "Abstract class",
            },
            {
              question: "Can an abstract class be directly instantiated?",
              options: ["No", "Yes", "Always", "Only static"],
              answer: "No",
            },
            {
              question: "Interfaces can provide abstraction?",
              options: ["Yes", "No", "Only in C", "Only in Python"],
              answer: "Yes",
            },
            {
              question: "Abstraction focuses on?",
              options: [
                "What an object does",
                "Every implementation detail",
                "Only memory addresses",
                "Only variables",
              ],
              answer: "What an object does",
            },
          ]),
        },

        {
          id: "interfaces",
          title: "Interfaces",
          content: (
            <>
              <h3>Interfaces</h3>
              <p>
                An interface defines a contract that implementing classes
                agree to follow.
              </p>

              <pre>{`interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Bark");
    }
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "An interface mainly defines?",
              options: [
                "A contract",
                "A database",
                "A loop",
                "A package",
              ],
              answer: "A contract",
            },
            {
              question: "Which keyword implements an interface?",
              options: ["implements", "extends", "interface", "inherits"],
              answer: "implements",
            },
            {
              question: "Can a class implement multiple interfaces?",
              options: ["Yes", "No", "Only one always", "Only two"],
              answer: "Yes",
            },
            {
              question: "Interfaces are useful for?",
              options: [
                "Abstraction",
                "Only arrays",
                "Only loops",
                "Only exceptions",
              ],
              answer: "Abstraction",
            },
            {
              question: "An interface can contain abstract methods?",
              options: ["Yes", "No", "Only constructors", "Only variables"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "access-modifiers",
          title: "Access Modifiers",
          content: (
            <>
              <h3>Access Modifiers</h3>

              <ul>
                <li>private</li>
                <li>default</li>
                <li>protected</li>
                <li>public</li>
              </ul>

              <p>
                They control where classes and members can be accessed.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Which is the most restrictive common access modifier?",
              options: ["private", "public", "protected", "default"],
              answer: "private",
            },
            {
              question: "Which provides widest access?",
              options: ["public", "private", "protected", "default"],
              answer: "public",
            },
            {
              question: "protected members are accessible in subclasses?",
              options: ["Yes", "No", "Never", "Only interfaces"],
              answer: "Yes",
            },
            {
              question: "Access modifiers control?",
              options: [
                "Visibility",
                "Loop count",
                "Memory size only",
                "CPU speed",
              ],
              answer: "Visibility",
            },
            {
              question: "How many common access levels are there?",
              options: ["4", "2", "6", "8"],
              answer: "4",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 6. EXCEPTION HANDLING
    // =======================================================

    {
      id: "exception-handling",
      title: "⚠️ Exception Handling",
      subtopics: [
        {
          id: "exceptions",
          title: "Exceptions",
          content: (
            <>
              <h3>Exceptions</h3>
              <p>
                An exception is an event that disrupts the normal flow of
                program execution.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "An exception can disrupt?",
              options: [
                "Normal program flow",
                "Only compilation",
                "Only hardware",
                "Only networking",
              ],
              answer: "Normal program flow",
            },
            {
              question: "Which is an exception?",
              options: [
                "ArithmeticException",
                "ArrayClass",
                "LoopExceptionOnly",
                "JavaErrorCode",
              ],
              answer: "ArithmeticException",
            },
            {
              question: "Exceptions can be handled using?",
              options: [
                "try-catch",
                "for-if",
                "class-loop",
                "package-import",
              ],
              answer: "try-catch",
            },
            {
              question: "Division by zero for integers can cause?",
              options: [
                "ArithmeticException",
                "NullPointerException",
                "IOException",
                "ClassNotFoundException",
              ],
              answer: "ArithmeticException",
            },
            {
              question: "Exception handling helps create?",
              options: [
                "Robust programs",
                "Only faster CPUs",
                "Only arrays",
                "Only classes",
              ],
              answer: "Robust programs",
            },
          ]),
        },

        {
          id: "try-catch",
          title: "try-catch",
          content: (
            <>
              <h3>try-catch</h3>

              <p>
                Code that may throw an exception can be placed inside try.
                catch handles the exception.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Risky code is placed inside?",
              options: ["try", "catch", "finally", "throw"],
              answer: "try",
            },
            {
              question: "Exception handling code is placed inside?",
              options: ["catch", "try", "class", "main only"],
              answer: "catch",
            },
            {
              question: "Can one try have multiple catch blocks?",
              options: ["Yes", "No", "Never", "Only in interfaces"],
              answer: "Yes",
            },
            {
              question: "try-catch helps prevent?",
              options: [
                "Unhandled program failures",
                "Compilation of all programs",
                "Variable declaration",
                "Object creation",
              ],
              answer: "Unhandled program failures",
            },
            {
              question: "catch receives an?",
              options: [
                "Exception object",
                "Array only",
                "Class only",
                "Package",
              ],
              answer: "Exception object",
            },
          ]),
        },

        {
          id: "finally",
          title: "finally",
          content: (
            <>
              <h3>finally</h3>
              <p>
                The finally block is used for cleanup code and normally
                executes whether an exception occurs or not.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "finally is commonly used for?",
              options: [
                "Cleanup",
                "Loop creation",
                "Class creation",
                "Sorting",
              ],
              answer: "Cleanup",
            },
            {
              question: "finally normally executes?",
              options: [
                "Whether exception occurs or not",
                "Only when no exception",
                "Never",
                "Only before try",
              ],
              answer: "Whether exception occurs or not",
            },
            {
              question: "finally follows?",
              options: [
                "try/catch",
                "class only",
                "package",
                "interface only",
              ],
              answer: "try/catch",
            },
            {
              question: "Can finally be used for closing resources?",
              options: ["Yes", "No", "Only arrays", "Only strings"],
              answer: "Yes",
            },
            {
              question: "finally is a?",
              options: [
                "Exception handling block",
                "Loop",
                "Class",
                "Operator",
              ],
              answer: "Exception handling block",
            },
          ]),
        },

        {
          id: "throw-throws",
          title: "throw and throws",
          content: (
            <>
              <h3>throw</h3>
              <p>
                throw is used to explicitly throw an exception.
              </p>

              <h3>throws</h3>
              <p>
                throws declares exceptions that a method may pass to its
                caller.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "throw is used to?",
              options: [
                "Explicitly throw an exception",
                "Catch an exception",
                "Create a class",
                "Close a file",
              ],
              answer: "Explicitly throw an exception",
            },
            {
              question: "throws is written in?",
              options: [
                "Method declaration",
                "Loop condition",
                "Class name",
                "Package name",
              ],
              answer: "Method declaration",
            },
            {
              question: "throw usually works with?",
              options: [
                "Exception object",
                "Integer only",
                "String only",
                "Class name only",
              ],
              answer: "Exception object",
            },
            {
              question: "throws tells the caller that a method may?",
              options: [
                "Throw exceptions",
                "Create objects",
                "Create arrays",
                "Return nothing",
              ],
              answer: "Throw exceptions",
            },
            {
              question: "throw and throws are?",
              options: [
                "Exception-related keywords",
                "Loop keywords",
                "Collection classes",
                "Access modifiers",
              ],
              answer: "Exception-related keywords",
            },
          ]),
        },

        {
          id: "custom-exceptions",
          title: "Custom Exceptions",
          content: (
            <>
              <h3>Custom Exceptions</h3>
              <p>
                Developers can create their own exception classes by extending
                Exception or RuntimeException.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Custom exceptions are?",
              options: [
                "User-defined exception classes",
                "Built-in loops",
                "Packages",
                "Primitive types",
              ],
              answer: "User-defined exception classes",
            },
            {
              question: "Custom exceptions can extend?",
              options: [
                "Exception",
                "Scanner only",
                "String",
                "ArrayList",
              ],
              answer: "Exception",
            },
            {
              question: "Custom exceptions are useful for?",
              options: [
                "Application-specific errors",
                "Creating UI only",
                "Sorting arrays",
                "Creating threads only",
              ],
              answer: "Application-specific errors",
            },
            {
              question: "A custom exception is usually a?",
              options: ["Class", "Loop", "Variable", "Package"],
              answer: "Class",
            },
            {
              question: "Can custom exceptions have custom messages?",
              options: ["Yes", "No", "Never", "Only with int"],
              answer: "Yes",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 7. COLLECTIONS
    // =======================================================

    {
      id: "collections",
      title: "🗂️ Collections Framework",
      subtopics: [
        {
          id: "arraylist",
          title: "ArrayList",
          content: (
            <>
              <h3>ArrayList</h3>
              <p>
                ArrayList is a resizable array implementation of List.
              </p>

              <pre>{`ArrayList<Integer> numbers = new ArrayList<>();`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "ArrayList is?",
              options: [
                "Resizable array implementation",
                "Fixed primitive array",
                "Tree only",
                "Hash table only",
              ],
              answer: "Resizable array implementation",
            },
            {
              question: "ArrayList belongs to?",
              options: [
                "Collections Framework",
                "JVM only",
                "Exception Framework",
                "Thread API only",
              ],
              answer: "Collections Framework",
            },
            {
              question: "Can ArrayList store objects?",
              options: ["Yes", "No", "Only int primitive", "Only String"],
              answer: "Yes",
            },
            {
              question: "ArrayList supports index-based access?",
              options: ["Yes", "No", "Never", "Only after sorting"],
              answer: "Yes",
            },
            {
              question: "ArrayList size can change?",
              options: ["Yes", "No", "Only once", "Only during creation"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "linkedlist",
          title: "LinkedList",
          content: (
            <>
              <h3>LinkedList</h3>
              <p>
                Java LinkedList implements List and Deque and is based on
                linked nodes.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "LinkedList is based on?",
              options: ["Linked nodes", "Only arrays", "Only trees", "Hashing"],
              answer: "Linked nodes",
            },
            {
              question: "LinkedList implements?",
              options: ["List and Deque", "Only Set", "Only Map", "Only Queue"],
              answer: "List and Deque",
            },
            {
              question: "LinkedList can be used as a queue?",
              options: ["Yes", "No", "Only static", "Only with arrays"],
              answer: "Yes",
            },
            {
              question: "LinkedList supports duplicate elements?",
              options: ["Yes", "No", "Never", "Only integers"],
              answer: "Yes",
            },
            {
              question: "LinkedList is dynamically sized?",
              options: ["Yes", "No", "Fixed", "Only 10 elements"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "hashset",
          title: "HashSet",
          content: (
            <>
              <h3>HashSet</h3>
              <p>
                HashSet stores unique elements and does not guarantee a
                specific iteration order.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "HashSet stores?",
              options: [
                "Unique elements",
                "Only duplicate elements",
                "Only key-value pairs",
                "Only arrays",
              ],
              answer: "Unique elements",
            },
            {
              question: "Does HashSet guarantee insertion order?",
              options: ["No", "Yes", "Always", "Only with integers"],
              answer: "No",
            },
            {
              question: "HashSet is part of?",
              options: [
                "Collections Framework",
                "JVM",
                "JDBC only",
                "Thread API",
              ],
              answer: "Collections Framework",
            },
            {
              question: "Can HashSet contain duplicate values?",
              options: ["No", "Yes", "Always", "Only Strings"],
              answer: "No",
            },
            {
              question: "HashSet is useful for?",
              options: [
                "Removing duplicates",
                "Sorting always",
                "Key-value storage",
                "File reading",
              ],
              answer: "Removing duplicates",
            },
          ]),
        },

        {
          id: "treeset",
          title: "TreeSet",
          content: (
            <>
              <h3>TreeSet</h3>
              <p>
                TreeSet stores unique elements in sorted order according to
                their natural ordering or a comparator.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "TreeSet stores elements in?",
              options: [
                "Sorted order",
                "Random order only",
                "Insertion order always",
                "Reverse always",
              ],
              answer: "Sorted order",
            },
            {
              question: "TreeSet stores?",
              options: [
                "Unique elements",
                "Only duplicates",
                "Key-value pairs",
                "Only arrays",
              ],
              answer: "Unique elements",
            },
            {
              question: "TreeSet is based on a?",
              options: [
                "Tree structure",
                "Stack",
                "Queue",
                "Array only",
              ],
              answer: "Tree structure",
            },
            {
              question: "TreeSet can use Comparator?",
              options: ["Yes", "No", "Never", "Only Strings"],
              answer: "Yes",
            },
            {
              question: "TreeSet is useful when you need?",
              options: [
                "Sorted unique values",
                "Duplicate values",
                "Only key-value pairs",
                "Only random access",
              ],
              answer: "Sorted unique values",
            },
          ]),
        },

        {
          id: "hashmap",
          title: "HashMap",
          content: (
            <>
              <h3>HashMap</h3>
              <p>
                HashMap stores data as key-value pairs and provides efficient
                average-time lookup.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "HashMap stores?",
              options: [
                "Key-value pairs",
                "Only values",
                "Only indexes",
                "Only nodes",
              ],
              answer: "Key-value pairs",
            },
            {
              question: "HashMap keys are?",
              options: [
                "Unique",
                "Always duplicated",
                "Only integers",
                "Only Strings",
              ],
              answer: "Unique",
            },
            {
              question: "Which method adds a mapping?",
              options: ["put()", "add()", "insertOnly()", "push()"],
              answer: "put()",
            },
            {
              question: "Which method retrieves a value by key?",
              options: ["get()", "findValue()", "search()", "fetchOnly()"],
              answer: "get()",
            },
            {
              question: "HashMap is useful for?",
              options: [
                "Fast key-based lookup",
                "Only sorting",
                "Only recursion",
                "Only file handling",
              ],
              answer: "Fast key-based lookup",
            },
          ]),
        },

        {
          id: "queue-priorityqueue",
          title: "Queue & PriorityQueue",
          content: (
            <>
              <h3>Queue</h3>
              <p>
                A queue generally follows FIFO behavior.
              </p>

              <h3>PriorityQueue</h3>
              <p>
                PriorityQueue orders elements according to priority/natural
                ordering or a comparator.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "A normal queue generally follows?",
              options: ["FIFO", "LIFO", "Random", "Binary"],
              answer: "FIFO",
            },
            {
              question: "PriorityQueue orders based on?",
              options: [
                "Priority/order",
                "Only insertion time",
                "File size",
                "Memory address",
              ],
              answer: "Priority/order",
            },
            {
              question: "Which interface represents a queue?",
              options: ["Queue", "Map", "Set", "List only"],
              answer: "Queue",
            },
            {
              question: "PriorityQueue is part of?",
              options: [
                "Collections Framework",
                "JVM only",
                "JDBC",
                "Exception API",
              ],
              answer: "Collections Framework",
            },
            {
              question: "Queue is useful for?",
              options: [
                "First-in-first-out processing",
                "Only recursion",
                "Only sorting",
                "Only hashing",
              ],
              answer: "First-in-first-out processing",
            },
          ]),
        },

        {
          id: "iterator-comparator",
          title: "Iterator & Comparator",
          content: (
            <>
              <h3>Iterator</h3>
              <p>
                Iterator is used to traverse collection elements.
              </p>

              <h3>Comparator</h3>
              <p>
                Comparator allows custom ordering of objects.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Iterator is used for?",
              options: [
                "Traversing collections",
                "Creating classes",
                "Database connection",
                "Exception creation",
              ],
              answer: "Traversing collections",
            },
            {
              question: "Comparator is used for?",
              options: [
                "Custom ordering",
                "Memory allocation",
                "File reading",
                "Thread creation",
              ],
              answer: "Custom ordering",
            },
            {
              question: "Which method moves an Iterator forward?",
              options: ["next()", "move()", "forward()", "go()"],
              answer: "next()",
            },
            {
              question: "Comparator commonly implements?",
              options: [
                "compare()",
                "sortOnly()",
                "order()",
                "arrange()",
              ],
              answer: "compare()",
            },
            {
              question: "Comparator is useful for?",
              options: [
                "Sorting custom objects",
                "Creating JVM",
                "Opening files",
                "Handling exceptions",
              ],
              answer: "Sorting custom objects",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 8. GENERICS
    // =======================================================

    {
      id: "generics",
      title: "🧩 Generics",
      subtopics: [
        {
          id: "generic-classes",
          title: "Generic Classes",
          content: (
            <>
              <h3>Generic Classes</h3>
              <p>
                Generics allow classes to work with different types while
                providing compile-time type safety.
              </p>

              <pre>{`class Box<T> {
    T value;
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Generics provide?",
              options: [
                "Type safety",
                "Only runtime errors",
                "Only UI",
                "Only networking",
              ],
              answer: "Type safety",
            },
            {
              question: "What represents a generic type parameter?",
              options: ["T", "int", "class", "typeOnly"],
              answer: "T",
            },
            {
              question: "Generic classes can work with?",
              options: [
                "Different reference types",
                "Only int",
                "Only String",
                "Only boolean",
              ],
              answer: "Different reference types",
            },
            {
              question: "Generics are checked mainly at?",
              options: [
                "Compile time",
                "Only runtime",
                "Shutdown",
                "Network time",
              ],
              answer: "Compile time",
            },
            {
              question: "Generics reduce need for?",
              options: [
                "Explicit casts",
                "Variables",
                "Methods",
                "Classes",
              ],
              answer: "Explicit casts",
            },
          ]),
        },

        {
          id: "generic-methods",
          title: "Generic Methods",
          content: (
            <>
              <h3>Generic Methods</h3>
              <p>
                A generic method declares its own type parameter.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "A generic method has?",
              options: [
                "Its own type parameter",
                "Only int",
                "Only String",
                "No parameters",
              ],
              answer: "Its own type parameter",
            },
            {
              question: "Generic methods improve?",
              options: [
                "Reusability and type safety",
                "Screen resolution",
                "Network speed",
                "Memory hardware",
              ],
              answer: "Reusability and type safety",
            },
            {
              question: "Can a generic method work with multiple types?",
              options: ["Yes", "No", "Only String", "Only Integer"],
              answer: "Yes",
            },
            {
              question: "Generic type parameters are commonly written?",
              options: [
                "Before return type",
                "After package",
                "Only after class",
                "Inside import",
              ],
              answer: "Before return type",
            },
            {
              question: "Generics are mainly a feature of?",
              options: [
                "Java type system",
                "HTML",
                "CSS",
                "SQL",
              ],
              answer: "Java type system",
            },
          ]),
        },

        {
          id: "wildcards",
          title: "Wildcards",
          content: (
            <>
              <h3>Wildcards</h3>
              <p>
                Wildcards such as ? allow flexible generic type relationships.
              </p>

              <p>
                Common forms include ? extends and ? super.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Which symbol represents a generic wildcard?",
              options: ["?", "*", "#", "%"],
              answer: "?",
            },
            {
              question: "? extends is related to?",
              options: [
                "Upper-bounded wildcard",
                "Lower-bounded wildcard",
                "No bound",
                "Primitive casting",
              ],
              answer: "Upper-bounded wildcard",
            },
            {
              question: "? super is related to?",
              options: [
                "Lower-bounded wildcard",
                "Upper-bounded wildcard",
                "No generics",
                "Primitive type",
              ],
              answer: "Lower-bounded wildcard",
            },
            {
              question: "Wildcards provide?",
              options: [
                "Generic flexibility",
                "Only inheritance",
                "Only loops",
                "Only arrays",
              ],
              answer: "Generic flexibility",
            },
            {
              question: "Wildcards are used with?",
              options: [
                "Generics",
                "Exceptions only",
                "Threads only",
                "JDBC only",
              ],
              answer: "Generics",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 9. JAVA MEMORY & INTERNALS
    // =======================================================

    {
      id: "java-internals",
      title: "🧠 Java Memory & Internals",
      subtopics: [
        {
          id: "stack-heap",
          title: "Stack vs Heap",
          content: (
            <>
              <h3>Stack</h3>
              <p>
                The stack is associated with method calls and local variables.
              </p>

              <h3>Heap</h3>
              <p>
                The heap stores objects and dynamically allocated memory.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Objects are generally stored in?",
              options: ["Heap", "Stack only", "Register only", "Code editor"],
              answer: "Heap",
            },
            {
              question: "Method call frames are associated with?",
              options: ["Stack", "Heap only", "Database", "Disk only"],
              answer: "Stack",
            },
            {
              question: "Local variables are commonly associated with?",
              options: ["Stack", "Network", "Database", "File"],
              answer: "Stack",
            },
            {
              question: "Heap is managed by?",
              options: [
                "JVM memory management",
                "CSS",
                "SQL",
                "Browser only",
              ],
              answer: "JVM memory management",
            },
            {
              question: "Stack memory is closely related to?",
              options: [
                "Method execution",
                "Database tables",
                "HTML",
                "Networking",
              ],
              answer: "Method execution",
            },
          ]),
        },

        {
          id: "garbage-collection",
          title: "Garbage Collection",
          content: (
            <>
              <h3>Garbage Collection</h3>
              <p>
                Java automatically manages memory and can reclaim heap space
                occupied by objects that are no longer reachable.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Garbage Collection manages?",
              options: [
                "Unused heap memory",
                "Only stack variables",
                "Only source files",
                "Only databases",
              ],
              answer: "Unused heap memory",
            },
            {
              question: "Garbage Collection is handled by?",
              options: ["JVM", "HTML", "CSS", "SQL"],
              answer: "JVM",
            },
            {
              question: "An unreachable object can become eligible for?",
              options: [
                "Garbage collection",
                "Compilation",
                "Inheritance",
                "Sorting",
              ],
              answer: "Garbage collection",
            },
            {
              question: "Java programmers normally do not manually free objects using?",
              options: [
                "free()",
                "new",
                "return",
                "class",
              ],
              answer: "free()",
            },
            {
              question: "Garbage Collection helps prevent?",
              options: [
                "Some memory leaks from unreachable objects",
                "All programming bugs",
                "All exceptions",
                "All network failures",
              ],
              answer: "Some memory leaks from unreachable objects",
            },
          ]),
        },

        {
          id: "string-pool",
          title: "String Pool",
          content: (
            <>
              <h3>String Pool</h3>
              <p>
                Java maintains a pool of string literals to reuse immutable
                String objects where possible.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "String pool is used for?",
              options: [
                "Reusing String literals",
                "Sorting strings",
                "Deleting strings",
                "Encrypting strings",
              ],
              answer: "Reusing String literals",
            },
            {
              question: "Strings in Java are?",
              options: [
                "Immutable",
                "Always mutable",
                "Primitive",
                "Numeric",
              ],
              answer: "Immutable",
            },
            {
              question: "String literals can be stored in?",
              options: [
                "String pool",
                "Only stack",
                "Only CPU cache",
                "Only database",
              ],
              answer: "String pool",
            },
            {
              question: "String pool can reduce?",
              options: [
                "Duplicate String objects",
                "All variables",
                "All arrays",
                "All classes",
              ],
              answer: "Duplicate String objects",
            },
            {
              question: "String pool is managed by?",
              options: ["JVM", "CSS", "SQL", "Git"],
              answer: "JVM",
            },
          ]),
        },

        {
          id: "wrapper-autoboxing",
          title: "Wrapper Classes & Autoboxing",
          content: (
            <>
              <h3>Wrapper Classes</h3>

              <p>
                Wrapper classes represent primitive values as objects.
              </p>

              <p>
                Example: Integer, Double, Boolean, Character.
              </p>

              <h3>Autoboxing</h3>
              <p>
                Automatic conversion from primitive to wrapper object.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Integer is a wrapper for?",
              options: ["int", "double", "char", "boolean"],
              answer: "int",
            },
            {
              question: "Autoboxing converts?",
              options: [
                "Primitive to wrapper object",
                "Object to primitive only",
                "String to int",
                "Class to interface",
              ],
              answer: "Primitive to wrapper object",
            },
            {
              question: "Unboxing converts?",
              options: [
                "Wrapper to primitive",
                "Primitive to wrapper",
                "String to object",
                "Class to package",
              ],
              answer: "Wrapper to primitive",
            },
            {
              question: "Which is a wrapper class?",
              options: ["Integer", "int[]", "void", "for"],
              answer: "Integer",
            },
            {
              question: "Collections generally store?",
              options: [
                "Objects",
                "Only primitive types",
                "Only methods",
                "Only packages",
              ],
              answer: "Objects",
            },
          ]),
        },

        {
          id: "equals-hashcode",
          title: "equals() and hashCode()",
          content: (
            <>
              <h3>equals()</h3>
              <p>
                equals() is used to compare logical equality of objects when
                properly overridden.
              </p>

              <h3>hashCode()</h3>
              <p>
                hashCode() provides a hash value used by hash-based
                collections.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "equals() is used for?",
              options: [
                "Logical equality",
                "Memory allocation",
                "Compilation",
                "Thread creation",
              ],
              answer: "Logical equality",
            },
            {
              question: "hashCode() is important for?",
              options: [
                "Hash-based collections",
                "Only arrays",
                "Only strings",
                "Only loops",
              ],
              answer: "Hash-based collections",
            },
            {
              question: "If two equal objects are used in a hash collection, their hash codes should be?",
              options: [
                "Equal",
                "Always different",
                "Random",
                "Null",
              ],
              answer: "Equal",
            },
            {
              question: "equals() belongs to?",
              options: [
                "Object class",
                "Scanner only",
                "ArrayList only",
                "JVM only",
              ],
              answer: "Object class",
            },
            {
              question: "hashCode() returns?",
              options: [
                "An integer hash value",
                "A String",
                "A boolean only",
                "An array",
              ],
              answer: "An integer hash value",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 10. JAVA 8+
    // =======================================================

    {
      id: "java-modern",
      title: "🚀 Java 8+ Features",
      subtopics: [
        {
          id: "lambda",
          title: "Lambda Expressions",
          content: (
            <>
              <h3>Lambda Expressions</h3>
              <p>
                Lambda expressions provide a concise way to represent behavior
                that can be passed around.
              </p>

              <pre>{`(a, b) -> a + b`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Lambda expressions provide?",
              options: [
                "Concise function-like behavior",
                "Database tables",
                "Classes only",
                "Exception handling only",
              ],
              answer: "Concise function-like behavior",
            },
            {
              question: "Which symbol is used in lambda syntax?",
              options: ["->", "=>", "::", "=="],
              answer: "->",
            },
            {
              question: "Lambda expressions were introduced in?",
              options: ["Java 8", "Java 1", "Java 3", "Java 20"],
              answer: "Java 8",
            },
            {
              question: "Lambdas are commonly used with?",
              options: [
                "Functional interfaces",
                "Only classes",
                "Only arrays",
                "Only exceptions",
              ],
              answer: "Functional interfaces",
            },
            {
              question: "Lambda can reduce?",
              options: [
                "Boilerplate code",
                "All memory",
                "All classes",
                "All exceptions",
              ],
              answer: "Boilerplate code",
            },
          ]),
        },

        {
          id: "functional-interface",
          title: "Functional Interfaces",
          content: (
            <>
              <h3>Functional Interface</h3>
              <p>
                A functional interface has exactly one abstract method.
              </p>

              <p>
                Examples include Runnable, Predicate, Function and Consumer.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "A functional interface has how many abstract methods?",
              options: ["One", "Two", "Zero", "Five"],
              answer: "One",
            },
            {
              question: "Which is a functional interface?",
              options: [
                "Predicate",
                "ArrayList",
                "HashMap",
                "String",
              ],
              answer: "Predicate",
            },
            {
              question: "Functional interfaces are commonly used with?",
              options: [
                "Lambda expressions",
                "Only arrays",
                "Only exceptions",
                "Only JDBC",
              ],
              answer: "Lambda expressions",
            },
            {
              question: "Which annotation can indicate a functional interface?",
              options: [
                "@FunctionalInterface",
                "@Lambda",
                "@InterfaceFunction",
                "@SingleMethod",
              ],
              answer: "@FunctionalInterface",
            },
            {
              question: "Runnable is a functional interface?",
              options: ["Yes", "No", "Only before Java 8", "Only in Android"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "stream-api",
          title: "Stream API",
          content: (
            <>
              <h3>Stream API</h3>
              <p>
                Streams allow declarative processing of collections and other
                data sources.
              </p>

              <p>
                Common operations include filter, map and reduce.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Stream API is used for?",
              options: [
                "Processing data",
                "Creating classes only",
                "Opening files only",
                "Starting JVM",
              ],
              answer: "Processing data",
            },
            {
              question: "Which filters stream elements?",
              options: ["filter()", "selectOnly()", "choose()", "whereOnly()"],
              answer: "filter()",
            },
            {
              question: "Which transforms elements?",
              options: ["map()", "changeOnly()", "convertAll()", "transformOnly()"],
              answer: "map()",
            },
            {
              question: "Which can combine stream values into one result?",
              options: ["reduce()", "combineOnly()", "joinAll()", "sumOnly()"],
              answer: "reduce()",
            },
            {
              question: "Streams were introduced in?",
              options: ["Java 8", "Java 1", "Java 5", "Java 20"],
              answer: "Java 8",
            },
          ]),
        },

        {
          id: "optional",
          title: "Optional",
          content: (
            <>
              <h3>Optional</h3>
              <p>
                Optional is a container that can represent a value that may or
                may not be present.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Optional can represent?",
              options: [
                "Value may be present or absent",
                "Only integers",
                "Only arrays",
                "Only exceptions",
              ],
              answer: "Value may be present or absent",
            },
            {
              question: "Optional was introduced in?",
              options: ["Java 8", "Java 1", "Java 3", "Java 15"],
              answer: "Java 8",
            },
            {
              question: "Optional can help reduce?",
              options: [
                "Some null-related errors",
                "All exceptions",
                "All loops",
                "All memory usage",
              ],
              answer: "Some null-related errors",
            },
            {
              question: "Which creates an Optional containing a value?",
              options: [
                "Optional.of()",
                "Optional.make()",
                "Optional.createValue()",
                "Optional.value()",
              ],
              answer: "Optional.of()",
            },
            {
              question: "Optional belongs to?",
              options: [
                "java.util",
                "java.io",
                "java.sql",
                "java.awt",
              ],
              answer: "java.util",
            },
          ]),
        },

        {
          id: "method-reference",
          title: "Method References",
          content: (
            <>
              <h3>Method References</h3>
              <p>
                Method references provide a shorter syntax for referring to
                existing methods.
              </p>

              <pre>{`System.out::println`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Method reference uses which symbol?",
              options: ["::", "->", "=>", "##"],
              answer: "::",
            },
            {
              question: "Method references can replace some?",
              options: [
                "Lambda expressions",
                "Classes",
                "Packages",
                "Exceptions",
              ],
              answer: "Lambda expressions",
            },
            {
              question: "System.out::println is an example of?",
              options: [
                "Method reference",
                "Constructor",
                "Exception",
                "Class declaration",
              ],
              answer: "Method reference",
            },
            {
              question: "Method references improve?",
              options: [
                "Conciseness",
                "Memory size",
                "CPU speed",
                "Database size",
              ],
              answer: "Conciseness",
            },
            {
              question: "Method references were introduced with?",
              options: ["Java 8", "Java 1", "Java 5", "Java 10"],
              answer: "Java 8",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 11. MULTITHREADING
    // =======================================================

    {
      id: "multithreading",
      title: "🧵 Multithreading",
      subtopics: [
        {
          id: "threads",
          title: "Threads",
          content: (
            <>
              <h3>Threads</h3>
              <p>
                A thread is a lightweight unit of execution within a process.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "A thread is?",
              options: [
                "Unit of execution",
                "Database",
                "Class only",
                "Package",
              ],
              answer: "Unit of execution",
            },
            {
              question: "Multiple threads can execute within?",
              options: [
                "A process",
                "Only a database",
                "Only a package",
                "Only a class",
              ],
              answer: "A process",
            },
            {
              question: "Threads can improve?",
              options: [
                "Concurrent task execution",
                "Only memory size",
                "Only storage",
                "Only compilation",
              ],
              answer: "Concurrent task execution",
            },
            {
              question: "Thread execution is managed by?",
              options: [
                "JVM and operating system",
                "CSS",
                "HTML",
                "SQL",
              ],
              answer: "JVM and operating system",
            },
            {
              question: "Java supports multithreading?",
              options: ["Yes", "No", "Only in old versions", "Only Android"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "runnable",
          title: "Runnable",
          content: (
            <>
              <h3>Runnable</h3>
              <p>
                Runnable is a functional interface representing a task that
                does not return a result.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Runnable represents?",
              options: [
                "A task",
                "A database",
                "A class loader",
                "An array",
              ],
              answer: "A task",
            },
            {
              question: "Runnable's main method is?",
              options: ["run()", "start()", "execute()", "task()"],
              answer: "run()",
            },
            {
              question: "Runnable is a functional interface?",
              options: ["Yes", "No", "Only Java 7", "Only Java 20"],
              answer: "Yes",
            },
            {
              question: "A Thread can be created using a Runnable?",
              options: ["Yes", "No", "Only with arrays", "Only with JDBC"],
              answer: "Yes",
            },
            {
              question: "Runnable does it return a result?",
              options: ["No", "Yes", "Always int", "Always String"],
              answer: "No",
            },
          ]),
        },

        {
          id: "synchronization",
          title: "Synchronization",
          content: (
            <>
              <h3>Synchronization</h3>
              <p>
                Synchronization controls access to shared resources so that
                multiple threads do not incorrectly modify shared state at
                the same time.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Synchronization helps protect?",
              options: [
                "Shared resources",
                "Only strings",
                "Only classes",
                "Only packages",
              ],
              answer: "Shared resources",
            },
            {
              question: "Synchronization helps prevent?",
              options: [
                "Race conditions",
                "Compilation",
                "Inheritance",
                "Method creation",
              ],
              answer: "Race conditions",
            },
            {
              question: "Which keyword can provide synchronization?",
              options: ["synchronized", "sync", "lockOnly", "safe"],
              answer: "synchronized",
            },
            {
              question: "Race condition occurs due to?",
              options: [
                "Unsafe concurrent access",
                "Only loops",
                "Only arrays",
                "Only inheritance",
              ],
              answer: "Unsafe concurrent access",
            },
            {
              question: "Synchronization can reduce?",
              options: [
                "Concurrent access to critical sections",
                "All threads",
                "All classes",
                "All objects",
              ],
              answer: "Concurrent access to critical sections",
            },
          ]),
        },

        {
          id: "executor-framework",
          title: "Executor Framework",
          content: (
            <>
              <h3>Executor Framework</h3>
              <p>
                The Executor Framework provides higher-level APIs for managing
                and executing tasks using thread pools.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Executor Framework manages?",
              options: [
                "Tasks and threads",
                "Only arrays",
                "Only exceptions",
                "Only files",
              ],
              answer: "Tasks and threads",
            },
            {
              question: "Thread pools help?",
              options: [
                "Reuse worker threads",
                "Delete all threads",
                "Create unlimited memory",
                "Remove JVM",
              ],
              answer: "Reuse worker threads",
            },
            {
              question: "Which interface can execute submitted tasks?",
              options: [
                "ExecutorService",
                "RunnableOnly",
                "ThreadServiceOnly",
                "TaskManager",
              ],
              answer: "ExecutorService",
            },
            {
              question: "Executor Framework is in?",
              options: [
                "java.util.concurrent",
                "java.sql",
                "java.io",
                "java.awt",
              ],
              answer: "java.util.concurrent",
            },
            {
              question: "ExecutorService can be shut down?",
              options: ["Yes", "No", "Never", "Only JVM"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "callable-future",
          title: "Callable & Future",
          content: (
            <>
              <h3>Callable</h3>
              <p>
                Callable represents a task that can return a result and throw
                an exception.
              </p>

              <h3>Future</h3>
              <p>
                Future represents the result of an asynchronous computation.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Callable can return?",
              options: [
                "A result",
                "Nothing only",
                "Only void",
                "Only boolean",
              ],
              answer: "A result",
            },
            {
              question: "Which method does Callable implement?",
              options: ["call()", "run()", "execute()", "result()"],
              answer: "call()",
            },
            {
              question: "Future represents?",
              options: [
                "Result of asynchronous computation",
                "A class",
                "A package",
                "A database",
              ],
              answer: "Result of asynchronous computation",
            },
            {
              question: "Future can retrieve a result using?",
              options: ["get()", "resultOnly()", "fetch()", "receive()"],
              answer: "get()",
            },
            {
              question: "Callable belongs to concurrent programming?",
              options: ["Yes", "No", "Only JavaScript", "Only SQL"],
              answer: "Yes",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 12. FILE HANDLING & I/O
    // =======================================================

    {
      id: "file-io",
      title: "📁 File Handling & I/O",
      subtopics: [
        {
          id: "file-class",
          title: "File",
          content: (
            <>
              <h3>File</h3>
              <p>
                java.io.File represents file and directory path information.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "File class belongs to?",
              options: ["java.io", "java.util", "java.sql", "java.lang"],
              answer: "java.io",
            },
            {
              question: "File can represent?",
              options: [
                "File or directory path",
                "Only database",
                "Only thread",
                "Only array",
              ],
              answer: "File or directory path",
            },
            {
              question: "File class itself reads file contents automatically?",
              options: ["No", "Yes", "Always", "Only text"],
              answer: "No",
            },
            {
              question: "File can check whether a path exists?",
              options: ["Yes", "No", "Only directories", "Only files"],
              answer: "Yes",
            },
            {
              question: "File is related to?",
              options: [
                "File system operations",
                "Only networking",
                "Only collections",
                "Only exceptions",
              ],
              answer: "File system operations",
            },
          ]),
        },

        {
          id: "filereader-writer",
          title: "FileReader & FileWriter",
          content: (
            <>
              <h3>FileReader</h3>
              <p>
                FileReader is used to read character data from files.
              </p>

              <h3>FileWriter</h3>
              <p>
                FileWriter is used to write character data to files.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "FileReader is used for?",
              options: ["Reading characters", "Writing only", "Threads", "SQL"],
              answer: "Reading characters",
            },
            {
              question: "FileWriter is used for?",
              options: ["Writing characters", "Reading only", "Sorting", "Hashing"],
              answer: "Writing characters",
            },
            {
              question: "Both belong to?",
              options: ["java.io", "java.util", "java.sql", "java.net"],
              answer: "java.io",
            },
            {
              question: "FileReader works with?",
              options: [
                "Character streams",
                "Only integers",
                "Only objects",
                "Only threads",
              ],
              answer: "Character streams",
            },
            {
              question: "FileWriter works with?",
              options: [
                "Character data",
                "Only binary objects",
                "Only database rows",
                "Only threads",
              ],
              answer: "Character data",
            },
          ]),
        },

        {
          id: "buffered-reader-writer",
          title: "BufferedReader & BufferedWriter",
          content: (
            <>
              <h3>BufferedReader</h3>
              <p>
                BufferedReader reads text efficiently using buffering.
              </p>

              <h3>BufferedWriter</h3>
              <p>
                BufferedWriter writes text efficiently using buffering.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "BufferedReader is used for?",
              options: [
                "Efficient text reading",
                "Only writing",
                "Database access",
                "Thread creation",
              ],
              answer: "Efficient text reading",
            },
            {
              question: "BufferedWriter is used for?",
              options: [
                "Efficient text writing",
                "Only reading",
                "Only sorting",
                "Only networking",
              ],
              answer: "Efficient text writing",
            },
            {
              question: "Buffering can improve?",
              options: [
                "I/O efficiency",
                "Class inheritance",
                "Exception hierarchy",
                "Array indexing",
              ],
              answer: "I/O efficiency",
            },
            {
              question: "BufferedReader belongs to?",
              options: ["java.io", "java.sql", "java.util", "java.awt"],
              answer: "java.io",
            },
            {
              question: "BufferedWriter writes?",
              options: [
                "Character data",
                "Only integers",
                "Only database records",
                "Only threads",
              ],
              answer: "Character data",
            },
          ]),
        },

        {
          id: "input-output-stream",
          title: "InputStream & OutputStream",
          content: (
            <>
              <h3>Byte Streams</h3>
              <p>
                InputStream reads byte data and OutputStream writes byte data.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "InputStream reads?",
              options: ["Bytes", "Only characters", "Only objects", "Only SQL"],
              answer: "Bytes",
            },
            {
              question: "OutputStream writes?",
              options: ["Bytes", "Only strings", "Only classes", "Only SQL"],
              answer: "Bytes",
            },
            {
              question: "InputStream belongs to?",
              options: ["java.io", "java.util", "java.sql", "java.lang"],
              answer: "java.io",
            },
            {
              question: "Byte streams are useful for?",
              options: [
                "Binary data",
                "Only text",
                "Only arrays",
                "Only collections",
              ],
              answer: "Binary data",
            },
            {
              question: "InputStream and OutputStream are?",
              options: [
                "Abstract stream classes",
                "Interfaces only",
                "Exceptions",
                "Collections",
              ],
              answer: "Abstract stream classes",
            },
          ]),
        },

        {
          id: "serialization",
          title: "Serialization",
          content: (
            <>
              <h3>Serialization</h3>
              <p>
                Serialization converts an object's state into a byte stream so
                it can be stored or transmitted.
              </p>

              <p>
                A class commonly implements Serializable.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Serialization converts object state into?",
              options: [
                "Byte stream",
                "SQL query",
                "HTML",
                "CSS",
              ],
              answer: "Byte stream",
            },
            {
              question: "Which interface is commonly used?",
              options: [
                "Serializable",
                "SerializeOnly",
                "ObjectStreamOnly",
                "Convertable",
              ],
              answer: "Serializable",
            },
            {
              question: "Serialization can be used for?",
              options: [
                "Storing or transmitting objects",
                "Only sorting",
                "Only inheritance",
                "Only loops",
              ],
              answer: "Storing or transmitting objects",
            },
            {
              question: "Deserialization does what?",
              options: [
                "Reconstructs object state",
                "Deletes objects",
                "Sorts objects",
                "Creates interfaces",
              ],
              answer: "Reconstructs object state",
            },
            {
              question: "Serialization is related to?",
              options: [
                "Object I/O",
                "Only collections",
                "Only exceptions",
                "Only threads",
              ],
              answer: "Object I/O",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 13. JDBC
    // =======================================================

    {
      id: "jdbc",
      title: "🗄️ JDBC & Database Connectivity",
      subtopics: [
        {
          id: "jdbc-introduction",
          title: "JDBC Introduction",
          content: (
            <>
              <h3>JDBC</h3>
              <p>
                JDBC stands for Java Database Connectivity. It provides APIs
                for connecting Java applications to databases.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "JDBC stands for?",
              options: [
                "Java Database Connectivity",
                "Java Data Code",
                "Java Database Compiler",
                "Java Development Connection",
              ],
              answer: "Java Database Connectivity",
            },
            {
              question: "JDBC is used for?",
              options: [
                "Database connectivity",
                "UI styling",
                "Sorting",
                "Thread creation only",
              ],
              answer: "Database connectivity",
            },
            {
              question: "JDBC allows Java programs to interact with?",
              options: [
                "Databases",
                "Only files",
                "Only browsers",
                "Only CPUs",
              ],
              answer: "Databases",
            },
            {
              question: "JDBC belongs to?",
              options: [
                "Java database APIs",
                "Collections",
                "Exception handling",
                "Graphics only",
              ],
              answer: "Java database APIs",
            },
            {
              question: "JDBC is commonly used in?",
              options: [
                "Backend applications",
                "CSS files",
                "HTML only",
                "Image editing",
              ],
              answer: "Backend applications",
            },
          ]),
        },

        {
          id: "jdbc-connection",
          title: "Connection",
          content: (
            <>
              <h3>Connection</h3>
              <p>
                A Connection represents a session between a Java application
                and a database.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Connection represents?",
              options: [
                "Database session",
                "Java class only",
                "File path",
                "Thread",
              ],
              answer: "Database session",
            },
            {
              question: "Which class is commonly used to obtain connections?",
              options: [
                "DriverManager",
                "ConnectionManagerOnly",
                "DatabaseClass",
                "SQLManager",
              ],
              answer: "DriverManager",
            },
            {
              question: "Connection belongs to?",
              options: [
                "java.sql",
                "java.io",
                "java.util",
                "java.lang",
              ],
              answer: "java.sql",
            },
            {
              question: "A connection should generally be?",
              options: [
                "Closed when no longer needed",
                "Left open forever",
                "Deleted",
                "Serialized always",
              ],
              answer: "Closed when no longer needed",
            },
            {
              question: "Connection is used to create?",
              options: [
                "Statements",
                "HTML",
                "CSS",
                "Threads only",
              ],
              answer: "Statements",
            },
          ]),
        },

        {
          id: "statement-preparedstatement",
          title: "Statement & PreparedStatement",
          content: (
            <>
              <h3>Statement</h3>
              <p>
                Statement can execute SQL statements.
              </p>

              <h3>PreparedStatement</h3>
              <p>
                PreparedStatement supports parameterized SQL and is generally
                preferred for user-supplied values.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Statement is used to execute?",
              options: ["SQL", "HTML", "CSS", "JavaScript"],
              answer: "SQL",
            },
            {
              question: "PreparedStatement supports?",
              options: [
                "Parameterized queries",
                "Only arrays",
                "Only threads",
                "Only files",
              ],
              answer: "Parameterized queries",
            },
            {
              question: "PreparedStatement can help reduce?",
              options: [
                "SQL injection risk",
                "Compilation time always",
                "Memory size",
                "Array size",
              ],
              answer: "SQL injection risk",
            },
            {
              question: "Which method sets a parameter?",
              options: [
                "setString()",
                "putString()",
                "addString()",
                "parameterString()",
              ],
              answer: "setString()",
            },
            {
              question: "PreparedStatement belongs to?",
              options: ["java.sql", "java.io", "java.util", "java.net"],
              answer: "java.sql",
            },
          ]),
        },

        {
          id: "resultset",
          title: "ResultSet",
          content: (
            <>
              <h3>ResultSet</h3>
              <p>
                ResultSet represents the result of executing a query that
                returns rows.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "ResultSet represents?",
              options: [
                "Query result rows",
                "A Java class only",
                "A file",
                "A thread",
              ],
              answer: "Query result rows",
            },
            {
              question: "Which method moves to the next row?",
              options: ["next()", "move()", "forward()", "rowNext()"],
              answer: "next()",
            },
            {
              question: "ResultSet belongs to?",
              options: ["java.sql", "java.io", "java.util", "java.lang"],
              answer: "java.sql",
            },
            {
              question: "ResultSet can retrieve values using?",
              options: [
                "getString()",
                "readStringOnly()",
                "fetchText()",
                "valueString()",
              ],
              answer: "getString()",
            },
            {
              question: "ResultSet is commonly used after?",
              options: [
                "SELECT query",
                "DELETE only",
                "INSERT only",
                "CREATE package",
              ],
              answer: "SELECT query",
            },
          ]),
        },

        {
          id: "jdbc-crud",
          title: "JDBC CRUD",
          content: (
            <>
              <h3>CRUD</h3>

              <ul>
                <li>Create</li>
                <li>Read</li>
                <li>Update</li>
                <li>Delete</li>
              </ul>

              <p>
                JDBC can be used to perform CRUD operations on databases.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "CRUD stands for?",
              options: [
                "Create Read Update Delete",
                "Compile Run Update Delete",
                "Create Run Use Data",
                "Connect Read Use Delete",
              ],
              answer: "Create Read Update Delete",
            },
            {
              question: "Which SQL operation is commonly used for Read?",
              options: ["SELECT", "DELETE", "UPDATE", "DROP"],
              answer: "SELECT",
            },
            {
              question: "Which SQL operation changes existing data?",
              options: ["UPDATE", "SELECT", "CREATE", "READ"],
              answer: "UPDATE",
            },
            {
              question: "Which SQL operation removes rows?",
              options: ["DELETE", "SELECT", "INSERT", "UPDATE"],
              answer: "DELETE",
            },
            {
              question: "JDBC can perform CRUD operations?",
              options: ["Yes", "No", "Only Read", "Only Create"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "jdbc-transactions",
          title: "JDBC Transactions",
          content: (
            <>
              <h3>Transactions</h3>
              <p>
                A transaction groups database operations into a logical unit
                of work.
              </p>

              <p>
                Important operations include commit and rollback.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "A transaction groups?",
              options: [
                "Database operations",
                "Only Java classes",
                "Only loops",
                "Only files",
              ],
              answer: "Database operations",
            },
            {
              question: "commit means?",
              options: [
                "Make changes permanent",
                "Undo changes",
                "Close JVM",
                "Delete database",
              ],
              answer: "Make changes permanent",
            },
            {
              question: "rollback means?",
              options: [
                "Undo uncommitted changes",
                "Save changes",
                "Create table",
                "Start thread",
              ],
              answer: "Undo uncommitted changes",
            },
            {
              question: "Transactions help maintain?",
              options: [
                "Data consistency",
                "Screen resolution",
                "Array size",
                "Thread count only",
              ],
              answer: "Data consistency",
            },
            {
              question: "Transactions are related to?",
              options: [
                "Database operations",
                "Only Java loops",
                "Only strings",
                "Only classes",
              ],
              answer: "Database operations",
            },
          ]),
        },
      ],
    },

    // =======================================================
    // 14. MODERN JAVA & INTERVIEW CONCEPTS
    // =======================================================

    {
      id: "modern-interview",
      title: "🎯 Modern Java & Interview Concepts",
      subtopics: [
        {
          id: "enums",
          title: "Enums",
          content: (
            <>
              <h3>Enums</h3>
              <p>
                An enum defines a fixed set of named constants.
              </p>

              <pre>{`enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY
}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Enum represents?",
              options: [
                "Fixed set of constants",
                "Dynamic array",
                "Database table",
                "Thread",
              ],
              answer: "Fixed set of constants",
            },
            {
              question: "Which keyword defines an enum?",
              options: ["enum", "constant", "const", "enumeration"],
              answer: "enum",
            },
            {
              question: "Enum constants are?",
              options: [
                "Named constants",
                "Loops",
                "Methods only",
                "Packages",
              ],
              answer: "Named constants",
            },
            {
              question: "Enums improve readability for fixed choices?",
              options: ["Yes", "No", "Only arrays", "Only databases"],
              answer: "Yes",
            },
            {
              question: "Can enums have methods?",
              options: ["Yes", "No", "Never", "Only static"],
              answer: "Yes",
            },
          ]),
        },

        {
          id: "annotations",
          title: "Annotations",
          content: (
            <>
              <h3>Annotations</h3>
              <p>
                Annotations provide metadata about program elements.
              </p>

              <p>
                Examples include @Override and @Deprecated.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Annotations provide?",
              options: [
                "Metadata",
                "Only variables",
                "Only loops",
                "Only SQL",
              ],
              answer: "Metadata",
            },
            {
              question: "Which is a Java annotation?",
              options: ["@Override", "@OverrideClass", "@Method", "@Java"],
              answer: "@Override",
            },
            {
              question: "@Override is used for?",
              options: [
                "Indicating method overriding",
                "Creating objects",
                "Creating arrays",
                "Opening files",
              ],
              answer: "Indicating method overriding",
            },
            {
              question: "Annotations begin with?",
              options: ["@", "#", "$", "&"],
              answer: "@",
            },
            {
              question: "Annotations can be processed by?",
              options: [
                "Compiler/tools/runtime",
                "Only CPU",
                "Only database",
                "Only browser",
              ],
              answer: "Compiler/tools/runtime",
            },
          ]),
        },

        {
          id: "records",
          title: "Records",
          content: (
            <>
              <h3>Records</h3>
              <p>
                Records provide a concise way to model immutable data-carrying
                classes.
              </p>

              <pre>{`record Student(String name, int age) {}`}</pre>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Records are useful for?",
              options: [
                "Data-carrying classes",
                "Only loops",
                "Only threads",
                "Only databases",
              ],
              answer: "Data-carrying classes",
            },
            {
              question: "Records were introduced as a standard feature in?",
              options: [
                "Java 16",
                "Java 1",
                "Java 5",
                "Java 8",
              ],
              answer: "Java 16",
            },
            {
              question: "Record components are generally?",
              options: [
                "Final",
                "Always mutable",
                "Static only",
                "Private methods",
              ],
              answer: "Final",
            },
            {
              question: "Which keyword defines a record?",
              options: ["record", "data", "struct", "model"],
              answer: "record",
            },
            {
              question: "Records reduce boilerplate for?",
              options: [
                "Data classes",
                "Threads",
                "Exceptions",
                "Collections",
              ],
              answer: "Data classes",
            },
          ]),
        },

        {
          id: "immutability",
          title: "Immutability",
          content: (
            <>
              <h3>Immutability</h3>
              <p>
                An immutable object cannot have its state changed after it is
                created.
              </p>

              <p>
                String is a common example of an immutable Java class.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Immutable object state can be changed after creation?",
              options: ["No", "Yes", "Always", "Only with String"],
              answer: "No",
            },
            {
              question: "Which is a well-known immutable class?",
              options: ["String", "StringBuilder", "ArrayList", "HashMap"],
              answer: "String",
            },
            {
              question: "Immutability can improve?",
              options: [
                "Thread safety and predictability",
                "Screen size",
                "Network speed",
                "CPU frequency",
              ],
              answer: "Thread safety and predictability",
            },
            {
              question: "Immutable objects are generally?",
              options: [
                "Safe to share",
                "Always mutable",
                "Only arrays",
                "Only primitive",
              ],
              answer: "Safe to share",
            },
            {
              question: "A common way to design immutable classes is to?",
              options: [
                "Keep state private and avoid mutators",
                "Expose all fields publicly",
                "Use setters everywhere",
                "Change fields constantly",
              ],
              answer: "Keep state private and avoid mutators",
            },
          ]),
        },

        {
          id: "solid-basics",
          title: "SOLID Principles",
          content: (
            <>
              <h3>SOLID</h3>

              <ul>
                <li>Single Responsibility</li>
                <li>Open/Closed</li>
                <li>Liskov Substitution</li>
                <li>Interface Segregation</li>
                <li>Dependency Inversion</li>
              </ul>

              <p>
                SOLID principles help developers design maintainable
                object-oriented software.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "SOLID principles help with?",
              options: [
                "Maintainable software design",
                "Only sorting",
                "Only databases",
                "Only networking",
              ],
              answer: "Maintainable software design",
            },
            {
              question: "S stands for?",
              options: [
                "Single Responsibility",
                "Simple Runtime",
                "Static Reference",
                "System Runtime",
              ],
              answer: "Single Responsibility",
            },
            {
              question: "O stands for?",
              options: [
                "Open/Closed",
                "Object Only",
                "Output Operation",
                "Open Object",
              ],
              answer: "Open/Closed",
            },
            {
              question: "L stands for?",
              options: [
                "Liskov Substitution",
                "Linear Search",
                "Language System",
                "Loop Structure",
              ],
              answer: "Liskov Substitution",
            },
            {
              question: "D stands for?",
              options: [
                "Dependency Inversion",
                "Data Inheritance",
                "Dynamic Input",
                "Database Integration",
              ],
              answer: "Dependency Inversion",
            },
          ]),
        },

        {
          id: "design-patterns",
          title: "Design Patterns Basics",
          content: (
            <>
              <h3>Design Patterns</h3>
              <p>
                Design patterns are reusable approaches to commonly occurring
                software design problems.
              </p>

              <p>
                Examples include Singleton, Factory and Observer.
              </p>
            </>
          ),
          quiz: createQuiz([
            {
              question: "Design patterns provide?",
              options: [
                "Reusable design approaches",
                "Only code syntax",
                "Only database tables",
                "Only loops",
              ],
              answer: "Reusable design approaches",
            },
            {
              question: "Which is a design pattern?",
              options: ["Singleton", "ArrayList", "String", "Scanner"],
              answer: "Singleton",
            },
            {
              question: "Factory is a?",
              options: [
                "Creational design pattern",
                "Loop",
                "Collection",
                "Exception",
              ],
              answer: "Creational design pattern",
            },
            {
              question: "Observer is commonly associated with?",
              options: [
                "Behavioral design",
                "Primitive types",
                "Arrays",
                "JVM memory",
              ],
              answer: "Behavioral design",
            },
            {
              question: "Design patterns are mainly about?",
              options: [
                "Software design solutions",
                "CPU instructions",
                "HTML styling",
                "Database storage only",
              ],
              answer: "Software design solutions",
            },
          ]),
        },
      ],
    },
  ];

  // =========================================================
  // FIND CURRENT DATA
  // =========================================================

  const currentTopic = javaTopics.find(
    (topic) => topic.id === selectedTopic
  );

  const currentSubtopic = currentTopic?.subtopics.find(
    (subtopic) => subtopic.id === selectedSubtopic
  );

  const currentSubjectSubtopicIds = new Set(
    javaTopics.flatMap((topic) =>
      topic.subtopics.map((subtopic) => subtopic.id)
    )
  );

  const subjectCompletedTopics = Array.from(
    new Set(
      completedTopics.filter((id) =>
        currentSubjectSubtopicIds.has(id)
      )
    )
  );

  // =========================================================
  // PROGRESS
  // =========================================================

  const totalSubtopics = javaTopics.reduce(
    (total, topic) => total + topic.subtopics.length,
    0
  );

  const overallProgress =
    totalSubtopics === 0
      ? 0
      : Math.round((subjectCompletedTopics.length / totalSubtopics) * 100);

  const getTopicProgress = (topic) => {
    if (!topic || topic.subtopics.length === 0) return 0;

    const completed = topic.subtopics.filter((subtopic) =>
      subjectCompletedTopics.includes(subtopic.id)
    ).length;

    return Math.round((completed / topic.subtopics.length) * 100);
  };

  // =========================================================
  // QUIZ FUNCTIONS
  // =========================================================

  const shuffleOptions = (options) => {
    const shuffled = [...options];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }

    return shuffled;
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setAnswerChecked(false);

    if (currentSubtopic?.quiz?.length > 0) {
      setShuffledOptions(
        shuffleOptions(currentSubtopic.quiz[0].options)
      );
    }
  };

  const answerQuestion = (answer) => {
    if (!currentSubtopic || answerChecked) return;

    setSelectedAnswer(answer);
    setAnswerChecked(true);

    if (answer === currentSubtopic.quiz[currentQuestion].answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const nextQuestion = async () => {
    if (currentQuestion < currentSubtopic.quiz.length - 1) {
      const nextIndex = currentQuestion + 1;

      setCurrentQuestion(nextIndex);
      setSelectedAnswer(null);
      setAnswerChecked(false);

      setShuffledOptions(
        shuffleOptions(currentSubtopic.quiz[nextIndex].options)
      );
    } else {
      const finalScore = score;

      await saveQuizResult({
        subject: "Java",
        topic: currentSubtopic.title,
        topicId: currentSubtopic.id,
        score: finalScore,
        totalQuestions: currentSubtopic.quiz.length
      });

      setQuizStarted(false);
      setQuizFinished(true);
    }
  };

  const markCompleted = async () => {

  if (!selectedSubtopic) {
    return;
  }

  if (subjectCompletedTopics.includes(selectedSubtopic)) {
    return;
  }

  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:5000/learning-progress/complete",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },

        body: JSON.stringify({
          topicId: selectedSubtopic
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
      "Error saving learning progress:",
      error
    );

  }
};

  const retryQuiz = () => {
    startQuiz();
  };

  const closeQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setAnswerChecked(false);
    setShuffledOptions([]);
  };

  const backToRoadmap = () => {
    closeQuiz();
    setSelectedSubtopic(null);
    setSelectedTopic(null);
  };

  const backToTopic = () => {
    closeQuiz();
    setSelectedSubtopic(null);
  };

  // =========================================================
  // STYLES
  // =========================================================

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "35px 18px",
      background:
        "linear-gradient(135deg, #fffdf0 0%, #fff8d6 45%, #ffffff 100%)",
      color: "#242424",
    },

    container: {
      maxWidth: "1050px",
      margin: "0 auto",
    },

    title: {
      fontSize: "30px",
      marginBottom: "20px",
    },

    progressCard: {
      padding: "20px",
      marginBottom: "24px",
      borderRadius: "18px",
      background: "#ffffff",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    },

    progressBar: {
      width: "100%",
      height: "12px",
      background: "#eeeeee",
      borderRadius: "20px",
      overflow: "hidden",
      marginTop: "10px",
    },

    topicGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      marginTop: "25px",
    },

    topicCard: {
      background: "#ffffff",
      borderRadius: "20px",
      padding: "24px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      border: "1px solid #f0e6a0",
    },

    subtopicList: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginTop: "22px",
    },

    subtopicCard: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      background: "#ffffff",
      borderRadius: "16px",
      padding: "18px",
      boxShadow: "0 5px 18px rgba(0,0,0,0.07)",
      border: "1px solid #efe5a7",
    },

    number: {
      width: "42px",
      height: "42px",
      minWidth: "42px",
      borderRadius: "50%",
      background: "#fff0a8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700",
      color: "#6d5900",
    },

    info: {
      flex: 1,
    },

    primaryButton: {
      border: "none",
      background: "#f4c430",
      color: "#302600",
      padding: "11px 18px",
      borderRadius: "10px",
      fontWeight: "700",
      cursor: "pointer",
    },

    backButton: {
      border: "none",
      background: "#2f3542",
      color: "#ffffff",
      padding: "11px 18px",
      borderRadius: "10px",
      fontWeight: "700",
      cursor: "pointer",
      marginTop: "18px",
    },

    secondaryBack: {
      border: "1px solid #d1d1d1",
      background: "#ffffff",
      color: "#333333",
      padding: "11px 18px",
      borderRadius: "10px",
      fontWeight: "700",
      cursor: "pointer",
      marginTop: "15px",
    },

    breadcrumb: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "18px",
      padding: "12px 15px",
      background: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
      fontSize: "14px",
      fontWeight: "600",
    },

    lesson: {
      background: "#ffffff",
      borderRadius: "18px",
      padding: "25px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      margin: "22px 0",
      lineHeight: "1.7",
    },

    quiz: {
      background: "#ffffff",
      borderRadius: "18px",
      padding: "25px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      margin: "22px 0",
    },

    option: {
      width: "100%",
      border: "2px solid #e5e5e5",
      background: "#ffffff",
      padding: "15px 16px",
      borderRadius: "12px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      textAlign: "left",
      fontSize: "15px",
      marginBottom: "12px",
    },

    optionLetter: {
      width: "34px",
      height: "34px",
      minWidth: "34px",
      borderRadius: "50%",
      background: "#f4f4f4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700",
    },

    result: {
      textAlign: "center",
      padding: "20px",
      borderRadius: "16px",
      background: "#fffdf2",
    },

    completed: {
      padding: "15px",
      textAlign: "center",
      background: "#e8fff0",
      border: "1px solid #8be0a9",
      borderRadius: "12px",
      fontWeight: "700",
      margin: "20px 0",
    },

    navigation: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginTop: "20px",
    },
  };

  // =========================================================
  // ROADMAP
  // =========================================================

  if (!selectedTopic) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h2 style={styles.title}>☕ Java Roadmap</h2>

          <div style={styles.progressCard}>
            <h3>Overall Progress: {overallProgress}% 🎯</h3>

            <div style={styles.progressBar}>
              <div
                style={{
                  width: `${overallProgress}%`,
                  height: "100%",
                  background: "#f4c430",
                  borderRadius: "20px",
                  transition: "0.4s",
                }}
              />
            </div>
          </div>

          <div style={styles.topicGrid}>
            {javaTopics.map((topic, index) => (
              <div style={styles.topicCard} key={topic.id}>
                <h3>
                  {index + 1}. {topic.title}
                </h3>

                <p>Progress: {getTopicProgress(topic)}%</p>

                <div style={styles.progressBar}>
                  <div
                    style={{
                      width: `${getTopicProgress(topic)}%`,
                      height: "100%",
                      background: "#f4c430",
                      borderRadius: "20px",
                    }}
                  />
                </div>

                <button
                  style={{
                    ...styles.primaryButton,
                    marginTop: "16px",
                  }}
                  onClick={() => {
                    setSelectedTopic(topic.id);
                    setSelectedSubtopic(null);
                    closeQuiz();
                  }}
                >
                  Open Topic →
                </button>
              </div>
            ))}
          </div>

          <button style={styles.backButton} onClick={goToLearning}>
            ← Back to Learning
          </button>
        </div>
      </div>
    );
  }

  // =========================================================
  // SUBTOPIC LIST
  // =========================================================

  if (!selectedSubtopic && currentTopic) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h2 style={styles.title}>{currentTopic.title}</h2>

          <div style={styles.progressCard}>
            <h3>Progress: {getTopicProgress(currentTopic)}%</h3>

            <div style={styles.progressBar}>
              <div
                style={{
                  width: `${getTopicProgress(currentTopic)}%`,
                  height: "100%",
                  background: "#f4c430",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          <h3>📚 Topics to Learn</h3>

          <div style={styles.subtopicList}>
            {currentTopic.subtopics.map((subtopic, index) => (
              <div style={styles.subtopicCard} key={subtopic.id}>
                <span style={styles.number}>{index + 1}</span>

                <div style={styles.info}>
                  <h3 style={{ margin: "0 0 6px" }}>
                    {subjectCompletedTopics.includes(subtopic.id) ? "✅ " : ""}
                    {subtopic.title}
                  </h3>

                  <p style={{ margin: 0 }}>
                    Learn this concept and then take the quiz.
                  </p>
                </div>

                <button
                  style={styles.primaryButton}
                  onClick={() => {
                    setSelectedSubtopic(subtopic.id);
                    closeQuiz();
                  }}
                >
                  Learn →
                </button>
              </div>
            ))}
          </div>

          <button style={styles.backButton} onClick={backToRoadmap}>
            ← Back to Java Roadmap
          </button>
        </div>
      </div>
    );
  }

  if (!currentTopic || !currentSubtopic) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h2>Something went wrong.</h2>

          <button style={styles.backButton} onClick={backToRoadmap}>
            ← Back to Java Roadmap
          </button>
        </div>
      </div>
    );
  }

  // =========================================================
  // SUBTOPIC CONTENT + QUIZ
  // =========================================================

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.breadcrumb}>
          <span>{currentTopic.title}</span>
          <span>›</span>
          <span>{currentSubtopic.title}</span>
        </div>

        <h2 style={styles.title}>{currentTopic.title}</h2>

        <h3>{currentSubtopic.title}</h3>

        <section style={styles.lesson}>
          <h2>📖 Learn the Topic</h2>
          {currentSubtopic.content}
        </section>

        <section style={styles.quiz}>
          <h2>📝 {currentSubtopic.title} Quiz</h2>

          {!quizStarted && !quizFinished && (
            <div>
              <p>
                Read the topic carefully and then test your understanding with
                the quiz.
              </p>

              <button style={styles.primaryButton} onClick={startQuiz}>
                Start Quiz 🚀
              </button>
            </div>
          )}

          {quizStarted && (
            <div>
              <p style={{ fontWeight: "700", color: "#777" }}>
                Question {currentQuestion + 1} of {currentSubtopic.quiz.length}
              </p>

              <h3>
                {currentSubtopic.quiz[currentQuestion].question}
              </h3>

              <div style={{ marginTop: "20px" }}>
                {shuffledOptions.map((option, index) => {
                  const correctAnswer =
                    currentSubtopic.quiz[currentQuestion].answer;

                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === correctAnswer;

                  let optionStyle = { ...styles.option };

                  if (answerChecked && isCorrect) {
                    optionStyle = {
                      ...optionStyle,
                      border: "2px solid #28a745",
                      background: "#e9f9ee",
                    };
                  }

                  if (answerChecked && isSelected && !isCorrect) {
                    optionStyle = {
                      ...optionStyle,
                      border: "2px solid #dc3545",
                      background: "#fdeaea",
                    };
                  }

                  if (answerChecked && !isSelected && !isCorrect) {
                    optionStyle = {
                      ...optionStyle,
                      opacity: 0.65,
                    };
                  }

                  return (
                    <button
                      key={`${option}-${index}`}
                      style={optionStyle}
                      onClick={() => answerQuestion(option)}
                      disabled={answerChecked}
                    >
                      <span style={styles.optionLetter}>
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span style={{ flex: 1 }}>{option}</span>

                      {answerChecked && isCorrect && (
                        <strong style={{ color: "#28a745" }}>✓</strong>
                      )}

                      {answerChecked && isSelected && !isCorrect && (
                        <strong style={{ color: "#dc3545" }}>✕</strong>
                      )}
                    </button>
                  );
                })}
              </div>

              {answerChecked && (
                <button style={styles.primaryButton} onClick={nextQuestion}>
                  {currentQuestion < currentSubtopic.quiz.length - 1
                    ? "Next Question →"
                    : "Finish Quiz 🎉"}
                </button>
              )}

              <br />

              <button style={styles.secondaryBack} onClick={closeQuiz}>
                ← Exit Quiz
              </button>
            </div>
          )}

          {quizFinished && (
            <div style={styles.result}>
              <h3>🎉 Quiz Completed!</h3>

              <p style={{ fontSize: "20px" }}>
                Your Score: {" "}
                <strong>
                  {score} / {currentSubtopic.quiz.length}
                </strong>
              </p>

              {score >= Math.ceil(currentSubtopic.quiz.length * 0.6) ? (
                <>
                  <p>🎉 Great job! You passed this topic quiz.</p>

                  <button
                    style={{
                      ...styles.primaryButton,
                      background: "#28a745",
                      color: "#ffffff",
                    }}
                    onClick={markCompleted}
                  >
                    ✅ Mark Topic as Completed
                  </button>
                </>
              ) : (
                <>
                  <p>📚 Keep practicing and try again!</p>

                  <button
                    style={styles.primaryButton}
                    onClick={retryQuiz}
                  >
                    🔄 Retry Quiz
                  </button>
                </>
              )}

              <br />

              <button style={styles.secondaryBack} onClick={closeQuiz}>
                ← Back to Topic Content
              </button>
            </div>
          )}
        </section>

        {subjectCompletedTopics.includes(selectedSubtopic) && (
          <div style={styles.completed}>
            ✅ This topic is completed!
          </div>
        )}

        <div style={styles.navigation}>
          <button
            style={{
              ...styles.backButton,
              marginTop: 0,
            }}
            onClick={backToTopic}
          >
            ← Back to {currentTopic.title}
          </button>

          <button
            style={{
              ...styles.backButton,
              marginTop: 0,
              background: "#6c5ce7",
            }}
            onClick={backToRoadmap}
          >
            🏠 Java Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}

export default Java;
