# WELCOME TO LEARN REACT

## This is the Second app for learning React hooks - 😉

## Step - 1

1. Lets start by creating the Order.jsx component.
   **FILE:**`Order.jsx`

```javascript
import Pizza from "./Pizza";

export default function Order() {
  const pizzaType = "pepperoni";
  const pizzaSize = "M";
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType}>
              <option value="peperroni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to cart</button>
          <div className="order-pizza">
            <Pizza
              name="Pepperoni"
              description="another pep pizza"
              image="/public/pizzas/pepperoni.webp"
            />
            <p>$13.3</p>
          </div>
        </div>
      </form>
    </div>
  );
}
```

2. Now according to this we change the App.jsx

```javascript
import Pizza from "./Pizza";
import Order from "./Order";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Padro Gino's - Order Now</h1>
      {/* <Pizza
        name="Peperroni"
        description="pep, cheese , n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Cheesy"
        description="Cheesy marshmallow, cheese , n stuff"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Chicken Loaded"
        description="more chicken , n stuff"
        image={"/public/pizzas/big_meat.webp"}
      /> */}
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); // create an instance of the component
```

| Question                                                                                              | Answer                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. What is the primary purpose of Hooks in React?                                                     | `Hooks are used to introduce interactivity, side effects, or additional functionality to React components`                                                  |
| 2. Why is it important to keep the function body of a React component performant?                     | `Because the function body gets run multiple times during rendering, and heavy computations can cause performance issues and 'jank' in the user interface.` |
| 3. What is a key consideration when handling variables or effects in a React component's render path? | `Ensure that the component always produces the same markup given the same inputs, regardless of when it is rendered`                                        |
| 4. What is the difference between using an arrow function and a named function for a React component? | `A named function will show up in stack traces during debugging, making it easier to identify the source of errors`                                         |
| 5. What is the purpose of the value attribute in a form input element in React?                       | `The value attribute sets the current value of the input element to match the component's state, enabling controlled form inputs`                           |

## Step - 2

1. Used the React Hook `useState()` in this Order.jsx
   **FILE:**`src/Order.jsx`

```javascript
import Pizza from "./Pizza";
import { useState } from "react";

export default function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => {
                setPizzaType(e.target.value);
              }}
              name="pizza-type"
              value={pizzaType}
            >
              <option value="peperroni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => {
                    setPizzaSize(e.target.value);
                  }}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => {
                    setPizzaSize(e.target.value);
                  }}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => {
                    setPizzaSize(e.target.value);
                  }}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to cart</button>
          <div className="order-pizza">
            <Pizza
              name="Pepperoni"
              description="another pep pizza"
              image="/public/pizzas/pepperoni.webp"
            />
            <p>$13.3</p>
          </div>
        </div>
      </form>
    </div>
  );
}
```

| Question                                                                     | Answer                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. What is the main characteristic of two-way data binding in React?         | `Two-way data binding is not free in React. Components do not automatically update when user interactions occur, requiring explicit state management to reflect changes.`                                                                                                                 |
| 2. What is a hook in React, and what is the most common hook?                | `A hook is a special function in React that allows functional components to use state and other React features. useState is the most common hook, which returns an array with the current state value and a function to update that state.`                                               |
| 3. What are the key rules for using hooks in React?                          | `Hooks must be called in the same order every time and cannot be placed inside conditionals, loops, or other control structures. They should always be called at the top level of a component.`                                                                                           |
| 4. How does useState work when declaring state in a React component?         | `useState is called with a default value and returns an array with two elements: the current state value and a setter function to update that state. For example, const [pizzaType, setPizzaType] = useState('pepperoni') creates a state variable with an initial value of 'pepperoni'.` |
| 5. What is the purpose of the onChange event handler in React form elements? | `The onChange event handler allows updating the component's state when a user interacts with a form element, triggering a re-render and ensuring the component's state reflects the user's input.`                                                                                        |
