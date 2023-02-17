import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [sum, setSum] = useState(0);
  const [multiply, setMultiply] = useState(0);

  const handleSum = () => {
    setSum(number1 + number2);
  };
  const handleMultiply = () => {
    setMultiply(number1 * number2);
  };

  return (
    <div>
      <div>
        <input type="number" value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
        <input type="number" value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={handleSum}>Sum</button>
        <button onClick={handleMultiply}>Multiply</button>
      </div>
      <div>
        <p>Sum: {sum}</p>
        <p>Multiply: {multiply}</p>
      </div>
    </div>
  );
};

export default App;
