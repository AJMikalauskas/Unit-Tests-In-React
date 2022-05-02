//import logo from './logo.svg';
import Greeting from "./components/Greeting";
import './App.css';
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      {/* The App.test.js file will now fail because we replace the JSX with just the <Greeting/> component */}
      <Greeting/>
      <Async/>
    </div>
  );
}

export default App;
