
import React from "react";

const Filter = ({ filter, setFilter }) => {
  const filters = ["All", "Completed", "Uncompleted"];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((item) => {
        const active = filter === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition duration-200 ${
              active
                ? "border-violet-400/30 bg-violet-500/15 text-violet-300 shadow-sm shadow-violet-500/5"
                : "border-white/[0.07] bg-white/[0.025] text-zinc-500 hover:border-white/15 hover:text-zinc-200"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
