import { useState } from 'react';

const App = () => {

  // Use array ES6 destruction to assign each of the elements in the returned array to a seperate constant
  const [activated, setActivated] = useState(false)
  const buttonText = activated ? 'active' : 'inactive'

  // Apply arrow function to declare
  const onClick = () =>  setActivated(!activated) // invoke these setActivated function going to update to inverse boolean

  return (
    <>
      {/* <button onClick={() => setActivated(!activated)}>  */}
      <button onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
}

export default App;
