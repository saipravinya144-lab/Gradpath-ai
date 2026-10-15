import React, { useState } from "react";
import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "html-basics",
    title: "HTML Basics",
    icon: "📘",
    description:
      "Learn what HTML is, how HTML documents are structured, and how to create your first webpage.",
    sections: [
      {
        title: "What is HTML?",
        content: (
          <>
            <p>
              <strong>HTML</strong> stands for{" "}
              <strong>HyperText Markup Language</strong>. It is the standard
              markup language used to structure content on web pages.
            </p>
            <p>
              HTML tells the browser what different pieces of content are,
              such as headings, paragraphs, links, images, lists, forms and
              other elements.
            </p>
            <div className="lesson-note">
              <strong>Remember:</strong> HTML provides the structure of a
              webpage. CSS controls its appearance, while JavaScript adds
              behavior and interactivity.
            </div>
          </>
        ),
      },
      {
        title: "HTML Elements and Tags",
        content: (
          <>
            <p>
              HTML documents are made up of <strong>elements</strong>.
              Elements are usually written using an opening tag and a closing
              tag.
            </p>
            <CodeBlock
              code={`<h1>Hello World</h1>
<p>This is a paragraph.</p>`}
            />
            <p>
              <code>&lt;h1&gt;</code> is the opening tag,
              <code>&lt;/h1&gt;</code> is the closing tag, and the text between
              them is the element content.
            </p>
            <p>
              Some HTML elements do not need closing tags. These are called
              <strong> void elements</strong>.
            </p>
            <CodeBlock
              code={`<img src="photo.jpg" alt="A photo">
<br>
<hr>`}
            />
          </>
        ),
      },
      {
        title: "Basic HTML Document Structure",
        content: (
          <>
            <p>A normal HTML document follows a standard structure.</p>
            <CodeBlock
              code={`<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>

  <body>
    <h1>Hello World</h1>
    <p>Welcome to my website.</p>
  </body>
</html>`}
            />
            <ul>
              <li>
                <code>&lt;!DOCTYPE html&gt;</code> tells the browser to use
                modern HTML.
              </li>
              <li>
                <code>&lt;html&gt;</code> is the root element.
              </li>
              <li>
                <code>&lt;head&gt;</code> contains metadata and resources.
              </li>
              <li>
                <code>&lt;title&gt;</code> defines the browser tab title.
              </li>
              <li>
                <code>&lt;body&gt;</code> contains visible webpage content.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Attributes",
        content: (
          <>
            <p>
              Attributes provide additional information about HTML elements.
              They are normally written inside the opening tag.
            </p>
            <CodeBlock
              code={`<a href="https://example.com">
  Visit Example
</a>

<img
  src="profile.jpg"
  alt="Profile photo"
>`}
            />
            <p>
              <code>href</code> tells the browser where a link goes.
              <code>src</code> specifies an image source and <code>alt</code>
              provides alternative text.
            </p>
          </>
        ),
      },
    ],
    keyPoints: [
      "HTML stands for HyperText Markup Language.",
      "HTML provides the structure of a webpage.",
      "HTML uses elements and tags.",
      "The body contains visible page content.",
      "Attributes provide additional information about elements.",
    ],
    mistakes: [
      "Forgetting to close normal HTML elements.",
      "Putting visible webpage content inside the head instead of the body.",
      "Forgetting the alt attribute on important images.",
      "Using HTML only for visual styling instead of structure.",
    ],
    quiz: [
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language",
        ],
        answer: 0,
      },
      {
        question: "Which element contains visible webpage content?",
        options: ["<head>", "<meta>", "<body>", "<title>"],
        answer: 2,
      },
      {
        question: "Which attribute specifies the destination of a link?",
        options: ["src", "href", "alt", "link"],
        answer: 1,
      },
    ],
  },

  {
    id: "text-links-images",
    title: "Text, Links & Images",
    icon: "🔗",
    description:
      "Learn how to display text, create hyperlinks and add images to webpages.",
    sections: [
      {
        title: "Headings and Paragraphs",
        content: (
          <>
            <p>
              HTML provides six heading levels, from <code>&lt;h1&gt;</code>{" "}
              through <code>&lt;h6&gt;</code>.
            </p>
            <CodeBlock
              code={`<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>

<p>This is a paragraph of text.</p>`}
            />
            <p>
              Use headings to create a logical hierarchy. Normally,
              <code>&lt;h1&gt;</code> represents the main heading of the page.
            </p>
          </>
        ),
      },
      {
        title: "Text Formatting",
        content: (
          <>
            <p>
              HTML provides elements for expressing meaning and emphasis.
            </p>
            <CodeBlock
              code={`<strong>Important text</strong>
<em>Emphasized text</em>
<mark>Highlighted text</mark>
<small>Small text</small>
<del>Deleted text</del>`}
            />
            <p>
              Prefer semantic elements such as <code>&lt;strong&gt;</code> and
              <code>&lt;em&gt;</code> when the meaning of text matters.
            </p>
          </>
        ),
      },
      {
        title: "Links",
        content: (
          <>
            <p>
              The <code>&lt;a&gt;</code> element creates hyperlinks.
            </p>
            <CodeBlock
              code={`<a href="https://example.com">
  Visit Example
</a>

<a href="/about.html">
  About Us
</a>`}
            />
            <p>
              External links can use <code>target="_blank"</code>. When doing
              so, <code>rel="noopener noreferrer"</code> is a useful security
              practice.
            </p>
            <CodeBlock
              code={`<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Open Example
</a>`}
            />
          </>
        ),
      },
      {
        title: "Images",
        content: (
          <>
            <p>
              Images are added using the <code>&lt;img&gt;</code> element.
            </p>
            <CodeBlock
              code={`<img
  src="images/cat.jpg"
  alt="A cat sitting on a chair"
  width="400"
>`}
            />
            <p>
              <code>src</code> specifies the image location and <code>alt</code>
              provides alternative text.
            </p>
          </>
        ),
      },
    ],
    keyPoints: [
      "Use h1 to h6 for heading hierarchy.",
      "Use p for paragraphs.",
      "Use a with href to create links.",
      "Use img with src to display images.",
      "Use meaningful alt text for informative images.",
    ],
    mistakes: [
      "Using headings only because they look bigger.",
      "Leaving alt empty for an informative image.",
      "Using a button when the actual action is navigation.",
      "Using unnecessary line breaks to create spacing.",
    ],
    quiz: [
      {
        question: "Which element creates a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1,
      },
      {
        question: "Which attribute specifies an image location?",
        options: ["href", "alt", "src", "path"],
        answer: 2,
      },
      {
        question: "What is the purpose of alt text?",
        options: [
          "To change image color",
          "To provide alternative text for an image",
          "To create a link",
          "To resize an image",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "lists-tables",
    title: "Lists & Tables",
    icon: "📋",
    description:
      "Learn how to organize information using ordered lists, unordered lists and HTML tables.",
    sections: [
      {
        title: "Unordered Lists",
        content: (
          <>
            <p>
              Use <code>&lt;ul&gt;</code> when the order of items does not
              matter.
            </p>
            <CodeBlock
              code={`<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`}
            />
          </>
        ),
      },
      {
        title: "Ordered Lists",
        content: (
          <>
            <p>
              Use <code>&lt;ol&gt;</code> when the sequence of items matters.
            </p>
            <CodeBlock
              code={`<ol>
  <li>Open the editor</li>
  <li>Create an HTML file</li>
  <li>Open it in the browser</li>
</ol>`}
            />
          </>
        ),
      },
      {
        title: "Nested Lists",
        content: (
          <>
            <p>Lists can contain other lists.</p>
            <CodeBlock
              code={`<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>`}
            />
          </>
        ),
      },
      {
        title: "Tables",
        content: (
          <>
            <p>
              Tables are useful for displaying genuinely tabular information.
            </p>
            <CodeBlock
              code={`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Asha</td>
      <td>21</td>
    </tr>

    <tr>
      <td>Rahul</td>
      <td>22</td>
    </tr>
  </tbody>
</table>`}
            />
            <ul>
              <li>
                <code>&lt;table&gt;</code> creates the table.
              </li>
              <li>
                <code>&lt;tr&gt;</code> creates a row.
              </li>
              <li>
                <code>&lt;th&gt;</code> creates a header cell.
              </li>
              <li>
                <code>&lt;td&gt;</code> creates a data cell.
              </li>
              <li>
                <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code>
                organize the table.
              </li>
            </ul>
          </>
        ),
      },
    ],
    keyPoints: [
      "Use ul for unordered lists.",
      "Use ol for ordered lists.",
      "Use li for individual list items.",
      "Use tables for tabular data.",
      "Use th for table headers and td for table data.",
    ],
    mistakes: [
      "Using tables for page layout.",
      "Forgetting table headers.",
      "Using an ordered list when item order has no meaning.",
      "Creating lists using many br elements.",
    ],
    quiz: [
      {
        question: "Which element creates an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: 1,
      },
      {
        question: "Which element represents a table row?",
        options: ["<td>", "<th>", "<tr>", "<row>"],
        answer: 2,
      },
      {
        question: "Which element represents a table header cell?",
        options: ["<head>", "<th>", "<td>", "<header>"],
        answer: 1,
      },
    ],
  },

  {
    id: "forms-input",
    title: "Forms & Input Elements",
    icon: "📝",
    description:
      "Learn how to collect user information using HTML forms and different input controls.",
    sections: [
      {
        title: "HTML Forms",
        content: (
          <>
            <p>
              The <code>&lt;form&gt;</code> element groups controls that allow
              users to submit information.
            </p>
            <CodeBlock
              code={`<form>
  <label for="name">Name:</label>
  <input type="text" id="name">

  <button type="submit">
    Submit
  </button>
</form>`}
            />
          </>
        ),
      },
      {
        title: "Labels and Inputs",
        content: (
          <>
            <p>
              Labels help users understand form controls and improve
              accessibility.
            </p>
            <CodeBlock
              code={`<label for="email">
  Email Address
</label>

<input
  type="email"
  id="email"
  name="email"
>`}
            />
            <p>
              The label's <code>for</code> value should match the input's
              <code>id</code>.
            </p>
          </>
        ),
      },
      {
        title: "Common Input Types",
        content: (
          <>
            <p>HTML provides many useful input types.</p>
            <CodeBlock
              code={`<input type="text">
<input type="email">
<input type="password">
<input type="number">
<input type="date">
<input type="checkbox">
<input type="radio">
<input type="file">
<input type="submit">`}
            />
            <p>
              Choosing the appropriate input type improves interaction and
              can provide built-in browser validation.
            </p>
          </>
        ),
      },
      {
        title: "Select, Textarea and Button",
        content: (
          <CodeBlock
            code={`<label for="course">Course</label>

<select id="course" name="course">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>

<label for="message">Message</label>

<textarea
  id="message"
  name="message"
  rows="5"
></textarea>

<button type="submit">
  Send
</button>`}
          />
        ),
      },
      {
        title: "Required Fields and Validation",
        content: (
          <>
            <p>
              HTML provides client-side validation using attributes such as
              <code>required</code>, <code>minlength</code>,
              <code>maxlength</code>, <code>min</code>, <code>max</code> and
              appropriate input types.
            </p>
            <CodeBlock
              code={`<input
  type="email"
  name="email"
  required
>

<input
  type="password"
  name="password"
  minlength="8"
  required
>`}
            />
            <div className="lesson-note">
              <strong>Important:</strong> Browser-side validation improves
              user experience, but sensitive data must still be validated on
              the server.
            </div>
          </>
        ),
      },
    ],
    keyPoints: [
      "Forms collect user input.",
      "Labels improve accessibility and usability.",
      "Choose input types according to the expected data.",
      "Use name attributes when values need to be submitted.",
      "Client-side validation does not replace server-side validation.",
    ],
    mistakes: [
      "Using placeholder text instead of labels.",
      "Forgetting name attributes on submitted controls.",
      "Using the wrong input type.",
      "Trusting only client-side validation for security.",
    ],
    quiz: [
      {
        question: "Which element groups form controls?",
        options: ["<input>", "<form>", "<fieldset>", "<group>"],
        answer: 1,
      },
      {
        question: "Which attribute connects a label to an input?",
        options: ["connect", "for", "target", "input"],
        answer: 1,
      },
      {
        question: "Which attribute makes a form field mandatory?",
        options: ["mandatory", "required", "needed", "validate"],
        answer: 1,
      },
    ],
  },

  {
    id: "semantic-html",
    title: "Semantic HTML",
    icon: "🧩",
    description:
      "Learn how semantic HTML makes webpages more meaningful, accessible and easier to maintain.",
    sections: [
      {
        title: "What is Semantic HTML?",
        content: (
          <>
            <p>
              Semantic HTML uses elements whose names communicate the meaning
              and purpose of their content.
            </p>
            <p>
              Common semantic elements include <code>&lt;header&gt;</code>,
              <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,
              <code>&lt;article&gt;</code> and <code>&lt;footer&gt;</code>.
            </p>
          </>
        ),
      },
      {
        title: "Common Semantic Elements",
        content: (
          <CodeBlock
            code={`<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<main>
  <article>
    <h2>My Article</h2>
    <p>Article content...</p>
  </article>
</main>

<footer>
  <p>Copyright 2026</p>
</footer>`}
          />
        ),
      },
      {
        title: "Why Semantic HTML Matters",
        content: (
          <ul>
            <li>Improves document structure.</li>
            <li>Helps accessibility technologies understand the page.</li>
            <li>Makes code easier for developers to understand.</li>
            <li>Can help search engines understand page content.</li>
          </ul>
        ),
      },
      {
        title: "Div and Span",
        content: (
          <>
            <p>
              <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> are generic
              elements. They are useful when no more meaningful semantic
              element fits.
            </p>
            <CodeBlock
              code={`<div class="card">
  <h2>Product</h2>
  <p>Product description</p>
</div>

<p>
  This is <span class="highlight">important</span>.
</p>`}
            />
            <div className="lesson-note">
              <strong>Rule of thumb:</strong> Choose a semantic element when
              one accurately describes the content. Use div and span when a
              generic container is appropriate.
            </div>
          </>
        ),
      },
    ],
    keyPoints: [
      "Semantic elements communicate meaning.",
      "Use header, nav, main, article, section and footer where appropriate.",
      "Semantic HTML improves accessibility and maintainability.",
      "div and span are generic elements.",
      "HTML semantics are about meaning, not visual appearance.",
    ],
    mistakes: [
      "Using div for every part of a webpage.",
      "Choosing elements only because of their default appearance.",
      "Using headings only for visual size.",
      "Creating navigation without a meaningful nav structure.",
    ],
    quiz: [
      {
        question: "Which element represents the primary content of a page?",
        options: ["<content>", "<main>", "<body-content>", "<primary>"],
        answer: 1,
      },
      {
        question: "Which element is intended for navigation links?",
        options: ["<navigate>", "<links>", "<nav>", "<menu-links>"],
        answer: 2,
      },
      {
        question: "Which element is generic and has no specific semantic meaning?",
        options: ["<article>", "<main>", "<div>", "<header>"],
        answer: 2,
      },
    ],
  },

  {
    id: "multimedia",
    title: "Multimedia",
    icon: "🎬",
    description:
      "Learn how to add audio, video, embedded content and responsive images to webpages.",
    sections: [
      {
        title: "Images",
        content: (
          <>
            <p>
              Images are commonly added using <code>&lt;img&gt;</code>.
              HTML also provides advanced image features.
            </p>
            <CodeBlock
              code={`<img
  src="landscape.jpg"
  alt="Mountain landscape"
  width="800"
  height="500"
>`}
            />
          </>
        ),
      },
      {
        title: "Audio",
        content: (
          <>
            <p>
              The <code>&lt;audio&gt;</code> element allows browsers to provide
              audio playback controls.
            </p>
            <CodeBlock
              code={`<audio controls>
  <source
    src="music.mp3"
    type="audio/mpeg"
  >
  Your browser does not support audio.
</audio>`}
            />
          </>
        ),
      },
      {
        title: "Video",
        content: (
          <>
            <p>
              Use <code>&lt;video&gt;</code> to display video content.
            </p>
            <CodeBlock
              code={`<video controls width="640">
  <source
    src="lesson.mp4"
    type="video/mp4"
  >

  Your browser does not support video.
</video>`}
            />
            <p>
              Common attributes include <code>controls</code>,
              <code>autoplay</code>, <code>muted</code>, <code>loop</code> and
              <code>poster</code>.
            </p>
          </>
        ),
      },
      {
        title: "Embedded Content",
        content: (
          <>
            <p>
              The <code>&lt;iframe&gt;</code> element can embed another
              document or supported external content.
            </p>
            <CodeBlock
              code={`<iframe
  src="https://example.com"
  title="Example website"
  width="600"
  height="400"
></iframe>`}
            />
            <div className="lesson-note">
              <strong>Security note:</strong> Only embed content from sources
              you trust and understand.
            </div>
          </>
        ),
      },
      {
        title: "Responsive Images",
        content: (
          <>
            <p>
              HTML can provide multiple image resources for different screen
              sizes and resolutions.
            </p>
            <CodeBlock
              code={`<picture>
  <source
    media="(max-width: 600px)"
    srcset="small.jpg"
  >

  <source
    media="(max-width: 1200px)"
    srcset="medium.jpg"
  >

  <img
    src="large.jpg"
    alt="Mountain landscape"
  >
</picture>`}
            />
          </>
        ),
      },
    ],
    keyPoints: [
      "Use img for images.",
      "Use audio for audio playback.",
      "Use video for video playback.",
      "Use iframe for supported embedded content.",
      "picture can provide different image sources.",
    ],
    mistakes: [
      "Forgetting alternative text for informative images.",
      "Autoplaying audio unexpectedly.",
      "Embedding untrusted external content.",
      "Using unnecessarily huge media files.",
    ],
    quiz: [
      {
        question: "Which element is used for video?",
        options: ["<media>", "<movie>", "<video>", "<film>"],
        answer: 2,
      },
      {
        question: "Which attribute displays built-in audio/video controls?",
        options: ["buttons", "controls", "player", "interface"],
        answer: 1,
      },
      {
        question: "Which element can embed another document?",
        options: ["<embed-page>", "<iframe>", "<frame-page>", "<document>"],
        answer: 1,
      },
    ],
  },

  {
    id: "html5-apis",
    title: "HTML5 APIs",
    icon: "⚙️",
    description:
      "Learn about useful browser APIs that work alongside HTML to provide additional functionality.",
    sections: [
      {
        title: "What are Web APIs?",
        content: (
          <>
            <p>
              Modern browsers expose many <strong>Web APIs</strong> that
              JavaScript can use to interact with browser features.
            </p>
            <p>
              These APIs are browser-provided programming interfaces commonly
              accessed through JavaScript.
            </p>
            <div className="lesson-note">
              <strong>Important:</strong> You do not need to memorize every
              browser API. Learn the purpose of an API and understand when it
              is appropriate to use it.
            </div>
          </>
        ),
      },
      {
        title: "Geolocation API",
        content: (
          <>
            <p>
              The Geolocation API can request the user's geographic position,
              subject to browser permission.
            </p>
            <CodeBlock
              code={`navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  },
  (error) => {
    console.log(error.message);
  }
);`}
            />
            <p>
              Browsers require user permission before providing location
              information to a website.
            </p>
          </>
        ),
      },
      {
        title: "Web Storage",
        content: (
          <>
            <p>
              Web Storage provides mechanisms for storing data in the browser.
              Two common mechanisms are <code>localStorage</code> and
              <code>sessionStorage</code>.
            </p>
            <CodeBlock
              code={`localStorage.setItem(
  "username",
  "Keerthana"
);

const username =
  localStorage.getItem("username");

localStorage.removeItem("username");`}
            />
            <p>
              Storage should not be treated as a secure place for secrets such
              as passwords or sensitive authentication credentials.
            </p>
          </>
        ),
      },
      {
        title: "Drag and Drop",
        content: (
          <>
            <p>
              Browser drag-and-drop functionality allows interfaces to respond
              to drag operations.
            </p>
            <CodeBlock
              code={`<div
  draggable="true"
  ondragstart="handleDrag(event)"
>
  Drag me
</div>`}
            />
            <p>
              JavaScript event handlers are used to implement actual
              drag-and-drop behavior.
            </p>
          </>
        ),
      },
      {
        title: "Canvas",
        content: (
          <>
            <p>
              The <code>&lt;canvas&gt;</code> element provides a drawing
              surface that JavaScript can manipulate.
            </p>
            <CodeBlock
              code={`<canvas
  id="myCanvas"
  width="400"
  height="200"
>
</canvas>`}
            />
            <p>
              JavaScript can obtain a drawing context and use it to draw
              shapes and graphics.
            </p>
            <CodeBlock
              code={`const canvas =
  document.getElementById("myCanvas");

const ctx =
  canvas.getContext("2d");

ctx.fillRect(50, 50, 100, 80);`}
            />
          </>
        ),
      },
    ],
    keyPoints: [
      "Web APIs provide browser functionality to JavaScript.",
      "Geolocation requires user permission.",
      "localStorage and sessionStorage store browser-side data.",
      "Canvas provides a programmable drawing surface.",
      "Browser APIs should be used with security and privacy in mind.",
    ],
    mistakes: [
      "Thinking HTML5 APIs are all HTML elements.",
      "Storing sensitive secrets in localStorage.",
      "Using location information without considering user privacy.",
      "Assuming every browser API works identically everywhere.",
    ],
    quiz: [
      {
        question: "Which API can access a user's location with permission?",
        options: ["Storage API", "Geolocation API", "Canvas API", "Audio API"],
        answer: 1,
      },
      {
        question: "Which API is used by localStorage?",
        options: ["Web Storage API", "Location API", "Canvas API", "Media API"],
        answer: 0,
      },
      {
        question: "Which HTML element provides a drawing surface?",
        options: ["<draw>", "<graphics>", "<canvas>", "<paint>"],
        answer: 2,
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

function HTML({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress(
    "fullstack-html",
    subtopics
);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const completedSubtopics = completed.length;

  const overallProgress =
    subtopics.length === 0
      ? 0
      : Math.round((completedSubtopics / subtopics.length) * 100);

  const selectedIndex = subtopics.findIndex(
    (subtopic) => subtopic.id === selectedSubtopic
  );

  const currentSubtopic =
    selectedIndex >= 0 ? subtopics[selectedIndex] : null;

  const toggleComplete = () => {
    if (!currentSubtopic) return;

    saveProgress(currentSubtopic.id);
};

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    if (!currentSubtopic) return;

    setQuizAnswers((previous) => ({
      ...previous,
      [`${currentSubtopic.id}-${questionIndex}`]: answerIndex,
    }));
  };

  const submitQuiz = async () => {
    const score = currentSubtopic.quiz.reduce((total, question, index) => {
      const selectedAnswer = quizAnswers[`${currentSubtopic.id}-${index}`];
      return total + (selectedAnswer === question.answer ? 1 : 0);
    }, 0);

    await saveQuizResult({
      subject: "Full Stack",
      role: "Full Stack Developer",
      topic: currentSubtopic.title,
      topicId: currentSubtopic.id,
      score,
      totalQuestions: currentSubtopic.quiz.length
    });

    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    if (!currentSubtopic) return;

    const updatedAnswers = { ...quizAnswers };

    currentSubtopic.quiz.forEach((_, index) => {
      delete updatedAnswers[`${currentSubtopic.id}-${index}`];
    });

    setQuizAnswers(updatedAnswers);
    setQuizSubmitted(false);
  };

  const openSubtopic = (subtopic) => {
    setSelectedSubtopic(subtopic.id);
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

  if (currentSubtopic) {
    const isCompleted = completed.includes(currentSubtopic.id);

    const quizScore = currentSubtopic.quiz.reduce(
      (score, question, index) => {
        const selectedAnswer =
          quizAnswers[`${currentSubtopic.id}-${index}`];

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
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <button
            onClick={() => setSelectedSubtopic(null)}
            style={buttonStyle("#2563eb")}
          >
            ← Back to HTML
          </button>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #bfdbfe",
              boxShadow: "0 4px 15px rgba(37, 99, 235, 0.08)",
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
                  HTML • Lesson {selectedIndex + 1} of {subtopics.length}
                </p>

                <h1
                  style={{
                    margin: "0 0 10px",
                    fontSize: "30px",
                    color: "#111827",
                  }}
                >
                  {currentSubtopic.icon} {currentSubtopic.title}
                </h1>

                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {currentSubtopic.description}
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

          {currentSubtopic.sections.map((section, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "18px",
                padding: "28px",
                marginTop: "22px",
                border: "1px solid #dbeafe",
                boxShadow: "0 3px 12px rgba(37, 99, 235, 0.06)",
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
              {currentSubtopic.keyPoints.map((point, index) => (
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
            <h2 style={{ margin: "0 0 18px", color: "#9a3412" }}>
              ⚠️ Common Mistakes
            </h2>

            <ul
              style={{
                color: "#7c2d12",
                lineHeight: "1.8",
                paddingLeft: "25px",
              }}
            >
              {currentSubtopic.mistakes.map((mistake, index) => (
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

            {currentSubtopic.quiz.map((question, questionIndex) => {
              const selectedAnswer =
                quizAnswers[`${currentSubtopic.id}-${questionIndex}`];

              const isCorrect = selectedAnswer === question.answer;

              return (
                <div
                  key={questionIndex}
                  style={{
                    marginBottom: "28px",
                    paddingBottom: "24px",
                    borderBottom:
                      questionIndex !== currentSubtopic.quiz.length - 1
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

                  {question.options.map((option, optionIndex) => {
                    const selected = selectedAnswer === optionIndex;

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
                          handleQuizAnswer(questionIndex, optionIndex)
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
                          cursor: quizSubmitted ? "default" : "pointer",
                          fontSize: "15px",
                          color: "#111827",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}

                  {quizSubmitted && (
                    <p
                      style={{
                        marginTop: "10px",
                        fontWeight: "600",
                        color: isCorrect ? "#15803d" : "#b91c1c",
                      }}
                    >
                      {isCorrect
                        ? "✅ Correct!"
                        : `❌ Incorrect. Correct answer: ${
                            question.options[question.answer]
                          }`}
                    </p>
                  )}
                </div>
              );
            })}

            {!quizSubmitted ? (
              <button onClick={submitQuiz} style={buttonStyle("#2563eb")}>
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
                  🎯 Score: {quizScore} / {currentSubtopic.quiz.length}
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
              style={buttonStyle(isCompleted ? "#16a34a" : "#2563eb")}
            >
              {isCompleted ? "✓ Completed" : "Mark as Complete"}
            </button>

            <button
              onClick={goToNext}
              disabled={selectedIndex === subtopics.length - 1}
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
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <button onClick={goBack} style={buttonStyle("#2563eb")}>
          ← Back to Full Stack
        </button>

        <h1
          style={{
            fontSize: "32px",
            margin: "20px 0 8px",
            color: "#111827",
          }}
        >
          🌐 HTML
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn the structure and foundation of modern web pages.
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

            <span style={{ color: "#555", fontSize: "14px" }}>
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
          {subtopics.map((subtopic, index) => {
            const isCompleted = completed.includes(subtopic.id);
            const progress = isCompleted ? 100 : 0;

            return (
              <div
                key={subtopic.id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "205px",
                  border: isCompleted
                    ? "1px solid #86efac"
                    : "1px solid #bfdbfe",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
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
                    {index + 1}. {subtopic.icon} {subtopic.title}
                  </h2>

                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: "15px",
                      color: "#555",
                      lineHeight: "1.5",
                    }}
                  >
                    {subtopic.description}
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
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => openSubtopic(subtopic)}
                  style={buttonStyle(isCompleted ? "#16a34a" : "#2563eb")}
                >
                  {isCompleted ? "Review Topic →" : "Open Topic →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
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
    marginBottom: "20px",
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

export default HTML;