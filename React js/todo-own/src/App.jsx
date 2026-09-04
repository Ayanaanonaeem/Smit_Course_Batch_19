import React from "react";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([
    { id: Date.now(), todo: "todo" }
  ]);

  const [input, setInput] = useState("");
  const [editid, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (!input) return;

    if (editid !== null) {
      setTodo((prev) =>
        prev.map((val) =>
          val.id == editid
            ? { ...val, todo: input }
            : val
        )
      );

      setInput("");
      setEditId(null);
    } else {
      setTodo((prev) => [
        ...prev,
        {
          id: Date.now(),
          todo: input
        }
      ]);

      setInput("");
    }
  };

  const handleDel = (id) => {
    setTodo((prev) =>
      prev.filter((val) => id !== val.id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">

      <div className="max-w-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            My Todo List
          </h1>

          <p className="text-slate-400 mt-2">
            Stay organized. Get things done.
          </p>
        </div>


        {/* Input Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">

          <div className="flex gap-3">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none placeholder:text-slate-500 focus:border-blue-500 transition"
            />

            <button
              onClick={handleAddTodo}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition"
            >
              {editid !== null ? "Update" : "Add"}
            </button>

          </div>

        </div>


        {/* Todo List */}
        <div className="mt-6 space-y-3">

          {todo.map((val) => (

            <div
              key={val.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4 hover:border-slate-700 transition"
            >

              {/* Todo Text */}
              <p className="text-lg text-slate-200 break-all">
                {val.todo}
              </p>


              {/* Buttons */}
              <div className="flex gap-2 shrink-0">

                <button
                  onClick={() => {
                    setEditId(val.id);
                    setInput(val.todo);
                  }}
                  className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg font-medium transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => {
                    handleDel(val.id);
                  }}
                  className="bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg font-medium transition"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default App;


