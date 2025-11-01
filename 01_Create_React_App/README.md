# WELCOME TO LEARN REACT

## This is the first app that we are going to build from scratch - 😉

## Step - 1

1. Create an `index.html` file in a folder.
2. Then make a div tag with `root`.
3. Then add the script tags to create our index.html.

**File:** `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>First React App</title>
  </head>
  <body>
    <div id="root">Hi there</div>
    <!-- React development version -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <!-- ReactDOM development version -->
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
  </body>
</html>
```

4. To start the server we have to type this command in the terminal `npx serve`, then click ok to install required packages.

5. Now create an `App.js` component inside `src` folder which is `./src/App.js`.

**File:** `src/App.js`

```javascript
const App = () => {
  return React.createElement(
    "div", // tags
    {}, // This is for attributes id,class,style,hover
    React.createElement("h1", {}, "This is prashanth"), // element
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); // create an instance of the component
```

6. This is for all for now for creating an App component.

| Question                                                                   | Answer                                                                                                                |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1. What package provides access to DOM and server renders for React?       | `React-DOM`                                                                                                           |
| 2. What method is used to create a root for rendering a React application? | `ReactDOM.createRoot()`                                                                                               |
| 3. How can you create a HTML5 document quickly in VS Code?                 | using emmet shortcut `html:5` -> Then press `Tab`                                                                     |
| 4. What is the primary purpose of `React.createElement()`?                 | `To create and stamp out a resuable component instance, similar to creating a stamp that can be used multiple times.` |
| 5. What is the purpose of having both React and ReactDOM packages?         | `React handles universal interface, ReactDOM handles browser rendering.`                                              |
| 6. How can you create a basic React component without using JSX?           | `Use React.createElement(type, props, children)`                                                                      |
| 7. What is the primary purpose of `ReactDOM.createRoot()`?                 | `Prepare a DOM container for React rendering`                                                                         |

## Step - 2

1. You can not only create components but also send the `props` and `attributes` like.

```javascript
React.createElement(Pizza, { name: "masala", style: { color: "grey" } }),
```

2. Now we create another component pizza whick takes name as a prop and also we give styles.

**FILE:** `src/App.js`

```javascript
const Pizza = (props) => {
  return React.createElement("div", { style: props.style }, [
    React.createElement("h1", {}, `This is ${props.name} Chicken Macroni`),
    React.createElement("p", {}, "With extra toppings and cheeze."),
  ]);
};

const App = () => {
  return React.createElement(
    "div", // tags
    {}, // This is for attributes id,class,style,hover
    [
      React.createElement("h1", {}, "Pizza Mania"),
      React.createElement(Pizza, {
        name: "spicy",
        style: { color: "pink" },
      }),
      React.createElement(Pizza, { name: "masala", style: { color: "grey" } }),
      React.createElement(Pizza, {
        name: "crispy",
        style: { color: "skyblue" },
      }),
    ],
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); // create an instance of the component
```

3. This is the end of using `npx serve`.

| Question                                                         | Answer                                                                                                                                                                                                    |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. How can you return multiple top-level React components?       | `using an array [] or by passing mutliple parameters to React.creatElement() function`                                                                                                                    |
| 2. What are props in React?                                      | `Props stand for properties and are a way to pass data and configuration to a React component, allowing components to be more flexible and reusable.`                                                     |
| 3. What happens when React renders a string versus a function    | `when a string is rendered, it outputs that string directly to the DOM as a node. when a function or React component is rendered, React attempts to execute and render that function.`                    |
| 4. What is the key concept behind React's component design?      | `React combines the model, view, and view model into a single component, encapsulating all logic for a small piece of functionality in one place`                                                         |
| 5. How can you pass additional information to a React component? | `You can pass additional information to a React component by providing an object with properties when creating the element, which can then be accessed via the props parameter in the component function` |
| 6. How can React components return multiple top-level elements?  | `By wrapping elements in an array`                                                                                                                                                                        |
| 7. How does React handle rendering different types of elements?  | `Strings are rendered as DOM nodes, functions as components`                                                                                                                                              |
| 8. What is a key advantage of React's component approach?        | `Encapsulating logic for small, reusable pieces of UI`                                                                                                                                                    |

## Step - 3

