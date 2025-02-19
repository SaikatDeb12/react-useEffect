import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, onchange] = useState(0);
  useEffect(() => {
    const ref = document.querySelector("#heading");
    const ref2 = document.getElementById("heading");

    ref.addEventListener("click", () => {
      ref.style.color = "blue";
    });
    document.getElementById("heading").style.backgroundColor = "red";
  });
  return (
    <div>
      <button onClick={() => onchange(value + 1)}>Inc</button>
      <button onClick={() => onchange(value - 1)}>Desc</button>

      <h1 id="heading">Hello</h1>
    </div>
  );
}

export default App;
