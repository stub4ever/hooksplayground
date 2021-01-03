import React, { useState } from 'react';

function App() {
  // add two or more pieces of state on our component as additional properties on our object
  // const [state, setState] = useState({ 
  //   city: '',
  //   country: ''
  // })
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  // function handleCityChange(event) {
  //   // setState({
  //   //   ...state, city: event.target.value 
  //   // })
  //   setCity(event.target.value)
  // }

  const handleCityChange = (event) => setCity(event.target.value)

  // function handleCountryChange(event) {
  //   // setState({
  //   //   ...state, country: event.target.value
  //   // })
  //   setCountry(event.target.value)
  // }

  const handleCountryChange = (event) => setCountry(event.target.value)

  return(
    <form>
      <div>
        {/* <input
          type="text"
          placeholder="City" 
          value={state.city}
          onChange={handleCityChange}
          /> */}
        <input
          type="text"
          placeholder="City" 
          value={city}
          onChange={handleCityChange}
          />
      </div>
      
      <div>
        {/* <input
          type="text"
          placeholder="Country"
          value={state.country}
          onChange={handleCountryChange}
        /> */}
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={handleCountryChange}
        />
      </div>

      <div>
        {/* You live in { `${state.city}, ${state.country}` } */}
        You live in { `${city}, ${country}` }
      </div>
    </form>
  )
}

export default App;