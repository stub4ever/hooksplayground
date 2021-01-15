import React, { useState, useEffect } from "react";

// custom hook can be reuse
// function useCounter() {
// Set parameter to use to set the inital value
function useCounter(startingValue) {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(startingValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // return a object
  return {
    count,
    increment,
    decrement,
  };
}

function Display(props) {
  const { count, increment, decrement } = useCounter(props.start);

  return (
    <div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <h1>{count}</h1>
    </div>
  );
}

function FancyDisplay(props) {
  const { count, increment, decrement } = useCounter(props.start);

  return (
    <section>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <h2>{count}</h2>
    </section>
  );
}

function App() {
  // const { count, increment, decrement } = useCounter(10);
  // return (
  //   <div>
  //     <button onClick={increment}>Increase</button>
  //     <button onClick={decrement}>decrease</button>
  //     <h1>{count}</h1>
  //   </div>
  // );
  return (
    <div>
      <Display start={10} />
      <Display start={20} />
      <FancyDisplay start={30} />
    </div>
  );
}

export default App;
