// Testing User interation and state, change what text is showing based on a button click(changing state) & test
import { useState } from "react";
// Testing Connected components with Output.js
import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangedText] = useState(true);

    function changeTextHandler() {
        setChangedText(false);
    }
  return (
    <div> 
      <h2>Hello World!</h2>
      {/* {changedText && <p>It's good to see you!</p> }
      {!changedText && <p>Changed!</p>} */}
      {/* {changedText ? <p>It's good to see you!</p> : <p>Changed!</p>} */}

      {/* This could be considered an integration test by replacing the <p> tags with <Output> tags. This testing of connected components
      causes no errors and test run the same even after I changed the JSX in this file. May need additional testing if Output was more complicated */}
      {changedText ? <Output>It's good to see you!</Output> : <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