1. Now lets start with using `npm` by nodejs by installing NodeJS and install some tools.

2. Now in fresh terminal type the command `npm init -y` -> _which creates the package.json file_

3. You can download the extension in VS Code `pretteir` or you can create a file named

**FILE:** `pretteirrc`

```html
{}
```

4. In the package.json add the field `format` and also install `dev-dependency` -> `npm i -D prettier`

```json
{
  "name": "01_create_react_app",
  "version": "1.0.0",
  "description": "A new create App component",
  "main": "index.js",
  "scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx,css,ts,tsx,html}\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "prettier": "^3.6.2"
  }
}
```

| Question             | Answer                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. What does npm do? | `npm is the package manager for Node.js that allows installation of packages from the npm registry, manages project dependencies, and enables commands like npm run and npm install` |

## Step - 4

1. Now lets learn tool `eslint` -> which is helpful to find the bugs and globals and unchecked variables and etc.

2. To install we use

```
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier globals
```

3. Now to cionfigure the eslint with our files we create a file named
   **FILE:** `eslint.config.mjs`

```javascript
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  prettier,
];
```

4. Now to use the provided eslint we add a field in the scripts of package.json as

```
 "scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx,css,ts,tsx,html}\"",
    "lint": "eslint",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

5. To check how it runs we use command `npm run lint`.

| Question                                                                                  | Answer                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. What is the key difference between ESLint and Prettier?                                | `ESLint focuses on semantics, syntax, and code content with enforced rules, while Prettier is solely about code formatting and white space placement.`                                    |
| 2. What is the purpose of adding browser and node globals in an ESLint configuration?     | `Adding browser and node globals allows ESLint to recognize and validate global objects like 'window' or 'document' without triggering undefined variable warnings.`                      |
| 3. Why is the Prettier configuration always placed last in an ESLint configuration array? | `The Prettier configuration is always placed last because it only turns off formatting checks and does not add any new rules, preventing ESLint from yelling about formatting issues.`    |
| 4. What does the --fix flag do when running ESLint?                                       | `The --fix flag automatically corrects certain linting errors that can be fixed programmatically, transforming code to meet linting standards.                                          ` |
| 5. What is the recommended ESLint configuration for most projects?                        | `The .configs.recommended configuration provides a small subset of non-controversial ESLint rules that are purely value-adding and generally safe to use.`                                |

## Step - 5

1. Add a file named `.gitignore` -> which not pushes the files with extensions provided in this file.

| Question                                                                           | Answer                                                                                                                                                            |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. What is the purpose of adding '.DS_Store' to a gitignore file?                  | `It's an auto-generated file by Mac OS that tracks file positioning in Mac OS Windows, and should be ignored to prevent unnecessary tracking in version control.` |
| 2. Why should 'node_modules' be added to a gitignore file?                         | `Node_modules should be ignored because they can be reinstalled via npm install and don't need to be tracked in version control`                                  |
| 3. What common files or directories should typically be added to a gitignore file? | `Common items include: .DS_Store, node_modules, dist, .env, coverage, and potentially .vscode directory`                                                          |
| 4. What command is used to initialize a new Git repository?                        | `git init`                                                                                                                                                        |
| 5. What is the purpose of a .env file in a project?                                | `A .env file typically contains environment-specific configuration and sensitive information, and should be ignored in version control for security reasons`      |

## Step - 5

1. Let's learn about `vite`.

2. Install manually by command `npm install -D vite @vitejs/plugin-react`

3. Remove these tags

```html
<!-- React development version -->
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<!-- ReactDOM development version -->
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

4. In the script tag add the attribute `"type"="module"`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>First React App</title>
  </head>
  <body>
    <div id="root">Hi there</div>
    <script type="module" src="./src/App.js"></script>
  </body>
</html>
```

5. Create a file
   **FILE:** `vite.config.js`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

6. Install the `react` and `react-dom` through commands
   `npm install react react-dom`

7. Then use in the App.js
   **FILE:** `App.js`

