import { useEffect, useState } from "react";
import { saveQuizResult } from "../utils/saveQuizResult";

function JavaScript({ goToLearning }) {
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

  const jsTopics = [
    {
      id: "js-basics",
      title: "📘 JavaScript Basics",
      subtopics: [
        {
          id: "js-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is JavaScript?</h3>
              <p>
                JavaScript is a programming language mainly used to make
                websites interactive and dynamic.
              </p>
              <p>
                JavaScript can be used for frontend development, backend
                development, mobile applications and more.
              </p>
              <h3>Example</h3>
              <pre>{"console.log(\"Hello JavaScript\");"}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is JavaScript?",
              options: [
                "A programming language",
                "A database",
                "An operating system",
                "A browser",
              ],
              answer: "A programming language",
            },
            {
              question: "JavaScript is commonly used to make websites?",
              options: [
                "Interactive",
                "Offline only",
                "Smaller physically",
                "Hardware devices only",
              ],
              answer: "Interactive",
            },
            {
              question: "Which command prints output in JavaScript?",
              options: [
                "console.log()",
                "printText()",
                "display()",
                "writeCode()",
              ],
              answer: "console.log()",
            },
            {
              question: "JavaScript can be used for?",
              options: [
                "Frontend and backend",
                "Only databases",
                "Only CSS",
                "Only hardware",
              ],
              answer: "Frontend and backend",
            },
            {
              question: "JavaScript files usually use which extension?",
              options: [".js", ".java", ".jsxonly", ".css"],
              answer: ".js",
            },
          ],
        },

        {
          id: "js-variables",
          title: "Variables",
          content: (
            <>
              <h3>Variables</h3>
              <p>Variables are used to store data values.</p>
              <h3>Example</h3>
              <pre>{`let age = 20;`}</pre>
              <p>
                Here, <strong>age</strong> is a variable storing 20.
              </p>
            </>
          ),
          quiz: [
            {
              question: "What are variables used for?",
              options: [
                "Storing values",
                "Creating CSS",
                "Opening browsers",
                "Creating hardware",
              ],
              answer: "Storing values",
            },
            {
              question: "Which keyword can declare a variable?",
              options: ["let", "print", "loop", "value"],
              answer: "let",
            },
            {
              question: "What is stored in age in `let age = 20`?",
              options: ["20", "age", "let", "Nothing"],
              answer: "20",
            },
            {
              question: "Can a variable store a string?",
              options: ["Yes", "No", "Only in Java", "Only in CSS"],
              answer: "Yes",
            },
            {
              question: "Which is a valid variable declaration?",
              options: [
                "let name = 'Sai';",
                "variable name;",
                "create name;",
                "value name = Sai;",
              ],
              answer: "let name = 'Sai';",
            },
          ],
        },

        {
          id: "js-let-const-var",
          title: "let, const and var",
          content: (
            <>
              <h3>let, const and var</h3>
              <p>
                JavaScript provides three commonly known variable declaration
                keywords.
              </p>
              <ul>
                <li>let → value can be reassigned</li>
                <li>const → binding cannot be reassigned</li>
                <li>var → older way of declaring variables</li>
              </ul>

              <h3>Examples</h3>

              <pre>{`let age = 20;

const pi = 3.14;

var name = "Sai";`}</pre>
            </>
          ),
          quiz: [
            {
              question:
                "Which keyword is commonly used for a reassignable variable?",
              options: ["let", "const", "static", "fixed"],
              answer: "let",
            },
            {
              question: "Which keyword is used for a constant binding?",
              options: ["const", "let", "var", "change"],
              answer: "const",
            },
            {
              question: "Which is the older variable declaration keyword?",
              options: ["var", "let", "const", "old"],
              answer: "var",
            },
            {
              question: "Can a let variable be reassigned?",
              options: ["Yes", "No", "Only once", "Never"],
              answer: "Yes",
            },
            {
              question: "Which is valid?",
              options: [
                "const pi = 3.14;",
                "constant pi = 3.14;",
                "fixed pi = 3.14;",
                "const = pi 3.14;",
              ],
              answer: "const pi = 3.14;",
            },
          ],
        },

        {
          id: "js-data-types",
          title: "Data Types",
          content: (
            <>
              <h3>JavaScript Data Types</h3>
              <p>
                Data types describe the kind of value stored in a variable.
              </p>

              <ul>
                <li>Number</li>
                <li>String</li>
                <li>Boolean</li>
                <li>Undefined</li>
                <li>Null</li>
                <li>Object</li>
                <li>BigInt</li>
                <li>Symbol</li>
              </ul>
            </>
          ),
          quiz: [
            {
              question: "Which data type stores text?",
              options: ["String", "Number", "Boolean", "Null"],
              answer: "String",
            },
            {
              question: "Which data type stores true or false?",
              options: ["Boolean", "String", "Number", "Object"],
              answer: "Boolean",
            },
            {
              question: "What type is 25?",
              options: ["Number", "String", "Boolean", "Object"],
              answer: "Number",
            },
            {
              question: "Which represents no intentional value?",
              options: ["null", "true", "25", "hello"],
              answer: "null",
            },
            {
              question: "Which is a JavaScript primitive type?",
              options: ["Boolean", "HTML", "CSS", "DOM"],
              answer: "Boolean",
            },
          ],
        },

        {
          id: "js-operators",
          title: "Operators",
          content: (
            <>
              <h3>Operators</h3>
              <p>Operators are used to perform operations on values.</p>

              <ul>
                <li>Arithmetic: + - * / %</li>
                <li>Comparison: &gt; &lt; == ===</li>
                <li>Logical: &amp;&amp; || !</li>
                <li>Assignment: = += -=</li>
              </ul>

              <h3>Example</h3>

              <pre>{`let a = 10;
let b = 5;

console.log(a + b);
console.log(a > b);`}</pre>
            </>
          ),
          quiz: [
            {
              question: "Which operator performs addition?",
              options: ["+", "-", "*", "/"],
              answer: "+",
            },
            {
              question: "Which operator means strict equality?",
              options: ["===", "=", "+=", "!="],
              answer: "===",
            },
            {
              question: "Which operator represents logical AND?",
              options: ["&&", "||", "!", "&"],
              answer: "&&",
            },
            {
              question: "What does % return?",
              options: ["Remainder", "Quotient", "Power", "Square root"],
              answer: "Remainder",
            },
            {
              question: "Which is an assignment operator?",
              options: ["=", "===", ">", "&&"],
              answer: "=",
            },
          ],
        },

        {
          id: "js-type-conversion",
          title: "Type Conversion",
          content: (
            <>
              <h3>Type Conversion</h3>

              <p>
                Type conversion means changing a value from one data type to
                another.
              </p>

              <h3>Examples</h3>

              <pre>{`Number("25");

String(100);

Boolean(1);`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is type conversion?",
              options: [
                "Changing one data type to another",
                "Deleting a variable",
                "Creating a loop",
                "Creating a function",
              ],
              answer: "Changing one data type to another",
            },
            {
              question: "Which converts a string to a number?",
              options: ["Number()", "String()", "Boolean()", "Array()"],
              answer: "Number()",
            },
            {
              question: "Which converts a value to a string?",
              options: ["String()", "Number()", "Integer()", "TextOnly()"],
              answer: "String()",
            },
            {
              question: "What does Boolean() produce?",
              options: ["Boolean value", "String", "Array", "Object only"],
              answer: "Boolean value",
            },
            {
              question: "What does Number('10') produce?",
              options: ["10", "'10'", "true", "undefined"],
              answer: "10",
            },
          ],
        },
      ],
    },

    {
      id: "js-control-flow",
      title: "🔀 Control Flow",
      subtopics: [
        {
          id: "js-if-else",
          title: "if / else",
          content: (
            <>
              <h3>if / else</h3>
              <p>
                if / else is used to execute different code based on a
                condition.
              </p>

              <pre>{`if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is if used for?",
              options: [
                "Checking a condition",
                "Creating arrays",
                "Sorting only",
                "Declaring classes",
              ],
              answer: "Checking a condition",
            },
            {
              question: "What does else execute?",
              options: [
                "When the if condition is false",
                "Always",
                "Only when true",
                "Never",
              ],
              answer: "When the if condition is false",
            },
            {
              question: "Which is a condition?",
              options: ["age >= 18", "age = 18", "age++", "age()"],
              answer: "age >= 18",
            },
            {
              question: "Can if / else be nested?",
              options: ["Yes", "No", "Only in Java", "Only in CSS"],
              answer: "Yes",
            },
            {
              question: "Which keyword provides the alternative branch?",
              options: ["else", "otherwise", "alternative", "then"],
              answer: "else",
            },
          ],
        },

        {
          id: "js-switch",
          title: "switch",
          content: (
            <>
              <h3>switch</h3>

              <p>
                switch is useful when comparing one value against multiple
                possible cases.
              </p>

              <pre>{`switch (day) {
  case 1:
    console.log("Monday");
    break;

  default:
    console.log("Other day");
}`}</pre>
            </>
          ),
          quiz: [
            {
              question: "switch is useful for?",
              options: [
                "Multiple possible cases",
                "Creating arrays",
                "Sorting",
                "Declaring variables only",
              ],
              answer: "Multiple possible cases",
            },
            {
              question: "Which keyword defines a switch option?",
              options: ["case", "option", "choice", "ifcase"],
              answer: "case",
            },
            {
              question: "Which keyword commonly stops a case?",
              options: ["break", "stop", "exit", "end"],
              answer: "break",
            },
            {
              question: "Which keyword handles unmatched cases?",
              options: ["default", "else", "otherwise", "none"],
              answer: "default",
            },
            {
              question: "What value does switch compare?",
              options: [
                "The switch expression",
                "Only strings",
                "Only numbers",
                "CSS values",
              ],
              answer: "The switch expression",
            },
          ],
        },

        {
          id: "js-for-loop",
          title: "for Loop",
          content: (
            <>
              <h3>for Loop</h3>

              <p>
                A for loop is used when we want to repeat code multiple times.
              </p>

              <pre>{`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is a for loop used for?",
              options: [
                "Repeating code",
                "Creating CSS",
                "Creating databases",
                "Declaring HTML",
              ],
              answer: "Repeating code",
            },
            {
              question: "Which part initializes the loop variable?",
              options: ["let i = 0", "i < 5", "i++", "console.log"],
              answer: "let i = 0",
            },
            {
              question: "What does i++ do?",
              options: [
                "Increases i by 1",
                "Decreases i",
                "Deletes i",
                "Creates i",
              ],
              answer: "Increases i by 1",
            },
            {
              question: "Which symbol checks a condition?",
              options: ["<", "=", "++", "=>"],
              answer: "<",
            },
            {
              question: "How many times does for(let i=0;i<3;i++) run?",
              options: ["3", "2", "4", "1"],
              answer: "3",
            },
          ],
        },

        {
          id: "js-while-loop",
          title: "while Loop",
          content: (
            <>
              <h3>while Loop</h3>

              <p>
                A while loop repeatedly executes code while a condition remains
                true.
              </p>

              <pre>{`let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}`}</pre>
            </>
          ),
          quiz: [
            {
              question: "A while loop runs while what is true?",
              options: ["Condition", "Variable name", "Function", "Array"],
              answer: "Condition",
            },
            {
              question: "Which keyword creates a while loop?",
              options: ["while", "during", "repeat", "loop"],
              answer: "while",
            },
            {
              question: "What should usually change inside the loop?",
              options: ["Loop condition variables", "HTML", "CSS", "Browser"],
              answer: "Loop condition variables",
            },
            {
              question: "What happens if the condition never becomes false?",
              options: [
                "Infinite loop",
                "Automatic stop",
                "Compilation",
                "Nothing",
              ],
              answer: "Infinite loop",
            },
            {
              question: "Which is valid?",
              options: [
                "while (i < 5) {}",
                "while i < 5 {}",
                "loop (i < 5)",
                "repeat while i",
              ],
              answer: "while (i < 5) {}",
            },
          ],
        },

        {
          id: "js-break-continue",
          title: "break and continue",
          content: (
            <>
              <h3>break and continue</h3>

              <p>
                <strong>break</strong> stops the loop completely.
              </p>

              <p>
                <strong>continue</strong> skips the current iteration and moves
                to the next iteration.
              </p>

              <pre>{`for (let i = 0; i < 5; i++) {
  if (i === 2) continue;

  if (i === 4) break;

  console.log(i);
}`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What does break do?",
              options: [
                "Stops the loop",
                "Skips one iteration",
                "Starts loop",
                "Creates a loop",
              ],
              answer: "Stops the loop",
            },
            {
              question: "What does continue do?",
              options: [
                "Skips current iteration",
                "Stops the whole program",
                "Ends the loop",
                "Creates a variable",
              ],
              answer: "Skips current iteration",
            },
            {
              question: "Which keyword stops a loop?",
              options: ["break", "continue", "stoploop", "exitloop"],
              answer: "break",
            },
            {
              question: "Which keyword moves to the next iteration?",
              options: ["continue", "next", "skip", "move"],
              answer: "continue",
            },
            {
              question: "Can break be used inside loops?",
              options: ["Yes", "No", "Only CSS", "Only objects"],
              answer: "Yes",
            },
          ],
        },
      ],
    },

    {
      id: "js-functions",
      title: "⚙️ Functions",
      subtopics: [
        {
          id: "js-function-basics",
          title: "Function Basics",
          content: (
            <>
              <h3>Functions</h3>

              <p>
                A function is a reusable block of code designed to perform a
                particular task.
              </p>

              <pre>{`function greet() {
  console.log("Hello");
}

greet();`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is a function?",
              options: [
                "Reusable block of code",
                "A database",
                "A CSS rule",
                "An array only",
              ],
              answer: "Reusable block of code",
            },
            {
              question: "Which keyword declares a normal function?",
              options: ["function", "fun", "method", "def"],
              answer: "function",
            },
            {
              question: "Why are functions useful?",
              options: [
                "Code reuse",
                "Changing hardware",
                "Creating CSS only",
                "Increasing screen size",
              ],
              answer: "Code reuse",
            },
            {
              question: "How do you call greet?",
              options: ["greet()", "call greet", "run(greet)", "function greet"],
              answer: "greet()",
            },
            {
              question: "Can a function perform calculations?",
              options: ["Yes", "No", "Only in Java", "Only in CSS"],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-parameters",
          title: "Parameters and Arguments",
          content: (
            <>
              <h3>Parameters and Arguments</h3>

              <p>Parameters are variables defined in a function.</p>

              <p>
                Arguments are the actual values passed when calling the
                function.
              </p>

              <pre>{`function add(a, b) {
  return a + b;
}

add(5, 3);`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is a parameter?",
              options: [
                "Variable in function definition",
                "Returned value",
                "Loop",
                "Array",
              ],
              answer: "Variable in function definition",
            },
            {
              question: "What is an argument?",
              options: [
                "Actual value passed to function",
                "Function name",
                "Return keyword",
                "Variable declaration only",
              ],
              answer: "Actual value passed to function",
            },
            {
              question: "In add(a,b), a and b are?",
              options: ["Parameters", "Arguments", "Objects", "Arrays"],
              answer: "Parameters",
            },
            {
              question: "In add(5,3), 5 and 3 are?",
              options: ["Arguments", "Parameters", "Functions", "Keywords"],
              answer: "Arguments",
            },
            {
              question: "Can a function have multiple parameters?",
              options: ["Yes", "No", "Only two", "Only one"],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-return",
          title: "Return Values",
          content: (
            <>
              <h3>Return Values</h3>

              <p>The return statement sends a value back from a function.</p>

              <pre>{`function add(a, b) {
  return a + b;
}

let result = add(5, 3);`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What does return do?",
              options: [
                "Sends a value back",
                "Creates a loop",
                "Deletes a function",
                "Prints CSS",
              ],
              answer: "Sends a value back",
            },
            {
              question: "Which keyword returns a value?",
              options: ["return", "send", "give", "output"],
              answer: "return",
            },
            {
              question: "Can a function return a number?",
              options: ["Yes", "No", "Only strings", "Only arrays"],
              answer: "Yes",
            },
            {
              question: "What is returned by `return a + b`?",
              options: ["Sum of a and b", "a only", "b only", "Nothing"],
              answer: "Sum of a and b",
            },
            {
              question: "Can returned value be stored in a variable?",
              options: ["Yes", "No", "Only in Java", "Only in CSS"],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-arrow-functions",
          title: "Arrow Functions",
          content: (
            <>
              <h3>Arrow Functions</h3>

              <p>
                Arrow functions provide a shorter syntax for writing
                functions.
              </p>

              <pre>{`const add = (a, b) => a + b;`}</pre>
            </>
          ),
          quiz: [
            {
              question: "Arrow functions use which symbol?",
              options: ["=>", "->", "<-", "::"],
              answer: "=>",
            },
            {
              question: "Arrow functions provide?",
              options: [
                "Shorter function syntax",
                "Database connection",
                "HTML structure",
                "CSS styling",
              ],
              answer: "Shorter function syntax",
            },
            {
              question: "Which is an arrow function?",
              options: [
                "const add = (a,b) => a+b;",
                "function => add",
                "arrow add(a,b)",
                "const => function",
              ],
              answer: "const add = (a,b) => a+b;",
            },
            {
              question: "Can arrow functions have parameters?",
              options: ["Yes", "No", "Only one", "Never"],
              answer: "Yes",
            },
            {
              question: "Which keyword can store an arrow function?",
              options: ["const", "classOnly", "functionOnly", "loop"],
              answer: "const",
            },
          ],
        },

        {
          id: "js-scope",
          title: "Scope",
          content: (
            <>
              <h3>Scope</h3>

              <p>Scope determines where a variable can be accessed.</p>

              <p>
                Common scopes include global scope, function scope and block
                scope.
              </p>

              <p>
                <strong>let</strong> and <strong>const</strong> are block
                scoped.
              </p>
            </>
          ),
          quiz: [
            {
              question: "What does scope determine?",
              options: [
                "Where a variable can be accessed",
                "Variable color",
                "Screen size",
                "Loop speed",
              ],
              answer: "Where a variable can be accessed",
            },
            {
              question: "Which variables are block scoped?",
              options: ["let and const", "Only var", "Only function", "None"],
              answer: "let and const",
            },
            {
              question: "What is global scope?",
              options: [
                "Accessible from a broad program context",
                "Only inside loop",
                "Only inside function",
                "Only inside object",
              ],
              answer: "Accessible from a broad program context",
            },
            {
              question:
                "Can a block-scoped variable be accessed outside its block?",
              options: [
                "Not directly",
                "Always",
                "Only with CSS",
                "Yes in every case",
              ],
              answer: "Not directly",
            },
            {
              question: "Which keyword is function scoped?",
              options: ["var", "let", "const", "scope"],
              answer: "var",
            },
          ],
        },
      ],
    },

    {
      id: "js-arrays",
      title: "📚 Arrays",
      subtopics: [
        {
          id: "js-array-introduction",
          title: "Array Introduction",
          content: (
            <>
              <h3>Arrays</h3>
              <p>An array stores multiple values in a single variable.</p>
              <pre>{`const numbers = [10, 20, 30, 40];`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is an array used for?",
              options: [
                "Storing multiple values",
                "Only one value",
                "Creating CSS",
                "Creating functions only",
              ],
              answer: "Storing multiple values",
            },
            {
              question: "Which is an array?",
              options: ["[1,2,3]", "1,2,3", "array(1)", "{1,2,3}"],
              answer: "[1,2,3]",
            },
            {
              question: "Can an array store strings?",
              options: ["Yes", "No", "Only numbers", "Only objects"],
              answer: "Yes",
            },
            {
              question: "Which brackets create an array?",
              options: ["[]", "{}", "()", "<>"],
              answer: "[]",
            },
            {
              question: "Can arrays contain multiple data types in JavaScript?",
              options: ["Yes", "No", "Only numbers", "Only strings"],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-array-indexing",
          title: "Array Indexing",
          content: (
            <>
              <h3>Array Indexing</h3>

              <p>JavaScript array indexes start from 0.</p>

              <pre>{`const arr = [10, 20, 30];

arr[0] // 10
arr[1] // 20
arr[2] // 30`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is the first array index?",
              options: ["0", "1", "-1", "2"],
              answer: "0",
            },
            {
              question: "What is index 2 in [10,20,30]?",
              options: ["10", "20", "30", "undefined"],
              answer: "30",
            },
            {
              question: "What is index 0 in ['A','B']?",
              options: ["A", "B", "0", "undefined"],
              answer: "A",
            },
            {
              question: "What is the index of the third element?",
              options: ["2", "3", "1", "0"],
              answer: "2",
            },
            {
              question: "Can we access an array element using its index?",
              options: [
                "Yes",
                "No",
                "Only first element",
                "Only last element",
              ],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-array-methods",
          title: "Array Methods",
          content: (
            <>
              <h3>Array Methods</h3>

              <p>JavaScript provides many methods for working with arrays.</p>

              <ul>
                <li>push()</li>
                <li>pop()</li>
                <li>shift()</li>
                <li>unshift()</li>
                <li>slice()</li>
              </ul>

              <pre>{`arr.push(50);
arr.pop();
arr.shift();
arr.unshift(5);
arr.slice(1, 3);`}</pre>
            </>
          ),
          quiz: [
            {
              question: "Which method adds an element to the end?",
              options: ["push()", "pop()", "shift()", "slice()"],
              answer: "push()",
            },
            {
              question: "Which method removes the last element?",
              options: ["pop()", "push()", "shift()", "unshift()"],
              answer: "pop()",
            },
            {
              question: "Which method removes the first element?",
              options: ["shift()", "pop()", "push()", "slice()"],
              answer: "shift()",
            },
            {
              question: "Which method adds an element to the beginning?",
              options: ["unshift()", "push()", "pop()", "shift()"],
              answer: "unshift()",
            },
            {
              question: "Which method can extract a portion of an array?",
              options: ["slice()", "push()", "pop()", "unshift()"],
              answer: "slice()",
            },
          ],
        },

        {
          id: "js-array-traversing",
          title: "Array Traversing",
          content: (
            <>
              <h3>Array Traversing</h3>

              <p>Traversing means visiting array elements one by one.</p>

              <pre>{`for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`}</pre>

              <p>
                Traversing an array of n elements generally takes O(n) time.
              </p>
            </>
          ),
          quiz: [
            {
              question: "What does array traversal mean?",
              options: [
                "Visiting elements one by one",
                "Deleting the array",
                "Sorting automatically",
                "Creating an array",
              ],
              answer: "Visiting elements one by one",
            },
            {
              question: "Which is commonly used for traversal?",
              options: ["Loop", "CSS", "HTML", "Database"],
              answer: "Loop",
            },
            {
              question: "What does arr.length provide?",
              options: [
                "Number of elements",
                "Last value",
                "First value",
                "Index only",
              ],
              answer: "Number of elements",
            },
            {
              question: "How can we access arr[i]?",
              options: [
                "Using index i",
                "Using CSS",
                "Using database",
                "Using HTML",
              ],
              answer: "Using index i",
            },
            {
              question: "Traversing an array of n elements generally takes?",
              options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
              answer: "O(n)",
            },
          ],
        },

        {
          id: "js-array-problems",
          title: "Array Problems",
          content: (
            <>
              <h3>Common Array Problems</h3>

              <p>Arrays are commonly used for coding interview problems.</p>

              <ul>
                <li>Find maximum</li>
                <li>Find minimum</li>
                <li>Reverse an array</li>
                <li>Find duplicates</li>
                <li>Calculate sum</li>
              </ul>
            </>
          ),
          quiz: [
            {
              question: "Which is a common array problem?",
              options: [
                "Find maximum",
                "Create CSS",
                "Open browser",
                "Install OS",
              ],
              answer: "Find maximum",
            },
            {
              question: "How can we find the sum of array elements?",
              options: [
                "Traverse and add elements",
                "Only use CSS",
                "Delete array",
                "Use HTML",
              ],
              answer: "Traverse and add elements",
            },
            {
              question: "What does reversing an array do?",
              options: [
                "Changes element order",
                "Deletes all elements",
                "Adds elements",
                "Sorts automatically",
              ],
              answer: "Changes element order",
            },
            {
              question: "Finding duplicates means finding?",
              options: [
                "Repeated values",
                "Largest value only",
                "Smallest value only",
                "Array length only",
              ],
              answer: "Repeated values",
            },
            {
              question: "Which problem finds the largest value?",
              options: [
                "Maximum element",
                "Minimum element",
                "Traversal only",
                "Indexing",
              ],
              answer: "Maximum element",
            },
          ],
        },
      ],
    },

    {
      id: "js-strings",
      title: "🔤 Strings",
      subtopics: [
        {
          id: "js-string-basics",
          title: "String Basics",
          content: (
            <>
              <h3>Strings</h3>
              <p>
                A string is a sequence of characters used to represent text.
              </p>
              <pre>{`let name = "Sai";`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is a string?",
              options: [
                "Sequence of characters",
                "Only numbers",
                "A loop",
                "A function",
              ],
              answer: "Sequence of characters",
            },
            {
              question: "Which is a string?",
              options: ['"Hello"', "123", "true", "[1,2]"],
              answer: '"Hello"',
            },
            {
              question: "Which quotes can create strings?",
              options: [
                "Single or double quotes",
                "Only brackets",
                "Only parentheses",
                "Only braces",
              ],
              answer: "Single or double quotes",
            },
            {
              question: "Can JavaScript strings contain spaces?",
              options: ["Yes", "No", "Only one space", "Never"],
              answer: "Yes",
            },
            {
              question: "What does 'Sai' represent?",
              options: ["String", "Number", "Boolean", "Array"],
              answer: "String",
            },
          ],
        },

        {
          id: "js-string-indexing",
          title: "String Indexing",
          content: (
            <>
              <h3>String Indexing</h3>

              <p>Characters in a string can be accessed using indexes.</p>

              <pre>{`"HELLO"

0 → H
1 → E
2 → L
3 → L
4 → O`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is the first string index?",
              options: ["0", "1", "-1", "2"],
              answer: "0",
            },
            {
              question: "What is index 0 in HELLO?",
              options: ["H", "E", "L", "O"],
              answer: "H",
            },
            {
              question: "What is index 4 in HELLO?",
              options: ["H", "E", "L", "O"],
              answer: "O",
            },
            {
              question: "What is index 2 in HELLO?",
              options: ["H", "E", "L", "O"],
              answer: "L",
            },
            {
              question: "Can string characters be accessed using indexes?",
              options: ["Yes", "No", "Only first", "Only last"],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-string-methods",
          title: "String Methods",
          content: (
            <>
              <h3>String Methods</h3>

              <ul>
                <li>toUpperCase()</li>
                <li>toLowerCase()</li>
                <li>includes()</li>
                <li>slice()</li>
                <li>trim()</li>
              </ul>

              <pre>{`let text = " Hello ";

text.toUpperCase();
text.toLowerCase();
text.includes("Hello");
text.slice(1, 4);
text.trim();`}</pre>
            </>
          ),
          quiz: [
            {
              question: "Which converts text to uppercase?",
              options: [
                "toUpperCase()",
                "upper()",
                "makeUpper()",
                "uppercaseText()",
              ],
              answer: "toUpperCase()",
            },
            {
              question: "Which converts text to lowercase?",
              options: [
                "toLowerCase()",
                "lower()",
                "smallText()",
                "lowercaseText()",
              ],
              answer: "toLowerCase()",
            },
            {
              question: "Which method checks whether text contains a value?",
              options: ["includes()", "containsText()", "findText()", "has()"],
              answer: "includes()",
            },
            {
              question: "Which method extracts part of a string?",
              options: ["slice()", "cutText()", "extract()", "part()"],
              answer: "slice()",
            },
            {
              question: "Which method removes whitespace from both ends?",
              options: ["trim()", "removeSpace()", "clean()", "space()"],
              answer: "trim()",
            },
          ],
        },

        {
          id: "js-string-traversing",
          title: "String Traversing",
          content: (
            <>
              <h3>String Traversing</h3>

              <p>String traversal means visiting each character one by one.</p>

              <pre>{`let str = "CODE";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}`}</pre>
            </>
          ),
          quiz: [
            {
              question: "String traversal means?",
              options: [
                "Visiting each character",
                "Deleting the string",
                "Sorting the string",
                "Creating a string",
              ],
              answer: "Visiting each character",
            },
            {
              question: "Which can be used to traverse a string?",
              options: ["Loop", "CSS", "Database", "HTML only"],
              answer: "Loop",
            },
            {
              question: "What does str.length provide?",
              options: [
                "Number of characters",
                "First character",
                "Last character",
                "String index",
              ],
              answer: "Number of characters",
            },
            {
              question: "If str = 'ABC', what is str[1]?",
              options: ["A", "B", "C", "undefined"],
              answer: "B",
            },
            {
              question: "Traversing n characters generally takes?",
              options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
              answer: "O(n)",
            },
          ],
        },

        {
          id: "js-string-problems",
          title: "String Problems",
          content: (
            <>
              <h3>Common String Problems</h3>

              <ul>
                <li>Reverse a string</li>
                <li>Check palindrome</li>
                <li>Count characters</li>
                <li>Count vowels</li>
                <li>Find duplicate characters</li>
              </ul>
            </>
          ),
          quiz: [
            {
              question: "What is a palindrome?",
              options: [
                "Reads the same forward and backward",
                "Always has numbers",
                "Always has spaces",
                "A sorted string",
              ],
              answer: "Reads the same forward and backward",
            },
            {
              question: "Which is a palindrome?",
              options: ["madam", "hello", "world", "code"],
              answer: "madam",
            },
            {
              question: "Counting characters means finding?",
              options: [
                "Number of occurrences",
                "Only largest character",
                "Only smallest character",
                "String color",
              ],
              answer: "Number of occurrences",
            },
            {
              question: "Which is a vowel?",
              options: ["A", "B", "C", "D"],
              answer: "A",
            },
            {
              question: "Reversing a string changes?",
              options: [
                "Character order",
                "Character type",
                "String length",
                "Variable name",
              ],
              answer: "Character order",
            },
          ],
        },
      ],
    },

    {
      id: "js-objects",
      title: "🧩 Objects",
      subtopics: [
        {
          id: "js-object-basics",
          title: "Object Basics",
          content: (
            <>
              <h3>Objects</h3>

              <p>Objects store data in key-value pairs.</p>

              <pre>{`const student = {
  name: "Sai",
  age: 20
};`}</pre>
            </>
          ),
          quiz: [
            {
              question: "Objects store data using?",
              options: [
                "Key-value pairs",
                "Only indexes",
                "Only loops",
                "Only strings",
              ],
              answer: "Key-value pairs",
            },
            {
              question: "Which creates an object?",
              options: [
                "{ name: 'Sai' }",
                "[ name: 'Sai' ]",
                "( name )",
                "< name >",
              ],
              answer: "{ name: 'Sai' }",
            },
            {
              question: "In {name:'Sai'}, name is the?",
              options: ["Key", "Value", "Function", "Array"],
              answer: "Key",
            },
            {
              question: "In {name:'Sai'}, 'Sai' is the?",
              options: ["Value", "Key", "Object", "Method"],
              answer: "Value",
            },
            {
              question: "Can objects contain multiple properties?",
              options: ["Yes", "No", "Only two", "Only one"],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-object-properties",
          title: "Properties and Values",
          content: (
            <>
              <h3>Properties and Values</h3>

              <p>
                An object property consists of a key and its corresponding
                value.
              </p>

              <pre>{`student.name`}</pre>

              <p>
                Here, <strong>name</strong> is a property of student.
              </p>
            </>
          ),
          quiz: [
            {
              question: "What does an object property contain?",
              options: ["Key and value", "Only key", "Only loop", "Only function"],
              answer: "Key and value",
            },
            {
              question: "In student.name, name is?",
              options: ["Property", "Array", "Loop", "Class"],
              answer: "Property",
            },
            {
              question: "Can a property store a number?",
              options: ["Yes", "No", "Only strings", "Only boolean"],
              answer: "Yes",
            },
            {
              question: "Can a property store an array?",
              options: ["Yes", "No", "Only numbers", "Never"],
              answer: "Yes",
            },
            {
              question: "Object properties can be accessed using?",
              options: [
                "Dot or bracket notation",
                "Only loops",
                "Only CSS",
                "Only HTML",
              ],
              answer: "Dot or bracket notation",
            },
          ],
        },

        {
          id: "js-object-access",
          title: "Accessing Objects",
          content: (
            <>
              <h3>Accessing Objects</h3>

              <p>
                Object properties can be accessed using dot notation or
                bracket notation.
              </p>

              <pre>{`student.name;

student["name"];`}</pre>
            </>
          ),
          quiz: [
            {
              question: "Which accesses a property using dot notation?",
              options: [
                "student.name",
                "student-name",
                "student(name)",
                "student:name",
              ],
              answer: "student.name",
            },
            {
              question: "Which is bracket notation?",
              options: [
                'student["name"]',
                "student.name",
                "student-name",
                "student(name)",
              ],
              answer: 'student["name"]',
            },
            {
              question: "Do dot and bracket notation access properties?",
              options: ["Yes", "No", "Only arrays", "Only functions"],
              answer: "Yes",
            },
            {
              question: "What happens if a missing property is accessed?",
              options: [
                "Usually undefined",
                "Always 0",
                "Always false",
                "Automatic creation",
              ],
              answer: "Usually undefined",
            },
            {
              question: "Which can use a variable as a property name?",
              options: ["Bracket notation", "Dot notation only", "Neither", "CSS"],
              answer: "Bracket notation",
            },
          ],
        },

        {
          id: "js-object-methods",
          title: "Object Methods",
          content: (
            <>
              <h3>Object Methods</h3>

              <p>
                A function stored as an object property is called a method.
              </p>

              <pre>{`const student = {
  greet: function() {
    console.log("Hello");
  }
};

student.greet();`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is an object method?",
              options: [
                "Function stored in an object",
                "An array",
                "A variable only",
                "A CSS rule",
              ],
              answer: "Function stored in an object",
            },
            {
              question: "Can object methods perform actions?",
              options: ["Yes", "No", "Only CSS", "Only HTML"],
              answer: "Yes",
            },
            {
              question: "How can a method be called?",
              options: [
                "object.method()",
                "object-method",
                "call object",
                "method object",
              ],
              answer: "object.method()",
            },
            {
              question: "Can methods access object properties?",
              options: ["Yes", "No", "Never", "Only arrays"],
              answer: "Yes",
            },
            {
              question: "A method is fundamentally a?",
              options: ["Function", "Number", "String", "Loop"],
              answer: "Function",
            },
          ],
        },

        {
          id: "js-nested-objects",
          title: "Nested Objects",
          content: (
            <>
              <h3>Nested Objects</h3>

              <p>An object can contain another object as a property.</p>

              <pre>{`const student = {
  name: "Sai",
  address: {
    city: "Hyderabad"
  }
};

student.address.city;`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is a nested object?",
              options: [
                "Object inside another object",
                "Array only",
                "Function only",
                "String only",
              ],
              answer: "Object inside another object",
            },
            {
              question: "Which accesses a nested property?",
              options: [
                "student.address.city",
                "student-city",
                "address.student",
                "nested(student)",
              ],
              answer: "student.address.city",
            },
            {
              question: "Can objects contain objects?",
              options: ["Yes", "No", "Only one", "Never"],
              answer: "Yes",
            },
            {
              question: "What does student.address represent?",
              options: [
                "Nested object",
                "Loop",
                "Array index",
                "Function only",
              ],
              answer: "Nested object",
            },
            {
              question: "Nested objects are useful for?",
              options: [
                "Organizing related data",
                "Changing CSS only",
                "Creating loops only",
                "Deleting data",
              ],
              answer: "Organizing related data",
            },
          ],
        },
      ],
    },

    {
      id: "js-advanced",
      title: "🚀 Advanced JavaScript",
      subtopics: [
        {
          id: "js-dom",
          title: "DOM Basics",
          content: (
            <>
              <h3>DOM</h3>

              <p>DOM stands for Document Object Model.</p>

              <p>
                It represents an HTML document as objects that JavaScript can
                interact with.
              </p>

              <pre>{`document.getElementById("title");`}</pre>
            </>
          ),
          quiz: [
            {
              question: "DOM stands for?",
              options: [
                "Document Object Model",
                "Data Object Method",
                "Document Order Model",
                "Dynamic Object Machine",
              ],
              answer: "Document Object Model",
            },
            {
              question: "DOM represents?",
              options: [
                "HTML document as objects",
                "Only CSS",
                "Only Java",
                "Database tables",
              ],
              answer: "HTML document as objects",
            },
            {
              question: "Which object is used to access the document?",
              options: ["document", "html", "page", "windowOnly"],
              answer: "document",
            },
            {
              question: "Which method selects an element by ID?",
              options: [
                "getElementById()",
                "getByIdOnly()",
                "selectId()",
                "findId()",
              ],
              answer: "getElementById()",
            },
            {
              question: "JavaScript can modify HTML through the DOM?",
              options: ["Yes", "No", "Only CSS", "Only backend"],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-events",
          title: "Events",
          content: (
            <>
              <h3>JavaScript Events</h3>

              <p>Events are actions that happen in a webpage.</p>

              <ul>
                <li>click</li>
                <li>input</li>
                <li>submit</li>
                <li>mouseover</li>
              </ul>

              <pre>{`button.addEventListener("click", () => {
  console.log("Clicked");
});`}</pre>
            </>
          ),
          quiz: [
            {
              question: "What is an event?",
              options: [
                "Action occurring on a webpage",
                "Only a variable",
                "A database",
                "A CSS class",
              ],
              answer: "Action occurring on a webpage",
            },
            {
              question: "Which is a JavaScript event?",
              options: ["click", "database", "compile", "style"],
              answer: "click",
            },
            {
              question: "Which event occurs when a form is submitted?",
              options: ["submit", "clickonly", "send", "formAction"],
              answer: "submit",
            },
            {
              question: "Which event is related to typing/input?",
              options: ["input", "style", "database", "compile"],
              answer: "input",
            },
            {
              question: "Can JavaScript respond to events?",
              options: ["Yes", "No", "Only CSS", "Only HTML"],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-es6",
          title: "ES6 Features",
          content: (
            <>
              <h3>ES6</h3>

              <p>ES6 introduced many useful JavaScript features.</p>

              <ul>
                <li>let and const</li>
                <li>Arrow functions</li>
                <li>Template literals</li>
                <li>Destructuring</li>
                <li>Spread syntax</li>
              </ul>

              <pre>{`const name = "Sai";

const message = \`Hello ${"${name}"}\`;`}</pre>
            </>
          ),
          quiz: [
            {
              question: "ES6 introduced?",
              options: [
                "Many modern JavaScript features",
                "Only CSS",
                "Only HTML",
                "Only databases",
              ],
              answer: "Many modern JavaScript features",
            },
            {
              question: "Which is an ES6 feature?",
              options: ["Arrow functions", "HTML tags", "CSS grid", "SQL"],
              answer: "Arrow functions",
            },
            {
              question: "Which keywords were introduced with ES6?",
              options: ["let and const", "var only", "function only", "className"],
              answer: "let and const",
            },
            {
              question: "Template literals use?",
              options: [
                "Backticks",
                "Only single quotes",
                "Only brackets",
                "Braces only",
              ],
              answer: "Backticks",
            },
            {
              question: "Destructuring is used to?",
              options: [
                "Extract values from arrays/objects",
                "Create CSS",
                "Delete functions",
                "Start servers",
              ],
              answer: "Extract values from arrays/objects",
            },
          ],
        },

        {
          id: "js-destructuring-spread",
          title: "Destructuring and Spread",
          content: (
            <>
              <h3>Destructuring</h3>

              <p>
                Destructuring allows values to be extracted from arrays and
                objects easily.
              </p>

              <pre>{`const [a, b] = [10, 20];

const student = {
  name: "Sai",
  age: 20
};

const { name, age } = student;`}</pre>

              <h3>Spread</h3>

              <p>Spread syntax uses three dots (...).</p>

              <pre>{`const newArr = [...arr];`}</pre>
            </>
          ),
          quiz: [
            {
              question: "Destructuring is used to?",
              options: [
                "Extract values",
                "Create CSS",
                "Delete arrays",
                "Create databases",
              ],
              answer: "Extract values",
            },
            {
              question: "Which syntax represents spread?",
              options: ["...", "..", "=>", "::"],
              answer: "...",
            },
            {
              question: "Can destructuring work with arrays?",
              options: ["Yes", "No", "Only objects", "Only strings"],
              answer: "Yes",
            },
            {
              question: "Can destructuring work with objects?",
              options: ["Yes", "No", "Only arrays", "Never"],
              answer: "Yes",
            },
            {
              question: "Spread can be used to create a copy of an array?",
              options: ["Yes", "No", "Only strings", "Only objects"],
              answer: "Yes",
            },
          ],
        },

        {
          id: "js-promises-async",
          title: "Promises and async/await",
          content: (
            <>
              <h3>Promises</h3>

              <p>
                A Promise represents the eventual completion or failure of an
                asynchronous operation.
              </p>

              <h3>async / await</h3>

              <p>
                async and await provide a cleaner way to work with Promises.
              </p>

              <pre>{`async function getData() {
  const result = await fetch(url);
  console.log(result);
}`}</pre>
            </>
          ),
          quiz: [
            {
              question: "A Promise represents?",
              options: [
                "Future result of an asynchronous operation",
                "Only a variable",
                "A CSS rule",
                "An array index",
              ],
              answer: "Future result of an asynchronous operation",
            },
            {
              question: "Which keyword pauses until a Promise settles?",
              options: ["await", "waitFor", "pause", "hold"],
              answer: "await",
            },
            {
              question: "Which keyword is used to declare an async function?",
              options: ["async", "await", "promise", "future"],
              answer: "async",
            },
            {
              question: "async/await is used with?",
              options: ["Promises", "CSS only", "HTML only", "Arrays only"],
              answer: "Promises",
            },
            {
              question: "Promises are useful for?",
              options: [
                "Asynchronous operations",
                "Only styling",
                "Only loops",
                "Only variables",
              ],
              answer: "Asynchronous operations",
            },
          ],
        },
      ],
    },
  ];

  const currentTopic = jsTopics.find(
    (topic) => topic.id === selectedTopic
  );

  const currentSubtopic = currentTopic?.subtopics.find(
    (subtopic) => subtopic.id === selectedSubtopic
  );

  const currentSubjectSubtopicIds = new Set(
    jsTopics.flatMap((topic) =>
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

  const totalSubtopics = jsTopics.reduce(
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
        subject: "JavaScript",
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

  if (!selectedTopic) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h2 style={styles.title}>💛 JavaScript Roadmap</h2>

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
            {jsTopics.map((topic, index) => (
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
            ← Back to JavaScript Roadmap
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
            ← Back to JavaScript Roadmap
          </button>
        </div>
      </div>
    );
  }

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
                Question {currentQuestion + 1} of{" "}
                {currentSubtopic.quiz.length}
              </p>

              <h3>
                {currentSubtopic.quiz[currentQuestion].question}
              </h3>

              <div style={{ marginTop: "20px" }}>
                {shuffledOptions.map((option, index) => {
                  const correctAnswer =
                    currentSubtopic.quiz[currentQuestion].answer;

                  const isSelected =
                    selectedAnswer === option;

                  const isCorrect =
                    option === correctAnswer;

                  let optionStyle = { ...styles.option };

                  if (answerChecked && isCorrect) {
                    optionStyle = {
                      ...optionStyle,
                      border: "2px solid #28a745",
                      background: "#e9f9ee",
                    };
                  }

                  if (
                    answerChecked &&
                    isSelected &&
                    !isCorrect
                  ) {
                    optionStyle = {
                      ...optionStyle,
                      border: "2px solid #dc3545",
                      background: "#fdeaea",
                    };
                  }

                  if (
                    answerChecked &&
                    !isSelected &&
                    !isCorrect
                  ) {
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

                      <span style={{ flex: 1 }}>
                        {option}
                      </span>

                      {answerChecked && isCorrect && (
                        <strong style={{ color: "#28a745" }}>
                          ✓
                        </strong>
                      )}

                      {answerChecked &&
                        isSelected &&
                        !isCorrect && (
                          <strong style={{ color: "#dc3545" }}>
                            ✕
                          </strong>
                        )}
                    </button>
                  );
                })}
              </div>

              {answerChecked && (
                <button
                  style={styles.primaryButton}
                  onClick={nextQuestion}
                >
                  {currentQuestion <
                  currentSubtopic.quiz.length - 1
                    ? "Next Question →"
                    : "Finish Quiz 🎉"}
                </button>
              )}

              <br />

              <button
                style={styles.secondaryBack}
                onClick={closeQuiz}
              >
                ← Exit Quiz
              </button>
            </div>
          )}

          {quizFinished && (
            <div style={styles.result}>
              <h3>🎉 Quiz Completed!</h3>

              <p style={{ fontSize: "20px" }}>
                Your Score:{" "}
                <strong>
                  {score} / {currentSubtopic.quiz.length}
                </strong>
              </p>

              {score >= Math.ceil(currentSubtopic.quiz.length * 0.6) ? (
                <>
                  <p>
                    🎉 Great job! You passed this topic quiz.
                  </p>

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
                  <p>
                    📚 Keep practicing and try again!
                  </p>

                  <button
                    style={styles.primaryButton}
                    onClick={retryQuiz}
                  >
                    🔄 Retry Quiz
                  </button>
                </>
              )}

              <br />

              <button
                style={styles.secondaryBack}
                onClick={closeQuiz}
              >
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
            🏠 JavaScript Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}

export default JavaScript;