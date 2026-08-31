import React from "react";

const Function = () => {
//   const btnClicked = () => {
//     console.log("Hello");
//   };
  return (
    <>
      <div 
        className="bg-gray-400 h-400"
        onWheel={(e) => {
          console.log(e);
        }}
      >
        Click me
      </div>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </>
  );
};

export default Function;
