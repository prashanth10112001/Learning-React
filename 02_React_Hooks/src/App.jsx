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
