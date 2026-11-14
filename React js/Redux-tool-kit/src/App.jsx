import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByNum } from "./redux/features/counterSlice";

const App = () => {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);
  return (
    <div>
      <div>
        <h1 className="m-3">{count}</h1>
        <input
          className="m-3"
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-purple-300 border-2 border-black px-4 mx-3"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-purple-300 border-2 border-black px-4"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByNum(Number(num)))}
          className="bg-purple-300 border-2 border-black px-4 mx-3"
        >
          Increment by Num
        </button>
      </div>
    </div>
  );
};

export default App;
