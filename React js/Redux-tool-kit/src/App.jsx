import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementByNum} from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num,setNum]=useState(0)

  return (
    <>
      <div>
        <h1 className="text-2xl mx-3">{count}</h1>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
        <button
          className="border-purple-400 bg-purple-300 px-3 border mx-3"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border-purple-400 bg-purple-300 px-3 border mx-3"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="border-purple-400 bg-purple-300 px-3 border mx-3"
          onClick={() => dispatch(incrementByNum(Number(num)))}
        >
          Increment by {num}
        </button>
      </div>
    </>
  );
}

export default App;
