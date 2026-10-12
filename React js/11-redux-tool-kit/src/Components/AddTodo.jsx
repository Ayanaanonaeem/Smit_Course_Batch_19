
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,updateTodo } from "../Features/todo/todoSlice";


const AddTodo = ({selectedTodo,setSelectedTodo}) => {
 
  
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [isTodoEditable,setIsTodoEditable]=useState(false)
  
  
  
useEffect(() => {
  if (selectedTodo) {
    setIsTodoEditable(true)
    setInput(selectedTodo.text);
  }
}, [selectedTodo]);



  
  const addTodoHandler = (e) => {
    e.preventDefault();
  
   if (!input.trim()) return;

if (selectedTodo) {
  dispatch(
    updateTodo({
      id: selectedTodo.id,
      text: input.trim(),
    })
   
  )
  ;
   setIsTodoEditable(false)
  setSelectedTodo(null);
} else {
  dispatch(addTodo(input.trim()));
}

setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-5"
    >
      <label
        htmlFor="todo-input"
        className="mb-3 block text-sm font-semibold tracking-wide text-gray-300"
      >
        Create a new task
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="group flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-gray-950/70 px-4 transition-all duration-300 focus-within:border-indigo-500/70 focus-within:ring-4 focus-within:ring-indigo-500/10">
          <svg
            className="h-5 w-5 shrink-0 text-gray-500 transition-colors group-focus-within:text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M12 5v14m-7-7h14"
            />
          </svg>

          <input
            id="todo-input"
            type="text"
            placeholder="What needs to get done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-gray-600 sm:text-base"
          />

          <span className="hidden rounded-md border border-white/10 px-2 py-1 text-xs text-gray-500 sm:block">
            Task
          </span>
        </div>

        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 active:translate-y-0 active:scale-[0.98]"
        >
          <span>{isTodoEditable?"update":"AddTodo"}</span>

          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14m-7-7h14"
            />
          </svg>
        </button>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Small steps every day lead to big results.
      </p>
    </form>
  );
};

export default AddTodo;
