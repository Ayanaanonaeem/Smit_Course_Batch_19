import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const Addvalue = () => {
    if (counter >= 20) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const Removevalue = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <p>Counter {counter}</p>
        <button onClick={Addvalue}>Add</button>
        <button onClick={Removevalue}>Remove</button>
      </div>
    </>
  );
}

export default App;
// react rerender tb krega component ko jb use pta chalge ke kahin state change huwi hai
// aur sbse pehle usfunction ya component ki line complete krega aur phr rerender krega
