
import React from 'react'

const CategoryChip = ({ val, chosen, onClick }) => {
  const { name } = val

  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2.5 rounded-xl border text-sm font-semibold capitalize
        cursor-pointer transition-all duration-300 ease-in-out
        ${
          chosen
            ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-200"
            : "bg-white text-gray-600 border-purple-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-400 hover:-translate-y-0.5"
        }
      `}
    >
      {name}
    </button>
  )
}

export default CategoryChip
