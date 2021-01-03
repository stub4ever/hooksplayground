import React, { useState, useEffect } from 'react'; // include useEffect

function App() {
  const [count, setCount]= useState(0)
  
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  useEffect(() => {
    console.log(`I'm inside useEffect function, ${count}`) // Declared each time this function read a new data present current value of the the state variable
  })

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Increase</button>
      <button onClick={handleReset}>Increase</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App;