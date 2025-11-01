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
