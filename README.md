### Hooks

The official react documentation describes hooks as a way to quote use react features without writing
a class a hook is a function of plain function that hooks into or connects to or enables access to a
special react feature.

### State

useState is a hook that allows us to use the react feature of state without actually making a class
based component. These are hooks these functions have to be invoked in the bodies of functional React Components. 
It will be scoped within the functiona react component. With this approach there is no more need to use the bind keyword, 
and there is no more need to use this dot state our state is simply present in a plain variable a regular constant 
from destruction that is available for use anywhere.

// Use array ES6 destruction to assign each of the elements in the returned array to a seperate constant from our state
// initial useState return a Array of 2 elements
// => Array[0] = return the current value of the state (A getter)
// => Array[1] = return state function to update the current value (A setter) + state fuction cannot be invoke + state function declares to store states its a variable that going to remember data
// New approach is to variable state to invoke useState hook multiple times to update one property of that state instead using old way state obect with more properties
