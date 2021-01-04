import React, { useState, useEffect } from "react"; // include useEffect

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  // How we can limit the use effect hook to run only when a component mounts or on Mounts.
  // And prevent re renders from triggering a use effect hook from running.
  // All we have to do is pass an empty array as the second argument to the use.

  useEffect(() => {
    // Only run upon mounting, when component first appears or when it first renders on the screen
    // It returned the first time that used effect ran when the component was first mounted
    // This is still being held in memory reactive still keeping track of this, but it's not actually executing
    console.log(
      `I'm inside useEffect function, I will only run upon mouting ${count}`
    );

    return () => {
      // Return function this tear down function is whenever we complete with on mounting
      // It will also get the value that is initial first moundated  => it doesn't re-render
      console.log(
        `I'm removing anything that is set above. the last count was ${count}, but now , I will only run when component is being unmounted`
      );
    };
  }, []); // add a array as our second agrument

  return (
    <div>
      {/* when you click the useEffect is not running the Effect => runs the compoment that was first mounted */}
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
      {/* when you toggle mounted / umounted => applying it once without effect */}
      <button onClick={() => setVisible(!visible)}>
        Show / hide the Counter component
      </button>
      {visible && <Counter />}
    </div>
  );
}

export default App;
