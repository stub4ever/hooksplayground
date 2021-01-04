import React, { useState, useEffect } from "react"; // include useEffect

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  useEffect(() => {
    console.log(`I'm inside useEffect function, ${count}`);

    // It cleans up effects from the previous render it takes that cued up return function
    // This is why react also cleans up the effects from the previous render before running the effects next time.
    return () => {
      console.log(
        `I'm removing anything that is set above. the last count was ${count}`
      );
    };
  }, []); // add a array as our second agrument

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Increase</button>
      <button onClick={handleReset}>Increase</button>
      <h1>{count}</h1>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Show / hide the Counter component
      </button>
      {visible && <Counter />}
    </div>
  );
}

export default App;
