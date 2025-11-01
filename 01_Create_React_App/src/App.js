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
