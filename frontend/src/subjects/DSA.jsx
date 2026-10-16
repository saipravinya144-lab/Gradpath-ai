import React, { useEffect, useState } from "react";
import { saveQuizResult } from "../utils/saveQuizResult";
const DSA = () => {
  // =========================================================
  // STATE
  // =========================================================

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

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

            console.error("Error loading learning progress:", error);

        }
    };

    fetchProgress();

}, []);

  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerChecked, setAnswerChecked] = useState(false);

  const [shuffledOptions, setShuffledOptions] = useState([]);

  // =========================================================
  // DSA DATA
  // =========================================================

  const dsaTopics = [
    // =======================================================
    // SEARCHING
    // =======================================================

    {
      id: "searching",
      title: "🔎 Searching",
      subtopics: [
        {
          id: "search-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is Searching?</h3>
              <p>
                Searching means finding a particular element in a
                data structure.
              </p>

              <p>Important algorithms:</p>

              <ul>
                <li>Linear Search</li>
                <li>Binary Search</li>
              </ul>
            </>
          ),
          quiz: [
            {
              question: "What is searching?",
              options: [
                "Finding an element",
                "Sorting",
                "Deleting",
                "Compiling",
              ],
              answer: "Finding an element",
            },
            {
              question: "Which is a searching algorithm?",
              options: [
                "Binary Search",
                "Bubble Sort",
                "Merge Sort",
                "Insertion Sort",
              ],
              answer: "Binary Search",
            },
            {
              question:
                "Which searching algorithm checks elements sequentially?",
              options: [
                "Linear Search",
                "Binary Search",
                "Merge Sort",
                "Quick Sort",
              ],
              answer: "Linear Search",
            },
            {
              question: "Binary Search requires data to be?",
              options: [
                "Sorted",
                "Random",
                "Empty",
                "Uninitialized",
              ],
              answer: "Sorted",
            },
            {
              question: "Searching is used to locate?",
              options: [
                "A target",
                "Only loops",
                "Only indexes",
                "Only functions",
              ],
              answer: "A target",
            },
          ],
        },

        {
          id: "linear-search",
          title: "Linear Search",
          content: (
            <>
              <h3>Linear Search</h3>

              <p>
                Checks elements one by one until the target is
                found.
              </p>

              <p>[10, 20, 30, 40]</p>
              <p>Search 30 → 10 → 20 → 30 ✅</p>

              <p>
                Time Complexity: <strong>O(n)</strong>
              </p>
            </>
          ),
          quiz: [
            {
              question: "Linear Search checks elements?",
              options: [
                "One by one",
                "Only middle",
                "Randomly",
                "Only last",
              ],
              answer: "One by one",
            },
            {
              question: "Linear Search complexity?",
              options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
              answer: "O(n)",
            },
            {
              question:
                "Does Linear Search require a sorted array?",
              options: [
                "No",
                "Yes, always",
                "Only for strings",
                "Only for numbers",
              ],
              answer: "No",
            },
            {
              question: "Linear Search can stop when?",
              options: [
                "Target is found",
                "Array is created",
                "Sorting starts",
                "Program compiles",
              ],
              answer: "Target is found",
            },
            {
              question: "Worst case of Linear Search checks?",
              options: [
                "All elements",
                "Only first element",
                "Only middle",
                "No elements",
              ],
              answer: "All elements",
            },
          ],
        },

        {
          id: "binary-search",
          title: "Binary Search",
          content: (
            <>
              <h3>Binary Search</h3>

              <p>
                Binary Search repeatedly divides the search space
                into two halves.
              </p>

              <p>The array must be sorted.</p>

              <p>
                Time Complexity: <strong>O(log n)</strong>
              </p>
            </>
          ),
          quiz: [
            {
              question: "Binary Search requires a?",
              options: [
                "Sorted array",
                "Random array",
                "Empty array",
                "Reversed string",
              ],
              answer: "Sorted array",
            },
            {
              question: "Binary Search complexity?",
              options: ["O(log n)", "O(n²)", "O(n)", "O(1)"],
              answer: "O(log n)",
            },
            {
              question:
                "Binary Search compares the target with?",
              options: [
                "Middle element",
                "Only first element",
                "Only last element",
                "Random element",
              ],
              answer: "Middle element",
            },
            {
              question:
                "Binary Search divides the search space into?",
              options: [
                "Two halves",
                "Three parts",
                "Ten parts",
                "No parts",
              ],
              answer: "Two halves",
            },
            {
              question:
                "Binary Search is generally faster than Linear Search for large sorted data because of?",
              options: [
                "O(log n)",
                "O(n²)",
                "O(n³)",
                "O(2ⁿ)",
              ],
              answer: "O(log n)",
            },
          ],
        },
      ],
    },

    // =======================================================
    // SORTING
    // =======================================================

    {
      id: "sorting",
      title: "🔄 Sorting",
      subtopics: [
        {
          id: "sorting-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is Sorting?</h3>

              <p>
                Sorting means arranging elements in a particular
                order.
              </p>

              <p>Before: [5, 2, 8, 1]</p>
              <p>After: [1, 2, 5, 8]</p>
            </>
          ),
          quiz: [
            {
              question: "What is sorting?",
              options: [
                "Arranging elements",
                "Finding element",
                "Deleting",
                "Creating database",
              ],
              answer: "Arranging elements",
            },
            {
              question: "Ascending order example?",
              options: [
                "[1,2,3]",
                "[3,2,1]",
                "[2,1,3]",
                "[3,1,2]",
              ],
              answer: "[1,2,3]",
            },
            {
              question: "Descending order example?",
              options: [
                "[3,2,1]",
                "[1,2,3]",
                "[2,3,1]",
                "[1,3,2]",
              ],
              answer: "[3,2,1]",
            },
            {
              question: "Sorting is useful for?",
              options: [
                "Organizing data",
                "Changing screen color",
                "Creating RAM",
                "Installing software",
              ],
              answer: "Organizing data",
            },
            {
              question: "Which is a sorting algorithm?",
              options: [
                "Merge Sort",
                "Binary Search",
                "BFS",
                "DFS",
              ],
              answer: "Merge Sort",
            },
          ],
        },

        {
          id: "selection-sort",
          title: "Selection Sort",
          content: (
            <>
              <h3>Selection Sort</h3>

              <p>
                Repeatedly selects the minimum element and places
                it in the correct position.
              </p>

              <p>
                Time Complexity: <strong>O(n²)</strong>
              </p>
            </>
          ),
          quiz: [
            {
              question:
                "Selection Sort repeatedly selects?",
              options: [
                "Minimum element",
                "Pivot only",
                "Middle element",
                "Random element",
              ],
              answer: "Minimum element",
            },
            {
              question: "Selection Sort complexity?",
              options: [
                "O(n²)",
                "O(1)",
                "O(log n)",
                "O(n log n)",
              ],
              answer: "O(n²)",
            },
            {
              question:
                "Where is the selected minimum placed?",
              options: [
                "Correct position",
                "Random position",
                "Always at the end",
                "Outside the array",
              ],
              answer: "Correct position",
            },
            {
              question:
                "Selection Sort uses repeated?",
              options: [
                "Selection and swapping",
                "Recursion only",
                "Hashing only",
                "Graph traversal",
              ],
              answer: "Selection and swapping",
            },
            {
              question: "Selection Sort belongs to?",
              options: [
                "Sorting algorithms",
                "Searching algorithms",
                "Graph algorithms",
                "Tree traversal",
              ],
              answer: "Sorting algorithms",
            },
          ],
        },

        {
          id: "bubble-sort",
          title: "Bubble Sort",
          content: (
            <>
              <h3>Bubble Sort</h3>

              <p>
                Repeatedly compares adjacent elements and swaps
                them if they are in the wrong order.
              </p>

              <p>
                Worst-case Time Complexity:
                <strong> O(n²)</strong>
              </p>
            </>
          ),
          quiz: [
            {
              question: "Bubble Sort compares?",
              options: [
                "Adjacent elements",
                "Only first and last",
                "Random elements",
                "Only middle",
              ],
              answer: "Adjacent elements",
            },
            {
              question: "Bubble Sort worst case?",
              options: [
                "O(n²)",
                "O(1)",
                "O(log n)",
                "O(n log n)",
              ],
              answer: "O(n²)",
            },
            {
              question:
                "Bubble Sort swaps when elements are?",
              options: [
                "In the wrong order",
                "Always equal",
                "Always different",
                "Never compared",
              ],
              answer: "In the wrong order",
            },
            {
              question:
                "Bubble Sort moves larger elements toward?",
              options: [
                "The end",
                "The beginning always",
                "Outside the array",
                "The middle only",
              ],
              answer: "The end",
            },
            {
              question: "Bubble Sort is based mainly on?",
              options: [
                "Adjacent comparisons",
                "Pivot selection",
                "Binary search",
                "Hashing",
              ],
              answer: "Adjacent comparisons",
            },
          ],
        },

        {
          id: "insertion-sort",
          title: "Insertion Sort",
          content: (
            <>
              <h3>Insertion Sort</h3>

              <p>
                Builds the sorted portion of the array one element
                at a time.
              </p>

              <p>
                Worst-case Time Complexity:
                <strong> O(n²)</strong>
              </p>
            </>
          ),
          quiz: [
            {
              question: "Insertion Sort builds?",
              options: [
                "Sorted portion",
                "Tree only",
                "Graph",
                "Hash table",
              ],
              answer: "Sorted portion",
            },
            {
              question: "Insertion Sort worst case?",
              options: [
                "O(n²)",
                "O(1)",
                "O(log n)",
                "O(n log n)",
              ],
              answer: "O(n²)",
            },
            {
              question:
                "Insertion Sort inserts each element into?",
              options: [
                "Correct position",
                "Random position",
                "Only the end",
                "Only the beginning",
              ],
              answer: "Correct position",
            },
            {
              question:
                "Insertion Sort is similar to arranging?",
              options: [
                "Cards in your hand",
                "Graph edges",
                "Queue nodes",
                "Tree levels",
              ],
              answer: "Cards in your hand",
            },
            {
              question: "Insertion Sort is useful for?",
              options: [
                "Small or nearly sorted data",
                "Only graphs",
                "Only strings",
                "Only databases",
              ],
              answer: "Small or nearly sorted data",
            },
          ],
        },

        {
          id: "merge-sort",
          title: "Merge Sort",
          content: (
            <>
              <h3>Merge Sort</h3>

              <p>Uses the divide-and-conquer approach.</p>

              <p>Divide → Sort → Merge</p>

              <p>
                Time Complexity:
                <strong> O(n log n)</strong>
              </p>

              <p>
                Space Complexity:
                <strong> O(n)</strong>
              </p>
            </>
          ),
          quiz: [
            {
              question: "Merge Sort uses?",
              options: [
                "Divide and conquer",
                "Pivot",
                "Only swapping adjacent",
                "Stack only",
              ],
              answer: "Divide and conquer",
            },
            {
              question: "Merge Sort complexity?",
              options: [
                "O(n log n)",
                "O(n²)",
                "O(1)",
                "O(n³)",
              ],
              answer: "O(n log n)",
            },
            {
              question:
                "Merge Sort first divides the array into?",
              options: [
                "Smaller parts",
                "Only one element immediately",
                "Graphs",
                "Queues",
              ],
              answer: "Smaller parts",
            },
            {
              question:
                "After sorting smaller parts, Merge Sort?",
              options: [
                "Merges them",
                "Deletes them",
                "Searches them",
                "Hashes them",
              ],
              answer: "Merges them",
            },
            {
              question: "Typical extra space of Merge Sort is?",
              options: [
                "O(n)",
                "O(1)",
                "O(log n)",
                "O(n²)",
              ],
              answer: "O(n)",
            },
          ],
        },

        {
          id: "quick-sort",
          title: "Quick Sort",
          content: (
            <>
              <h3>Quick Sort</h3>

              <p>
                Quick Sort selects a pivot and partitions elements
                around it.
              </p>

              <p>
                Average Time Complexity:
                <strong> O(n log n)</strong>
              </p>
            </>
          ),
          quiz: [
            {
              question: "Quick Sort uses a?",
              options: [
                "Pivot",
                "Queue only",
                "Hash only",
                "Stack only",
              ],
              answer: "Pivot",
            },
            {
              question: "Quick Sort average complexity?",
              options: [
                "O(n log n)",
                "O(n²)",
                "O(1)",
                "O(n)",
              ],
              answer: "O(n log n)",
            },
            {
              question: "What does the pivot help with?",
              options: [
                "Partitioning",
                "Printing",
                "Creating strings",
                "Counting memory",
              ],
              answer: "Partitioning",
            },
            {
              question:
                "Quick Sort divides elements based on?",
              options: [
                "Pivot",
                "Queue",
                "Hash key",
                "Tree root only",
              ],
              answer: "Pivot",
            },
            {
              question: "Quick Sort worst case can be?",
              options: [
                "O(n²)",
                "O(1)",
                "O(log n)",
                "O(n)",
              ],
              answer: "O(n²)",
            },
          ],
        },
      ],
    },

    // =======================================================
    // LINKED LIST
    // =======================================================

    {
      id: "linked-list",
      title: "🔗 Linked List",
      subtopics: [
        {
          id: "linked-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is a Linked List?</h3>

              <p>
                A Linked List stores elements as nodes connected
                together.
              </p>
            </>
          ),
          quiz: [
            {
              question: "Linked List stores data using?",
              options: [
                "Nodes",
                "Only indexes",
                "Pixels",
                "Files",
              ],
              answer: "Nodes",
            },
            {
              question: "Nodes are connected using?",
              options: [
                "Links",
                "Colors",
                "Screens",
                "Folders",
              ],
              answer: "Links",
            },
            {
              question: "A linked list is a?",
              options: [
                "Linear data structure",
                "Sorting algorithm",
                "Searching algorithm",
                "Programming language",
              ],
              answer: "Linear data structure",
            },
            {
              question: "A node generally contains?",
              options: [
                "Data and link",
                "Only color",
                "Only index",
                "Only CSS",
              ],
              answer: "Data and link",
            },
            {
              question:
                "Linked List nodes are usually connected through?",
              options: [
                "References/pointers",
                "Screens",
                "Files",
                "Loops only",
              ],
              answer: "References/pointers",
            },
          ],
        },

        {
          id: "singly-linked-list",
          title: "Singly Linked List",
          content: (
            <>
              <h3>Singly Linked List</h3>

              <p>Each node points to the next node.</p>
            </>
          ),
          quiz: [
            {
              question: "A singly linked node points to?",
              options: [
                "Next node",
                "Previous only",
                "Both always",
                "Nothing",
              ],
              answer: "Next node",
            },
            {
              question: "Singly linked list has?",
              options: [
                "One link direction",
                "Two directions",
                "No nodes",
                "Only arrays",
              ],
              answer: "One link direction",
            },
            {
              question:
                "Can a singly linked list move backward directly?",
              options: [
                "No",
                "Yes, always",
                "Only with CSS",
                "Only with sorting",
              ],
              answer: "No",
            },
            {
              question:
                "Each node normally stores a reference to?",
              options: [
                "Next node",
                "Previous and next always",
                "Only first node",
                "Only last node",
              ],
              answer: "Next node",
            },
            {
              question: "Singly Linked List is useful for?",
              options: [
                "Dynamic collections",
                "Screen design",
                "CSS styling",
                "Image editing",
              ],
              answer: "Dynamic collections",
            },
          ],
        },

        {
          id: "doubly-linked-list",
          title: "Doubly Linked List",
          content: (
            <>
              <h3>Doubly Linked List</h3>

              <p>
                Each node can connect to both previous and next
                nodes.
              </p>
            </>
          ),
          quiz: [
            {
              question: "Doubly linked list supports?",
              options: [
                "Previous and next",
                "Next only",
                "No links",
                "Only indexes",
              ],
              answer: "Previous and next",
            },
            {
              question: "Doubly linked nodes usually have?",
              options: [
                "Two links",
                "No links",
                "Five arrays",
                "One value only",
              ],
              answer: "Two links",
            },
            {
              question: "Doubly linked list can traverse?",
              options: [
                "Both directions",
                "Only forward",
                "Only backward",
                "Neither direction",
              ],
              answer: "Both directions",
            },
            {
              question:
                "A doubly linked node usually contains?",
              options: [
                "Data, previous and next",
                "Only data",
                "Only next",
                "Only previous",
              ],
              answer: "Data, previous and next",
            },
            {
              question:
                "Compared with singly linked list, doubly linked list uses?",
              options: [
                "Extra link",
                "No memory",
                "Only arrays",
                "No nodes",
              ],
              answer: "Extra link",
            },
          ],
        },
      ],
    },

    // =======================================================
    // STACK
    // =======================================================

    {
      id: "stack",
      title: "📚 Stack",
      subtopics: [
        {
          id: "stack-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is a Stack?</h3>

              <p>Stack follows the LIFO principle.</p>

              <p>Last In → First Out</p>
            </>
          ),
          quiz: [
            {
              question: "Stack follows?",
              options: [
                "LIFO",
                "FIFO",
                "Random",
                "Binary",
              ],
              answer: "LIFO",
            },
            {
              question: "LIFO means?",
              options: [
                "Last In First Out",
                "First In First Out",
                "Linear Input",
                "Last Index First",
              ],
              answer: "Last In First Out",
            },
            {
              question:
                "Which element is removed first from a stack?",
              options: [
                "Top element",
                "Bottom element",
                "Middle element",
                "Random element",
              ],
              answer: "Top element",
            },
            {
              question: "Stack is a?",
              options: [
                "Linear data structure",
                "Sorting algorithm",
                "Graph",
                "Database",
              ],
              answer: "Linear data structure",
            },
            {
              question: "A real-life example of stack is?",
              options: [
                "Stack of plates",
                "Queue at a counter",
                "Road map",
                "Tree",
              ],
              answer: "Stack of plates",
            },
          ],
        },

        {
          id: "stack-operations",
          title: "Push, Pop and Peek",
          content: (
            <>
              <h3>Stack Operations</h3>

              <p>Push → Add element</p>
              <p>Pop → Remove top element</p>
              <p>Peek → View top element</p>
            </>
          ),
          quiz: [
            {
              question: "Push means?",
              options: [
                "Add element",
                "Remove element",
                "Sort",
                "Search",
              ],
              answer: "Add element",
            },
            {
              question: "Pop removes?",
              options: [
                "Top element",
                "Bottom element",
                "Middle element",
                "All elements",
              ],
              answer: "Top element",
            },
            {
              question: "Peek does what?",
              options: [
                "Views top element",
                "Deletes all elements",
                "Sorts stack",
                "Adds two elements",
              ],
              answer: "Views top element",
            },
            {
              question: "Which operation adds an item?",
              options: [
                "Push",
                "Pop",
                "Peek",
                "Search",
              ],
              answer: "Push",
            },
            {
              question: "Which operation removes an item?",
              options: [
                "Pop",
                "Push",
                "Peek",
                "Read",
              ],
              answer: "Pop",
            },
          ],
        },
      ],
    },

    // =======================================================
    // QUEUE
    // =======================================================

    {
      id: "queue",
      title: "🚶 Queue",
      subtopics: [
        {
          id: "queue-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is a Queue?</h3>

              <p>Queue follows the FIFO principle.</p>

              <p>First In → First Out</p>
            </>
          ),
          quiz: [
            {
              question: "Queue follows?",
              options: [
                "FIFO",
                "LIFO",
                "Random",
                "Binary",
              ],
              answer: "FIFO",
            },
            {
              question: "FIFO means?",
              options: [
                "First In First Out",
                "Last In First Out",
                "First Index First",
                "Fast Input",
              ],
              answer: "First In First Out",
            },
            {
              question: "Which element leaves first?",
              options: [
                "First inserted element",
                "Last inserted element",
                "Middle element",
                "Random element",
              ],
              answer: "First inserted element",
            },
            {
              question: "A real-life queue example is?",
              options: [
                "People waiting in line",
                "Stack of plates",
                "Tree",
                "Graph",
              ],
              answer: "People waiting in line",
            },
            {
              question: "Queue is a?",
              options: [
                "Linear data structure",
                "Sorting algorithm",
                "Tree",
                "Programming language",
              ],
              answer: "Linear data structure",
            },
          ],
        },

        {
          id: "queue-operations",
          title: "Enqueue and Dequeue",
          content: (
            <>
              <h3>Queue Operations</h3>

              <p>Enqueue → Add an element</p>
              <p>Dequeue → Remove an element</p>
            </>
          ),
          quiz: [
            {
              question: "Enqueue means?",
              options: [
                "Add element",
                "Remove element",
                "Sort",
                "Search",
              ],
              answer: "Add element",
            },
            {
              question: "Dequeue means?",
              options: [
                "Remove element",
                "Add element",
                "Reverse",
                "Merge",
              ],
              answer: "Remove element",
            },
            {
              question:
                "Where is an element usually added in a queue?",
              options: [
                "Rear",
                "Front",
                "Middle",
                "Random position",
              ],
              answer: "Rear",
            },
            {
              question:
                "Where is an element usually removed from a queue?",
              options: [
                "Front",
                "Rear",
                "Middle",
                "Random position",
              ],
              answer: "Front",
            },
            {
              question:
                "Which operation follows FIFO removal?",
              options: [
                "Dequeue",
                "Push",
                "Pop",
                "Peek",
              ],
              answer: "Dequeue",
            },
          ],
        },
      ],
    },

    // =======================================================
    // HASHING
    // =======================================================

    {
      id: "hashing",
      title: "#️⃣ Hashing",
      subtopics: [
        {
          id: "hashing-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is Hashing?</h3>

              <p>
                Hashing helps store and access data efficiently
                using keys.
              </p>
            </>
          ),
          quiz: [
            {
              question: "Hashing commonly uses?",
              options: [
                "Keys",
                "Only loops",
                "Only arrays",
                "CSS",
              ],
              answer: "Keys",
            },
            {
              question: "Hashing helps in?",
              options: [
                "Fast access",
                "Drawing images",
                "Changing CSS",
                "Creating videos",
              ],
              answer: "Fast access",
            },
            {
              question:
                "Which structure commonly uses hashing?",
              options: [
                "HashMap",
                "Stack only",
                "Queue only",
                "Tree only",
              ],
              answer: "HashMap",
            },
            {
              question: "Hashing maps a key to?",
              options: [
                "A location/index",
                "A screen",
                "A color",
                "A file extension",
              ],
              answer: "A location/index",
            },
            {
              question: "Hashing is useful for?",
              options: [
                "Fast lookup",
                "Screen design",
                "CSS styling",
                "Video editing",
              ],
              answer: "Fast lookup",
            },
          ],
        },

        {
          id: "frequency-counting",
          title: "Frequency Counting",
          content: (
            <>
              <h3>Frequency Counting</h3>

              <p>
                Frequency counting stores how many times each
                element occurs.
              </p>
            </>
          ),
          quiz: [
            {
              question: "Frequency counting finds?",
              options: [
                "Number of occurrences",
                "Screen size",
                "File size only",
                "Loop count only",
              ],
              answer: "Number of occurrences",
            },
            {
              question: "Which structure is useful?",
              options: [
                "HashMap",
                "Monitor",
                "Mouse",
                "Printer",
              ],
              answer: "HashMap",
            },
            {
              question:
                "If A occurs 3 times, its frequency is?",
              options: [
                "3",
                "1",
                "0",
                "2",
              ],
              answer: "3",
            },
            {
              question:
                "Frequency counting is useful for?",
              options: [
                "Counting repeated values",
                "Sorting hardware",
                "Changing CSS",
                "Creating images",
              ],
              answer: "Counting repeated values",
            },
            {
              question: "For [1,1,2], frequency of 1 is?",
              options: [
                "2",
                "1",
                "3",
                "0",
              ],
              answer: "2",
            },
          ],
        },
      ],
    },

    // =======================================================
    // TREES
    // =======================================================

    {
      id: "trees",
      title: "🌳 Trees",
      subtopics: [
        {
          id: "tree-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is a Tree?</h3>

              <p>
                A tree is a hierarchical data structure made of
                nodes.
              </p>
            </>
          ),
          quiz: [
            {
              question: "A tree is?",
              options: [
                "Hierarchical structure",
                "Sorting only",
                "A loop",
                "A string",
              ],
              answer: "Hierarchical structure",
            },
            {
              question: "Trees contain?",
              options: [
                "Nodes",
                "Only indexes",
                "CSS",
                "Images",
              ],
              answer: "Nodes",
            },
            {
              question:
                "The top node of a tree is called?",
              options: [
                "Root",
                "Leaf",
                "Edge",
                "Child",
              ],
              answer: "Root",
            },
            {
              question:
                "A node with no children is called?",
              options: [
                "Leaf",
                "Root",
                "Parent",
                "Edge",
              ],
              answer: "Leaf",
            },
            {
              question:
                "Trees represent data in a?",
              options: [
                "Hierarchical manner",
                "Flat manner only",
                "Random manner only",
                "Circular manner always",
              ],
              answer: "Hierarchical manner",
            },
          ],
        },

        {
          id: "tree-traversal",
          title: "Tree Traversals",
          content: (
            <>
              <h3>Tree Traversals</h3>

              <p>Inorder</p>
              <p>Preorder</p>
              <p>Postorder</p>
            </>
          ),
          quiz: [
            {
              question: "Which is a tree traversal?",
              options: [
                "Inorder",
                "Bubble",
                "Linear",
                "Enqueue",
              ],
              answer: "Inorder",
            },
            {
              question: "Preorder is related to?",
              options: [
                "Tree traversal",
                "Sorting only",
                "Queue",
                "CSS",
              ],
              answer: "Tree traversal",
            },
            {
              question:
                "Which traversal is Left → Root → Right?",
              options: [
                "Inorder",
                "Preorder",
                "Postorder",
                "BFS",
              ],
              answer: "Inorder",
            },
            {
              question:
                "Which traversal is Root → Left → Right?",
              options: [
                "Preorder",
                "Inorder",
                "Postorder",
                "DFS only",
              ],
              answer: "Preorder",
            },
            {
              question:
                "Which traversal is Left → Right → Root?",
              options: [
                "Postorder",
                "Preorder",
                "Inorder",
                "BFS",
              ],
              answer: "Postorder",
            },
          ],
        },
      ],
    },

    // =======================================================
    // GRAPHS
    // =======================================================

    {
      id: "graphs",
      title: "🕸️ Graphs",
      subtopics: [
        {
          id: "graph-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is a Graph?</h3>

              <p>
                A graph consists of vertices and edges.
              </p>
            </>
          ),
          quiz: [
            {
              question: "Graphs contain?",
              options: [
                "Vertices and edges",
                "Only arrays",
                "Only strings",
                "Only loops",
              ],
              answer: "Vertices and edges",
            },
            {
              question: "An edge connects?",
              options: [
                "Vertices",
                "CSS files",
                "Variables only",
                "Screens",
              ],
              answer: "Vertices",
            },
            {
              question:
                "Another name for a vertex is?",
              options: [
                "Node",
                "Index",
                "Loop",
                "Array",
              ],
              answer: "Node",
            },
            {
              question:
                "Graphs are useful for representing?",
              options: [
                "Networks",
                "Only numbers",
                "Only strings",
                "Only sorting",
              ],
              answer: "Networks",
            },
            {
              question: "A graph is made of?",
              options: [
                "Vertices and edges",
                "Only nodes",
                "Only arrays",
                "Only queues",
              ],
              answer: "Vertices and edges",
            },
          ],
        },

        {
          id: "bfs",
          title: "BFS",
          content: (
            <>
              <h3>Breadth First Search</h3>

              <p>
                BFS explores nodes level by level.
              </p>
            </>
          ),
          quiz: [
            {
              question: "BFS means?",
              options: [
                "Breadth First Search",
                "Binary Fast Search",
                "Basic Function Sort",
                "Best First Stack",
              ],
              answer: "Breadth First Search",
            },
            {
              question: "BFS explores?",
              options: [
                "Level by level",
                "Only backwards",
                "Randomly",
                "Only one node",
              ],
              answer: "Level by level",
            },
            {
              question:
                "BFS commonly uses which data structure?",
              options: [
                "Queue",
                "Stack",
                "HashMap only",
                "Array only",
              ],
              answer: "Queue",
            },
            {
              question: "BFS first explores?",
              options: [
                "Nearby nodes",
                "Deepest node always",
                "Random nodes",
                "Only leaves",
              ],
              answer: "Nearby nodes",
            },
            {
              question:
                "BFS is useful for finding shortest paths in?",
              options: [
                "Unweighted graphs",
                "Only sorted arrays",
                "Only strings",
                "Only stacks",
              ],
              answer: "Unweighted graphs",
            },
          ],
        },

        {
          id: "dfs",
          title: "DFS",
          content: (
            <>
              <h3>Depth First Search</h3>

              <p>
                DFS explores deeply before backtracking.
              </p>
            </>
          ),
          quiz: [
            {
              question: "DFS means?",
              options: [
                "Depth First Search",
                "Data Fast Sort",
                "Double File Search",
                "Dynamic First Stack",
              ],
              answer: "Depth First Search",
            },
            {
              question: "DFS explores?",
              options: [
                "Deeply",
                "Only level by level",
                "Only arrays",
                "Only sorted data",
              ],
              answer: "Deeply",
            },
            {
              question:
                "DFS can be implemented using?",
              options: [
                "Stack or recursion",
                "Queue only",
                "CSS",
                "Database only",
              ],
              answer: "Stack or recursion",
            },
            {
              question:
                "DFS explores one path before?",
              options: [
                "Backtracking",
                "Sorting",
                "Hashing",
                "Deleting",
              ],
              answer: "Backtracking",
            },
            {
              question: "DFS is a graph?",
              options: [
                "Traversal algorithm",
                "Sorting algorithm",
                "Database",
                "Programming language",
              ],
              answer: "Traversal algorithm",
            },
          ],
        },
      ],
    },

    // =======================================================
    // DYNAMIC PROGRAMMING
    // =======================================================

    {
      id: "dynamic-programming",
      title: "⚡ Dynamic Programming",
      subtopics: [
        {
          id: "dp-introduction",
          title: "Introduction",
          content: (
            <>
              <h3>What is Dynamic Programming?</h3>

              <p>
                Dynamic Programming solves problems by storing
                results of smaller subproblems.
              </p>
            </>
          ),
          quiz: [
            {
              question: "Dynamic Programming stores?",
              options: [
                "Results of subproblems",
                "Only CSS",
                "Images",
                "HTML tags",
              ],
              answer: "Results of subproblems",
            },
            {
              question: "DP helps avoid?",
              options: [
                "Repeated calculations",
                "Variables",
                "Functions",
                "Arrays",
              ],
              answer: "Repeated calculations",
            },
            {
              question:
                "DP is useful when problems have?",
              options: [
                "Overlapping subproblems",
                "Only strings",
                "Only arrays",
                "No subproblems",
              ],
              answer: "Overlapping subproblems",
            },
            {
              question: "DP often improves?",
              options: [
                "Efficiency",
                "Screen size",
                "Internet speed",
                "Keyboard speed",
              ],
              answer: "Efficiency",
            },
            {
              question:
                "Dynamic Programming solves a problem using?",
              options: [
                "Smaller subproblems",
                "Only loops",
                "Only sorting",
                "Only graphs",
              ],
              answer: "Smaller subproblems",
            },
          ],
        },

        {
          id: "memoization",
          title: "Memoization",
          content: (
            <>
              <h3>Memoization</h3>

              <p>
                Memoization stores results while solving recursively.
              </p>
            </>
          ),
          quiz: [
            {
              question: "Memoization commonly works with?",
              options: [
                "Recursion",
                "Only CSS",
                "HTML",
                "Images",
              ],
              answer: "Recursion",
            },
            {
              question: "Memoization stores?",
              options: [
                "Previous results",
                "Only input names",
                "Colors",
                "Screens",
              ],
              answer: "Previous results",
            },
            {
              question:
                "Memoization is usually considered?",
              options: [
                "Top-down DP",
                "Bottom-up only",
                "Sorting",
                "Searching",
              ],
              answer: "Top-down DP",
            },
            {
              question: "Memoization helps avoid?",
              options: [
                "Repeated computation",
                "Variables",
                "Functions",
                "Arrays",
              ],
              answer: "Repeated computation",
            },
            {
              question: "Memoization typically uses a?",
              options: [
                "Cache/storage",
                "CSS file",
                "Queue only",
                "Graph only",
              ],
              answer: "Cache/storage",
            },
          ],
        },

        {
          id: "tabulation",
          title: "Tabulation",
          content: (
            <>
              <h3>Tabulation</h3>

              <p>
                Tabulation solves problems from smaller values to
                larger values using a table.
              </p>
            </>
          ),
          quiz: [
            {
              question: "Tabulation commonly uses?",
              options: [
                "Table",
                "Pivot",
                "Queue only",
                "CSS",
              ],
              answer: "Table",
            },
            {
              question: "Tabulation is usually?",
              options: [
                "Bottom-up",
                "Top-down only",
                "Random",
                "Constant only",
              ],
              answer: "Bottom-up",
            },
            {
              question: "Tabulation generally starts with?",
              options: [
                "Base cases",
                "Largest case only",
                "Random values",
                "Final answer only",
              ],
              answer: "Base cases",
            },
            {
              question: "Tabulation usually avoids?",
              options: [
                "Recursion",
                "Arrays",
                "Variables",
                "Loops",
              ],
              answer: "Recursion",
            },
            {
              question:
                "Tabulation stores results in?",
              options: [
                "A table/array",
                "Only CSS",
                "Only a stack",
                "Only a graph",
              ],
              answer: "A table/array",
            },
          ],
        },
      ],
    },
  ];

  // =========================================================
  // FIND CURRENT DATA
  // =========================================================

  const currentTopic = dsaTopics.find(
    (topic) => topic.id === selectedTopic
  );

  const currentSubtopic = currentTopic?.subtopics.find(
    (subtopic) => subtopic.id === selectedSubtopic
  );

  const currentSubjectSubtopicIds = new Set(
    dsaTopics.flatMap((topic) =>
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

  const totalSubtopics = dsaTopics.reduce(
    (total, topic) => total + topic.subtopics.length,
    0
  );

  const overallProgress =
    totalSubtopics === 0
      ? 0
      : Math.round(
          (subjectCompletedTopics.length / totalSubtopics) * 100
        );

  const getTopicProgress = (topic) => {
    if (!topic || topic.subtopics.length === 0) {
      return 0;
    }

    const completed = topic.subtopics.filter((subtopic) =>
      subjectCompletedTopics.includes(subtopic.id)
    ).length;

    return Math.round(
      (completed / topic.subtopics.length) * 100
    );
  };

  // =========================================================
  // QUIZ FUNCTIONS
  // =========================================================

  const shuffleOptions = (options) => {
    const shuffled = [...options];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(
        Math.random() * (i + 1)
      );

      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }

    return shuffled;
  };

  const startQuiz = () => {
    if (!currentSubtopic?.quiz?.length) {
      return;
    }

    setQuizStarted(true);
    setQuizFinished(false);

    setCurrentQuestion(0);
    setScore(0);

    setSelectedAnswer(null);
    setAnswerChecked(false);

    setShuffledOptions(
      shuffleOptions(currentSubtopic.quiz[0].options)
    );
  };

  const answerQuestion = (answer) => {
    if (answerChecked) {
      return;
    }

    setSelectedAnswer(answer);
    setAnswerChecked(true);

    if (
      answer ===
      currentSubtopic.quiz[currentQuestion].answer
    ) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const nextQuestion = async () => {
    if (
      currentQuestion <
      currentSubtopic.quiz.length - 1
    ) {
      const nextIndex = currentQuestion + 1;

      setCurrentQuestion(nextIndex);
      setSelectedAnswer(null);
      setAnswerChecked(false);

      setShuffledOptions(
        shuffleOptions(
          currentSubtopic.quiz[nextIndex].options
        )
      );
    } else {
      const finalScore = score;

      await saveQuizResult({
        subject: "DSA",
        topic: currentSubtopic.title,
        topicId: currentSubtopic.id,
        score: finalScore,
        totalQuestions: currentSubtopic.quiz.length
      });

      setQuizStarted(false);
      setQuizFinished(true);
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
      "https://gradpath-ai-backend.onrender.com/learning-progress/complete",
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

      setCompletedTopics(data.completedTopics || []);

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
  // =========================================================
  // NAVIGATION FUNCTIONS
  // =========================================================

  // Goes back to the website's Learning page.
  // No react-router-dom dependency is required.
  const backToLearning = () => {
    closeQuiz();
    setSelectedTopic(null);
    setSelectedSubtopic(null);

    window.location.href = "/learning";
  };

  const openTopic = (topicId) => {
    setSelectedTopic(topicId);
    setSelectedSubtopic(null);
    closeQuiz();
  };

  const openSubtopic = (subtopicId) => {
    setSelectedSubtopic(subtopicId);
    closeQuiz();
  };

  const backToTopics = () => {
    setSelectedTopic(null);
    setSelectedSubtopic(null);
    closeQuiz();
  };

  const backToSubtopics = () => {
    setSelectedSubtopic(null);
    closeQuiz();
  };

  // =========================================================
  // MAIN DSA ROADMAP
  // =========================================================

  if (!selectedTopic) {
    return (
      <div
        style={{
          padding: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <button
          onClick={backToLearning}
          style={{
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "20px",
            background: "#e5e7eb",
            fontSize: "15px",
          }}
        >
          ← Back to Learning
        </button>

        <h1>🧠 DSA Roadmap</h1>

        <p>
          Learn Data Structures and Algorithms step by step.
        </p>

        {/* OVERALL PROGRESS */}

        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h2>Overall Progress</h2>

          <div
            style={{
              width: "100%",
              height: "14px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${overallProgress}%`,
                height: "100%",
                background: "#4CAF50",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <p>
            <strong>{overallProgress}%</strong> completed
          </p>

          <p>
            {subjectCompletedTopics.length} / {totalSubtopics}{" "}
            subtopics completed
          </p>
        </div>

        {/* TOPIC CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
            marginTop: "30px",
          }}
        >
          {dsaTopics.map((topic) => {
            const progress = getTopicProgress(topic);

            return (
              <div
                key={topic.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "14px",
                  padding: "20px",
                  background: "#fff",
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <h2>{topic.title}</h2>

                <p>
                  {topic.subtopics.length} subtopics
                </p>

                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    background: "#e5e7eb",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: "#4CAF50",
                    }}
                  />
                </div>

                <p>
                  <strong>{progress}%</strong> complete
                </p>

                <button
                  onClick={() => openTopic(topic.id)}
                  style={{
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    background: "#2563eb",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  Open Topic →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // TOPIC SAFETY CHECK
  // =========================================================

  if (!currentTopic) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Topic not found.</h2>

        <button onClick={backToTopics}>
          ← Back to DSA Roadmap
        </button>
      </div>
    );
  }

  // =========================================================
  // SUBTOPIC LIST
  // =========================================================

  if (!selectedSubtopic) {
    return (
      <div
        style={{
          padding: "30px",
          maxWidth: "900px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <button
          onClick={backToTopics}
          style={{
            padding: "9px 14px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Back to DSA Roadmap
        </button>

        <h1>{currentTopic.title}</h1>

        {/* TOPIC PROGRESS */}

        <div
          style={{
            margin: "20px 0",
            padding: "18px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>
            Topic Progress:{" "}
            {getTopicProgress(currentTopic)}%
          </h3>

          <div
            style={{
              width: "100%",
              height: "12px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${getTopicProgress(
                  currentTopic
                )}%`,
                height: "100%",
                background: "#4CAF50",
              }}
            />
          </div>
        </div>

        <h2>📚 Subtopics</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {currentTopic.subtopics.map((subtopic) => {
            const completed =
              subjectCompletedTopics.includes(subtopic.id);

            return (
              <button
                key={subtopic.id}
                onClick={() =>
                  openSubtopic(subtopic.id)
                }
                style={{
                  padding: "16px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  background: completed
                    ? "#f0fdf4"
                    : "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {completed ? "✅ " : "📖 "}
                {subtopic.title}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // SUBTOPIC SAFETY CHECK
  // =========================================================

  if (!currentSubtopic) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Subtopic not found.</h2>

        <button onClick={backToSubtopics}>
          ← Back to Subtopics
        </button>
      </div>
    );
  }

  // =========================================================
  // QUIZ RESULT CALCULATIONS
  // =========================================================

  const passingScore = Math.ceil(
    currentSubtopic.quiz.length * 0.6
  );

  const passedQuiz = score >= passingScore;

  // =========================================================
  // SUBTOPIC CONTENT
  // =========================================================

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVIGATION */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={backToSubtopics}
          style={{
            padding: "9px 14px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ← Subtopics
        </button>

        <button
          onClick={backToTopics}
          style={{
            padding: "9px 14px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🏠 DSA Roadmap
        </button>

        <button
          onClick={backToLearning}
          style={{
            padding: "9px 14px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#e5e7eb",
          }}
        >
          ← Back to Learning
        </button>
      </div>

      {/* HEADING */}

      <h1>{currentTopic.title}</h1>

      <h2>{currentSubtopic.title}</h2>

      <hr />

      {/* LEARNING CONTENT */}

      <div
        style={{
          fontSize: "17px",
          lineHeight: "1.7",
        }}
      >
        {currentSubtopic.content}
      </div>

      <hr />

      {/* COMPLETED STATUS */}

      {subjectCompletedTopics.includes(
        currentSubtopic.id
      ) && (
        <div
          style={{
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            background: "#f0fdf4",
            border: "1px solid #86efac",
          }}
        >
          ✅ You have completed this subtopic.
        </div>
      )}

      {/* QUIZ TITLE */}

      <h2>
        📝 {currentSubtopic.title} Quiz
      </h2>

      {/* QUIZ NOT STARTED */}

      {!quizStarted && !quizFinished && (
        <div
          style={{
            padding: "25px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <p>
            Test your understanding of this topic.
          </p>

          <p>
            <strong>
              {currentSubtopic.quiz.length} Questions
            </strong>
          </p>

          <p>
            You need at least{" "}
            <strong>{passingScore}</strong> correct answers
            to pass.
          </p>

          <button
            onClick={startQuiz}
            style={{
              padding: "12px 22px",
              border: "none",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ▶ Start Quiz
          </button>
        </div>
      )}

      {/* QUIZ IN PROGRESS */}

      {quizStarted && (
        <div
          style={{
            marginTop: "20px",
            padding: "25px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>
            Question {currentQuestion + 1} of{" "}
            {currentSubtopic.quiz.length}
          </h3>

          <div
            style={{
              width: "100%",
              height: "8px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    currentSubtopic.quiz.length) *
                  100
                }%`,
                height: "100%",
                background: "#2563eb",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "1.5",
            }}
          >
            {
              currentSubtopic.quiz[currentQuestion]
                .question
            }
          </p>

          <div style={{ marginTop: "20px" }}>
            {shuffledOptions.map((option, index) => {
              const isCorrect =
                option ===
                currentSubtopic.quiz[
                  currentQuestion
                ].answer;

              const isSelected =
                option === selectedAnswer;

              let backgroundColor = "white";
              let textColor = "#111";
              let borderColor = "#ddd";

              if (answerChecked) {
                if (isSelected && isCorrect) {
                  backgroundColor = "#4CAF50";
                  textColor = "white";
                  borderColor = "#4CAF50";
                } else if (
                  isSelected &&
                  !isCorrect
                ) {
                  backgroundColor = "#f44336";
                  textColor = "white";
                  borderColor = "#f44336";
                } else if (isCorrect) {
                  backgroundColor = "#4CAF50";
                  textColor = "white";
                  borderColor = "#4CAF50";
                }
              }

              return (
                <button
                  key={option}
                  onClick={() =>
                    answerQuestion(option)
                  }
                  disabled={answerChecked}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px",
                    marginBottom: "12px",
                    textAlign: "left",
                    border: `2px solid ${borderColor}`,
                    borderRadius: "10px",
                    background: backgroundColor,
                    color: textColor,
                    cursor: answerChecked
                      ? "default"
                      : "pointer",
                    fontSize: "16px",
                  }}
                >
                  {String.fromCharCode(65 + index)}.{" "}
                  {option}
                </button>
              );
            })}
          </div>

          {/* ANSWER FEEDBACK */}

          {answerChecked && (
            <div style={{ marginTop: "20px" }}>
              {selectedAnswer ===
              currentSubtopic.quiz[
                currentQuestion
              ].answer ? (
                <p
                  style={{
                    color: "#16a34a",
                    fontWeight: "bold",
                  }}
                >
                  ✅ Correct Answer!
                </p>
              ) : (
                <div>
                  <p
                    style={{
                      color: "#dc2626",
                      fontWeight: "bold",
                    }}
                  >
                    ❌ Wrong Answer!
                  </p>

                  <p>
                    Correct Answer:{" "}
                    <strong>
                      {
                        currentSubtopic.quiz[
                          currentQuestion
                        ].answer
                      }
                    </strong>
                  </p>
                </div>
              )}

              <button
                onClick={nextQuestion}
                style={{
                  padding: "11px 20px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                {currentQuestion ===
                currentSubtopic.quiz.length - 1
                  ? "Finish Quiz"
                  : "Next Question →"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* QUIZ RESULT */}

      {quizFinished && (
        <div
          style={{
            marginTop: "20px",
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h2>
            {passedQuiz
              ? "🎉 Quiz Passed!"
              : "📚 Keep Practicing!"}
          </h2>

          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {score} / {currentSubtopic.quiz.length}
          </p>

          <p>
            You got{" "}
            <strong>
              {Math.round(
                (score /
                  currentSubtopic.quiz.length) *
                  100
              )}
              %
            </strong>{" "}
            correct.
          </p>

          {passedQuiz ? (
            <>
              <p
                style={{
                  color: "#16a34a",
                  fontWeight: "bold",
                }}
              >
                ✅ You passed this quiz!
              </p>

              <button
                onClick={markCompleted}
                disabled={subjectCompletedTopics.includes(
                  currentSubtopic.id
                )}
                style={{
                  padding: "11px 20px",
                  margin: "8px",
                  border: "none",
                  borderRadius: "8px",
                  background:
                    subjectCompletedTopics.includes(
                      currentSubtopic.id
                    )
                      ? "#9ca3af"
                      : "#16a34a",
                  color: "white",
                  cursor:
                    subjectCompletedTopics.includes(
                      currentSubtopic.id
                    )
                      ? "default"
                      : "pointer",
                  fontSize: "15px",
                }}
              >
                {subjectCompletedTopics.includes(
                  currentSubtopic.id
                )
                  ? "✅ Completed"
                  : "Mark as Completed"}
              </button>
            </>
          ) : (
            <p
              style={{
                color: "#dc2626",
              }}
            >
              You need at least{" "}
              <strong>{passingScore}</strong> correct
              answers to pass.
            </p>
          )}

          <div style={{ marginTop: "20px" }}>
            <button
              onClick={retryQuiz}
              style={{
                padding: "11px 20px",
                margin: "8px",
                border: "none",
                borderRadius: "8px",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              🔄 Retry Quiz
            </button>

            <button
              onClick={backToSubtopics}
              style={{
                padding: "11px 20px",
                margin: "8px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              ← Back to Subtopics
            </button>

            <button
              onClick={backToLearning}
              style={{
                padding: "11px 20px",
                margin: "8px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px",
                background: "#e5e7eb",
              }}
            >
              ← Back to Learning
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DSA;