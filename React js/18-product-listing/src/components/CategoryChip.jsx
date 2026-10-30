import React from "react";

const CategoryChip = ({ category, chosen, onClick }) => {
  const { name } = category;

  console.log(chosen);

  return (
    <div
      onClick={onClick}
      className={`${chosen ? "bg-purple-300 text-white" : "bg-white text-black"}`}
    >
      <h1 className="border border-purple-700 px-4 hover:bg-purple-300 cursor-pointer">
        {name}
      </h1>
    </div>
  );
};

export default CategoryChip;
