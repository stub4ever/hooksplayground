import React, { useState } from 'react';

function App() {
  // New approach is to variable state to invoke useState hook multiple times to update one property of that state instead using old way state obect with more properties

  // add two or more pieces of state on our component as additional properties on our object
  const [state, setState] = useState({ // state is our object of two key value pairs
    city: '',
    country: ''
  })

  // Create a function to handle
  function handleCityChange(event) {
    setState({
      // This function will override the whole current state => it will exclude country to undefined
      // city: event.target.value // set whenever typed value to city obj

      // Take the old values of our object to expand to get all those property value parents, and then simply overwrite the one that we want to overwrite with the new values.
      ...state, city: event.target.value // It takes our original state obj, it's gonna take the current properties, going to expand them, and then take city and overwrite, it kept other unchanged properties
    })
  }

  function handleCountryChange(event) {
    setState({
      ...state, country: event.target.value
    })
  }

  return(
    <form>
      <div>
        <input
          type="text"
          placeholder="City" 
          value={state.city}
          onChange={handleCityChange}
          />
      </div>
      
      <div>
        <input
          type="text"
          placeholder="Country"
          value={state.country}
          onChange={handleCountryChange}
        />
      </div>

      <div>
        You live in { `${state.city}, ${state.country}` }
      </div>
    </form>
  )
}

export default App;