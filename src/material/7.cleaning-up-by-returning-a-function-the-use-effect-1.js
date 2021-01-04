import React, { useState, useEffect } from "react"; // include useEffect

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  useEffect(() => {
    console.log(`I'm inside useEffect function, ${count}`);

    // The useEffect return runs after the next time that use effect runs => to clear the setup from the previous time it ran
    // and then set it up again by rerunning a line.
    return () => {
      console.log(
        `I'm removing anything that is set above. the last count was ${count}`
      );
    };
  });

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Increase</button>
      <button onClick={handleReset}>Increase</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
