import React, { createContext, useState, useContext } from "react";

// https://reactjs.org/docs/context.html#contextconsumer
const NameContext = createContext();

function App() {
  const [name, setName] = useState("Billy Shakespeare"); // By passed state from child to all way down of the three, to receive this state

  return (
    // passing available state to value to the provider
    <NameContext.Provider value={name}>
      <Child />
    </NameContext.Provider>
  );
}

function Child() {
  return (
    <section className="child">
      <Grandchild />
    </section>
  );
}

function Grandchild() {
  return (
    <div className="grandchild">
      <Button />
    </div>
  );
}

function Button() {
  const name = useContext(NameContext);

  return <button>{name}</button>;
}

export default App;
