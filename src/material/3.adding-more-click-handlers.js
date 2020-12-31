import React, { useState } from 'react';

function App() {
  const [count, setCount]= useState(0)
  
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

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