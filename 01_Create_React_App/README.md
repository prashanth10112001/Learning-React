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
