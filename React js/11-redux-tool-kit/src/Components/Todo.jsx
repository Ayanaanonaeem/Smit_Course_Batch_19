import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/todo/todoSlice";

const Todo = ({ updateTodoDetails }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <section className="mt-8 w-full">
      {/* Section Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Your Tasks
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Stay focused. Keep moving forward.
          </p>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          {todos.length} {todos.length === 1 ? "Task" : "Tasks"}
        </span>
      </div>

      {/* Todo List */}
      {todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-5 py-12 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">
            <svg
              className="h-7 w-7 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
              />
            </svg>
          </div>

          <h3 className="text-base font-semibold text-gray-200">
            Nothing on your list yet
          </h3>

          <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
            Add your first task above and start making progress.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-gradient-to-r from-gray-900 to-gray-900/70 px-4 py-4 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/25 hover:shadow-xl hover:shadow-indigo-950/20 sm:px-5"
            >
              {/* Task Number */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-sm font-semibold text-gray-400 transition-colors group-hover:border-indigo-400/20 group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Task Text */}
              <div className="min-w-0 flex-1">
                <p className="break-words text-sm font-medium leading-6 text-gray-200 transition-colors group-hover:text-white sm:text-base">
                  {todo.text}
                </p>
                <p className="mt-1 text-xs text-gray-600">Personal task</p>
              </div>

              {/* Delete Button */}
              <button
                type="button"
                onClick={() => dispatch(removeTodo(todo.id))}
                aria-label={`Delete ${todo.text}`}
                title="Delete task"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-transparent text-gray-500 transition-all duration-200 hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-400 active:scale-90"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-200 group-hover:scale-105"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.7}
                    d="M6 7h12m-10 0 .7 12h6.6L16 7M9 7V4h6v3m-5 3v6m4-6v6"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => updateTodoDetails(todo.id, todo.text)}
                title="Edit task"
                aria-label={`Edit ${todo.text}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-3.5 py-2.5 text-sm font-semibold text-indigo-300 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-indigo-500/20 hover:text-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 active:translate-y-0 active:scale-95"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="m16.862 4.487 2.651 2.651M8 16l-1 4 4-1L20.5 9.5a2.121 2.121 0 0 0-3-3L8 16Z"
                  />
                </svg>

                <span>Edit</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Todo;
