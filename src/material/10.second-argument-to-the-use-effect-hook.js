import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("salmon");

  useEffect(() => {
    console.log(
      `I'm inside the useEffect function! The current count is ${count}`
    );
    return () => {
      console.log("I'm removing anything that was set up above!");
    };
    // This only runs the side effect if the count state changes
    // }, [count]);

    // This only runs the side effect if the color state changes
    // }, [color]);

    // This brings us back to the original shape where ALL state was kept track of
    // }, [count, color]);

    // This provides NO pieces of state to monitor. React will not update on ANY state change
    // }, []);
  });

  function handleColorChange() {
    const nextColor = color === "salmon" ? "gold" : "salmon";
    setColor(nextColor);
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleColorChange}>Change Color</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <h1 style={{ color }}>{count}</h1>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Show / Hide the Counter component
      </button>

      {visible && <Counter />}
    </div>
  );
}

export default App;
