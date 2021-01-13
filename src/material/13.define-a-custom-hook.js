import React, { useState, useEffect } from "react";

function App() {
  // const [userText, setUserText] = useState("");
  const userText = useKeyPress("Hello there..."); // passed default value

  // function handleUserKeyPress(event) {
  //   const { key, keyCode } = event;
  //   if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
  //     setUserText(`${userText}${key}`);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("keydown", handleUserKeyPress); // don't forget to return unmount after event is invoke => else the function will be store on the dom for each keydown input by the user
  //   return () => {
  //     window.removeEventListener("keydown", handleUserKeyPress); // unmount previous event after new event is invoke
  //   };
  // });

  return (
    <div>
      <h1>Feel free to type! Your text will show up below!</h1>
      <blockquote>{userText}</blockquote>
    </div>
  );
}

// Naming custom hook always start with "use"
// Custom hooks give you the abillity to reuse to multiple components
function useKeyPress(startingValue) {
  const [userText, setUserText] = useState(startingValue);

  function handleUserKeyPress(event) {
    const { key, keyCode } = event;
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  return userText;
}

export default App;
