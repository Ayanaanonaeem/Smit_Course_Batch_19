import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const handlebutton = () => {
    if (!title.trim() || !detail.trim()) return;

    const copytask = [...task];
    copytask.push({ title, detail });

    setTask(copytask);
    setTitle("");
    setDetail("");
  };

  const handleDelete = (idx) => {
    const copytask = [...task];

    copytask.splice(idx, 1);

    setTask(copytask);
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white px-5 py-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        📝 My Notes
      </h1>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlebutton();
        }}
        className="w-full max-w-xl mx-auto bg-zinc-900 p-5 md:p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-5">Write a new note</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter note title..."
          className="w-full p-4 mb-4 rounded-xl bg-zinc-800 border border-zinc-700 outline-none focus:border-amber-700"
        />

        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="Enter note details..."
          className="w-full h-32 p-4 rounded-xl bg-zinc-800 border border-zinc-700 outline-none resize-none focus:border-amber-700"
        />

        <button
          type="submit"
          className="w-full mt-4 bg-amber-800 hover:bg-amber-700 transition p-3 rounded-xl font-semibold"
        >
          + Add Note
        </button>
      </form>

      {/* Notes */}
      <div className="max-w-6xl mx-auto mt-10">
        {task.length === 0 ? (
          <p className="text-center text-zinc-500">
            No notes yet. Add your first note!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {task.map((val, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-amber-800 transition duration-300"
              >
                <h1 className="text-xl font-bold break-words">{val.title}</h1>

                <p className="text-zinc-400 mt-3 text-sm leading-6 break-words">
                  {val.detail}
                </p>
                <button
                  onClick={() => handleDelete(idx)}
                  className="mt-5 w-full flex items-center justify-center gap-2 
             border border-red-500/40 text-red-400 
             hover:bg-red-500 hover:text-white 
             transition duration-300 
             py-2 rounded-xl text-sm font-semibold"
                >
                  🗑️ Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
