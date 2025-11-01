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
