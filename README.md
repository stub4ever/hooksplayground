### Hooks

The official react documentation describes hooks as a way to quote use react features without writing
a class a hook is a function of plain function that hooks into or connects to or enables access to a
special react feature.

### State

useState is a hook that allows us to use the react feature of state without actually making a class
based component. These are hooks these functions have to be invoked in the bodies of functional React Components. 
It will be scoped within the functiona react component. Accepts an initial state like a number or a string or an object or an array. There is no more need to use the bind keyword, 
and there is no more need to use this dot state our state is simply present in a plain variable a regular constant 
from destruction that is available for use anywhere.

// Use array ES6 destruction to assign each of the elements in the returned array to a seperate constant from our state
// initial useState return a Array of 2 elements
// => Array[0] = return the current value of the state (A getter)
// => Array[1] = return state function to update the current value (A setter) + state fuction cannot be invoke + state function declares to store states its a variable that going to remember data
// New approach is to variable state to invoke useState hook multiple times to update one property of that state instead using old way state obect with more properties

### useEffect

The use effect hook accepts a function as an argument. This function is what we call the effect or the side effect. An effect is just a sequence of one or more steps. 
It's a procedure it's a routine that you want the component to execute every time the component renders or re-renders.

If we think back to class based React Components they use effect fact hook acts like a combination of the component did mount component did update and component will unbound lifecycle methods.
You can think of it this way they use effect fact hook runs the function i.e. the effect that we pass to it.

1. Right after the component mounts.
2. or Right after the component updates or re-renders.
3. Right as the component is about to amount or right as it is about to be removed from the dom.

Now the react documentation actually advises us not to think so much about old react concepts like mounting and updating.

Instead they say quote you might find it easier to think that affects simply happen after rendered.
So if the component is changing if something in our visual interface has been altered you can expect
the function that we pass to the use effect hook to run again. It's that symbol.

// The useEffect return runs after the next time that use effect runs => to clear the setup from the previous time it ran 
// and then set it up again by rerunning a line.