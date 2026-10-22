import React from "react";

const Input = ({todos,onchange,value}) => {
    console.log(todos);
    
  return (
    <div className="flex flex-col ">
      <div>
        <input
          className="bg-amber-50 outline-0 border-1 mx-3"
          value={value}
          onChange={onchange}
          type="text"
        />
        <button className="bg-pink-400 border-3 hover:bg-pink-500 text-white font-bold px-3">
          Add Todo
        </button>
      </div>
      {todos.map((val, idx) => (
        <div className="flex flex-row" key={val.id}>
          <h1 className="w-32 h-7">{val.todo}</h1>
          <button className="bg-red-500 py-2 text-white ">Delete</button>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default Input;
