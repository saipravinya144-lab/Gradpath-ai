import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "css-basics",
    title: "CSS Basics",
    icon: "🎨",
    description:
      "Learn what CSS is, how to add CSS to HTML, and understand the basic structure of CSS rules.",

    sections: [
      {
        title: "What is CSS?",
        content: (
          <>
            <p>
              <strong>CSS</strong> stands for{" "}
              <strong>Cascading Style Sheets</strong>. CSS is used to control
              the appearance and layout of HTML elements.
            </p>

            <p>
              HTML provides the structure of a webpage, while CSS controls
              things such as colors, fonts, spacing, borders, positioning,
              layouts and responsive behavior.
            </p>

            <div className="lesson-note">
              <strong>Remember:</strong> HTML = structure, CSS = presentation,
              JavaScript = behavior.
            </div>
          </>
        ),
      },

      {
        title: "CSS Rule Structure",
        content: (
          <>
            <p>
              A CSS rule normally contains a <strong>selector</strong> and one
              or more declarations.
            </p>

            <CodeBlock
              code={`p {
  color: blue;
  font-size: 18px;
}`}
            />

            <p>
              Here, <code>p</code> is the selector.{" "}
              <code>color: blue;</code> and{" "}
              <code>font-size: 18px;</code> are declarations.
            </p>
          </>
        ),
      },

      {
        title: "Ways to Add CSS",
        content: (
          <>
            <p>There are three common ways to apply CSS.</p>

            <h3>Inline CSS</h3>

            <CodeBlock
              code={`<p style="color: blue;">
  Hello
</p>`}
            />

            <h3>Internal CSS</h3>

            <CodeBlock
              code={`<style>
  p {
    color: blue;
  }
</style>`}
            />

            <h3>External CSS</h3>

            <CodeBlock
              code={`<link
  rel="stylesheet"
  href="styles.css"
>`}
            />

            <p>
              External stylesheets are generally preferred for larger projects
              because they keep styling separate from HTML.
            </p>
          </>
        ),
      },

      {
        title: "Cascading and Inheritance",
        content: (
          <>
            <p>
              CSS is called <strong>cascading</strong> because multiple rules
              can apply to the same element. The browser determines which rule
              wins based on factors such as origin, importance, specificity
              and source order.
            </p>

            <p>
              Some CSS properties can also be inherited from a parent element
              by its children.
            </p>

            <CodeBlock
              code={`body {
  font-family: Arial, sans-serif;
}

p {
  color: #333;
}`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "CSS stands for Cascading Style Sheets.",
      "CSS controls the appearance and layout of HTML.",
      "A CSS rule contains a selector and declarations.",
      "External stylesheets are useful for larger projects.",
      "The cascade determines which CSS rules are applied.",
    ],

    mistakes: [
      "Using inline styles everywhere.",
      "Forgetting semicolons in CSS declarations.",
      "Confusing selectors with properties.",
      "Using CSS to replace meaningful HTML structure.",
    ],

    quiz: [
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style System",
          "Creative Styling System",
          "Cascading Simple Syntax",
        ],
        answer: 0,
      },
      {
        question: "Which symbol starts a CSS declaration block?",
        options: ["(", "[", "{", "<"],
        answer: 2,
      },
      {
        question: "Which method is generally preferred for larger projects?",
        options: [
          "Inline CSS",
          "External CSS",
          "Only JavaScript",
          "HTML attributes",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "selectors-properties",
    title: "Selectors & Properties",
    icon: "🎯",
    description:
      "Learn how CSS selectors target HTML elements and how properties control their appearance.",

    sections: [
      {
        title: "Element Selectors",
        content: (
          <>
            <p>
              An element selector targets all elements of a particular HTML
              type.
            </p>

            <CodeBlock
              code={`p {
  color: #333;
}

h1 {
  font-size: 32px;
}`}
            />
          </>
        ),
      },

      {
        title: "Class Selectors",
        content: (
          <>
            <p>
              Class selectors begin with a period and target elements with a
              specific class.
            </p>

            <CodeBlock
              code={`.card {
  padding: 20px;
  border-radius: 10px;
}

.highlight {
  color: blue;
}`}
            />

            <CodeBlock
              code={`<div class="card">
  Product information
</div>

<p class="highlight">
  Important text
</p>`}
            />
          </>
        ),
      },

      {
        title: "ID Selectors",
        content: (
          <>
            <p>
              ID selectors begin with <code>#</code> and target an element with
              a particular ID.
            </p>

            <CodeBlock
              code={`#header {
  background: black;
  color: white;
}`}
            />

            <p>
              IDs should normally be unique within a page. Classes are usually
              more reusable for styling.
            </p>
          </>
        ),
      },

      {
        title: "Grouping and Universal Selector",
        content: (
          <>
            <p>
              Multiple selectors can be grouped using commas.
            </p>

            <CodeBlock
              code={`h1,
h2,
h3 {
  font-family: Arial, sans-serif;
}`}
            />

            <p>
              The universal selector <code>*</code> targets all elements.
            </p>

            <CodeBlock
              code={`* {
  box-sizing: border-box;
}`}
            />
          </>
        ),
      },

      {
        title: "Properties and Values",
        content: (
          <>
            <p>
              CSS properties describe what you want to change, while values
              describe how you want it changed.
            </p>

            <CodeBlock
              code={`p {
  color: red;
  font-size: 18px;
  margin: 20px;
}`}
            />

            <ul>
              <li>
                <code>color</code> is a property.
              </li>
              <li>
                <code>red</code> is its value.
              </li>
              <li>
                <code>font-size</code> controls text size.
              </li>
              <li>
                <code>margin</code> controls outside spacing.
              </li>
            </ul>
          </>
        ),
      },
    ],

    keyPoints: [
      "Element selectors target HTML elements.",
      "Class selectors start with a period.",
      "ID selectors start with #.",
      "Multiple selectors can be grouped with commas.",
      "CSS properties are assigned values.",
    ],

    mistakes: [
      "Using IDs when a reusable class would be better.",
      "Forgetting the dot before a class selector.",
      "Forgetting the # before an ID selector.",
      "Writing invalid property-value combinations.",
    ],

    quiz: [
      {
        question: "Which selector targets a class named card?",
        options: ["#card", ".card", "card", "*card"],
        answer: 1,
      },
      {
        question: "Which selector targets an ID named header?",
        options: [".header", "header", "#header", "*header"],
        answer: 2,
      },
      {
        question: "What does the universal selector target?",
        options: [
          "Only paragraphs",
          "Only classes",
          "Only IDs",
          "All elements",
        ],
        answer: 3,
      },
    ],
  },

  {
    id: "box-model",
    title: "Box Model",
    icon: "📦",
    description:
      "Understand how CSS calculates element dimensions using content, padding, border and margin.",

    sections: [
      {
        title: "The CSS Box Model",
        content: (
          <>
            <p>
              Every HTML element is treated as a rectangular box by the
              browser.
            </p>

            <p>The box model consists of four main areas:</p>

            <ol>
              <li>Content</li>
              <li>Padding</li>
              <li>Border</li>
              <li>Margin</li>
            </ol>

            <CodeBlock
              code={`.box {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  margin: 30px;
}`}
            />
          </>
        ),
      },

      {
        title: "Content",
        content: (
          <>
            <p>
              The content area contains the actual text, image or other
              content of the element.
            </p>

            <CodeBlock
              code={`.box {
  width: 300px;
  height: 150px;
}`}
            />

            <p>
              With the default content-box sizing, the declared width and
              height refer primarily to the content area.
            </p>
          </>
        ),
      },

      {
        title: "Padding",
        content: (
          <>
            <p>
              Padding is the space between the content and the element's
              border.
            </p>

            <CodeBlock
              code={`.card {
  padding: 20px;
}`}
            />

            <p>
              Padding can be specified separately for each side.
            </p>

            <CodeBlock
              code={`.card {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}`}
            />
          </>
        ),
      },

      {
        title: "Border",
        content: (
          <>
            <p>
              A border surrounds the padding and content area.
            </p>

            <CodeBlock
              code={`.card {
  border: 2px solid #2563eb;
  border-radius: 12px;
}`}
            />

            <p>
              Borders can have different widths, styles, colors and corner
              radii.
            </p>
          </>
        ),
      },

      {
        title: "Margin",
        content: (
          <>
            <p>
              Margin creates space outside the border of an element.
            </p>

            <CodeBlock
              code={`.card {
  margin: 20px;
}`}
            />

            <p>
              Unlike padding, margin does not create space inside the element's
              border.
            </p>
          </>
        ),
      },

      {
        title: "Box Sizing",
        content: (
          <>
            <p>
              The <code>box-sizing</code> property controls how declared width
              and height are calculated.
            </p>

            <CodeBlock
              code={`* {
  box-sizing: border-box;
}`}
            />

            <p>
              With <code>border-box</code>, the declared width includes the
              content, padding and border.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "The box model contains content, padding, border and margin.",
      "Padding is inside the border.",
      "Margin is outside the border.",
      "Border surrounds the content and padding.",
      "border-box makes sizing easier to reason about.",
    ],

    mistakes: [
      "Confusing margin with padding.",
      "Forgetting that padding can affect element size.",
      "Ignoring box-sizing when calculating dimensions.",
      "Using negative margins without understanding their effects.",
    ],

    quiz: [
      {
        question: "Which area is outside the border?",
        options: ["Content", "Padding", "Margin", "Background"],
        answer: 2,
      },
      {
        question: "Which area is between content and border?",
        options: ["Margin", "Padding", "Outline", "Gap"],
        answer: 1,
      },
      {
        question: "What does border-box include in the declared width?",
        options: [
          "Only content",
          "Content and margin",
          "Content, padding and border",
          "Only border",
        ],
        answer: 2,
      },
    ],
  },

  {
    id: "colors-fonts-text",
    title: "Colors, Fonts & Text",
    icon: "✏️",
    description:
      "Learn how to style colors, typography, spacing and text presentation with CSS.",

    sections: [
      {
        title: "Colors",
        content: (
          <>
            <p>
              CSS supports different ways of specifying colors, including
              names, hexadecimal values, RGB, RGBA, HSL and HSLA.
            </p>

            <CodeBlock
              code={`p {
  color: #2563eb;
}

.card {
  background-color: rgb(245, 247, 250);
}`}
            />
          </>
        ),
      },

      {
        title: "Font Family",
        content: (
          <>
            <p>
              The <code>font-family</code> property controls which fonts are
              used for text.
            </p>

            <CodeBlock
              code={`body {
  font-family: Arial, sans-serif;
}

h1 {
  font-family: Georgia, serif;
}`}
            />

            <p>
              Providing fallback fonts helps browsers choose an available font.
            </p>
          </>
        ),
      },

      {
        title: "Font Size and Weight",
        content: (
          <>
            <CodeBlock
              code={`h1 {
  font-size: 32px;
  font-weight: 700;
}

p {
  font-size: 16px;
  font-weight: 400;
}`}
            />

            <p>
              Font weight controls how thick text appears. Common values
              include 400 for normal and 700 for bold.
            </p>
          </>
        ),
      },

      {
        title: "Text Alignment and Decoration",
        content: (
          <>
            <CodeBlock
              code={`h1 {
  text-align: center;
}

a {
  text-decoration: none;
}

p {
  text-decoration: underline;
}`}
            />

            <p>
              Text decoration can be used for underlines, line-through effects
              and other text decorations.
            </p>
          </>
        ),
      },

      {
        title: "Line Height and Letter Spacing",
        content: (
          <>
            <CodeBlock
              code={`p {
  line-height: 1.6;
  letter-spacing: 0.3px;
}`}
            />

            <p>
              Line height controls vertical space between lines of text.
              Letter spacing controls the space between characters.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "CSS supports multiple color formats.",
      "font-family controls the typeface.",
      "font-size controls text size.",
      "font-weight controls text thickness.",
      "line-height affects readability.",
    ],

    mistakes: [
      "Using poor color contrast.",
      "Using too many different fonts.",
      "Forgetting fallback fonts.",
      "Using fixed font sizes everywhere without considering responsiveness.",
    ],

    quiz: [
      {
        question: "Which property changes text color?",
        options: ["background", "font-color", "color", "text-color"],
        answer: 2,
      },
      {
        question: "Which property controls the typeface?",
        options: ["font-family", "font-style-name", "typeface", "font-type"],
        answer: 0,
      },
      {
        question: "Which property controls spacing between lines?",
        options: ["letter-spacing", "line-height", "word-spacing", "text-gap"],
        answer: 1,
      },
    ],
  },

  {
    id: "flexbox",
    title: "Flexbox",
    icon: "↔️",
    description:
      "Learn how to create flexible one-dimensional layouts using CSS Flexbox.",

    sections: [
      {
        title: "What is Flexbox?",
        content: (
          <>
            <p>
              <strong>Flexbox</strong> is a CSS layout system designed for
              arranging elements in a one-dimensional row or column.
            </p>

            <CodeBlock
              code={`.container {
  display: flex;
}`}
            />

            <p>
              The element with <code>display: flex</code> becomes a flex
              container, and its direct children become flex items.
            </p>
          </>
        ),
      },

      {
        title: "Flex Direction",
        content: (
          <>
            <p>
              <code>flex-direction</code> determines the main direction of
              flex items.
            </p>

            <CodeBlock
              code={`.container {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}`}
            />

            <p>
              Common values are <code>row</code>, <code>row-reverse</code>,
              <code>column</code> and <code>column-reverse</code>.
            </p>
          </>
        ),
      },

      {
        title: "Justify Content",
        content: (
          <>
            <p>
              <code>justify-content</code> controls alignment along the main
              axis.
            </p>

            <CodeBlock
              code={`.container {
  display: flex;
  justify-content: space-between;
}`}
            />

            <p>
              Common values include <code>flex-start</code>,
              <code>center</code>, <code>flex-end</code>,
              <code>space-between</code>, <code>space-around</code> and
              <code>space-evenly</code>.
            </p>
          </>
        ),
      },

      {
        title: "Align Items",
        content: (
          <>
            <p>
              <code>align-items</code> controls alignment along the cross
              axis.
            </p>

            <CodeBlock
              code={`.container {
  display: flex;
  align-items: center;
}`}
            />
          </>
        ),
      },

      {
        title: "Gap and Wrapping",
        content: (
          <>
            <p>
              The <code>gap</code> property creates consistent spacing between
              flex items.
            </p>

            <CodeBlock
              code={`.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}`}
            />

            <p>
              <code>flex-wrap: wrap</code> allows items to move onto additional
              lines when necessary.
            </p>
          </>
        ),
      },

      {
        title: "Flex Item Properties",
        content: (
          <>
            <p>
              Flex items can use properties such as <code>flex</code>,
              <code>flex-grow</code>, <code>flex-shrink</code> and
              <code>flex-basis</code>.
            </p>

            <CodeBlock
              code={`.item {
  flex: 1;
}`}
            />

            <p>
              A simple <code>flex: 1</code> setup often allows items to share
              available space.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "Flexbox is primarily a one-dimensional layout system.",
      "display: flex creates a flex container.",
      "justify-content controls the main axis.",
      "align-items controls the cross axis.",
      "gap provides spacing between items.",
    ],

    mistakes: [
      "Confusing the main axis with the cross axis.",
      "Using margin everywhere when gap would be clearer.",
      "Forgetting flex-wrap when content needs multiple lines.",
      "Expecting Flexbox to behave like a two-dimensional grid.",
    ],

    quiz: [
      {
        question: "How do you create a flex container?",
        options: [
          "display: flex",
          "position: flex",
          "layout: flex",
          "flex: container",
        ],
        answer: 0,
      },
      {
        question: "Which property controls the main axis?",
        options: ["align-items", "justify-content", "align-content", "gap"],
        answer: 1,
      },
      {
        question: "Which property creates spacing between flex items?",
        options: ["space", "margin-gap", "gap", "item-spacing"],
        answer: 2,
      },
    ],
  },

  {
    id: "css-grid",
    title: "CSS Grid",
    icon: "▦",
    description:
      "Learn how CSS Grid creates powerful two-dimensional layouts using rows and columns.",

    sections: [
      {
        title: "What is CSS Grid?",
        content: (
          <>
            <p>
              <strong>CSS Grid</strong> is a two-dimensional layout system
              designed for working with rows and columns.
            </p>

            <CodeBlock
              code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`}
            />
          </>
        ),
      },

      {
        title: "Grid Columns",
        content: (
          <>
            <p>
              <code>grid-template-columns</code> defines the columns in a grid.
            </p>

            <CodeBlock
              code={`.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
}`}
            />

            <p>
              The <code>fr</code> unit represents a fraction of the available
              grid space.
            </p>
          </>
        ),
      },

      {
        title: "Grid Rows",
        content: (
          <>
            <CodeBlock
              code={`.container {
  display: grid;
  grid-template-rows: 100px 200px;
}`}
            />

            <p>
              Rows can be explicitly sized using pixels, percentages,
              fractional units and other CSS sizing functions.
            </p>
          </>
        ),
      },

      {
        title: "Gap",
        content: (
          <>
            <p>
              The <code>gap</code> property creates spacing between grid
              tracks.
            </p>

            <CodeBlock
              code={`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`}
            />
          </>
        ),
      },

      {
        title: "Grid Areas",
        content: (
          <>
            <p>
              Grid areas allow you to name parts of a layout and place
              elements into those areas.
            </p>

            <CodeBlock
              code={`.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}`}
            />
          </>
        ),
      },

      {
        title: "Responsive Grid",
        content: (
          <>
            <p>
              CSS functions such as <code>repeat()</code>,
              <code>minmax()</code> and <code>auto-fit</code> are useful for
              responsive grids.
            </p>

            <CodeBlock
              code={`.cards {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "Grid is a two-dimensional layout system.",
      "Grid works with rows and columns.",
      "fr represents a fraction of available space.",
      "gap creates space between grid tracks.",
      "Grid areas can make complex layouts easier to understand.",
    ],

    mistakes: [
      "Using Grid for every simple one-dimensional layout.",
      "Forgetting that Grid has both rows and columns.",
      "Creating fixed layouts that do not adapt to smaller screens.",
      "Overcomplicating grid-template-areas.",
    ],

    quiz: [
      {
        question: "CSS Grid is primarily what type of layout system?",
        options: [
          "One-dimensional",
          "Two-dimensional",
          "Text-only",
          "Animation-only",
        ],
        answer: 1,
      },
      {
        question: "What does 1fr represent?",
        options: [
          "One fixed pixel",
          "One font size",
          "A fraction of available space",
          "One row",
        ],
        answer: 2,
      },
      {
        question: "Which property creates spacing between grid items?",
        options: ["gap", "space", "grid-space", "track-margin"],
        answer: 0,
      },
    ],
  },

  {
    id: "positioning",
    title: "Positioning",
    icon: "📍",
    description:
      "Learn how static, relative, absolute, fixed and sticky positioning affect element placement.",

    sections: [
      {
        title: "Static Positioning",
        content: (
          <>
            <p>
              The default position value is <code>static</code>. Static
              elements follow the normal document flow.
            </p>

            <CodeBlock
              code={`.box {
  position: static;
}`}
            />

            <p>
              Top, right, bottom and left generally do not reposition a static
              element.
            </p>
          </>
        ),
      },

      {
        title: "Relative Positioning",
        content: (
          <>
            <p>
              Relative positioning keeps the element in the normal flow but
              allows it to be visually offset from its original position.
            </p>

            <CodeBlock
              code={`.box {
  position: relative;
  top: 10px;
  left: 20px;
}`}
            />
          </>
        ),
      },

      {
        title: "Absolute Positioning",
        content: (
          <>
            <p>
              An absolutely positioned element is removed from normal flow
              and positioned relative to an appropriate positioned ancestor.
            </p>

            <CodeBlock
              code={`.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}`}
            />

            <p>
              Making the parent <code>position: relative</code> is a common
              pattern when positioning a child inside it.
            </p>
          </>
        ),
      },

      {
        title: "Fixed Positioning",
        content: (
          <>
            <p>
              Fixed positioning places an element relative to the viewport.
              It normally stays in place while the page scrolls.
            </p>

            <CodeBlock
              code={`.help-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}`}
            />
          </>
        ),
      },

      {
        title: "Sticky Positioning",
        content: (
          <>
            <p>
              Sticky positioning behaves like normal flow until a specified
              scrolling threshold is reached.
            </p>

            <CodeBlock
              code={`.navbar {
  position: sticky;
  top: 0;
}`}
            />
          </>
        ),
      },

      {
        title: "Z-Index",
        content: (
          <>
            <p>
              <code>z-index</code> can control the stacking order of positioned
              elements and other elements participating in stacking contexts.
            </p>

            <CodeBlock
              code={`.modal {
  position: fixed;
  z-index: 1000;
}`}
            />

            <p>
              A higher z-index does not always guarantee that an element
              appears above everything else because stacking contexts affect
              the result.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "Static is the default positioning mode.",
      "Relative keeps an element in normal flow.",
      "Absolute removes an element from normal flow.",
      "Fixed positions an element relative to the viewport.",
      "Sticky combines normal flow with scroll-based positioning.",
    ],

    mistakes: [
      "Using absolute positioning for entire page layouts.",
      "Forgetting to establish a positioned ancestor.",
      "Assuming z-index always solves stacking problems.",
      "Using fixed elements without considering mobile screens.",
    ],

    quiz: [
      {
        question: "What is the default position value?",
        options: ["relative", "absolute", "static", "fixed"],
        answer: 2,
      },
      {
        question: "Which positioning mode is commonly used for a badge inside a card?",
        options: ["absolute", "static", "fixed", "inherit"],
        answer: 0,
      },
      {
        question: "Which positioning mode is relative to the viewport?",
        options: ["relative", "absolute", "fixed", "static"],
        answer: 2,
      },
    ],
  },

  {
    id: "responsive-design",
    title: "Responsive Design",
    icon: "📱",
    description:
      "Learn how to build websites that adapt to different screen sizes and devices.",

    sections: [
      {
        title: "What is Responsive Design?",
        content: (
          <>
            <p>
              Responsive design means creating interfaces that adapt to
              different screen sizes, orientations and devices.
            </p>

            <p>
              A responsive website should remain usable on phones, tablets,
              laptops and larger displays.
            </p>

            <div className="lesson-note">
              <strong>Goal:</strong> The user should not need to zoom,
              horizontally scroll unnecessarily or fight the layout.
            </div>
          </>
        ),
      },

      {
        title: "Flexible Widths",
        content: (
          <>
            <p>
              Avoid making every element depend on rigid fixed widths.
              Relative units and flexible layouts are often more adaptable.
            </p>

            <CodeBlock
              code={`.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}`}
            />
          </>
        ),
      },

      {
        title: "Responsive Images",
        content: (
          <>
            <p>
              Images should generally be prevented from overflowing their
              containers.
            </p>

            <CodeBlock
              code={`img {
  max-width: 100%;
  height: auto;
}`}
            />

            <p>
              This allows an image to shrink when its container becomes
              smaller.
            </p>
          </>
        ),
      },

      {
        title: "Flexible Layouts",
        content: (
          <>
            <p>
              Flexbox and Grid are especially useful for responsive layouts.
            </p>

            <CodeBlock
              code={`.cards {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}`}
            />
          </>
        ),
      },

      {
        title: "Mobile-First Thinking",
        content: (
          <>
            <p>
              A mobile-first approach starts with a layout suitable for small
              screens and then enhances it for larger screens.
            </p>

            <CodeBlock
              code={`.navigation {
  display: block;
}

@media (min-width: 768px) {
  .navigation {
    display: flex;
  }
}`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "Responsive design adapts to different screens.",
      "Flexible layouts are usually better than rigid fixed layouts.",
      "Images should adapt to their containers.",
      "Flexbox and Grid are useful for responsive interfaces.",
      "Mobile-first development starts with smaller screens.",
    ],

    mistakes: [
      "Designing only for desktop.",
      "Using fixed widths everywhere.",
      "Ignoring horizontal overflow.",
      "Testing only on one screen size.",
    ],

    quiz: [
      {
        question: "What is the main goal of responsive design?",
        options: [
          "Only support desktop",
          "Adapt the layout to different screens",
          "Remove CSS",
          "Make every element fixed",
        ],
        answer: 1,
      },
      {
        question: "Which property helps prevent images from overflowing?",
        options: ["width: fixed", "max-width: 100%", "overflow: hidden", "image-fit"],
        answer: 1,
      },
      {
        question: "What does mobile-first mean?",
        options: [
          "Only build mobile apps",
          "Start design with smaller screens",
          "Remove desktop support",
          "Use JavaScript instead of CSS",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "media-queries",
    title: "Media Queries",
    icon: "🖥️",
    description:
      "Learn how CSS media queries apply different styles based on device and viewport conditions.",

    sections: [
      {
        title: "What are Media Queries?",
        content: (
          <>
            <p>
              Media queries allow CSS to apply styles only when certain
              conditions are true.
            </p>

            <CodeBlock
              code={`@media (max-width: 768px) {
  body {
    font-size: 15px;
  }
}`}
            />
          </>
        ),
      },

      {
        title: "Max-Width Queries",
        content: (
          <>
            <p>
              A max-width query applies styles when the viewport is at or below
              a particular width.
            </p>

            <CodeBlock
              code={`@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`}
            />
          </>
        ),
      },

      {
        title: "Min-Width Queries",
        content: (
          <>
            <p>
              A min-width query applies styles when the viewport is at least a
              particular width.
            </p>

            <CodeBlock
              code={`@media (min-width: 768px) {
  .navigation {
    display: flex;
  }
}`}
            />
          </>
        ),
      },

      {
        title: "Combining Conditions",
        content: (
          <>
            <p>
              Multiple media conditions can be combined using logical
              operators.
            </p>

            <CodeBlock
              code={`@media (min-width: 600px) and (max-width: 1000px) {
  .container {
    padding: 30px;
  }
}`}
            />
          </>
        ),
      },

      {
        title: "Practical Responsive Example",
        content: (
          <>
            <CodeBlock
              code={`.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`}
            />

            <p>
              This creates three columns on larger screens, two on medium
              screens and one on smaller screens.
            </p>
          </>
        ),
      },
    ],

    keyPoints: [
      "Media queries apply CSS conditionally.",
      "max-width targets smaller viewport ranges.",
      "min-width is useful for mobile-first enhancements.",
      "Multiple conditions can be combined.",
      "Media queries are important for responsive design.",
    ],

    mistakes: [
      "Adding too many arbitrary breakpoints.",
      "Testing only at the exact breakpoint widths.",
      "Writing contradictory media query rules.",
      "Forgetting that media queries can affect existing styles through the cascade.",
    ],

    quiz: [
      {
        question: "What does a media query do?",
        options: [
          "Runs JavaScript",
          "Conditionally applies CSS",
          "Creates HTML",
          "Deletes CSS",
        ],
        answer: 1,
      },
      {
        question: "Which condition targets screens up to a maximum width?",
        options: ["min-width", "max-width", "screen-width", "width-max"],
        answer: 1,
      },
      {
        question: "Which approach is commonly associated with mobile-first CSS?",
        options: [
          "Start with min-width enhancements",
          "Start only with desktop",
          "Avoid media queries",
          "Use only fixed widths",
        ],
        answer: 0,
      },
    ],
  },

  {
    id: "transitions-animations",
    title: "Transitions & Animations",
    icon: "✨",
    description:
      "Learn how to create smooth visual changes and animations using CSS.",

    sections: [
      {
        title: "CSS Transitions",
        content: (
          <>
            <p>
              CSS transitions create smooth changes between property values
              instead of changing them instantly.
            </p>

            <CodeBlock
              code={`.button {
  background: #2563eb;
  transition: background 0.3s ease;
}

.button:hover {
  background: #1d4ed8;
}`}
            />
          </>
        ),
      },

      {
        title: "Transition Properties",
        content: (
          <>
            <p>
              The <code>transition</code> shorthand can specify the property,
              duration, timing function and delay.
            </p>

            <CodeBlock
              code={`.card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}`}
            />
          </>
        ),
      },

      {
        title: "CSS Keyframe Animations",
        content: (
          <>
            <p>
              Keyframes define the stages of a CSS animation.
            </p>

            <CodeBlock
              code={`@keyframes slideIn {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}`}
            />
          </>
        ),
      },

      {
        title: "Applying Animations",
        content: (
          <>
            <CodeBlock
              code={`.card {
  animation:
    slideIn 0.5s ease-out;
}`}
            />

            <p>
              Animation properties can also control iteration count, direction,
              delay, fill mode and more.
            </p>
          </>
        ),
      },

      {
        title: "Hover Effects",
        content: (
          <>
            <CodeBlock
              code={`.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}`}
            />

            <p>
              Small hover effects can improve interaction feedback, but
              animations should not distract users from the content.
            </p>
          </>
        ),
      },

      {
        title: "Reduced Motion",
        content: (
          <>
            <p>
              Some users prefer reduced motion. CSS can respect this preference
              using the <code>prefers-reduced-motion</code> media feature.
            </p>

            <CodeBlock
              code={`@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto;
    animation-duration: 0.01ms;
    transition-duration: 0.01ms;
  }
}`}
            />
          </>
        ),
      },
    ],

    keyPoints: [
      "Transitions create smooth changes between states.",
      "Animations can be defined using @keyframes.",
      "The transition property controls animated state changes.",
      "Hover effects can provide useful feedback.",
      "Respecting reduced-motion preferences improves accessibility.",
    ],

    mistakes: [
      "Animating too many properties.",
      "Using excessive or distracting animations.",
      "Ignoring reduced-motion preferences.",
      "Using animations when a simple transition would be enough.",
    ],

    quiz: [
      {
        question: "Which CSS feature creates smooth changes between states?",
        options: ["transition", "transform-only", "smooth", "change"],
        answer: 0,
      },
      {
        question: "Which rule defines animation stages?",
        options: ["@animation", "@frames", "@keyframes", "@motion"],
        answer: 2,
      },
      {
        question: "Which media feature respects a user's motion preference?",
        options: [
          "prefers-motion",
          "prefers-reduced-motion",
          "reduce-animation",
          "motion-disabled",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "css-architecture",
    title: "CSS Architecture",
    icon: "🏗️",
    description:
      "Learn how to organize CSS so that large projects remain maintainable, reusable and predictable.",

    sections: [
      {
        title: "Why CSS Architecture Matters",
        content: (
          <>
            <p>
              Small projects can work with simple CSS, but larger applications
              need a clear strategy for organizing styles.
            </p>

            <p>
              Good CSS architecture helps prevent conflicts, duplication and
              unexpected styling behavior.
            </p>

            <div className="lesson-note">
              <strong>Goal:</strong> Make styles easy to understand, reuse,
              modify and debug.
            </div>
          </>
        ),
      },

      {
        title: "Reusable Classes",
        content: (
          <>
            <p>
              Reusable classes allow common styling patterns to be shared
              across multiple elements.
            </p>

            <CodeBlock
              code={`.button {
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
}

.button-primary {
  background: #2563eb;
  color: white;
}`}
            />
          </>
        ),
      },

      {
        title: "Naming Conventions",
        content: (
          <>
            <p>
              Consistent naming makes CSS easier to understand. One commonly
              used methodology is <strong>BEM</strong>.
            </p>

            <CodeBlock
              code={`.card {}
.card__title {}
.card__button {}
.card--featured {}`}
            />

            <p>
              You do not have to use BEM everywhere, but consistent naming is
              valuable.
            </p>
          </>
        ),
      },

      {
        title: "Avoiding Excessive Specificity",
        content: (
          <>
            <p>
              Highly specific selectors can make CSS difficult to override.
            </p>

            <CodeBlock
              code={`/* Harder to maintain */
.page .content .card div h2 {
  color: blue;
}

/* Usually easier */
.card-title {
  color: blue;
}`}
            />

            <p>
              Prefer simple, purposeful selectors when possible.
            </p>
          </>
        ),
      },

      {
        title: "CSS Variables",
        content: (
          <>
            <p>
              CSS custom properties allow reusable values to be defined in one
              place.
            </p>

            <CodeBlock
              code={`:root {
  --primary-color: #2563eb;
  --spacing: 20px;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing);
}`}
            />
          </>
        ),
      },

      {
        title: "Organizing Styles",
        content: (
          <>
            <p>
              Large applications can separate styles into logical areas such
              as global styles, components, layouts and utilities.
            </p>

            <CodeBlock
              code={`styles/
├── globals.css
├── variables.css
├── components.css
├── layout.css
└── utilities.css`}
            />

            <p>
              The exact structure depends on the project. The important idea is
              to keep related styles organized and predictable.
            </p>
          </>
        ),
      },

      {
        title: "Maintainable CSS",
        content: (
          <>
            <ul>
              <li>Prefer reusable patterns.</li>
              <li>Keep selectors reasonably simple.</li>
              <li>Use meaningful names.</li>
              <li>Avoid unnecessary duplication.</li>
              <li>Use variables for repeated design values.</li>
              <li>Keep component styles close to their components when appropriate.</li>
            </ul>
          </>
        ),
      },
    ],

    keyPoints: [
      "CSS architecture becomes important as projects grow.",
      "Reusable classes reduce duplication.",
      "Consistent naming improves maintainability.",
      "Avoid unnecessarily high selector specificity.",
      "CSS variables are useful for shared design values.",
    ],

    mistakes: [
      "Writing highly specific selectors everywhere.",
      "Duplicating the same styles across many classes.",
      "Using unclear class names.",
      "Creating a huge CSS file with no organization.",
    ],

    quiz: [
      {
        question: "Why is CSS architecture important?",
        options: [
          "It removes HTML",
          "It makes large CSS codebases easier to maintain",
          "It replaces JavaScript",
          "It prevents all browser bugs",
        ],
        answer: 1,
      },
      {
        question: "What does BEM help with?",
        options: [
          "Database design",
          "CSS naming and organization",
          "JavaScript execution",
          "Image compression",
        ],
        answer: 1,
      },
      {
        question: "Which feature creates reusable CSS values?",
        options: [
          "CSS variables",
          "HTML attributes",
          "JavaScript constants only",
          "Media tags",
        ],
        answer: 0,
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

function CSS({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-css", subtopics);
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
            ← Back to CSS
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
                  CSS • Lesson {selectedIndex + 1} of {subtopics.length}
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
          🎨 CSS
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn how to style websites and create responsive user interfaces.
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
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => openSubtopic(subtopic)}
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "18px",
                    ...buttonStyle(
                      isCompleted ? "#16a34a" : "#2563eb"
                    ),
                  }}
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

export default CSS;