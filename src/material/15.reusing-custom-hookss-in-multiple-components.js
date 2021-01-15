import React, { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  // export public object
  return {
    value,
    onChange,
  };
}

function App() {
  // const { value: name, onChange: handleNameChange } = useInput();
  // const { value: surname, onChange: handleSurNameChange } = useInput();
  // const { value: age, onChange: handleAgeChange } = useInput();
  return (
    <form>
      {/* <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      /> */}
      <input type="text" placeholder="Name" {...useInput()} />
      {/* Destruction goes to object properties as prop */}

      {/* <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={handleSurNameChange}
      /> */}
      <input type="text" placeholder="Surname" {...useInput()} />
      {/* 
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={handleAgeChange}
      /> */}
      <input type="number" placeholder="Age" {...useInput()} />
    </form>
  );
}

export default App;