```javascript
import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", { style: props.style }, [
    React.createElement("h1", {}, `This is ${props.name} Chicken Macroni`),
    React.createElement("p", {}, "With extra toppings and cheeze."),
  ]);
};

const App = () => {
  return React.createElement(
    "div", // tags
    {}, // This is for attributes id,class,style,hover
    [
      React.createElement("h1", {}, "Pizza Mania"),
      React.createElement(Pizza, {
        name: "spicy",
        style: { color: "pink" },
      }),
      React.createElement(Pizza, { name: "masala", style: { color: "grey" } }),
      React.createElement(Pizza, {
        name: "crispy",
        style: { color: "skyblue" },
      }),
    ],
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App)); // create an instance of the component
```

8. In the package.json update these fields
   **FILE:** `package.json`

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "format": "prettier --write \"src/**/*.{js,jsx,css,ts,tsx,html}\"",
    "lint": "eslint",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
```

9. To run the app we use command `npm run dev`

| Question                                                                                 | Answer                                                                                                        |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1. What is Vite's underlying bundler?                                                    | `Rollup, with plans to transition to Rolldown, a Rust-based bundler for JavaScript.`                          |
| 2. What are the two minimum requirements to get started with Vite?                       | `vite@5.4.2 and @vitejs/plugin-react`                                                                         |
| 3. What attribute must be added to the script tag in index.html when using Vite?         | `type="module"`                                                                                               |
| 4. What three commands are typically added to the package.json scripts section for Vite? | `dev (runs development server), build (creates production assets), preview (serves production build locally)` |
| 5. What is the specific import path for createRoot in React 18?                          | `react-dom/client`                                                                                            |

## Step - 6

1. Lets use `JSX` in our files.

2. Lets make a component for Pizza and move the code to there,
   **FILE:**`src/Pizza.jsx`

```javascript
const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Pizza;
```

3. Now to import the Pizza component in our App.js file
   **FILE:**`App.js`

```javascript
import React from "react";
import Pizza from "./Pizza";
import { createRoot } from "react-dom/client";

const App = () => {
  return React.createElement(
    "div", // tags
    {}, // This is for attributes id,class,style,hover
    [
      React.createElement("h1", {}, "Pizza Mania"),
      React.createElement(Pizza, {
        name: "spicy",
        description: "Hot and spicy",
        style: { color: "pink" },
      }),
      React.createElement(Pizza, {
        name: "masala",
        description: "Crispy and crunchy",
        style: { color: "grey" },
      }),
      React.createElement(Pizza, {
        name: "crispy",
        description: "Very popular",
        style: { color: "skyblue" },
      }),
    ],
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App)); // create an instance of the component
```

| Question                                                                           | Answer                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. What is the purpose of using curly braces {} in JSX?                            | `Curly braces allow you to embed any JavaScript expression within JSX, such as calling methods on props (like props.name.toLocaleUpperCase()) or inserting dynamic values.`                                 |
| 2. Why is className used instead of class in JSX?                                  | `The word class is a reserved keyword in JavaScript for defining classes, so React uses className to avoid syntax conflicts and align with the JavaScript DOM API's naming convention.`                     |
| 3. What is the difference between default and named exports in JavaScript modules? | `A default export can be imported without curly braces and is typically used for a single primary export per file, while named exports require curly braces and allow multiple exports from the same file.` |
| 4. What transformation happens when writing JSX?                                   | `JSX is transformed into React.createElement() calls during the build process, effectively creating a thin layer on top of JavaScript that allows writing HTML-like syntax in JavaScript.`                  |
| 5. What is the recommended syntax for returning JSX in a component?                | `Use parentheses () when returning JSX to ensure proper line breaks and readability, allowing multi-line JSX without additional syntax complications.`                                                      |

## Step - 7

1. Let's configure the ESLint for JSX.

2. Install through this command `npm install -D eslint-plugin-react`.

3. Now lets configure our eslint
   **FILE:**`eslint.config.mjs`

```javascript
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */

export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat("jsx-runtime"),
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescapped-entities": "off",
      "react/prop-types": "off",
    },
  },
  prettier,
];
```

4. Now change the App.js to -> `App.jsx`

```javascript
import Pizza from "./Pizza";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Padro Gino's - Order Now</h1>
      <Pizza name="Peperroni" description="pep, cheese , n stuff" />
      <Pizza name="Cheesy" description="Cheesy marshmallow, cheese , n stuff" />
      <Pizza name="Chicken Loaded" description="more chicken , n stuff" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); // create an instance of the component
```
