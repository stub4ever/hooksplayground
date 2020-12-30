import './App.css';

// Stateless Functional Component
const Box = (props) => {
  return ( 
    <div className="box">
      <h1>{props.text}</h1>
    </div>

  );
}
const App = () => {
  return (
    <Box text="This is an box"/>
  );
}

export default App;
